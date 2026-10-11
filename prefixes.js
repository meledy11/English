// ═══════════════════════════════════════════════════════════
// prefixes.js — ЛОАДЕР С ДИАГНОСТИКОЙ
// Загружает: prefixes-data.js → prefixes-render.js → prefixes-router.js
// Показывает ошибки с точной строкой, колонкой и контекстом кода
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  const MODULES = [
    'prefixes-data.js',
    'prefixes-render.js',
    'prefixes-router.js'
  ];

  // ─── Собираем ошибки ───
  const errors = [];

  // ─── Кэш исходников, чтобы не фетчить дважды ───
  const sourceCache = {};

  async function getSource(src) {
    if (sourceCache[src]) return sourceCache[src];
    const text = await fetch(src, { cache: 'no-store' }).then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status} ${r.statusText}`);
      return r.text();
    });
    sourceCache[src] = text;
    return text;
  }

  // ─── Формируем фрагмент кода с указателем на строку/колонку ───
  function buildSnippet(text, lineNo, colNo) {
    const lines = text.split('\n');
    const from = Math.max(0, lineNo - 7);
    const to   = Math.min(lines.length, lineNo + 6);
    const pad  = String(to).length;
    let out = '';
    for (let i = from; i < to; i++) {
      const n = i + 1;
      const isErr = (n === lineNo);
      const marker = isErr ? '▶ ' : '  ';
      out += `${marker}${String(n).padStart(pad)} │ ${lines[i]}\n`;
      if (isErr && typeof colNo === 'number' && colNo > 0) {
        // 4 (marker) + pad + 3 (" │ ") + отступ до колонки
        const spaces = 4 + pad + 3 + (colNo - 1);
        out += ' '.repeat(spaces) + '^\n';
      }
    }
    return out;
  }

  // ─── Пытаемся вытащить номер строки из сообщения ───
  function parseLineFromMessage(msg) {
    if (!msg) return null;
    // Chrome / Safari: "line 42"  |  Firefox: "line 42"
    let m = msg.match(/line (\d+)/i);
    if (m) return { line: +m[1], col: null };
    // "42:18" в конце сообщения
    m = msg.match(/(\d+):(\d+)\s*$/);
    if (m) return { line: +m[1], col: +m[2] };
    return null;
  }

  // ─── Проверка синтаксиса через new Function (без выполнения) ───
  async function checkSyntax(src) {
    const shortName = src.split('/').pop();
    let text;
    try {
      text = await getSource(src);
    } catch (e) {
      errors.push({
        title: `Не удалось прочитать ${shortName}`,
        detail: `${e.message}\nПроверьте: файл есть в папке? имя правильное? Network → 404?`
      });
      return false;
    }

    try {
      // Пробуем скомпилировать — НЕ выполняем
      new Function(text);
      return true;
    } catch (e) {
      const parsed = parseLineFromMessage(e.message);
      let snippet = '';
      let loc = '';
      if (parsed && parsed.line) {
        snippet = buildSnippet(text, parsed.line, parsed.col);
        loc = `Строка: ${parsed.line}${parsed.col ? ', колонка: ' + parsed.col : ''}\n`;
      }
      errors.push({
        title: `Синтаксическая ошибка в ${shortName}`,
        detail:
          `${e.message}\n` +
          loc +
          `\nКонтекст:\n${snippet || '(не удалось определить строку — ищите незакрытую кавычку/скобку)'}`
      });
      return false;
    }
  }

  // ─── Панель диагностики ───
  function createDiagPanel() {
    let panel = document.getElementById('prefixesDiagPanel');
    if (panel) return panel;
    panel = document.createElement('div');
    panel.id = 'prefixesDiagPanel';
    panel.style.cssText = `
      position: fixed;
      top: 10px; left: 10px; right: 10px;
      max-width: 900px;
      margin: 0 auto;
      background: #fff;
      border: 3px solid #b93a3a;
      border-radius: 16px;
      padding: 16px 20px;
      font-family: -apple-system, BlinkMacSystemFont, monospace;
      font-size: 13px;
      color: #3d2b1a;
      z-index: 99999;
      box-shadow: 0 8px 32px rgba(0,0,0,.3);
      max-height: 80vh;
      overflow-y: auto;
    `;
    document.body.appendChild(panel);
    return panel;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function showDiag() {
    const panel = createDiagPanel();

    if (errors.length === 0) {
      panel.style.borderColor = '#6b8e23';
      panel.style.background = '#f0f8e8';
      panel.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <strong style="color:#2d4a0f;font-size:15px;">✅ prefixes.js — все модули загружены</strong>
          <button onclick="this.closest('#prefixesDiagPanel').style.display='none'"
                  style="background:#6b8e23;border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;">✕</button>
        </div>
        <div style="font-size:12px;color:#5f451f;">Модули подключены, ошибок не обнаружено.</div>
      `;
      return;
    }

    const blocks = errors.map((e, i) => `
      <div style="margin-bottom:12px;padding:10px;background:#fde4c8;border-radius:8px;border-left:4px solid #b93a3a;">
        <div style="font-weight:bold;margin-bottom:6px;">#${i + 1} ${escapeHtml(e.title)}</div>
        <pre style="margin:0;white-space:pre-wrap;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;line-height:1.45;color:#5a0f0f;overflow-x:auto;">${escapeHtml(e.detail)}</pre>
      </div>
    `).join('');

    panel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <strong style="color:#b93a3a;font-size:15px;">❌ prefixes.js — обнаружены ошибки (${errors.length})</strong>
        <button onclick="this.closest('#prefixesDiagPanel').style.display='none'"
                style="background:#b93a3a;border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;">✕</button>
      </div>
      <div style="background:#fff6e8;border-radius:12px;padding:12px;margin-bottom:10px;">
        <div style="font-weight:bold;margin-bottom:8px;">📋 Отчёт:</div>
        ${blocks}
      </div>
      <div style="background:#e8f0d4;border-radius:12px;padding:12px;font-size:12px;">
        <b>💡 Как исправить:</b>
        <div style="margin-top:6px;line-height:1.5;">
          1. Смотрите строку под заголовком «Строка: N» — это точное место ошибки.<br>
          2. Строка с <code>▶</code> — проблемная, символ <code>^</code> указывает на колонку.<br>
          3. Частые причины: незакрытая кавычка <code>'</code>/<code>"</code>, скобка <code>{ } [ ]</code>, лишняя/пропущенная запятая.<br>
          4. Для полного стека откройте <b>F12 → Console</b>.
        </div>
      </div>
    `;
  }

  // ─── Проверка переменных после загрузки ───
  function checkVariables() {
    const checks = [
      { name: 'prefixes',       label: 'Приставки/суффиксы' },
      { name: 'wordRoots',      label: 'Корни' },
      { name: 'rootTopics',     label: 'Темы корней' },
      { name: 'magicVerbs',     label: 'Волшебные глаголы' },
      { name: 'magicWords',     label: 'Слова-заглушки' },
      { name: 'survivalPhrases',label: 'Фразы-спасалки' },
      { name: 'modalVerbs',     label: 'Модальные' },
      { name: 'confusingVerbs', label: 'Путаница' },
      { name: 'wordFormationRules', label: 'Словообразование' },
      { name: 'trapPairs',      label: 'Ловушки' },
      { name: 'twinWords',      label: 'Близнецы' },
      { name: 'discourseMarkers', label: 'Вводные' },
      { name: 'essayLinkers',   label: 'Эссе-связки' },
      { name: 'usefulLinkers',  label: 'Связки' },
      { name: 'allTimeWords',   label: 'Время' },
      { name: 'timePrepositions', label: 'Предлоги времени' },
      { name: 'questionWords',  label: 'Вопросительные' },
      { name: 'wordBuilderKit', label: 'Конструктор слов' },
      { name: 'suffixCheatsheet', label: 'Справочник' },
      { name: 'wordChains',     label: 'Цепочки' },
      { name: 'flipCards',      label: 'Карточки' },
      { name: 'ruleReminders',  label: 'Правила' },
      { name: 'affixTrainer',   label: 'Тренажёр' },
      { name: 'commonMistakes', label: 'Топ-ошибки' },
      { name: 'speechDrill',    label: 'Озвучка' },
      { name: 'powerPrefixes',  label: 'Топ-100' },
      { name: 'miniStories',    label: 'Истории' },
      { name: 'dictationBank',  label: 'Диктант' },
      { name: 'essayTemplates', label: 'Шаблоны эссе' },
      { name: 'essayTopics',    label: 'Темы эссе' },
      { name: 'affixMap',       label: 'Карта аффиксов' },
      { name: 'wordFamilies',   label: 'Семьи слов' },
      { name: 'oppositeAffixes',label: 'Антонимы' },
      { name: 'converterRules', label: 'Конвертер' },
      { name: 'converterExercises', label: 'Упражнения конвертера' },
      { name: 'miniQuizzes',    label: 'Квизы' },
      { name: 'miniDialogues',  label: 'Диалоги' },
      { name: 'memoryHooks',    label: 'Мнемо' },
      { name: 'quickTips',      label: 'Быстро' },
      { name: 'wordOfTheDay',   label: 'Слово дня' },
      { name: 'learningPath',   label: 'Маршрут' }
    ];

    const report = [];
    let missing = 0;

    checks.forEach(c => {
      const val = window[c.name];
      if (typeof val === 'undefined') {
        report.push(`❌ ${c.label.padEnd(25)} | ${c.name}: НЕ ОПРЕДЕЛЕНО`);
        missing++;
      } else if (Array.isArray(val)) {
        report.push(`✅ ${c.label.padEnd(25)} | ${c.name}: массив из ${val.length} элементов`);
      } else if (typeof val === 'object' && val !== null) {
        report.push(`✅ ${c.label.padEnd(25)} | ${c.name}: объект с ${Object.keys(val).length} ключами`);
      } else {
        report.push(`⚠️ ${c.label.padEnd(25)} | ${c.name}: тип ${typeof val}`);
      }
    });

    if (missing > 0) {
      // Разделяем: если были синтаксические ошибки — они уже в errors,
      // и «отсутствующие переменные» — их следствие. Даём компактный отчёт.
      const missingNames = checks
        .filter(c => typeof window[c.name] === 'undefined')
        .map(c => c.name);

      errors.push({
        title: `Не определено переменных: ${missing}`,
        detail:
          `Отсутствуют: ${missingNames.join(', ')}\n\n` +
          `Скорее всего, это следствие синтаксической ошибки выше — файл не выполнился целиком.\n` +
          `Если синтаксических ошибок нет — проверьте, что файл prefixes-data.js действительно содержит эти переменные.\n\n` +
          `Полный отчёт по переменным:\n${report.join('\n')}`
      });
    }

    // Логируем в консоль
    console.log('%c[prefixes-loader] 📊 Отчёт по переменным:', 'color:#6b8e23;font-weight:bold;font-size:14px;');
    console.table(checks.map(c => {
      const val = window[c.name];
      let size = '—';
      if (Array.isArray(val)) size = val.length;
      else if (typeof val === 'object' && val !== null) size = Object.keys(val).length;
      return {
        'Название': c.label,
        'Переменная': c.name,
        'Тип': typeof val,
        'Размер': size,
        'Статус': typeof val === 'undefined' ? '❌ ОТСУТСТВУЕТ' : '✅ OK'
      };
    }));

    return missing;
  }

  // ─── Загрузка одного скрипта ───
  function loadScript(src) {
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = () => {
        console.log('%c[prefixes-loader] ✅ Загружен: ' + src, 'color:#6b8e23;font-weight:bold;');
        resolve(true);
      };
      s.onerror = () => {
        console.error('[prefixes-loader] ❌ Не загружен: ' + src);
        errors.push({
          title: `Не удалось загрузить ${src}`,
          detail:
            `${src}\n` +
            `Возможные причины:\n` +
            `• файла нет в папке\n` +
            `• опечатка в имени файла\n` +
            `• ошибка 404 (Network)\n` +
            `• сервер отдаёт не тот MIME-тип`
        });
        resolve(false);
      };
      document.head.appendChild(s);
    });
  }

  // ─── Загрузка по цепочке ───
  let idx = 0;
  async function loadNext() {
    if (idx >= MODULES.length) {
      const missing = checkVariables();

      if (errors.length > 0 || missing > 0) {
        if (document.body) showDiag();
        else window.addEventListener('DOMContentLoaded', showDiag);
      }

      if (typeof window.init === 'function') {
        try {
          window.init();
        } catch (e) {
          console.error('[prefixes-loader] ❌ Ошибка в init():', e);
          errors.push({
            title: 'Ошибка в init()',
            detail: e.message + '\n' + (e.stack || '')
          });
          showDiag();
        }
      }
      window.dispatchEvent(new Event('prefixesReady'));
      return;
    }

    const src = MODULES[idx++];

    // 1. Проверяем синтаксис без выполнения
    const ok = await checkSyntax(src);

    // 2. Если синтаксис битый — НЕ подключаем файл (чтобы не сыпать вторичными ошибками),
    //    но идём дальше по цепочке
    if (!ok) {
      console.warn(`[prefixes-loader] ⛔ Пропускаю ${src} из-за синтаксической ошибки`);
      return loadNext();
    }

    // 3. Подключаем обычным способом
    await loadScript(src);
    loadNext();
  }

  // ─── Перехват runtime-ошибок в файлах prefixes-* (со стеком и контекстом) ───
  window.addEventListener('error', (event) => {
    const src = event.filename || '';
    if (!src.includes('prefixes-')) return;

    const shortName = src.split('/').pop();
    const lineNo = event.lineno;
    const colNo  = event.colno;

    // Уже зафиксирована? (чтобы не дублировать после checkSyntax)
    const key = `${shortName}:${lineNo}:${colNo}`;
    if (errors.some(e => e._key === key)) return;

    // Пробуем показать контекст
    getSource(src)
      .then(text => {
        const snippet = buildSnippet(text, lineNo, colNo);
        errors.push({
          _key: key,
          title: `Ошибка в ${shortName}`,
          detail:
            `Файл:   ${src}\n` +
            `Строка: ${lineNo}, колонка: ${colNo}\n` +
            `Тип:    ${event.message}\n\n` +
            `Контекст:\n${snippet}` +
            (event.error && event.error.stack ? `\nСтек:\n${event.error.stack}` : '')
        });
        if (document.body) showDiag();
        else window.addEventListener('DOMContentLoaded', showDiag);
      })
      .catch(() => {
        errors.push({
          _key: key,
          title: `Ошибка в ${shortName} (строка ${lineNo})`,
          detail: `${event.message}\nНе удалось прочитать файл для контекста.`
        });
        if (document.body) showDiag();
        else window.addEventListener('DOMContentLoaded', showDiag);
      });
  });

  // ─── Перехват необработанных promise rejections ───
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    const msg = reason && reason.message ? reason.message : String(reason);
    const stack = reason && reason.stack ? reason.stack : '';
    if (!stack.includes('prefixes-')) return;
    errors.push({
      title: 'Необработанная ошибка (promise)',
      detail: msg + '\n' + stack
    });
    if (document.body) showDiag();
  });

  // ─── Старт ───
  console.log('%c[prefixes-loader] 🚀 Начинаю загрузку модулей...',
    'color:#c49a6c;font-weight:bold;font-size:14px;');
  loadNext();
})();
