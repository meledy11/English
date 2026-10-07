// quizgen.js v6 — все виды вопросов, интеграция без правок index.html

// ═══════════════════════════════════════════════
// ТЕГИ СЛОВ
// ═══════════════════════════════════════════════
const TAGS = {
    animal: ['cat', 'dog', 'bird', 'fish', 'horse', 'cow', 'pig', 'sheep',
             'mouse', 'lion', 'elephant', 'monkey', 'duck', 'chicken', 'bear'],
    food:   ['apple', 'bread', 'cheese', 'egg', 'meat', 'soup', 'salad',
             'cake', 'chocolate', 'coffee', 'tea', 'milk', 'juice', 'rice',
             'sugar', 'salt', 'butter', 'orange', 'banana', 'tomato', 'potato'],
    color:  ['red', 'blue', 'green', 'yellow', 'black', 'white', 'brown',
             'pink', 'orange', 'purple', 'grey', 'gold', 'silver'],
    house:  ['house', 'room', 'door', 'window', 'table', 'chair', 'bed',
             'kitchen', 'bathroom', 'bedroom', 'floor', 'wall', 'roof',
             'garden', 'lamp', 'mirror', 'cup', 'plate', 'bowl'],
    city:   ['city', 'street', 'road', 'bridge', 'park', 'shop', 'market',
             'school', 'hospital', 'bank', 'station', 'airport', 'hotel',
             'restaurant', 'church', 'castle', 'museum', 'library'],
    transport: ['car', 'bus', 'train', 'plane', 'ship', 'bike', 'taxi', 'boat'],
    clothes: ['shirt', 'dress', 'coat', 'hat', 'shoe', 'boot', 'jacket',
              'glove', 'sock', 'tie', 'skirt'],
    nature: ['sun', 'moon', 'star', 'sky', 'sea', 'river', 'mountain',
             'forest', 'tree', 'flower', 'grass', 'stone', 'sand', 'snow',
             'rain', 'wind', 'cloud', 'island', 'beach'],
    people: ['man', 'woman', 'boy', 'girl', 'child', 'baby', 'friend',
             'family', 'mother', 'father', 'brother', 'sister', 'teacher',
             'student', 'doctor', 'driver', 'worker', 'artist'],
    tech:   ['computer', 'phone', 'camera', 'radio', 'television', 'video'],
    action: ['run', 'walk', 'jump', 'swim', 'fly', 'sing', 'dance', 'speak',
             'read', 'write', 'work', 'study', 'play', 'cook', 'draw',
             'drive', 'listen', 'look', 'smile', 'laugh', 'cry', 'shout',
             'eat', 'drink', 'sleep', 'wash', 'clean', 'help'],
    transitive: ['put', 'take', 'make', 'do', 'get', 'find', 'buy', 'sell',
                 'give', 'bring', 'send', 'show', 'tell', 'ask', 'have',
                 'like', 'love', 'need', 'want', 'see', 'hear', 'feel',
                 'open', 'close', 'break', 'fix', 'choose', 'share', 'build'],
    motion: ['go', 'come', 'arrive', 'leave', 'return', 'enter', 'exit',
             'climb', 'fall', 'rise', 'travel', 'visit', 'move', 'stay'],
    emotion: ['happy', 'sad', 'angry', 'tired', 'hungry', 'thirsty', 'afraid',
              'glad', 'proud', 'surprised', 'excited'],
    quality: ['good', 'bad', 'big', 'small', 'new', 'old', 'young',
              'beautiful', 'easy', 'difficult', 'important', 'interesting',
              'boring', 'funny', 'serious', 'quiet', 'loud', 'clean', 'dirty',
              'light', 'dark', 'strong', 'weak', 'rich', 'poor', 'free',
              'busy', 'full', 'empty', 'right', 'wrong', 'long', 'short',
              'tall', 'low', 'wide', 'narrow', 'thick', 'thin', 'heavy']
};

