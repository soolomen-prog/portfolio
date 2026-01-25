console.log('🔥 main.js loaded');

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

  /* ===== HEADER ===== */
  const normalHeader = document.querySelector(
    '.site-header:not(.site-header--chat)'
  );
  if (normalHeader) updateHeader();

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
});

/* ===============================
   SCROLL HINT (HOME ONLY)
   Ждём, пока проекты реально появятся
================================ */
document.addEventListener('projectsRendered', () => {
  console.log('✨ projectsRendered');

  const isHome =
    window.location.pathname === '/' ||
    window.location.pathname.endsWith('/index.html');

  if (!isHome) return;

  // только один раз за сессию
  if (sessionStorage.getItem('scrollHintShown')) return;
  sessionStorage.setItem('scrollHintShown', 'true');

  // ✅ двигаем именно колонки (так анимация стабильнее в Chrome mobile)
  const web = document.querySelector('.projects-column.web-design');
  const branding = document.querySelector('.projects-column.branding');

  if (!web || !branding) return;

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) return;

  const hintMove = (el, delay = 0) => {
    setTimeout(() => {
      const distance = 46;

      // ✅ самый надежный вариант (Chrome mobile тоже плавно)
      if (el.animate) {
        el.animate(
          [
            { transform: 'translate3d(0,0,0)' },
            { transform: `translate3d(0,-${distance}px,0)` },
            { transform: 'translate3d(0,0,0)' }
          ],
          {
            duration: 1200,
            easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
            iterations: 1
          }
        );
        return;
      }

      // Фолбэк, если animate недоступен
      el.style.willChange = 'transform';
      el.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
      el.style.transform = 'translate3d(0,0,0)';

      requestAnimationFrame(() => {
        el.style.transform = `translate3d(0,-${distance}px,0)`;

        setTimeout(() => {
          el.style.transform = 'translate3d(0,0,0)';

          setTimeout(() => {
            el.style.transition = '';
            el.style.willChange = '';
          }, 650);
        }, 600);
      });
    }, delay);
  };

  hintMove(web, 400);
  hintMove(branding, 1600);
});
