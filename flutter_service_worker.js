'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1df276cb3352dceeda397aac237b207d",
".git/config": "fbd5f4899a8750100a378ce6c95c6103",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e84eb74065d6a81b20546ac9f78f1eac",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6f7efb8430aad5e74862c6ebc0354b25",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9ad85591ae7421bd34a45ce0b54910f2",
".git/logs/refs/heads/main": "9ad85591ae7421bd34a45ce0b54910f2",
".git/logs/refs/remotes/origin/HEAD": "935101ede7ad090e6a99865f02e2d0a1",
".git/logs/refs/remotes/origin/main": "ed541b726ea5c44df1bb26128b699403",
".git/objects/09/45cb5cb79502077152c178d8ffcc5bde3625d5": "18ca76b6841289853097424a23c9dc30",
".git/objects/1e/c68cf32cd26b2870b28ebcb04531252796fd8b": "02a53965aa1a42027c6aaeacf37b4453",
".git/objects/29/ca166f34219e2e3a84eb96086903d5a5216c44": "5de4780194defeda7a1aec6abe17c103",
".git/objects/30/2740e3d59a255dc7395f694655970e77f1d454": "3531b72421621a40bfc51c80fe80ee37",
".git/objects/35/bc441a066a9cb49cdb898bce9e97141c3f4430": "be89025bf639401b98b344b9852e6a9b",
".git/objects/38/51d7f6a120b20167605f10b2b0e29011dbaf17": "5db7a666bfd9fc3ff190e240f6188cef",
".git/objects/40/eec207edf44e561f0e169efce822211dc6a7ec": "2559bd8052f25ef9ee9c1f0e5a91dd99",
".git/objects/5d/ba77773b8ee02729cc859253ab75320035d8e3": "d14ce7e52ea45218ef95be8dd05240be",
".git/objects/69/2d58d31e9d9576bfdf91e451eb6ea62b85b386": "3021d47ea0408cb57c01ae96bb6c0be0",
".git/objects/6c/0d12709f53992f296938daa072c36e0586a9a1": "56e2621133ab4648a6ddfda171724fe3",
".git/objects/6f/af370731efe397e146e330607be2681b371a6b": "45d0ff9418ac821c97c9b5901d845ba7",
".git/objects/6f/c7ff59213b5415e0f7b677d136fb7741ee398e": "682cfa68e3860db3f7d0ed1b3b3dd132",
".git/objects/75/785ce2129bd0015f67db3f9033e21d11ace0da": "47b4e2036a08e100771b79ebd3bfaee1",
".git/objects/79/1c92ac12e493bd5be7a8ffa2d286a876dfd1b1": "cb4ae4552a16f434cd1e538eb2a09133",
".git/objects/7c/fbd3229a79ebb265e1f9049466c3d7fa51dccf": "6bac3cb947c8babfb84765644ddcf044",
".git/objects/a3/50bb9566cf5e16d67954ffd7e0a52773619ebc": "e1801f867637d3979b6a2e43c1e943c5",
".git/objects/a7/cf25b743a8e977ad095247cbcaaf361f116bf0": "9c11e8f28deff65e378b78e54b1fa2b4",
".git/objects/ac/99a24b57c1b7520215355a2cd570e682f3381b": "2eca932347fb3d1113564135c574d50a",
".git/objects/cd/c0b5402799eedab0a9dba9013c24235d675b56": "d73dc9c5500bffc01428e3697a684744",
".git/objects/d9/d576df3333b61bbf45c39f5db1b3edc22a3af5": "33fd0c947cff18f930782ff811f0e521",
".git/objects/e9/b8c31cc422b3538b24cc2352130a18bdda310e": "20e523a91fd357633a9a9d12a5c12cb8",
".git/objects/ef/1dc3e93be13a4630d134915f66aab61351a87d": "2e8775757f8643769ba634f42f809951",
".git/objects/f5/0e0b5fc501195225f827296bb396a5529ab063": "4da1f7c7ec86c63c0a0adcef6053a985",
".git/objects/fc/ae71a837f942dda9552da14facc1604d0943a6": "9919227b76ff14e980f5c3394ca26765",
".git/objects/pack/pack-2ae7aaf859b5a9581e556bee46a97cd7dd3656dd.idx": "0f940d614cb43b46bc628730dd0bc73c",
".git/objects/pack/pack-2ae7aaf859b5a9581e556bee46a97cd7dd3656dd.pack": "c93188dd2b7646083011f9b0fee1f9e9",
".git/objects/pack/pack-2ae7aaf859b5a9581e556bee46a97cd7dd3656dd.rev": "9d4c0fbf2b8cad3ca4e082efb60b552d",
".git/ORIG_HEAD": "33ae5f00fa566ce617d910853ffa6861",
".git/packed-refs": "fac5fe86071093d8e85c2a011bc086bb",
".git/refs/heads/main": "5d09ef4cb4441fc1eae5b778fb85477c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5d09ef4cb4441fc1eae5b778fb85477c",
"assets/AssetManifest.bin": "60dee495e4e335e26e22992799489ac8",
"assets/AssetManifest.bin.json": "2328b8d8157455bc4697eac6cd5c7bbd",
"assets/AssetManifest.json": "7791c647ba822fcfc7ef2f4e015aa4e5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "d68ea1ec7913dffa060630f2c9541a4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/resources/icons/apple-logo.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/resources/icons/github.png": "63de5479e8eb4676570c49e2579cab01",
"assets/resources/icons/icons8-youtube-480.png": "efe8388cc5e8648ad1d0c7d02cf04abb",
"assets/resources/icons/instagram.png": "8ce47fd872187bfa8d11505b3bd8944e",
"assets/resources/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/resources/icons/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/resources/icons/youtube.png": "8f8bc2286e823d24d028e4c2b7ce754d",
"assets/resources/image/6709763-removebg-preview.png": "5b7d05fd51ab0378476c7f879e39df0c",
"assets/resources/image/6709763.png": "3f5ad563bad030316814858db411baf6",
"assets/resources/image/blake-connally-B3l0g6HLxr8-unsplash-min.jpg": "b84a2f43a8c6777e953998ff9dfc2a8b",
"assets/resources/image/linklink.jpg": "7831e793dde39887b14c611d42e8398e",
"assets/resources/image/myPic.jpg": "ee452ded8560905aea6ef4b9823a4960",
"assets/resources/projects/image2.png": "682e70270c9d7bce3f0bd7f566d57dd3",
"assets/resources/projects/image4.png": "9c03803fb81a4f121e9208c5cb718d5f",
"assets/resources/projects/image5.jpg": "d8376a8f6bb5d6c2c6113738dc2015be",
"assets/resources/projects/image6.jpg": "7af9e55a0ab047f225a9d997fac40c02",
"assets/resources/projects/picc_twoo.png": "04e3721c89a66e576186c01392289015",
"assets/resources/projects/pic_new.png": "e4b6eb634c08e95d31bd9e5d4eed5768",
"assets/resources/Zeeshan_Khalid_Resume___%2520(3).pdf": "f2cad9b970774fe565ae89e98fb3cf10",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon%20(1).ico": "06aaccd55e969a0013cc519486ca522f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2638633ab5e54f014ec2d862383d5724",
"/": "2638633ab5e54f014ec2d862383d5724",
"main.dart.js": "57b50a8456f627348f927cf22b9b3d89",
"manifest.json": "8b65fe4890a43bb4a6434e2b3758b5ba",
"version.json": "a3003aa8fca1d854a9fe882a26789833"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
