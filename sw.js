if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),d={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bhee4tST.js",revision:null},{url:"assets/index-R6-fflFZ.css",revision:null},{url:"index.html",revision:"c1d68e67c464898bb0469285eeb7db83"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"mobilemanduLogo.png",revision:"05b0474ef34722a4256450eee16e9b31"},{url:"manifest.webmanifest",revision:"ce076960f7b10d5b6a4b8a0ea28022d1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
