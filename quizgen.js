// quizgen.js v5 — тематические шаблоны

// ═══════════════════════════════════════════════
// ТЕГИ СЛОВ (по английскому слову)
// ═══════════════════════════════════════════════

const TAGS = {
    // ЖИВОТНЫЕ
    animal: ['cat', 'dog', 'bird', 'fish', 'horse', 'cow', 'pig', 'sheep',
             'mouse', 'lion', 'elephant', 'monkey', 'duck', 'chicken', 'bear'],
    // ЕДА
    food:   ['apple', 'bread', 'cheese', 'egg', 'meat', 'soup', 'salad',
             'cake', 'chocolate', 'coffee', 'tea', 'milk', 'juice', 'rice',
             'sugar', 'salt', 'butter', 'orange', 'banana', 'tomato', 'potato'],
    // ЦВЕТА
    color:  ['red', 'blue', 'green', 'yellow', 'black', 'white', 'brown',
             'pink', 'orange', 'purple', 'grey', 'gold', 'silver'],
    // ДОМ / МЕБЕЛЬ
    house:  ['house', 'room', 'door', 'window', 'table', 'chair', 'bed',
             'kitchen', 'bathroom', 'bedroom', 'floor', 'wall', 'roof',
             'garden', 'lamp', 'mirror', 'cup', 'plate', 'bowl'],
    // ГОРОД / МЕСТА
    city:   ['city', 'street', 'road', 'bridge', 'park', 'shop', 'market',
             'school', 'hospital', 'bank', 'station', 'airport', 'hotel',
             'restaurant', 'church', 'castle', 'museum', 'library'],
    // ТРАНСПОРТ
    transport: ['car', 'bus', 'train', 'plane', 'ship', 'bike', 'taxi', 'boat'],
    // ОДЕЖДА
    clothes: ['shirt', 'dress', 'coat', 'hat', 'shoe', 'boot', 'jacket',
              'glove', 'sock', 'tie', 'skirt'],
    // ПРИРОДА
    nature: ['sun', 'moon', 'star', 'sky', 'sea', 'river', 'mountain',
             'forest', 'tree', 'flower', 'grass', 'stone', 'sand', 'snow',
             'rain', 'wind', 'cloud', 'island', 'beach'],
    // ЛЮДИ
    people: ['man', 'woman', 'boy', 'girl', 'child', 'baby', 'friend',
             'family', 'mother', 'father', 'brother', 'sister', 'teacher',
             'student', 'doctor', 'driver', 'worker', 'artist'],
    // ТЕХНИКА
    tech:   ['computer', 'phone', 'camera', 'radio', 'television', 'video'],
    // ДЕЙСТВИЯ (глаголы движения/быта)
    action: ['run', 'walk', 'jump', 'swim', 'fly', 'sing', 'dance', 'speak',
             'read', 'write', 'work', 'study', 'play', 'cook', 'draw',
             'drive', 'listen', 'look', 'smile', 'laugh', 'cry', 'shout',
             'eat', 'drink', 'sleep', 'wash', 'clean', 'help'],
    // ГЛАГОЛЫ-ПЕРЕХОДНЫЕ
    transitive: ['put', 'take', 'make', 'do', 'get', 'find', 'buy', 'sell',
                 'give', 'bring', 'send', 'show', 'tell', 'ask', 'have',
                 'like', 'love', 'need', 'want', 'see', 'hear', 'feel',
                 'open', 'close', 'break', 'fix', 'choose', 'share', 'build'],
    // ГЛАГОЛЫ ДВИЖЕНИЯ
    motion: ['go', 'come', 'arrive', 'leave', 'return', 'enter', 'exit',
             'climb', 'fall', 'rise', 'travel', 'visit', 'move', 'stay'],
    // ЭМОЦИИ (прилагательные)
    emotion: ['happy', 'sad', 'angry', 'tired', 'hungry', 'thirsty', 'afraid',
              'glad', 'proud', 'surprised', 'excited'],
    // КАЧЕСТВА (прилагательные)
    quality: ['good', 'bad', 'big', 'small', 'new', 'old', 'young',
              'beautiful', 'easy', 'difficult', 'important', 'interesting',
              'boring', 'funny', 'serious', 'quiet', 'loud', 'clean', 'dirty',
              'light', 'dark', 'strong', 'weak', 'rich', 'poor', 'free',
              'busy', 'full', 'empty', 'right', 'wrong', 'long', 'short',
              'tall', 'low', 'wide', 'narrow', 'thick', 'thin', 'heavy']
};