function hasTag(word, tag) {
    return TAGS[tag] && TAGS[tag].includes(word.toLowerCase());
}

// ═══════════════════════════════════════════════
// ШАБЛОНЫ ПРЕДЛОЖЕНИЙ (сокращённо — ключевые)
// ═══════════════════════════════════════════════
const TPL_ANIMAL = [
    { en: 'I have a {a} {w}.', ru: 'У меня есть {r}.' },
    { en: 'The {w} is big.', ru: '{R} большой.' },
    { en: 'The {w} is sleeping.', ru: '{R} спит.' },
    { en: 'Look at the {w}!', ru: 'Посмотри на {r_acc}!' },
    { en: 'Do you like {w}s?', ru: 'Ты любишь {r}?' },
    { en: 'I see a {a} {w}.', ru: 'Я вижу {r}.' }
];
const TPL_FOOD = [
    { en: 'I like {w}.', ru: 'Я люблю {r}.' },
    { en: 'I eat {w} every day.', ru: 'Я ем {r} каждый день.' },
    { en: 'Do you want {w}?', ru: 'Хочешь {r}?' },
    { en: 'I bought some {w}.', ru: 'Я купил {r}.' },
    { en: 'This {w} is good.', ru: 'Это {r} хороший.' }
];
const TPL_COLOR = [
    { en: 'It is {w}.', ru: 'Это {r}.' },
    { en: 'The car is {w}.', ru: 'Машина {r}.' },
    { en: 'My favorite color is {w}.', ru: 'Мой любимый цвет — {r}.' },
    { en: 'She has a {w} dress.', ru: 'У неё {r} платье.' },
    { en: 'The sky is {w} today.', ru: 'Небо сегодня {r}.' }
];
const TPL_HOUSE = [
    { en: 'The {w} is big.', ru: '{R} большой.' },
    { en: 'Open the {w}.', ru: 'Открой {r_acc}.' },
    { en: 'Close the {w}.', ru: 'Закрой {r_acc}.' },
    { en: 'Where is the {w}?', ru: 'Где {r}?' },
    { en: 'This is a nice {w}.', ru: 'Это хороший {r}.' }
];
const TPL_CITY = [
    { en: 'I go to the {w}.', ru: 'Я иду в {r_acc}.' },
    { en: 'The {w} is near my house.', ru: '{R} рядом с домом.' },
    { en: 'Let\'s go to the {w}.', ru: 'Пойдём в {r_acc}.' },
    { en: 'The {w} is very big.', ru: '{R} очень большой.' }
];
const TPL_TRANSPORT = [
    { en: 'I go by {w}.', ru: 'Я еду на {r}.' },
    { en: 'The {w} is very fast.', ru: '{R} очень быстрый.' },
    { en: 'The {w} is red.', ru: '{R} красный.' },
    { en: 'I have a {a} {w}.', ru: 'У меня есть {r}.' }
];
const TPL_CLOTHES = [
    { en: 'I wear a {a} {w}.', ru: 'Я ношу {r_acc}.' },
    { en: 'This {w} is new.', ru: 'Этот {r} новый.' },
    { en: 'Put on your {w}.', ru: 'Надень {r_acc}.' },
    { en: 'Where is my {w}?', ru: 'Где мой {r}?' }
];
const TPL_NATURE = [
    { en: 'The {w} is beautiful.', ru: '{R} красивый.' },
    { en: 'I like the {w}.', ru: 'Мне нравится {r}.' },
    { en: 'Look at the {w}!', ru: 'Посмотри на {r_acc}!' },
    { en: 'I see the {w}.', ru: 'Я вижу {r_acc}.' }
];
const TPL_PEOPLE = [
    { en: 'He is a {a} {w}.', ru: 'Он {r}.' },
    { en: 'She is a {a} {w}.', ru: 'Она {r}.' },
    { en: 'This is my {w}.', ru: 'Это мой {r}.' },
    { en: 'The {w} is very kind.', ru: '{R} очень добрый.' }
];
const TPL_TECH = [
    { en: 'I have a {a} {w}.', ru: 'У меня есть {r}.' },
    { en: 'This {w} is new.', ru: 'Этот {r} новый.' },
    { en: 'I use my {w} every day.', ru: 'Я использую {r_acc} каждый день.' }
];
const TPL_ACTION = [
    { en: 'I {w} every day.', ru: 'Я {r} каждый день.' },
    { en: 'She can {w} very well.', ru: 'Она умеет {r} очень хорошо.' },
    { en: 'Let\'s {w}!', ru: 'Давай {r}!' },
    { en: 'I like to {w}.', ru: 'Я люблю {r}.' },
    { en: 'Do you {w}?', ru: 'Ты {r}?' }
];
const TPL_TRANSITIVE = [
    { en: 'I {w} it.', ru: 'Я это {r}.' },
    { en: 'Please {w} it.', ru: 'Пожалуйста, {r} это.' },
    { en: 'Can you {w} it?', ru: 'Ты можешь {r} это?' }
];
const TPL_MOTION = [
    { en: 'I {w} to school.', ru: 'Я {r} в школу.' },
    { en: 'Let\'s {w}!', ru: 'Давай {r}!' },
    { en: 'She wants to {w}.', ru: 'Она хочет {r}.' }
];
const TPL_EMOTION = [
    { en: 'I am {w}.', ru: 'Я {r}.' },
    { en: 'She looks {w}.', ru: 'Она выглядит {r}.' },
    { en: 'Why are you {w}?', ru: 'Почему ты {r}?' }
];
const TPL_QUALITY = [
    { en: 'It is very {w}.', ru: 'Это очень {r}.' },
    { en: 'The house is {w}.', ru: 'Дом {r}.' },
    { en: 'This is a {w} day.', ru: 'Это {r} день.' }
];
const TPL_ADVERB = [
    { en: 'He speaks {w}.', ru: 'Он говорит {r}.' },
    { en: 'She works {w}.', ru: 'Она работает {r}.' },
    { en: 'Do it {w}!', ru: 'Сделай это {r}!' }
];
const TPL_PRONOUN = [
    { en: '{w} is my friend.', ru: '{R} — мой друг.' },
    { en: 'I know {w}.', ru: 'Я знаю {r_acc}.' },
    { en: 'Give it to {w}.', ru: 'Дай это {r_acc}.' }
];
const TPL_NUMERAL = [
    { en: 'I have {w} apples.', ru: 'У меня {r} яблок.' },
    { en: 'Give me {w} minutes.', ru: 'Дай мне {r} минут.' }
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
function getArticle(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(word[0].toLowerCase()) ? 'an' : 'a';
}
function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }
function toAccusative(ru) {
    if (ru.endsWith('а')) return ru.slice(0, -1) + 'у';
    if (ru.endsWith('я')) return ru.slice(0, -1) + 'ю';
    if (ru.endsWith('ь')) return ru.slice(0, -1) + 'ь';
    return ru;
}
function fillTemplate(tpl, word) {
    const r = word.ru, rCap = capitalize(r), rAcc = toAccusative(r), a = getArticle(word.eng);
    return {
        en: tpl.en.replace(/{w}/g, word.eng).replace(/{a}/g, a),
        ru: tpl.ru.replace(/{r}/g, r).replace(/{R}/g, rCap).replace(/{r_acc}/g, rAcc)
    };
}

