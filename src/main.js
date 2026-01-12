import './styles/base.css'
import './styles/layout.css'
import './styles/project.css'
import './styles/header.css'
import './styles/responsive.css'
import './styles/case.css'
import './styles/about.css'
import './styles/chat.css'
import './projects.js'
import de from './i18n/de.js'
window.t = de

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

  // Правый пункт
  if (navLink) {
    if (isAbout) {
      navLink.textContent = 'Projekte';
      navLink.href = '/';
    } else {
      navLink.textContent = 'About';
      navLink.href = '/about.html';
    }
  }

  // Имя → ссылка на главную
  if (nameEl && nameEl.tagName !== 'A') {
    const a = document.createElement('a');
    a.href = '/';
    a.className = 'author-name';
    a.textContent = nameEl.textContent;
    nameEl.replaceWith(a);
  }
}

document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-open');
  });

  // отключаем автофокус на мобиле
  const chatInput = document.querySelector('.chat-input-field');
  if (chatInput && window.innerWidth <= 1024) {
    chatInput.blur();
  }

});
