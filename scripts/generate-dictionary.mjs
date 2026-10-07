#!/usr/bin/env node
/**
 * Генератор словаря для English Cards
 * Источник: OpenRussian (CC BY-SA 4.0)
 * Запуск: node scripts/generate-dictionary.mjs
 */

import { writeFileSync } from 'fs';

// ✅ ИСПРАВЛЕННЫЙ URL (ветка master, не main)
const SOURCE_URL = 'https://raw.githubusercontent.com/openrussian/openrussian-data/master/data/words.json';
const OUTPUT_PATH = './dictionary.js';
const MAX_WORDS = 5000;

// Эмодзи по частям речи
const POS_EMOJI = {
    noun: '📦', verb: '⚡', adjective: '🎨', adverb: '💨',
    pronoun: '👤', preposition: '🧭', conjunction: '🔗',
    interjection: '😲', numeral: '🔢', particle: '✨'
};

async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const res = await fetch(url);
            if (res.ok) return res;
            console.warn(`⚠️ Попытка ${i + 1}/${retries}: HTTP ${res.status}`);
        } catch (err) {
            console.warn(`⚠️ Попытка ${i + 1}/${retries}: ${err.message}`);
        }
        // Ждём перед повтором
        await new Promise(r => setTimeout(r, 2000 * (i + 1)));
    }
    throw new Error(`Не удалось загрузить данные после ${retries} попыток`);
}

console.log('⏳ Загрузка данных из OpenRussian...');
const res = await fetchWithRetry(SOURCE_URL);
const words = await res.json();

if (!Array.isArray(words) || words.length === 0) {
    console.error('❌ Получены пустые или невалидные данные!');
    process.exit(1);
}

console.log(`📥 Загружено ${words.length} записей. Фильтрация...`);

const dictionary = words
    .filter(w => {
        if (!w.word || typeof w.word !== 'string') return false;
        const enTrans = w.translations?.find(t => t.lang === 'en');
        return enTrans && enTrans.text && !w.word.includes(' ');
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

// Защита от пустого результата
if (dictionary.length === 0) {
    console.error('❌ Словарь пуст после фильтрации! Прерывание.');
    process.exit(1);
}

if (dictionary.length < 100) {
    console.warn(`⚠️ Подозрительно мало записей: ${dictionary.length}`);
}

// Генерация JS-файла
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

