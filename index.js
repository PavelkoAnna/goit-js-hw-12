import{a as w,S as v,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const S="55877588-e6b53050a80c1aa1c32734881",P="https://pixabay.com/api/",q=15;async function y(e,r){return(await w.get(P,{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:q}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more-btn"),B=new v(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){const r=e.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>

          <div class="gallery-info">
            <p><b>Likes</b> ${t.likes}</p>
            <p><b>Views</b> ${t.views}</p>
            <p><b>Comments</b> ${t.comments}</p>
            <p><b>Downloads</b> ${t.downloads}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",r),B.refresh()}function M(){f.innerHTML=""}function p(){h.classList.remove("visually-hidden")}function L(){h.classList.add("visually-hidden")}function R(){m.classList.remove("visually-hidden")}function u(){m.classList.add("visually-hidden")}const $=document.querySelector(".form"),E=document.querySelector(".load-more-btn");let c="",s=1,i=0;$.addEventListener("submit",I);E.addEventListener("click",O);async function I(e){e.preventDefault();const r=e.target.elements["search-text"].value.trim();if(r){c=r,s=1,i=0,M(),u(),p();try{const t=await y(c,s);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),i+=t.hits.length,b(t.totalHits)}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),e.target.reset()}}}async function O(){s+=1,u(),p();try{const e=await y(c,s);g(e.hits),i+=e.hits.length,b(e.totalHits),x()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L()}}function b(e){if(i>=e){u(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}R()}function x(){const e=document.querySelector(".gallery-item");if(!e)return;const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
