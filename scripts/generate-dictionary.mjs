#!/usr/bin/env node
/**
 * generate-dictionary.mjs
 * 
 * Генератор словаря English Cards (EN → RU)
 * 
 * Использование:
 *   node generate-dictionary.mjs
 * 
 * Требования:
 *   Node.js 16+ (использует только стандартные модули)
 * 
 * Результат:
 *   dictionary.js — файл, совместимый с приложением English Cards
 */

import { writeFileSync, existsSync } from 'fs';
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
const FETCH_TIMEOUT_MS = 30000;
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 2000;

// ═══════════════════════════════════════════════
// ЭМОДЗИ ПО ЧАСТЯМ РЕЧИ
// ═══════════════════════════════════════════════
const POS_EMOJI = {
    noun: '📦',
    verb: '⚡',
    adjective: '🎨',
    adverb: '💨',
    pronoun: '👤',
    preposition: '🧭',
    conjunction: '🔗',
    interjection: '😲',
    numeral: '🔢',
    particle: '✨',
    article: '📎',
    determiner: '📎',
    phrase: '💬'
};

// ═══════════════════════════════════════════════
// ИСТОЧНИКИ ДАННЫХ
// Каждый источник — объект { name, url, type, parse }
// type: 'json' | 'jsonl' | 'dict' | 'tsv'
// parse: (rawText) => массив [{ word, pos, translations: [{ lang, text }] }]
// ═══════════════════════════════════════════════
const SOURCES = [
    // ─── ИСТОЧНИК 1: kaikki.org (Wiktextract) ───
    {
        name: 'kaikki.org — English words with Russian translations',
        url: 'https://kaikki.org/dictionary/Russian/kaikki.org-dictionary-Russian.jsonl',
        type: 'jsonl',
        parse: parseKaikkiRu
    },
    // ─── ИСТОЧНИК 2: kaikki.org English → все языки ───
    {
        name: 'kaikki.org — English words (with translations)',
        url: 'https://kaikki.org/dictionary/English/kaikki.org-dictionary-English.jsonl',
        type: 'jsonl',
        parse: parseKaikkiEn
    },
    // ─── ИСТОЧНИК 3: titoBouzout Bilingual ───
    {
        name: 'titoBouzout — Russian-English Bilingual',
        url: 'https://raw.githubusercontent.com/titoBouzout/Dictionaries/master/Russian-English%20Bilingual.dic',
        type: 'dict',
        parse: parseDictFormat
    },
    // ─── ИСТОЧНИК 4: FreeDict eng-rus ───
    {
        name: 'FreeDict — English-Russian',
        url: 'https://raw.githubusercontent.com/freedict/fd-dictionaries/master/eng-rus/eng-rus.tei',
        type: 'tei',
        parse: parseTeiFormat
    }
];

// ═══════════════════════════════════════════════
// ПАРСЕРЫ
// ═══════════════════════════════════════════════

/**
 * Парсер kaikki.org JSONL для русского словаря.
 * Ищет английские переводы русских слов.
 */
function parseKaikkiRu(text) {
    const lines = text.split('\n');
    const result = [];
    let parsed = 0;
    let failed = 0;

    for (const line of lines) {
        if (!line.trim()) continue;
        try {
            const obj = JSON.parse(line);
            parsed++;

            if (!obj.word) continue;

            // Ищем переводы на английский
            const translations = [];
            const senses = obj.senses || [];
            for (const sense of senses) {
                for (const tr of (sense.translations || [])) {
                    const lang = (tr.lang || '').toLowerCase();
                    if ((lang === 'english' || lang === 'en') && tr.word) {
                        translations.push({
                            lang: 'en',
                            text: String(tr.word).trim()
                        });
                    }
                }
            }

            if (translations.length === 0) continue;

            result.push({
                word: String(obj.word).trim(),
                pos: normalizePos(obj.pos),
                translations
            });

        } catch {
            failed++;
        }
    }

    console.log(`      Распарсено: ${parsed}, ошибок: ${failed}, с переводами: ${result.length}`);
    return result;
}

