'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
".git/config": "fbd5f4899a8750100a378ce6c95c6103",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "a51a9056c3d806fb5d1660ae1bdc02cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93947324b9e685cac22cebfbb5b3d90d",
".git/logs/refs/heads/main": "117a000a09c3b38282470b6cc2701bdf",
".git/logs/refs/remotes/origin/main": "23cdfe34a70a39367a904eeb9c863613",
".git/objects/04/45268bbb229fac8d1ff3ab7acb532f6af35e87": "0b1bca45c9a8c7cca04237ad7d994d29",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/09/9a542e8d0de5003ccf05c298cf102e0fa78b69": "df116d134156e81fbf2a33be7858c9ac",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/16/782341ca76cf4caa32da7f44a7a184d00069f0": "7be83f48a84c991485bc04e5f8ae8c61",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1c/cff4c6bad55d9e91fb162aef2843d879cd1d82": "3fdaf07f686b4370fc36f0325e5b90b8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/c89e93ade653d3aa43a36301d7aed476008eb9": "0ccfc5d53c9c899dc3e31d0e79bc06ea",
".git/objects/2e/f4116acb590bc17e632d7e2b968a63d998c40b": "a3bc930f7249036b47d299bfa990b213",
".git/objects/31/fa44e6ee5de172cff7c22e555bdf398a2215d0": "f9481c8d0f15f975cf4f297808f81865",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/33/1902926d4d6fed4826d4daf86c5fb26cc27e11": "c7ccf10558785db7cbba3e0234393999",
".git/objects/39/08c89438e998520fa316e5d0b68f67d4f03893": "39bab4ea688a0bad9776384e9bcd1c87",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3b/7ace2b3e5f0ff5fae6d511155bf93be8d415ae": "f95512416f68c2f816b3c3f34fb51385",
".git/objects/3b/bd70efa0ca6b136bd5804bfbb1cac8742e4e81": "988ede1984909835a42009118db0cab0",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/df28f970b466cf7a8b740bdc476c7f16e4da74": "10446d18345e2e6c2f2d7e46b8c3f708",
".git/objects/52/bb6966d7aadfd5f1ebfd79a71a65d49ef53cd8": "3bc2319dee40cfddce807de72fa9a626",
".git/objects/53/1192abf5e39563726c82d04d7b3e422fc67978": "98aa3f45b79b899685c3e0be984c8709",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/da3009d25d4ac7a381cee319ff0242a4edc109": "55365d7345fce26c99868144b63647f1",
".git/objects/57/352d9d92f8e0a21af7aed280d6becc4963a734": "67611a1c244a66e01e1782fd589fdc46",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6b/c11242c3912d1600c4085016aad06fcf871f97": "62c4db9920f6c642d3e61c7d6f73d5ac",
".git/objects/6d/deee2a651d5064c7092b2396024f81cf552e16": "9fdf49877d763594725e5b53f0d566d4",
".git/objects/7a/c2037e185bf3b6df841a36e60ae68f3c7f727a": "0a3c4eb0f9857dff045186fce72ad347",
".git/objects/7d/2a6d81ce522b6ee6ea6c126f06437940ebcfb1": "e03e80056f3d1b1fdd43f6c87f670031",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/11114c4e4f4d954aff0509247c08657b913621": "8c6d0dd3328a77aab6f5952c33c92d8b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8a/e70715571a7c7026b367e936098b726a4fdfaa": "615ef78702eab8bf7197074b22989990",
".git/objects/94/b2d1a7e415184484242cb4b6357a92297e1479": "c15475890a63c707536ab5bb7d9955aa",
".git/objects/a1/5c3f73324a1b3a5dbcc40b46899cd771c3358c": "a6ee9ab62a7799e51178846229b5f9ae",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/b2/f83dbb5e2b99f646887ae3e74fad79faa7de3f": "5128001f0af1c3feee7a7b005cc13fb6",
".git/objects/b3/40555e2570ecfb5ac22d9e5d5a6ca253e63800": "f68f1d5efb90f589fb012fc6f3523b0c",
".git/objects/b5/84f381c1128e1104ca6bc93898a3460ad27687": "79303262f5cac8f31874df15e6d20c99",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/1cce26107aff6479d68c954b3cfea6ba6b72fc": "b6902abebbcc04787e624562135c5c13",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c3/e2f4febc914063f7ad697e35d8f55c03506e44": "62e268f6fff7f0046b063f75d335ea43",
".git/objects/c9/8a059ad34203bd5a766ec57e64653d43746518": "d12b38c1131e490fb8a699ba01202fa0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/4253926b2d3cf388b457e65df639181b8e4a3c": "6f8942bada4c732e274b053e1f581735",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f1/d78c4e433d3354f56b54d8f2ebb1639703eeeb": "2fce9030986de825b5f3a54073c97d50",
".git/objects/f8/11221a09c33b1614374c602fac64ff4fd10964": "825ca59144a65d9bbbc85007c4ef31d0",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/refs/heads/main": "eeb5698325263c76db0018ca2807f9d8",
".git/refs/remotes/origin/main": "eeb5698325263c76db0018ca2807f9d8",
"assets/AssetManifest.bin": "af7ebbd0a31bac50e365c37b27c895ec",
"assets/AssetManifest.bin.json": "2c62141ba11856343908ca35c78db59b",
"assets/AssetManifest.json": "e42937a3c61890a2a87bf57ced74c6ac",
"assets/assets/icons/apple-logo.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/icons/github.png": "63de5479e8eb4676570c49e2579cab01",
"assets/assets/icons/instagram.png": "8ce47fd872187bfa8d11505b3bd8944e",
"assets/assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/icons/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/icons/youtube.png": "8f8bc2286e823d24d028e4c2b7ce754d",
"assets/assets/image/6709763-removebg-preview.png": "5b7d05fd51ab0378476c7f879e39df0c",
"assets/assets/image/6709763.png": "3f5ad563bad030316814858db411baf6",
"assets/assets/image/blake-connally-B3l0g6HLxr8-unsplash.jpg": "c82d08ac19693573048629acb45a6241",
"assets/assets/image/linklink.jpg": "7831e793dde39887b14c611d42e8398e",
"assets/assets/image/myPic.jpg": "ee452ded8560905aea6ef4b9823a4960",
"assets/assets/projects/image2.png": "682e70270c9d7bce3f0bd7f566d57dd3",
"assets/assets/projects/image4.png": "9c03803fb81a4f121e9208c5cb718d5f",
"assets/assets/projects/image5.jpg": "d8376a8f6bb5d6c2c6113738dc2015be",
"assets/assets/projects/image6.jpg": "7af9e55a0ab047f225a9d997fac40c02",
"assets/assets/projects/picc_twoo.png": "04e3721c89a66e576186c01392289015",
"assets/assets/projects/pic_new.png": "e4b6eb634c08e95d31bd9e5d4eed5768",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "d68ea1ec7913dffa060630f2c9541a4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ff3cc8f0938f5c2be528b41235c50463",
"/": "ff3cc8f0938f5c2be528b41235c50463",
"main.dart.js": "c7b61d5fba6bb549c878a35d1b65307a",
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