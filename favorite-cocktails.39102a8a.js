var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},c=e.parcelRequire132b;null==c&&((c=function(e){if(e in t)return t[e].exports;if(e in o){var c=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,c.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire132b=c);var a=c("fS69O");const r=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),l=()=>{const e="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!e),r.classList.toggle("is-open"),e?window.bodyScrollLock?.enableBodyScroll(document.body):window.bodyScrollLock?.disableBodyScroll(document.body)};n.addEventListener("click",l),d.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&(r.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),window.bodyScrollLock?.enableBodyScroll(document.body))}));const s=document.querySelector(".header__search-form"),i=document.querySelector(".header__search-form-modal"),u=document.querySelector(".header");s.addEventListener("submit",a.handleCocktailsSearch),i.addEventListener("submit",a.handleCocktailsSearch),window.addEventListener("scroll",(function(){window.scrollY>0?u.classList.add("scrolled"):u.classList.remove("scrolled")}));const m={input:document.querySelector(".checkbox"),checkbox:document.querySelector(".header__switcher"),checkboxMob:document.querySelector(".header__switcher-btn")},h="theme",k=localStorage.getItem(h);"dark"===k&&(m.checkbox.classList.add("checked"),m.checkboxMob.classList.add("checked"),document.documentElement.dataset.theme=k),m.input.addEventListener("change",(e=>{let t=null;e.target.checked?(m.checkbox.classList.add("checked"),m.checkboxMob.classList.add("checked"),t="dark"):(m.checkbox.classList.remove("checked"),m.checkboxMob.classList.remove("checked"),t="light"),document.documentElement.dataset.theme=t,localStorage.setItem(h,t)}));var b=c("hF5kJ"),v=c("cDAMP"),f=c("9jazP"),g=c("fs3tN");const y=document.querySelector(".favorite__text"),S=document.querySelector(".js-favorite__cocktails"),p=JSON.parse(localStorage.getItem("favoriteCocktails")||"[]").map((e=>(0,b.getCocktailsDetailsById)(e).then((e=>e.drinks[0])))),L=new(0,g.Paginator)({selector:".paginator",drawMarkup:e=>{S.innerHTML=(0,v.createCocktailsMarkup)(e),window.scrollTo({top:0,behavior:"smooth"})}});Promise.all(p).then((e=>{e?.length?(y.classList.add("hidden"),L.update(e)):(y.classList.remove("hidden"),S.innerHTML="",L.hidePaginator())})),S.addEventListener("click",(e=>{e.preventDefault(),"BUTTON"===e.target.nodeName&&("remove_favorite"===e.target.dataset.action&&e.target.closest(".catalog__item").remove(),(0,f.handleCocktailClickAction)(e),S.children.length||y.classList.remove("hidden"))})),c("laP91");document.querySelector(".js-modal-ingredient").addEventListener("click",(function(e){const t=e.target.value,o=JSON.parse(localStorage.getItem("favoriteIng")||"[]");if("favorite"!==e.target.dataset.action||o.includes(t)){if("remove_favorite"===e.target.dataset.action&&o.includes(t)){const e=o.findIndex((e=>e===t));o.splice(e,1)}}else o.push(t);localStorage.setItem("favoriteIng",JSON.stringify(o))}));const w=document.querySelector("[data-modal-close]"),_=document.querySelector(".backdrop-cocktails"),x=document.querySelector(".backdrop-cocktails");function q(){_.classList.add("hidden"),document.body.style.overflow="auto"}w.addEventListener("click",q),x.addEventListener("click",(e=>{e.target.classList.contains("backdrop-cocktails")&&q()}));b=c("hF5kJ");async function E(e){e.preventDefault();const t=e.target?.elements?.search?.value?.trim()||"",o=await(0,b.getCocktailsByName)(t);localStorage.setItem("query",JSON.stringify(o.drinks)),window.location.href="index.html"}const M=document.querySelector(".header__search-form"),I=document.querySelector(".header__search-form-modal");M.addEventListener("submit",E),I.addEventListener("submit",(e=>{e.preventDefault(),r.classList.remove("is-open"),window.bodyScrollLock?.enableBodyScroll(document.body),E(e)}));
//# sourceMappingURL=favorite-cocktails.39102a8a.js.map
