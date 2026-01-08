const l=[{id:"vakio",category:"web",title:"VAKIO",subtitle:"Online-Shop für Klimasysteme",features:["UI — UX Design","Über 20 Seiten"],year:2022,coverImage:"/img/vakio/cover.jpg",homeDescription:"Website für Klimatechnik mit integriertem Online-Shop.",side:"left",visibleOnHome:!0,order:1},{id:"dolcevita",category:"web",title:"Dolcevita",subtitle:"Website für Kosmetologie",features:["UI-Design","Über 18 Seiten"],year:2022,coverImage:"/img/dolcevita/cover.jpg",homeDescription:"Unternehmenswebsite für eine Kosmetikklinik.",side:"left",visibleOnHome:!0,order:2},{id:"has",category:"branding",title:"HAS",subtitle:"Türkisches Trinkwasser",features:["Brand Identity","Packaging"],year:2022,coverImage:"/img/has/cover.jpg",homeDescription:"Brand Identity und Verpackungsdesign für Trinkwasser.",side:"right",visibleOnHome:!0,order:1}],b={id:"vakio",category:"webdesign",header:{title:"VAKIO",subtitle:"Online-Shop für Klimasysteme",info:"UI — UX Design / Über 20 Seiten",year:"2022"},intro:{cover:"/img/vakio/cover.jpg",image:"/img/vakio/intro.jpg"},task:{title:"Projectaufgabe",text:`Den Corporate-Website eines Unternehmens für Klimatechnik aktualisieren.
Ziel war es, die Website zu modernisieren und die Möglichkeit zum Online-Kauf von Geräten hinzuzufügen,
also die Funktionalität eines Online-Shops zu integrieren`},blocks:[{type:"text-right",text:`Es wurde eine vollständig neue Sitemap entwickelt, mit dem Fokus darauf,
Nutzer häufiger auf die Produktseiten zu führen und sie so zum Kauf zu motivieren.
In der neuen Seitenstruktur wurde für jede Zielgruppe eine eigene Landingpage erstellt,
die die für diese Zielgruppe besonders relevanten Vorteile der Produkte und des Unternehmens beschreibt.
Für den Business-Bereich wurden separate Seiten für Hotels, Bauträger und kleine Unternehmen erstellt,
während für Privatkunden eine eigene Seite „Für Zuhause“ vorgesehen wurde`},{type:"image-full",src:"/img/vakio/01.jpg"},{type:"text-right",text:`Es wurden über 20 Seiten der Website gestaltet, wobei Struktur und Funktionalität vollständig
überarbeitet wurden. Alle Seiten wurden mit einem starken Fokus auf Storytelling konzipiert
und erzählen die Geschichte der Produkte des Unternehmens,
mit besonderem Augenmerk auf deren Vorteile gegenüber den Wettbewerbern`},{type:"image-full",src:"/img/vakio/02.jpg"},{type:"text-right",text:`Im nächsten Schritt wurde ein visuelles Gestaltungskonzept für die Website entwickelt —
von der Auswahl der Farbpalette, Formen und Schriften bis hin zum Stil der Grafiken,
Illustrationen sowie der visuellen Darstellung der Produkt-Renderings im Katalog`},{type:"image-full",src:"/img/vakio/03.jpg"},{type:"video-full",vimeoId:"794384040"},{type:"image-full",src:"/img/vakio/04.jpg"},{type:"text-right",text:"Eine leichte, klare und verständliche Produktseite vermittelt ein Gefühl von Innovation und modernen Technologien. Jede Produktseite ist eine kurze Geschichte über die Werte und Vorteile des Produkts, ergänzt durch Visualisierungen, die zeigen, wie das Produkt in einem realen Wohninterieur aussieht"},{type:"image-full",src:"/img/vakio/05.jpg"},{type:"image-full",src:"/img/vakio/06.jpg"},{type:"image-full",src:"/img/vakio/07.jpg"},{type:"text-right",text:`Um die Einsatz- und Anwendungsschemata der Geräte in Wohnräumen sowie in Geschäftsräumen anschaulich darzustellen, wurde ein einheitlicher Visualisierungsstil für diese схемы entwickelt. In einer stilisierten und minimalistischen 3D-Darstellung wurden die korrekten Platzierungsschemata der Geräte in den Räumen gezeigt.

      Darüber hinaus wurde ein eigener grafischer Corporate-Stil entwickelt, der in Anleitungen sowie in verschiedenen Gestaltungselementen der Website eingesetzt wird — sei es in Blogartikeln oder auf Informationsseiten`},{type:"image-full",src:"/img/vakio/08.jpg"}]},y={id:"dolcevita",category:"webdesign",header:{title:"Dolcevita",subtitle:"Website für Kosmetologie",info:"UI-Design / Über 18 Seiten",year:"2022"},intro:{cover:"/img/dolcevita/cover.jpg",image:"/img/dolcevita/intro.jpg"},task:{title:"Projectaufgabe",text:`Entwicklung einer Unternehmenswebsite für eine Kosmetikklinik, auf deren Seiten die Klinik und das Team der Spezialisten vorgestellt sowie Leistungen und Preise präsentiert werden.
Ich bin in einer kritischen Phase in das Projekt eingestiegen – zu einem Zeitpunkt, an dem den Auftraggeber keine der zuvor von einem anderen Designer vorgeschlagenen Konzepte überzeugt hat.`},blocks:[{type:"text-right",text:`In der ersten Phase war es notwendig, sich schnell in die Aufgabe einzuarbeiten, zu verstehen, was dem Kunden nicht gefiel, und zu definieren, welches Designkonzept am besten zu diesem Projekt passt.
Daraufhin wurden drei unterschiedliche Designkonzepte für die Website entwickelt, von denen das stärkste und für das Projekt am besten geeignete ausgewählt wurde – ein minimalistisches Konzept mit klaren Bildern und einer Dominanz von Weiß`},{type:"image-full",src:"/img/dolcevita/01.jpg"},{type:"image-full",src:"/img/dolcevita/02.jpg"},{type:"image-full",src:"/img/dolcevita/03.jpg"},{type:"text-right",text:"Zur Verbesserung der Benutzerfreundlichkeit ist auf der Website der Kosmetikklinik ein Mini-Onlineshop für spezialisierte Kosmetik integriert, mit einem Katalog, Produktseiten sowie einer Funktion zum Kauf und zur Bestellabwicklung"},{type:"image-full",src:"/img/dolcevita/04.jpg"},{type:"image-full",src:"/img/dolcevita/05.jpg"}]},w={vakio:b,dolcevita:y};function x(e){const t=w[e];if(!t){console.warn(`Case "${e}" not found`);return}j(t),S(t),z(t),L(t.blocks)}function j(e){const t=document.querySelector(".case-title-text");t&&(t.textContent=e.header.title)}function S(e){const t=document.querySelector(".case-intro-title"),n=document.querySelector(".case-intro-features"),i=document.querySelector(".case-intro-year");t&&(t.textContent=e.header.subtitle),n&&(n.textContent=e.header.info),i&&(i.textContent=e.header.year);const s=document.querySelector(".case-intro-cover"),r=document.querySelector(".case-intro-image");s&&(s.innerHTML=`<img src="${e.intro.cover}" alt="">`),r&&(r.innerHTML=`<img src="${e.intro.image}" alt="">`)}function z(e){const t=document.querySelector(".case-task-heading"),n=document.querySelector(".case-task-text");t&&(t.textContent=e.task.title),n&&(n.textContent=e.task.text)}function L(e){const t=document.querySelector(".case-admin");t&&(t.innerHTML="",e.forEach(n=>{let i=null;switch(n.type){case"text-right":i=E(n);break;case"images-two":i=P(n);break;case"image-full":i=I(n);break;case"video-full":i=C(n);break;default:console.warn("Unknown block type:",n.type)}i&&t.appendChild(i)}))}function E(e){const t=document.createElement("section");t.className="case-admin-row";const n=e.text.split(/\n\s*\n/).map(i=>i.replace(/\n/g," ").trim()).filter(Boolean).map(i=>`<p>${i}</p>`).join("");return t.innerHTML=`
    <div></div>
    <div class="case-admin-text">
      ${n}
    </div>
  `,t}function I(e){const t=document.createElement("section");return t.className="case-admin-row full",t.innerHTML=`
    <img src="${e.src}" alt="">
  `,t}function C(e){const t=document.createElement("section");return t.className="case-admin-row full",t.innerHTML=`
    <iframe
      src="https://player.vimeo.com/video/${e.vimeoId}"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  `,t}function P(e){const t=document.createElement("section");return t.className="case-admin-row",t.innerHTML=`
    <div>
      <img src="${e.left}" alt="">
    </div>
    <div>
      <img src="${e.right}" alt="">
    </div>
  `,t}let u=!1;function m(e){l.find(n=>n.id===e)&&(history.pushState({caseId:e},"",`/#case/${e}`),x(e),u=!0)}function h(){u&&(history.pushState({},"","/"),u=!1)}function D(){const e=location.hash.match(/^#case\/(.+)$/);e&&m(e[1])}window.addEventListener("popstate",()=>{const e=location.hash.match(/^#case\/(.+)$/);e?m(e[1]):h()});function f(e){return`
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
  `}function T(){const e=document.getElementById("web-projects"),t=document.getElementById("branding-projects");if(!e||!t)return;const n=l.filter(i=>i.visibleOnHome);n.filter(i=>i.category==="web").sort((i,s)=>i.order-s.order).forEach(i=>e.insertAdjacentHTML("beforeend",f(i))),n.filter(i=>i.category==="branding").sort((i,s)=>i.order-s.order).forEach(i=>t.insertAdjacentHTML("beforeend",f(i))),$()}const o=document.getElementById("case-panel"),c=document.getElementById("case-overlay");function p(e,t){m(t.id),o.classList.remove("hidden","from-left","from-right","active"),c.classList.remove("hidden","from-left","from-right","active");const n=e==="left"?"from-left":"from-right";o.classList.add(n),c.classList.add(n),o.offsetHeight,o.classList.add("active"),c.classList.add("active"),setTimeout(()=>{const a=o.querySelector(".case-inner");a&&(a.scrollTop=0)},0);const i=l.filter(a=>a.category===t.category).sort((a,d)=>a.order-d.order),s=i.findIndex(a=>a.id===t.id),r=i[(s+1)%i.length];if(r){document.querySelector(".case-next-title").textContent=r.title,document.querySelector(".case-next-features").textContent=r.features.join(" / "),document.querySelector(".case-next-year").textContent=r.year;const a=document.querySelector(".case-next-image"),d=document.querySelector(".case-next-link");a.innerHTML=`<img src="${r.coverImage}" alt="">`;const g=k=>{k.preventDefault(),p(r.category==="web"?"left":"right",r)};d.onclick=g,a.onclick=g}o.offsetHeight,o.classList.add("active"),c.classList.add("active")}function v(){h(),o.classList.remove("active"),c.classList.remove("active"),setTimeout(()=>{o.classList.add("hidden"),c.classList.add("hidden")},450)}c.addEventListener("click",v);document.addEventListener("click",e=>{e.target.closest(".case-close")&&v()});function $(){document.querySelectorAll(".project-card").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.dataset.id,i=e.dataset.side,s=l.find(r=>r.id===n);s&&p(i,s)})})}T();D();const K={nav:{web:"Webdesign",branding:"Branding",letsTalk:"Let’s talk",about:"Über mich"},project:{details:"Details",close:"Projekt schließen"}};window.t=K;function H(){const e=document.querySelector(".site-header");if(!e)return;const t=e.querySelector(".header-right .nav-item"),n=e.querySelector(".author-name"),i=window.location.pathname,s=i==="/about.html"||i==="/about"||i.endsWith("/about.html");if(t&&(s?(t.textContent="Projekte",t.href="/"):(t.textContent="About",t.href="/about.html")),n&&n.tagName!=="A"){const r=document.createElement("a");r.href="/",r.className="author-name",r.textContent=n.textContent,n.replaceWith(r)}}document.addEventListener("DOMContentLoaded",H);
