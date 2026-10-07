#!/usr/bin/env node
/**
 * generate-dictionary.mjs
 * Генератор словаря English Cards (EN → RU)
 * 
 * Проверенные источники:
 *   • kaikki.org (Wiktextract JSONL)
 *   • HuggingFace statistical dictionary (TSV)
 *   • FreeDict (TEI XML)
 * 
 * Запуск:  node generate-dictionary.mjs
 * Результат:  dictionary.js
 */

import { writeFileSync } from 'fs';
import { get } from 'https';
import { get as getHttp } from 'http';
import { URL } from 'url';

// ═══════════════════════════════════════════════
// НАСТРОЙКИ
// ═══════════════════════════════════════════════
const OUTPUT_PATH = './dictionary.js';
const MAX_WORDS = 5000;
const MIN_WORD_LENGTH = 2;
const MAX_WORD_LENGTH = 25;
const FETCH_TIMEOUT_MS = 60000;
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 2000;

const POS_EMOJI = {
    noun: '📦', verb: '⚡', adjective: '🎨', adverb: '💨',
    pronoun: '👤', preposition: '🧭', conjunction: '🔗',
    interjection: '😲', numeral: '🔢', particle: '✨',
    article: '📎', determiner: '📎', phrase: '💬'
};

// ═══════════════════════════════════════════════
// РАБОЧИЕ ИСТОЧНИКИ
// ═══════════════════════════════════════════════
const SOURCES = [
    {
        name: 'HuggingFace EN-RU statistical (TSV)',
        url: 'https://huggingface.co/datasets/KvaytG/en-ru-statistical-dict-20m-corpus/resolve/main/en-ru-dict.tsv',
        type: 'tsv',
        parse: parseTsv
    },
    {
        name: 'kaikki.org Russian dictionary (JSONL)',
        url: 'https://kaikki.org/dictionary/Russian/kaikki.org-dictionary-Russian.jsonl',
        type: 'jsonl',
        parse: parseKaikkiRu
    },
    {
        name: 'kaikki.org English dictionary (JSONL)',
        url: 'https://kaikki.org/dictionary/English/kaikki.org-dictionary-English.jsonl',
        type: 'jsonl',
        parse: parseKaikkiEn
    },
    {
        name: 'FreeDict English-Russian (TEI)',
        url: 'https://raw.githubusercontent.com/freedict/fd-dictionaries/master/eng-rus/eng-rus.tei',
        type: 'tei',
        parse: parseTei
    }
];

// ═══════════════════════════════════════════════
// ПАРСЕРЫ
// ═══════════════════════════════════════════════

/**
 * TSV формат: english_word \t russian_word \t count \t probability
 */
function parseTsv(text) {
    const lines = text.split('\n');
    const result = [];
    for (const line of lines) {
        if (!line.trim()) continue;
        const parts = line.split('\t');
        if (parts.length < 2) continue;
        const en = parts[0].trim();
        const ru = parts[1].trim();
        if (!en || !ru) continue;
        result.push({
            word: ru,
            pos: 'noun',
            translations: [{ lang: 'en', text: en }]
        });
    }
    console.log(`      Распарсено TSV: ${result.length}`);
    return result;
}

/**
 * kaikki.org JSONL — русские слова с английскими переводами
 */
function parseKaikkiRu(text) {
    const lines = text.split('\n');
    const result = [];
    let parsed = 0, failed = 0;

    for (const line of lines) {
        if (!line.trim()) continue;
        try {
            const obj = JSON.parse(line);
            parsed++;
            if (!obj.word) continue;

            const translations = [];
            const senses = obj.senses || [];
            for (const sense of senses) {
                for (const tr of (sense.translations || [])) {
                    const lang = (tr.lang || '').toLowerCase();
                    if ((lang === 'english' || lang === 'en') && tr.word) {
                        translations.push({ lang: 'en', text: String(tr.word).trim() });
                    }
                }
            }
            if (translations.length === 0) continue;

            result.push({
                word: String(obj.word).trim(),
                pos: normalizePos(obj.pos),
                translations
            });
        } catch { failed++; }
    }

    console.log(`      JSONL: parsed=${parsed}, failed=${failed}, with-translations=${result.length}`);
    return result;
}

/**
 * kaikki.org English JSONL — английские слова с русскими переводами
 */
function parseKaikkiEn(text) {
    const lines = text.split('\n');
    const result = [];
    let parsed = 0;

    for (const line of lines) {
        if (!line.trim()) continue;
        try {
            const obj = JSON.parse(line);
            parsed++;
            if (!obj.word) continue;

            const ruTranslations = [];
            const senses = obj.senses || [];
            for (const sense of senses) {
                for (const tr of (sense.translations || [])) {
                    const lang = (tr.lang || '').toLowerCase();
                    if ((lang === 'russian' || lang === 'ru') && tr.word) {
                        ruTranslations.push(String(tr.word).trim());
                    }
                }
            }
            if (ruTranslations.length === 0) continue;

            // Меняем местами: русское слово + английский перевод
            result.push({
                word: ruTranslations[0],
                pos: normalizePos(obj.pos),
                translations: [{ lang: 'en', text: String(obj.word).trim() }]
            });
        } catch { /* skip */ }
    }

    console.log(`      JSONL: parsed=${parsed}, with-ru-translations=${result.length}`);
    return result;
}

/**
 * TEI XML — FreeDict
 */
