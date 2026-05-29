import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'       },
  { label: 'Experience', href: '#experience'  },
  { label: 'Education',  href: '#education'   },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Contact',    href: '#contact'     },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen]     = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    function onScroll() {
      let current = ''
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id')
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.07)] py-2.5">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-audiowide text-[1.2rem] text-dark no-underline tracking-wide">
          Luan Vo
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`px-4 py-1.5 rounded-full font-semibold text-[0.88rem] tracking-[0.4px] transition-all duration-300 no-underline ${
                  active === href.slice(1)
                    ? 'text-accent bg-accent-light'
                    : 'text-gray-700 hover:text-accent hover:bg-accent-light'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] p-2 mr-1 cursor-pointer bg-transparent border-none"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col px-4 pb-4 pt-1 list-none m-0 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded-xl font-semibold text-[0.88rem] transition-all duration-300 no-underline ${
                  active === href.slice(1)
                    ? 'text-accent bg-accent-light'
                    : 'text-gray-700 hover:text-accent hover:bg-accent-light'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
