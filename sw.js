self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Hace que la app cargue el contenido de internet normalmente
  e.respondWith(fetch(e.request));
});