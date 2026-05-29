const SOCIAL = [
  { href: 'https://www.facebook.com/vophanba.luan/', icon: 'fa-brands fa-facebook', label: 'Facebook' },
  { href: 'https://github.com/phanbaluanvo',          icon: 'fa-brands fa-github',   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/phanbaluanvo', icon: 'fa-brands fa-linkedin', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/[0.06] py-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between md:justify-between justify-center items-center gap-3 py-2">
          <p className="text-white/38 text-[0.82rem] m-0 text-center md:text-left">
            Copyright &copy; 2025{' '}
            <a href="https://github.com/phanbaluanvo" target="_blank" rel="noreferrer"
              className="text-accent no-underline hover:underline">
              @phanbaluanvo
            </a>
          </p>
          <ul className="flex gap-2.5 list-none p-0 m-0">
            {SOCIAL.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-white/12 text-white/45 text-[14px] no-underline transition-all duration-300 hover:border-accent hover:text-accent"
                  style={{ background: 'transparent' }}
                >
                  <i className={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
