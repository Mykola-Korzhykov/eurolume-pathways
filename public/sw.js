if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const f=e=>a(e,c),r={module:{uri:c},exports:t,require:f};s[c]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"83e22a647589f2a967e7d5484b26d490"},{url:"/_next/static/chunks/4bd1b696-a88e8d74deef06be.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/63-d8191ab1ce3a857e.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/684-f66d7ae597fb1325.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/718-4a040e4193daa320.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/app/_not-found/page-897c2bbd4d349428.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/app/layout-2464d5e360a847b9.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/app/not-found-a8a980ebba075640.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/app/page-ebfdbd6e935bddf9.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/app/robots.txt/route-9a6c13832b07760a.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/app/sitemap.xml/route-34080a25c3299430.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/framework-859199dea06580b0.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/main-8f0a65219b48f679.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/main-app-14cf488c300465fa.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/pages/_app-da15c11dea942c36.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/pages/_error-cc3f077a18ea1793.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-005a374adac44c09.js",revision:"rBpmwWdeOAHmfI9gRfbz1"},{url:"/_next/static/css/a9f30574c9793a47.css",revision:"a9f30574c9793a47"},{url:"/_next/static/css/cd75e69e271ff4f2.css",revision:"cd75e69e271ff4f2"},{url:"/_next/static/css/ff8afdbca8057fea.css",revision:"ff8afdbca8057fea"},{url:"/_next/static/media/021bc4481ed92ece-s.woff2",revision:"0f5cb8880dd308345f58cecdc5fc5041"},{url:"/_next/static/media/10dadb2e82d03733-s.woff2",revision:"2958698901712bf73a0c16f179115b89"},{url:"/_next/static/media/200388358b398524-s.woff2",revision:"eb9d3f0449481d4e787a7b65d3eedb1c"},{url:"/_next/static/media/34900c74a84112b6-s.p.woff2",revision:"f3c87846c5600ec742091b9ec0b34032"},{url:"/_next/static/media/34900c74a84112b6-s.woff2",revision:"f3c87846c5600ec742091b9ec0b34032"},{url:"/_next/static/media/3e57fe4abb1c4cae-s.woff2",revision:"ae3c8d5a747b137e316ac574e6f888e9"},{url:"/_next/static/media/3f69592b2fe603c7-s.woff2",revision:"84568c0a37620328592a78e9ad069d77"},{url:"/_next/static/media/4486f70b101e60d9-s.woff2",revision:"2afb718eb4add6612c4beda4316a6853"},{url:"/_next/static/media/4f05ba3a6752a328-s.p.woff2",revision:"ea21cc6e4b393851204d1a3160ad6abc"},{url:"/_next/static/media/5f2068c3133468f5-s.woff2",revision:"9344ad7f978ec19841fbd34737f8f736"},{url:"/_next/static/media/6325a8417175c41d-s.woff2",revision:"a3fd0c427e31c0cadb48607ee8c7876b"},{url:"/_next/static/media/99b7f73d5af7c3e2-s.woff2",revision:"e94b5e20c27aefc321077e0493d637fa"},{url:"/_next/static/media/9bf67a161a796382-s.p.woff2",revision:"3feae49f8e8e69634acf23b2d9f2ef04"},{url:"/_next/static/media/9bf67a161a796382-s.woff2",revision:"3feae49f8e8e69634acf23b2d9f2ef04"},{url:"/_next/static/media/ae80e08d9fcae03a-s.woff2",revision:"f142159132d476906e58556be82b5609"},{url:"/_next/static/media/card.598d7eec.png",revision:"d686e0b50fd1ed1acf4962a811134891"},{url:"/_next/static/media/dcc209c0b1ab30af-s.p.woff2",revision:"88a5f5c3dc76c2e00867f94ea2f3b7f2"},{url:"/_next/static/rBpmwWdeOAHmfI9gRfbz1/_buildManifest.js",revision:"7644940684159e198e053051e85766dc"},{url:"/_next/static/rBpmwWdeOAHmfI9gRfbz1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicons/app-icon-192.png",revision:"170c5cdb50de54bb8b3aa80fabe15d11"},{url:"/favicons/app-icon-512.png",revision:"4941e04a86167506f5de3dc6acf45efb"},{url:"/favicons/app-icon.svg",revision:"d62f158edf658d144589d22c3be71c09"},{url:"/favicons/card.png",revision:"d686e0b50fd1ed1acf4962a811134891"},{url:"/favicons/favicon.png",revision:"1825d8a760d87419a2ac6dca55905bcf"},{url:"/favicons/manifest.json",revision:"1c96c5357a3d46ba224e14a1317375b7"},{url:"/img/about.png",revision:"2c8d13ffe6496fcece1a9bb381cf91b3"},{url:"/img/footer/arrow.svg",revision:"68c3cd4c684d25b9aafadbc033283247"},{url:"/img/footer/background.png",revision:"72efda38962c25a12b73b767aad96af1"},{url:"/img/footer/instagram.svg",revision:"cb2ec1fc6a9e3fd8b31803e1541b54c8"},{url:"/img/header/background.png",revision:"7d52e72125651884e8899fe221c578bf"},{url:"/img/header/close-menu.svg",revision:"37584bdf04095fb1d0793a861af597cd"},{url:"/img/header/logo.svg",revision:"ebb65ba0b9ef30d7679ae7a5048ba5a5"},{url:"/img/header/open-menu.svg",revision:"43f2f61b91a1ae2d15a528e600f78d6c"},{url:"/img/not-found.png",revision:"aae1ad50a305e0873d272f4f5fc01eb9"},{url:"/img/phone.svg",revision:"241331dd9a4bbdb8302994273fee70bb"},{url:"/img/services/design.png",revision:"de226e90e687e4ef1c95ca6ffade7270"},{url:"/img/services/freelance.png",revision:"d592d7ac0736c4bea0929d25f8fe1721"},{url:"/img/services/light.png",revision:"3fd75bba46f7e34d5f928509d079208d"},{url:"/ping.txt",revision:"490396857f567c50b6d1d88c7600232c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
