// ═══════════════════════════════════════════════════════════
// prefixes-render.js — ВСЕ ФУНКЦИИ ОТРИСОВКИ
// ═══════════════════════════════════════════════════════════

// ─── Состояния модулей ───
let flipCardState = {};
let miniQuizState = {};
let affixTrainerState = {};
let converterState = {};
let dictationState = { level: 'easy', current: 0, score: 0, answered: false, userAnswer: '' };
let essayState = { topic: null, parts: {}, activePart: 'intro' };

// ═══════════════════════════════════════════════════════════
// СТАРЫЕ РЕНДЕРЫ
// ═══════════════════════════════════════════════════════════
function renderModalVerbs() {
    let html = '';
    modalVerbs.forEach(m => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid ${m.color};margin-bottom:16px;">
            <div class="tense-header">
                <div class="tense-emoji">${m.emoji}</div>
                <div>
                    <div class="tense-name" style="font-family:monospace;font-size:1.6rem;">${m.word} <span style="color:#8b6946;font-size:.85rem;">${m.transcription}</span></div>
                    <div style="font-size:.85rem;color:#8b6946;">${m.meaning}</div>
                </div>
            </div>
            <div class="memory-hack" style="margin:10px 0;font-size:.9rem;">${m.hint}</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin:10px 0;">${m.rules.map(r => `<span style="background:#ecdca8;padding:4px 12px;border-radius:20px;font-size:.8rem;">${r}</span>`).join('')}</div>
            ${m.examples.map(e => {
                const clean = e.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
                return `<div class="tense-example" onclick="speakText('${clean}')">
                    <div class="tense-example-text"><div class="tense-example-eng">${e.en}</div><div class="tense-example-ru">${e.ru}</div></div>
                    <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')">🔈</button>
                </div>`;
            }).join('')}
        </div>`;
    });
    return html;
}

function renderConfusingVerbs() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#b93a3a;margin-bottom:16px;">
        ⚠️ <strong>НЕ ПУТАЙТЕ!</strong> Часто используемые глаголы. Используйте правильно!
    </div>`;
    confusingVerbs.forEach(c => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #b97f44;margin-bottom:18px;">
            <div class="tense-header"><div class="tense-emoji">${c.emoji}</div><div class="tense-name">${c.title}</div></div>
            <div class="memory-hack" style="font-size:.9rem;background:#ecdca8;">🎯 ${c.rule}</div>`;
        c.pairs.forEach(p => {
            html += `<div style="background:#fff6e8;border-radius:20px;padding:14px;margin:12px 0;border:1px solid #e1cba1;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                    <span style="font-size:2rem;">${p.emoji}</span>
                    <span style="font-family:monospace;font-size:1.5rem;font-weight:bold;color:#3d2b1a;">${p.word}</span>
                </div>
                <div style="font-size:.95rem;color:#5f451f;margin-bottom:12px;line-height:1.4;">${p.meaning}</div>`;
            p.examples.forEach(e => {
                const clean = e.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
                html += `<div class="tense-example" style="margin:8px 0;background:#f2e5ca;" onclick="speakText('${clean}')">
                    <div class="tense-example-text"><div class="tense-example-eng">${e.en}</div><div class="tense-example-ru">${e.ru}</div></div>
                    <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')">🔈</button>
                </div>`;
            });
            html += `</div>`;
        });
        html += `</div>`;
    });
    return html;
}

function renderWordFormation() {
    const r = wordFormationRules;
    let html = `<div class="memory-hack" style="margin-bottom:14px;">⚙️ <strong>${r.intro}</strong></div>`;
    html += `<div class="explanation-card"><div class="explanation-title">📌 Главное правило</div><div class="explanation-desc">${r.mainRule}</div></div>`;
    html += `<div class="memory-hack" style="font-size:.9rem;">🔽 <strong>СУФФИКСЫ</strong> — ${r.suffixRule}</div>`;
    r.suffixGroups.forEach(g => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #6b8e23;margin-bottom:12px;">
            <div class="tense-header"><div class="tense-emoji">${g.emoji}</div><div><div class="tense-name" style="font-family:monospace;">${g.affix}</div><div style="font-size:.85rem;color:#8b6946;">${g.meaning}</div></div></div>`;
        g.chains.forEach(c => {
            html += `<div class="tense-example" style="cursor:default;">
                <div class="tense-example-text"><div class="tense-example-eng"><b>${c.from}</b> → <b>${c.to}</b></div><div class="tense-example-ru">${c.tr}</div></div>
                <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${c.from}, ${c.to}')">🔈</button>
            </div>`;
        });
        html += `</div>`;
    });
    html += `<div class="memory-hack" style="font-size:.9rem;margin-top:14px;">🔼 <strong>ПРЕФИКСЫ</strong> — ${r.prefixRule}</div>`;
    r.prefixGroups.forEach(g => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #b97f44;margin-bottom:12px;">
            <div class="tense-header"><div class="tense-emoji">${g.emoji}</div><div><div class="tense-name" style="font-family:monospace;">${g.affix}</div><div style="font-size:.85rem;color:#8b6946;">${g.meaning}</div></div></div>`;
        g.chains.forEach(c => {
            html += `<div class="tense-example" style="cursor:default;">
                <div class="tense-example-text"><div class="tense-example-eng"><b>${c.from}</b> → <b>${c.to}</b></div><div class="tense-example-ru">${c.tr}</div></div>
                <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${c.from}, ${c.to}')">🔈</button>
            </div>`;
        });
        html += `</div>`;
    });
    html += `<div class="memory-hack" style="font-size:.9rem;margin-top:14px;">⏰ <strong>Time markers</strong></div>`;
    html += `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">${timeMarkers.map(t => `<span style="background:#ecdca8;padding:8px 14px;border-radius:20px;">${t.emoji} ${t.word} — ${t.ru}</span>`).join('')}</div>`;
    return html;
}

function renderTrapPairs() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#b93a3a;margin-bottom:16px;">
        🪤 <strong>КАКАЯ РАЗНИЦА?</strong><br>
        <span style="font-size:.85rem;">Слова-ловушки, которые путают даже тех, кто учит английский годами!</span>
    </div>`;
    trapPairs.forEach(p => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #b97f44;margin-bottom:18px;">
            <div class="tense-header"><div class="tense-emoji">${p.emoji}</div><div class="tense-name">${p.title}</div></div>
            <div style="font-size:.85rem;color:#8b6946;text-align:center;margin:8px 0 14px;">${p.rule}</div>
            <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:stretch;">
                <div style="background:#e8f0d4;border-radius:20px;padding:14px;border:1px solid #a5c46a;">
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;justify-content:center;">
                        <span style="font-size:1.8rem;">${p.left.emoji}</span>
                        <span style="font-family:monospace;font-size:1.2rem;font-weight:bold;color:#3d2b1a;">${p.left.word}</span>
                    </div>
                    <div style="font-size:.85rem;color:#5f451f;text-align:center;line-height:1.3;margin-bottom:10px;">${p.left.meaning}</div>
                    ${p.left.examples.map(e => {
                        const clean = e.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
                        return `<div onclick="speakText('${clean}')" style="background:#fff6e8;padding:8px 10px;border-radius:12px;margin-top:6px;cursor:pointer;">
                            <div style="font-size:.85rem;font-weight:bold;color:#3d2b1a;">${e.en}</div>
                            <div style="font-size:.75rem;color:#8b6946;margin-top:3px;">${e.ru}</div>
                        </div>`;
                    }).join('')}
                </div>
                <div style="display:flex;align-items:center;justify-content:center;">
                    <span style="background:#b93a3a;color:white;padding:6px 10px;border-radius:50%;font-weight:bold;font-size:.8rem;">VS</span>
                </div>
                <div style="background:#fde4c8;border-radius:20px;padding:14px;border:1px solid #e0a878;">
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;justify-content:center;">
                        <span style="font-size:1.8rem;">${p.right.emoji}</span>
                        <span style="font-family:monospace;font-size:1.2rem;font-weight:bold;color:#3d2b1a;">${p.right.word}</span>
                    </div>
                    <div style="font-size:.85rem;color:#5f451f;text-align:center;line-height:1.3;margin-bottom:10px;">${p.right.meaning}</div>
                    ${p.right.examples.map(e => {
                        const clean = e.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
                        return `<div onclick="speakText('${clean}')" style="background:#fff6e8;padding:8px 10px;border-radius:12px;margin-top:6px;cursor:pointer;">
                            <div style="font-size:.85rem;font-weight:bold;color:#3d2b1a;">${e.en}</div>
                            <div style="font-size:.75rem;color:#8b6946;margin-top:3px;">${e.ru}</div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>`;
    });
    html += `<div class="memory-hack" style="background:#c8e6a0;border-left-color:#6b8e23;margin-top:16px;text-align:center;font-size:.9rem;">
        💡 Эти слова путают даже тех, кто учит английский годами — теперь вы знаете разницу!
    </div>`;
    return html;
}

function renderTwinWords() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#b93a3a;margin-bottom:16px;">
        ⚠️ <strong>НЕ ПУТАЕМ!</strong><br>
        <span style="font-size:.85rem;">Эти слова звучат и пишутся похоже, но значат совершенно разное!</span>
    </div>`;
    twinWords.forEach(p => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #b97f44;margin-bottom:18px;">
            <div class="tense-header"><div class="tense-emoji">${p.emoji}</div><div class="tense-name">${p.title}</div></div>
            <div style="font-size:.85rem;color:#8b6946;text-align:center;margin:8px 0 14px;">${p.rule}</div>
            <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:stretch;">
                <div style="background:#e8f0d4;border-radius:20px;padding:14px;border:1px solid #a5c46a;">
                    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;margin-bottom:8px;">
                        <span style="font-size:1.8rem;">${p.left.emoji}</span>
                        <span style="font-family:monospace;font-size:1.2rem;font-weight:bold;color:#3d2b1a;">${p.left.word}</span>
                        <span style="background:#a5c46a;color:white;padding:2px 10px;border-radius:20px;font-size:.7rem;">${p.left.pos}</span>
                    </div>
                    <div style="font-size:.85rem;color:#5f451f;text-align:center;line-height:1.3;margin-bottom:10px;font-weight:bold;">${p.left.meaning}</div>
                    ${p.left.examples.map(e => {
                        const clean = e.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
                        return `<div onclick="speakText('${clean}')" style="background:#fff6e8;padding:8px 10px;border-radius:12px;margin-top:6px;cursor:pointer;">
                            <div style="font-size:.85rem;font-weight:bold;color:#3d2b1a;">${e.en}</div>
                            <div style="font-size:.75rem;color:#8b6946;margin-top:3px;">${e.ru}</div>
                        </div>`;
                    }).join('')}
                </div>
                <div style="display:flex;align-items:center;justify-content:center;">
                    <span style="background:#b93a3a;color:white;padding:6px 10px;border-radius:50%;font-weight:bold;font-size:.8rem;">VS</span>
                </div>
                <div style="background:#fde4c8;border-radius:20px;padding:14px;border:1px solid #e0a878;">
                    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;margin-bottom:8px;">
                        <span style="font-size:1.8rem;">${p.right.emoji}</span>
                        <span style="font-family:monospace;font-size:1.2rem;font-weight:bold;color:#3d2b1a;">${p.right.word}</span>
                        <span style="background:#e0a878;color:white;padding:2px 10px;border-radius:20px;font-size:.7rem;">${p.right.pos}</span>
                    </div>
                    <div style="font-size:.85rem;color:#5f451f;text-align:center;line-height:1.3;margin-bottom:10px;font-weight:bold;">${p.right.meaning}</div>
                    ${p.right.examples.map(e => {
                        const clean = e.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
                        return `<div onclick="speakText('${clean}')" style="background:#fff6e8;padding:8px 10px;border-radius:12px;margin-top:6px;cursor:pointer;">
                            <div style="font-size:.85rem;font-weight:bold;color:#3d2b1a;">${e.en}</div>
                            <div style="font-size:.75rem;color:#8b6946;margin-top:3px;">${e.ru}</div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>`;
    });
    return html;
}

function renderDiscourseMarkers() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:16px;">
        💬 <strong>ВВОДНЫЕ СЛОВА</strong><br>
        <span style="font-size:.85rem;">Маленькие слова — большие возможности.</span>
    </div>`;
    html += `<div class="filters" id="discourseFilters" style="margin-bottom:14px;">`;
    discourseGroups.forEach(g => {
        html += `<button class="filter-btn ${currentDiscourseGroup === g.id ? 'active' : ''}" data-discourse="${g.id}">${g.emoji} ${g.name}</button>`;
    });
    html += `</div>`;
    let filtered = currentDiscourseGroup === 'all' ? [...discourseMarkers] : discourseMarkers.filter(d => d.group === currentDiscourseGroup);
    html += `<div class="phrase-counter">Показано: ${filtered.length} из ${discourseMarkers.length}</div>`;
    filtered.forEach(d => {
        const clean = d.example.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
        html += `<div class="phrase-card" onclick="speakText('${clean}')">
            <div style="flex:1;">
                <div class="eng">${d.emoji} <b>${d.word}</b> <span style="color:#8b6946;font-family:monospace;font-size:.85rem;">${d.transcription}</span></div>
                <div class="ru">🇷🇺 ${d.ru}</div>
                <div style="font-size:.8rem;color:#5f451f;margin-top:6px;font-style:italic;">📖 ${d.example.en} — ${d.example.ru}</div>
            </div>
            <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')">🔈</button>
        </div>`;
    });
    return html;
}

function renderAllTimeWords() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:16px;">
        ⏰ <strong>ПОЛЕЗНЫЕ СЛОВА ВРЕМЕНИ</strong><br>
        <span style="font-size:.85rem;">Запоминай легко — используй каждый день!</span>
    </div>`;
    const total = allTimeWords.length;
    const learned = learnedTimeWords.length;
    const progress = total > 0 ? Math.round((learned / total) * 100) : 0;
    html += `<div style="background:#ecdca8;border-radius:28px;padding:14px 18px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
            <strong>🧠 Изучено: ${learned}/${total}</strong>
            <span style="font-weight:bold;color:#6b8e23;">${progress}%</span>
        </div>
        <div style="background:#fff6e8;border-radius:20px;height:12px;margin-top:8px;overflow:hidden;">
            <div style="background:linear-gradient(90deg,#6b8e23,#c8e6a0);height:100%;width:${progress}%;transition:width .4s;"></div>
        </div>
    </div>`;
    html += `<div class="filters" id="allTimeFilters" style="margin-bottom:14px;">`;
    allTimeWordGroups.forEach(g => {
        html += `<button class="filter-btn ${currentAllTimeFilter === g.id ? 'active' : ''}" data-timefilter="${g.id}">${g.emoji} ${g.name}</button>`;
    });
    html += `</div>`;
    let filtered = currentAllTimeFilter === 'all' ? [...allTimeWords] : allTimeWords.filter(w => w.group === currentAllTimeFilter);
    html += `<div class="phrase-counter">Показано: ${filtered.length} из ${allTimeWords.length}</div>`;
    let lastGroup = null;
    filtered.forEach(w => {
        if (w.group !== lastGroup && currentAllTimeFilter === 'all') {
            const g = allTimeWordGroups.find(x => x.id === w.group);
            if (g) {
                html += `<div class="memory-hack" style="background:#f9eec1;border-left-color:${g.color};margin:16px 0 12px;text-align:center;">
                    ${g.emoji} <b>${g.name.toUpperCase()}</b>
                </div>`;
            }
            lastGroup = w.group;
        }
        const clean = w.en.replace(/'/g, "\\'");
        const isLearned = learnedTimeWords.includes(w.en);
        const borderColor = allTimeWordGroups.find(x => x.id === w.group)?.color || '#c49a6c';
        html += `<div class="phrase-card" style="border-left:4px solid ${borderColor};">
            <div style="flex:1;" onclick="speakText('${clean}')">
                <div class="eng">${w.emoji} <b>${w.en}</b> <span style="color:#8b6946;font-family:monospace;font-size:.8rem;">${w.trans}</span></div>
                <div class="ru">🇷🇺 ${w.ru}</div>
            </div>
            <div style="display:flex;gap:6px;align-items:center;">
                <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')" style="font-size:.75rem;">🔈</button>
                <button class="speak-btn-small" onclick="event.stopPropagation();toggleTimeWordLearned('${clean}')" style="background:${isLearned ? '#6b8e23' : '#c49a6c'};font-size:.85rem;">${isLearned ? '✅' : '☐'}</button>
            </div>
        </div>`;
    });
    return html;
}
function toggleTimeWordLearned(word) {
    const idx = learnedTimeWords.indexOf(word);
    if (idx >= 0) learnedTimeWords.splice(idx, 1);
    else learnedTimeWords.push(word);
    localStorage.setItem('learnedTimeWords', JSON.stringify(learnedTimeWords));
    renderPrefixes();
}

function renderTimePrepositions() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:16px;">
        🕐 <strong>ПРЕДЛОГИ ВРЕМЕНИ</strong><br>
        <span style="font-size:.85rem;">Запоминай легко — и говори правильно!</span>
    </div>`;
    html += `<div style="overflow-x:auto;margin-bottom:20px;">
        <table style="width:100%;border-collapse:collapse;background:#fff6e8;border-radius:20px;overflow:hidden;min-width:600px;">
            <thead><tr style="background:#dbbc87;">
                <th style="padding:12px 10px;text-align:left;font-size:.85rem;">ПРЕДЛОГ</th>
                <th style="padding:12px 10px;text-align:left;font-size:.85rem;">ИСПОЛЬЗУЕТСЯ</th>
                <th style="padding:12px 10px;text-align:left;font-size:.85rem;">ПРИМЕР</th>
                <th style="padding:12px 10px;text-align:center;font-size:.85rem;">🔊</th>
            </tr></thead><tbody>`;
    timePrepositions.forEach(p => {
        const clean = p.example.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
        html += `<tr style="border-bottom:1px solid #e1cba1;">
            <td style="padding:12px 10px;border-left:5px solid ${p.color};">
                <div style="font-size:1.4rem;font-weight:bold;color:#3d2b1a;font-family:monospace;">${p.emoji} ${p.prep}</div>
                <div style="font-size:.7rem;color:#8b6946;">${p.short}</div>
            </td>
            <td style="padding:12px 10px;font-size:.85rem;color:#5f451f;line-height:1.4;">${p.usage}</td>
            <td style="padding:12px 10px;">
                <div style="font-size:.9rem;font-weight:bold;color:#3d2b1a;">${p.example.en}</div>
                <div style="font-size:.8rem;color:#8b6946;margin-top:3px;">${p.example.ru}</div>
            </td>
            <td style="padding:12px 10px;text-align:center;">
                <button class="speak-btn-small" onclick="speakText('${clean}')">🔈</button>
            </td>
        </tr>`;
    });
    html += `</tbody></table></div>`;
    html += `<div class="memory-hack" style="background:#fde4c8;border-left-color:#b97f44;margin:20px 0 14px;text-align:center;">⚡ <strong>БЫСТРАЯ ШПАРГАЛКА</strong></div>`;
    html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;margin-bottom:20px;">`;
    timePrepositionCheatsheet.forEach(c => {
        html += `<div style="background:#fff6e8;border-radius:16px;padding:12px;border-left:4px solid #c49a6c;">
            <div style="font-size:.9rem;font-weight:bold;color:#3d2b1a;">${c.emoji} ${c.rule}</div>
            <div style="font-size:.8rem;color:#8b6946;font-family:monospace;margin-top:4px;">${c.detail}</div>
        </div>`;
    });
    html += `</div>`;
    html += `<div class="memory-hack" style="background:#e8f0d4;border-left-color:#6b8e23;margin:20px 0 14px;text-align:center;">✂️ <strong>ПОЛЕЗНЫЕ СОКРАЩЕНИЯ</strong></div>`;
    html += `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">`;
    usefulAbbreviations.forEach(a => {
        html += `<div onclick="speakText('${a.abbr}')" style="background:#fff6e8;padding:10px 14px;border-radius:16px;cursor:pointer;border:1px solid #e1cba1;flex:1;min-width:140px;">
            <div style="font-size:1.1rem;font-weight:bold;color:#3d2b1a;">${a.emoji} ${a.abbr}</div>
            <div style="font-size:.8rem;color:#5f451f;margin-top:3px;">${a.meaning}</div>
        </div>`;
    });
    html += `</div>`;
    html += `<div class="memory-hack" style="background:#c8e6a0;border-left-color:#6b8e23;margin-top:16px;text-align:center;font-size:.9rem;">
        💡 <b>Не путайте ON и IN:</b> ON — для дней и дат, IN — для месяцев, лет и сезонов.<br>
        <b>SINCE и FOR:</b> SINCE указывает точку старта, FOR — сам период.
    </div>`;
    return html;
}

function renderEssayLinkers() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:16px;">
        ✍️ <strong>СЛОВА-СВЯЗКИ ДЛЯ ЭССЕ</strong><br>
        <span style="font-size:.85rem;">Структурируй мысли — пиши связно и уверенно!</span>
    </div>`;
    html += `<div class="filters" id="essayFilters" style="margin-bottom:14px;">`;
    essayLinkerGroups.forEach(g => {
        html += `<button class="filter-btn ${currentEssayGroup === g.id ? 'active' : ''}" data-essay="${g.id}">${g.emoji} ${g.name}</button>`;
    });
    html += `</div>`;
    let filtered = currentEssayGroup === 'all' ? [...essayLinkers] : essayLinkers.filter(e => e.group === currentEssayGroup);
    html += `<div class="phrase-counter">Показано: ${filtered.length} из ${essayLinkers.length}</div>`;
    filtered.forEach(e => {
        const clean = e.example.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
        html += `<div class="tense-card" style="cursor:default;border-left:5px solid #c49a6c;margin-bottom:12px;">
            <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:8px;">
                <span style="font-size:1.8rem;">${e.emoji}</span>
                <div style="flex:1;">
                    <div style="font-size:1.15rem;font-weight:bold;color:#3d2b1a;">${e.en}</div>
                    <div style="font-size:.75rem;color:#8b6946;font-family:monospace;">${e.trans}</div>
                    <div style="font-size:.95rem;color:#5f451f;margin-top:4px;">🇷🇺 ${e.ru}</div>
                </div>
            </div>
            <div style="background:#ecdca8;border-radius:14px;padding:8px 12px;font-size:.85rem;margin:8px 0;">
                <b>🎯 Когда использовать:</b> ${e.usage}
            </div>
            <div class="tense-example" onclick="speakText('${clean}')" style="margin:0;">
                <div class="tense-example-text">
                    <div class="tense-example-eng">${e.example.en}</div>
                    <div class="tense-example-ru">${e.example.ru}</div>
                </div>
                <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')">🔈</button>
            </div>
        </div>`;
    });
    html += `<div class="memory-hack" style="background:#c8e6a0;border-left-color:#6b8e23;margin-top:16px;text-align:center;font-size:.9rem;">
        💡 Формула хорошего эссе: <b>First and foremost</b> → <b>Secondly</b> → <b>Furthermore</b> → <b>However</b> → <b>In conclusion</b>.
    </div>`;
    return html;
}

function renderUsefulLinkers() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:16px;">
        🗣️ <strong>ПОЛЕЗНЫЕ СЛОВА И ВЫРАЖЕНИЯ</strong><br>
        <span style="font-size:.85rem;">Говори увереннее. Пиши лучше. Мысли шире.</span>
    </div>`;
    html += `<div class="filters" id="usefulFilters" style="margin-bottom:14px;">`;
    usefulLinkerGroups.forEach(g => {
        html += `<button class="filter-btn ${currentUsefulGroup === g.id ? 'active' : ''}" data-useful="${g.id}">${g.emoji} ${g.name}</button>`;
    });
    html += `</div>`;
    let filtered = currentUsefulGroup === 'all' ? [...usefulLinkers] : usefulLinkers.filter(u => u.group === currentUsefulGroup);
    html += `<div class="phrase-counter">Показано: ${filtered.length} из ${usefulLinkers.length}</div>`;
    let lastGroup = null;
    filtered.forEach(u => {
        if (u.group !== lastGroup && currentUsefulGroup === 'all') {
            if (u.group === 'compare') {
                html += `<div class="memory-hack" style="background:#e8f0d4;border-left-color:#6b8e23;margin:18px 0 12px;text-align:center;">
                    ⚖️ <b>Чтобы сравнить</b> — сравнивай идеи, видь больше сторон!
                </div>`;
            } else if (u.group === 'explain') {
                html += `<div class="memory-hack" style="background:#fde4c8;border-left-color:#b97f44;margin:18px 0 12px;text-align:center;">
                    🎯 <b>Чтобы объяснить</b> — объясняй мысли, будь понятным!
                </div>`;
            }
            lastGroup = u.group;
        }
        const clean = u.example.en.replace(/<[^>]*>/g, '').replace(/'/g, "\\'");
        html += `<div class="phrase-card" onclick="openModalWithSpeech('${u.en}','${u.example.en}','${u.example.ru}','${u.usage}')">
            <div style="flex:1;">
                <div class="eng">${u.emoji} <b>${u.en}</b> <span style="color:#8b6946;font-family:monospace;font-size:.8rem;">${u.trans}</span></div>
                <div class="ru">🇷🇺 ${u.ru}</div>
                <div style="font-size:.8rem;color:#5f451f;margin-top:6px;font-style:italic;">📖 ${u.example.en} — ${u.example.ru}</div>
                <div style="font-size:.75rem;color:#8b6946;margin-top:4px;">🎯 ${u.usage}</div>
            </div>
            <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')">🔈</button>
        </div>`;
    });
    html += `<div class="memory-hack" style="background:#c8e6a0;border-left-color:#6b8e23;margin-top:16px;text-align:center;font-size:.9rem;">
        💡 Новые слова — больше возможностей! Используйте эти связки каждый день.
    </div>`;
    return html;
}

function renderQuestionWords() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:16px;">
        ❓ <strong>ВОПРОСИТЕЛЬНЫЕ СЛОВА</strong><br>
        <span style="font-size:.85rem;">9 основных + 5 с How. Запоминай легко!</span>
    </div>`;
    html += `<div class="filters" id="questionFilters" style="margin-bottom:14px;">`;
    questionWordGroups.forEach(g => {
        html += `<button class="filter-btn ${currentQuestionGroup === g.id ? 'active' : ''}" data-question="${g.id}">${g.emoji} ${g.name}</button>`;
    });
    html += `</div>`;
    let filtered = currentQuestionGroup === 'all' ? [...questionWords] : questionWords.filter(w => w.group === currentQuestionGroup);
    html += `<div class="phrase-counter">Показано: ${filtered.length} из ${questionWords.length}</div>`;
    let lastGroup = null;
    filtered.forEach(w => {
        if (w.group !== lastGroup && currentQuestionGroup === 'all') {
            if (w.group === 'basic') {
                html += `<div class="memory-hack" style="background:#e8f0d4;border-left-color:#6b8e23;margin:16px 0 12px;text-align:center;">
                    ❓ <b>ОСНОВНЫЕ ВОПРОСИТЕЛЬНЫЕ СЛОВА</b>
                </div>`;
            } else if (w.group === 'how') {
                html += `<div class="memory-hack" style="background:#fde4c8;border-left-color:#b97f44;margin:16px 0 12px;text-align:center;">
                    📏 <b>HOW + ...</b> — уточняющие вопросы
                </div>`;
            }
            lastGroup = w.group;
        }
        const clean = w.example.en.replace(/<[^>]*>/g, '').replace(/'/g, "\\'");
        html += `<div class="phrase-card" onclick="speakText('${clean}')">
            <div style="flex:1;">
                <div class="eng">${w.emoji} <b style="font-size:1.15rem;">${w.en}</b> <span style="color:#8b6946;font-family:monospace;font-size:.8rem;">${w.trans}</span></div>
                <div class="ru" style="font-weight:bold;">🇷🇺 ${w.ru}</div>
                <div style="font-size:.85rem;color:#5f451f;margin-top:8px;padding:6px 10px;background:#f9eec1;border-radius:14px;font-style:italic;">
                    💬 ${w.example.en} — ${w.example.ru}
                </div>
            </div>
            <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')">🔈</button>
        </div>`;
    });
    if (currentQuestionGroup === 'all') {
        html += `<div class="memory-hack" style="background:#c8e6a0;border-left-color:#6b8e23;margin-top:20px;font-size:.9rem;line-height:1.6;">
            💡 <b>Быстрая шпаргалка:</b><br>
            🔢 <b>How many</b> — для исчисляемых (books, people)<br>
            💰 <b>How much</b> — для неисчисляемых (money, water)<br>
            🔀 <b>Which</b> — выбор из ограниченного набора<br>
            ❓ <b>What</b> — общий вопрос о чём-то<br>
            👤 <b>Who</b> — подлежащее, 👥 <b>Whom</b> — дополнение
        </div>`;
    }
    return html;
}

// ═══════════════════════════════════════════════════════════
// ОБУЧАЮЩИЕ МОДУЛИ — РЕНДЕРЫ
// ═══════════════════════════════════════════════════════════
function renderWordBuilder() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        🏗️ <strong>КОНСТРУКТОР СЛОВ</strong><br>
        <span style="font-size:.85rem;">Одно слово → целое семейство. Учи корни и аффиксы вместе!</span>
    </div>`;
    wordBuilderKit.forEach(kit => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #c49a6c;margin-bottom:18px;">
            <div class="tense-header"><div class="tense-emoji">${kit.emoji}</div>
                <div><div class="tense-name" style="font-family:monospace;">${kit.base}</div>
                <div style="font-size:.85rem;color:#8b6946;">${kit.ru}</div></div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin-top:10px;">`;
        kit.forms.forEach(f => {
            const clean = f.word.replace(/'/g, "\\'");
            html += `<div onclick="speakText('${clean}')" style="background:#fff6e8;border-radius:16px;padding:10px 12px;cursor:pointer;border-left:4px solid #b97f44;display:flex;align-items:center;gap:8px;">
                <span style="font-size:1.5rem;">${f.emoji}</span>
                <div style="flex:1;">
                    <div style="font-weight:bold;color:#3d2b1a;font-size:.95rem;">${f.word}</div>
                    <div style="font-size:.7rem;color:#8b6946;font-family:monospace;">${f.affix}</div>
                    <div style="font-size:.75rem;color:#5f451f;">${f.meaning}</div>
                </div>
            </div>`;
        });
        html += `</div></div>`;
    });
    html += `<div class="memory-hack" style="background:#c8e6a0;border-left-color:#6b8e23;text-align:center;font-size:.9rem;">
        💡 Знаешь один корень — получаешь 4-5 слов!
    </div>`;
    return html;
}

