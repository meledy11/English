#!/usr/bin/env node
import { writeFileSync } from 'fs';

const OUTPUT_PATH = './dictionary.js';
const MAX_WORDS = 5000;

const POS_EMOJI = {
    noun: '📦', verb: '⚡', adjective: '🎨', adverb: '💨',
    pronoun: '👤', preposition: '🧭', conjunction: '🔗',
    interjection: '😲', numeral: '🔢', particle: '✨'
};

// Несколько источников на случай отказа основного
const SOURCES = [
    {
        name: 'OpenRussian (master)',
        url: 'https://raw.githubusercontent.com/openrussian/openrussian-data/master/data/words.json',
        parse: (data) => data
    },
    {
        name: 'OpenRussian (main)',
        url: 'https://raw.githubusercontent.com/openrussian/openrussian-data/main/data/words.json',
        parse: (data) => data
    },
    {
        name: 'dwyl english-words',
        url: 'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json',
        parse: (data) => Object.keys(data).map(word => ({
            word: word,
            translations: [{ lang: 'en', text: word }],
            pos: 'noun',
            examples: []
        }))
    }
];

async function tryFetch(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

let words = null;
let sourceName = '';

for (const source of SOURCES) {
    try {
        console.log(`⏳ Пробуем: ${source.name}...`);
        const raw = await tryFetch(source.url);
        words = source.parse(raw);
        if (Array.isArray(words) && words.length > 0) {
            sourceName = source.name;
            console.log(`✅ Успех! Загружено ${words.length} записей из ${source.name}`);
            break;
        }
        console.warn(`⚠️ ${source.name}: пустой результат`);
    } catch (err) {
        console.warn(`❌ ${source.name}: ${err.message}`);
    }
}

if (!words || words.length === 0) {
    console.error('❌ ВСЕ ИСТОЧНИКИ НЕДОСТУПНЫ. Прерывание.');
    process.exit(1);
}

console.log(`🔧 Фильтрация и преобразование...`);

const dictionary = words
    .filter(w => {
        if (!w.word || typeof w.word !== 'string') return false;
        const enTrans = w.translations?.find(t => t.lang === 'en');
        return enTrans && enTrans.text;
    })
    .slice(0, MAX_WORDS)
    .map((w, i) => {
        const enTrans = w.translations?.find(t => t.lang === 'en');
        const example = w.examples?.[0];
        const pos = w.pos || 'noun';
        return {
            id: i + 1,
            eng: enTrans?.text || w.word,
            ru: w.word,
            tr: w.ipa || '',
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

