(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function b(e){let t=[0,1];if(e<2)return t[e];for(let n=2;n<=e;n++)t[n]=t[n-1]+t[n-2];return t[e]}function u(e,t=1){const n=Math.pow(10,t);return Math.round(e*n)/n}function L(e){return e<-459.67&&console.error(`${e}°F is too cold`),u((e-32)/1.8)}function E(e){return e<-273.15&&console.error(`${e}°C is too cold`),u(e*1.8+32)}async function $(e,t,n,i){const o=`https://api.exchangerate.host/convert?from=${t}&to=${n}`;fetch(o).then(r=>r.json()).then(r=>{let l=u(e*r.result,2);i.innerText=`${t} ${e} = ${n} ${l}`})}async function v(e,t){var n="https://api.exchangerate.host/symbols";fetch(n).then(i=>i.json()).then(i=>{let o="";for(let r in i.symbols){let l=i.symbols[r].code,g=i.symbols[r].description;o+=`<option value="${l}">${g} (${l})</option>
`}o&&(e.innerHTML=o,t.innerHTML=o)})}let c=[];async function B(e){e.innerHTML="Loading...",fetch("https://www.amiiboapi.com/api/amiibo/").then(n=>n.json()).then(n=>{c=n.amiibo,m(c,e)})}function m(e,t){let n="";for(let i of e)n+=`
        <details>
            <summary>${i.name}</summary>
            <img src="${i.image}" height="100" alt="${i.name}">
            <ul>
                <li>Name: ${i.name}</li>
                <li>Character: ${i.character}</li>
                <li>AmiiboSeries: ${i.amiiboSeries}</li>
                <li>GameSeries: ${i.gameSeries}</li>
                <li>Type: ${i.type}</li>
                <li>ID: ${i.head}${i.tail}</li>
            <ul>
        </details>`;t.innerHTML=n}function I(e,t,n){console.log({str:e,out:t,options:n,amiibos:c});const i=c.filter(o=>!!(o.character.toLowerCase().includes(e.toLowerCase())||n.nameOpt&&o.name.toLowerCase().includes(e.toLowerCase())||n.gameSeriesOpt&&o.gameSeries.toLowerCase().includes(e.toLowerCase())||n.amiiboSeriesOpt&&o.amiiboSeries.toLowerCase().includes(e.toLowerCase())));m(i,t)}document.getElementById("submit-fib").addEventListener("click",()=>{let e=document.getElementById("fib").value,t=b(e);document.getElementById("fib-result").innerHTML=`F<sub>${e}</sub> = ${t}`});document.getElementById("submit-temp").addEventListener("click",()=>{const e=document.getElementById("temp-result"),t=document.getElementById("temp").value,n=document.querySelectorAll('input[name="temp-type"]');let i;for(let o of n)if(o.checked){i=o.id;break}i==="celcius"?e.innerHTML=`${t}°C = ${E(t)}°F`:i==="farenheit"?e.innerHTML=`${t}°F = ${L(t)}°C`:e.innerText="Her er det noe muffens!"});document.getElementById("submit-currency").addEventListener("click",()=>{const e=document.getElementById("currency-result");let t=document.getElementById("amount").value;const n=document.getElementById("convertFrom").value,i=document.getElementById("convertTo").value;t===""&&(t=100),$(t,n,i,e)});const C=document.getElementById("convertFromSymbols"),S=document.getElementById("convertToSymbols");v(C,S);const a=document.getElementById("amiibos");B(a);let d=document.getElementById("search-amiibos");d.addEventListener("input",s);let f=document.getElementById("amiibo-name");f.addEventListener("input",s);let y=document.getElementById("amiibo-game");y.addEventListener("input",s);let p=document.getElementById("amiibo-series");p.addEventListener("input",s);function s(){let e=d.value,t=f.checked,n=y.checked,i=p.checked,o={nameOpt:t,gameSeriesOpt:n,amiiboSeriesOpt:i};console.log(`Will search for ${e}`,o),I(e,a,o)}document.getElementById("openAll").addEventListener("click",()=>{h("open")});document.getElementById("closeAll").addEventListener("click",()=>{h("close")});function h(e){let t=document.querySelectorAll("details");for(let n of t)e==="open"&&n.setAttribute("open",!0),e==="close"&&n.removeAttribute("open")}
