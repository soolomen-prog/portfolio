// src/case/caseRenderer.js

import vakio from '../cases/webdesign/vakio.js';
import dolcevita from '../cases/webdesign/dolcevita.js';
import has from '../cases/branding/has.js';

/**
 * ВАЖНО:
 * Сейчас подключаем только vakio как эталон
 */
const casesMap = {
  vakio,
  dolcevita,
  has,
};

/**
 * Главная функция рендера кейса
 */
export function renderCase(caseId) {
  const data = casesMap[caseId];
  if (!data) {
    console.warn(`Case "${caseId}" not found`);
    return;
  }

  renderHeader(data);
  renderIntro(data);
  renderTask(data);
  renderBlocks(data.blocks);
}

/* ===============================
   HEADER
================================ */

function renderHeader(data) {
  const titleEl = document.querySelector('.case-title-text');
  if (titleEl) titleEl.textContent = data.header.title;
}

/* ===============================
   INTRO
================================ */

function renderIntro(data) {
  const subtitleEl = document.querySelector('.case-intro-title');
  const featuresEl = document.querySelector('.case-intro-features');
  const yearEl = document.querySelector('.case-intro-year');

  if (subtitleEl) subtitleEl.textContent = data.header.subtitle;
  if (featuresEl) featuresEl.textContent = data.header.info;
  if (yearEl) yearEl.textContent = data.header.year;

  const coverEl = document.querySelector('.case-intro-cover');
  const imageEl = document.querySelector('.case-intro-image');

  if (coverEl) {
    coverEl.innerHTML = `<img src="${data.intro.cover}" alt="">`;
  }

  if (imageEl) {
    imageEl.innerHTML = `<img src="${data.intro.image}" alt="">`;
  }
}

/* ===============================
   TASK
================================ */

function renderTask(data) {
  const titleEl = document.querySelector('.case-task-heading');
  const textEl = document.querySelector('.case-task-text');

  if (titleEl) titleEl.textContent = data.task.title;
  if (textEl) textEl.textContent = data.task.text;
}

/* ===============================
   ADMIN BLOCKS
================================ */

function renderBlocks(blocks) {
  const container = document.querySelector('.case-admin');
  if (!container) return;

  container.innerHTML = '';

  blocks.forEach(block => {
    let el = null;

    switch (block.type) {
      case 'text-right':
        el = createTextRight(block);
        break;

      case 'images-two':
        el = createImagesTwo(block);
        break;

      case 'image-full':
        el = createImageFull(block);
        break;

      case 'video-full':
        el = createVideoFull(block);
        break;

      default:
        console.warn('Unknown block type:', block.type);
    }

    if (el) container.appendChild(el);
  });
}

/* ===============================
   BLOCK FACTORIES
================================ */

function createTextRight(block) {
  const section = document.createElement('section');
  section.className = 'case-admin-row';

  const paragraphs = block.text
    .split(/\n\s*\n/)          // делим ТОЛЬКО по пустым строкам
    .map(p => p.replace(/\n/g, ' ').trim()) // склеиваем переносы внутри
    .filter(Boolean)
    .map(p => `<p>${p}</p>`)
    .join('');

  section.innerHTML = `
    <div></div>
    <div class="case-admin-text">
      ${paragraphs}
    </div>
  `;

  return section;
}


function createImageFull(block) {
  const section = document.createElement('section');
  section.className = 'case-admin-row full';

  section.innerHTML = `
    <img src="${block.src}" alt="">
  `;

  return section;
}

function createVideoFull(block) {
  const section = document.createElement('section');
  section.className = 'case-admin-row full';

  section.innerHTML = `
    <iframe
      src="https://player.vimeo.com/video/${block.vimeoId}"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  `;

  return section;
}

function createImagesTwo(block) {
  const section = document.createElement('section');
  section.className = 'case-admin-row full images-two';

  const imgLeft = document.createElement('img');
  imgLeft.src = block.left;
  imgLeft.alt = '';

  const imgRight = document.createElement('img');
  imgRight.src = block.right;
  imgRight.alt = '';

  section.appendChild(imgLeft);
  section.appendChild(imgRight);

  return section;
}

