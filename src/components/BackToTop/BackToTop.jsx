import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-7 right-7 w-11 h-11 bg-accent text-white rounded-full flex items-center justify-center text-[15px] z-[999] no-underline transition-all duration-300 hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--color-accent)_45%,transparent)] ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3.5 pointer-events-none'
      }`}
      style={{ boxShadow: visible ? 'color-mix(in srgb, var(--color-accent) 40%, transparent) 0 4px 16px' : 'none' }}
    >
      <i className="fa-solid fa-arrow-up" />
    </a>
  )
}