function getTemplatesFor(word) {
    const en = word.eng.toLowerCase();
    const pos = word.pos;
    if (hasTag(en, 'animal'))       return TPL_ANIMAL;
    if (hasTag(en, 'food'))         return TPL_FOOD;
    if (hasTag(en, 'color'))        return TPL_COLOR;
    if (hasTag(en, 'house'))        return TPL_HOUSE;
    if (hasTag(en, 'city'))         return TPL_CITY;
    if (hasTag(en, 'transport'))    return TPL_TRANSPORT;
    if (hasTag(en, 'clothes'))      return TPL_CLOTHES;
    if (hasTag(en, 'nature'))       return TPL_NATURE;
    if (hasTag(en, 'people'))       return TPL_PEOPLE;
    if (hasTag(en, 'tech'))         return TPL_TECH;
    if (pos === 'noun')             return TPL_HOUSE;
    if (pos === 'verb') {
        if (hasTag(en, 'transitive')) return TPL_TRANSITIVE;
        if (hasTag(en, 'motion'))     return TPL_MOTION;
        return TPL_ACTION;
    }
    if (pos === 'adjective') {
        if (hasTag(en, 'emotion'))    return TPL_EMOTION;
        return TPL_QUALITY;
    }
    if (pos === 'adverb')           return TPL_ADVERB;
    if (pos === 'pronoun')          return TPL_PRONOUN;
    if (pos === 'numeral')          return TPL_NUMERAL;
    return null;
}

