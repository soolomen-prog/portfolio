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

function applyHeaderLogic() {
  const rightNavLink = document.querySelector('.header-right .nav-item')
  if (!rightNavLink) return

  if (document.body.classList.contains('page-about')) {
    rightNavLink.textContent = 'Projekte'
    rightNavLink.href = '/'
  } else {
    rightNavLink.textContent = 'About'
    rightNavLink.href = '/about.html'
  }
}

// HEADER INIT (без ранних return)
;(async () => {
  try {
    // если шапка уже есть — просто применяем логику
    if (document.querySelector('.site-header')) {
      applyHeaderLogic()
      return
    }

    const res = await fetch('/components/header.html', { cache: 'no-store' })
    if (!res.ok) throw new Error(res.status)

    const html = await res.text()
    document.body.insertAdjacentHTML('beforeend', html)

    applyHeaderLogic()
  } catch (e) {
    console.warn('[header] fallback used', e)
    applyHeaderLogic()
  }
})()
