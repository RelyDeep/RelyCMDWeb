'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "720f925e1005a3d59fd23921d1089b5f",
"index.html": "8923b7bc816e4c4231fc3b10d63371de",
"/": "8923b7bc816e4c4231fc3b10d63371de",
"main.dart.js": "00154c338274a607ab33d498ccf75fc1",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
"assets/AssetManifest.json": "c381e1713f8917e2e85b22e199857086",
"assets/NOTICES": "caf1e234f6685945e00b1392019ab5da",
"assets/FontManifest.json": "5ca8298889d49b4b8224faa0538e8f63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "9d3cb206bb95429f5f6c247b61b6fa3c",
"assets/fonts/MaterialIcons-Regular.otf": "fbe27a1cb8071947c683368ca0045b1f",
"assets/assets/svg/data-collection.svg": "7e65404c9fe9bb412d11316f058686d1",
"assets/assets/svg/background.svg": "7f1e77427fd3463b592aa384b3b6070f",
"assets/assets/svg/house.svg": "c568adbc841abd6b452063435adeb68e",
"assets/assets/svg/bedout.svg": "cfceac26906852b00a8b526588f09bf4",
"assets/assets/svg/usg.svg": "64192076a6d3d6a845c7380ef67e7a34",
"assets/assets/svg/home.svg": "abec78fd57317d1df0e3442f229f7993",
"assets/assets/svg/all.svg": "82008494187fc8d0a970529f112188f4",
"assets/assets/svg/medical.svg": "a2443ccd828ac8031b53ade6bffd4b26",
"assets/assets/svg/history_pen.svg": "fb155dd2e224b024459e0d2664169417",
"assets/assets/svg/appointment.svg": "1ee516479d56890dd4d5d2df84a9285d",
"assets/assets/svg/calendarTomorrow.svg": "b0b9656b1fb7f5d55db023b309db0297",
"assets/assets/svg/calendar31.svg": "82bef20e12a1ce5116d5bab2bc85a121",
"assets/assets/svg/house-medical.svg": "a65c96c35d2c0396b60b7c01c9b563c1",
"assets/assets/svg/dashboard.svg": "627ab819046236c7ddd2ffb8cfc7c990",
"assets/assets/svg/price-tag.svg": "b65a9bcabbda5bfb5be6fa7d8da0654a",
"assets/assets/svg/check.svg": "303926398faa8557c9988939f9d310d5",
"assets/assets/svg/flask.svg": "4667a5edf3fc9b0e2e5a9e92cdca5b27",
"assets/assets/svg/opportunity.svg": "f251deee2e94350521760243b4d2feae",
"assets/assets/svg/mri.svg": "33807a9af37f28062c168e68e3d023fd",
"assets/assets/svg/expired.svg": "8983afe7b2bcb32db0fcc4c70b91e6c7",
"assets/assets/svg/patient%2520(1).svg": "771b3da717b62ddfece6ce304142bfce",
"assets/assets/svg/patient.svg": "f04c7003610782bdc554ff26027b9d77",
"assets/assets/svg/revenue_graph.svg": "e5ae02e6794fa2e4422a5b951ad9601e",
"assets/assets/svg/empty_listsvg.svg": "632ffec42cc9d6b5587e96a9ac457722",
"assets/assets/svg/new.svg": "7343ef31dba835db5fac954f73c77fc4",
"assets/assets/svg/rupeeSave.svg": "30d027da2542d7ec779ad12e8aac6916",
"assets/assets/svg/calendar.svg": "cf7cb4989ef45473fc7cc64fb1c71cb2",
"assets/assets/svg/revenue.svg": "5624afc1bcaae4dc7c8eaed962706f06",
"assets/assets/svg/history.svg": "c1354085e767085ac38473d4dd309ceb",
"assets/assets/svg/hospital-bed.svg": "2ca374bff5e9c3f68263c3e892fcc94d",
"assets/assets/img/doctor_consultation_03.jpg": "4be2b26daeb2d8f563f8dac77a836951",
"assets/assets/img/patient3.png": "891a1694cd8d0ad10de15c71d067fd42",
"assets/assets/img/newregistrations.png": "63d92aecdfbeb35fff6c4057ebb00c7f",
"assets/assets/img/admitted5.png": "ec1241c11988858eff2e53f488287cbe",
"assets/assets/img/ot_p.png": "6d525ff0085b37260e92cb21ed0de6ce",
"assets/assets/img/blank_blue.png": "fb22ec1984b31fd78a61082991abd669",
"assets/assets/img/round.png": "5cc899a77791c681eed4e8d628cdb449",
"assets/assets/img/admitted2_.png": "2b54484bf769f527c42ed3d422fb862e",
"assets/assets/img/loginbackground.png": "d496732945a64ef470795a522baa5b48",
"assets/assets/img/doctor.png": "1018849d64d5588a7cf24db5dc9275f3",
"assets/assets/img/x_ray.png": "ec0d0675ec98f26441646a2869f850c2",
"assets/assets/img/user.png": "681f7dc5675f1f3e0fadaa836d723499",
"assets/assets/img/recovered.png": "005cd6df2388c8f609636c9ecc5dd2c5",
"assets/assets/img/old_p.png": "85794fa0aa107a3027e6debc0c29423b",
"assets/assets/img/new_p.png": "c64fa4d305f45fea6e328336854db77b",
"assets/assets/img/new_reg.png": "8088f6957968a54ff8144a875cd7d582",
"assets/assets/img/JMCH_Logo.jpeg": "c0931e163466873f5db9dec4f2eb08c3",
"assets/assets/img/logo.png": "6f46e37ed55a714c29b87d1cac89edd1",
"assets/assets/img/logo_white.png": "117f19b8b051297ec1677eac041287fd",
"assets/assets/img/hospital_logo.jpg": "0dbefeeeb33cbbead15f082bb53dc845",
"assets/assets/img/discharge_new.png": "755ccd9b186e947baea5f82af2ed9e73",
"assets/assets/img/doct_bg.jpg": "30577bcf8827511a3aa4dd5b877223c7",
"assets/assets/img/lab_tool.png": "b58f909bc8763fd320e8718ea06fbe7d",
"assets/assets/img/stethoscope.png": "733bf0581832d65527a6d669c7290cde",
"assets/assets/img/admitted_new.png": "891a1694cd8d0ad10de15c71d067fd42",
"assets/assets/img/welcome.png": "5f7dbd0cf54a4d9e2dd87d3678db1fc8",
"assets/assets/json/budgeting.json": "f80a4e3559eba6c8812086ba71fe04f9",
"assets/assets/lottie/Animation_Chart.json": "74e1648a8a6a68c009a114eaaad8c8a4",
"assets/assets/lottie/Animation_Chart1.json": "15bb33c644198fe753228265f5d4db59",
"assets/assets/lottie/RelyRipplerAnimation.json": "732d0569a69f7e90b5fa1b3834909d96",
"assets/assets/fonts/Helvetica-Font/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
