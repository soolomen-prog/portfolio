import './styles/base.css'
import './styles/layout.css'
import './styles/project.css'
import './styles/header.css'
import './styles/responsive.css'
import './styles/case.css'
import './styles/about.css'

// language
import de from './i18n/de.js'
window.t = de

// projects
import './projects.js'

function applyHeaderRightLinkLogic() {
  const rightNavLink = document.querySelector('.header-right .nav-item')
  if (!rightNavLink) return

  const path = (window.location.pathname || '').toLowerCase()
  const isAbout =
    document.body.classList.contains('page-about') ||
    path.endsWith('/about.html') ||
    path.includes('/about')

  if (isAbout) {
    rightNavLink.textContent = 'Projekte'
    rightNavLink.href = '/'
  } else {
    rightNavLink.textContent = 'About'
    rightNavLink.href = '/about.html'
  }
}

// header
fetch('/components/header.html', { cache: 'no-store' })
  .then(res => res.text())
  .then(html => {
    // не дублируем, если вдруг уже есть (fallback / кеш)
    if (!document.querySelector('.site-header')) {
      document.body.insertAdjacentHTML('beforeend', html)
    }
    applyHeaderRightLinkLogic()
  })
  .catch(() => {
    // даже если fetch упал — попробуем применить логику к уже существующему header
    applyHeaderRightLinkLogic()
  })
