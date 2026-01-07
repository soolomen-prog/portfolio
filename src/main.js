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

function updateHeader() {
  const navLink = document.querySelector('.site-header .header-right .nav-item')
  const nameLink = document.querySelector('.site-header .author-name')

  if (!navLink) return

  const path = window.location.pathname
  const isAbout =
    path === '/about.html' ||
    path === '/about' ||
    path.endsWith('/about.html')

  // правый пункт
  if (isAbout) {
    navLink.textContent = 'Projekte'
    navLink.setAttribute('href', '/')
  } else {
    navLink.textContent = 'About'
    navLink.setAttribute('href', '/about.html')
  }

  // имя всегда ведёт на главную
  if (nameLink && nameLink.tagName !== 'A') {
    const a = document.createElement('a')
    a.href = '/'
    a.className = 'author-name'
    a.textContent = nameLink.textContent
    nameLink.replaceWith(a)
  }
}

// загрузка header
fetch('/components/header.html', { cache: 'no-store' })
  .then(res => res.text())
  .then(html => {
    if (!document.querySelector('.site-header')) {
      document.body.insertAdjacentHTML('beforeend', html)
    }
    updateHeader()
  })
