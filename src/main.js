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
  // БЕРЁМ ИМЕННО ПРАВЫЙ ПУНКТ
  const link = document.querySelector('.site-header .header-right .nav-item')
  if (!link) return

  const path = window.location.pathname
  const isAbout =
    path === '/about.html' ||
    path === '/about' ||
    path.endsWith('/about.html')

  if (isAbout) {
    link.textContent = 'Projekte'
    link.setAttribute('href', '/')
  } else {
    link.textContent = 'About'
    link.setAttribute('href', '/about.html')
  }
}

// === HEADER INIT (ПРОСТО И НАДЁЖНО) ===
fetch('/components/header.html', { cache: 'no-store' })
  .then(res => res.text())
  .then(html => {
    if (!document.querySelector('.site-header')) {
      document.body.insertAdjacentHTML('beforeend', html)
    }

    // 🔴 ВАЖНО: вызываем ПОСЛЕ вставки
    updateHeaderLink()
  })
  .catch(err => {
    console.warn('[header] load failed', err)
  })
