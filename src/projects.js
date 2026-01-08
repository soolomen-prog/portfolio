import { openCaseById, closeCaseRoute, initCaseRouter } from './case/caseRouter.js';
import projects from './data/projects.json';
import { renderCase } from './case/caseRenderer.js';

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
  /* 👉 РЕНДЕР КЕЙСА */
  openCaseById(project.id);

  casePanel.classList.remove('hidden', 'from-left', 'from-right', 'active');
  caseOverlay.classList.remove('hidden', 'from-left', 'from-right', 'active');

  const dir = side === 'left' ? 'from-left' : 'from-right';
  casePanel.classList.add(dir);
  caseOverlay.classList.add(dir);

  /* 👉 АКТИВАЦИЯ (триггер layout) */
  casePanel.offsetHeight;
  casePanel.classList.add('active');
  caseOverlay.classList.add('active');

  /* ✅ СКРОЛЛИМ ПОСЛЕ РЕНДЕРА И АКТИВАЦИИ */
  requestAnimationFrame(() => {
    casePanel.scrollTop = 0;
  });

  /* ===============================
     NEXT PROJECT (SAME CATEGORY, LOOP)
  ================================ */

  const sameCategory = projects
    .filter(p => p.category === project.category)
    .sort((a, b) => a.order - b.order);

  const currentIndex = sameCategory.findIndex(p => p.id === project.id);
  const nextProject =
    sameCategory[(currentIndex + 1) % sameCategory.length];

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
  closeCaseRoute();

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
initCaseRouter();