/**
 * Парсер kaikki.org JSONL для английского словаря.
 * Ищет русские переводы английских слов.
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

            const translations = [];
            const senses = obj.senses || [];
            for (const sense of senses) {
                for (const tr of (sense.translations || [])) {
                    const lang = (tr.lang || '').toLowerCase();
                    if ((lang === 'russian' || lang === 'ru') && tr.word) {
                        translations.push({
                            lang: 'ru',
                            text: String(tr.word).trim()
                        });
                    }
                }
            }

            if (translations.length === 0) continue;

            // Меняем местами: английское слово + русский перевод
            result.push({
                word: translations[0].text, // русское слово
                pos: normalizePos(obj.pos),
                translations: [{
                    lang: 'en',
                    text: String(obj.word).trim()
                }]
            });

        } catch { /* пропускаем */ }
    }

    console.log(`      Распарсено: ${parsed}, с русскими переводами: ${result.length}`);
    return result;
}

/**
 * Парсер формата .dic (titoBouzout).
 * Формат: "russian_word english_translation"
 */
function parseDictFormat(text) {
    const lines = text.split('\n');
    const result = [];

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;

        // Отделяем слово от перевода (первый пробел/табуляция)
        const match = trimmed.match(/^([^\s]+)\s+(.+)$/);
        if (!match) continue;

        const ru = match[1].trim();
        const enRaw = match[2].trim();

        // Убираем пометки типа /n/, /v/, скобки
        const en = enRaw
            .replace(/\/[a-z]+\//g, '')
            .replace(/[\[\]{}()]/g, '')
            .split(/[,;]/)[0]
            .trim();

        if (!ru || !en) continue;
        if (!/[а-яА-ЯёЁ]/.test(ru)) continue;

        result.push({
            word: ru,
            pos: 'noun',
            translations: [{ lang: 'en', text: en }]
        });
    }

    console.log(`      Распарсено: ${result.length}`);
    return result;
}

/**
 * Простой парсер TEI XML (FreeDict).
 * Ищет пары <orth>англ</orth> ... <quote>русский</quote>
 */
function parseTeiFormat(text) {
    const result = [];
    // Разбиваем по записям <entry>
    const entries = text.split(/<entry\b/);

    for (const entry of entries) {
        // Ищем английское слово
        const enMatch = entry.match(/<orth[^>]*>([^<]+)<\/orth>/);
        if (!enMatch) continue;
        const en = enMatch[1].trim();

        // Ищем все русские переводы в этой записи
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

    console.log(`      Распарсено: ${result.length}`);
    return result;
}

/**
 * Нормализация части речи к единому формату.
 */
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
    if (p.includes('phrase')) return 'phrase';
    return 'noun';
}

// ═══════════════════════════════════════════════
// ЗАГРУЗКА
// ═══════════════════════════════════════════════
function download(url, timeoutMs = FETCH_TIMEOUT_MS, redirectsLeft = 5) {
    return new Promise((resolve, reject) => {
        if (redirectsLeft <= 0) {
            return reject(new Error('Слишком много редиректов'));
        }

        let parsed;
        try {
            parsed = new URL(url);
        } catch (e) {
            return reject(new Error('Некорректный URL: ' + url));
        }

        const lib = parsed.protocol === 'http:' ? getHttp : get;
        const req = lib(url, { timeout: timeoutMs }, (res) => {
            // Редиректы
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redirectUrl = new URL(res.headers.location, url).href;
                res.resume();
                return resolve(download(redirectUrl, timeoutMs, redirectsLeft - 1));
            }

            if (res.statusCode !== 200) {
                res.resume();
                return reject(new Error(`HTTP ${res.statusCode}`));
            }

            // Читаем как utf-8, собираем чанки
            res.setEncoding('utf8');
            let data = '';
            let bytes = 0;
            res.on('data', (chunk) => {
                data += chunk;
                bytes += chunk.length;
                // Показываем прогресс раз в ~5 МБ
                if (bytes % (5 * 1024 * 1024) < chunk.length) {
                    process.stdout.write(`      Загружено: ${(bytes / 1024 / 1024).toFixed(1)} МБ\r`);
                }
            });
            res.on('end', () => {
                process.stdout.write(' '.repeat(50) + '\r'); // очистка строки прогресса
                // Убираем BOM
                if (data.charCodeAt(0) === 0xFEFF) {
                    data = data.slice(1);
                }
                resolve(data);
            });
        });

        req.on('timeout', () => {
            req.destroy(new Error('Таймаут загрузки'));
        });
        req.on('error', (err) => reject(err));
    });
}

