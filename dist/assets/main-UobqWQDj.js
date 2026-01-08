const d=[{id:"vakio",category:"web",title:"VAKIO",subtitle:"Online-Shop für Klimasysteme",features:["UI — UX Design","Über 20 Seiten"],year:2022,coverImage:"/img/vakio/cover.jpg",homeDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",caseIntro:{innerImage:"/img/vakio/intro.jpg",taskTitle:"Projectaufgabe",taskText:"Den Corporate-Website eines Unternehmens für Klimatechnik aktualisieren."},caseBlocks:[{type:"image",layout:"full",src:"/img/vakio/full.jpg"},{type:"video",layout:"full",src:"https://player.vimeo.com/video/794384040"},{type:"text",layout:"right",content:["Es wurde eine vollständig neue Sitemap entwickelt.","Der Fokus lag auf Conversion und Klarheit."]},{type:"images",layout:"two",left:"/img/vakio/2left.jpg",right:"/img/vakio/2right.jpg"},{type:"image",layout:"left",src:"/img/vakio/left.jpg"},{type:"image",layout:"right",src:"/img/vakio/right.jpg"}],visibleOnHome:!0,order:1},{id:"has",category:"branding",title:"HAS",subtitle:"Türkisches Trinkwasser",features:["Brand Identity","Packaging"],year:2022,coverImage:"/img/has/cover.jpg",homeDescription:"Kurze Beschreibung für die Startseite.",caseIntro:{innerImage:"/img/has/intro.jpg",taskTitle:"Projectaufgabe",taskText:"Entwicklung einer Markenidentität für Trinkwasser."},caseBlocks:[{type:"image",layout:"full",src:"/img/has/full.jpg"},{type:"text",layout:"right",content:["Brand Design von Grund auf.","Packaging, Print, Digital."]},{type:"image",layout:"right",src:"/img/has/right.jpg"}],visibleOnHome:!0,order:1}],h={id:"vakio",category:"web",title:"VAKIO",subtitle:"Online-Shop für Klimasysteme",features:["UI — UX Design","Über 20 Seiten"],year:"2022",order:1,visibleOnHome:!0,coverImage:"/img/vakio/cover.jpg",caseIntro:{innerImage:"/img/vakio/intro.jpg",taskTitle:"Projectaufgabe",taskText:"Den Corporate-Website eines Unternehmens für Klimatechnik aktualisieren. Ziel war es, die Website zu modernisieren und die Möglichkeit zum Online-Kauf von Geräten hinzuzufügen, also die Funktionalität eines Online-Shops zu integrieren"},caseBlocks:[{type:"text",layout:"right",content:["Es wurde eine vollständig neue Sitemap entwickelt, mit dem Fokus darauf, Nutzer häufiger auf die Produktseiten zu führen und sie so zum Kauf zu motivieren.","In der neuen Seitenstruktur wurde für jede Zielgruppe eine eigene Landingpage erstellt, die die für diese Zielgruppe besonders relevanten Vorteile der Produkte und des Unternehmens beschreibt.","Für den Business-Bereich wurden separate Seiten für Hotels, Bauträger und kleine Unternehmen erstellt, während für Privatkunden eine eigene Seite „Für Zuhause“ vorgesehen wurde"]},{type:"image",layout:"full",src:"/img/vakio/01.jpg"},{type:"text",layout:"right",content:["Es wurden über 20 Seiten der Website gestaltet, wobei Struktur und Funktionalität vollständig überarbeitet wurden.","Alle Seiten wurden mit einem starken Fokus auf Storytelling konzipiert und erzählen die Geschichte der Produkte des Unternehmens, mit besonderem Augenmerk auf deren Vorteile gegenüber den Wettbewerbern"]},{type:"image",layout:"full",src:"/img/vakio/02.jpg"},{type:"text",layout:"right",content:["Im nächsten Schritt wurde ein visuelles Gestaltungskonzept für die Website entwickelt — von der Auswahl der Farbpalette, Formen und Schriften bis hin zum Stil der Grafiken, Illustrationen sowie der visuellen Darstellung der Produkt-Renderings im Katalog"]},{type:"image",layout:"full",src:"/img/vakio/03.jpg"},{type:"video",layout:"full",src:"https://player.vimeo.com/video/794384040"},{type:"image",layout:"full",src:"/img/vakio/04.jpg"},{type:"text",layout:"right",content:["—"]},{type:"image",layout:"full",src:"/img/vakio/05.jpg"},{type:"image",layout:"full",src:"/img/vakio/06.jpg"},{type:"image",layout:"full",src:"/img/vakio/07.jpg"},{type:"text",layout:"right",content:["—"]},{type:"image",layout:"full",src:"/img/vakio/08.jpg"}]},p={vakio:h};function y(e){const t=p[e];if(!t){console.warn(`Case "${e}" not found`);return}k(t),b(t),w(t),j(t.blocks)}function k(e){const t=document.querySelector(".case-title-text");t&&(t.textContent=e.header.title)}function b(e){const t=document.querySelector(".case-intro-title"),n=document.querySelector(".case-intro-features"),i=document.querySelector(".case-intro-year");t&&(t.textContent=e.header.subtitle),n&&(n.textContent=e.header.info),i&&(i.textContent=e.header.year);const a=document.querySelector(".case-intro-cover"),r=document.querySelector(".case-intro-image");a&&(a.innerHTML=`<img src="${e.intro.cover}" alt="" />`),r&&(r.innerHTML=`<img src="${e.intro.image}" alt="" />`)}function w(e){const t=document.querySelector(".case-task-heading"),n=document.querySelector(".case-task-text");t&&(t.textContent=e.task.title),n&&(n.textContent=e.task.text)}function j(e){const t=document.querySelector(".case-admin");t&&(t.innerHTML="",e.forEach(n=>{let i=null;switch(n.type){case"text-right":i=x(n);break;case"image-full":i=S(n);break;case"video-full":i=E(n);break;default:console.warn("Unknown block type:",n.type)}i&&t.appendChild(i)}))}function x(e){const t=document.createElement("section");return t.className="case-intro-row",t.innerHTML=`
    <div class="case-col-left"></div>
    <div class="case-col-right">
      <div class="case-task-text">${e.text}</div>
    </div>
  `,t}function S(e){const t=document.createElement("section");return t.className="case-intro-row",t.innerHTML=`
    <div class="case-col-left"></div>
    <div class="case-col-right">
      <img src="${e.src}" alt="" />
    </div>
  `,t}function E(e){const t=document.createElement("section");return t.className="case-intro-row",t.innerHTML=`
    <div class="case-col-left"></div>
    <div class="case-col-right">
      <div class="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/${e.vimeoId}"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  `,t}function m(e){return`
    <article 
      class="project-card"
      data-side="${e.category==="web"?"left":"right"}"
      data-id="${e.id}"
    >
      <a href="#" class="project-image">
        <img src="${e.coverImage}" alt="${e.title}">
      </a>

      <div class="project-meta">
        <div class="project-meta-left">
          <h3 class="project-name">${e.title}</h3>
        </div>

        <div class="project-meta-right">
          <div class="project-title">${e.subtitle}</div>
          <div class="project-features">${e.features.join(" / ")}</div>
          <div class="project-year">${e.year}</div>
          <p class="project-description">${e.homeDescription??""}</p>
          <span class="project-link">Details</span>
        </div>
      </div>
    </article>
  `}function L(){const e=document.getElementById("web-projects"),t=document.getElementById("branding-projects");if(!e||!t)return;const n=d.filter(i=>i.visibleOnHome);n.filter(i=>i.category==="web").sort((i,a)=>i.order-a.order).forEach(i=>e.insertAdjacentHTML("beforeend",m(i))),n.filter(i=>i.category==="branding").sort((i,a)=>i.order-a.order).forEach(i=>t.insertAdjacentHTML("beforeend",m(i))),I()}const s=document.getElementById("case-panel"),c=document.getElementById("case-overlay");function g(e,t){y(t.id),s.classList.remove("hidden","from-left","from-right","active"),c.classList.remove("hidden","from-left","from-right","active");const n=e==="left"?"from-left":"from-right";s.classList.add(n),c.classList.add(n);const i=d.filter(o=>o.category===t.category).sort((o,l)=>o.order-l.order),a=i.findIndex(o=>o.id===t.id),r=i[(a+1)%i.length];if(r){document.querySelector(".case-next-title").textContent=r.title,document.querySelector(".case-next-features").textContent=r.features.join(" / "),document.querySelector(".case-next-year").textContent=r.year;const o=document.querySelector(".case-next-image"),l=document.querySelector(".case-next-link");o.innerHTML=`<img src="${r.coverImage}" alt="">`;const u=v=>{v.preventDefault(),g(r.category==="web"?"left":"right",r)};l.onclick=u,o.onclick=u}s.offsetHeight,s.classList.add("active"),c.classList.add("active")}function f(){s.classList.remove("active"),c.classList.remove("active"),setTimeout(()=>{s.classList.add("hidden"),c.classList.add("hidden")},450)}c.addEventListener("click",f);document.addEventListener("click",e=>{e.target.closest(".case-close")&&f()});function I(){document.querySelectorAll(".project-card").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.dataset.id,i=e.dataset.side,a=d.find(r=>r.id===n);a&&g(i,a)})})}L();const C={nav:{web:"Webdesign",branding:"Branding",letsTalk:"Let’s talk",about:"Über mich"},project:{details:"Details",close:"Projekt schließen"}};window.t=C;function T(){const e=document.querySelector(".site-header");if(!e)return;const t=e.querySelector(".header-right .nav-item"),n=e.querySelector(".author-name"),i=window.location.pathname,a=i==="/about.html"||i==="/about"||i.endsWith("/about.html");if(t&&(a?(t.textContent="Projekte",t.href="/"):(t.textContent="About",t.href="/about.html")),n&&n.tagName!=="A"){const r=document.createElement("a");r.href="/",r.className="author-name",r.textContent=n.textContent,n.replaceWith(r)}}document.addEventListener("DOMContentLoaded",T);
