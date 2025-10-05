
const CACHE_NAME = 'freshi-cache-v1';
const urlsToCache = [
  '/index.html',
  '/manifest.json',
  'https://cdn-icons-png.flaticon.com/512/616/616408.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
