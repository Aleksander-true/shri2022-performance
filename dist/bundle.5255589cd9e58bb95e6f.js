(()=>{var e={502:()=>{(()=>{function e(e,t,r){Array.from(e).forEach((e=>{e.addEventListener(t,r)}))}function t(t){let r=t.querySelector(".section__tab_active").dataset.id;const a=t.querySelectorAll(".section__tab"),n=Array.from(a).map((e=>e.dataset.id)),i=t.querySelector(".section__select");function o(e){const a=t.querySelector(`.section__tab[data-id=${e}]`),n=t.querySelector(`.section__panel[data-id=${e}]`),o=t.querySelector(".section__tab_active"),s=t.querySelector(".section__panel:not(.section__panel_hidden)");r=e,o.classList.remove("section__tab_active"),o.setAttribute("aria-selected","false"),o.removeAttribute("tabindex"),a.classList.add("section__tab_active"),a.setAttribute("aria-selected","true"),a.setAttribute("tabindex","0"),a.focus({preventScroll:!0}),s.classList.add("section__panel_hidden"),s.setAttribute("aria-hidden","true"),n.classList.remove("section__panel_hidden"),n.setAttribute("aria-hidden","false"),i.value=e}i.addEventListener("input",(()=>{o(i.value)})),e(a,"click",(e=>{o(e.target.dataset.id)})),e(a,"keydown",(e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let t=n.indexOf(r);if(37===e.which)--t;else if(39===e.which)++t;else if(36===e.which)t=0;else{if(35!==e.which)return;t=n.length-1}t>=n.length?t=0:t<0&&(t=n.length-1),o(n[t]),e.preventDefault()}))}function r(e){let t=!1;const r=document.querySelector(".header__links");e.addEventListener("click",(()=>{t=!t,e.setAttribute("aria-expanded",t?"true":"false"),e.querySelector(".header__menu-text").textContent=t?"Закрыть меню":"Открыть меню",r.classList.toggle("header__links_opened",t),r.classList.add("header__links-toggled")}))}document.addEventListener("DOMContentLoaded",(()=>{Array.from(document.querySelectorAll(".main__devices")).forEach(t),Array.from(document.querySelectorAll(".header__menu")).forEach(r)}))})()}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(502)})()})();