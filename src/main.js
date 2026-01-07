import './styles/base.css'
import './styles/layout.css'
import './styles/project.css'
import './styles/header.css' 
import './styles/responsive.css'
import './styles/case.css'

// language
import de from './i18n/de.js'
window.t = de

// projects
import './projects.js'

// header
fetch('/components/header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html)

    // ===== HEADER RIGHT LINK LOGIC =====
    const rightNavLink = document.querySelector('.header-right .nav-item')
    if (!rightNavLink) return

    if (document.body.classList.contains('page-about')) {
      rightNavLink.textContent = 'Projekte'
      rightNavLink.href = '/'
    } else {
      rightNavLink.textContent = 'About'
      rightNavLink.href = '/about.html'
    }
  })
