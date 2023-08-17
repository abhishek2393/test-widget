(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const c=`
    .widget__container * {
        box-sizing: border-box;
    }        

    h3, p, input {
        margin: 0;
        padding: 0;
    }

    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 400px;
        overflow: auto;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 10px;
        box-sizing: border-box;
    }
    .container {
        border: none;
        background-color: #0f172a;
        width: 100%;
        height: 100px;
        border-radius: 1%;
        
    }

`;class d{constructor(){}async fetchQuotes(){return await(await fetch("https://type.fit/api/quotes")).json()}}class p{constructor(){this.initialize(),this.injectStyles()}async initialize(){var a;const e=document.createElement("div");var s=(a=document.querySelector('script[data-id="Pxwqwer"][data-position]'))==null?void 0:a.getAttribute("data-position");console.log(s),s?s=="top"?(e.style.position="fixed",e.style.display="flex",e.style.justifyContent="center",e.style.top="0",e.style.left="0",e.style.right="0",e.style.alignItems="center"):s=="bottom"&&(e.style.position="fixed",e.style.bottom="0",e.style.left="0",e.style.right="0",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center"):(e.style.position="fixed",e.style.display="flex",e.style.justifyContent="center",e.style.top="0",e.style.left="0",e.style.right="0",e.style.alignItems="center"),document.body.appendChild(e);const i=document.createElement("div");i.classList.add("container");const o=await new d().fetchQuotes(),r=o[Math.floor(Math.random()*o.length)],n=document.createElement("p");n.innerHTML=r.text,n.style.color="#fff",n.style.fontSize="1.5rem",n.style.fontWeight="bold",n.style.textAlign="center",n.style.marginTop="1rem",i.appendChild(n),e.appendChild(i)}injectStyles(){const e=document.createElement("style");e.innerHTML=c.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}}new p;
