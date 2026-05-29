import { useScrollReveal } from '../../hooks/useScrollReveal'

const ROLES = [
  {
    title: 'Technical Support Specialist — Enterprise Billing Systems',
    achievements: [
      <>Sole owner of production incident resolution for Bell Canada's enterprise billing system — independently diagnosing root causes and implementing direct fixes on live systems (SQL, data corrections, config changes).</>,
      <>Investigated complex, multi-layered system issues with advanced Oracle SQL queries and real-time log analysis, identifying root causes that recurring tickets had missed — reducing repeat incidents by <strong>30%</strong>.</>,
      <>Identified recurring ticket patterns and proactively built internal tooling to automate backend/database update workflows — reducing resolution time by <strong>75%</strong>.</>,
      <>Owned the full incident lifecycle end-to-end: triage → independent root cause analysis → production fix → post-fix validation, minimizing escalation to engineering.</>,
      <>Participated in 24/7 on-call rotations managing urgent technical escalations under high-pressure SLA targets.</>,
      <>Authored troubleshooting guides and technical documentation in Wiki.js and Confluence, enabling the broader support team to resolve a wider class of issues independently.</>,
      <>Built a Java/Spring Boot XML transformation tool to parse, map, and convert data between disparate systems, ensuring data integrity across complex integration points.</>,
    ],
    tech: ['Oracle SQL', 'PL/SQL', 'DBeaver', 'OpenShift', 'SharePoint', 'JIRA', 'Wiki.js', 'Confluence', 'Command Line', 'Terminal', 'Linux', 'Windows'],
  },
  {
    title: 'Junior Software Developer',
    achievements: [
      <>Collaborated with the BA team and client to analyze requirements and legacy systems for migrating <strong>15M+ records</strong> (Customer Profiles, Invoices, Services, Adjustments, Tariffs).</>,
      <>Designed mapping documents using Wiki.js and integrated backend migration tools with <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>RESTful APIs</strong>, and <strong>Hibernate</strong>.</>,
      <>Led the ETL process for invoices and adjustments, optimizing migration speed by <strong>80%</strong>.</>,
      <>Developed a Java-based reporting tool to extract, compare, and validate <strong>15M+ records</strong> from Oracle databases post-migration.</>,
      <>Enhanced reporting tool performance, reducing CSV file generation time by <strong>85%</strong>.</>,
      <>Built a Java-based XML transformation tool to parse, map, and convert XML files between different systems, ensuring data integrity and confidentiality.</>,
      <>Implemented unit and integration tests using <strong>JUnit</strong> to ensure system reliability and data accuracy.</>,
    ],
    tech: ['Java', 'Spring Boot', 'RESTful APIs', 'Hibernate', 'Oracle SQL', 'JUnit', 'Wiki.js'],
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

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-22 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Work Experience</SectionTitle>

        <div ref={ref} className="reveal">
          <div className="flex gap-7">
            {/* Timeline side */}
            <div className="flex flex-col items-center flex-shrink-0 pt-1">
              <div className="w-4 h-4 rounded-full bg-accent border-[3px] border-white shadow-[0_0_0_3px_rgba(16,185,129,0.3)] z-10 flex-shrink-0" />
              <div className="w-0.5 flex-1 min-h-[60px] mt-2" style={{ background: 'linear-gradient(to bottom, #10B981, rgba(16,185,129,0.1))' }} />
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              {/* Company header */}
              <div className="flex flex-wrap justify-between items-start gap-2.5 mb-4">
                <div>
                  <div className="text-[1.25rem] font-extrabold text-dark">Bell Canada</div>
                  <div className="text-[0.82rem] text-muted mt-0.5">via DHT Technologies Inc.</div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-light text-accent-dark rounded-[20px] text-[0.78rem] font-bold">
                    <i className="fa-regular fa-calendar" /> Jan 2022 – Present
                  </span>
                  <span className="text-[0.78rem] text-muted flex items-center gap-1">
                    <i className="fa-solid fa-location-dot" /> Remote
                  </span>
                </div>
              </div>

              {/* Roles */}
              {ROLES.map((role, i) => (
                <div key={role.title} className={i > 0 ? 'mt-8' : ''}>
                  <div className="text-[1rem] font-bold text-accent-dark italic mb-4">{role.title}</div>
                  <ul className="list-none p-0 m-0 mb-4 flex flex-col gap-2.5">
                    {role.achievements.map((item, j) => (
                      <li key={j} className="text-[0.9rem] text-muted leading-[1.75] pl-5 relative">
                        <span className="absolute left-0 top-0.5 text-accent text-[0.8rem]">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.tech.map(t => (
                      <span key={t} className="px-2.5 py-0.5 rounded-[20px] text-[0.74rem] font-semibold bg-site-bg text-muted border border-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
