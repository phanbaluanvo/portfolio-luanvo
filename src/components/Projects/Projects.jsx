import { useScrollReveal } from '../../hooks/useScrollReveal'
import cyberImg      from '../../assets/image/GenAI_Stack_.png'
import migrationImg  from '../../assets/image/Data-Migration-Tools.png'
import hmsImg        from '../../assets/image/booking-app.png'
import portfolioImg  from '../../assets/image/cloud_bg.jpg'


const PROJECTS = [
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
  {
    img:      portfolioImg,
    alt:      'Portfolio Website',
    badge:    'Personal Project',
    title:    'Portfolio Website',
    desc:     'Personal portfolio built with ReactJS, Vite, and Tailwind CSS v4. Features a typewriter effect, scroll-reveal animations, and fully responsive design across all devices.',
    tags:     ['ReactJS', 'Vite', 'Tailwind CSS', 'JavaScript'],
    link:     'https://github.com/phanbaluanvo/portfolio-luanvo',
    linkLabel: <><i className="fa-brands fa-github" /> GitHub</>,
  },
]

function SectionTitle({ children }) {
  return (
    <div className="text-center mb-14">
      <h2 className="font-extrabold text-[2rem] text-dark inline-block">
        {children}
        <span className="block w-12 h-1 bg-accent rounded-sm mx-auto mt-2.5" />
      </h2>
    </div>
  )
}

function ProjectCard({ project }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal">
      <div className="group flex flex-col h-full bg-white rounded-[24px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.10)] border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_36px_rgba(0,0,0,0.14)]">
        <div className="relative overflow-hidden h-[200px]">
          <img
            src={project.img}
            alt={project.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(5,150,105,0.88)' }}>
            {(project.links ?? [{ href: project.link, label: project.linkLabel }]).map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-accent-dark rounded-full font-bold text-[0.88rem] no-underline transition-transform duration-300 hover:scale-105">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <span className="inline-block px-2.5 py-0.5 bg-accent-light text-accent-dark rounded text-[0.7rem] font-bold uppercase tracking-[0.5px] mb-1.5">
            {project.badge}
          </span>
          <div className="text-[1.02rem] font-extrabold text-dark mb-2">{project.title}</div>
          <p className="text-muted text-[0.87rem] leading-[1.72] flex-1 mb-3.5">{project.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(t => (
              <span key={t} className="px-2.5 py-0.5 rounded-[20px] text-[0.74rem] font-semibold bg-site-bg text-muted border border-gray-200">
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
    <section id="projects" className="py-22 bg-site-bg">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [grid-auto-rows:1fr]">
          {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  )
}
