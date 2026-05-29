import { useScrollReveal } from '../../hooks/useScrollReveal'
import profileImg from '../../assets/image/profile_LuanVo-2.png'

const STRENGTHS = [
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Ownership Mindset',
    desc: 'Treats every problem as something to be fully solved end-to-end — not triaged and passed on.',
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'Clear Communicator',
    desc: 'Translates complex technical findings for any audience — from engineers to non-technical stakeholders.',
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Deep Technical Investigator',
    desc: 'Digs past surface symptoms to find root causes; never escalates without attempting a comprehensive solution first.',
  },
  {
    icon: 'fa-solid fa-book-open',
    title: 'Continuous Learner',
    desc: 'Committed to building both technical depth and business acumen through formal and self-directed learning.',
  },
  {
    icon: 'fa-solid fa-heart',
    title: 'Empathy-Driven',
    desc: 'Understands the user-facing impact of technical issues and delivers resolutions that are accurate and considerate.',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Cross-functional Collaborator',
    desc: 'Bridges business, engineering, and vendor teams — driving long-term fixes rather than short-term patches.',
  },
]

const SKILLS = [
  { label: 'Languages',              items: ['Java', 'JavaScript', 'SQL', 'PHP', 'C / C++', 'HTML / CSS'] },
  { label: 'Frameworks & Libraries', items: ['Spring Boot', 'ReactJS', 'REST API', 'Bootstrap', 'JWT / OAuth2', 'Llamaindex'] },
  { label: 'Databases',              items: ['Oracle SQL', 'MySQL', 'MongoDB', 'AWS RDS'] },
  { label: 'Tools & Cloud',          items: ['Git / GitHub', 'Docker', 'AWS (EC2, S3)', 'JIRA', 'Postman', 'Confluence', 'Wiki.js'] },
  { label: 'Methodologies',          items: ['Agile / Scrum', 'Root Cause Analysis', 'ETL', 'Technical Documentation'] },
]

function SectionTitle({ children }) {
  return (
    <div className="text-center mb-14">
      <h2 className="font-extrabold text-[2rem] text-dark inline-block relative">
        {children}
        <span className="block w-12 h-1 bg-accent rounded-sm mx-auto mt-2.5" />
      </h2>
    </div>
  )
}

export default function About() {
  const ref          = useScrollReveal()
  const strengthsRef = useScrollReveal()

  return (
    <section id="about" className="py-22 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>

        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-12 reveal">
          {/* Image */}
          <div className="lg:w-1/3 w-full flex-shrink-0">
            <div className="relative">
              <div className="hidden md:block absolute -top-3.5 -left-3.5 w-full h-full border-[3px] border-accent rounded-[24px] -z-10" />
              <img
                src={profileImg}
                alt="Luan Vo"
                className="w-full object-cover rounded-[24px] shadow-[0_12px_36px_rgba(0,0,0,0.14)] block"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:w-2/3 w-full">
            <p className="text-muted leading-[1.85] text-[0.97rem] mb-3.5">
              I'm a results-driven <strong className="text-dark">Technical Support Specialist &amp; Software Developer</strong> with
              4+ years of experience working for <strong className="text-dark">Bell Canada</strong> (through DHT Technologies Inc.),
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
                    <span
                      key={item}
                      className="inline-block px-3 py-1 rounded-[20px] text-[0.8rem] font-semibold bg-accent-light text-accent-dark border border-accent/28 transition-all duration-300 cursor-default hover:bg-accent hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div ref={strengthsRef} className="mt-14 reveal">
          <div className="font-bold text-[0.78rem] uppercase tracking-[1.2px] text-muted mb-4">Key Strengths</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STRENGTHS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-3.5 items-start p-[18px] bg-site-bg border border-gray-200 rounded-xl transition-all duration-300 hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)]"
              >
                <div className="w-9 h-9 rounded-[9px] bg-accent-light text-accent flex items-center justify-center text-[14px] flex-shrink-0">
                  <i className={icon} />
                </div>
                <div>
                  <div className="font-bold text-[0.87rem] text-dark mb-1">{title}</div>
                  <p className="text-[0.79rem] text-muted leading-[1.6] m-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
