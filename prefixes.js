// ═══════════════════════════════════════════════════════════
// prefixes.js — ЛОАДЕР С АВТОДИАГНОСТИКОЙ И АВТОФИКСОМ
// 1) Диагностирует prefixes-data.js
// 2) Пробует починить (auto-export, тривиальный синтаксис)
// 3) Если починил — исполняет починенную версию через Blob
// 4) Показывает отчёт: что было, что исправлено, что нужно руками
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  const MODULES = ['prefixes-data.js', 'prefixes-render.js', 'prefixes-router.js'];
  const DATA_MODULE = 'prefixes-data.js';

  const EXPECTED = [
    'prefixes','wordRoots','rootTopics','magicVerbs','magicWords',
    'survivalPhrases','modalVerbs','confusingVerbs','wordFormationRules',
    'trapPairs','twinWords','discourseMarkers','essayLinkers','usefulLinkers',
    'allTimeWords','timePrepositions','questionWords','wordBuilderKit',
    'suffixCheatsheet','wordChains','flipCards','ruleReminders','affixTrainer',
    'commonMistakes','speechDrill','powerPrefixes','miniStories','dictationBank',
    'essayTemplates','essayTopics','affixMap','wordFamilies','oppositeAffixes',
    'converterRules','converterExercises','miniQuizzes','miniDialogues',
    'memoryHooks','quickTips','wordOfTheDay','learningPath',
    'timeMarkers','discourseGroups','essayLinkerGroups','usefulLinkerGroups',
    'allTimeWordGroups','timePrepositionCheatsheet','usefulAbbreviations',
    'questionWordGroups'
  ];

  const result = {
    http: null,
    size: 0,
    lines: 0,
    syntaxOriginal: 'unknown',
    syntaxErrorOriginal: null,
    declStats: null,
    missingVars: [],
    fixes: [],       // применённые фиксы
    unfixed: [],     // что не удалось починить
    finalOk: false,
    finalMissing: []
  };

  // ─── Кэш исходников ───
  async function getSource(src) {
    const r = await fetch(src, { cache: 'no-store' });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.text();
  }

  // ─── Утилиты ───
  function escapeHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function parseLine(msg) {
    if (!msg) return null;
    let m = msg.match(/line (\d+)/i);
    if (m) return { line: +m[1], col: null };
    m = msg.match(/(\d+):(\d+)\s*$/);
    if (m) return { line: +m[1], col: +m[2] };
    return null;
  }

  function snippet(text, lineNo, colNo) {
    const L = text.split('\n');
    const from = Math.max(0, lineNo - 5);
    const to = Math.min(L.length, lineNo + 4);
    const pad = String(to).length;
    let out = '';
    for (let i = from; i < to; i++) {
      const n = i + 1;
      const err = n === lineNo;
      out += `${err ? '▶ ' : '  '}${String(n).padStart(pad)} │ ${L[i]}\n`;
      if (err && colNo > 0) out += ' '.repeat(4 + pad + 3 + colNo - 1) + '^\n';
    }
    return out;
  }

  // ═══════════════════════════════════════════════════════════
  // АВТОФИКСЫ
  // ═══════════════════════════════════════════════════════════

  // A. Авто-экспорт в window, если переменные через const/let
  function autoExportToWindow(text) {
    // Не трогаем, если уже есть Object.assign(window или var-объявления
    const hasExport = /Object\.assign\s*\(\s*window/.test(text);
    const hasVar = /\bvar\s+(prefixes|wordRoots|allTimeWords)\s*=/.test(text);
    const hasWindowAssign = /window\.(prefixes|wordRoots)\s*=/.test(text);
    if (hasExport || hasVar || hasWindowAssign) return { text, applied: false };

    const letC = (text.match(/\blet\s+[a-zA-Z_$]/g) || []).length;
    const constC = (text.match(/\bconst\s+[a-zA-Z_$]/g) || []).length;
    if (letC + constC < 5) return { text, applied: false };

    // Собираем имена всех const/let, объявленных на верхнем уровне
    // Приблизительно: строки, начинающиеся с const/let (без отступов внутри функций)
    const names = [];
    const re = /^(?:const|let)\s+([a-zA-Z_$][\w$]*)\s*=/gm;
    let m;
    while ((m = re.exec(text))) names.push(m[1]);

    // Оставляем только те, что есть в EXPECTED
    const relevant = [...new Set(names)].filter(n => EXPECTED.includes(n));
    if (relevant.length === 0) return { text, applied: false };

    const exportCode =
      '\n// ═══ АВТО-ЭКСПОРТ В WINDOW (добавлено лоадером) ═══\n' +
      'if (typeof window !== "undefined") {\n  Object.assign(window, {\n    ' +
      relevant.join(',\n    ') +
      '\n  });\n}\n';

    return { text: text + exportCode, applied: true, count: relevant.length };
  }

  // B1. Лишняя запятая перед ] или }
  function fixTrailingCommas(text) {
    const before = text;
    // ,  ]  →  ]
    text = text.replace(/,(\s*[\]\}])/g, '$1');
    return { text, applied: text !== before };
  }

  // B2. Незакрытые .push(...) в конце файла
  function fixUnclosedPush(text) {
    const trimmed = text.trimEnd();
    // Находим последний push( и смотрим, закрыт ли он
    const lastPush = trimmed.lastIndexOf('.push(');
    if (lastPush === -1) return { text, applied: false };

    // Считаем баланс скобок от lastPush до конца
    let balance = 0;
    let inString = null;
    for (let i = lastPush; i < trimmed.length; i++) {
      const c = trimmed[i];
      if (inString) {
        if (c === '\\') i++;
        else if (c === inString) inString = null;
        continue;
      }
      if (c === '"' || c === "'") inString = c;
      else if (c === '(') balance++;
      else if (c === ')') balance--;
    }

    if (balance > 0) {
      // Не хватает закрывающих скобок и точки с запятой
      return { text: trimmed + ')'.repeat(balance) + ';\n', applied: true, added: balance };
    }
    if (!trimmed.endsWith(';') && /\)$/.test(trimmed)) {
      return { text: trimmed + ';\n', applied: true, added: 'semicolon' };
    }
    return { text, applied: false };
  }

  // B3. Потерянная ) в самом конце файла
  function fixMissingParenAtEnd(text) {
    const trimmed = text.trimEnd();
    if (/\);\s*$/.test(trimmed)) return { text, applied: false };
    if (/\]\s*;?\s*$/.test(trimmed)) return { text, applied: false };

    // Считаем общий баланс круглых скобок
    let bal = 0, inStr = null;
    for (let i = 0; i < trimmed.length; i++) {
      const c = trimmed[i];
      if (inStr) { if (c === '\\') i++; else if (c === inStr) inStr = null; continue; }
      if (c === '"' || c === "'") inStr = c;
      else if (c === '(') bal++;
      else if (c === ')') bal--;
    }
    if (bal > 0) return { text: trimmed + ')'.repeat(bal) + ';', applied: true, added: bal };
    return { text, applied: false };
  }

  // B4. Кириллические буквы в именах/ключах
  function fixCyrillicInCode(text) {
    // Меняем кириллицу на похожие латинские только ВНУТРИ идентификаторов
    // Осторожно: это опасно, поэтому только если есть ошибка
    const map = { 'а':'a','е':'e','о':'o','р':'p','с':'c','х':'x','у':'y','к':'k','В':'B','Н':'H','Т':'T','М':'M' };
    // не делаем — слишком рискованно, оставляем пользователю
    return { text, applied: false };
  }

  // ─── Применяем фиксы по очереди, проверяя синтаксис ───
  function tryFix(text) {
    const applied = [];

    // 1. Авто-экспорт (не влияет на синтаксис)
    const exp = autoExportToWindow(text);
    if (exp.applied) {
      text = exp.text;
      applied.push(`Auto-export: добавлено Object.assign(window, {${exp.count} переменных})`);
    }

    // 2. Тривиальные синтаксические фиксы — применяем только если синтаксис битый
    const syntaxOk = isSyntaxOk(text);
    if (!syntaxOk) {
      const fixes = [
        ['Лишние запятые перед ] или }', fixTrailingCommas],
        ['Незакрытые .push(...) в конце', fixUnclosedPush],
        ['Потерянная ) в конце файла', fixMissingParenAtEnd]
      ];
      for (const [name, fn] of fixes) {
        const before = text;
        const r = fn(text);
        if (r.applied && isSyntaxOk(r.text)) {
          text = r.text;
          applied.push(name);
          break;
        } else if (r.applied) {
          // не помогло — откатываем
          text = before;
        }
      }
    }

    return { text, applied, ok: isSyntaxOk(text) };
  }

  function isSyntaxOk(text) {
    try { new Function(text); return true; } catch (e) { return false; }
  }

  function getSyntaxError(text) {
    try { new Function(text); return null; } catch (e) { return e.message; }
  }

  // ═══════════════════════════════════════════════════════════
  // ГЛАВНАЯ ФУНКЦИЯ
  // ═══════════════════════════════════════════════════════════
  async function run() {
    // ─── 1. Загрузка ───
    let original;
    try {
      const r = await fetch(DATA_MODULE, { cache: 'no-store' });
      result.http = r.status;
      if (!r.ok) {
        result.unfixed.push(`HTTP ${r.status}: файл ${DATA_MODULE} не найден`);
        return;
      }
      original = await r.text();
    } catch (e) {
      result.unfixed.push('Ошибка загрузки: ' + e.message);
      return;
    }

    result.size = original.length;
    result.lines = original.split('\n').length;

    // ─── 2. Синтаксис оригинала ───
    const origErr = getSyntaxError(original);
    if (origErr) {
      result.syntaxOriginal = 'error';
      result.syntaxErrorOriginal = origErr;
    } else {
      result.syntaxOriginal = 'ok';
    }

    // ─── 3. Статистика объявлений ───
    const letC = (original.match(/\blet\s+[a-zA-Z_$]/g) || []).length;
    const constC = (original.match(/\bconst\s+[a-zA-Z_$]/g) || []).length;
    const varC = (original.match(/\bvar\s+[a-zA-Z_$]/g) || []).length;
    const winC = (original.match(/window\.[a-zA-Z_$][\w$]*\s*=/g) || []).length;
    const objC = (original.match(/Object\.assign\(\s*window/g) || []).length;
    result.declStats = { letC, constC, varC, winC, objC };

    // ─── 4. Пробуем починить ───
    const { text: fixed, applied, ok } = tryFix(original);
    result.fixes = applied;

    if (!ok) {
      result.unfixed.push('Синтаксис не удалось починить автоматически: ' + getSyntaxError(fixed));
      return;
    }

    // ─── 5. Выполняем починенный код через Blob ───
    try {
      await new Promise((resolve, reject) => {
        const blob = new Blob([fixed], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        const s = document.createElement('script');
        s.src = url;
        s.onload = () => { URL.revokeObjectURL(url); resolve(); };
        s.onerror = (e) => { URL.revokeObjectURL(url); reject(new Error('Blob-скрипт не выполнился')); };
        document.head.appendChild(s);
      });
    } catch (e) {
      result.unfixed.push('Не удалось выполнить починенный код: ' + e.message);
      return;
    }

    // ─── 6. Проверяем, что все переменные появились ───
    result.finalMissing = EXPECTED.filter(n => typeof window[n] === 'undefined');
    result.finalOk = result.finalMissing.length === 0;
    result.missingVars = result.finalMissing;
  }

  // ═══════════════════════════════════════════════════════════
  // ПАНЕЛЬ
  // ═══════════════════════════════════════════════════════════
  function panel() {
    let p = document.getElementById('prefixesDiagPanel');
    if (p) return p;
    p = document.createElement('div');
    p.id = 'prefixesDiagPanel';
    p.style.cssText = `
      position: fixed; top: 10px; left: 10px; right: 10px;
      max-width: 980px; margin: 0 auto;
      background: #fff; border: 3px solid #b93a3a; border-radius: 16px;
      padding: 16px 20px;
      font-family: -apple-system, BlinkMacSystemFont, ui-monospace, monospace;
      font-size: 13px; color: #3d2b1a;
      z-index: 99999; box-shadow: 0 8px 32px rgba(0,0,0,.35);
      max-height: 85vh; overflow-y: auto;
    `;
    document.body.appendChild(p);
    return p;
  }

  function row(icon, name, value, status) {
    const bg = status === 'ok' ? '#f0f8e8' : status === 'warn' ? '#fff6e8' : '#fde4c8';
    const color = status === 'ok' ? '#2d4a0f' : status === 'warn' ? '#8b5f0f' : '#8b1f1f';
    return `<tr style="background:${bg};">
      <td style="padding:6px 10px;border-bottom:1px solid #e8d8b8;font-weight:bold;width:240px;">${icon} ${escapeHtml(name)}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #e8d8b8;font-family:ui-monospace,monospace;color:${color};word-break:break-word;">${escapeHtml(String(value))}</td>
    </tr>`;
  }

  function render() {
    const p = panel();
    const allOk = result.finalOk;

    // ─── Заголовок и цвет ───
    let header, border;
    if (allOk && result.fixes.length === 0) {
      header = '✅ prefixes.js — всё работает без правок';
      border = '#6b8e23';
      p.style.background = '#f0f8e8';
    } else if (allOk && result.fixes.length > 0) {
      header = '🛠️ prefixes.js — ошибки найдены и ИСПРАВЛЕНЫ автоматически';
      border = '#6b8e23';
      p.style.background = '#f0f8e8';
    } else if (result.unfixed.length > 0) {
      header = '❌ prefixes.js — есть неисправленные ошибки';
      border = '#b93a3a';
      p.style.background = '#fff';
    } else {
      header = '⚠️ prefixes.js — предупреждения';
      border = '#b97f44';
      p.style.background = '#fff';
    }
    p.style.borderColor = border;

    // ─── Таблица диагностики ───
    const rows = [];
    rows.push(row(result.http === 200 ? '✅' : '❌', 'HTTP статус', result.http, result.http === 200 ? 'ok' : 'fail'));
    rows.push(row('📦', 'Размер файла', result.size + ' байт (~' + (result.size/1024).toFixed(1) + ' KB)',
                  result.size < 50000 ? 'warn' : 'ok'));
    rows.push(row('📄', 'Строк в файле', result.lines, 'ok'));
    rows.push(row(
      result.syntaxOriginal === 'ok' ? '✅' : '❌',
      'Синтаксис в оригинале',
      result.syntaxOriginal === 'ok' ? 'OK' : result.syntaxErrorOriginal,
      result.syntaxOriginal === 'ok' ? 'ok' : 'fail'
    ));
    if (result.declStats) {
      const d = result.declStats;
      rows.push(row('🔤', 'Объявления',
        `let: ${d.letC}, const: ${d.constC}, var: ${d.varC}, window.X=: ${d.winC}, Object.assign: ${d.objC}`,
        (d.varC > 10 || d.objC > 0 || d.winC > 10) ? 'ok' : 'fail'));
    }
    rows.push(row(
      result.finalMissing.length === 0 ? '✅' : '❌',
      'Переменных в window',
      (EXPECTED.length - result.finalMissing.length) + ' / ' + EXPECTED.length,
      result.finalMissing.length === 0 ? 'ok' : 'fail'
    ));

    // ─── Блок «Что исправлено» ───
    let fixedBlock = '';
    if (result.fixes.length > 0) {
      fixedBlock = `
        <div style="background:#e8f0d4;border-radius:10px;padding:12px;margin:10px 0;">
          <div style="font-weight:bold;margin-bottom:6px;color:#2d4a0f;">🛠️ Автоматически исправлено (${result.fixes.length}):</div>
          <div style="font-size:12px;color:#2d4a0f;line-height:1.6;">
            ${result.fixes.map(f => '✅ ' + escapeHtml(f)).join('<br>')}
          </div>
        </div>`;
    }

    // ─── Блок «Что не удалось» ───
    let unfixedBlock = '';
    if (result.unfixed.length > 0) {
      unfixedBlock = `
        <div style="background:#fde4c8;border-radius:10px;padding:12px;margin:10px 0;">
          <div style="font-weight:bold;margin-bottom:6px;color:#8b1f1f;">❌ Требует ручного исправления:</div>
          <div style="font-size:12px;color:#5a0f0f;line-height:1.6;white-space:pre-wrap;font-family:ui-monospace,monospace;">
            ${result.unfixed.map(f => '• ' + escapeHtml(f)).join('<br>')}
          </div>
        </div>`;
    }

    // ─── Блок «Отсутствующие переменные» ───
    let missingBlock = '';
    if (result.finalMissing.length > 0) {
      missingBlock = `
        <div style="background:#fff6e8;border-radius:10px;padding:12px;margin:10px 0;">
          <div style="font-weight:bold;margin-bottom:6px;color:#8b5f0f;">⚠️ Всё ещё отсутствуют (${result.finalMissing.length}):</div>
          <div style="font-family:ui-monospace,monospace;font-size:12px;color:#5a0f0f;line-height:1.6;">
            ${result.finalMissing.map(n => '• ' + escapeHtml(n)).join('<br>')}
          </div>
        </div>`;
    }

    // ─── Блок «Что делать руками» ───
    let manualBlock = '';
    if (result.unfixed.length > 0) {
      manualBlock = `
        <div style="background:#e8f0d4;border-radius:10px;padding:12px;margin-top:10px;">
          <div style="font-weight:bold;margin-bottom:6px;color:#2d4a0f;">💡 Что делать:</div>
          <div style="font-size:12px;color:#2d4a0f;line-height:1.7;">
            1. Откройте <b>F12 → Console</b> — там полный отчёт и стек.<br>
            2. Найдите в файле <b>${DATA_MODULE}</b> проблемную строку (см. сообщение выше).<br>
            3. Частые причины: незакрытая кавычка, лишняя запятая перед <code>]</code>, потерянная <code>)</code> в конце <code>.push(...)</code>.<br>
            4. Сохраните файл и обновите страницу.
          </div>
        </div>`;
    }

    // ─── Кнопка «Сохранить починенную версию» ───
    let downloadBtn = '';
    if (result.fixes.length > 0) {
      downloadBtn = `
        <button id="dlFixed" style="
          margin-top:10px;padding:10px 18px;background:#6b8e23;color:#fff;
          border:none;border-radius:10px;cursor:pointer;font-weight:bold;font-size:13px;">
          💾 Скачать починенный ${DATA_MODULE}
        </button>`;
    }

    p.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <strong style="color:${border};font-size:16px;">${header}</strong>
        <button onclick="document.getElementById('prefixesDiagPanel').style.display='none'"
          style="background:${border};border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;">✕</button>
      </div>

      <table style="width:100%;border-collapse:collapse;font-size:12px;">
        ${rows.join('')}
      </table>

      ${fixedBlock}
      ${unfixedBlock}
      ${missingBlock}
      ${manualBlock}
      ${downloadBtn}
    `;

    // ─── Обработчик кнопки скачивания ───
    const dl = document.getElementById('dlFixed');
    if (dl && window.__prefixesFixedText) {
      dl.onclick = () => {
        const blob = new Blob([window.__prefixesFixedText], { type: 'application/javascript' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = DATA_MODULE;
        a.click();
        URL.revokeObjectURL(a.href);
      };
    }
  }

  // ═══════════════════════════════════════════════════════════
  // ПУБЛИКАЦИЯ ПОЧИНЕННОГО ТЕКСТА ДЛЯ СКАЧИВАНИЯ
  // ═══════════════════════════════════════════════════════════
  // tryFix уже вернул текст — сохраним его в window для кнопки
  const _origTryFix = tryFix;
  tryFix = function (text) {
    const r = _origTryFix(text);
    window.__prefixesFixedText = r.text;
    return r;
  };

  // ═══════════════════════════════════════════════════════════
  // ЗАГРУЗКА ОСТАЛЬНЫХ МОДУЛЕЙ
  // ═══════════════════════════════════════════════════════════
  function loadScript(src) {
    return new Promise(resolve => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);
      document.head.appendChild(s);
    });
  }

  // ═══════════════════════════════════════════════════════════
  // СТАРТ
  // ═══════════════════════════════════════════════════════════
  (async function main() {
    console.log('%c[prefixes.js] 🚀 Диагностика + автофикс...', 'color:#c49a6c;font-weight:bold;font-size:14px;');

    await run();

    console.log('%c[prefixes.js] 📊 Отчёт:', 'color:#6b8e23;font-weight:bold;');
    console.log(result);

    // Показываем панель
    const show = () => render();
    if (document.body) show();
    else window.addEventListener('DOMContentLoaded', show);

    // Если всё ок — грузим остальные модули и вызываем init
    if (result.finalOk) {
      for (const src of MODULES) {
        if (src === DATA_MODULE) continue; // уже загружен
        await loadScript(src);
      }
      if (typeof window.init === 'function') {
        try { window.init(); }
        catch (e) { console.error('[prefixes.js] ❌ Ошибка в init():', e); }
      }
      window.dispatchEvent(new Event('prefixesReady'));
    }
  })();

  // ─── Перехват runtime-ошибок ───
  window.addEventListener('error', (event) => {
    const src = event.filename || '';
    if (!src.includes('prefixes-')) return;
    console.error('[prefixes.js] Runtime:', src, event.lineno + ':' + event.colno, event.message);
  });

  window.addEventListener('unhandledrejection', (event) => {
    const stack = (event.reason && event.reason.stack) || '';
    if (!stack.includes('prefixes-')) return;
    console.error('[prefixes.js] Promise:', event.reason);
  });

})();
