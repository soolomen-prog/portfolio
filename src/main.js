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

  if (document.body.classList.contains('page-about')) {
    rightNavLink.textContent = 'Projekte'
    rightNavLink.href = '/'
  } else {
    rightNavLink.textContent = 'About'
    rightNavLink.href = '/about.html'
  }
}

// header (robust)
;(async () => {
  // Если шапка уже есть (мы вставили fallback в about.html) — просто применяем логику и выходим
  if (document.querySelector('.site-header')) {
    applyHeaderRightLinkLogic()
    return
  }

  try {
    const res = await fetch('/components/header.html', { cache: 'no-store' })
    if (!res.ok) throw new Error(`header.html fetch failed: ${res.status}`)
    const html = await res.text()

    // На всякий случай — не вставляем второй раз
    if (!document.querySelector('.site-header')) {
      document.body.insertAdjacentHTML('beforeend', html)
    }

    applyHeaderRightLinkLogic()
  } catch (e) {
    // если по какой-то причине components/header.html не доступен на сервере
    console.warn('[header] not loaded:', e)
  }
})()
