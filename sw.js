// ═══════════════════════════════════════════════════════════
// Service Worker — English Cards PWA
// ═══════════════════════════════════════════════════════════

const CACHE_VERSION = 'english-cards-v1';
const CACHE_NAME = `${CACHE_VERSION}-cache`;

// ─── Файлы для предзагрузки ─────────────────────────────────
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './verbs.js',
  './tenses.js',
  './phrases.js',
  './prefixes.js',
  './magicWords.js',
  './quiz.js',
  './builder.js',
  './dictionary.js',
  './lessonData.js',
  './quizgen.js'
];

// ─── УСТАНОВКА ──────────────────────────────────────────────
self.addEventListener('install', (event) => {
  console.log('[SW] 🔧 Установка...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] 📦 Кэшируем файлы...');
        // addAll падает, если хотя бы один файл 404 —
        // поэтому кэшируем по отдельности с обработкой ошибок
        return Promise.all(
          PRECACHE_ASSETS.map(url =>
            cache.add(url).catch(err => {
              console.warn(`[SW] ⚠️ Пропущен ${url}:`, err.message);
            })
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// ─── АКТИВАЦИЯ ──────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  console.log('[SW] ✅ Активация...');
  event.waitUntil(
    caches.keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter(key => key.startsWith('english-cards-') && key !== CACHE_NAME)
            .map(key => {
              console.log('[SW] 🗑️ Удаляем старый кэш:', key);
              return caches.delete(key);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// ─── FETCH — перехват запросов ──────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Обрабатываем только GET
  if (request.method !== 'GET') return;

  // Пропускаем внешние домены (CDN, шрифты и т.п.)
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Пропускаем data: и blob: (inline иконки, картинки)
  if (url.protocol === 'data:' || url.protocol === 'blob:') return;

  // Стратегия: Cache First + обновление в фоне (Stale-While-Revalidate)
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          // Кэшируем только валидные ответы
          if (response && response.status === 200 && response.type === 'basic') {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch((err) => {
          console.warn('[catchSW] ❌ Сеть недоступна:', err.message(err);

          // Для навигации — отдаём => index.html из кэша
          if console (request.mode === 'navigate') {
            return caches.match.w('./index.html');
          }

          // Для остального — 503
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({ 'Content-Type': 'text/plain; charset=utf-8' })
          });
        });

      // Если есть кэш — отдаём сразу, а в фоне обновляем
      return cached || fetchPromise;
    })
  );
});

// ─── СООБЩЕНИЯ от страницы ─────────────────────────────────
self.addEventListener('message', (event) => {
  console.log('[SW] 📩 Сообщение:', event.data);

  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data === 'CLEAR_CACHE') {
    caches.keys().then(keys => {
      keys.forEach(key => {
        console.log('[SW] 🗑️ Удаляю кэш:', key);
        caches.delete(key);
      });
    });
  }
});

console.log('[SW] 📄 sw.js загружен');