// Проверка: слово в теге?
function hasTag(word, tag) {
    return TAGS[tag] && TAGS[tag].includes(word.toLowerCase());
}

function getTag(word) {
    for (const tag of Object.keys(TAGS)) {
        if (hasTag(word, tag)) return tag;
    }
    return null;
}

// ═══════════════════════════════════════════════
// БОЛЬШИЕ НАБОРЫ ШАБЛОНОВ ПО ТЕГАМ
// ═══════════════════════════════════════════════

// ─── ЖИВОТНЫЕ ───
const TPL_ANIMAL = [
    { en: 'I have a {a} {w}.', ru: 'У меня есть {r}.' },
    { en: 'The {w} is big.', ru: '{R} большой.' },
    { en: 'The {w} is small.', ru: '{R} маленький.' },
    { en: 'I see a {a} {w}.', ru: 'Я вижу {r}.' },
    { en: 'The {w} runs fast.', ru: '{R} бегает быстро.' },
    { en: 'The {w} is sleeping.', ru: '{R} спит.' },
    { en: 'Look at the {w}!', ru: 'Посмотри на {r_acc}!' },
    { en: 'Do you like {w}s?', ru: 'Ты любишь {r}?' },
    { en: 'Where is the {w}?', ru: 'Где {r}?' },
    { en: 'This is my {w}.', ru: 'Это мой {r}.' }
];

// ─── ЕДА ───
const TPL_FOOD = [
    { en: 'I like {w}.', ru: 'Я люблю {r}.' },
    { en: 'I eat {w} every day.', ru: 'Я ем {r} каждый день.' },
    { en: 'Do you want {w}?', ru: 'Хочешь {r}?' },
    { en: 'This {w} is good.', ru: 'Это {r} хороший.' },
    { en: 'I bought some {w}.', ru: 'Я купил {r}.' },
    { en: 'Where is my {w}?', ru: 'Где мой {r}?' },
    { en: 'The {w} is on the table.', ru: '{R} на столе.' },
    { en: 'Please give me some {w}.', ru: 'Дай мне {r}, пожалуйста.' },
    { en: 'I have some {w}.', ru: 'У меня есть {r}.' },
    { en: 'This {w} tastes good.', ru: 'Этот {r} вкусный.' }
];

// ─── ЦВЕТА ───
const TPL_COLOR = [
    { en: 'It is {w}.', ru: 'Это {r}.' },
    { en: 'The car is {w}.', ru: 'Машина {r}.' },
    { en: 'My favorite color is {w}.', ru: 'Мой любимый цвет — {r}.' },
    { en: 'I like {w}.', ru: 'Мне нравится {r}.' },
    { en: 'The sky is {w} today.', ru: 'Небо сегодня {r}.' },
    { en: 'She has a {w} dress.', ru: 'У неё {r} платье.' },
    { en: 'Do you like {w}?', ru: 'Тебе нравится {r}?' },
    { en: 'This is a {w} flower.', ru: 'Это {r} цветок.' }
];

// ─── ДОМ ───
const TPL_HOUSE = [
    { en: 'The {w} is big.', ru: '{R} большой.' },
    { en: 'The {w} is in the house.', ru: '{R} в доме.' },
    { en: 'Open the {w}.', ru: 'Открой {r_acc}.' },
    { en: 'Close the {w}.', ru: 'Закрой {r_acc}.' },
    { en: 'The {w} is open.', ru: '{R} открыт.' },
    { en: 'The {w} is closed.', ru: '{R} закрыт.' },
    { en: 'Look at the {w}.', ru: 'Посмотри на {r_acc}.' },
    { en: 'Where is the {w}?', ru: 'Где {r}?' },
    { en: 'This is a nice {w}.', ru: 'Это хороший {r}.' },
    { en: 'I clean the {w} every day.', ru: 'Я мою {r_acc} каждый день.' }
];