function renderSuffixCheat() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        📋 <strong>СПРАВОЧНИК СУФФИКСОВ</strong><br>
        <span style="font-size:.85rem;">Определи часть речи — выбери нужный суффикс.</span>
    </div>`;
    suffixCheatsheet.forEach(g => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid ${g.color};margin-bottom:14px;">
            <div class="tense-header"><div class="tense-emoji">${g.emoji}</div>
                <div><div class="tense-name">${g.name}</div>
                <div style="font-size:.8rem;color:#8b6946;">${g.hint}</div></div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;">`;
        g.suffixes.forEach(s => {
            html += `<span onclick="speakText('${s}')" style="background:${g.color};color:white;padding:6px 14px;border-radius:20px;font-family:monospace;font-weight:bold;cursor:pointer;">${s}</span>`;
        });
        html += `</div></div>`;
    });
    return html;
}

function renderWordChains() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        🔗 <strong>ЦЕПОЧКИ СЛОВ</strong><br>
        <span style="font-size:.85rem;">Одно ядро → целое дерево. Читай слева-направо!</span>
    </div>`;
    wordChains.forEach(c => {
        const clean = c.chain.join(', ').replace(/'/g, "\\'");
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #b97f44;margin-bottom:14px;">
            <div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-bottom:10px;">`;
        c.chain.forEach((w, i) => {
            html += `<span onclick="speakText('${w}')" style="background:#fff6e8;padding:8px 14px;border-radius:16px;font-weight:bold;color:#3d2b1a;cursor:pointer;border:1px solid #c49a6c;">${w}</span>`;
            if (i < c.chain.length - 1) html += `<span style="color:#8b6946;font-size:1.2rem;">→</span>`;
        });
        html += `</div>
            <div style="font-size:.9rem;color:#5f451f;padding:8px 12px;background:#ecdca8;border-radius:14px;">🇷🇺 ${c.ru}</div>
            <div style="text-align:center;margin-top:10px;">
                <button class="speak-btn-small" onclick="speakText('${clean}')">🔊 Озвучить цепочку</button>
            </div>
        </div>`;
    });
    return html;
}

