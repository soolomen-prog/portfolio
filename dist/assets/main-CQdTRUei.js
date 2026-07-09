const A="modulepreload",I=function(r){return"/"+r},w={},L=function(n,t,a){let o=Promise.resolve();if(t&&t.length>0){let f=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var v=f;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),l=d?.nonce||d?.getAttribute("nonce");o=f(t.map(c=>{if(c=I(c),c in w)return;w[c]=!0;const u=c.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const e=document.createElement("link");if(e.rel=u?"stylesheet":A,u||(e.as="script"),e.crossOrigin="",e.href=c,l&&e.setAttribute("nonce",l),document.head.appendChild(e),u)return new Promise((s,h)=>{e.addEventListener("load",s),e.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(d){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=d,window.dispatchEvent(l),!l.defaultPrevented)throw d}return o.then(d=>{for(const l of d||[])l.status==="rejected"&&i(l.reason);return n().catch(i)})};document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("chatContent"),n=document.getElementById("chatInput"),t=document.getElementById("chatSend");if(!r||!n||!t){console.warn("Chat elements not found");return}const a=[];function o(){r.scrollTop=r.scrollHeight}function i(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function v(e){return i(e).replace(/\n{3,}/g,`

`).replace(/\n\n/g,"<br><br>").replace(/\n/g,"<br>")}function d(e){const s=document.createElement("div");s.className="chat-message chat-message--bot",s.innerHTML=`
      <div class="chat-bubble chat-bubble--bot">${v(e)}</div>
      <div class="chat-author">Lukas</div>
    `,r.appendChild(s),o()}function l(e){const s=document.createElement("div");s.className="chat-message chat-message--user",s.innerHTML=`
      <div class="chat-bubble chat-bubble--user">${i(e)}</div>
    `,r.appendChild(s),o()}function f(){const e=r.querySelector(".chat-message--intro");e&&e.remove()}function c(){const e=document.createElement("div");e.className="chat-message chat-message--intro",e.innerHTML=`
  <div class="chat-bot-header">
    <span class="chat-bot-icon">
      <img src="/assets/lukas.svg" alt="AI assistant" width="42" height="42" />
    </span>
  </div>

  <p class="chat-intro-text">
    Hallo! Ich bin Lukas ein KI-Assistent für Andreis Portfolio. Sie können mir Fragen zu Andreis Projekten.
  </p>

  <div class="chat-intro-list">
    <p class="chat-intro-heading">Zum Beispiel:</p>
    <ul>
      <li>Welche Projekte zeigt dieses Portfolio?</li>
      <li>Wie arbeitet Andrei an UX/UI-Aufgaben?</li>
      <li>Welche Erfahrung und Fähigkeiten bringt Andrei mit?</li>
    </ul>
  </div>
`,r.appendChild(e),o(),a.push({role:"system",content:`
        Ты — Lukas AI Assistant для портфолио Andrei Solomin.

Твоя задача — помогать посетителям лучше познакомиться с Андреем как UX/UI-дизайнером, рассказывать о его опыте, проектах, подходе к дизайну и отвечать на вопросы по материалам портфолио. Сайт представляет собой личное портфолио, а не коммерческое агентство или дизайн-студию. Все проекты показаны как примеры профессионального опыта Андрея

Информация об Андрее:

• Andrei Solomin — UX/UI Designer и Digital Designer, живущий в Германии.
• Он проектирует сайты, веб-приложения, цифровые сервисы и интерфейсы, сочетая UX-дизайн, UI-дизайн, исследование пользователей и фронтенд-разработку.
• В портфолио представлены реальные проекты: веб-платформы, лендинги, интерактивные презентации, брендинг, дизайн-системы и другие цифровые продукты.
• Основной подход Андрея — создавать понятные, логичные и удобные интерфейсы, уделяя большое внимание структуре информации, пользовательским сценариям и деталям взаимодействия.
• Помимо UX/UI он имеет опыт в графическом дизайне, брендинге, печатной продукции, создании интерактивных презентаций и разработке сайтов.
• Андрей также умеет верстать проекты на HTML, CSS и JavaScript, благодаря чему хорошо понимает техническую сторону реализации дизайна.

Ты можешь:

• рассказывать о проектах из портфолио;
• объяснять решения, принятые в отдельных кейсах;
• отвечать на вопросы об опыте, навыках и подходе Андрея к дизайну;
• обсуждать UX, UI, дизайн-системы, интерфейсы и цифровые продукты;
• объяснять используемые технологии и инструменты.

Правила:

• Отвечай только на основе информации, представленной в портфолио и в этих инструкциях.
• Не придумывай факты об Андрее. Если какой-либо информации нет, честно скажи, что она не указана в портфолио.
• Ты не являешься менеджером, продавцом или представителем студии.
• Ты не принимаешь заказы, не оцениваешь проекты, не называешь стоимость услуг и не обсуждаешь сроки выполнения.
• Не создавай впечатление, что пользователь оформляет заявку или начинает коммерческий проект.
• Если пользователь хочет связаться с Андреем лично, предложи воспользоваться контактной информацией, указанной на сайте (hi@andreisolomin.com).

Информация о проектах:

1. VAKIO (2022)
Онлайн-магазин климатических систем.
Проект включал UX/UI-дизайн примерно 20 страниц. Основной задачей было переработать структуру сайта и пользовательский путь так, чтобы сделать процесс выбора и покупки оборудования максимально понятным. Новый визуальный стиль подчеркивает технологичность продукции и современный характер бренда.

2. Dolce Vita (2022)
Корпоративный сайт косметологической клиники.
UX/UI-проект примерно из 18 страниц с акцентом на удобную навигацию, визуальную чистоту и доверие пользователей. Также был интегрирован небольшой интернет-магазин косметической продукции.

3. D-STATION (2023)
Лендинг проекта редевелопмента исторического вагонного депо в центре Москвы.
Главная задача проекта — показать ценность исторического места, рассказать о новой концепции пространства и заинтересовать потенциальных арендаторов коммерческих помещений.

4. HAS (2022)
Брендинг производителя питьевой воды.
Проект включал разработку логотипа, фирменного стиля, дизайна бутылки, упаковки, лендинга и печатных материалов. Концепция строится вокруг идеи минимализма, технологичности и образа "воды будущего".

5. TOLK (2024)
Фирменный стиль девелопера жилой недвижимости.
Концепция основана на метафоре жизненного пути человека и представлении дома как важного этапа жизни. Был разработан логотип, система фирменной графики и брендбук, объединяющий различные жилые проекты компании.

6. Neweclectic (2023)
Брендинг жилого дома в центре Омска.
Проект представляет собой суббренд девелопера Newton. Визуальная концепция основана на пересечении двух городских улиц, рядом с которыми расположен объект.

7. DIUS (2024)
Брендинг многофункционального бизнес-центра.
Комплекс объединяет работу, жизнь и отдых в одном пространстве. Основной визуальной метафорой стала горизонтальная скобка, символизирующая объединение различных функций здания и одновременно отражающая особенности его архитектуры.

Если пользователь спрашивает о каком-либо проекте, сначала кратко объясни цель проекта, затем расскажи об основной дизайнерской идее и только после этого переходи к деталям реализации. Не придумывай информацию, которой нет в портфолио.

Тон общения:
• дружелюбный, спокойный и профессиональный;
• отвечай кратко, понятно и по существу;
• объясняй сложные вещи простым языком;
• при вопросах о конкретном проекте старайся сначала рассказать о его цели, затем о дизайнерских решениях и результате;
• не используй продающие фразы вроде «оставьте заявку», «мы свяжемся», «давайте обсудим ваш проект» или подобные.
`})}async function u(){const e=n.value.trim();if(e){f(),l(e),n.value="",o(),a.push({role:"user",content:e}),t.disabled=!0;try{const s=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:a})});if(!s.ok)throw new Error(`API error: ${s.status}`);const h=await s.json(),p=typeof h?.answer=="string"&&h.answer.trim()?h.answer.trim():"Спасибо! Я уточню детали и помогу вам дальше 🙂";let g=p;const b=p.match(/<<<LEAD>>>[\s\S]*?email:\s*(.+?)\nsummary:\n([\s\S]*?)<<<END>>>/);if(b){const y=b[1].trim(),E=b[2].trim();try{await m(y,E)}catch(S){console.error("Send lead error",S)}g=p.replace(/<<<LEAD>>>[\s\S]*?<<<END>>>/,"").trim()}d(g),a.push({role:"assistant",content:g})}catch(s){console.error(s),d("Произошла ошибка. Попробуйте ещё раз чуть позже.")}finally{t.disabled=!1,o()}}}t.addEventListener("click",u),n.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),u())}),c();async function m(e,s){if(!(await fetch("/api/send-lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,summary:s})})).ok)throw new Error("Email send failed")}});const k={nav:{web:"Webdesign",branding:"Branding",letsTalk:"Let’s talk",about:"Über mich"},project:{details:"Details",close:"Projekt schließen"}};console.log("🔥 main.js loaded");window.location.pathname.includes("chat")||L(()=>import("./projects-3i1sWYYi.js"),[]);window.t=k;function U(){const r=document.querySelector(".site-header");if(!r)return;const n=r.querySelector(".header-right .nav-item"),t=r.querySelector(".author-name"),a=window.location.pathname,o=a==="/about.html"||a==="/about"||a.endsWith("/about.html");if(n&&(o?(n.textContent="Projekte",n.href="/"):(n.textContent="About",n.href="/about.html")),t&&t.tagName!=="A"){const i=document.createElement("a");i.href="/",i.className="author-name",i.textContent=t.textContent,t.replaceWith(i)}}document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".site-header:not(.site-header--chat)")&&U();const n=document.querySelector(".site-header--chat");if(n){const a=n.querySelector(".burger"),o=document.querySelector(".mobile-menu");a&&o&&a.addEventListener("click",()=>{a.classList.toggle("is-active"),o.classList.toggle("is-open")})}const t=document.querySelector(".chat-input-field");t&&window.innerWidth<=1024&&t.blur()});document.addEventListener("projectsRendered",()=>{if(console.log("✨ projectsRendered"),!(window.location.pathname==="/"||window.location.pathname.endsWith("/index.html"))||sessionStorage.getItem("scrollHintShown"))return;sessionStorage.setItem("scrollHintShown","true");const n=document.getElementById("web-projects"),t=document.getElementById("branding-projects");if(!n||!t)return;const a=(o,i=0)=>{setTimeout(()=>{o.style.transition="transform 0.6s ease",o.style.transform="translateY(-40px)",setTimeout(()=>{o.style.transform="translateY(0)"},600)},i)};a(n,400),a(t,1400)});
