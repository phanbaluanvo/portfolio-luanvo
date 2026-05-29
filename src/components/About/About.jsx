import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import profileImg from '../../assets/image/profile_LuanVo-2.png'

const STRENGTHS = [
  { icon: 'fa-solid fa-bullseye', title: 'End-to-End Owner', desc: 'Treats every problem as something to be fully solved end-to-end — not triaged and passed on.' },
  { icon: 'fa-solid fa-comments', title: 'Clear Communicator', desc: 'Translates complex technical findings for any audience — from engineers to non-technical stakeholders.' },
  { icon: 'fa-solid fa-magnifying-glass', title: 'Deep Technical Investigator', desc: 'Digs past surface symptoms to find root causes; never escalates without attempting a comprehensive solution first.' },
  { icon: 'fa-solid fa-book-open', title: 'Continuous Learner', desc: 'Committed to building both technical depth and business acumen through formal and self-directed learning.' },
  { icon: 'fa-solid fa-heart', title: 'Empathetic Technologist', desc: 'Understands the user-facing impact of technical issues and delivers resolutions that are accurate and considerate.' },
  { icon: 'fa-solid fa-people-group', title: 'Cross-functional Collaborator', desc: 'Bridges business, engineering, and vendor teams — driving long-term fixes rather than short-term patches.' },
]

const SKILLS = [
  { label: 'Languages', items: ['Java', 'JavaScript', 'SQL', 'PHP', 'C / C++', 'HTML / CSS'] },
  { label: 'Frameworks & Libraries', items: ['Spring Boot', 'ReactJS', 'REST API', 'Bootstrap', 'JWT / OAuth2', 'Llamaindex'] },
  { label: 'Databases', items: ['Oracle SQL', 'MySQL', 'MongoDB', 'AWS RDS'] },
  { label: 'Tools & Cloud', items: ['Git / GitHub', 'Docker', 'AWS (EC2, S3)', 'JIRA', 'Postman', 'Confluence', 'Wiki.js'] },
  { label: 'Methodologies', items: ['Agile / Scrum', 'Root Cause Analysis', 'ETL', 'Technical Documentation'] },
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

export default function About() {
  const ref = useScrollReveal()
  const driverRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!driverRef.current) return
      const { top, height } = driverRef.current.getBoundingClientRect()
      const scrollable = height - window.innerHeight
      if (scrollable <= 0) return
      const progress = Math.max(0, Math.min(1, -top / scrollable))
      const idx = Math.min(Math.floor(progress * STRENGTHS.length), STRENGTHS.length - 1)
      setActiveIdx(idx)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const prev = STRENGTHS[activeIdx - 1] ?? null
  const curr = STRENGTHS[activeIdx]
  const next = STRENGTHS[activeIdx + 1] ?? null

  return (
    <section id="about" className="bg-surface transition-colors duration-300">

      {/* Bio */}
      <div className="max-w-6xl mx-auto px-4 pt-22 pb-14">
        <SectionTitle>About Me</SectionTitle>

        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-12 reveal">
          <div className="lg:w-1/3 w-full flex-shrink-0">
            <div className="relative">
              <div className="hidden md:block absolute -top-3.5 -left-3.5 w-full h-full border-[3px] border-accent rounded-[24px] -z-10" />
              <img src={profileImg} alt="Luan Vo" className="w-full object-cover rounded-[24px] shadow-[0_12px_36px_rgba(0,0,0,0.14)] block" />
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <p className="text-muted leading-[1.85] text-[0.97rem] mb-3.5">
              I'm a results-driven <strong className="text-body">Technical Support Specialist &amp; Software Developer</strong> with
              4+ years of experience working for <strong className="text-body">Bell Canada</strong> (through DHT Technologies Inc.),
              where I own production incident resolution end-to-end for enterprise billing systems.
            </p>
            <p className="text-muted leading-[1.85] text-[0.97rem] mb-5">
              I specialize in deep root cause analysis, Oracle SQL investigation, and building internal tooling
              that eliminates recurring problems. I recently graduated with a Bachelor of Technology from
              KPU and led a full-stack cybersecurity platform as Integration Project Team Lead.
            </p>

            {SKILLS.map(({ label, items }) => (
              <div key={label} className="mb-4">
                <div className="font-bold text-[0.78rem] uppercase tracking-[1.2px] text-muted mb-2">{label}</div>
                <div className="flex flex-wrap gap-[7px]">
                  {items.map(item => (
                    <span key={item} className="inline-block px-3 py-1 rounded-[20px] text-[0.8rem] font-semibold bg-accent-light text-accent-dark border border-accent/28 transition-all duration-300 cursor-default hover:bg-accent hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_color-mix(in_srgb,var(--color-accent)_30%,transparent)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Strengths — scroll driver */}
      <div ref={driverRef} style={{ height: `calc(${STRENGTHS.length} * 150px + 200vh - 80px)` }}>
        <div className="sticky top-0 h-screen bg-surface flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

            {/* LEFT: "I'm a" */}
            <div className="hidden lg:flex flex-col select-none">
              <div className="font-bold text-[0.78rem] uppercase tracking-[1.2px] text-muted mb-6">Key Strengths</div>
              <p className="text-[5.5rem] font-extrabold leading-none opacity-[0.15] dark:opacity-[0.25]"
                style={{ color: 'var(--color-body)' }}>
                I'm a(n)...
              </p>
            </div>

            {/* RIGHT: 3-item display */}
            <div className="flex flex-col justify-center">
              {/* Mobile header + "I'm a(n)" */}
              <div className="lg:hidden mb-6 select-none">
                <div className="font-bold text-[0.78rem] uppercase tracking-[1.2px] text-muted mb-3">Key Strengths</div>
                <p className="text-[2.8rem] font-extrabold leading-none opacity-[0.15] dark:opacity-[0.25]"
                  style={{ color: 'var(--color-body)' }}>
                  I'm a(n)
                </p>
              </div>

              {/* Prev */}
              <div className="h-[52px] flex items-center overflow-hidden transition-all duration-300 select-none"
                style={{ opacity: prev ? 0.28 : 0 }}>
                <div className="flex items-center gap-2.5">
                  <i className={(prev ?? curr).icon} style={{ fontSize: '1rem', color: 'var(--color-muted)' }} />
                  <span className="text-[1.3rem] font-semibold text-muted">{prev?.title ?? ''}</span>
                </div>
              </div>

              {/* Active */}
              <div className="pl-4 border-l-[3px] transition-all duration-300 select-none py-3"
                style={{ borderColor: 'var(--color-accent)' }}>
                <div className="flex items-center gap-3 mb-2.5 min-h-[2.8rem]">
                  <i className={curr.icon} style={{ fontSize: '1.3rem', color: 'var(--color-accent)' }} />
                  <span className="text-[1.75rem] font-extrabold leading-tight" style={{ color: 'var(--color-body)' }}>
                    {curr.title}
                  </span>
                </div>
                <p key={activeIdx} className="text-muted text-[0.95rem] leading-[1.75] animate-fade-in-up h-[90px] overflow-hidden"
                  style={{ animationDuration: '0.35s' }}>
                  {curr.desc}
                </p>
              </div>

              {/* Next */}
              <div className="h-[52px] flex items-center overflow-hidden transition-all duration-300 select-none"
                style={{ opacity: next ? 0.28 : 0 }}>
                <div className="flex items-center gap-2.5">
                  <i className={(next ?? curr).icon} style={{ fontSize: '1rem', color: 'var(--color-muted)' }} />
                  <span className="text-[1.3rem] font-semibold text-muted">{next?.title ?? ''}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