function renderFlipCards() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        🎴 <strong>КАРТОЧКИ-ФЛИПЫ</strong><br>
        <span style="font-size:.85rem;">Нажми на карточку, чтобы перевернуть. Проверь себя!</span>
    </div>`;
    html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;">`;
    flipCards.forEach((c, i) => {
        const flipped = flipCardState['fc_' + i];
        const cleanQ = c.front.replace(/'/g, "\\'");
        const cleanA = c.back.replace(/'/g, "\\'");
        html += `<div onclick="toggleFlipCard('fc_${i}')" style="cursor:pointer;min-height:150px;">
            <div style="background:${flipped ? '#c8e6a0' : '#fff6e8'};border-radius:20px;padding:18px;border:2px solid ${flipped ? '#6b8e23' : '#c49a6c'};height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;">
                <div style="font-size:2.4rem;margin-bottom:8px;">${flipped ? '💡' : c.emoji}</div>
                <div style="font-family:monospace;font-size:1.4rem;font-weight:bold;color:#3d2b1a;margin-bottom:6px;">${c.front}</div>
                ${flipped ? `
                    <div style="font-size:.95rem;color:#2d4a0f;font-weight:bold;margin-top:6px;padding-top:10px;border-top:1px dashed #6b8e23;">${c.back}</div>
                    <div style="font-size:.8rem;color:#5f451f;margin-top:8px;font-style:italic;">📖 ${c.example}</div>
                    <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${cleanQ} ${cleanA}')" style="margin-top:10px;font-size:.75rem;">🔊</button>
                ` : `<div style="font-size:.8rem;color:#8b6946;margin-top:10px;">👆 нажми</div>`}
            </div>
        </div>`;
    });
    html += `</div>`;
    html += `<div style="text-align:center;margin-top:16px;">
        <button onclick="flipCardState={};renderPrefixes();" style="background:#8b6946;border:none;padding:12px 24px;border-radius:40px;color:white;font-size:1rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;">🔄 Перемешать заново</button>
    </div>`;
    return html;
}
function toggleFlipCard(key) { flipCardState[key] = !flipCardState[key]; renderPrefixes(); }

function renderRuleReminders() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        📏 <strong>ПРАВИЛА-НАПОМИНАНИЯ</strong>
    </div>`;
    ruleReminders.forEach(r => {
        html += `<div class="phrase-card" style="cursor:default;border-left:5px solid #b97f44;">
            <div style="flex:1;">
                <div style="font-size:.95rem;font-weight:bold;color:#3d2b1a;line-height:1.5;">${r.emoji} ${r.rule}</div>
                <div style="font-size:.85rem;color:#8b6946;margin-top:6px;font-family:monospace;background:#ecdca8;padding:6px 10px;border-radius:12px;display:inline-block;">${r.example}</div>
            </div>
        </div>`;
    });
    return html;
}

function renderAffixTrainer() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        🎯 <strong>ТРЕНАЖЁР</strong>
    </div>`;
    let correct = 0, answered = 0;
    Object.values(affixTrainerState).forEach(s => { if (s.chosen !== undefined) { answered++; if (s.correct) correct++; } });
    if (answered > 0) {
        const pct = Math.round((correct / answered) * 100);
        html += `<div style="background:#ecdca8;border-radius:40px;padding:10px 16px;text-align:center;margin-bottom:14px;font-weight:bold;color:#3d2b1a;">
            ✅ ${correct}/${answered} (${pct}%) · всего ${affixTrainer.length}
        </div>`;
    }
    affixTrainer.forEach((q, i) => {
        const st = affixTrainerState['at_' + i] || {};
        const chosen = st.chosen;
        const ans = chosen !== undefined;
        let bc = ans ? (st.correct ? '#6b8e23' : '#b93a3a') : '#c49a6c';
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid ${bc};margin-bottom:12px;">
            <div style="font-weight:bold;color:#3d2b1a;margin-bottom:10px;">${i+1}. ${q.q}</div>`;
        q.options.forEach((opt, oi) => {
            let bg = '#f2e5ca';
            if (ans) { if (oi === q.correct) bg = '#c8e6a0'; else if (oi === chosen) bg = '#f3b4b4'; }
            const mark = ans ? (oi === q.correct ? '✅ ' : (oi === chosen ? '❌ ' : '')) : '';
            const clean = opt.replace(/'/g, "\\'");
            html += `<div onclick="${ans ? '' : `answerAffixTrainer('at_${i}',${oi},${q.correct})`}" style="background:${bg};padding:10px 14px;border-radius:18px;margin:6px 0;cursor:${ans ? 'default' : 'pointer'};display:flex;justify-content:space-between;align-items:center;gap:8px;">
                <span>${mark}${opt}</span>
                <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')" style="font-size:.7rem;padding:4px 10px;">🔈</button>
            </div>`;
        });
        if (ans) html += `<div class="memory-hack" style="margin:10px 0 0;font-size:.85rem;">💡 ${q.hint}</div>`;
        html += `</div>`;
    });
    html += `<div style="text-align:center;margin-top:16px;">
        <button onclick="affixTrainerState={};renderPrefixes();" style="background:#8b6946;border:none;padding:12px 24px;border-radius:40px;color:white;font-size:1rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;">🔄 Пройти заново</button>
    </div>`;
    return html;
}
function answerAffixTrainer(key, chosen, correct) {
    affixTrainerState[key] = { chosen, correct: chosen === correct };
    renderPrefixes();
}

function renderCommonMistakes() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#b93a3a;margin-bottom:14px;">
        🚫 <strong>ТОП-ОШИБКИ РУССКОЯЗЫЧНЫХ</strong>
    </div>`;
    commonMistakes.forEach(m => {
        const cleanR = m.right.replace(/'/g, "\\'");
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #b93a3a;margin-bottom:12px;">
            <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;">
                <div style="background:#f3b4b4;padding:12px;border-radius:16px;text-align:center;">
                    <div style="font-size:.75rem;color:#5a0f0f;font-weight:bold;margin-bottom:4px;">❌ НЕПРАВИЛЬНО</div>
                    <div style="font-weight:bold;color:#5a0f0f;">${m.wrong}</div>
                </div>
                <div style="font-size:1.3rem;">→</div>
                <div onclick="speakText('${cleanR}')" style="background:#c8e6a0;padding:12px;border-radius:16px;text-align:center;cursor:pointer;">
                    <div style="font-size:.75rem;color:#2d4a0f;font-weight:bold;margin-bottom:4px;">✅ ПРАВИЛЬНО</div>
                    <div style="font-weight:bold;color:#2d4a0f;">${m.right}</div>
                </div>
            </div>
            <div style="font-size:.85rem;color:#5f451f;margin-top:10px;padding:8px 12px;background:#ecdca8;border-radius:12px;">
                💡 <b>Почему:</b> ${m.why}
            </div>
        </div>`;
    });
    return html;
}

function renderSpeechDrill() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        🔊 <strong>ТРЕНИРОВКА ПРОИЗНОШЕНИЯ</strong>
    </div>`;
    speechDrill.forEach(d => {
        const clean = d.en.replace(/'/g, "\\'");
        html += `<div class="phrase-card" onclick="speakText('${clean}')" style="border-left:5px solid #b97f44;">
            <div style="flex:1;">
                <div style="font-family:monospace;font-size:1.1rem;font-weight:bold;color:#3d2b1a;">${d.en}</div>
                <div style="font-size:.8rem;color:#8b6946;margin-top:4px;">🇷🇺 ${d.ru}</div>
            </div>
            <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')">🔈</button>
        </div>`;
    });
    return html;
}

function renderPowerPrefixes() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        💪 <strong>ТОП-100 ПРИМЕРОВ</strong>
    </div>`;
    powerPrefixes.forEach(p => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #b97f44;margin-bottom:12px;">
            <div class="tense-header">
                <div class="tense-emoji">💪</div>
                <div><div class="tense-name" style="font-family:monospace;">${p.affix}</div>
                <div style="font-size:.8rem;color:#8b6946;">${p.ru}</div></div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;">`;
        p.top5.forEach(w => {
            const clean = w.replace(/'/g, "\\'");
            html += `<span onclick="speakText('${clean}')" style="background:#fff6e8;padding:8px 14px;border-radius:20px;font-weight:bold;color:#3d2b1a;cursor:pointer;border:1px solid #c49a6c;">🔊 ${w}</span>`;
        });
        html += `</div></div>`;
    });
    return html;
}

function renderAffixMap() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        🗺️ <strong>КАРТА АФФИКСОВ ПО СМЫСЛУ</strong>
    </div>`;
    Object.values(affixMap).forEach(group => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid ${group.color};margin-bottom:14px;">
            <div class="tense-header"><div class="tense-emoji">${group.emoji}</div>
                <div><div class="tense-name">${group.title}</div>
                <div style="font-size:.8rem;color:#8b6946;">${group.desc}</div></div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px;margin-top:10px;">`;
        group.affixes.forEach(a => {
            html += `<div onclick="speakText('${a.a.replace(/-/g,'')}')" style="background:#fff6e8;border-radius:14px;padding:10px 12px;cursor:pointer;border-left:4px solid ${group.color};">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">
                    <span style="font-family:monospace;font-weight:bold;color:#3d2b1a;font-size:1.05rem;">${a.a}</span>
                    <span style="font-size:.7rem;color:#8b6946;background:#ecdca8;padding:2px 8px;border-radius:12px;">${a.hint}</span>
                </div>
                <div style="font-size:.8rem;color:#5f451f;margin-top:4px;font-style:italic;">${a.ex}</div>
            </div>`;
        });
        html += `</div></div>`;
    });
    return html;
}

function renderWordFamilies() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        👨‍👩‍👧 <strong>СЕМЬИ СЛОВ</strong>
    </div>`;
    wordFamilies.forEach(fam => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #6b8e23;margin-bottom:18px;">
            <div class="tense-header">
                <div class="tense-emoji">${fam.emoji}</div>
                <div><div class="tense-name" style="font-family:monospace;">${fam.root}</div>
                <div style="font-size:.85rem;color:#8b6946;">${fam.meaning}</div></div>
            </div>
            <div style="overflow-x:auto;margin-top:10px;">
                <table style="width:100%;border-collapse:collapse;min-width:400px;">
                    <thead><tr style="background:#dbbc87;">
                        <th style="padding:8px;text-align:left;font-size:.8rem;">СЛОВО</th>
                        <th style="padding:8px;text-align:left;font-size:.8rem;">ЧАСТЬ РЕЧИ</th>
                        <th style="padding:8px;text-align:left;font-size:.8rem;">ПЕРЕВОД</th>
                        <th style="padding:8px;text-align:left;font-size:.8rem;">АФФИКС</th>
                        <th style="padding:8px;text-align:center;font-size:.8rem;">🔊</th>
                    </tr></thead><tbody>`;
        fam.members.forEach(m => {
            const posEmoji = { noun: '📦', verb: '⚡', adjective: '🎨', adverb: '💨' }[m.pos] || '❔';
            html += `<tr style="border-bottom:1px solid #e1cba1;">
                <td style="padding:8px;font-weight:bold;color:#3d2b1a;">${m.word}</td>
                <td style="padding:8px;font-size:.85rem;">${posEmoji} ${m.pos}</td>
                <td style="padding:8px;font-size:.85rem;color:#5f451f;">${m.ru}</td>
                <td style="padding:8px;font-size:.8rem;font-family:monospace;color:#8b6946;">${m.affix}</td>
                <td style="padding:8px;text-align:center;"><button class="speak-btn-small" onclick="speakText('${m.word}')" style="font-size:.7rem;padding:4px 10px;">🔈</button></td>
            </tr>`;
        });
        html += `</tbody></table></div></div>`;
    });
    return html;
}

