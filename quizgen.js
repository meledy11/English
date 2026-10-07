// quizgen.js — генератор заданий из dictionary
// Создаёт предложения и вопросы на основе слов из dictionary.js

// ═══════════════════════════════════════════════
// ШАБЛОНЫ ПРЕДЛОЖЕНИЙ ПО ЧАСТЯМ РЕЧИ
// {w} — подставляется английское слово
// {ru} — русский перевод (для контекста)
// ═══════════════════════════════════════════════

const SENTENCE_TEMPLATES = {
    noun: [
        { en: 'I have a {w}.', ru: 'У меня есть {ru}.' },
        { en: 'The {w} is on the table.', ru: '{Ru} на столе.' },
        { en: 'I like the {w}.', ru: 'Мне нравится {ru}.' },
        { en: 'Where is the {w}?', ru: 'Где {ru}?' },
        { en: 'This is my {w}.', ru: 'Это моя/мой {ru}.' },
        { en: 'The {w} is very big.', ru: '{Ru} очень большой.' },
        { en: 'I need a {w}.', ru: 'Мне нужен {ru}.' },
        { en: 'Do you see the {w}?', ru: 'Ты видишь {ru}?' },
        { en: 'Look at the {w}!', ru: 'Посмотри на {ru}!' },
        { en: 'I bought a new {w}.', ru: 'Я купил новый {ru}.' }
    ],
    verb: [
        { en: 'I {w} every day.', ru: 'Я {ru} каждый день.' },
        { en: 'She wants to {w}.', ru: 'Она хочет {ru}.' },
        { en: 'Do you {w}?', ru: 'Ты {ru}?' },
        { en: 'We can {w} together.', ru: 'Мы можем {ru} вместе.' },
        { en: 'He doesn\'t {w}.', ru: 'Он не {ru}.' },
        { en: 'Let\'s {w}!', ru: 'Давай {ru}!' },
        { en: 'I like to {w}.', ru: 'Я люблю {ru}.' },
        { en: 'Can you {w}?', ru: 'Ты можешь {ru}?' },
        { en: 'They {w} very well.', ru: 'Они хорошо {ru}.' },
        { en: 'I want to {w} now.', ru: 'Я хочу {ru} сейчас.' }
    ],
    adjective: [
        { en: 'It is very {w}.', ru: 'Это очень {ru}.' },
        { en: 'The house is {w}.', ru: 'Дом {ru}.' },
        { en: 'She looks {w}.', ru: 'Она выглядит {ru}.' },
        { en: 'This is a {w} day.', ru: 'Это {ru} день.' },
        { en: 'I feel {w}.', ru: 'Я чувствую себя {ru}.' },
        { en: 'The weather is {w} today.', ru: 'Погода сегодня {ru}.' },
        { en: 'Is it {w}?', ru: 'Это {ru}?' },
        { en: 'That\'s a {w} idea.', ru: 'Это {ru} идея.' },
        { en: 'The film was {w}.', ru: 'Фильм был {ru}.' },
        { en: 'Why are you {w}?', ru: 'Почему ты {ru}?' }
    ],
    adverb: [
        { en: 'He speaks {w}.', ru: 'Он говорит {ru}.' },
        { en: 'I {w} understand.', ru: 'Я {ru} понимаю.' },
        { en: 'She works {w}.', ru: 'Она работает {ru}.' },
        { en: 'Do it {w}!', ru: 'Сделай это {ru}!' },
        { en: 'They came {w}.', ru: 'Они пришли {ru}.' }
    ],
    pronoun: [
        { en: '{w} is my friend.', ru: '{Ru} — мой друг.' },
        { en: 'I know {w}.', ru: 'Я знаю {ru}.' },
        { en: 'Give it to {w}.', ru: 'Дай это {ru}.' },
        { en: 'Is {w} here?', ru: '{Ru} здесь?' },
        { en: 'I saw {w} yesterday.', ru: 'Я видел {ru} вчера.' }
    ],
    preposition: [
        { en: 'The book is {w} the table.', ru: 'Книга {ru} столом.' },
        { en: 'Go {w} the street.', ru: 'Иди {ru} улице.' },
        { en: 'I live {w} London.', ru: 'Я живу {ru} Лондоне.' }
    ],
    numeral: [
        { en: 'I have {w} apples.', ru: 'У меня {ru} яблок.' },
        { en: 'She is {w} years old.', ru: 'Ей {ru} лет.' },
        { en: 'There are {w} books.', ru: 'Здесь {ru} книг.' },
        { en: 'Give me {w} minutes.', ru: 'Дай мне {ru} минут.' }
    ],
    conjunction: [
        { en: 'I like tea {w} coffee.', ru: 'Я люблю чай {ru} кофе.' },
        { en: 'Come {w} go.', ru: 'Приходи {ru} уходи.' }
    ],
    interjection: [
        { en: '{w}, how are you?', ru: '{Ru}, как дела?' },
        { en: '{w}! Nice to meet you.', ru: '{Ru}! Приятно познакомиться.' }
    ]
};

// ═══════════════════════════════════════════════
// ШАБЛОНЫ ВОПРОСОВ (для генерации тестов)
// ═══════════════════════════════════════════════

