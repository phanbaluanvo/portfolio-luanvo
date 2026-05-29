const STATS = [
  { num: '4+', label: 'Years Experience' },
  { num: '2',  label: 'Degrees Earned'   },
  { num: '3',  label: 'Languages', sub: 'VI · EN (fluent) · FR (learning)' },
]

export default function Stats() {
  return (
    <div className="bg-dark border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          {STATS.map(({ num, label, sub }, i) => (
            <div
              key={label}
              className={`px-20 py-7 text-center ${i < STATS.length - 1 ? 'border-r border-white/[0.07]' : ''}`}
            >
              <div className="font-audiowide text-[2rem] font-bold text-accent leading-none mb-1.5">{num}</div>
              <div className="text-[0.74rem] text-white/45 uppercase tracking-[1px] font-semibold">{label}</div>
              {sub && <div className="text-[0.68rem] text-white/30 mt-0.5 tracking-[0.4px]">{sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