// ─── ГОРОД / МЕСТА ───
const TPL_CITY = [
    { en: 'I go to the {w}.', ru: 'Я иду в {r_acc}.' },
    { en: 'The {w} is near my house.', ru: '{R} рядом с моим домом.' },
    { en: 'Where is the {w}?', ru: 'Где {r}?' },
    { en: 'Let\'s go to the {w}.', ru: 'Пойдём в {r_acc}.' },
    { en: 'I like this {w}.', ru: 'Мне нравится этот {r}.' },
    { en: 'The {w} is very big.', ru: '{R} очень большой.' },
    { en: 'Do you know the {w}?', ru: 'Ты знаешь {r_acc}?' },
    { en: 'The {w} is in the city centre.', ru: '{R} в центре города.' }
];

// ─── ТРАНСПОРТ ───
const TPL_TRANSPORT = [
    { en: 'I go by {w}.', ru: 'Я еду на {r}.' },
    { en: 'The {w} is very fast.', ru: '{R} очень быстрый.' },
    { en: 'I have a {a} {w}.', ru: 'У меня есть {r}.' },
    { en: 'The {w} is red.', ru: '{R} красный.' },
    { en: 'Where is my {w}?', ru: 'Где мой {r}?' },
    { en: 'I like this {w}.', ru: 'Мне нравится этот {r}.' },
    { en: 'The {w} is in the street.', ru: '{R} на улице.' }
];

// ─── ОДЕЖДА ───
const TPL_CLOTHES = [
    { en: 'I wear a {a} {w}.', ru: 'Я ношу {r_acc}.' },
    { en: 'This {w} is new.', ru: 'Этот {r} новый.' },
    { en: 'I like this {w}.', ru: 'Мне нравится этот {r}.' },
    { en: 'Where is my {w}?', ru: 'Где мой {r}?' },
    { en: 'Put on your {w}.', ru: 'Надень {r_acc}.' },
    { en: 'The {w} is very beautiful.', ru: '{R} очень красивый.' },
    { en: 'I need a {a} {w}.', ru: 'Мне нужен {r}.' }
];

// ─── ПРИРОДА ───
const TPL_NATURE = [
    { en: 'The {w} is beautiful.', ru: '{R} красивый.' },
    { en: 'I like the {w}.', ru: 'Мне нравится {r}.' },
    { en: 'Look at the {w}!', ru: 'Посмотри на {r_acc}!' },
    { en: 'The {w} is in the sky.', ru: '{R} в небе.' },
    { en: 'I see the {w}.', ru: 'Я вижу {r_acc}.' },
    { en: 'The {w} is very big.', ru: '{R} очень большой.' },
    { en: 'Where is the {w}?', ru: 'Где {r}?' }
];

// ─── ЛЮДИ ───
const TPL_PEOPLE = [
    { en: 'He is a {a} {w}.', ru: 'Он {r}.' },
    { en: 'She is a {a} {w}.', ru: 'Она {r}.' },
    { en: 'This is my {w}.', ru: 'Это мой {r}.' },
    { en: 'The {w} is very kind.', ru: '{R} очень добрый.' },
    { en: 'I know {a} {w}.', ru: 'Я знаю {r_acc}.' },
    { en: 'The {w} works here.', ru: '{R} работает здесь.' },
    { en: 'Do you know this {w}?', ru: 'Ты знаешь этого {r_acc}?' }
];