function parseTei(text) {
    const result = [];
    const entries = text.split(/<entry\b/);

    for (const entry of entries) {
        const enMatch = entry.match(/<orth[^>]*>([^<]+)<\/orth>/);
        if (!enMatch) continue;
        const en = enMatch[1].trim();

        const ruMatches = entry.matchAll(/<quote[^>]*>([^<]+)<\/quote>/g);
        const translations = [];
        for (const m of ruMatches) {
            const ru = m[1].trim();
            if (ru && /[а-яА-ЯёЁ]/.test(ru)) {
                translations.push({ lang: 'ru', text: ru });
            }
        }
        if (translations.length === 0) continue;

        result.push({
            word: translations[0].text,
            pos: 'noun',
            translations: [{ lang: 'en', text: en }]
        });
    }

    console.log(`      TEI: parsed=${result.length}`);
    return result;
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
    if (p.includes('num') || p.includes('number')) return 'numeral';
    if (p.includes('art')) return 'article';
    return 'noun';
}

// ═══════════════════════════════════════════════
// ЗАГРУЗКА
// ═══════════════════════════════════════════════
function download(url, timeoutMs = FETCH_TIMEOUT_MS, redirectsLeft = 5) {
    return new Promise((resolve, reject) => {
        if (redirectsLeft <= 0) return reject(new Error('Слишком много редиректов'));

        let parsed;
        try { parsed = new URL(url); } catch { return reject(new Error('Некорректный URL: ' + url)); }

        const lib = parsed.protocol === 'http:' ? getHttp : get;
        const req = lib(url, { timeout: timeoutMs }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redirectUrl = new URL(res.headers.location, url).href;
                res.resume();
                return resolve(download(redirectUrl, timeoutMs, redirectsLeft - 1));
            }
            if (res.statusCode !== 200) {
                res.resume();
                return reject(new Error(`HTTP ${res.statusCode}`));
            }

            res.setEncoding('utf8');
            let data = '';
            let bytes = 0;
            res.on('data', (chunk) => {
                data += chunk;
                bytes += chunk.length;
                if (bytes % (5 * 1024 * 1024) < chunk.length) {
                    process.stdout.write(`      Загружено: ${(bytes / 1024 / 1024).toFixed(1)} МБ\r`);
                }
            });
            res.on('end', () => {
                process.stdout.write(' '.repeat(60) + '\r');
                if (data.charCodeAt(0) === 0xFEFF) data = data.slice(1);
                resolve(data);
            });
        });

        req.on('timeout', () => req.destroy(new Error('Таймаут загрузки')));
        req.on('error', (err) => reject(err));
    });
}

async function tryFetchSource(source) {
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            console.log(`   ↳ Попытка ${attempt}/${MAX_RETRIES}...`);
            const rawText = await download(source.url);
            if (!rawText || rawText.length < 100) throw new Error('Слишком маленький ответ');

            console.log(`   ↳ Размер: ${(rawText.length / 1024 / 1024).toFixed(1)} МБ`);
            console.log(`   ↳ Парсинг...`);
            const parsed = source.parse(rawText);
            if (!Array.isArray(parsed) || parsed.length === 0) throw new Error('Парсинг дал пустой результат');
            return parsed;
        } catch (err) {
            console.warn(`   ⚠️  ${err.message}`);
            if (attempt === MAX_RETRIES) throw err;
            await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
        }
    }
    return [];
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

// ═══════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════
async function main() {
    console.log('');
    console.log('╔══════════════════════════════════════════╗');
    console.log('║  🌐 Генератор словаря English Cards     ║');
    console.log('╚══════════════════════════════════════════╝');
    console.log('');

    let words = null;
    let sourceName = '';

    for (const source of SOURCES) {
        console.log(`📡 Источник: ${source.name}`);
        try {
            const result = await tryFetchSource(source);
            const valid = result.filter(w => {
                const ru = (w.word || '').trim();
                const en = (w.translations || []).find(t => t.lang === 'en')?.text?.trim() || '';
                return isValidWord(ru, en);
            });

            if (valid.length < 50) {
                console.warn(`   ⚠️  Только ${valid.length} валидных пар, пропускаем\n`);
                continue;
            }

            words = valid;
            sourceName = source.name;
            console.log(`   ✅ Успех! ${words.length} валидных слов\n`);
            break;
        } catch (err) {
            console.warn(`   ❌ ${err.message}\n`);
        }
    }

    if (!words || words.length === 0) {
        console.error('❌ Ни один источник не дал результата\n');
        console.error('💡 Проверь ссылки вручную:');
        SOURCES.forEach(s => console.error(`   ${s.name}: ${s.url}`));
        console.error('\n💡 Если 404 — источник устарел. Обнови URL в SOURCES.\n');
        process.exit(1);
    }

    console.log('🔧 Обработка...');
    const seen = new Set();
    const dictionary = [];

    for (const w of words) {
        if (dictionary.length >= MAX_WORDS) break;

        const ru = (w.word || '').trim();
        const en = (w.translations || []).find(t => t.lang === 'en')?.text?.trim() || '';
        if (!isValidWord(ru, en)) continue;

        const key = `${en.toLowerCase()}|${ru.toLowerCase()}`;
        if (seen.has(key)) continue;
        seen.add(key);

        const cleanEn = en.split(/[,;]/)[0].trim();
        dictionary.push({
            id: dictionary.length + 1,
            eng: cleanEn,
            ru: ru,
            tr: '',
            emoji: POS_EMOJI[w.pos] || '📖',
            pos: w.pos || 'noun',
            ex1: '',
            tr1: ''
        });
    }

    if (dictionary.length === 0) {
        console.error('❌ После фильтрации не осталось слов!');
        process.exit(1);
    }

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
    console.log('💡 Подключи в index.html:');
    console.log('   <script src="dictionary.js"></script>');
    console.log('');
}

main().catch(err => {
    console.error('\n💥 Критическая ошибка:', err.message);
    if (process.env.DEBUG) console.error(err.stack);
    else console.error('   (запусти с DEBUG=1 для подробностей)');
    process.exit(1);
});
