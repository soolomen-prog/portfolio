const h={nav:{web:"Webdesign",branding:"Branding",letsTalk:"Let’s talk",about:"Über mich"},project:{details:"Details",close:"Projekt schließen"}},m=[{id:"vakio",category:"web",title:"VAKIO",subtitle:"Online-Shop für Klimasysteme",features:["UI — UX Design","Über 20 Seiten"],year:2022,coverImage:"/img/vakio/cover.jpg",homeDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",caseIntro:{innerImage:"/img/vakio/intro.jpg",taskTitle:"Projectaufgabe",taskText:"Den Corporate-Website eines Unternehmens für Klimatechnik aktualisieren."},caseBlocks:[{type:"image",layout:"full",src:"/img/vakio/full.jpg"},{type:"video",layout:"full",src:"https://player.vimeo.com/video/794384040"},{type:"text",layout:"right",content:["Es wurde eine vollständig neue Sitemap entwickelt.","Der Fokus lag auf Conversion und Klarheit."]},{type:"images",layout:"two",left:"/img/vakio/2left.jpg",right:"/img/vakio/2right.jpg"},{type:"image",layout:"left",src:"/img/vakio/left.jpg"},{type:"image",layout:"right",src:"/img/vakio/right.jpg"}],visibleOnHome:!0,order:1},{id:"has",category:"branding",title:"HAS",subtitle:"Türkisches Trinkwasser",features:["Brand Identity","Packaging"],year:2022,coverImage:"/img/has/cover.jpg",homeDescription:"Kurze Beschreibung für die Startseite.",caseIntro:{innerImage:"/img/has/intro.jpg",taskTitle:"Projectaufgabe",taskText:"Entwicklung einer Markenidentität für Trinkwasser."},caseBlocks:[{type:"image",layout:"full",src:"/img/has/full.jpg"},{type:"text",layout:"right",content:["Brand Design von Grund auf.","Packaging, Print, Digital."]},{type:"image",layout:"right",src:"/img/has/right.jpg"}],visibleOnHome:!0,order:1}];function g(t){return`
    <article 
      class="project-card"
      data-side="${t.category==="web"?"left":"right"}"
      data-id="${t.id}"
    >
      <a href="#" class="project-image">
        <img src="${t.coverImage}" alt="${t.title}">
      </a>

      <div class="project-meta">
        <div class="project-meta-left">
          <h3 class="project-name">${t.title}</h3>
        </div>

        <div class="project-meta-right">
          <div class="project-title">${t.subtitle}</div>
          <div class="project-features">${t.features.join(" / ")}</div>
          <div class="project-year">${t.year}</div>
          <p class="project-description">${t.homeDescription??""}</p>
          <span class="project-link">Details</span>
        </div>
      </div>
    </article>
  `}function p(){const t=document.getElementById("web-projects"),i=document.getElementById("branding-projects");if(!t||!i)return;const n=m.filter(a=>a.visibleOnHome);n.filter(a=>a.category==="web").sort((a,r)=>a.order-r.order).forEach(a=>t.insertAdjacentHTML("beforeend",g(a))),n.filter(a=>a.category==="branding").sort((a,r)=>a.order-r.order).forEach(a=>i.insertAdjacentHTML("beforeend",g(a))),x()}const o=document.getElementById("case-panel"),c=document.getElementById("case-overlay");function f(t,i){o.classList.remove("hidden","from-left","from-right","active"),c.classList.remove("hidden","from-left","from-right","active");const n=t==="left"?"from-left":"from-right";o.classList.add(n),c.classList.add(n),document.querySelector(".case-title-text").textContent=i.title??"",document.querySelector(".case-intro-title").textContent=i.subtitle??"",document.querySelector(".case-intro-features").textContent=i.features?.join(" / ")??"",document.querySelector(".case-intro-year").textContent=i.year??"",document.querySelector(".case-intro-cover").innerHTML=`<img src="${i.coverImage}" alt="">`,document.querySelector(".case-intro-image").innerHTML=`<img src="${i.caseIntro?.innerImage??i.coverImage}" alt="">`,document.querySelector(".case-task-heading").textContent=i.caseIntro?.taskTitle??"Projectaufgabe",document.querySelector(".case-task-text").textContent=i.caseIntro?.taskText??"";const a=document.querySelector(".case-admin");a.innerHTML="",(i.caseBlocks??[]).forEach(e=>{e.type==="image"&&e.layout==="full"&&a.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row full">
          <img src="${e.src}" alt="">
        </div>
      `),e.type==="video"&&e.layout==="full"&&a.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row full">
          <iframe
            src="${e.src}"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `),e.type==="text"&&e.layout==="right"&&a.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <div></div>
          <div class="case-admin-text">
            ${e.content.map(d=>`<p>${d}</p>`).join("")}
          </div>
        </div>
      `),e.type==="images"&&e.layout==="two"&&a.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <img src="${e.left}" alt="">
          <img src="${e.right}" alt="">
        </div>
      `),e.type==="image"&&e.layout==="left"&&a.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <img src="${e.src}" alt="">
          <div></div>
        </div>
      `),e.type==="image"&&e.layout==="right"&&a.insertAdjacentHTML("beforeend",`
        <div class="case-admin-row">
          <div></div>
          <img src="${e.src}" alt="">
        </div>
      `)});const r=m.filter(e=>e.category===i.category).sort((e,d)=>e.order-d.order),l=r.findIndex(e=>e.id===i.id),s=r[(l+1)%r.length];if(s){document.querySelector(".case-next-title").textContent=s.title,document.querySelector(".case-next-features").textContent=s.features.join(" / "),document.querySelector(".case-next-year").textContent=s.year;const e=document.querySelector(".case-next-image"),d=document.querySelector(".case-next-link");e.innerHTML=`<img src="${s.coverImage}" alt="">`;const u=y=>{y.preventDefault(),f(s.category==="web"?"left":"right",s)};d.onclick=u,e.onclick=u}o.offsetHeight,o.classList.add("active"),c.classList.add("active")}function v(){o.classList.remove("active"),c.classList.remove("active"),setTimeout(()=>{o.classList.add("hidden"),c.classList.add("hidden")},450)}c.addEventListener("click",v);document.addEventListener("click",t=>{t.target.closest(".case-close")&&v()});function x(){document.querySelectorAll(".project-card").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();const n=t.dataset.id,a=t.dataset.side,r=m.find(l=>l.id===n);r&&f(a,r)})})}p();window.t=h;fetch("/components/header.html").then(t=>t.text()).then(t=>{document.body.insertAdjacentHTML("beforeend",t);const i=document.querySelector(".header-right .nav-item");i&&(document.body.classList.contains("page-about")?(i.textContent="Projekte",i.href="/"):(i.textContent="About",i.href="/about.html"))});
