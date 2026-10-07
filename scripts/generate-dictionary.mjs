#!/usr/bin/env node
/**
 * Генератор словаря для English Cards
 * Источник: OpenRussian (CC BY-SA 4.0)
 * Запуск: node scripts/generate-dictionary.mjs
 */

import { writeFileSync } from 'fs';

const SOURCE_URL = 'https://raw.githubusercontent.com/openrussian/openrussian-data/main/data/words.json';
const OUTPUT_PATH = './dictionary.js';
const MAX_WORDS = 5000;

// Эмодзи по частям речи
const POS_EMOJI = {
    noun: '📦', verb: '⚡', adjective: '🎨', adverb: '💨',
    pronoun: '👤', preposition: '🧭', conjunction: '🔗',
    interjection: '😲', numeral: '🔢', particle: '✨'
};

console.log('⏳ Загрузка данных из OpenRussian...');
const res = await fetch(SOURCE_URL);
if (!res.ok) throw new Error(`Ошибка загрузки: ${res.status}`);
const words = await res.json();

console.log(`📥 Загружено ${words.length} записей. Фильтрация...`);

const dictionary = words
    .filter(w => {
        const enTrans = w.translations?.find(t => t.lang === 'en');
        return enTrans && w.word && !w.word.includes(' '); // только одиночные слова
    })
    .slice(0, MAX_WORDS)
    .map((w, i) => {
        const enTrans = w.translations.find(t => t.lang === 'en');
        const example = w.examples?.[0];
        const pos = w.pos || 'noun';

        return {
            id: i + 1,
            eng: enTrans.text,
            ru: w.word,
            tr: w.ipa || '',
            emoji: POS_EMOJI[pos] || '📖',
            ex1: example?.ru || '',
            tr1: example?.en || '',
            pos: pos
        };
    });

// Генерация JS-файла в формате вашего приложения
const output = `/**
 * Словарь English Cards
 * Сгенерировано: ${new Date().toISOString()}
 * Источник: OpenRussian (CC BY-SA 4.0)
 * Записей: ${dictionary.length}
 * ⚠️ НЕ РЕДАКТИРУЙТЕ ВРУЧНУЮ — используйте scripts/generate-dictionary.mjs
 */
const dictionary = ${JSON.stringify(dictionary, null, 2)};
`;

writeFileSync(OUTPUT_PATH, output, 'utf-8');
console.log(`✅ Готово! ${dictionary.length} слов → ${OUTPUT_PATH}`);
console.log(`   Размер файла: ${(Buffer.byteLength(output) / 1024).toFixed(1)} KB`);