function renderOpposites() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        ⚖️ <strong>АНТОНИМЫ ЧЕРЕЗ АФФИКСЫ</strong>
    </div>`;
    oppositeAffixes.forEach(p => {
        const c1 = p.ex1.replace(/'/g, "\\'");
        const c2 = p.ex2.replace(/'/g, "\\'");
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #b97f44;margin-bottom:12px;">
            <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;">
                <div onclick="speakText('${c1}')" style="background:#e8f0d4;padding:12px;border-radius:16px;text-align:center;cursor:pointer;">
                    <div style="font-size:.7rem;color:#2d4a0f;font-weight:bold;font-family:monospace;">${p.pair[0]}</div>
                    <div style="font-weight:bold;color:#2d4a0f;margin-top:4px;">${p.ex1}</div>
                </div>
                <div style="font-size:1.5rem;">⚖️</div>
                <div onclick="speakText('${c2}')" style="background:#fde4c8;padding:12px;border-radius:16px;text-align:center;cursor:pointer;">
                    <div style="font-size:.7rem;color:#8b4513;font-weight:bold;font-family:monospace;">${p.pair[1]}</div>
                    <div style="font-weight:bold;color:#8b4513;margin-top:4px;">${p.ex2}</div>
                </div>
            </div>
            <div style="font-size:.85rem;color:#5f451f;text-align:center;margin-top:8px;">🇷🇺 ${p.ru}</div>
        </div>`;
    });
    return html;
}

