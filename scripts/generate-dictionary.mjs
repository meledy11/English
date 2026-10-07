#!/usr/bin/env node
/**
 * generate-dictionary.mjs
 * Генератор словаря English Cards (EN → RU)
 * 
 * Оптимизировано:
 *   • Потоковая обработка (readline) — не жрёт память
 *   • Ранний выход при достижении MAX_WORDS
 *   • Автоматическое прекращение загрузки
 *   • Работает даже на 500+ МБ файлах
 */

import { writeFileSync } from 'fs';
import { get } from 'https';
import { get as getHttp } from 'http';
import { URL } from 'url';

// ═══════════════════════════════════════════════
// НАСТРОЙКИ
// ═══════════════════════════════════════════════
const OUTPUT_PATH = './dictionary.js';
const MAX_WORDS = 3000;
const MIN_WORD_LENGTH = 2;
const MAX_WORD_LENGTH = 25;
const FETCH_TIMEOUT_MS = 90000;
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 2000;
const MAX_DOWNLOAD_MB = 100;  // ← не качаем больше 100 МБ

const POS_EMOJI = {
    noun: '📦', verb: '⚡', adjective: '🎨', adverb: '💨',
    pronoun: '👤', preposition: '🧭', conjunction: '🔗',
    interjection: '😲', numeral: '🔢', particle: '✨',
    article: '📎', determiner: '📎', phrase: '💬'
};

// ═══════════════════════════════════════════════
// ИСТОЧНИКИ (в порядке приоритета)
// ═══════════════════════════════════════════════
const SOURCES = [
    // ─── 1: HuggingFace TSV (маленький, ~5 МБ, 56к пар) ───
    {
        name: 'HuggingFace EN-RU statistical dict (TSV, ~5 МБ)',
        url: 'https://huggingface.co/datasets/KvaytG/en-ru-statistical-dict-20m-corpus/resolve/main/en-ru-dict.tsv',
        type: 'tsv',
        streaming: true
    },
    // ─── 2: FreeDict TEI (небольшой) ───
    {
        name: 'FreeDict English-Russian (TEI XML)',
        url: 'https://raw.githubusercontent.com/freedict/fd-dictionaries/master/eng-rus/eng-rus.tei',
        type: 'tei',
        streaming: false
    },
    // ─── 3: kaikki.org (большой 500+ МБ, читаем потоково) ───
    {
        name: 'kaikki.org Russian dictionary (JSONL, потоково)',
        url: 'https://kaikki.org/dictionary/Russian/kaikki.org-dictionary-Russian.jsonl',
        type: 'jsonl-stream',
        streaming: true
    }
];

// ═══════════════════════════════════════════════
// ЗАГРУЗКА + ПОСТРОЧНАЯ ОБРАБОТКА
// ═══════════════════════════════════════════════
function downloadAndProcess(url, onLine, timeoutMs = FETCH_TIMEOUT_MS, redirectsLeft = 5) {
    return new Promise((resolve, reject) => {
        if (redirectsLeft <= 0) return reject(new Error('Слишком много редиректов'));

        let parsed;
        try { parsed = new URL(url); } catch { return reject(new Error('Некорректный URL: ' + url)); }

        const lib = parsed.protocol === 'http:' ? getHttp : get;
        const req = lib(url, { timeout: timeoutMs }, (res) => {
            // Редиректы
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redirectUrl = new URL(res.headers.location, url).href;
                res.resume();
                return resolve(downloadAndProcess(redirectUrl, onLine, timeoutMs, redirectsLeft - 1));
            }
            if (res.statusCode !== 200) {
                res.resume();
                return reject(new Error(`HTTP ${res.statusCode}`));
            }

            res.setEncoding('utf8');

            let buffer = '';           // буфер незавершённой строки
            let bytesReceived = 0;
            let linesProcessed = 0;
            const maxBytes = MAX_DOWNLOAD_MB * 1024 * 1024;

            res.on('data', (chunk) => {
                bytesReceived += Buffer.byteLength(chunk, 'utf8');

                // Проверка лимита размера
                if (bytesReceived > maxBytes) {
                    console.log(`      ⚠️  Достигнут лимит ${MAX_DOWNLOAD_MB} МБ — прекращаем загрузку`);
                    req.destroy();
                    return resolve();
                }

                // Прогресс
                if (linesProcessed % 5000 === 0 && linesProcessed > 0) {
                    process.stdout.write(`      Обработано: ${linesProcessed} строк (${(bytesReceived / 1024 / 1024).toFixed(0)} МБ)\r`);
                }

                buffer += chunk;

                // Обрабатываем только полные строки (до последнего \n)
                let newlineIdx;
                while ((newlineIdx = buffer.indexOf('\n')) !== -1) {
                    const line = buffer.slice(0, newlineIdx);
                    buffer = buffer.slice(newlineIdx + 1);
                    linesProcessed++;

                    // Обработка строки через callback
                    const stop = onLine(line);
                    if (stop === true) {
                        req.destroy();
                        return resolve();
                    }
                }
            });

            res.on('end', () => {
                // Обработать остаток буфера (последняя строка без \n)
                if (buffer.trim()) {
                    onLine(buffer);
                }
                process.stdout.write(' '.repeat(70) + '\r');
                resolve();
            });
        });

        req.on('timeout', () => req.destroy(new Error('Таймаут загрузки')));
        req.on('error', (err) => {
            // Игнорируем ошибку "destroy" — это наш контролируемый abort
            if (err.message === 'socket hang up' || err.code === 'ECONNRESET') {
                return resolve();
            }
            reject(err);
        });
    });
}

