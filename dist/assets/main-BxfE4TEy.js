const m=[{id:"vakio",category:"web",title:"VAKIO",subtitle:"Online-Shop für Klimasysteme",features:["UI — UX Design","Über 20 Seiten"],year:2022,coverImage:"/img/vakio/cover.jpg",homeDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",caseIntro:{innerImage:"/img/vakio/intro.jpg",taskTitle:"Projectaufgabe",taskText:"Den Corporate-Website eines Unternehmens für Klimatechnik aktualisieren."},caseBlocks:[{type:"image",layout:"full",src:"/img/vakio/full.jpg"},{type:"video",layout:"full",src:"https://player.vimeo.com/video/794384040"},{type:"text",layout:"right",content:["Es wurde eine vollständig neue Sitemap entwickelt.","Der Fokus lag auf Conversion und Klarheit."]},{type:"images",layout:"two",left:"/img/vakio/2left.jpg",right:"/img/vakio/2right.jpg"},{type:"image",layout:"left",src:"/img/vakio/left.jpg"},{type:"image",layout:"right",src:"/img/vakio/right.jpg"}],visibleOnHome:!0,order:1},{id:"has",category:"branding",title:"HAS",subtitle:"Türkisches Trinkwasser",features:["Brand Identity","Packaging"],year:2022,coverImage:"/img/has/cover.jpg",homeDescription:"Kurze Beschreibung für die Startseite.",caseIntro:{innerImage:"/img/has/intro.jpg",taskTitle:"Projectaufgabe",taskText:"Entwicklung einer Markenidentität für Trinkwasser."},caseBlocks:[{type:"image",layout:"full",src:"/img/has/full.jpg"},{type:"text",layout:"right",content:["Brand Design von Grund auf.","Packaging, Print, Digital."]},{type:"image",layout:"right",src:"/img/has/right.jpg"}],visibleOnHome:!0,order:1}];function g(i){return`
    <article 
      class="project-card"
      data-side="${i.category==="web"?"left":"right"}"
      data-id="${i.id}"
    >
      <a href="#" class="project-image">
        <img src="${i.coverImage}" alt="${i.title}">
      </a>

      <div class="project-meta">
        <div class="project-meta-left">
          <h3 class="project-name">${i.title}</h3>
        </div>

        <div class="project-meta-right">
          <div class="project-title">${i.subtitle}</div>
          <div class="project-features">${i.features.join(" / ")}</div>
          <div class="project-year">${i.year}</div>
          <p class="project-description">${i.homeDescription??""}</p>
          <span class="project-link">Details</span>
        </div>
      </div>
    </article>
  `}function h(){const i=document.getElementById("web-projects"),a=document.getElementById("branding-projects");if(!i||!a)return;const r=m.filter(t=>t.visibleOnHome);r.filter(t=>t.category==="web").sort((t,n)=>t.order-n.order).forEach(t=>i.insertAdjacentHTML("beforeend",g(t))),r.filter(t=>t.category==="branding").sort((t,n)=>t.order-n.order).forEach(t=>a.insertAdjacentHTML("beforeend",g(t))),p()}const c=document.getElementById("case-panel"),d=document.getElementById("case-overlay");function f(i,a){c.classList.remove("hidden","from-left","from-right","active"),d.classList.remove("hidden","from-left","from-right","active");const r=i==="left"?"from-left":"from-right";c.classList.add(r),d.classList.add(r),document.querySelector(".case-title-text").textContent=a.title??"",document.querySelector(".case-intro-title").textContent=a.subtitle??"",document.querySelector(".case-intro-features").textContent=a.features?.join(" / ")??"",document.querySelector(".case-intro-year").textContent=a.year??"",document.querySelector(".case-intro-cover").innerHTML=`<img src="${a.coverImage}" alt="">`,document.querySelector(".case-intro-image").innerHTML=`<img src="${a.caseIntro?.innerImage??a.coverImage}" alt="">`,document.querySelector(".case-task-heading").textContent=a.caseIntro?.taskTitle??"Projectaufgabe",document.querySelector(".case-task-text").textContent=a.caseIntro?.taskText??"";const t=document.querySelector(".case-admin");t.innerHTML="",(a.caseBlocks??[]).forEach(e=>{e.type==="image"&&e.layout==="full"&&t.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row full">
          <img src="${e.src}" alt="">
        </div>
      `),e.type==="video"&&e.layout==="full"&&t.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row full">
          <iframe
            src="${e.src}"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `),e.type==="text"&&e.layout==="right"&&t.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <div></div>
          <div class="case-admin-text">
            ${e.content.map(l=>`<p>${l}</p>`).join("")}
          </div>
        </div>
      `),e.type==="images"&&e.layout==="two"&&t.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <img src="${e.left}" alt="">
          <img src="${e.right}" alt="">
        </div>
      `),e.type==="image"&&e.layout==="left"&&t.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <img src="${e.src}" alt="">
          <div></div>
        </div>
      `),e.type==="image"&&e.layout==="right"&&t.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <div></div>
          <img src="${e.src}" alt="">
        </div>
      `)});const n=m.filter(e=>e.category===a.category).sort((e,l)=>e.order-l.order),s=n.findIndex(e=>e.id===a.id),o=n[(s+1)%n.length];if(o){document.querySelector(".case-next-title").textContent=o.title,document.querySelector(".case-next-features").textContent=o.features.join(" / "),document.querySelector(".case-next-year").textContent=o.year;const e=document.querySelector(".case-next-image"),l=document.querySelector(".case-next-link");e.innerHTML=`<img src="${o.coverImage}" alt="">`;const u=y=>{y.preventDefault(),f(o.category==="web"?"left":"right",o)};l.onclick=u,e.onclick=u}c.offsetHeight,c.classList.add("active"),d.classList.add("active")}function v(){c.classList.remove("active"),d.classList.remove("active"),setTimeout(()=>{c.classList.add("hidden"),d.classList.add("hidden")},450)}d.addEventListener("click",v);document.addEventListener("click",i=>{i.target.closest(".case-close")&&v()});function p(){document.querySelectorAll(".project-card").forEach(i=>{i.addEventListener("click",a=>{a.preventDefault();const r=i.dataset.id,t=i.dataset.side,n=m.find(s=>s.id===r);n&&f(t,n)})})}h();const x={nav:{web:"Webdesign",branding:"Branding",letsTalk:"Let’s talk",about:"Über mich"},project:{details:"Details",close:"Projekt schließen"}};window.t=x;function L(){const i=document.querySelector(".site-header");if(!i)return;const a=i.querySelector(".header-right .nav-item"),r=i.querySelector(".author-name"),t=window.location.pathname,n=t==="/about.html"||t==="/about"||t.endsWith("/about.html");if(a&&(n?(a.textContent="Projekte",a.href="/"):(a.textContent="About",a.href="/about.html")),r&&r.tagName!=="A"){const s=document.createElement("a");s.href="/",s.className="author-name",s.textContent=r.textContent,r.replaceWith(s)}}document.addEventListener("DOMContentLoaded",L);