function renderConverter() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        🔀 <strong>КОНВЕРТЕР ЧАСТЕЙ РЕЧИ</strong>
    </div>`;
    html += `<div class="tense-card" style="cursor:default;border-left:5px solid #6b8e23;margin-bottom:14px;">
        <div style="font-weight:bold;margin-bottom:10px;">📋 Правила конвертации:</div>
        <div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;min-width:420px;">
        <thead><tr style="background:#dbbc87;">
            <th style="padding:8px;font-size:.8rem;text-align:left;">ИЗ</th>
            <th style="padding:8px;font-size:.8rem;text-align:left;">→ В</th>
            <th style="padding:8px;font-size:.8rem;text-align:left;">СУФФИКС</th>
            <th style="padding:8px;font-size:.8rem;text-align:left;">ПРИМЕР</th>
        </tr></thead><tbody>`;
    converterRules.forEach(r => {
        html += `<tr style="border-bottom:1px solid #e1cba1;">
            <td style="padding:8px;font-size:.85rem;">${r.from}</td>
            <td style="padding:8px;font-size:.85rem;">${r.emoji} ${r.to}</td>
            <td style="padding:8px;font-family:monospace;font-weight:bold;color:#b97f44;">${r.suffix}</td>
            <td style="padding:8px;font-size:.85rem;">${r.ex1} → <b>${r.ex2}</b></td>
        </tr>`;
    });
    html += `</tbody></table></div></div>`;
    html += `<div style="font-weight:bold;margin:16px 0 10px;color:#3d2b1a;">🎯 Потренируйся:</div>`;
    converterExercises.forEach((ex, ei) => {
        ex.targets.forEach((t, ti) => {
            const key = `cv_${ei}_${ti}`;
            const st = converterState[key] || {};
            const chosen = st.chosen;
            const ans = chosen !== undefined;
            const bc = ans ? (st.correct ? '#6b8e23' : '#b93a3a') : '#c49a6c';
            html += `<div class="tense-card" style="cursor:default;border-left:5px solid ${bc};margin-bottom:10px;">
                <div style="font-weight:bold;margin-bottom:8px;">${ex.word} → ${t.to}</div>
                <div style="display:flex;flex-wrap:wrap;gap:6px;">`;
            [...new Set(t.wrong.concat(t.correct))].sort().forEach(opt => {
                let bg = '#f2e5ca';
                if (ans) { if (opt === t.correct) bg = '#c8e6a0'; else if (opt === chosen) bg = '#f3b4b4'; }
                const mark = ans ? (opt === t.correct ? '✅ ' : (opt === chosen ? '❌ ' : '')) : '';
                html += `<button onclick="${ans ? '' : `answerConverter('${key}','${opt.replace(/'/g,"\\'")}','${t.correct.replace(/'/g,"\\'")}')`}" style="background:${bg};border:1px solid #c49a6c;padding:8px 14px;border-radius:16px;cursor:${ans ? 'default' : 'pointer'};font-family:Georgia,serif;font-size:.9rem;">${mark}${opt}</button>`;
            });
            html += `</div></div>`;
        });
    });
    html += `<div style="text-align:center;margin-top:16px;">
        <button onclick="converterState={};renderPrefixes();" style="background:#8b6946;border:none;padding:12px 24px;border-radius:40px;color:white;font-size:1rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;">🔄 Пройти заново</button>
    </div>`;
    return html;
}
function answerConverter(key, chosen, correct) {
    converterState[key] = { chosen, correct: chosen === correct };
    renderPrefixes();
}

