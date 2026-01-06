import './styles/base.css'
import './styles/layout.css'
import './styles/project.css'
import './styles/responsive.css'
import './styles/case.css'

// language
import de from './i18n/de.js'
window.t = de

// projects (ВАЖНО)
import './projects.js'

// header
fetch('/src/components/header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html)
  })