// ═══════════════════════════════════════════════
// ОБРАБОТЧИКИ СТРОК ПО ТИПУ
// ═══════════════════════════════════════════════
function makeLineHandler(type, addWord) {
    if (type === 'tsv') {
        return (line) => {
            if (!line.trim()) return false;
            const parts = line.split('\t');
            if (parts.length < 2) return false;
            const en = parts[0].trim();
            const ru = parts[1].trim();
            if (!en || !ru) return false;
            return addWord(ru, en, 'noun');
        };
    }

    if (type === 'jsonl-stream') {
        let parsed = 0, failed = 0, withTr = 0;
        return (line) => {
            if (!line.trim()) return false;
            try {
                const obj = JSON.parse(line);
                parsed++;
                if (!obj.word) return false;

                const translations = [];
                for (const sense of (obj.senses || [])) {
                    for (const tr of (sense.translations || [])) {
                        const lang = (tr.lang || '').toLowerCase();
                        if ((lang === 'english' || lang === 'en') && tr.word) {
                            translations.push(String(tr.word).trim());
                        }
                    }
                }
                if (translations.length === 0) return false;
                withTr++;

                if (parsed % 5000 === 0) {
                    process.stdout.write(`      parsed=${parsed}, failed=${failed}, with-translations=${withTr}\r`);
                }

                return addWord(String(obj.word).trim(), translations[0], normalizePos(obj.pos));
            } catch {
                failed++;
                return false;
            }
        };
    }

    return () => false;
}

// ═══════════════════════════════════════════════
// ВАЛИДАЦИЯ
// ═══════════════════════════════════════════════
function isValidWord(ru, en) {
    if (!ru || !en) return false;
    if (ru.length < MIN_WORD_LENGTH || ru.length > MAX_WORD_LENGTH) return false;
    if (en.length < MIN_WORD_LENGTH || en.length > MAX_WORD_LENGTH) return false;
    if (!/[а-яА-ЯёЁ]/.test(ru)) return false;
    if (/[а-яА-ЯёЁ]/.test(en)) return false;
    if (ru.toLowerCase() === en.toLowerCase()) return false;
    if (/^\d+$/.test(ru) || /^\d+$/.test(en)) return false;
    return true;
}

function normalizePos(pos) {
    if (!pos) return 'noun';
    const p = String(pos).toLowerCase();
    if (p.includes('verb')) return 'verb';
    if (p.includes('adj')) return 'adjective';
    if (p.includes('adv')) return 'adverb';
    if (p.includes('pron')) return 'pronoun';
    if (p.includes('prep')) return 'preposition';
    if (p.includes('conj')) return 'conjunction';
    if (p.includes('interj')) return 'interjection';
    if (p.includes('num')) return 'numeral';
    if (p.includes('art')) return 'article';
    return 'noun';
}

