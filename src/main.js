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
  // РЕАЛЬНЫЙ селектор
  const link = document.querySelector('.site-header .header-right a')
  if (!link) return

  const isAbout =
    window.location.pathname.endsWith('/about.html') ||
    document.body.classList.contains('page-about')

  if (isAbout) {
    link.textContent = 'Projekte'
    link.href = '/'
  } else {
    link.textContent = 'About'
    link.href = '/about.html'
  }
}

fetch('/components/header.html', { cache: 'no-store' })
  .then(res => res.text())
  .then(html => {
    if (!document.querySelector('.site-header')) {
      document.body.insertAdjacentHTML('beforeend', html)
    }
    updateHeaderLink()
  })
  .catch(() => {
    updateHeaderLink()
  })