function renderMiniQuizzes() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        🧩 <strong>БЫСТРАЯ ПРОВЕРКА</strong>
    </div>`;
    miniQuizzes.forEach((quiz) => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #c49a6c;margin-bottom:18px;">
            <div class="tense-header"><div class="tense-emoji">${quiz.emoji}</div><div class="tense-name">${quiz.title}</div></div>`;
        quiz.questions.forEach((q, idx) => {
            const key = `${quiz.id}_${idx}`;
            const st = miniQuizState[key] || {};
            const chosen = st.chosen;
            const ans = chosen !== undefined;
            html += `<div style="margin-bottom:14px;"><div style="font-weight:bold;color:#3d2b1a;margin-bottom:8px;">${idx+1}. ${q.q}</div>`;
            q.options.forEach((opt, oi) => {
                let bg = '#f2e5ca';
                if (ans) {
                    if (oi === q.correct) bg = '#c8e6a0';
                    else if (oi === chosen) bg = '#f3b4b4';
                }
                const mark = ans ? (oi === q.correct ? '✅ ' : (oi === chosen ? '❌ ' : '')) : '';
                html += `<div onclick="${ans ? '' : `answerMiniQuiz('${key}',${oi},${q.correct})`}" style="background:${bg};padding:10px 14px;border-radius:18px;margin:6px 0;cursor:${ans ? 'default' : 'pointer'};">${mark}${opt}</div>`;
            });
            if (ans) html += `<div class="memory-hack" style="margin:8px 0 0;font-size:.85rem;">💡 ${q.hint}</div>`;
            html += `</div>`;
        });
        html += `</div>`;
    });
    html += `<div style="text-align:center;margin-top:16px;">
        <button onclick="miniQuizState={};renderPrefixes();" style="background:#8b6946;border:none;padding:12px 24px;border-radius:40px;color:white;font-size:1rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;">🔄 Пройти заново</button>
    </div>`;
    return html;
}
function answerMiniQuiz(key, chosen, correct) {
    miniQuizState[key] = { chosen, correct: chosen === correct };
    renderPrefixes();
}

