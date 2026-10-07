// quizgen.js v3 — полный генератор всех типов заданий

// ═══════════════════════════════════════════════
// ГРУППЫ ГЛАГОЛОВ ПО СОЧЕТАЕМОСТИ
// ═══════════════════════════════════════════════
const ACTION_VERBS = ['run', 'walk', 'jump', 'swim', 'fly', 'sing', 'dance',
    'speak', 'read', 'write', 'work', 'study', 'play', 'cook', 'draw', 'paint',
    'drive', 'listen', 'look', 'smile', 'laugh', 'cry', 'shout', 'talk',
    'eat', 'drink', 'sleep', 'wake', 'wash', 'clean'];

const TRANSITIVE_VERBS = ['put', 'take', 'make', 'do', 'get', 'find', 'buy',
    'sell', 'give', 'bring', 'send', 'show', 'tell', 'ask', 'like', 'love',
    'need', 'want', 'have', 'see', 'hear', 'feel', 'open', 'close', 'break',
    'fix', 'choose', 'share', 'lend', 'pay', 'build', 'create'];

const MOTION_VERBS = ['go', 'come', 'arrive', 'leave', 'return', 'enter',
    'exit', 'climb', 'fall', 'rise', 'travel', 'visit', 'move', 'stay',
    'walk', 'run', 'drive', 'fly', 'swim'];

const STATE_VERBS = ['be', 'know', 'understand', 'believe', 'remember',
    'forget', 'want', 'need', 'like', 'love', 'hate', 'prefer'];

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

function capitalize(s) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function getArticle(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(word[0].toLowerCase()) ? 'an' : 'a';
}

function getSimilarWords(word, allWords, count = 3) {
    const samePos = allWords.filter(w => w.pos === word.pos && w.eng !== word.eng);
    return shuffle(samePos).slice(0, count);
}

