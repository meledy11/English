// quizgen.js v13 — только генераторы вопросов, данные из lessonData.js
// Все предложения и вопросы берутся из единой базы lessonData.js

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

// ═══════════════════════════════════════════════
// ДОСТУП К ДАННЫМ — через lessonData.js
// ═══════════════════════════════════════════════
function getSentence(word) {
    // 1. Основной источник — lessonData.js
    if (typeof lessonData !== 'undefined' && lessonData.getSentence) {
        const s = lessonData.getSentence(word);
        if (s) return s;
    }

    // 2. Резерв — если у слова прямо в объекте есть ex/exRu
    if (word && word.ex && word.exRu) {
        return { en: word.ex, ru: word.exRu, word };
    }

    return null;
}

function hasSentence(word) {
    if (!word) return false;
    if (typeof lessonData !== 'undefined' && lessonData.getSentence) {
        if (lessonData.getSentence(word)) return true;
    }
    return !!(word.ex && word.exRu);
}

function generateSentence(word) {
    return getSentence(word);
}

function generateSentencesList(words, count = 15) {
    if (!words || !words.length) return [];

    // 1. Основной источник — lessonData.js
    if (typeof lessonData !== 'undefined' && lessonData.sentences) {
        const result = lessonData.sentences(words, count);
        if (result && result.length) return result;
    }

    // 2. Резерв — берём напрямую из полей ex/exRu
    const withEx = words.filter(w => w.ex && w.exRu);
    if (!withEx.length) return [];
    return shuffle(withEx).slice(0, count).map(w => ({
        en: w.ex,
        ru: w.exRu,
        word: w
    }));
}

// ═══════════════════════════════════════════════
// 7 ТИПОВ ВОПРОСОВ
// ═══════════════════════════════════════════════
function getSimilarWords(word, allWords, count = 3) {
    const samePos = allWords.filter(w => w.pos === word.pos && w.eng !== word.eng);
    return shuffle(samePos).slice(0, count);
}

// 1. EN → RU
function qENtoRU(w, others) {
    if (!w.ru) return null;
    return {
        type: 'en2ru',
        q: `Как переводится слово <b>${w.eng}</b>?`,
        correct: w.ru,
        options: shuffle([w.ru, ...others.map(o => o.ru)]).slice(0, 4),
        hint: `${w.tr || ''} · ${w.pos}`,
        word: w
    };
}

// 2. RU → EN
function qRUtoEN(w, others) {
    if (!w.ru) return null;
    return {
        type: 'ru2en',
        q: `Как по-английски «<b>${w.ru}</b>»?`,
        correct: w.eng,
        options: shuffle([w.eng, ...others.map(o => o.eng)]).slice(0, 4),
        hint: w.pos,
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
        hint: w.ru,
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

// 5. Вставь слово в предложение
function qFillBlank(w, others) {
    const s = getSentence(w);
    if (!s) return null;
    const re = new RegExp('\\b' + w.eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*\\b', 'i');
    if (!re.test(s.en)) return null;
    return {
        type: 'fill',
        q: `Вставь пропущенное слово:<br><b>${s.en.replace(re, '___')}</b>`,
        correct: w.eng,
        options: shuffle([w.eng, ...others.slice(0, 3).map(o => o.eng)]),
        hint: s.ru,
        word: w
    };
}

// 6. Перевод предложения EN → RU
function qTranslateSentence(w, others) {
    const s = getSentence(w);
    if (!s) return null;
    const wrong = [];
    for (const o of others.slice(0, 8)) {
        const os = getSentence(o);
        if (os && os.ru !== s.ru) wrong.push(os.ru);
        if (wrong.length >= 3) break;
    }
    if (wrong.length < 3) return null;
    return {
        type: 'sentence-ru',
        q: `Как переводится предложение?<br><b>${s.en}</b>`,
        correct: s.ru,
        options: shuffle([s.ru, ...wrong]),
        hint: `${w.eng} — ${w.ru}`,
        word: w
    };
}

// 7. Выбери английский вариант
function qChooseSentenceEN(w, others) {
    const s = getSentence(w);
    if (!s) return null;
    const wrong = [];
    for (const o of others.slice(0, 8)) {
        const os = getSentence(o);
        if (os && os.en !== s.en) wrong.push(os.en);
        if (wrong.length >= 3) break;
    }
    if (wrong.length < 3) return null;
    return {
        type: 'sentence-en',
        q: `Как сказать по-английски?<br><b>${s.ru}</b>`,
        correct: s.en,
        options: shuffle([s.en, ...wrong]),
        hint: `${w.eng} — ${w.ru}`,
        word: w
    };
}

const ALL_BUILDERS = [
    qENtoRU, qRUtoEN, qTranscription, qPartOfSpeech,
    qFillBlank, qTranslateSentence, qChooseSentenceEN
];

// ═══════════════════════════════════════════════
// ГЛАВНАЯ — генерация вопросов
// ═══════════════════════════════════════════════
function generateQuiz(words, count = 10) {
    if (!words || !words.length) return [];

    // 1. Основной источник — lessonData.js (7 типов вопросов)
    if (typeof lessonData !== 'undefined' && lessonData.quiz) {
        const result = lessonData.quiz(words, count);
        if (result && result.length) return result;
    }

    // 2. Резерв — собственные билдеры
    const sample = shuffle(words).slice(0, count * 3);
    const questions = [];
    for (const word of sample) {
        if (questions.length >= count) break;
        const others = getSimilarWords(word, words, 6);
        const types = shuffle([...ALL_BUILDERS]);
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
// ЭКСПОРТ — совместим с текущим index.html
// ═══════════════════════════════════════════════
if (typeof window !== 'undefined') {
    window.quizgen = {
        generateSentence,
        generateQuiz,
        generateSentencesList,
        getSentence,
        hasSentence
    };
    console.log('✅ quizgen.js v13 — генераторы вопросов (данные из lessonData.js)');
}