// ─── ТЕХНИКА ───
const TPL_TECH = [
    { en: 'I have a {a} {w}.', ru: 'У меня есть {r}.' },
    { en: 'This {w} is new.', ru: 'Этот {r} новый.' },
    { en: 'I use my {w} every day.', ru: 'Я использую {r_acc} каждый день.' },
    { en: 'Where is my {w}?', ru: 'Где мой {r}?' },
    { en: 'The {w} is on the table.', ru: '{R} на столе.' },
    { en: 'This {w} is very good.', ru: 'Этот {r} очень хороший.' }
];

// ─── ГЛАГОЛЫ ДЕЙСТВИЯ ───
const TPL_ACTION = [
    { en: 'I {w} every day.', ru: 'Я {r} каждый день.' },
    { en: 'She can {w} very well.', ru: 'Она умеет {r} очень хорошо.' },
    { en: 'We {w} together.', ru: 'Мы {r} вместе.' },
    { en: 'Let\'s {w}!', ru: 'Давай {r}!' },
    { en: 'I like to {w}.', ru: 'Я люблю {r}.' },
    { en: 'Do you {w}?', ru: 'Ты {r}?' },
    { en: 'They {w} in the morning.', ru: 'Они {r} утром.' },
    { en: 'Can you {w}?', ru: 'Ты умеешь {r}?' },
    { en: 'I want to {w} now.', ru: 'Я хочу {r} сейчас.' },
    { en: 'She {w} very well.', ru: 'Она {r} очень хорошо.' }
];

// ─── ПЕРЕХОДНЫЕ ГЛАГОЛЫ ───
const TPL_TRANSITIVE = [
    { en: 'I {w} it.', ru: 'Я это {r}.' },
    { en: 'Please {w} it.', ru: 'Пожалуйста, {r} это.' },
    { en: 'Can you {w} it?', ru: 'Ты можешь {r} это?' },
    { en: 'I {w} this every day.', ru: 'Я {r} это каждый день.' },
    { en: 'She wants to {w} it.', ru: 'Она хочет {r} это.' },
    { en: 'Do you {w} it?', ru: 'Ты {r} это?' },
    { en: 'I don\'t {w} it.', ru: 'Я не {r} это.' },
    { en: 'He {w}s it well.', ru: 'Он хорошо {r} это.' }
];

// ─── ГЛАГОЛЫ ДВИЖЕНИЯ ───
const TPL_MOTION = [
    { en: 'I {w} to school.', ru: 'Я {r} в школу.' },
    { en: 'We {w} together.', ru: 'Мы {r} вместе.' },
    { en: 'She wants to {w}.', ru: 'Она хочет {r}.' },
    { en: 'Let\'s {w}!', ru: 'Давай {r}!' },
    { en: 'They {w} every day.', ru: 'Они {r} каждый день.' },
    { en: 'I want to {w} home.', ru: 'Я хочу {r} домой.' },
    { en: 'Do you {w} by car?', ru: 'Ты {r} на машине?' }
];

// ─── ЭМОЦИИ (прилагательные) ───
const TPL_EMOTION = [
    { en: 'I am {w}.', ru: 'Я {r}.' },
    { en: 'She looks {w}.', ru: 'Она выглядит {r}.' },
    { en: 'Why are you {w}?', ru: 'Почему ты {r}?' },
    { en: 'He feels {w} today.', ru: 'Он чувствует себя {r} сегодня.' },
    { en: 'I am not {w}.', ru: 'Я не {r}.' },
    { en: 'Are you {w}?', ru: 'Ты {r}?' }
];

// ─── КАЧЕСТВА (прилагательные) ───
const TPL_QUALITY = [
    { en: 'It is very {w}.', ru: 'Это очень {r}.' },
    { en: 'The house is {w}.', ru: 'Дом {r}.' },
    { en: 'This is a {w} day.', ru: 'Это {r} день.' },
    { en: 'She is very {w}.', ru: 'Она очень {r}.' },
    { en: 'The book is {w}.', ru: 'Книга {r}.' },
    { en: 'I like {w} things.', ru: 'Мне нравятся {r} вещи.' },
    { en: 'This is not {w}.', ru: 'Это не {r}.' },
    { en: 'The film was {w}.', ru: 'Фильм был {r}.' }
];

