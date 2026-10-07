#!/usr/bin/env node
/**
 * generate-dictionary.mjs
 * Генератор словаря English Cards — цель: 3000 слов
 * 
 * Стратегия:
 *   1. Скачиваем HuggingFace TSV (~5 МБ, 56 000 пар)
 *   2. Если не сработало — FreeDict TEI
 *   3. Если сеть упала — используем fallback (500 слов)
 *   4. Всегда создаём dictionary.js
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
const FETCH_TIMEOUT_MS = 60000;
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 2000;

const POS_EMOJI = {
    noun: '📦', verb: '⚡', adjective: '🎨', adverb: '💨',
    pronoun: '👤', preposition: '🧭', conjunction: '🔗',
    interjection: '😲', numeral: '🔢', particle: '✨',
    article: '📎', phrase: '💬'
};

const USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// ═══════════════════════════════════════════════
// ИСТОЧНИКИ
// ═══════════════════════════════════════════════
const SOURCES = [
    {
        name: 'HuggingFace EN-RU statistical dict (TSV)',
        url: 'https://huggingface.co/datasets/KvaytG/en-ru-statistical-dict-20m-corpus/resolve/main/en-ru-dict.tsv',
        type: 'tsv'
    },
    {
        name: 'HuggingFace (download=true)',
        url: 'https://huggingface.co/datasets/KvaytG/en-ru-statistical-dict-20m-corpus/resolve/main/en-ru-dict.tsv?download=true',
        type: 'tsv'
    },
    {
        name: 'FreeDict English-Russian (TEI)',
        url: 'https://raw.githubusercontent.com/freedict/fd-dictionaries/master/eng-rus/eng-rus.tei',
        type: 'tei'
    }
];

// ═══════════════════════════════════════════════
// FALLBACK — 500 базовых слов
// ═══════════════════════════════════════════════
const FALLBACK_WORDS = [
    ['cat', 'кошка', 'noun'], ['dog', 'собака', 'noun'], ['house', 'дом', 'noun'],
    ['book', 'книга', 'noun'], ['water', 'вода', 'noun'], ['food', 'еда', 'noun'],
    ['friend', 'друг', 'noun'], ['work', 'работа', 'noun'], ['time', 'время', 'noun'],
    ['day', 'день', 'noun'], ['night', 'ночь', 'noun'], ['morning', 'утро', 'noun'],
    ['evening', 'вечер', 'noun'], ['year', 'год', 'noun'], ['month', 'месяц', 'noun'],
    ['week', 'неделя', 'noun'], ['city', 'город', 'noun'], ['country', 'страна', 'noun'],
    ['money', 'деньги', 'noun'], ['car', 'машина', 'noun'], ['phone', 'телефон', 'noun'],
    ['computer', 'компьютер', 'noun'], ['school', 'школа', 'noun'], ['teacher', 'учитель', 'noun'],
    ['student', 'студент', 'noun'], ['family', 'семья', 'noun'], ['name', 'имя', 'noun'],
    ['weather', 'погода', 'noun'], ['question', 'вопрос', 'noun'], ['answer', 'ответ', 'noun'],
    ['problem', 'проблема', 'noun'], ['world', 'мир', 'noun'], ['life', 'жизнь', 'noun'],
    ['music', 'музыка', 'noun'], ['movie', 'фильм', 'noun'], ['coffee', 'кофе', 'noun'],
    ['tea', 'чай', 'noun'], ['bread', 'хлеб', 'noun'], ['apple', 'яблоко', 'noun'],
    ['street', 'улица', 'noun'], ['window', 'окно', 'noun'], ['door', 'дверь', 'noun'],
    ['table', 'стол', 'noun'], ['chair', 'стул', 'noun'], ['room', 'комната', 'noun'],
    ['garden', 'сад', 'noun'], ['flower', 'цветок', 'noun'], ['tree', 'дерево', 'noun'],
    ['sun', 'солнце', 'noun'], ['moon', 'луна', 'noun'], ['star', 'звезда', 'noun'],
    ['sky', 'небо', 'noun'], ['sea', 'море', 'noun'], ['river', 'река', 'noun'],
    ['mountain', 'гора', 'noun'], ['forest', 'лес', 'noun'], ['road', 'дорога', 'noun'],
    ['bridge', 'мост', 'noun'], ['market', 'рынок', 'noun'], ['shop', 'магазин', 'noun'],
    ['hospital', 'больница', 'noun'], ['doctor', 'врач', 'noun'], ['nurse', 'медсестра', 'noun'],
    ['police', 'полиция', 'noun'], ['taxi', 'такси', 'noun'], ['train', 'поезд', 'noun'],
    ['plane', 'самолёт', 'noun'], ['ship', 'корабль', 'noun'], ['bike', 'велосипед', 'noun'],
    ['ball', 'мяч', 'noun'], ['game', 'игра', 'noun'], ['sport', 'спорт', 'noun'],
    ['team', 'команда', 'noun'], ['winner', 'победитель', 'noun'], ['prize', 'приз', 'noun'],
    ['gift', 'подарок', 'noun'], ['party', 'вечеринка', 'noun'], ['holiday', 'праздник', 'noun'],
    ['weekend', 'выходные', 'noun'], ['hotel', 'отель', 'noun'], ['beach', 'пляж', 'noun'],
    ['island', 'остров', 'noun'], ['map', 'карта', 'noun'], ['ticket', 'билет', 'noun'],
    ['passport', 'паспорт', 'noun'], ['luggage', 'багаж', 'noun'], ['camera', 'камера', 'noun'],
    ['letter', 'письмо', 'noun'], ['message', 'сообщение', 'noun'], ['news', 'новости', 'noun'],
    ['story', 'история', 'noun'], ['poem', 'стихотворение', 'noun'], ['song', 'песня', 'noun'],
    ['dance', 'танец', 'noun'], ['picture', 'картина', 'noun'], ['color', 'цвет', 'noun'],
    ['red', 'красный', 'adjective'], ['blue', 'синий', 'adjective'], ['green', 'зелёный', 'adjective'],
    ['yellow', 'жёлтый', 'adjective'], ['black', 'чёрный', 'adjective'], ['white', 'белый', 'adjective'],
    ['brown', 'коричневый', 'adjective'], ['pink', 'розовый', 'adjective'], ['orange', 'оранжевый', 'adjective'],
    ['purple', 'фиолетовый', 'adjective'], ['grey', 'серый', 'adjective'],
    ['go', 'идти', 'verb'], ['come', 'приходить', 'verb'], ['eat', 'есть', 'verb'],
    ['drink', 'пить', 'verb'], ['see', 'видеть', 'verb'], ['look', 'смотреть', 'verb'],
    ['hear', 'слышать', 'verb'], ['speak', 'говорить', 'verb'], ['say', 'сказать', 'verb'],
    ['tell', 'рассказывать', 'verb'], ['know', 'знать', 'verb'], ['think', 'думать', 'verb'],
    ['understand', 'понимать', 'verb'], ['want', 'хотеть', 'verb'], ['like', 'нравиться', 'verb'],
    ['love', 'любить', 'verb'], ['need', 'нуждаться', 'verb'], ['give', 'давать', 'verb'],
    ['take', 'брать', 'verb'], ['make', 'делать', 'verb'], ['do', 'делать', 'verb'],
    ['get', 'получать', 'verb'], ['put', 'класть', 'verb'], ['find', 'находить', 'verb'],
    ['buy', 'покупать', 'verb'], ['read', 'читать', 'verb'], ['write', 'писать', 'verb'],
    ['play', 'играть', 'verb'], ['live', 'жить', 'verb'], ['learn', 'учить', 'verb'],
    ['study', 'учиться', 'verb'], ['sleep', 'спать', 'verb'], ['run', 'бегать', 'verb'],
    ['walk', 'ходить', 'verb'], ['jump', 'прыгать', 'verb'], ['swim', 'плавать', 'verb'],
    ['fly', 'летать', 'verb'], ['drive', 'водить', 'verb'], ['cook', 'готовить', 'verb'],
    ['clean', 'убирать', 'verb'], ['wash', 'мыть', 'verb'], ['open', 'открывать', 'verb'],
    ['close', 'закрывать', 'verb'], ['start', 'начинать', 'verb'], ['stop', 'останавливать', 'verb'],
    ['help', 'помогать', 'verb'], ['ask', 'спрашивать', 'verb'], ['answer', 'отвечать', 'verb'],
    ['win', 'побеждать', 'verb'], ['lose', 'терять', 'verb'], ['wait', 'ждать', 'verb'],
    ['meet', 'встречать', 'verb'], ['call', 'звонить', 'verb'], ['send', 'отправлять', 'verb'],
    ['bring', 'приносить', 'verb'], ['show', 'показывать', 'verb'], ['teach', 'учить', 'verb'],
    ['change', 'менять', 'verb'], ['build', 'строить', 'verb'], ['break', 'ломать', 'verb'],
    ['fix', 'чинить', 'verb'], ['choose', 'выбирать', 'verb'], ['remember', 'помнить', 'verb'],
    ['forget', 'забывать', 'verb'], ['smile', 'улыбаться', 'verb'], ['cry', 'плакать', 'verb'],
    ['laugh', 'смеяться', 'verb'], ['sing', 'петь', 'verb'], ['dance', 'танцевать', 'verb'],
    ['good', 'хороший', 'adjective'], ['bad', 'плохой', 'adjective'], ['big', 'большой', 'adjective'],
    ['small', 'маленький', 'adjective'], ['new', 'новый', 'adjective'], ['old', 'старый', 'adjective'],
    ['young', 'молодой', 'adjective'], ['beautiful', 'красивый', 'adjective'], ['happy', 'счастливый', 'adjective'],
    ['sad', 'грустный', 'adjective'], ['tired', 'уставший', 'adjective'], ['hungry', 'голодный', 'adjective'],
    ['thirsty', 'жаждущий', 'adjective'], ['easy', 'лёгкий', 'adjective'], ['difficult', 'трудный', 'adjective'],
    ['hot', 'горячий', 'adjective'], ['cold', 'холодный', 'adjective'], ['fast', 'быстрый', 'adjective'],
    ['slow', 'медленный', 'adjective'], ['important', 'важный', 'adjective'], ['interesting', 'интересный', 'adjective'],
    ['boring', 'скучный', 'adjective'], ['funny', 'смешной', 'adjective'], ['serious', 'серьёзный', 'adjective'],
    ['quiet', 'тихий', 'adjective'], ['loud', 'громкий', 'adjective'], ['clean', 'чистый', 'adjective'],
    ['dirty', 'грязный', 'adjective'], ['light', 'светлый', 'adjective'], ['dark', 'тёмный', 'adjective'],
    ['strong', 'сильный', 'adjective'], ['weak', 'слабый', 'adjective'], ['rich', 'богатый', 'adjective'],
    ['poor', 'бедный', 'adjective'], ['free', 'свободный', 'adjective'], ['busy', 'занятый', 'adjective'],
    ['full', 'полный', 'adjective'], ['empty', 'пустой', 'adjective'], ['right', 'правильный', 'adjective'],
    ['wrong', 'неправильный', 'adjective'], ['true', 'истинный', 'adjective'], ['false', 'ложный', 'adjective'],
    ['long', 'длинный', 'adjective'], ['short', 'короткий', 'adjective'], ['tall', 'высокий', 'adjective'],
    ['low', 'низкий', 'adjective'], ['wide', 'широкий', 'adjective'], ['narrow', 'узкий', 'adjective'],
    ['thick', 'толстый', 'adjective'], ['thin', 'тонкий', 'adjective'], ['heavy', 'тяжёлый', 'adjective'],
    ['very', 'очень', 'adverb'], ['always', 'всегда', 'adverb'], ['never', 'никогда', 'adverb'],
    ['sometimes', 'иногда', 'adverb'], ['often', 'часто', 'adverb'], ['usually', 'обычно', 'adverb'],
    ['now', 'сейчас', 'adverb'], ['today', 'сегодня', 'adverb'], ['tomorrow', 'завтра', 'adverb'],
    ['yesterday', 'вчера', 'adverb'], ['here', 'здесь', 'adverb'], ['there', 'там', 'adverb'],
    ['well', 'хорошо', 'adverb'], ['badly', 'плохо', 'adverb'], ['quickly', 'быстро', 'adverb'],
    ['slowly', 'медленно', 'adverb'], ['already', 'уже', 'adverb'], ['still', 'всё ещё', 'adverb'],
    ['soon', 'скоро', 'adverb'], ['later', 'позже', 'adverb'], ['early', 'рано', 'adverb'],
    ['late', 'поздно', 'adverb'], ['again', 'снова', 'adverb'], ['together', 'вместе', 'adverb'],
    ['I', 'я', 'pronoun'], ['you', 'ты', 'pronoun'], ['he', 'он', 'pronoun'],
    ['she', 'она', 'pronoun'], ['it', 'оно', 'pronoun'], ['we', 'мы', 'pronoun'],
    ['they', 'они', 'pronoun'], ['this', 'этот', 'pronoun'], ['that', 'тот', 'pronoun'],
    ['these', 'эти', 'pronoun'], ['those', 'те', 'pronoun'], ['who', 'кто', 'pronoun'],
    ['what', 'что', 'pronoun'], ['where', 'где', 'pronoun'], ['when', 'когда', 'pronoun'],
    ['why', 'почему', 'pronoun'], ['how', 'как', 'pronoun'], ['which', 'который', 'pronoun'],
    ['some', 'некоторые', 'pronoun'], ['any', 'любой', 'pronoun'], ['all', 'все', 'pronoun'],
    ['every', 'каждый', 'pronoun'], ['nothing', 'ничего', 'pronoun'], ['something', 'что-то', 'pronoun'],
    ['everything', 'всё', 'pronoun'], ['everyone', 'все', 'pronoun'], ['someone', 'кто-то', 'pronoun'],
    ['nobody', 'никто', 'pronoun'],
    ['one', 'один', 'numeral'], ['two', 'два', 'numeral'], ['three', 'три', 'numeral'],
    ['four', 'четыре', 'numeral'], ['five', 'пять', 'numeral'], ['six', 'шесть', 'numeral'],
    ['seven', 'семь', 'numeral'], ['eight', 'восемь', 'numeral'], ['nine', 'девять', 'numeral'],
    ['ten', 'десять', 'numeral'], ['twenty', 'двадцать', 'numeral'], ['thirty', 'тридцать', 'numeral'],
    ['fifty', 'пятьдесят', 'numeral'], ['hundred', 'сто', 'numeral'], ['thousand', 'тысяча', 'numeral'],
    ['million', 'миллион', 'numeral'],
    ['hello', 'привет', 'interjection'], ['goodbye', 'до свидания', 'interjection'],
    ['yes', 'да', 'interjection'], ['no', 'нет', 'interjection'], ['please', 'пожалуйста', 'interjection'],
    ['thanks', 'спасибо', 'interjection'], ['sorry', 'извините', 'interjection'],
    ['welcome', 'добро пожаловать', 'interjection'],
    ['in', 'в', 'preposition'], ['on', 'на', 'preposition'], ['at', 'в', 'preposition'],
    ['to', 'к', 'preposition'], ['from', 'от', 'preposition'], ['with', 'с', 'preposition'],
    ['without', 'без', 'preposition'], ['for', 'для', 'preposition'], ['of', 'из', 'preposition'],
    ['by', 'от', 'preposition'], ['about', 'о', 'preposition'], ['under', 'под', 'preposition'],
    ['over', 'над', 'preposition'], ['between', 'между', 'preposition'], ['among', 'среди', 'preposition'],
    ['and', 'и', 'conjunction'], ['but', 'но', 'conjunction'], ['or', 'или', 'conjunction'],
    ['because', 'потому что', 'conjunction'], ['if', 'если', 'conjunction'],
    ['while', 'пока', 'conjunction'], ['before', 'до', 'conjunction'], ['after', 'после', 'conjunction'],
    ['travel', 'путешествовать', 'verb'], ['visit', 'посещать', 'verb'], ['move', 'двигать', 'verb'],
    ['stay', 'оставаться', 'verb'], ['return', 'возвращаться', 'verb'], ['arrive', 'прибывать', 'verb'],
    ['leave', 'уходить', 'verb'], ['enter', 'входить', 'verb'], ['exit', 'выходить', 'verb'],
    ['climb', 'взбираться', 'verb'], ['fall', 'падать', 'verb'], ['rise', 'подниматься', 'verb'],
    ['grow', 'расти', 'verb'], ['plant', 'сажать', 'verb'], ['cut', 'резать', 'verb'],
    ['draw', 'рисовать', 'verb'], ['paint', 'рисовать', 'verb'], ['count', 'считать', 'verb'],
    ['measure', 'измерять', 'verb'], ['compare', 'сравнивать', 'verb'], ['discuss', 'обсуждать', 'verb'],
    ['decide', 'решать', 'verb'], ['promise', 'обещать', 'verb'], ['agree', 'соглашаться', 'verb'],
    ['refuse', 'отказывать', 'verb'], ['allow', 'позволять', 'verb'], ['forbid', 'запрещать', 'verb'],
    ['invite', 'приглашать', 'verb'], ['join', 'присоединяться', 'verb'], ['share', 'делить', 'verb'],
    ['borrow', 'одалживать', 'verb'], ['lend', 'давать в долг', 'verb'], ['owe', 'быть должным', 'verb'],
    ['pay', 'платить', 'verb'], ['earn', 'зарабатывать', 'verb'], ['spend', 'тратить', 'verb'],
    ['save', 'экономить', 'verb'], ['cost', 'стоить', 'verb'], ['sell', 'продавать', 'verb'],
    ['deliver', 'доставлять', 'verb'], ['pack', 'упаковывать', 'verb'], ['carry', 'нести', 'verb'],
    ['lift', 'поднимать', 'verb'], ['push', 'толкать', 'verb'], ['pull', 'тянуть', 'verb'],
    ['throw', 'бросать', 'verb'], ['catch', 'ловить', 'verb'], ['hit', 'ударять', 'verb'],
    ['kick', 'пинать', 'verb'], ['touch', 'касаться', 'verb'], ['feel', 'чувствовать', 'verb'],
    ['smell', 'пахнуть', 'verb'], ['taste', 'пробовать', 'verb'], ['notice', 'замечать', 'verb'],
    ['realize', 'осознавать', 'verb'], ['believe', 'верить', 'verb'], ['hope', 'надеяться', 'verb'],
    ['wish', 'желать', 'verb'], ['dream', 'мечтать', 'verb'], ['plan', 'планировать', 'verb'],
    ['prepare', 'готовить', 'verb'], ['finish', 'заканчивать', 'verb'], ['continue', 'продолжать', 'verb'],
    ['repeat', 'повторять', 'verb'], ['translate', 'переводить', 'verb'], ['explain', 'объяснять', 'verb'],
    ['describe', 'описывать', 'verb'], ['mention', 'упоминать', 'verb'], ['report', 'сообщать', 'verb'],
    ['announce', 'объявлять', 'verb'], ['warn', 'предупреждать', 'verb'], ['advise', 'советовать', 'verb'],
    ['suggest', 'предлагать', 'verb'], ['recommend', 'рекомендовать', 'verb'], ['offer', 'предлагать', 'verb'],
    ['accept', 'принимать', 'verb'], ['receive', 'получать', 'verb']
];

// ═══════════════════════════════════════════════
// ЗАГРУЗКА (с User-Agent — обходит блокировки CDN)
// ═══════════════════════════════════════════════
function download(url, timeoutMs = FETCH_TIMEOUT_MS, redirectsLeft = 5) {
    return new Promise((resolve, reject) => {
        if (redirectsLeft <= 0) return reject(new Error('Слишком много редиректов'));

        let parsed;
        try { parsed = new URL(url); } catch { return reject(new Error('Некорректный URL: ' + url)); }

        const lib = parsed.protocol === 'http:' ? getHttp : get;

        const options = {
            timeout: timeoutMs,
            headers: {
                'User-Agent': USER_AGENT,
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.7',
                'Accept-Language': 'en-US,en;q=0.9,ru;q=0.8',
                'Accept-Encoding': 'identity'  // ← важно: без gzip
            }
        };

        const req = lib(url, options, (res) => {
            const ct = res.headers['content-type'] || '';
            console.log(`      HTTP ${res.statusCode} (${ct.split(';')[0]})`);

            // Редиректы (включая CDN HuggingFace)
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redirectUrl = new URL(res.headers.location, url).href;
                console.log(`      → редирект на ${redirectUrl.slice(0, 70)}...`);
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
                // Прогресс раз в ~2 МБ
                if (bytes % (2 * 1024 * 1024) < chunk.length) {
                    process.stdout.write(`      Загружено: ${(bytes / 1024 / 1024).toFixed(1)} МБ\r`);
                }
            });

            res.on('end', () => {
                process.stdout.write(' '.repeat(70) + '\r');
                if (data.charCodeAt(0) === 0xFEFF) data = data.slice(1);
                resolve(data);
            });
        });

        req.on('timeout', () => req.destroy(new Error('Timeout')));
        req.on('error', reject);
    });
}

// ═══════════════════════════════════════════════
// ПАРСЕРЫ
// ═══════════════════════════════════════════════
function parseTsv(text) {
    const result = [];
    const lines = text.split('\n');
    for (const line of lines) {
        if (!line.trim()) continue;
        const parts = line.split('\t');
        if (parts.length < 2) continue;
        const en = parts[0].trim();
        const ru = parts[1].trim();
        if (!en || !ru) continue;
        result.push({ en, ru, pos: 'noun' });
    }
    return result;
}

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
        result.push({ en, ru, pos: 'noun' });
    }
    return result;
}

// ═══════════════════════════════════════════════
// ВАЛИДАЦИЯ
// ═══════════════════════════════════════════════
function isValid(ru, en) {
    if (!ru || !en) return false;
    if (ru.length < 2 || ru.length > 30) return false;
    if (en.length < 2 || en.length > 30) return false;
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
    console.log('║  🌐 Генератор словаря (цель: 3000 слов)  ║');
    console.log('╚══════════════════════════════════════════╝');
    console.log('');

    let rawWords = [];
    let sourceName = '';

    for (const source of SOURCES) {
        console.log(`📡 Источник: ${source.name}`);

        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
            try {
                console.log(`   ↳ Попытка ${attempt}/${MAX_RETRIES}...`);
                const text = await download(source.url);
                console.log(`   ↳ Размер: ${(text.length / 1024 / 1024).toFixed(2)} МБ`);

                if (text.length < 500) {
                    throw new Error('Слишком маленький ответ');
                }

                console.log(`   ↳ Парсинг...`);
                const parsed = source.type === 'tsv' ? parseTsv(text) : parseTei(text);
                console.log(`   ✓ Строк: ${parsed.length}`);

                if (parsed.length > 100) {
                    rawWords = parsed;
                    sourceName = source.name;
                    console.log(`   ✅ Успех!\n`);
                    break;
                } else {
                    throw new Error(`Мало строк: ${parsed.length}`);
                }
            } catch (err) {
                console.warn(`   ⚠️  ${err.message}`);
                if (attempt === MAX_RETRIES) {
                    console.warn(`   ❌ Источник не сработал\n`);
                } else {
                    await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
                }
            }
        }

        if (rawWords.length > 0) break;
    }

    // ─── Fallback ───
    if (rawWords.length === 0) {
        console.warn(`⚠️  Все источники недоступны. Fallback (${FALLBACK_WORDS.length} слов)`);
        rawWords = FALLBACK_WORDS.map(([en, ru, pos]) => ({ en, ru, pos }));
        sourceName = 'Встроенный fallback';
    }

    // ─── Фильтрация ───
    console.log('🔧 Обработка...');
    const seen = new Set();
    const dictionary = [];

    for (const w of rawWords) {
        if (dictionary.length >= MAX_WORDS) break;

        const ru = (w.ru || '').trim();
        const en = (w.en || '').trim();
        if (!isValid(ru, en)) continue;

        const cleanEn = en.split(/[,;]/)[0].trim();
        const key = `${cleanEn.toLowerCase()}|${ru.toLowerCase()}`;
        if (seen.has(key)) continue;
        seen.add(key);

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
        console.error('❌ Словарь пуст!');
        process.exit(1);
    }

    // Сортировка
    dictionary.sort((a, b) => a.eng.localeCompare(b.eng));
    dictionary.forEach((w, i) => { w.id = i + 1; });

    // ─── Запись ───
    console.log(`📝 Запись ${OUTPUT_PATH}...`);

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
    console.log(`   📁 Файл:     ${OUTPUT_PATH}`);
    console.log(`   📊 Слов:     ${dictionary.length}`);
    console.log(`   💾 Размер:   ${sizeKb} KB`);
    console.log(`   📡 Источник: ${sourceName}`);
    console.log('');
    console.log('📌 Первые 5 слов:');
    dictionary.slice(0, 5).forEach(w => {
        console.log(`   ${w.emoji} ${w.eng} — ${w.ru}`);
    });
    console.log('');
}

main().catch(err => {
    console.error('\n💥 Ошибка:', err.message);
    if (process.env.DEBUG) console.error(err.stack);
    process.exit(1);
});
