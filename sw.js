if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>n(e,t),d={module:{uri:t},exports:o,require:l};i[t]=Promise.all(s.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Cb3LNGPz.js",revision:null},{url:"assets/index-Dn1Ppw86.css",revision:null},{url:"index.html",revision:"2fb93f96bb0ebc0da97517dbc9e85773"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"mobilemanduLogo.png",revision:"05b0474ef34722a4256450eee16e9b31"},{url:"manifest.webmanifest",revision:"ce076960f7b10d5b6a4b8a0ea28022d1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