// ─── НАРЕЧИЯ ───
const TPL_ADVERB = [
    { en: 'He speaks {w}.', ru: 'Он говорит {r}.' },
    { en: 'She works {w}.', ru: 'Она работает {r}.' },
    { en: 'Do it {w}!', ru: 'Сделай это {r}!' },
    { en: 'They came {w}.', ru: 'Они пришли {r}.' },
    { en: 'I {w} understand.', ru: 'Я {r} понимаю.' }
];

// ─── МЕСТОИМЕНИЯ ───
const TPL_PRONOUN = [
    { en: '{w} is my friend.', ru: '{R} — мой друг.' },
    { en: 'I know {w}.', ru: 'Я знаю {r_acc}.' },
    { en: 'Give it to {w}.', ru: 'Дай это {r_acc}.' },
    { en: 'Is {w} here?', ru: '{R} здесь?' },
    { en: 'I saw {w} yesterday.', ru: 'Я видел {r_acc} вчера.' }
];

// ─── ЧИСЛИТЕЛЬНЫЕ ───
const TPL_NUMERAL = [
    { en: 'I have {w} apples.', ru: 'У меня {r} яблок.' },
    { en: 'There are {w} books.', ru: 'Здесь {r} книг.' },
    { en: 'Give me {w} minutes.', ru: 'Дай мне {r} минут.' },
    { en: 'She is {w} years old.', ru: 'Ей {r} лет.' },
    { en: 'I see {w} birds.', ru: 'Я вижу {r} птиц.' }
];

// ─── СЛУЖЕБНЫЕ (предлоги/союзы) — очень ограниченно ───
const TPL_PREPOSITION = [
    { en: 'The book is {w} the table.', ru: 'Книга {r} столом.' },
    { en: 'I live {w} London.', ru: 'Я живу {r} Лондоне.' }
];

const TPL_CONJUNCTION = [
    { en: 'I like tea {w} coffee.', ru: 'Я люблю чай {r} кофе.' }
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

function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
}

function toAccusative(ru) {
    if (ru.endsWith('а')) return ru.slice(0, -1) + 'у';
    if (ru.endsWith('я')) return ru.slice(0, -1) + 'ю';
    if (ru.endsWith('ь')) return ru.slice(0, -1) + 'ь';
    return ru;
}

// ═══════════════════════════════════════════════
// ЗАМЕНА ПЛЕЙСХОЛДЕРОВ
// ═══════════════════════════════════════════════
function fillTemplate(tpl, word) {
    const r = word.ru;
    const rCap = capitalize(r);
    const rAcc = toAccusative(r);
    const a = getArticle(word.eng);

    let en = tpl.en
        .replace(/{w}/g, word.eng)
        .replace(/{a}/g, a);
    let ru = tpl.ru
        .replace(/{r}/g, r)
        .replace(/{R}/g, rCap)
        .replace(/{r_acc}/g, rAcc);

    return { en, ru };
}

// ═══════════════════════════════════════════════
// ВЫБОР НАБОРА ШАБЛОНОВ ПО ТЕГУ
// ═══════════════════════════════════════════════
function getTemplatesFor(word) {
    const en = word.eng.toLowerCase();
    const pos = word.pos;

    // По тегу
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

    // По части речи
    if (pos === 'noun')        return TPL_HOUSE;      // общий набор
    if (pos === 'verb') {
        if (hasTag(en, 'transitive')) return TPL_TRANSITIVE;
        if (hasTag(en, 'motion'))     return TPL_MOTION;
        return TPL_ACTION;
    }
    if (pos === 'adjective') {
        if (hasTag(en, 'emotion'))    return TPL_EMOTION;
        return TPL_QUALITY;
    }
    if (pos === 'adverb')      return TPL_ADVERB;
    if (pos === 'pronoun')     return TPL_PRONOUN;
    if (pos === 'numeral')     return TPL_NUMERAL;
    if (pos === 'preposition') return TPL_PREPOSITION;
    if (pos === 'conjunction') return TPL_CONJUNCTION;

    return null;
}

