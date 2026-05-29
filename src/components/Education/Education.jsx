import { useScrollReveal } from '../../hooks/useScrollReveal'
import kpuImg     from '../../assets/image/kpu.svg'
import langaraImg from '../../assets/image/langara.svg'
import bgImg      from '../../assets/image/education_bg.jpg'

const SCHOOLS = [
  {
    img:     kpuImg,
    alt:     'KPU',
    badge:   'Completed',
    name:    'Kwantlen Polytechnic University',
    location:'Surrey, BC, Canada',
    program: 'Bachelor of Technology — Information Technology (Mobile & Web)',
    period:  'May 2022 – May 2025',
  },
  {
    img:     langaraImg,
    alt:     'Langara College',
    badge:   'Completed',
    name:    'Langara College',
    location:'Vancouver, BC, Canada',
    program: 'Associate of Science — Computer Science',
    period:  'Jan 2020 – Jan 2022',
  },
]

function SectionTitle({ children, light }) {
  return (
    <div className="text-center mb-14">
      <h2 className={`font-extrabold text-[2rem] inline-block ${light ? 'text-white' : 'text-dark'}`}>
        {children}
        <span className="block w-12 h-1 bg-accent rounded-sm mx-auto mt-2.5" />
      </h2>
    </div>
  )
}

function EduCard({ school }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal">
      <div
        className="flex flex-col h-full min-h-[500px] rounded-[24px] overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
        style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <img
          src={school.img}
          alt={school.alt}
          className="h-[200px] w-full object-contain block flex-shrink-0 p-8"
          style={{ background: 'rgba(255,255,255,0.92)' }}
        />
        <div className="p-6 flex-1">
          <span className="inline-block px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-[0.5px] rounded text-accent border border-accent/30 mb-2 bg-accent-light">
            {school.badge}
          </span>
          <div className="text-[1.1rem] font-extrabold text-white mb-1">{school.name}</div>
          <div className="text-[0.82rem] text-accent font-semibold flex items-center gap-1 mb-4">
            <i className="fa-solid fa-location-dot" /> {school.location}
          </div>
          <p className="text-white/72 text-[0.88rem] mb-1.5">
            <strong className="text-white">Program:</strong> {school.program}
          </p>
          <p className="text-white/72 text-[0.88rem]">
            <strong className="text-white">{school.period}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section
      id="education"
      className="py-22 relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(8,20,40,0.88)' }} />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <SectionTitle light>Education</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SCHOOLS.map(school => <EduCard key={school.name} school={school} />)}
        </div>
      </div>
    </section>
  )
}
