import { skillCategories } from '../data/data.js'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#080c10]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#00e6a0] mb-4">
          <span className="opacity-50">//</span> Expertise
        </div>
        <h2 className="font-display font-extrabold text-[#f0f6ff] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}>
          Core Skills
        </h2>
        <p className="text-[#8fa3b8] text-[1.02rem] max-w-xl mb-14">
          A broad technical foundation spanning infrastructure, development, data, and AI —
          built for end-to-end system delivery.
        </p>

        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {skillCategories.map((cat, i) => (
            <div
              key={cat.name}
              className={`fade-up ${i % 3 === 1 ? 'delay-1' : i % 3 === 2 ? 'delay-2' : ''} bg-[#111820] border border-[rgba(255,255,255,0.06)] rounded-xl p-7 hover:border-[#00e6a0] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all group relative overflow-hidden`}
            >
              {/* subtle hover glow */}
              <div className="absolute inset-0 bg-[rgba(0,230,160,0.03)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#141c25] border border-[rgba(0,230,160,0.12)] rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                  {cat.icon}
                </div>
                <div className="font-display font-bold text-[#f0f6ff] text-[0.95rem]">{cat.name}</div>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="font-mono text-[0.66rem] px-2.5 py-1 rounded-md bg-[#1a2432] text-[#8fa3b8] border border-[rgba(255,255,255,0.06)] hover:bg-[#141c25] hover:text-[#00e6a0] hover:border-[#00e6a0] transition-all cursor-default tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
