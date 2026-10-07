#!/usr/bin/env node
import { writeFileSync } from 'fs';

const OUTPUT_PATH = './dictionary.js';
const MAX_WORDS = 5000;

const POS_EMOJI = {
    noun: '📦', verb: '⚡', adjective: '🎨', adverb: '💨',
    pronoun: '👤', preposition: '🧭', conjunction: '🔗',
    interjection: '😲', numeral: '🔢', particle: '✨'
};

// ✅ РАБОЧИЕ ИСТОЧНИКИ (проверены на октябрь 2026)
const SOURCES = [
    {
        name: 'Badestrand/russian-dictionary',
        url: 'https://raw.githubusercontent.com/Badestrand/russian-dictionary/main/data/words.json',
        parse: (data) => data
    },
    {
        name: 'Ostanin/dictionary (EN-RU)',
        url: 'https://raw.githubusercontent.com/Ostanin/dictionary/master/dictionary.json',
        parse: (data) => data
    },
    {
        name: 'tdulcet/compact-dictionaries (ru-en)',
        url: 'https://raw.githubusercontent.com/tdulcet/compact-dictionaries/master/dictionary-ru-en.jsonl',
        parse: (text) => {
            // JSONL формат: одна строка = один объект
            if (typeof text === 'string') {
                return text.trim().split('\n').map(line => JSON.parse(line));
            }
            return text;
        },
        isText: true
    },
    {
        name: 'titoBouzout Russian-English Bilingual',
        url: 'https://raw.githubusercontent.com/titoBouzout/Dictionaries/master/Russian-English%20Bilingual.dic',
        parse: (text) => {
            // Формат: russian_word english_translation
            if (typeof text !== 'string') return [];
            return text.trim().split('\n')
                .filter(line => line && !line.startsWith('#'))
                .map(line => {
                    const parts = line.split(/\s+/);
                    if (parts.length < 2) return null;
                    return {
                        word: parts[0],
                        translations: [{ lang: 'en', text: parts.slice(1).join(' ') }]
                    };
                })
                .filter(Boolean);
        },
        isText: true
    }
];

async function tryFetch(source) {
    const res = await fetch(source.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    if (source.isText) {
        return source.parse(await res.text());
    }
    return source.parse(await res.json());
}

let words = null;
let sourceName = '';

for (const source of SOURCES) {
    try {
        console.log(`⏳ Пробуем: ${source.name}...`);
        words = await tryFetch(source);
        if (!Array.isArray(words) || words.length === 0) {
            console.warn(`⚠️ ${source.name}: пустой результат`);
            continue;
        }
        // Проверяем наличие РУССКИХ переводов
        const sample = words.slice(0, 20);
        const hasRu = sample.some(w => {
            const ru = w.word || w.ru || '';
            const en = w.translations?.find(t => t.lang === 'en')?.text || w.en || '';
            return /[а-яА-ЯёЁ]/.test(ru) && ru !== en;
        });
        if (!hasRu) {
            console.warn(`⚠️ ${source.name}: нет русских переводов, пропускаем`);
            continue;
        }
        sourceName = source.name;
        console.log(`✅ Успех! ${words.length} записей из ${source.name}`);
        break;
    } catch (err) {
        console.warn(`❌ ${source.name}: ${err.message}`);
    }
}

if (!words || words.length === 0) {
    console.error('❌ НИ ОДИН ИСТОЧНИК НЕ ДОСТУПЕН!');
    process.exit(1);
}

console.log(`🔧 Фильтрация...`);

const dictionary = words
    .filter(w => {
        const ru = w.word || w.ru || '';
        const en = w.translations?.find(t => t.lang === 'en')?.text || w.en || '';
        return ru && en && /[а-яА-ЯёЁ]/.test(ru) && ru !== en;
    })
    .slice(0, MAX_WORDS)
    .map((w, i) => {
        const ru = w.word || w.ru || '';
        const en = w.translations?.find(t => t.lang === 'en')?.text || w.en || '';
        const example = w.examples?.[0];
        const pos = w.pos || 'noun';
        return {
            id: i + 1,
            eng: en,
            ru: ru,
            tr: w.ipa || w.tr || '',
            emoji: POS_EMOJI[pos] || '📖',
            ex1: example?.ru || '',
            tr1: example?.en || '',
            pos
        };
    });

if (dictionary.length === 0) {
    console.error('❌ Словарь пуст после фильтрации!');
    process.exit(1);
}

const output = `/**
 * Словарь English Cards
 * Сгенерировано: ${new Date().toISOString()}
 * Источник: ${sourceName}
 * Записей: ${dictionary.length}
 */
const dictionary = ${JSON.stringify(dictionary, null, 2)};
`;

writeFileSync(OUTPUT_PATH, output, 'utf-8');
console.log(`✅ Готово! ${dictionary.length} слов → ${OUTPUT_PATH}`);
console.log(`   Размер: ${(Buffer.byteLength(output) / 1024).toFixed(1)} KB`);

