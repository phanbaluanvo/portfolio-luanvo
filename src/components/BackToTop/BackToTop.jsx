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
      className={`fixed bottom-7 right-7 w-11 h-11 bg-accent text-white rounded-full flex items-center justify-center text-[15px] z-[999] no-underline transition-all duration-300 hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(16,185,129,0.45)] ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3.5 pointer-events-none'
      }`}
      style={{ boxShadow: visible ? '0 4px 16px rgba(16,185,129,0.4)' : 'none' }}
    >
      <i className="fa-solid fa-arrow-up" />
    </a>
  )
}
