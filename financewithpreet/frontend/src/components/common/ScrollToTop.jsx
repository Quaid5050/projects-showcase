import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait for the target section to render, then scroll to it
      const id = hash.replace('#', '')
      const scrollToEl = () => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 90 // offset for fixed navbar
          window.scrollTo({ top, behavior: 'smooth' })
          return true
        }
        return false
      }
      if (!scrollToEl()) {
        const t = setTimeout(scrollToEl, 400)
        return () => clearTimeout(t)
      }
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}
