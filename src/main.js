import './styles/base.css'
import './styles/layout.css'
import './styles/project.css'
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

    // ===== ABOUT PAGE FOOTER LOGIC =====
    if (document.body.classList.contains('page-about')) {
      const footerLink = document.getElementById('footer-link')

      if (footerLink) {
        footerLink.textContent = 'Projekte'
        footerLink.href = '/projects.html'
      }
    }
  })
