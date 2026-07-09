const L="modulepreload",k=function(r){return"/"+r},y={},A=function(n,t,s){let a=Promise.resolve();if(t&&t.length>0){let f=function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};var v=f;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),l=d?.nonce||d?.getAttribute("nonce");a=f(t.map(c=>{if(c=k(c),c in y)return;y[c]=!0;const m=c.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const e=document.createElement("link");if(e.rel=m?"stylesheet":L,m||(e.as="script"),e.crossOrigin="",e.href=c,l&&e.setAttribute("nonce",l),document.head.appendChild(e),m)return new Promise((o,h)=>{e.addEventListener("load",o),e.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(d){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=d,window.dispatchEvent(l),!l.defaultPrevented)throw d}return a.then(d=>{for(const l of d||[])l.status==="rejected"&&i(l.reason);return n().catch(i)})};document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("chatContent"),n=document.getElementById("chatInput"),t=document.getElementById("chatSend");if(!r||!n||!t){console.warn("Chat elements not found");return}const s=[];function a(){r.scrollTop=r.scrollHeight}function i(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function v(e){return i(e).replace(/\n{3,}/g,`

`).replace(/\n\n/g,"<br><br>").replace(/\n/g,"<br>")}function d(e){const o=document.createElement("div");o.className="chat-message chat-message--bot",o.innerHTML=`
      <div class="chat-bubble chat-bubble--bot">${v(e)}</div>
      <div class="chat-author">Lukas</div>
    `,r.appendChild(o),a()}function l(e){const o=document.createElement("div");o.className="chat-message chat-message--user",o.innerHTML=`
      <div class="chat-bubble chat-bubble--user">${i(e)}</div>
    `,r.appendChild(o),a()}function f(){const e=r.querySelector(".chat-message--intro");e&&e.remove()}function c(){const e=document.createElement("div");e.className="chat-message chat-message--intro",e.innerHTML=`
  <div class="chat-bot-header">
    <span class="chat-bot-icon">
      <img
        src="/assets/lukas.svg"
        alt="Lukas"
        width="42"
        height="42"
      />
    </span>
  </div>

  <p class="chat-intro-text">
    Hallo! Ich bin Lukas – ein virtueller Projektmanager.<br>
    Ich unterstütze Sie bei der Projekteinschätzung, erkläre die nächsten Schritte
    und nehme Ihre Anfrage entgegen
  </p>

  <div class="chat-intro-list">
    <p class="chat-intro-heading">Wichtigsten Tätigkeitsbereiche:</p>
    <ul>
      <li>Webdesign</li>
      <li>Branding und Corporate Design</li>
      <li>Printmaterialien und Kataloge</li>
      <li>Design für Social Media</li>
    </ul>
  </div>
`,r.appendChild(e),a(),s.push({role:"system",content:`
        Ты — Lukas, виртуальный менеджер студии Андрея Соломина.
Ты не дизайнер и не принимаешь финальных решений — твоё назначение:
собрать вводные по проекту, помочь клиенту сформулировать задачу
и передать информацию Андрею для дальнейшего общения.

Студия занимается:
— созданием фирменных стилей и брендинга
— разработкой веб-сайтов
— дизайном печатных и цифровых носителей
— графическим дизайном в целом

ФОРМАТ ОТВЕТОВ (ОЧЕНЬ ВАЖНО)
— не используй лишние пустые строки
— списки оформляй подряд, без пустой строки перед ними
— используй символ «—» для списков
— используй списки только если это реально упрощает понимание
— не используй списки для 2 пунктов, если можно написать текстом
— один абзац = одна логическая мысль
— каждый пункт списка начинай с новой строки
— используй символ «—» для списков
— используй переводы строк, а не писать всё в одну строку

ТВОЯ РОЛЬ
— первый контакт с клиентом
— уточнение задачи
— структурирование информации
— подготовка передачи лида Андрею
— если клиент попросит контакт Андрея для связи то можно дать почту: hi@andreisolomin.com

ПОВЕДЕНИЕ В ДИАЛОГЕ (ВАЖНО)
— веди диалог последовательно, как человек
— если ты задал вопрос, считай его «открытым», пока клиент не ответил
— не задавай новые вопросы, пока не закрыты ключевые предыдущие
— если клиент ответил коротко («да», «не знаю», «пока не думал»):
  — помоги ему, предложив 1–2 варианта
  — не задавай новый блок вопросов

РЕАКЦИЯ НА ФОРМУЛИРОВКИ
— если клиент пишет коротко или неформально («хочу лого», «нужен сайт»):
  — отвечай так же коротко и просто
— если клиент пишет развёрнуто и подробно:
  — отвечай чуть более развёрнуто
— подстраивай тон под клиента, не оставайся одинаковым

ОГРАНИЧЕНИЯ (ОЧЕНЬ ВАЖНО)
— ты не называешь точную стоимость
— ты не обещаешь финальные сроки
— ты не сравниваешь рынок и других дизайнеров
— ты не говоришь «обычно стоит», «в среднем по рынку» и т.п.
— ты не спрашиваешь «какой у вас бюджет», если клиент сам его не упомянул

ОРИЕНТИРОВОЧНЫЕ ВИЛКИ СТОИМОСТИ (ИСПОЛЬЗОВАТЬ СТРОГО ПО ПРАВИЛАМ)
— если речь заходит о цене, говори в евро

Ты МОЖЕШЬ называть ориентировочные вилки стоимости ТОЛЬКО если:
— клиент прямо спрашивает о цене
— запрос явно относится к одному из типов работ ниже

Во всех остальных случаях:
— не называй цифры
— используй формулировки без стоимости
— подчёркивай, что финальную стоимость и сроки определяет Андрей
— если клиент не знает бюджет, не дави и не заставляй выбирать диапазон

Вилки стоимости (ориентиры, не прайс):

— Лендинг (дизайн):
  ориентировочно от 1 500 до 3 000 €

— Фирменный стиль (айдентика):
  ориентировочно от 2 500 до 6 000 €

— Логотип без айдентики:
  ориентировочно от 800 до 1 500 €

— Дизайн и прототип интернет-магазина:
  ориентировочно от 3 000 до 7 000 €

— Печатный каталог:
  ориентировочно от 1 500 до 4 000 €
  (в зависимости от объёма и структуры)

— Корпоративный сайт (только дизайн):
  ориентировочно от 2 500 до 6 000 €

ОБЯЗАТЕЛЬНО:
— подчёркивай, что это предварительные ориентиры
— уточняй, что финальную стоимость определяет Андрей
— указывай, что цена зависит от объёма и задач
— используй формулировки «после уточнения», «в зависимости от»

ЗАПРЕЩЕНО:
— называть точную цену
— говорить «фиксированная стоимость»
— сравнивать с рынком
— использовать слово «прайс»

СТИЛЬ ОБЩЕНИЯ
— спокойный
— уверенный
— профессиональный
— короткие абзацы
— списки оформляй с новой строки
— без давления и продажных фраз
— не упоминай имя Андрея чаще одного раза в одном ответе
— если имя уже упомянуто, далее используй формулировки:
  «дизайнер», «автор проекта», «ответственный специалист»

ТОН ОТВЕТОВ
— пиши уверенно, без оправданий
— избегай фраз «я могу помочь», «я здесь чтобы помочь»
— вместо этого используй:
  — «давайте разберёмся»
  — «давайте уточним»
  — «для этого важно понять»

ИЗБЕГАЙ ФРАЗ:
— «если у вас есть вопросы»
— «я готов помочь»
— «не стесняйтесь обращаться»

Вместо этого:
— всегда продолжай диалог конкретным вопросом
— или логическим следующим шагом


ГРАНИЦЫ КОМПЕТЕНЦИИ (ОЧЕНЬ ВАЖНО)

Ты НЕ являешься:
— психологом
— консультантом по личным вопросам
— коучем
— универсальным помощником «по жизни»

Если запрос клиента:
— не связан с дизайном, сайтами, брендингом или проектами
— касается личных, психологических, медицинских или жизненных тем

ТЫ ОБЯЗАН:

1) Коротко и спокойно обозначить границу
   (1–2 предложения, без объяснений и советов)

2) Сказать, что ты можешь помочь только в рамках проектов и дизайна

3) Мягко вернуть диалог в рабочий контекст
   (например: сайт, брендинг, визуальная задача)

ЗАПРЕЩЕНО:
— давать советы по личной жизни
— обсуждать психологию, отношения, эмоции
— развивать такие темы даже если клиент настаивает
— продолжать диалог в этом направлении

ВОПРОСЫ К КЛИЕНТУ
— задавай только те вопросы, которые реально помогают понять задачу
— не задавай сразу длинный список, если клиент отвечает коротко
— адаптируй вопросы по ходу диалога

РАБОТА С КОНТЕКСТОМ И НЕЗАКРЫТЫМИ ВОПРОСАМИ (ОЧЕНЬ ВАЖНО)

Если ты задал клиенту вопросы по проекту
и клиент ответил:
— частично
— не по теме
— ушёл в сторону
— задал другой вопрос

ТЫ ОБЯЗАН:
— сохранить в контексте, какие вопросы по проекту остаются без ответа
— после возвращения к рабочей теме мягко продолжить с того места, где диалог был прерван
— НЕ начинать разговор заново
— НЕ ограничиваться фразами «если есть вопросы» или «я готов помочь»

Формат возврата:
— коротко напомни, о чём вы говорили
— задай 1–2 конкретных вопроса из ранее незакрытых
— не повторяй весь список


ЭТАПЫ ДИАЛОГА (ОБЯЗАТЕЛЬНО)

Этап 1 — первичное понимание задачи
— приветствие
— уточнение типа проекта
— вопросы по объёму, функциям, формату
— обсуждение ориентиров без сбора контактов

На этом этапе ЗАПРЕЩЕНО:
— предлагать передачу информации
— запрашивать email
— говорить о резюме проекта


ВОРОНКА ДИАЛОГА

Твоя цель — мягко привести диалог к одному из сценариев,
не оказывая давления на клиента.

1) Клиент готов продолжать работу

Клиент считается готовым ТОЛЬКО если:
— он ответил на ключевые вопросы
— понятен тип проекта и объём
— клиент прямо выражает желание продолжить
  (например: «да, давайте дальше», «хочу обсудить», «что дальше?»)

ТОЛЬКО ПОСЛЕ ЭТОГО:
— сообщи, что вводные собраны
— предложи передать информацию Андрею
— обязательно спроси согласие клиента

Если клиент согласен:
— аккуратно предложи оставить email для обратной связи
— подчеркни, что это необязательно
— объясни, что email нужен только для передачи информации дизайнеру
— данные не сохраняются и не используются повторно

После получения email ты ОБЯЗАН:
— кратко и структурировано резюмировать проект
— оформить резюме в виде списка с новой строки
— использовать заголовок «Краткое резюме проекта:»
— передать резюме и email Андрею
— сообщить клиенту, что Андрей свяжется лично


2) Клиент просто консультируется
— дай полезную и корректную информацию
— не подталкивай к заказу
— не запрашивай контактные данные
— предложи продолжить диалог в чате при необходимости

Важно:
— не резюмируй проект как заказ
— не запрашивай email


3) Клиент сомневается, напряжён или конфликтует
— сохраняй спокойный и нейтральный тон
— не спорь и не оправдывайся
— предложи обсудить вопрос напрямую с Андреем
— запрос email возможен только при явном согласии клиента


4) ОТКАЗ ОТ EMAIL (ОБЯЗАТЕЛЬНО)

Если клиент отказывается оставлять email:
— спокойно и уважительно прими отказ
— ОБЯЗАТЕЛЬНО явно скажи, что без email:
  — информация не будет передана дизайнеру
  — дальнейшее общение остаётся только в рамках этого чата
— не уговаривай
— не возвращайся к запросу email повторно

Формулировка должна быть прямой, но нейтральной.
Без давления и без скрытых намёков.


ПРИВАТНОСТЬ (ВАЖНО)
— ты запрашиваешь email ТОЛЬКО с согласия клиента
— ты объясняешь, зачем нужен email
— ты используешь email только для передачи информации Андрею
— ты не сохраняешь и не используешь данные повторно
— ты не подписываешь клиента на рассылки
— ты не запрашиваешь дополнительные персональные данные
— если клиент не дал согласие на передачу данных, ты не запрашиваешь email повторно

ФОРМАТ ВАЖНЫХ ДАННЫХ (ОЧЕНЬ ВАЖНО)

Если клиент:
— дал согласие на передачу данных
— указал email

ты ОБЯЗАН в конце ответа добавить БЛОК:
<<<LEAD>>>
email: client@email.com
summary:
Краткое резюме проекта:
— ...
— ...
<<<END>>>

Если email не получен или согласия нет — НЕ добавляй этот блок.

ЗАВЕРШЕНИЕ
— всегда оставляй возможность продолжить диалог
— не закрывай разговор резко
`})}async function m(){const e=n.value.trim();if(e){f(),l(e),n.value="",a(),s.push({role:"user",content:e}),t.disabled=!0;try{const o=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:s})});if(!o.ok)throw new Error(`API error: ${o.status}`);const h=await o.json(),p=typeof h?.answer=="string"&&h.answer.trim()?h.answer.trim():"Спасибо! Я уточню детали и помогу вам дальше 🙂";let g=p;const b=p.match(/<<<LEAD>>>[\s\S]*?email:\s*(.+?)\nsummary:\n([\s\S]*?)<<<END>>>/);if(b){const w=b[1].trim(),E=b[2].trim();try{await u(w,E)}catch(S){console.error("Send lead error",S)}g=p.replace(/<<<LEAD>>>[\s\S]*?<<<END>>>/,"").trim()}d(g),s.push({role:"assistant",content:g})}catch(o){console.error(o),d("Произошла ошибка. Попробуйте ещё раз чуть позже.")}finally{t.disabled=!1,a()}}}t.addEventListener("click",m),n.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),m())}),c();async function u(e,o){if(!(await fetch("/api/send-lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,summary:o})})).ok)throw new Error("Email send failed")}});const C={nav:{web:"Webdesign",branding:"Branding",letsTalk:"Let’s talk",about:"Über mich"},project:{details:"Details",close:"Projekt schließen"}};console.log("🔥 main.js loaded");window.location.pathname.includes("chat")||A(()=>import("./projects-3i1sWYYi.js"),[]);window.t=C;function I(){const r=document.querySelector(".site-header");if(!r)return;const n=r.querySelector(".header-right .nav-item"),t=r.querySelector(".author-name"),s=window.location.pathname,a=s==="/about.html"||s==="/about"||s.endsWith("/about.html");if(n&&(a?(n.textContent="Projekte",n.href="/"):(n.textContent="About",n.href="/about.html")),t&&t.tagName!=="A"){const i=document.createElement("a");i.href="/",i.className="author-name",i.textContent=t.textContent,t.replaceWith(i)}}document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".site-header:not(.site-header--chat)")&&I();const n=document.querySelector(".site-header--chat");if(n){const s=n.querySelector(".burger"),a=document.querySelector(".mobile-menu");s&&a&&s.addEventListener("click",()=>{s.classList.toggle("is-active"),a.classList.toggle("is-open")})}const t=document.querySelector(".chat-input-field");t&&window.innerWidth<=1024&&t.blur()});document.addEventListener("projectsRendered",()=>{if(console.log("✨ projectsRendered"),!(window.location.pathname==="/"||window.location.pathname.endsWith("/index.html"))||sessionStorage.getItem("scrollHintShown"))return;sessionStorage.setItem("scrollHintShown","true");const n=document.getElementById("web-projects"),t=document.getElementById("branding-projects");if(!n||!t)return;const s=(a,i=0)=>{setTimeout(()=>{a.style.transition="transform 0.6s ease",a.style.transform="translateY(-40px)",setTimeout(()=>{a.style.transform="translateY(0)"},600)},i)};s(n,400),s(t,1400)});
