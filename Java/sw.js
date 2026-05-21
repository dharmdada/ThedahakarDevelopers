const CACHE_NAME = 'javamaster-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './quiz-data.js',
  './search-data.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Don't fail if some assets fail to cache (e.g. data URIs or missing files)
      return Promise.allSettled(
        ASSETS.map(url => cache.add(url).catch(err => console.warn('Cache add failed for', url, err)))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Only handle GET requests and ignore data: or chrome-extension: schemes
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful basic responses
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(err => {
        console.warn('Network request failed and no cache available', event.request.url);
      });
    })
  );
});