function renderMiniDialogues() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        💬 <strong>МИНИ-ДИАЛОГИ</strong>
    </div>`;
    miniDialogues.forEach(d => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #c49a6c;margin-bottom:16px;">
            <div class="tense-header"><div class="tense-emoji">${d.emoji}</div>
                <div><div class="tense-name">${d.title}</div>
                <div style="font-size:.85rem;color:#8b6946;font-family:monospace;">${d.affix}</div></div>
            </div>`;
        d.lines.forEach(l => {
            const clean = l.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
            html += `<div class="tense-example" onclick="speakText('${clean}')">
                <div class="tense-example-text">
                    <div class="tense-example-eng"><b>${l.who}:</b> ${l.en}</div>
                    <div class="tense-example-ru">${l.ru}</div>
                </div>
                <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')">🔈</button>
            </div>`;
        });
        html += `</div>`;
    });
    return html;
}

function renderMemoryHooks() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        🎨 <strong>МНЕМОТЕХНИКА</strong>
    </div>`;
    html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px;">`;
    memoryHooks.forEach(h => {
        html += `<div style="background:#fff6e8;border-radius:20px;padding:16px;border-left:5px solid #c49a6c;text-align:center;">
            <div style="font-size:2.6rem;margin-bottom:6px;">${h.emoji}</div>
            <div style="font-family:monospace;font-size:1.3rem;font-weight:bold;color:#3d2b1a;margin-bottom:6px;">${h.affix}</div>
            <div style="font-size:.85rem;color:#5f451f;line-height:1.4;">${h.hint}</div>
        </div>`;
    });
    html += `</div>`;
    return html;
}

function renderQuickTips() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        ⚡ <strong>ЗАПОМНИ ЗА 5 СЕКУНД</strong>
    </div>`;
    quickTips.forEach(t => {
        const clean = t.tip.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
        html += `<div class="phrase-card" onclick="speakText('${clean}')" style="border-left:5px solid #c49a6c;">
            <div style="flex:1;font-size:.95rem;color:#3d2b1a;line-height:1.5;">${t.emoji} ${t.tip}</div>
            <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')">🔈</button>
        </div>`;
    });
    return html;
}

function renderWordOfTheDay() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        📅 <strong>СЛОВО ДНЯ</strong>
    </div>`;
    const day = new Date().getDate() % wordOfTheDay.length;
    const w = wordOfTheDay[day];
    html += `<div class="tense-card" style="cursor:default;border-left:6px solid #b97f44;text-align:center;padding:26px;">
        <div style="font-size:4rem;margin-bottom:10px;">${w.emoji}</div>
        <div style="font-family:monospace;font-size:2rem;font-weight:bold;color:#3d2b1a;">${w.word}</div>
        <div style="display:inline-block;background:#ecdca8;padding:4px 14px;border-radius:20px;font-size:.85rem;margin:10px 0;">${w.affix}</div>
        <div style="font-size:.95rem;color:#5f451f;margin:12px 0;"><b>Почему учить:</b> ${w.why}</div>
        <div class="memory-hack" style="margin:14px 0;">💡 ${w.tip}</div>
        <button class="speak-btn-small" onclick="speakText('${w.word}')" style="font-size:.95rem;padding:10px 22px;">🔈 Произнести</button>
    </div>`;
    return html;
}

