// sw.js — Service Worker для English Cards
const CACHE_VERSION = 'english-cards-v1';
const CACHE_NAME = `${CACHE_VERSION}-cache`;

// Файлы для предзагрузки в кэш
const PRECACHE_ASSETS = [
  './',
  './index.html',
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
        console.log('[SW] 📦 Кэшируем файлы');
        // Используем addAll с fallback на отдельные add, чтобы не сломаться при отсутствии файла
        return Promise.all(
          PRECACHE_ASSETS.map(url =>
            cache.add(url).catch(err => {
              console.warn(`[SW] ⚠️ Не удалось закэшировать ${url}:`, err.message);
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

// ─── FETCH (перехват запросов) ──────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Пропускаем только GET
  if (request.method !== 'GET') return;

  // Пропускаем запросы к другим доменам
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Стратегия: Cache First с обновлением в фоне (Stale-While-Revalidate)
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          // Кэшируем только успешные ответы
          if (response && response.status === 200 && response.type === 'basic') {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch((err) => {
          console.warn('[SW] ❌ Ошибка сети:', err.message);
          // Если это навигация и мы офлайн — отдаём index.html
          if (request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({ 'Content-Type': 'text/plain' })
          });
        });

      // Если есть в кэше — возвращаем сразу, а в фоне обновляем
      return cached || fetchPromise;
    })
  );
});

// ─── СООБЩЕНИЯ от страницы ─────────────────────────────────
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data === 'CLEAR_CACHE') {
    caches.keys().then(keys => {
      keys.forEach(key => caches.delete(key));
    });
  }
});

console.log('[SW] 📄 sw.js загружен');
