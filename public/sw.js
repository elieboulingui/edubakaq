self.addEventListener('install', (event) => {
  console.log('Service Worker installé');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activé');
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => {
    return new Response('Mode hors-ligne');
  }));
});
