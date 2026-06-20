import { useScrollReveal } from '../../hooks/useScrollReveal'

const ROLES = [
  {
    title: 'System Analyst / Application Development and Support — Enterprise Billing Systems',
    achievements: [
      <>Served as the primary Systems Analyst responsible for production incident resolution at Bell Canada's enterprise billing system — leveraging a deep understanding of end-to-end billing workflows and business impact to independently diagnose root causes, implement direct fixes on live systems (SQL, data corrections, config changes), and validate resolutions post-deployment.</>,
      <>Investigated deeply complex, multi-layered system issues by writing advanced Oracle SQL queries and analyzing real-time application logs — going well beyond surface-level symptoms to identify root causes that recurring tickets had missed, reducing repeat incidents by <strong>30%</strong>.</>,
      <>Performed server administration tasks including monitoring scheduled jobs and system outputs — proactively identifying and resolving errors before they impacted downstream processes or customer-facing operations.</>,
      <>Participated in 24/7 on-call rotations, managing urgent technical escalations with a calm, solution-focused approach under high-pressure SLA targets.</>,
      <>Collaborated with Bell Canada's customer service agents (CSR) and business teams to deeply understand the user-facing impact of billing issues, translating complex technical findings into clear, empathetic, and actionable resolutions — ensuring both technical accuracy and customer satisfaction.</>,
      <>Built an AI-powered support agent using <strong>Claude Code</strong>, connected to the internal ticket database for historical incident lookup and directly integrated with a test database and sandbox environment — allowing team members to self-investigate customer-reported issues, query past resolutions, and reproduce defects end-to-end with minimal engineering involvement, reducing resolution time by <strong>75%</strong>.</>,
      <>Assisted peers with planning and supporting higher-complexity incidents and cross-team projects requiring deeper technical investigation.</>,
      <>Assisted the testing team in developing UAT test scripts for Bell Canada change requests, supporting validation of fixes across billing and order-to-invoice workflows.</>,
      <>Authored troubleshooting guides and technical documentation in Wiki.js and Confluence — synthesizing complex engineering findings into structured resources that reduced future resolution time and enabled the broader support team to resolve a wider class of issues independently.</>,
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
      <h2 className="font-extrabold text-[2rem] text-body inline-block">
        {children}
        <span className="block w-12 h-1 bg-accent rounded-sm mx-auto mt-2.5" />
      </h2>
    </div>
  )
}

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-22 bg-surface transition-colors duration-300 rounded-tl-[28px] rounded-tr-[28px] relative"
      style={{ boxShadow: '0 -12px 40px rgba(0,0,0,0.10)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Work Experience</SectionTitle>

        <div ref={ref} className="reveal">
          <div className="flex gap-7">
            <div className="flex flex-col items-center flex-shrink-0 pt-1">
              <div className="w-4 h-4 rounded-full bg-accent border-[3px] border-surface shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_30%,transparent)] z-10 flex-shrink-0" />
              <div className="w-0.5 flex-1 min-h-[60px] mt-2 bg-gradient-to-b from-accent to-transparent" />
            </div>

            <div className="flex-1 pb-8">
              <div className="flex flex-wrap justify-between items-start gap-2.5 mb-4">
                <div>
                  <div className="text-[1.25rem] font-extrabold text-body">Bell Canada</div>
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

              {ROLES.map((role, i) => (
                <div key={role.title} className={i > 0 ? 'mt-8' : ''}>
                  <div className="text-[1rem] font-bold text-accent italic mb-4">{role.title}</div>
                  <ul className="list-none p-0 m-0 mb-4 flex flex-col gap-2.5">
                    {role.achievements.map((item, j) => (
                      <li key={j} className="text-[1rem] text-muted leading-[1.75] pl-5 relative">
                        <span className="absolute left-0 top-0.5 text-accent text-[0.8rem]">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.tech.map(t => (
                      <span key={t} className="px-2.5 py-0.5 rounded-[20px] text-[0.74rem] font-semibold bg-surface-alt text-muted border border-line">
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
