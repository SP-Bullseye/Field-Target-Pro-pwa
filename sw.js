const CACHE_NAME = 'field-target-pro-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'icons/favicon-16x16.png',
  'icons/favicon-32x32.png',
  'icons/apple-touch-icon.png',
  'icons/web-app-manifest-192x192.png',
  'icons/web-app-manifest-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Cache failed:', err))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
