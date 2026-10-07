#!/usr/bin/env node
import { writeFileSync } from 'fs';

const OUTPUT_PATH = './dictionary.js';
const MAX_WORDS = 5000;

const POS_EMOJI = {
    noun: '📦', verb: '⚡', adjective: '🎨', adverb: '💨',
    pronoun: '👤', preposition: '🧭', conjunction: '🔗',
    interjection: '😲', numeral: '🔢', particle: '✨'
};

// ✅ ПРОВЕРЕННЫЕ ИСТОЧНИКИ EN-RU
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
        name: 'dict-en-ru (dmitryvk)',
        url: 'https://raw.githubusercontent.com/dmitryvk/dict-en-ru/master/dict.json',
        parse: (data) => {
            // Формат: {"word": "translation", ...} или массив объектов
            if (Array.isArray(data)) return data;
            // Если объект {en: ru} — преобразуем
            return Object.entries(data).map(([en, ru]) => ({
                word: ru,
                translations: [{ lang: 'en', text: en }]
            }));
        }
    },
    {
        name: 'en-ru-dictionary (mike-fabian)',
        url: 'https://raw.githubusercontent.com/mike-fabian/en-ru-dictionary/main/en-ru-dictionary.json',
        parse: (data) => data
    }
];

async function tryFetch(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    return JSON.parse(text);
}

let words = null;
let sourceName = '';

for (const source of SOURCES) {
    try {
        console.log(`⏳ Пробуем: ${source.name}...`);
        const raw = await tryFetch(source.url);
        words = source.parse(raw);
        if (!Array.isArray(words) || words.length === 0) {
            console.warn(`⚠️ ${source.name}: пустой результат`);
            continue;
        }
        // Проверяем, есть ли РУССКИЕ переводы
        const sample = words.slice(0, 10);
        const hasRu = sample.some(w => {
            const ru = w.word || w.ru || '';
            const en = w.translations?.find(t => t.lang === 'en')?.text || w.en || '';
            return ru !== en && /[а-яА-ЯёЁ]/.test(ru);
        });
        if (!hasRu) {
            console.warn(`⚠️ ${source.name}: нет русских переводов, пропускаем`);
            continue;
        }
        sourceName = source.name;
        console.log(`✅ Успех! ${words.length} записей с русскими переводами из ${source.name}`);
        break;
    } catch (err) {
        console.warn(`❌ ${source.name}: ${err.message}`);
    }
}

if (!words || words.length === 0) {
    console.error('❌ НИ ОДИН ИСТОЧНИК НЕ ВЕРНУЛ ДАННЫЕ С РУССКИМИ ПЕРЕВОДАМИ!');
    process.exit(1);
}

console.log(`🔧 Фильтрация...`);

const dictionary = words
    .filter(w => {
        const ru = w.word || w.ru || '';
        const enTrans = w.translations?.find(t => t.lang === 'en');
        const en = enTrans?.text || w.en || '';
        return ru && en && /[а-яА-ЯёЁ]/.test(ru) && ru !== en;
    })
    .slice(0, MAX_WORDS)
    .map((w, i) => {
        const ru = w.word || w.ru || '';
        const enTrans = w.translations?.find(t => t.lang === 'en');
        const en = enTrans?.text || w.en || '';
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

