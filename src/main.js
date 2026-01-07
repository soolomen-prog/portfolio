import './styles/base.css'
import './styles/layout.css'
import './styles/project.css'
import './styles/header.css'
import './styles/responsive.css'
import './styles/case.css'
import './styles/about.css'

import './projects.js'
import de from './i18n/de.js'
window.t = de

function updateHeaderLink() {
  // ищем именно ссылку на about
  const link = document.querySelector('.site-header a[href="/about.html"]');
  if (!link) return;

  const isAbout =
    window.location.pathname.endsWith('/about.html') ||
    window.location.pathname === '/about';

  if (isAbout) {
    link.textContent = 'Projekte';
    link.setAttribute('href', '/');
  } else {
    link.textContent = 'About';
    link.setAttribute('href', '/about.html');
  }
}

fetch('/components/header.html', { cache: 'no-store' })
  .then(res => res.text())
  .then(html => {
    if (!document.querySelector('.site-header')) {
      document.body.insertAdjacentHTML('beforeend', html);
    }

    // ⬅️ ВАЖНО: вызываем ТОЛЬКО ПОСЛЕ вставки
    updateHeaderLink();
  })
  .catch(() => {
    // если header уже был в DOM
    updateHeaderLink();
  });

