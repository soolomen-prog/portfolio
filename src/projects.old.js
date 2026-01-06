import projects from './data/projects.json';

/* ===============================
   PROJECT CARD (HOME)
================================ */

function createProjectCard(project) {
  return `
    <article 
      class="project-card"
      data-side="${project.category === 'web' ? 'left' : 'right'}"
      data-id="${project.id}"
    >
      <a href="#" class="project-image">
        <img src="${project.coverImage}" alt="${project.title}">
      </a>

      <div class="project-meta">
        <div class="project-meta-left">
          <h3 class="project-name">${project.title}</h3>
        </div>

        <div class="project-meta-right">
          <div class="project-title">${project.subtitle}</div>
          <div class="project-features">${project.features.join(' / ')}</div>
          <div class="project-year">${project.year}</div>
          <p class="project-description">${project.homeDescription ?? ''}</p>
          <span class="project-link">Details</span>
        </div>
      </div>
    </article>
  `;
}

/* ===============================
   RENDER HOME
================================ */

function renderProjects() {
  const web = document.getElementById('web-projects');
  const branding = document.getElementById('branding-projects');
  if (!web || !branding) return;

  const visible = projects.filter(p => p.visibleOnHome);

  visible
    .filter(p => p.category === 'web')
    .sort((a, b) => a.order - b.order)
    .forEach(p => web.insertAdjacentHTML('beforeend', createProjectCard(p)));

  visible
    .filter(p => p.category === 'branding')
    .sort((a, b) => a.order - b.order)
    .forEach(p => branding.insertAdjacentHTML('beforeend', createProjectCard(p)));

  bindProjectClicks();
}

/* ===============================
   CASE OPEN / CLOSE
================================ */

const casePanel   = document.getElementById('case-panel');
const caseOverlay = document.getElementById('case-overlay');

function openCase(side, project) {
  casePanel.classList.remove('hidden', 'from-left', 'from-right', 'active');
  caseOverlay.classList.remove('hidden', 'from-left', 'from-right', 'active');

  const dir = side === 'left' ? 'from-left' : 'from-right';
  casePanel.classList.add(dir);
  caseOverlay.classList.add(dir);

  /* ---------- HEADER ---------- */

  document.querySelector('.case-title-text').textContent = project.title ?? '';

  /* ---------- INTRO (ФИКСИРОВАННЫЙ БЛОК) ---------- */

  document.querySelector('.case-intro-title').textContent =
    project.subtitle ?? '';

  document.querySelector('.case-intro-features').textContent =
    project.features?.join(' / ') ?? '';

  document.querySelector('.case-intro-year').textContent =
    project.year ?? '';

  document.querySelector('.case-intro-cover').innerHTML =
    `<img src="${project.coverImage}" alt="">`;

  document.querySelector('.case-intro-image').innerHTML =
    `<img src="${project.caseIntro?.innerImage ?? project.coverImage}" alt="">`;

  document.querySelector('.case-task-heading').textContent =
    project.caseIntro?.taskTitle ?? 'Projectaufgabe';

  document.querySelector('.case-task-text').textContent =
    project.caseIntro?.taskText ?? '';

  /* ---------- ADMIN BLOCKS (ТОЛЬКО НАПОЛНЯЕМ) ---------- */

  const admin = document.querySelector('.case-admin');
  admin.innerHTML = `
    <div class="case-admin-row full">
      <img src="/img/vakio/full.jpg" alt="">
    </div>

    <div class="case-admin-row full">
      <iframe
        src="https://player.vimeo.com/video/794384040"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    <div class="case-admin-row">
      <div></div>
      <div class="case-admin-text">
        <p>Es wurde eine vollständig neue Sitemap entwickelt, mit dem Fokus darauf, Nutzer häufiger auf die Produktseiten zu führen.</p>
        <p>Für jede Zielgruppe wurden eigene Landingpages konzipiert.</p>
      </div>
    </div>

    <div class="case-admin-row">
      <img src="/img/vakio/2left.jpg" alt="">
      <img src="/img/vakio/2right.jpg" alt="">
    </div>

    <div class="case-admin-row">
      <img src="/img/vakio/left.jpg" alt="">
      <div></div>
    </div>

    <div class="case-admin-row">
      <div></div>
      <img src="/img/vakio/right.jpg" alt="">
    </div>
  `;

/* ---------- NEXT PROJECT (СТАТИЧЕСКИЙ, ЗАЦИКЛЕННЫЙ ПО КАТЕГОРИИ) ---------- */

// все проекты той же категории
const sameCategoryProjects = projects.filter(
  p => p.category === project.category
);

// индекс текущего проекта ВНУТРИ категории
const currentIndex = sameCategoryProjects.findIndex(
  p => p.id === project.id
);

// следующий индекс с зацикливанием
const nextIndex =
  currentIndex === sameCategoryProjects.length - 1
    ? 0
    : currentIndex + 1;

const nextProject = sameCategoryProjects[nextIndex];

if (nextProject) {
  document.querySelector('.case-next-title').textContent =
    nextProject.title;

  document.querySelector('.case-next-features').textContent =
    nextProject.features.join(' / ');

  document.querySelector('.case-next-year').textContent =
    nextProject.year;

  const nextImage = document.querySelector('.case-next-image');
  const nextLink  = document.querySelector('.case-next-link');

  nextImage.innerHTML =
    `<img src="${nextProject.coverImage}" alt="">`;

  const openNext = e => {
    e.preventDefault();
    openCase(
      nextProject.category === 'web' ? 'left' : 'right',
      nextProject
    );
  };

  nextLink.onclick  = openNext;
  nextImage.onclick = openNext;
}


casePanel.offsetHeight;
casePanel.classList.add('active');
caseOverlay.classList.add('active');


}

function closeCase() {
  casePanel.classList.remove('active');
  caseOverlay.classList.remove('active');
  setTimeout(() => {
    casePanel.classList.add('hidden');
    caseOverlay.classList.add('hidden');
  }, 450);
}

caseOverlay.addEventListener('click', closeCase);
document.addEventListener('click', e => {
  if (e.target.closest('.case-close')) closeCase();
});

/* ===============================
   CLICKS
================================ */

function bindProjectClicks() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      const id   = card.dataset.id;
      const side = card.dataset.side;
      const project = projects.find(p => p.id === id);
      if (project) openCase(side, project);
    });
  });
}

/* ===============================
   INIT
================================ */

renderProjects();