function pickTemplate(word) {
    const templates = getTemplatesFor(word);
    if (!templates || !templates.length) return null;
    const tpl = templates[Math.floor(Math.random() * templates.length)];
    const filled = fillTemplate(tpl, word);
    return { en: filled.en, ru: filled.ru, word };
}

function generateSentence(word) {
    return pickTemplate(word) || null;
}

function generateSentencesList(words, count = 15) {
    if (!words.length) return [];
    const sample = shuffle(words).slice(0, count * 3);
    const result = [];
    for (const w of sample) {
        const s = generateSentence(w);
        if (s) result.push(s);
        if (result.length >= count) break;
    }
    return result;
}

// ═══════════════════════════════════════════════
// ВСЕ 7 ТИПОВ ВОПРОСОВ
// ═══════════════════════════════════════════════

function getSimilarWords(word, allWords, count = 3) {
    const samePos = allWords.filter(w => w.pos === word.pos && w.eng !== word.eng);
    return shuffle(samePos).slice(0, count);
}

// 1. EN → RU
function qENtoRU(w, others) {
    if (!w.ru) return null;
    const opts = shuffle([w.ru, ...others.map(o => o.ru)]).slice(0, 4);
    return {
        type: 'en2ru',
        q: `Как переводится слово <b>${w.eng}</b>?`,
        correct: w.ru,
        options: opts,
        hint: `${w.tr || ''} · ${w.pos}`,
        word: w
    };
}

// 2. RU → EN
function qRUtoEN(w, others) {
    if (!w.ru) return null;
    const opts = shuffle([w.eng, ...others.map(o => o.eng)]).slice(0, 4);
    return {
        type: 'ru2en',
        q: `Как по-английски «<b>${w.ru}</b>»?`,
        correct: w.eng,
        options: opts,
        hint: `${w.pos}`,
        word: w
    };
}

// 3. Транскрипция
function qTranscription(w, others) {
    if (!w.tr) return null;
    const oth = others.filter(o => o.tr);
    if (oth.length < 3) return null;
    return {
        type: 'transcription',
        q: `Какая транскрипция у слова <b>${w.eng}</b>?`,
        correct: w.tr,
        options: shuffle([w.tr, ...oth.slice(0, 3).map(o => o.tr)]),
        hint: `${w.ru}`,
        word: w
    };
}

// 4. Часть речи
function qPartOfSpeech(w) {
    const posRu = { noun: 'существительное', verb: 'глагол', adjective: 'прилагательное', adverb: 'наречие' };
    if (!posRu[w.pos]) return null;
    return {
        type: 'pos',
        q: `Какая часть речи у слова <b>${w.eng}</b>?`,
        correct: posRu[w.pos],
        options: shuffle(Object.values(posRu)),
        hint: w.ru,
        word: w
    };
}

