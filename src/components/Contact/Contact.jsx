import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const INFO_ITEMS = [
  { href: 'mailto:phanbaluanvo@gmail.com',             icon: 'fa-solid fa-envelope',     label: 'Email',    val: 'phanbaluanvo@gmail.com', external: false },
  { href: 'https://www.linkedin.com/in/phanbaluanvo',  icon: 'fa-brands fa-linkedin',    label: 'LinkedIn', val: 'in/phanbaluanvo',        external: true  },
  { href: 'https://github.com/phanbaluanvo',            icon: 'fa-brands fa-github',      label: 'GitHub',   val: 'phanbaluanvo',           external: true  },
  { href: null,                                         icon: 'fa-solid fa-location-dot', label: 'Location', val: 'Vancouver, BC, Canada',  external: false },
]

const inputClass = 'w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-[0.93rem] font-[Nunito] transition-[background,border-color,box-shadow] duration-300 focus:outline-none focus:bg-white/8 focus:border-accent focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_20%,transparent)] placeholder:text-white/28'
const labelClass = 'block text-white/60 text-[0.78rem] font-bold uppercase tracking-[1.2px] mb-1.5'

const INITIAL = { name: '', email: '', subject: '', message: '' }

function SectionTitle({ children }) {
  return (
    <div className="text-center mb-14">
      <h2 className="font-extrabold text-[2rem] text-white inline-block">
        {children}
        <span className="block w-12 h-1 bg-accent rounded-sm mx-auto mt-2.5" />
      </h2>
    </div>
  )
}

export default function Contact() {
  const ref = useScrollReveal()
  const [fields, setFields] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setFields(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...fields }),
      })
      const data = await res.json()
      if (!data.success) throw new Error()
      setStatus('success')
      setFields(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-22 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Get In Touch</SectionTitle>

        <div ref={ref} className="flex flex-col lg:flex-row gap-12 reveal">
          {/* Info */}
          <div className="lg:w-5/12">
            <p className="text-white/55 text-[0.9rem] leading-[1.7] mb-7">
              Open to new opportunities — feel free to reach out directly or send a message.
            </p>
            <div className="flex flex-col gap-3.5">
              {INFO_ITEMS.map(({ href, icon, label, val, external }) => {
                const content = (
                  <>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-accent text-[15px] flex-shrink-0 border border-accent/25 bg-accent-light">
                      <i className={icon} />
                    </div>
                    <div>
                      <div className="text-[0.72rem] uppercase tracking-[1px] text-white/40 font-bold mb-0.5">{label}</div>
                      <div className="text-[0.88rem] text-white/85 font-semibold">{val}</div>
                    </div>
                  </>
                )
                const base = 'flex items-center gap-3.5 px-4 py-3.5 rounded-xl border border-white/8 no-underline transition-all duration-300'
                return href ? (
                  <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
                    className={`${base} hover:border-accent/30 hover:translate-x-1`}
                    style={{ background: 'rgba(255,255,255,0.04)' }}>
                    {content}
                  </a>
                ) : (
                  <div key={label} className={base} style={{ background: 'rgba(255,255,255,0.04)' }}>
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Name</label>
                  <input name="name" type="text" required className={inputClass} placeholder="Your full name"
                    value={fields.name} onChange={handleChange} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input name="email" type="email" required className={inputClass} placeholder="your@email.com"
                    value={fields.email} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Subject</label>
                <input name="subject" type="text" required className={inputClass} placeholder="What's this about?"
                  value={fields.subject} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea name="message" required className={`${inputClass} resize-vertical`} rows={6}
                  placeholder="Your message..." value={fields.message} onChange={handleChange} />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-[0.88rem] font-semibold">
                  <i className="fa-solid fa-circle-check" /> Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-[0.88rem] font-semibold">
                  <i className="fa-solid fa-circle-exclamation" /> Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 bg-accent text-white border-none rounded-full font-bold text-[0.97rem] tracking-[0.8px] font-[Nunito] cursor-pointer transition-all duration-300 hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_10px_28px_color-mix(in_srgb,var(--color-accent)_36%,transparent)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
              >
                {status === 'sending'
                  ? <><i className="fa-solid fa-spinner fa-spin mr-2" />Sending...</>
                  : <><i className="fa-solid fa-paper-plane mr-2" />Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
