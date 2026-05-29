import { useRef, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import cyberImg      from '../../assets/image/GenAI_Stack_.png'
import migrationImg  from '../../assets/image/Data-Migration-Tools.png'
import hmsImg        from '../../assets/image/booking-app.png'

const PROJECTS = [
  {
    img:   null,
    alt:   'Portfolio Website',
    badge: 'Personal Project',
    title: 'Portfolio Website',
    desc:  'Personal portfolio built with ReactJS, Vite, and Tailwind CSS v4. Features a typewriter effect, scroll-reveal animations, and fully responsive design across all devices.',
    tags:  ['ReactJS', 'Vite', 'Tailwind CSS', 'JavaScript'],
    link:  'https://github.com/phanbaluanvo/portfolio-luanvo',
    linkLabel: <><i className="fa-brands fa-github" /> GitHub</>,
  },
  {
    img:   cyberImg,
    alt:   'Cybersecurity Training Platform',
    badge: 'KPU Integration Project · Team Lead',
    title: 'Cybersecurity Training Platform',
    desc:  'Graduation integration project at KPU. Led a team to build a full-stack cybersecurity e-learning SaaS platform — mentoring teammates on Spring Boot architecture, designing the back-end, and implementing JWT/OAuth2 auth, RBAC, and AWS deployment with Docker CI/CD.',
    tags:  ['Spring Boot', 'ReactJS', 'AWS', 'Docker'],
    link:  '#',
    linkLabel: <><i className="fa-brands fa-github" /> GitHub</>,
  },
  {
    img:   migrationImg,
    alt:   'Data Migration Tool',
    badge: 'DHT Technologies',
    title: 'Data Migration Tool',
    desc:  'Java/Spring Boot XML transformation tool to parse, map, and convert data between disparate enterprise systems, ensuring integrity across integration points.',
    tags:  ['Java', 'Spring Boot', 'Oracle DB'],
    link:  'blog-page.html',
    linkLabel: <><i className="fa-solid fa-arrow-up-right-from-square" /> Read More</>,
  },
  {
    img:   hmsImg,
    alt:   'Health Management System',
    badge: 'Full-Stack Project',
    title: 'Health Management System',
    desc:  'Full stack with ReactJS and Spring Boot — hospital management system with role-based portals for Admin, Doctor, Staff, and Patient. Features exam prescriptions, health monitoring with automated threshold alerts, PDF report generation, and JWT authentication with token refresh.',
    tags:  ['Java', 'Spring Boot', 'ReactJS', 'MySQL', 'JWT', 'Tailwind CSS'],
    links: [
      { href: 'https://github.com/phanbaluanvo/hms-frontend', label: <><i className="fa-brands fa-github" /> Frontend</> },
      { href: 'https://github.com/phanbaluanvo/hms-backend',  label: <><i className="fa-brands fa-github" /> Backend</>  },
    ],
  },
]

function SectionTitle({ children }) {
  return (
    <div className="text-center mb-14">
      <h2 className="font-extrabold text-[2rem] text-body inline-block">
        {children}
        <span className="block w-12 h-1 bg-accent rounded-sm mx-auto mt-2.5" />
      </h2>
    </div>
  )
}

const MAX_TILT = 12

function ProjectCard({ project }) {
  const revealRef = useScrollReveal()
  const cardRef   = useRef(null)
  const frameRef  = useRef(null)
  const [tilt, setTilt]     = useState({ x: 0, y: 0 })
  const [shine, setShine]   = useState({ x: 50, y: 50 })
  const [active, setActive] = useState(false)

  function onMouseMove(e) {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width   // 0..1
      const py = (e.clientY - rect.top)  / rect.height  // 0..1
      setTilt({ x: (py - 0.5) * -MAX_TILT, y: (px - 0.5) * MAX_TILT })
      setShine({ x: px * 100, y: py * 100 })
    })
  }

  function onMouseLeave() {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    setTilt({ x: 0, y: 0 })
    setShine({ x: 50, y: 50 })
    setActive(false)
  }

  return (
    <div ref={revealRef} className="reveal" style={{ perspective: '900px' }}>
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={onMouseLeave}
        className="group flex flex-col h-full bg-surface rounded-[24px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.10)] border border-line relative"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${active ? 'translateZ(8px)' : ''}`,
          transition: active ? 'transform 0.08s ease-out, box-shadow 0.3s ease' : 'transform 0.5s ease, box-shadow 0.3s ease',
          boxShadow: active
            ? `0 20px 48px rgba(0,0,0,0.22), 0 0 0 1px color-mix(in srgb, var(--color-accent) 25%, transparent)`
            : '0 4px 16px rgba(0,0,0,0.10)',
          willChange: 'transform',
        }}
      >
        {/* Shine overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none rounded-[24px] transition-opacity duration-300"
          style={{
            opacity: active ? 1 : 0,
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.07) 0%, transparent 65%)`,
          }}
        />

        <div className="relative overflow-hidden h-[200px]">
          {project.img
            ? <img src={project.img} alt={project.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
            : <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.08]"
                style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 18%, var(--color-surface)) 0%, var(--color-surface-alt) 100%)' }}>
                <i className="fa-solid fa-laptop-code text-accent/40 text-[3.5rem]" />
              </div>
          }
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'color-mix(in srgb, var(--color-accent) 88%, transparent)' }}>
            {(project.links ?? [{ href: project.link, label: project.linkLabel }]).map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-accent-dark rounded-full font-bold text-[0.88rem] no-underline transition-transform duration-300 hover:scale-105 relative z-20">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <span className="inline-block px-2.5 py-0.5 bg-accent-light text-accent-dark rounded text-[0.7rem] font-bold uppercase tracking-[0.5px] mb-1.5">
            {project.badge}
          </span>
          <div className="text-[1.02rem] font-extrabold text-body mb-2">{project.title}</div>
          <p className="text-muted text-[0.95rem] leading-[1.72] flex-1 mb-3.5">{project.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(t => (
              <span key={t} className="px-2.5 py-0.5 rounded-[20px] text-[0.74rem] font-semibold bg-surface-alt text-muted border border-line">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-22 bg-surface-alt transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [grid-auto-rows:1fr]">
          {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  )
}