// ═══════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════
async function main() {
    console.log('');
    console.log('╔══════════════════════════════════════════╗');
    console.log('║  🌐 Генератор словаря English Cards     ║');
    console.log('╚══════════════════════════════════════════╝');
    console.log('');

    const seen = new Set();
    const dictionary = [];
    let sourceName = '';

    // Функция добавления слова (возвращает true, если достигли лимита)
    function addWord(ru, en, pos) {
        if (dictionary.length >= MAX_WORDS) return true;

        ru = (ru || '').trim();
        en = (en || '').trim();
        if (!isValidWord(ru, en)) return false;

        const cleanEn = en.split(/[,;]/)[0].trim();
        const key = `${cleanEn.toLowerCase()}|${ru.toLowerCase()}`;
        if (seen.has(key)) return false;
        seen.add(key);

        dictionary.push({
            id: dictionary.length + 1,
            eng: cleanEn,
            ru: ru,
            tr: '',
            emoji: POS_EMOJI[pos] || '📖',
            pos: pos || 'noun',
            ex1: '',
            tr1: ''
        });

        // Прогресс
        if (dictionary.length % 500 === 0) {
            process.stdout.write(`      ✓ Слов: ${dictionary.length}\r`);
        }

        return dictionary.length >= MAX_WORDS;
    }

    // Проходим по источникам
    for (const source of SOURCES) {
        console.log(`📡 Источник: ${source.name}`);

        if (dictionary.length >= MAX_WORDS) break;

        try {
            if (source.type === 'tei') {
                // TEI — не потоково (маленький файл)
                const text = await downloadFull(source.url);
                const result = parseTei(text);
                for (const w of result) {
                    const ru = w.word;
                    const en = w.translations.find(t => t.lang === 'en')?.text || '';
                    if (addWord(ru, en, w.pos)) break;
                }
            } else {
                // Потоковая обработка
                const handler = makeLineHandler(source.type, addWord);
                await downloadAndProcess(source.url, handler);
            }

            if (dictionary.length >= 50) {
                sourceName = source.name;
                console.log(`   ✅ Успех! Слов: ${dictionary.length}\n`);
                break;
            } else {
                console.warn(`   ⚠️  Только ${dictionary.length} слов, пробуем следующий\n`);
            }
        } catch (err) {
            console.warn(`   ❌ ${err.message}\n`);
        }
    }

    if (dictionary.length === 0) {
        console.error('❌ Ни один источник не дал результата\n');
        process.exit(1);
    }

    // Сортировка и переиндексация
    dictionary.sort((a, b) => a.eng.localeCompare(b.eng));
    dictionary.forEach((w, i) => { w.id = i + 1; });

    console.log('📝 Запись dictionary.js...');

    const header = `/**
 * Словарь English Cards — автогенерация
 * 
 * Сгенерировано: ${new Date().toISOString()}
 * Источник:      ${sourceName}
 * Записей:       ${dictionary.length}
 * 
 * НЕ РЕДАКТИРУЙ ВРУЧНУЮ — при следующем запуске
 * generate-dictionary.mjs файл будет перезаписан.
 */

`;

    const body = `const dictionary = ${JSON.stringify(dictionary, null, 2)};\n`;
    writeFileSync(OUTPUT_PATH, header + body, 'utf-8');

    const sizeKb = (Buffer.byteLength(header + body, 'utf-8') / 1024).toFixed(1);

    console.log('');
    console.log('╔══════════════════════════════════════════╗');
    console.log('║  ✅ Готово!                              ║');
    console.log('╚══════════════════════════════════════════╝');
    console.log(`   📁 Файл:    ${OUTPUT_PATH}`);
    console.log(`   📊 Слов:    ${dictionary.length}`);
    console.log(`   💾 Размер:  ${sizeKb} KB`);
    console.log('');
    console.log('📌 Первые 3 слова:');
    dictionary.slice(0, 3).forEach(w => {
        console.log(`   ${w.emoji} ${w.eng} — ${w.ru} [${w.pos}]`);
    });
    console.log('');
}

// Вспомогательная: скачать полностью (для маленьких файлов)
function downloadFull(url, timeoutMs = FETCH_TIMEOUT_MS, redirectsLeft = 5) {
    return new Promise((resolve, reject) => {
        if (redirectsLeft <= 0) return reject(new Error('Слишком много редиректов'));
        let parsed;
        try { parsed = new URL(url); } catch { return reject(new Error('Bad URL')); }

        const lib = parsed.protocol === 'http:' ? getHttp : get;
        const req = lib(url, { timeout: timeoutMs }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redirectUrl = new URL(res.headers.location, url).href;
                res.resume();
                return resolve(downloadFull(redirectUrl, timeoutMs, redirectsLeft - 1));
            }
            if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode}`)); }

            res.setEncoding('utf8');
            let data = '';
            res.on('data', (c) => { data += c; });
            res.on('end', () => {
                if (data.charCodeAt(0) === 0xFEFF) data = data.slice(1);
                resolve(data);
            });
        });
        req.on('timeout', () => req.destroy(new Error('Timeout')));
        req.on('error', reject);
    });
}

// Парсер TEI (для маленького FreeDict)
function parseTei(text) {
    const result = [];
    const entries = text.split(/<entry\b/);
    for (const entry of entries) {
        const enMatch = entry.match(/<orth[^>]*>([^<]+)<\/orth>/);
        if (!enMatch) continue;
        const en = enMatch[1].trim();
        const ruMatches = [...entry.matchAll(/<quote[^>]*>([^<]+)<\/quote>/g)];
        if (ruMatches.length === 0) continue;
        const ru = ruMatches[0][1].trim();
        if (!/[а-яА-ЯёЁ]/.test(ru)) continue;
        result.push({
            word: ru,
            pos: 'noun',
            translations: [{ lang: 'en', text: en }]
        });
    }
    console.log(`      TEI: parsed=${result.length}`);
    return result;
}

// ═══════════════════════════════════════════════
// ЗАПУСК
// ═══════════════════════════════════════════════
main().catch(err => {
    console.error('\n💥 Ошибка:', err.message);
    if (process.env.DEBUG) console.error(err.stack);
    process.exit(1);
});
