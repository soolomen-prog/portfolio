/* ===============================
   STYLES
================================ */
import './styles/base.css';
import './styles/layout.css';
import './styles/project.css';
import './styles/header.css';
import './styles/responsive.css';
import './styles/case.css';
import './styles/about.css';
import './styles/chat.css';
import './chat.js';

/* ===============================
   DATA / I18N
================================ */
if (!window.location.pathname.includes('chat')) {
  import('./projects.js');
}
import de from './i18n/de.js';
window.t = de;

/* ===============================
   HEADER (index / about ONLY)
================================ */
function updateHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const navLink = header.querySelector('.header-right .nav-item');
  const nameEl = header.querySelector('.author-name');

  const path = window.location.pathname;
  const isAbout =
    path === '/about.html' ||
    path === '/about' ||
    path.endsWith('/about.html');

  if (navLink) {
    if (isAbout) {
      navLink.textContent = 'Projekte';
      navLink.href = '/';
    } else {
      navLink.textContent = 'About';
      navLink.href = '/about.html';
    }
  }

  if (nameEl && nameEl.tagName !== 'A') {
    const a = document.createElement('a');
    a.href = '/';
    a.className = 'author-name';
    a.textContent = nameEl.textContent;
    nameEl.replaceWith(a);
  }
}

/* ===============================
   DOM READY
================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ===== обычные страницы ===== */
  const normalHeader = document.querySelector(
    '.site-header:not(.site-header--chat)'
  );

  if (normalHeader) {
    updateHeader();
  }

  /* ===== CHAT PAGE ===== */
  const chatHeader = document.querySelector('.site-header--chat');
  if (chatHeader) {
    const burger = chatHeader.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (burger && mobileMenu) {
      burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-open');
      });
    }
  }

  /* ===== disable autofocus ===== */
  const chatInput = document.querySelector('.chat-input-field');
  if (chatInput && window.innerWidth <= 1024) {
    chatInput.blur();
  }

  /* ===============================
     SCROLL HINT (HOME ONLY)
  =============================== */

  const isHome =
    window.location.pathname === '/' ||
    window.location.pathname.endsWith('/index.html');

  if (!isHome) return;

  // только один раз за сессию
  if (sessionStorage.getItem('scrollHintShown')) return;
  sessionStorage.setItem('scrollHintShown', 'true');

  const web = document
    .querySelector('#web-projects')
    ?.closest('.projects-column');

  const branding = document
    .querySelector('#branding-projects')
    ?.closest('.projects-column');

  if (!web || !branding) return;

  const hintScroll = (el, delay = 0) => {
    if (el.scrollHeight <= el.clientHeight) return;

    setTimeout(() => {
      const start = el.scrollTop;
      const delta = 80;

      el.scrollTo({ top: start + delta, behavior: 'smooth' });

      setTimeout(() => {
        el.scrollTo({ top: start, behavior: 'smooth' });
      }, 600);
    }, delay);
  };

  // сначала веб, потом брендинг
  hintScroll(web, 400);
  hintScroll(branding, 1400);
});
