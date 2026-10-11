// ═══════════════════════════════════════════════════════════
// prefixes.js — ЛОАДЕР С ДИАГНОСТИКОЙ
// Загружает: prefixes-data.js → prefixes-render.js → prefixes-router.js
// Показывает ошибки прямо на странице
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

  // ─── Создаём панель диагностики ───
  function createDiagPanel() {
    let panel = document.getElementById('prefixesDiagPanel');
    if (panel) return panel;
    panel = document.createElement('div');
    panel.id = 'prefixesDiagPanel';
    panel.style.cssText = `
      position: fixed;
      top: 10px; left: 10px; right: 10px;
      max-width: 720px;
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
      max-height: 70vh;
      overflow-y: auto;
    `;
    document.body.appendChild(panel);
    return panel;
  }

  function showDiag() {
    const panel = createDiagPanel();
    if (errors.length === 0) {
      panel.style.borderColor = '#6b8e23';
      panel.style.background = '#f0f8e8';
      panel.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <strong style="color:#2d4a0f;font-size:15px;">✅ prefixes.js — все модули загружены</strong>
          <button onclick="this.closest('#prefixesDiagPanel').style.display='none'" style="background:#6b8e23;border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;">✕</button>
        </div>
        <div style="font-size:12px;color:#5f451f;">
          Модули подключены, ошибок не обнаружено.
        </div>
      `;
      return;
    }
    let html = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <strong style="color:#b93a3a;font-size:15px;">❌ prefixes.js — обнаружены ошибки</strong>
        <button onclick="this.closest('#prefixesDiagPanel').style.display='none'" style="background:#b93a3a;border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;">✕</button>
      </div>
      <div style="background:#fff6e8;border-radius:12px;padding:12px;margin-bottom:10px;">
        <div style="font-weight:bold;margin-bottom:8px;">📋 Отчёт:</div>
        <div style="font-family:monospace;font-size:12px;white-space:pre-wrap;line-height:1.5;">${errors.map((e, i) =>
          `<div style="margin-bottom:8px;padding:8px;background:#fde4c8;border-radius:8px;border-left:4px solid #b93a3a;">
            <b>#${i + 1}</b> ${e.title}
            <div style="color:#5a0f0f;margin-top:4px;">${e.detail}</div>
          </div>`
        ).join('')}</div>
      </div>
      <div style="background:#e8f0d4;border-radius:12px;padding:12px;font-size:12px;">
        <b>💡 Как исправить:</b>
        <div style="margin-top:6px;line-height:1.5;">
          1. Откройте <b>F12 → Console</b> — там подробная ошибка со строкой.<br>
          2. Обычно проблема в одном из файлов: незакрытая кавычка <code>'</code>, скобка <code>{ } [ ]</code> или запятая.<br>
          3. Проверьте конец файла <b>prefixes-data.js</b> — каждый <code>.push()</code> должен заканчиваться <code>);</code>
        </div>
      </div>
    `;
    panel.innerHTML = html;
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
      errors.push({
        title: 'Часть массивов не определена',
        detail: `Не найдено ${missing} из ${checks.length} переменных. Скорее всего, синтаксическая ошибка в prefixes-data.js. Откройте консоль (F12) для деталей.\n\nОтчёт по переменным:\n${report.join('\n')}`
      });
    }

    // Логируем отчёт в консоль
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

  // ─── Загрузка модулей ───
  let idx = 0;
  function loadNext() {
    if (idx >= MODULES.length) {
      // Все скрипты загружены — проверяем переменные
      const missing = checkVariables();

      // Показываем панель диагностики, если есть ошибки
      if (errors.length > 0 || missing > 0) {
        if (document.body) {
          showDiag();
        } else {
          window.addEventListener('DOMContentLoaded', showDiag);
        }
      }

      // Вызываем init
      if (typeof window.init === 'function') {
        try { window.init(); }
        catch (e) {
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
    const s = document.createElement('script');
    s.src = src;
    s.async = false;

    s.onload = () => {
      console.log('%c[prefixes-loader] ✅ Загружен: ' + src, 'color:#6b8e23;font-weight:bold;');
      loadNext();
    };

    s.onerror = (e) => {
      console.error('[prefixes-loader] ❌ Не загружен: ' + src, e);
      errors.push({
        title: 'Не удалось загрузить файл',
        detail: `${src}\nВозможные причины:\n• файла нет в папке\n• опечатка в имени файла\n• синтаксическая ошибка внутри файла\n• ошибка 404 в Network`
      });
      loadNext();
    };

    document.head.appendChild(s);
  }

  // ─── Перехватываем глобальные ошибки ───
  window.addEventListener('error', (event) => {
    // Ловим только ошибки скриптов prefixes-*
    const src = event.filename || '';
    if (src.includes('prefixes-')) {
      const shortName = src.split('/').pop();
      const alreadyLogged = errors.some(e => e.detail.includes(shortName));
      if (!alreadyLogged) {
        errors.push({
          title: `Синтаксическая ошибка в ${shortName}`,
          detail: `${event.message}\nСтрока: ${event.lineno}, колонка: ${event.colno}\n\nПроверьте эту строку в файле — обычно это незакрытая кавычка, скобка или запятая.`
        });
        if (document.body) showDiag();
        else window.addEventListener('DOMContentLoaded', showDiag);
      }
    }
  });

  // ─── Старт ───
  console.log('%c[prefixes-loader] 🚀 Начинаю загрузку модулей...', 'color:#c49a6c;font-weight:bold;font-size:14px;');
  loadNext();
})();
