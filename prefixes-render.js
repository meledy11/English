// ═══════════════════════════════════════════════════════════
// РЕНДЕРЫ: все функции отрисовки контента
// ═══════════════════════════════════════════════════════════

// ─── Состояния (переменные модулей) ───
let flipCardState = {};
let miniQuizState = {};
let affixTrainerState = {};
let converterState = {};
let dictationState = { level: 'easy', current: 0, score: 0, answered: false, userAnswer: '' };
let essayState = { topic: null, parts: {}, activePart: 'intro' };

// ─── Старые рендеры ───
function renderModalVerbs() { /* ... */ }
function renderConfusingVerbs() { /* ... */ }
function renderWordFormation() { /* ... */ }
function renderTrapPairs() { /* ... */ }
function renderTwinWords() { /* ... */ }
function renderDiscourseMarkers() { /* ... */ }
function renderAllTimeWords() { /* ... */ }
function toggleTimeWordLearned(word) { /* ... */ }
function renderTimePrepositions() { /* ... */ }
function renderEssayLinkers() { /* ... */ }
function renderUsefulLinkers() { /* ... */ }
function renderQuestionWords() { /* ... */ }

// ─── Обучающие модули ───
function renderWordBuilder() { /* ... */ }
function renderSuffixCheat() { /* ... */ }
function renderWordChains() { /* ... */ }
function renderFlipCards() { /* ... */ }
function toggleFlipCard(key) { /* ... */ }
function renderRuleReminders() { /* ... */ }
function renderAffixTrainer() { /* ... */ }
function answerAffixTrainer(key, chosen, correct) { /* ... */ }
function renderCommonMistakes() { /* ... */ }
function renderSpeechDrill() { /* ... */ }
function renderPowerPrefixes() { /* ... */ }
function renderAffixMap() { /* ... */ }
function renderWordFamilies() { /* ... */ }
function renderOpposites() { /* ... */ }
function renderConverter() { /* ... */ }
function answerConverter(key, chosen, correct) { /* ... */ }
function renderMiniQuizzes() { /* ... */ }
function answerMiniQuiz(key, chosen, correct) { /* ... */ }
function renderMiniDialogues() { /* ... */ }
function renderMemoryHooks() { /* ... */ }
function renderQuickTips() { /* ... */ }
function renderWordOfTheDay() { /* ... */ }
function renderLearningPath() { /* ... */ }
function togglePathStep(step) { /* ... */ }

// ─── Практика ───
function renderMiniStories() { /* ... */ }
function renderDictation() { /* ... */ }
function setDictLevel(lvl) { /* ... */ }
function resetDictation() { /* ... */ }
function checkDictation() { /* ... */ }
function nextDictation() { /* ... */ }
function speakSlow(text) { /* ... */ }
function renderEssayBuilder() { /* ... */ }
function setEssayTopic(topic) { /* ... */ }
function chooseEssayPattern(section, index) { /* ... */ }