async function tryFetchSource(source) {
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            console.log(`   ↳ Попытка ${attempt}/${MAX_RETRIES}...`);
            const rawText = await download(source.url);

            if (!rawText || rawText.length < 100) {
                throw new Error('Слишком маленький ответ');
            }

            console.log(`   ↳ Размер: ${(rawText.length / 1024 / 1024).toFixed(1)} МБ`);
            console.log(`   ↳ Парсинг...`);

            const parsed = source.parse(rawText);

            if (!Array.isArray(parsed) || parsed.length === 0) {
                throw new Error('Парсинг дал пустой результат');
            }

            return parsed;
        } catch (err) {
            console.warn(`   ⚠️  Попытка ${attempt}: ${err.message}`);
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
    // Оба непустые
    if (!ru || !en) return false;

    // Длина
    if (ru.length < MIN_WORD_LENGTH || ru.length > MAX_WORD_LENGTH) return false;
    if (en.length < MIN_WORD_LENGTH || en.length > MAX_WORD_LENGTH) return false;

    // Русская часть должна содержать кириллицу
    if (!/[а-яА-ЯёЁ]/.test(ru)) return false;

    // Английская — не должна содержать кириллицу
    if (/[а-яА-ЯёЁ]/.test(en)) return false;

    // Не совпадают
    if (ru.toLowerCase() === en.toLowerCase()) return false;

    // Не цифры только
    if (/^\d+$/.test(ru) || /^\d+$/.test(en)) return false;

    return true;
}

// ═══════════════════════════════════════════════
// ОСНОВНАЯ ЛОГИКА
// ═══════════════════════════════════════════════
async function main() {
    console.log('');
    console.log('╔══════════════════════════════════════════╗');
    console.log('║  🌐 Генератор словаря English Cards     ║');
    console.log('╚══════════════════════════════════════════╝');
    console.log('');

    let words = null;
    let sourceName = '';

    // Пробуем источники по очереди
    for (const source of SOURCES) {
        console.log(`📡 Источник: ${source.name}`);
        try {
            const result = await tryFetchSource(source);

            // Проверяем, что есть реальные пары ru↔en
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
        console.error('');
        console.error('╔══════════════════════════════════════════╗');
        console.error('║  ❌ Ни один источник не дал результата   ║');
        console.error('╚══════════════════════════════════════════╝');
        console.error('');
        console.error('💡 Возможные причины:');
        console.error('   • Нет интернета');
        console.error('   • GitHub/kaikki.org недоступны');
        console.error('   • Провайдер блокирует');
        console.error('');
        console.error('💡 Что делать:');
        console.error('   1. Проверь интернет:  ping github.com');
        console.error('   2. Открой в браузере:');
        console.error('      ' + SOURCES[0].url);
        console.error('   3. Если 404 — обнови ссылку в SOURCES');
        console.error('   4. Или запусти офлайн-версию (см. README)');
        console.error('');
        process.exit(1);
    }

    // ─── Фильтрация и дедупликация ───
    console.log('🔧 Обработка...');

    const seen = new Set();
    const dictionary = [];

    for (const w of words) {
        if (dictionary.length >= MAX_WORDS) break;

        const ru = (w.word || '').trim();
        const en = (w.translations || []).find(t => t.lang === 'en')?.text?.trim() || '';

        if (!isValidWord(ru, en)) continue;

        // Дедупликация
        const key = `${en.toLowerCase()}|${ru.toLowerCase()}`;
        if (seen.has(key)) continue;
        seen.add(key);

        // Обрезаем длинные переводы до первого перевода
        const cleanEn = en.split(/[,;]/)[0].trim();

        dictionary.push({
            id: dictionary.length + 1,
            eng: cleanEn,
            ru: ru,
            tr: w.tr || w.ipa || '',
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

    // Сортировка
    dictionary.sort((a, b) => a.eng.localeCompare(b.eng));
    dictionary.forEach((w, i) => { w.id = i + 1; });

    // ─── Запись файла ───
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
    console.log('💡 Подключи в index.html (перед основным скриптом):');
    console.log('   <script src="dictionary.js"></script>');
    console.log('');
}

// ═══════════════════════════════════════════════
// ЗАПУСК
// ═══════════════════════════════════════════════
main().catch(err => {
    console.error('');
    console.error('💥 Критическая ошибка:');
    console.error('   ' + err.message);
    if (process.env.DEBUG) {
        console.error(err.stack);
    } else {
        console.error('   (запусти с DEBUG=1 для подробностей)');
    }
    console.error('');
    process.exit(1);
});