const QUESTION_TEMPLATES = [
    // Перевод EN → RU
    (w, others) => ({
        type: 'translate',
        q: `Как переводится слово <b>${w.eng}</b>?`,
        correct: w.ru,
        options: shuffle([w.ru, ...others.map(o => o.ru)]).slice(0, 4),
        hint: `${w.tr} · ${w.pos}`,
        word: w
    }),
    // Перевод RU → EN
    (w, others) => ({
        type: 'translate-back',
        q: `Как по-английски «<b>${w.ru}</b>»?`,
        correct: w.eng,
        options: shuffle([w.eng, ...others.map(o => o.eng)]).slice(0, 4),
        hint: `${w.pos}`,
        word: w
    }),
    // Транскрипция
    (w, others) => ({
        type: 'transcription',
        q: `Какая транскрипция у слова <b>${w.eng}</b>?`,
        correct: w.tr,
        options: shuffle([w.tr, ...others.filter(o => o.tr).map(o => o.tr)]).slice(0, 4),
        hint: `${w.ru} · ${w.pos}`,
        word: w
    }),
    // Часть речи
    (w) => ({
        type: 'pos',
        q: `Какая часть речи у слова <b>${w.eng}</b>?`,
        correct: w.pos,
        options: shuffle([w.pos, 'noun', 'verb', 'adjective', 'adverb']).slice(0, 4),
        hint: w.ru,
        word: w
    }),
    // Вставь пропущенное слово в предложение
    (w, others) => {
        const template = pickTemplate(w);
        if (!template) return null;
        const sentence = template.en.replace(/{w}/g, '___');
        return {
            type: 'fill',
            q: `Вставь пропущенное слово:<br><b>${sentence}</b>`,
            correct: w.eng,
            options: shuffle([w.eng, ...others.slice(0, 3).map(o => o.eng)]),
            hint: `${w.ru} · ${template.ru.replace(/{ru}/g, w.ru)}`,
            word: w,
            sentence: template.en.replace(/{w}/g, `<span style="color:#c49a6c;font-weight:bold;">${w.eng}</span>`)
        };
    }
];

// ═══════════════════════════════════════════════
// ВСПОМОГАТЕЛЬНЫЕ
// ═══════════════════════════════════════════════

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function pickTemplate(word) {
    const templates = SENTENCE_TEMPLATES[word.pos] || SENTENCE_TEMPLATES.noun;
    if (!templates || !templates.length) return null;
    return templates[Math.floor(Math.random() * templates.length)];
}

// Возвращает случайные слова той же части речи
function getSimilarWords(word, allWords, count = 3) {
    const samePos = allWords.filter(w => w.pos === word.pos && w.eng !== word.eng);
    return shuffle(samePos).slice(0, count);
}

// ═══════════════════════════════════════════════
// ГЕНЕРАЦИЯ ПРЕДЛОЖЕНИЯ ИЗ СЛОВА
// ═══════════════════════════════════════════════

function generateSentence(word) {
    const t = pickTemplate(word);
    if (!t) return null;
    
    // Подставляем слово в английский шаблон
    const en = t.en.replace(/{w}/g, word.eng);
    
    // Подставляем перевод (с правильной заглавной буквой)
    const ruWord = word.ru;
    const ruCap = ruWord.charAt(0).toUpperCase() + ruWord.slice(1);
    const ru = t.ru.replace(/{ru}/g, ruWord).replace(/{Ru}/g, ruCap);
    
    return { en, ru, word };
}

// ═══════════════════════════════════════════════
// ГЕНЕРАЦИЯ НАБОРА ВОПРОСОВ
// ═══════════════════════════════════════════════

function generateQuiz(words, count = 10) {
    if (!words || !words.length) return [];
    
    // Берём случайные слова
    const sample = shuffle(words).slice(0, count);
    const questions = [];
    
    sample.forEach(word => {
        // Выбираем случайный тип вопроса
        const qTypes = ['translate', 'translate-back', 'pos', 'fill'];
        if (word.tr) qTypes.push('transcription');
        
        const type = qTypes[Math.floor(Math.random() * qTypes.length)];
        const others = getSimilarWords(word, words, 5);
        
        let q;
        try {
            if (type === 'translate') q = QUESTION_TEMPLATES[0](word, others);
            else if (type === 'translate-back') q = QUESTION_TEMPLATES[1](word, others);
            else if (type === 'transcription') q = QUESTION_TEMPLATES[2](word, others);
            else if (type === 'pos') q = QUESTION_TEMPLATES[3](word);
            else q = QUESTION_TEMPLATES[4](word, others);
        } catch (e) {
            q = QUESTION_TEMPLATES[0](word, others);
        }
        
        if (q && q.options && q.options.length >= 2) {
            // Убираем дубликаты в опциях
            const uniqueOpts = [...new Set(q.options)];
            if (uniqueOpts.length >= 2) {
                q.options = shuffle(uniqueOpts);
                questions.push(q);
            }
        }
    });
    
    return questions;
}

// ═══════════════════════════════════════════════
// ЭКСПОРТ
// ═══════════════════════════════════════════════

if (typeof window !== 'undefined') {
    window.quizgen = {
        generateSentence,
        generateQuiz,
        SENTENCE_TEMPLATES,
        QUESTION_TEMPLATES
    };
    console.log('✅ quizgen.js загружен');
}
