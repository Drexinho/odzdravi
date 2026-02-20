import './style.css'

const CONTACT_EMAIL = 'petras@odzdravi.cz'

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle')
  const menu = document.getElementById('mobile-menu')
  if (!toggle || !menu) return

  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden')
    menu.classList.toggle('hidden')
    toggle.setAttribute('aria-expanded', String(!isOpen))
  })

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden')
      toggle.setAttribute('aria-expanded', 'false')
    })
  })
}

function initContactForm() {
  const form = document.getElementById('contact-form')
  const feedback = document.getElementById('contact-feedback')
  if (!form || !feedback) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const emailInput = document.getElementById('contact-email')
    const email = emailInput?.value?.trim() || ''
    if (!email) return

    feedback.classList.remove('sr-only')
    feedback.textContent = 'Otevírám e-mail…'
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=Dotaz z webu&body=Prosím o kontakt. Můj e-mail: ${encodeURIComponent(email)}`
    feedback.textContent = 'Formulář byl odeslán. Dokončete e-mail v mailovém klientovi.'
  })
}

function initContactFormFull() {
  const form = document.getElementById('contact-form-full')
  const feedback = document.getElementById('contact-full-feedback')
  if (!form || !feedback) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = (document.getElementById('contact-name')?.value ?? '').trim()
    const email = (document.getElementById('contact-email-full')?.value ?? '').trim()
    const message = (document.getElementById('contact-message')?.value ?? '').trim()
    if (!email || !message) return

    const subject = 'Dotaz z webu – Obyčejně dobré zdraví'
    const body = [
      name && `Jméno: ${name}`,
      `E-mail: ${email}`,
      '',
      'Zpráva:',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    feedback.classList.remove('sr-only')
    feedback.textContent = 'Otevírám e-mail…'
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    feedback.textContent = 'Formulář byl odeslán. Dokončete e-mail v mailovém klientovi.'
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu()
  initContactForm()
  initContactFormFull()
})
