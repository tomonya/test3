// sw.js
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  // その他キャッシュしたいファイルを追加
];

// インストール処理
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(function(cache) {
				return cache.addAll(urlsToCache);
			})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches
			.match(event.request)
			.then(function(response) {
				return response ? response : fetch(event.request);
			})
	);
});
