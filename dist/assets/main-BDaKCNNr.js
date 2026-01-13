const g="modulepreload",p=function(t){return"/"+t},f={},E=function(n,o,s){let d=Promise.resolve();if(o&&o.length>0){let c=function(r){return Promise.all(r.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var m=c;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),e=a?.nonce||a?.getAttribute("nonce");d=c(o.map(r=>{if(r=p(r),r in f)return;f[r]=!0;const u=r.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${h}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":g,u||(l.as="script"),l.crossOrigin="",l.href=r,e&&l.setAttribute("nonce",e),document.head.appendChild(l),u)return new Promise((b,v)=>{l.addEventListener("load",b),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${r}`)))})}))}function i(a){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=a,window.dispatchEvent(e),!e.defaultPrevented)throw a}return d.then(a=>{for(const e of a||[])e.status==="rejected"&&i(e.reason);return n().catch(i)})};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("chatContent"),n=document.getElementById("chatInput"),o=document.getElementById("chatSend");if(!t||!n||!o){console.warn("Chat elements not found");return}function s(){t.scrollTop=t.scrollHeight}function d(e){const c=document.createElement("div");c.className="chat-message chat-message--bot",c.innerHTML=`
      <div class="chat-bubble chat-bubble--bot">${e}</div>
      <div class="chat-author">Lukas</div>
    `,t.appendChild(c),s()}function i(e){const c=document.createElement("div");c.className="chat-message chat-message--user",c.innerHTML=`
      <div class="chat-bubble chat-bubble--user">${e}</div>
    `,t.appendChild(c),s()}function m(){const e=document.createElement("div");e.className="chat-message chat-message--intro",e.innerHTML=`
      <div class="chat-bot-header">
        <img src="public/assets/lukas.svg" alt="Lukas" width="42" height="42" />
      </div>

      <p class="chat-intro-text">
        Привет! Я Лукас — виртуальный менеджер. Я не человек, а ИИ.<br>
        Я могу предварительно оценить ваш проект, рассказать об этапах работы,
        помочь сформировать задачу или принять заказ
      </p>

      <div class="chat-intro-list">
        <p class="chat-intro-heading">Основные направления работы:</p>
        <ul>
          <li>Веб-дизайн</li>
          <li>Брендинг и корпоративный стиль</li>
          <li>Печатные материалы и каталоги</li>
          <li>Оформление соцсетей</li>
        </ul>
      </div>
    `,t.appendChild(e),s()}function a(){const e=n.value.trim();e&&(i(e),n.value="",setTimeout(()=>{d("Спасибо! Я уточню детали и помогу вам дальше 🙂")},600))}o.addEventListener("click",a),n.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),a())}),m()});const y={nav:{web:"Webdesign",branding:"Branding",letsTalk:"Let’s talk",about:"Über mich"},project:{details:"Details",close:"Projekt schließen"}};window.location.pathname.includes("chat")||E(()=>import("./projects-CC9y0fus.js"),[]);window.t=y;function L(){const t=document.querySelector(".site-header");if(!t)return;const n=t.querySelector(".header-right .nav-item"),o=t.querySelector(".author-name"),s=window.location.pathname,d=s==="/about.html"||s==="/about"||s.endsWith("/about.html");if(n&&(d?(n.textContent="Projekte",n.href="/"):(n.textContent="About",n.href="/about.html")),o&&o.tagName!=="A"){const i=document.createElement("a");i.href="/",i.className="author-name",i.textContent=o.textContent,o.replaceWith(i)}}document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".site-header")&&L();const t=document.querySelector(".site-header--chat");if(t){const o=t.querySelector(".burger"),s=document.querySelector(".mobile-menu");o&&s&&o.addEventListener("click",()=>{o.classList.toggle("is-active"),s.classList.toggle("is-open")})}const n=document.querySelector(".chat-input-field");n&&window.innerWidth<=1024&&n.blur()});