// 5. Вставь пропущенное слово
function qFillBlank(w, others) {
    const t = pickTemplate(w);
    if (!t) return null;
    const re = new RegExp('\\b' + w.eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*\\b', 'i');
    if (!re.test(t.en)) return null;
    return {
        type: 'fill',
        q: `Вставь пропущенное слово:<br><b>${t.en.replace(re, '___')}</b>`,
        correct: w.eng,
        options: shuffle([w.eng, ...others.slice(0, 3).map(o => o.eng)]),
        hint: `${w.ru} · ${t.ru}`,
        word: w
    };
}

// 6. Перевод предложения EN → RU
function qTranslateSentence(w, others, allWords) {
    const t = pickTemplate(w);
    if (!t) return null;
    // Готовим 3 неправильных перевода
    const wrongSentences = [];
    for (const o of others.slice(0, 5)) {
        const ot = pickTemplate(o);
        if (ot && ot.ru !== t.ru) wrongSentences.push(ot.ru);
        if (wrongSentences.length >= 3) break;
    }
    if (wrongSentences.length < 3) return null;
    return {
        type: 'sentence-ru',
        q: `Как переводится предложение?<br><b>${t.en}</b>`,
        correct: t.ru,
        options: shuffle([t.ru, ...wrongSentences]),
        hint: `${w.eng} — ${w.ru}`,
        word: w
    };
}

// 7. Найди английский вариант RU → EN
function qChooseSentenceEN(w, others) {
    const t = pickTemplate(w);
    if (!t) return null;
    const wrongSentences = [];
    for (const o of others.slice(0, 5)) {
        const ot = pickTemplate(o);
        if (ot && ot.en !== t.en) wrongSentences.push(ot.en);
        if (wrongSentences.length >= 3) break;
    }
    if (wrongSentences.length < 3) return null;
    return {
        type: 'sentence-en',
        q: `Как сказать по-английски?<br><b>${t.ru}</b>`,
        correct: t.en,
        options: shuffle([t.en, ...wrongSentences]),
        hint: `${w.eng} — ${w.ru}`,
        word: w
    };
}

// Все билдеры
const ALL_BUILDERS = [
    qENtoRU,
    qRUtoEN,
    qTranscription,
    qPartOfSpeech,
    qFillBlank,
    qTranslateSentence,
    qChooseSentenceEN
];

// ═══════════════════════════════════════════════
// ГЛАВНАЯ ФУНКЦИЯ — генерация набора вопросов
// ═══════════════════════════════════════════════
function generateQuiz(words, count = 10) {
    if (!words || !words.length) return [];
    const sample = shuffle(words).slice(0, count * 3);
    const questions = [];

    for (const word of sample) {
        if (questions.length >= count) break;
        const others = getSimilarWords(word, words, 5);
        const types = shuffle([...ALL_BUILDERS]);
        for (const builder of types) {
            try {
                const q = builder(word, others, words);
                if (q && q.options && q.options.length >= 2) {
                    const unique = [...new Set(q.options)];
                    if (unique.length >= 2 && unique.includes(q.correct)) {
                        q.options = shuffle(unique);
                        questions.push(q);
                        break;
                    }
                }
            } catch (e) {}
        }
    }
    return questions;
}

// ═══════════════════════════════════════════════
// ЭКСПОРТ — совместим с текущим index.html
// ═══════════════════════════════════════════════
if (typeof window !== 'undefined') {
    window.quizgen = {
        generateSentence,
        generateQuiz,
        generateSentencesList,
        pickTemplate,
        getTemplatesFor,
        TAGS,
        // Отдельные билдеры — на случай, если захочется вручную
        builders: {
            qENtoRU, qRUtoEN, qTranscription, qPartOfSpeech,
            qFillBlank, qTranslateSentence, qChooseSentenceEN
        }
    };
    console.log('✅ quizgen.js v6 — 7 типов вопросов, интеграция без правок HTML');
}
