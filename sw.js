if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>n(e,r),d={module:{uri:r},exports:l,require:o};s[r]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(t(...e),l)))}}define(["./workbox-b22defcb"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"2a73c341ace75140e7812d9fd4de11fd"},{url:"assets/About.3a2c87e2.js",revision:null},{url:"assets/Home.1af970d6.js",revision:null},{url:"assets/index.37760826.css",revision:null},{url:"assets/index.75cc899d.js",revision:null},{url:"assets/Projects.4444b7a7.js",revision:null},{url:"assets/Typing.2ca4c4d7.js",revision:null},{url:"index.html",revision:"dd3813e50a0838eec4c5e8e9e202d578"},{url:"manifest.webmanifest",revision:"953fb841999e663d7da33133e64d4ed9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>["https://spy-family.net","https://cdn.jsdelivr.net"].includes(e.origin)),new e.StaleWhileRevalidate({cacheName:"external-sources",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET")}));