// ═══════════════════════════════════════════════
// ГЕНЕРАЦИЯ ПРЕДЛОЖЕНИЯ
// ═══════════════════════════════════════════════
function pickTemplate(word) {
    const templates = getTemplatesFor(word);
    if (!templates || !templates.length) return null;
    const tpl = templates[Math.floor(Math.random() * templates.length)];
    const filled = fillTemplate(tpl, word);
    return { en: filled.en, ru: filled.ru, word };
}

function generateSentence(word) {
    const t = pickTemplate(word);
    return t || null;
}

function generateSentencesList(words, count = 15) {
    if (!words.length) return [];
    const sample = shuffle(words).slice(0, count * 2);
    const result = [];
    for (const w of sample) {
        const s = generateSentence(w);
        if (s) result.push(s);
        if (result.length >= count) break;
    }
    return result;
}

// ═══════════════════════════════════════════════
// ВОПРОСЫ
// ═══════════════════════════════════════════════
function getSimilarWords(word, allWords, count = 3) {
    const samePos = allWords.filter(w => w.pos === word.pos && w.eng !== word.eng);
    return shuffle(samePos).slice(0, count);
}

const QUESTION_BUILDERS = [
    (w, others) => ({
        q: `Как переводится слово <b>${w.eng}</b>?`,
        correct: w.ru,
        options: shuffle([w.ru, ...others.map(o => o.ru)]).slice(0, 4),
        hint: `${w.tr || ''} · ${w.pos}`,
        word: w
    }),
    (w, others) => ({
        q: `Как по-английски «<b>${w.ru}</b>»?`,
        correct: w.eng,
        options: shuffle([w.eng, ...others.map(o => o.eng)]).slice(0, 4),
        hint: `${w.pos}`,
        word: w
    }),
    (w, others) => {
        if (!w.tr) return null;
        const oth = others.filter(o => o.tr);
        if (oth.length < 3) return null;
        return {
            q: `Какая транскрипция у слова <b>${w.eng}</b>?`,
            correct: w.tr,
            options: shuffle([w.tr, ...oth.slice(0, 3).map(o => o.tr)]),
            hint: `${w.ru}`,
            word: w
        };
    },
    (w) => {
        const posRu = { noun: 'существительное', verb: 'глагол', adjective: 'прилагательное', adverb: 'наречие' };
        if (!posRu[w.pos]) return null;
        return {
            q: `Какая часть речи у слова <b>${w.eng}</b>?`,
            correct: posRu[w.pos],
            options: shuffle(Object.values(posRu)),
            hint: w.ru,
            word: w
        };
    },
    (w, others) => {
        const t = pickTemplate(w);
        if (!t) return null;
        const re = new RegExp('\\b' + w.eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*\\b', 'i');
        if (!re.test(t.en)) return null;
        return {
            q: `Вставь пропущенное слово:<br><b>${t.en.replace(re, '___')}</b>`,
            correct: w.eng,
            options: shuffle([w.eng, ...others.slice(0, 3).map(o => o.eng)]),
            hint: `${w.ru}`,
            word: w
        };
    }
];

function generateQuiz(words, count = 10) {
    if (!words || !words.length) return [];
    const sample = shuffle(words).slice(0, count * 2);
    const questions = [];

    for (const word of sample) {
        if (questions.length >= count) break;
        const others = getSimilarWords(word, words, 5);
        const types = shuffle([...QUESTION_BUILDERS]);
        for (const builder of types) {
            try {
                const q = builder(word, others);
                if (q && q.options) {
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
// ЭКСПОРТ
// ═══════════════════════════════════════════════
if (typeof window !== 'undefined') {
    window.quizgen = {
        generateSentence,
        generateQuiz,
        generateSentencesList,
        pickTemplate,
        getTemplatesFor,
        TAGS
    };
    console.log('✅ quizgen.js v5 — тематические шаблоны');
}