function renderLearningPath() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        🗺️ <strong>МАРШРУТ ОБУЧЕНИЯ</strong>
    </div>`;
    learningPath.forEach(p => {
        const isDone = JSON.parse(localStorage.getItem('pathStep_' + p.step) || 'false');
        html += `<div class="phrase-card" style="border-left:5px solid ${isDone ? '#6b8e23' : '#c49a6c'};cursor:default;">
            <div style="flex:1;">
                <div style="font-size:1.05rem;font-weight:bold;color:#3d2b1a;">Шаг ${p.step}. ${p.emoji} ${p.title}</div>
                <div style="font-size:.8rem;color:#8b6946;margin-top:4px;font-family:monospace;">${p.ids.join(' • ')}</div>
            </div>
            <button class="speak-btn-small" onclick="event.stopPropagation();togglePathStep(${p.step})" style="background:${isDone ? '#6b8e23' : '#c49a6c'};">${isDone ? '✅' : '☐'}</button>
        </div>`;
    });
    return html;
}
function togglePathStep(step) {
    const key = 'pathStep_' + step;
    const current = JSON.parse(localStorage.getItem(key) || 'false');
    localStorage.setItem(key, JSON.stringify(!current));
    renderPrefixes();
}

// ═══════════════════════════════════════════════════════════
// ПРАКТИКА — РЕНДЕРЫ
// ═══════════════════════════════════════════════════════════
function renderMiniStories() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        📖 <strong>МИНИ-ИСТОРИИ</strong><br>
        <span style="font-size:.85rem;">Аффиксы в живом контексте.</span>
    </div>`;
    miniStories.forEach(story => {
        html += `<div class="tense-card" style="cursor:default;border-left:6px solid #c49a6c;margin-bottom:18px;">
            <div class="tense-header">
                <div class="tense-emoji">${story.emoji}</div>
                <div><div class="tense-name">${story.title}</div>
                <div style="font-size:.8rem;color:#8b6946;font-family:monospace;">${story.affixes.join(' · ')}</div></div>
            </div>`;
        story.lines.forEach(l => {
            const clean = l.en.replace(/<[^>]*>/g,'').replace(/'/g,"\\'");
            html += `<div class="tense-example" onclick="speakText('${clean}')">
                <div class="tense-example-text">
                    <div class="tense-example-eng">${l.en}</div>
                    <div class="tense-example-ru">${l.ru}</div>
                </div>
                <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${clean}')">🔈</button>
            </div>`;
        });
        const full = story.lines.map(l => l.en.replace(/<[^>]*>/g,'')).join(' ').replace(/'/g,"\\'");
        html += `<div style="text-align:center;margin-top:12px;">
            <button class="speak-btn-small" onclick="speakText('${full}')" style="font-size:.9rem;padding:10px 22px;">🔊 Прослушать всю историю</button>
        </div></div>`;
    });
    return html;
}

function renderDictation() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        ✍️ <strong>ДИКТАНТ</strong><br>
        <span style="font-size:.85rem;">Слушай → пиши → проверь.</span>
    </div>`;
    html += `<div class="filters" style="margin-bottom:14px;">
        <button class="filter-btn ${dictationState.level === 'easy'   ? 'active' : ''}" onclick="setDictLevel('easy')">🌱 Лёгкий</button>
        <button class="filter-btn ${dictationState.level === 'medium' ? 'active' : ''}" onclick="setDictLevel('medium')">🌿 Средний</button>
        <button class="filter-btn ${dictationState.level === 'hard'   ? 'active' : ''}" onclick="setDictLevel('hard')">🌳 Сложный</button>
    </div>`;
    const items = dictationBank.filter(d => d.level === dictationState.level);
    if (!items.length) { html += '<div style="text-align:center;padding:30px;">Нет заданий</div>'; return html; }
    if (dictationState.current >= items.length) {
        html += `<div class="tense-card" style="text-align:center;padding:30px;">
            <div style="font-size:4rem;margin-bottom:10px;">🏆</div>
            <div style="font-size:1.4rem;font-weight:bold;color:#3d2b1a;">Диктант завершён!</div>
            <div style="font-size:1.1rem;color:#6b8e23;margin:14px 0;">Правильно: ${dictationState.score} из ${items.length}</div>
            <button onclick="resetDictation()" style="background:#8b6946;border:none;padding:12px 24px;border-radius:40px;color:white;font-size:1rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;">🔄 Начать заново</button>
        </div>`;
        return html;
    }
    const item = items[dictationState.current];
    const clean = item.en.replace(/'/g, "\\'");
    html += `<div class="tense-card" style="cursor:default;border-left:6px solid #b97f44;">
        <div style="text-align:center;margin-bottom:14px;">
            <span style="background:#ecdca8;padding:6px 14px;border-radius:20px;font-size:.85rem;font-weight:bold;">Задание ${dictationState.current + 1} / ${items.length}</span>
            <span style="margin-left:10px;background:#6b8e23;color:white;padding:6px 14px;border-radius:20px;font-size:.85rem;">⭐ ${dictationState.score}</span>
        </div>
        <div style="text-align:center;font-size:3rem;margin-bottom:10px;">${item.emoji}</div>
        <div style="text-align:center;margin-bottom:14px;">
            <button onclick="speakText('${clean}')" style="background:#c49a6c;border:none;padding:14px 28px;border-radius:40px;color:white;font-size:1.05rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;">🔊 Прослушать</button>
            <button onclick="speakSlow('${clean}')" style="background:#8b6946;border:none;padding:14px 20px;border-radius:40px;color:white;font-size:.95rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;margin-left:6px;">🐢 Медленно</button>
        </div>
        <div style="text-align:center;font-size:.85rem;color:#8b6946;margin-bottom:8px;">🇷🇺 ${item.ru}</div>
        <input type="text" id="dictationInput" value="${dictationState.userAnswer.replace(/"/g,'&quot;')}" placeholder="Введите услышанное..." style="width:100%;padding:14px 18px;font-size:1.05rem;border:2px solid #e1cba1;border-radius:20px;outline:none;background:#fff6e8;font-family:Georgia,serif;" oninput="dictationState.userAnswer=this.value" onkeydown="if(event.key==='Enter')checkDictation()">
        <div style="text-align:center;margin-top:14px;">
            <button onclick="checkDictation()" style="background:#6b8e23;border:none;padding:12px 28px;border-radius:40px;color:white;font-size:1rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;">✅ Проверить</button>
        </div>
        <div id="dictationFeedback"></div>
    </div>`;
    return html;
}
function setDictLevel(lvl) { dictationState = { level: lvl, current: 0, score: 0, answered: false, userAnswer: '' }; renderPrefixes(); }
function resetDictation() { dictationState = { ...dictationState, current: 0, score: 0, answered: false, userAnswer: '' }; renderPrefixes(); }
function checkDictation() {
    const items = dictationBank.filter(d => d.level === dictationState.level);
    const item = items[dictationState.current];
    const user = (dictationState.userAnswer || '').trim().toLowerCase().replace(/[.,!?;]/g, '').replace(/\s+/g, ' ');
    const correct = item.en.toLowerCase().replace(/[.,!?;]/g, '').replace(/\s+/g, ' ');
    const ok = user === correct;
    if (ok) dictationState.score++;
    const fb = document.getElementById('dictationFeedback');
    if (fb) {
        fb.innerHTML = `<div style="margin-top:16px;padding:14px;border-radius:20px;background:${ok ? '#c8e6a0' : '#f3b4b4'};color:${ok ? '#2d4a0f' : '#5a0f0f'};text-align:center;">
            <div style="font-size:1.3rem;font-weight:bold;">${ok ? '✅ Правильно!' : '❌ Есть ошибки'}</div>
            <div style="margin-top:8px;font-size:.9rem;">Правильный ответ: <b>${item.en}</b></div>
            <div style="margin-top:4px;font-size:.8rem;">Аффикс: <b>${item.affix}</b></div>
            <button onclick="nextDictation()" style="background:#8b6946;border:none;padding:10px 22px;border-radius:40px;color:white;font-size:.95rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;margin-top:12px;">➡️ Следующее</button>
        </div>`;
    }
}
function nextDictation() { dictationState.current++; dictationState.answered = false; dictationState.userAnswer = ''; renderPrefixes(); }
function speakSlow(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US'; u.rate = 0.55;
        window.speechSynthesis.speak(u);
    }
}

function renderEssayBuilder() {
    let html = `<div class="memory-hack" style="background:#ffd6a5;border-left-color:#c49a6c;margin-bottom:14px;">
        📝 <strong>КОНСТРУКТОР ЭССЕ</strong><br>
        <span style="font-size:.85rem;">Вступление → аргументы → контраргумент → заключение.</span>
    </div>`;
    if (!essayState.topic) essayState.topic = essayTopics[0];
    html += `<div class="tense-card" style="cursor:default;border-left:5px solid #6b8e23;margin-bottom:14px;">
        <div style="font-weight:bold;margin-bottom:10px;">🎯 Выбери тему:</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">`;
    essayTopics.forEach(t => {
        const isAct = essayState.topic && t.topic === essayState.topic.topic;
        html += `<button onclick="setEssayTopic('${t.topic}')" style="background:${isAct ? '#6b8e23' : '#fff6e8'};color:${isAct ? 'white' : '#3d2b1a'};border:1px solid #c49a6c;padding:8px 14px;border-radius:20px;cursor:pointer;font-family:Georgia,serif;font-size:.85rem;">${t.emoji} ${t.topic}</button>`;
    });
    html += `</div></div>`;
    const parts = ['intro', 'body1', 'body2', 'contrast', 'conclusion'];
    parts.forEach(key => {
        const p = essayTemplates[key];
        const chosen = essayState.parts[key];
        html += `<div class="tense-card" style="cursor:default;border-left:5px solid ${p.color};margin-bottom:12px;">
            <div class="tense-header" style="margin-bottom:8px;">
                <div class="tense-emoji">${p.emoji}</div>
                <div class="tense-name" style="font-size:1.1rem;">${p.title}</div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">`;
        p.patterns.forEach((pat, i) => {
            const isAct = chosen && chosen.tpl === pat.tpl;
            const preview = pat.tpl.replace('{topic}', essayState.topic ? essayState.topic.topic : '...').replace('{arg}', '...');
            html += `<div onclick="chooseEssayPattern('${key}', ${i})" style="background:${isAct ? p.color : '#fff6e8'};color:${isAct ? 'white' : '#3d2b1a'};border:1px solid #c49a6c;padding:10px 14px;border-radius:16px;cursor:pointer;font-size:.85rem;line-height:1.4;flex:1;min-width:200px;">
                ${preview}
                <div style="font-size:.75rem;opacity:.85;margin-top:4px;font-style:italic;">${pat.ru}</div>
            </div>`;
        });
        html += `</div>`;
        if (chosen) {
            const finalText = chosen.tpl.replace('{topic}', essayState.topic ? essayState.topic.topic : '...').replace('{arg}', '[твой аргумент]');
            const cleanFinal = finalText.replace(/'/g, "\\'");
            html += `<div style="margin-top:10px;padding:10px 14px;background:#ecdca8;border-radius:14px;font-size:.9rem;display:flex;justify-content:space-between;align-items:center;gap:8px;">
                <div><b>Выбрано:</b> ${finalText}</div>
                <button class="speak-btn-small" onclick="event.stopPropagation();speakText('${cleanFinal}')">🔈</button>
            </div>`;
        }
        html += `</div>`;
    });
    const assembled = parts.map(k => {
        const c = essayState.parts[k];
        if (!c) return null;
        return c.tpl.replace('{topic}', essayState.topic ? essayState.topic.topic : '...').replace('{arg}', '[...]');
    }).filter(Boolean);
    if (assembled.length) {
        const full = assembled.join(' ');
        const cleanFull = full.replace(/'/g, "\\'");
        html += `<div class="tense-card" style="cursor:default;border-left:5px solid #8b6946;margin-top:16px;">
            <div style="font-weight:bold;margin-bottom:10px;">📄 Твой каркас эссе (${assembled.length} из 5 частей):</div>
            ${assembled.map(a => `<div style="padding:8px 12px;margin:6px 0;background:#f2e5ca;border-radius:12px;font-size:.9rem;color:#3d2b1a;">${a}</div>`).join('')}
            <div style="text-align:center;margin-top:14px;">
                <button onclick="speakText('${cleanFull}')" style="background:#c49a6c;border:none;padding:10px 22px;border-radius:40px;color:white;font-size:.9rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;">🔊 Прочитать вслух</button>
                <button onclick="essayState.parts={};renderPrefixes();" style="background:#8b6946;border:none;padding:10px 22px;border-radius:40px;color:white;font-size:.9rem;cursor:pointer;font-weight:bold;font-family:Georgia,serif;margin-left:8px;">🗑 Очистить</button>
            </div>
        </div>`;
    }
    return html;
}
function setEssayTopic(topic) { essayState.topic = essayTopics.find(t => t.topic === topic) || essayTopics[0]; renderPrefixes(); }
function chooseEssayPattern(section, index) {
    const pat = essayTemplates[section].patterns[index];
    if (essayState.parts[section] && essayState.parts[section].tpl === pat.tpl) delete essayState.parts[section];
    else essayState.parts[section] = pat;
    renderPrefixes();
}
