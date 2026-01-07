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
  const link = document.querySelector('.site-header .header-right a');
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

// === HEADER INIT (ROBUST) ===
const headerObserver = new MutationObserver(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  updateHeaderLink();
  headerObserver.disconnect(); // 🔴 важно: один раз и всё
});

headerObserver.observe(document.body, {
  childList: true,
  subtree: true,
});

// вставка header как и было
fetch('/components/header.html', { cache: 'no-store' })
  .then(res => res.text())
  .then(html => {
    if (!document.querySelector('.site-header')) {
      document.body.insertAdjacentHTML('beforeend', html);
    }
  });


