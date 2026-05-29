import { useTypewriter } from '../../hooks/useTypewriter'
import devLogo from '../../assets/image/dev_logo.jpg'
import bgImg   from '../../assets/image/background_main.jpg'

const ROLES = [
  'Software Developer',
  'Technical Support Specialist',
  'Full-Stack Engineer',
  'Production Systems Support',
  'System Analyst',
]

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/vophanba.luan/', icon: 'fa-brands fa-facebook', label: 'Facebook' },
  { href: 'https://github.com/phanbaluanvo',          icon: 'fa-brands fa-github',   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/phanbaluanvo', icon: 'fa-brands fa-linkedin', label: 'LinkedIn' },
]

export default function Hero() {
  const text = useTypewriter(ROLES)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/45 z-0" />
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="text-center text-white animate-fade-in-up">
          <img
            src={devLogo}
            alt="Luan Vo"
            className="w-[108px] h-[108px] rounded-full border-[3px] border-accent object-cover mb-6 mx-auto brightness-[10] saturate-0"
            style={{ boxShadow: '0 0 0 8px rgba(16,185,129,0.18), 0 0 28px rgba(16,185,129,0.20)' }}
          />
          <p className="font-audiowide text-[clamp(1.8rem,5vw,3.4rem)] font-bold mb-3.5 leading-tight">
            Hey, I'm <span className="text-accent">Luan Vo</span>
          </p>
          <p className="text-xl font-bold text-white/90 mb-2 min-h-[1.8rem] tracking-[0.3px]">
            <span>{text}</span>
            <span className="inline-block w-0.5 h-[1.1em] bg-accent ml-0.5 align-middle rounded-sm animate-blink" />
          </p>
          <p className="text-[1.05rem] text-white/75 mb-9 font-normal">Vancouver, BC, Canada</p>
          <a
            href="/Resume_LuanVo.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-9 py-3 border-2 border-accent text-accent rounded-full font-bold text-[0.92rem] tracking-[0.8px] no-underline transition-all duration-300 mb-8 hover:bg-accent hover:text-white hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(16,185,129,0.38)]"
          >
            <i className="fa-solid fa-file-lines mr-2" />View Resume
          </a>
          <ul className="flex justify-center gap-3.5 list-none p-0 m-0">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-[46px] h-[46px] rounded-full border-2 border-white/35 text-white text-lg no-underline transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
                  style={{ textDecoration: 'none' }}
                >
                  <i className={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
