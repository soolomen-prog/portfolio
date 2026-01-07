const u=[{id:"vakio",category:"web",title:"VAKIO",subtitle:"Online-Shop für Klimasysteme",features:["UI — UX Design","Über 20 Seiten"],year:2022,coverImage:"/img/vakio/cover.jpg",homeDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",caseIntro:{innerImage:"/img/vakio/intro.jpg",taskTitle:"Projectaufgabe",taskText:"Den Corporate-Website eines Unternehmens für Klimatechnik aktualisieren."},caseBlocks:[{type:"image",layout:"full",src:"/img/vakio/full.jpg"},{type:"video",layout:"full",src:"https://player.vimeo.com/video/794384040"},{type:"text",layout:"right",content:["Es wurde eine vollständig neue Sitemap entwickelt.","Der Fokus lag auf Conversion und Klarheit."]},{type:"images",layout:"two",left:"/img/vakio/2left.jpg",right:"/img/vakio/2right.jpg"},{type:"image",layout:"left",src:"/img/vakio/left.jpg"},{type:"image",layout:"right",src:"/img/vakio/right.jpg"}],visibleOnHome:!0,order:1},{id:"has",category:"branding",title:"HAS",subtitle:"Türkisches Trinkwasser",features:["Brand Identity","Packaging"],year:2022,coverImage:"/img/has/cover.jpg",homeDescription:"Kurze Beschreibung für die Startseite.",caseIntro:{innerImage:"/img/has/intro.jpg",taskTitle:"Projectaufgabe",taskText:"Entwicklung einer Markenidentität für Trinkwasser."},caseBlocks:[{type:"image",layout:"full",src:"/img/has/full.jpg"},{type:"text",layout:"right",content:["Brand Design von Grund auf.","Packaging, Print, Digital."]},{type:"image",layout:"right",src:"/img/has/right.jpg"}],visibleOnHome:!0,order:1}];function g(e){return`
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
  `}function p(){const e=document.getElementById("web-projects"),a=document.getElementById("branding-projects");if(!e||!a)return;const n=u.filter(i=>i.visibleOnHome);n.filter(i=>i.category==="web").sort((i,r)=>i.order-r.order).forEach(i=>e.insertAdjacentHTML("beforeend",g(i))),n.filter(i=>i.category==="branding").sort((i,r)=>i.order-r.order).forEach(i=>a.insertAdjacentHTML("beforeend",g(i))),b()}const o=document.getElementById("case-panel"),c=document.getElementById("case-overlay");function f(e,a){o.classList.remove("hidden","from-left","from-right","active"),c.classList.remove("hidden","from-left","from-right","active");const n=e==="left"?"from-left":"from-right";o.classList.add(n),c.classList.add(n),document.querySelector(".case-title-text").textContent=a.title??"",document.querySelector(".case-intro-title").textContent=a.subtitle??"",document.querySelector(".case-intro-features").textContent=a.features?.join(" / ")??"",document.querySelector(".case-intro-year").textContent=a.year??"",document.querySelector(".case-intro-cover").innerHTML=`<img src="${a.coverImage}" alt="">`,document.querySelector(".case-intro-image").innerHTML=`<img src="${a.caseIntro?.innerImage??a.coverImage}" alt="">`,document.querySelector(".case-task-heading").textContent=a.caseIntro?.taskTitle??"Projectaufgabe",document.querySelector(".case-task-text").textContent=a.caseIntro?.taskText??"";const i=document.querySelector(".case-admin");i.innerHTML="",(a.caseBlocks??[]).forEach(t=>{t.type==="image"&&t.layout==="full"&&i.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row full">
          <img src="${t.src}" alt="">
        </div>
      `),t.type==="video"&&t.layout==="full"&&i.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row full">
          <iframe
            src="${t.src}"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `),t.type==="text"&&t.layout==="right"&&i.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <div></div>
          <div class="case-admin-text">
            ${t.content.map(d=>`<p>${d}</p>`).join("")}
          </div>
        </div>
      `),t.type==="images"&&t.layout==="two"&&i.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <img src="${t.left}" alt="">
          <img src="${t.right}" alt="">
        </div>
      `),t.type==="image"&&t.layout==="left"&&i.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <img src="${t.src}" alt="">
          <div></div>
        </div>
      `),t.type==="image"&&t.layout==="right"&&i.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <div></div>
          <img src="${t.src}" alt="">
        </div>
      `)});const r=u.filter(t=>t.category===a.category).sort((t,d)=>t.order-d.order),l=r.findIndex(t=>t.id===a.id),s=r[(l+1)%r.length];if(s){document.querySelector(".case-next-title").textContent=s.title,document.querySelector(".case-next-features").textContent=s.features.join(" / "),document.querySelector(".case-next-year").textContent=s.year;const t=document.querySelector(".case-next-image"),d=document.querySelector(".case-next-link");t.innerHTML=`<img src="${s.coverImage}" alt="">`;const m=h=>{h.preventDefault(),f(s.category==="web"?"left":"right",s)};d.onclick=m,t.onclick=m}o.offsetHeight,o.classList.add("active"),c.classList.add("active")}function v(){o.classList.remove("active"),c.classList.remove("active"),setTimeout(()=>{o.classList.add("hidden"),c.classList.add("hidden")},450)}c.addEventListener("click",v);document.addEventListener("click",e=>{e.target.closest(".case-close")&&v()});function b(){document.querySelectorAll(".project-card").forEach(e=>{e.addEventListener("click",a=>{a.preventDefault();const n=e.dataset.id,i=e.dataset.side,r=u.find(l=>l.id===n);r&&f(i,r)})})}p();const x={nav:{web:"Webdesign",branding:"Branding",letsTalk:"Let’s talk",about:"Über mich"},project:{details:"Details",close:"Projekt schließen"}};window.t=x;function j(){const e=document.querySelector(".site-header .header-right a");if(!e)return;window.location.pathname.endsWith("/about.html")||window.location.pathname==="/about"?(e.textContent="Projekte",e.setAttribute("href","/")):(e.textContent="About",e.setAttribute("href","/about.html"))}const y=new MutationObserver(()=>{document.querySelector(".site-header")&&(j(),y.disconnect())});y.observe(document.body,{childList:!0,subtree:!0});fetch("/components/header.html",{cache:"no-store"}).then(e=>e.text()).then(e=>{document.querySelector(".site-header")||document.body.insertAdjacentHTML("beforeend",e)});
