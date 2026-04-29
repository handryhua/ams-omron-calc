const CACHE_NAME = "omron-app-v1";
const urlsToCache = [
  "/ams-omron-calc/",
  "/ams-omron-calc/index.html",
  "/ams-omron-calc/manifest.json",
  "/ams-omron-calc/icon-192.png",
  "/ams-omron-calc/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