// ═══════════════════════════════════════════════
// ШАБЛОНЫ ПРЕДЛОЖЕНИЙ ПО ГРУППАМ
// ═══════════════════════════════════════════════
function pickTemplate(word) {
    const en = word.eng;
    const pos = word.pos;

    // СУЩЕСТВИТЕЛЬНЫЕ
    if (pos === 'noun') {
        const art = getArticle(en);
        const templates = [
            { en: `I have ${art} ${en}.`, ru: `У меня есть ${word.ru}.` },
            { en: `I like ${art} ${en}.`, ru: `Мне нравится ${word.ru}.` },
            { en: `This is ${art} ${en}.`, ru: `Это ${word.ru}.` },
            { en: `The ${en} is here.`, ru: `${capitalize(word.ru)} здесь.` },
            { en: `Where is the ${en}?`, ru: `Где ${word.ru}?` },
            { en: `I need ${art} ${en}.`, ru: `Мне нужен ${word.ru}.` },
            { en: `Look at the ${en}!`, ru: `Посмотри на ${word.ru}!` },
            { en: `I want ${art} ${en}.`, ru: `Я хочу ${word.ru}.` }
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // ГЛАГОЛЫ
    if (pos === 'verb') {
        // Состояния
        if (STATE_VERBS.includes(en)) {
            const t = [
                { en: `I ${en} it.`, ru: `Я это ${word.ru}.` },
                { en: `Do you ${en}?`, ru: `Ты ${word.ru}?` },
                { en: `She doesn't ${en}.`, ru: `Она не ${word.ru}.` },
                { en: `I really ${en} this.`, ru: `Я действительно ${word.ru} это.` }
            ];
            return t[Math.floor(Math.random() * t.length)];
        }
        // Действия
        if (ACTION_VERBS.includes(en)) {
            const t = [
                { en: `I ${en} every day.`, ru: `Я ${word.ru} каждый день.` },
                { en: `She can ${en} very well.`, ru: `Она умеет ${word.ru} очень хорошо.` },
                { en: `We ${en} together.`, ru: `Мы ${word.ru} вместе.` },
                { en: `Let's ${en}!`, ru: `Давай ${word.ru}!` },
                { en: `He likes to ${en}.`, ru: `Он любит ${word.ru}.` },
                { en: `They ${en} now.`, ru: `Они ${word.ru} сейчас.` },
                { en: `I want to ${en}.`, ru: `Я хочу ${word.ru}.` }
            ];
            return t[Math.floor(Math.random() * t.length)];
        }
        // Движения
        if (MOTION_VERBS.includes(en)) {
            const t = [
                { en: `I ${en} to school.`, ru: `Я ${word.ru} в школу.` },
                { en: `We ${en} together.`, ru: `Мы ${word.ru} вместе.` },
                { en: `She wants to ${en}.`, ru: `Она хочет ${word.ru}.` },
                { en: `Let's ${en}!`, ru: `Давай ${word.ru}!` },
                { en: `They ${en} every day.`, ru: `Они ${word.ru} каждый день.` }
            ];
            return t[Math.floor(Math.random() * t.length)];
        }
        // Переходные (по умолчанию)
        const t = [
            { en: `I ${en} it.`, ru: `Я это ${word.ru}.` },
            { en: `Please ${en} it.`, ru: `Пожалуйста, ${word.ru} это.` },
            { en: `Can you ${en} it?`, ru: `Ты можешь ${word.ru} это?` },
            { en: `She wants to ${en} it.`, ru: `Она хочет ${word.ru} это.` },
            { en: `I ${en} every day.`, ru: `Я ${word.ru} каждый день.` }
        ];
        return t[Math.floor(Math.random() * t.length)];
    }

    // ПРИЛАГАТЕЛЬНЫЕ
    if (pos === 'adjective') {
        const t = [
            { en: `It is very ${en}.`, ru: `Это очень ${word.ru}.` },
            { en: `The house is ${en}.`, ru: `Дом ${word.ru}.` },
            { en: `She looks ${en}.`, ru: `Она выглядит ${word.ru}.` },
            { en: `This is a ${en} day.`, ru: `Это ${word.ru} день.` },
            { en: `I feel ${en}.`, ru: `Я чувствую себя ${word.ru}.` },
            { en: `The weather is ${en}.`, ru: `Погода ${word.ru}.` },
            { en: `That's a ${en} idea.`, ru: `Это ${word.ru} идея.` }
        ];
        return t[Math.floor(Math.random() * t.length)];
    }

    // НАРЕЧИЯ
    if (pos === 'adverb') {
        const t = [
            { en: `He speaks ${en}.`, ru: `Он говорит ${word.ru}.` },
            { en: `She works ${en}.`, ru: `Она работает ${word.ru}.` },
            { en: `Do it ${en}!`, ru: `Сделай это ${word.ru}!` },
            { en: `They came ${en}.`, ru: `Они пришли ${word.ru}.` }
        ];
        return t[Math.floor(Math.random() * t.length)];
    }

    // МЕСТОИМЕНИЯ
    if (pos === 'pronoun') {
        const t = [
            { en: `${en} is my friend.`, ru: `${capitalize(word.ru)} — мой друг.` },
            { en: `I know ${en}.`, ru: `Я знаю ${word.ru}.` },
            { en: `Give it to ${en}.`, ru: `Дай это ${word.ru}.` },
            { en: `I saw ${en} yesterday.`, ru: `Я видел ${word.ru} вчера.` }
        ];
        return t[Math.floor(Math.random() * t.length)];
    }

    // ЧИСЛИТЕЛЬНЫЕ
    if (pos === 'numeral') {
        const t = [
            { en: `I have ${en} apples.`, ru: `У меня ${word.ru} яблок.` },
            { en: `There are ${en} books.`, ru: `Здесь ${word.ru} книг.` },
            { en: `Give me ${en} minutes.`, ru: `Дай мне ${word.ru} минут.` }
        ];
        return t[Math.floor(Math.random() * t.length)];
    }

    // ПРЕДЛОГИ
    if (pos === 'preposition') {
        const t = [
            { en: `The book is ${en} the table.`, ru: `Книга ${word.ru} столом.` },
            { en: `I live ${en} London.`, ru: `Я живу ${word.ru} Лондоне.` }
        ];
        return t[Math.floor(Math.random() * t.length)];
    }

    // СОЮЗЫ
    if (pos === 'conjunction') {
        return { en: `I like tea ${en} coffee.`, ru: `Я люблю чай ${word.ru} кофе.` };
    }

    // МЕЖДОМЕТИЯ
    if (pos === 'interjection') {
        return { en: `${en}, how are you?`, ru: `${capitalize(word.ru)}, как дела?` };
    }

    // АРТИКЛИ (не использовать в предложениях)
    if (pos === 'article') {
        return { en: `This is ${en} book.`, ru: `Это ${word.ru} книга.` };
    }

    // ПО УМОЛЧАНИЮ
    return { en: `The word is "${en}".`, ru: `Слово — «${word.ru}».` };
}

// ═══════════════════════════════════════════════
// ГЕНЕРАЦИЯ ПРЕДЛОЖЕНИЯ
// ═══════════════════════════════════════════════
function generateSentence(word) {
    const t = pickTemplate(word);
    if (!t) return null;
    return { en: t.en, ru: t.ru, word };
}

// ═══════════════════════════════════════════════
// 7 ТИПОВ ВОПРОСОВ
// ═══════════════════════════════════════════════

// 1. EN → RU
function qTranslateEN_RU(word, others) {
    return {
        type: 'en2ru',
        q: `Как переводится слово <b>${word.eng}</b>?`,
        correct: word.ru,
        options: shuffle([word.ru, ...others.map(o => o.ru)]).slice(0, 4),
        hint: `${word.tr || ''} · ${word.pos}`,
        word
    };
}

// 2. RU → EN
function qTranslateRU_EN(word, others) {
    return {
        type: 'ru2en',
        q: `Как по-английски «<b>${word.ru}</b>»?`,
        correct: word.eng,
        options: shuffle([word.eng, ...others.map(o => o.eng)]).slice(0, 4),
        hint: `${word.pos}`,
        word
    };
}

// 3. Транскрипция
function qTranscription(word, others) {
    if (!word.tr) return null;
    const othersWithTr = others.filter(o => o.tr);
    if (othersWithTr.length < 3) return null;
    return {
        type: 'transcription',
        q: `Какая транскрипция у слова <b>${word.eng}</b>?`,
        correct: word.tr,
        options: shuffle([word.tr, ...othersWithTr.slice(0, 3).map(o => o.tr)]),
        hint: `${word.ru} · ${word.pos}`,
        word
    };
}

// 4. Часть речи
function qPartOfSpeech(word) {
    const posRu = {
        noun: 'существительное',
        verb: 'глагол',
        adjective: 'прилагательное',
        adverb: 'наречие',
        pronoun: 'местоимение',
        preposition: 'предлог',
        conjunction: 'союз',
        numeral: 'числительное',
        interjection: 'междометие',
        article: 'артикль'
    };
    const allPos = ['noun', 'verb', 'adjective', 'adverb'];
    if (!allPos.includes(word.pos)) return null;
    return {
        type: 'pos',
        q: `Какая часть речи у слова <b>${word.eng}</b>?`,
        correct: posRu[word.pos],
        options: shuffle(allPos.map(p => posRu[p])),
        hint: word.ru,
        word
    };
}

// 5. Вставь пропущенное слово (в предложение)
function qFillBlank(word, others) {
    const t = pickTemplate(word);
    if (!t) return null;
    const re = new RegExp('\\b' + word.eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*\\b', 'i');
    if (!re.test(t.en)) return null;
    const sentence = t.en.replace(re, '___');
    return {
        type: 'fill',
        q: `Вставь пропущенное слово:<br><b>${sentence}</b>`,
        correct: word.eng,
        options: shuffle([word.eng, ...others.slice(0, 3).map(o => o.eng)]),
        hint: `${word.ru} · ${t.ru}`,
        word
    };
}

// 6. Перевод предложения (EN → RU)
function qTranslateSentence(word, others) {
    const t = pickTemplate(word);
    if (!t) return null;
    // Похожие предложения с другими словами
    const wrongSentences = others.slice(0, 3).map(o => {
        const ot = pickTemplate(o);
        return ot ? ot.ru : '';
    }).filter(Boolean);
    if (wrongSentences.length < 3) return null;
    return {
        type: 'sentence-ru',
        q: `Как переводится предложение?<br><b>${t.en}</b>`,
        correct: t.ru,
        options: shuffle([t.ru, ...wrongSentences]),
        hint: `${word.eng} — ${word.ru}`,
        word,
        sentence: t.en
    };
}

// 7. Найди английский вариант (RU → EN предложение)
function qChooseSentenceEN(word, others) {
    const t = pickTemplate(word);
    if (!t) return null;
    const wrongSentences = others.slice(0, 3).map(o => {
        const ot = pickTemplate(o);
        return ot ? ot.en : '';
    }).filter(Boolean);
    if (wrongSentences.length < 3) return null;
    return {
        type: 'sentence-en',
        q: `Как сказать по-английски?<br><b>${t.ru}</b>`,
        correct: t.en,
        options: shuffle([t.en, ...wrongSentences]),
        hint: `${word.eng} — ${word.ru}`,
        word,
        sentence: t.en
    };
}

// ═══════════════════════════════════════════════
// ФАБРИКА ВОПРОСОВ
// ═══════════════════════════════════════════════
const QUESTION_BUILDERS = [
    qTranslateEN_RU,
    qTranslateRU_EN,
    qTranscription,
    qPartOfSpeech,
    qFillBlank,
    qTranslateSentence,
    qChooseSentenceEN
];

// ═══════════════════════════════════════════════
// ГЕНЕРАЦИЯ НАБОРА ВОПРОСОВ
// ═══════════════════════════════════════════════
function generateQuiz(words, count = 10) {
    if (!words || !words.length) return [];
    
    const sample = shuffle(words).slice(0, count);
    const questions = [];
    
    sample.forEach(word => {
        const others = getSimilarWords(word, words, 5);
        
        // Пробуем 3 случайных типа
        const types = shuffle([...QUESTION_BUILDERS]);
        let q = null;
        for (const builder of types) {
            try {
                const result = builder(word, others);
                if (result && result.options && result.options.length >= 2) {
                    // Убираем дубликаты
                    const uniqueOpts = [...new Set(result.options)];
                    if (uniqueOpts.length >= 2 && uniqueOpts.includes(result.correct)) {
                        result.options = shuffle(uniqueOpts);
                        q = result;
                        break;
                    }
                }
            } catch (e) { /* пропускаем */ }
        }
        
        if (q) questions.push(q);
    });
    
    return questions;
}

// ═══════════════════════════════════════════════
// ГЕНЕРАЦИЯ ПРЕДЛОЖЕНИЙ (для флеш-карточек)
// ═══════════════════════════════════════════════
function generateSentencesList(words, count = 15) {
    if (!words.length) return [];
    const sample = shuffle(words).slice(0, count);
    const result = [];
    sample.forEach(w => {
        const s = generateSentence(w);
        if (s) result.push(s);
    });
    return result;
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
        getArticle,
        QUESTION_BUILDERS
    };
    console.log('✅ quizgen.js v3 загружен — 7 типов вопросов');
}
