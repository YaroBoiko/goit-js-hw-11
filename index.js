import{a as p,S as y,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="42378066-015a1b30c7edae39918794555";async function b(s){return(await p.get(g,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const d=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function w(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
      <li class="photo-card">
        <a href="${i}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>${t}
          </p>
          <p class="info-item">
            <b>Views</b>${n}
          </p>
          <p class="info-item">
            <b>Comments</b>${f}
          </p>
          <p class="info-item">
            <b>Downloads</b>${m}
          </p>
        </div>
      </li>
    `).join("");d.insertAdjacentHTML("beforeend",r),L.refresh()}function v(){d.innerHTML=""}function S(){u.classList.remove("is-hidden")}function c(){u.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",async s=>{s.preventDefault();const r=l.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter something to search"});return}v(),S();try{const{hits:o,totalHits:i}=await b(r);if(c(),!o.length){a.error({message:"No images found. Try again!"});return}w(o)}catch{c(),a.error({message:"Something went wrong. Try later!"})}});
//# sourceMappingURL=index.js.map
