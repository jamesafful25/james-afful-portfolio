import { useState } from 'react'
import { projects } from '../data/data.js'

const filters = [
  { key: 'all',       label: 'All'        },
  { key: 'devops',    label: 'DevOps'     },
  { key: 'backend',   label: 'Backend'    },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'ai',        label: 'AI & Data'  },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 bg-[#0d1117]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#00e6a0] mb-4">
          <span className="opacity-50">//</span> Work
        </div>
        <h2 className="font-display font-extrabold text-[#f0f6ff] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}>
          Featured Projects
        </h2>
        <p className="text-[#8fa3b8] text-[1.02rem] max-w-xl mb-10">
          Systems built for scale — from automated infrastructure to intelligent backends and data platforms.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`font-mono text-[0.7rem] uppercase tracking-widest px-4 py-2 rounded-md border transition-all
                ${active === f.key
                  ? 'bg-[#00e6a0] text-black border-[#00e6a0]'
                  : 'bg-transparent text-[#8fa3b8] border-[rgba(255,255,255,0.06)] hover:border-[#00e6a0] hover:text-[#00e6a0]'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))' }}>
          {filtered.map((p, i) => (
            <div
              key={p.name}
              className="project-card-bar fade-up bg-[#111820] border border-[rgba(255,255,255,0.06)] rounded-xl p-7 flex flex-col gap-4 hover:border-[rgba(0,230,160,0.2)] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.3)] hover:bg-[#16202e] transition-all relative overflow-hidden"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <div className="font-mono text-[0.63rem] tracking-[0.15em] uppercase text-[#00e6a0]">
                {p.type}
              </div>
              <div className="font-display font-bold text-[#f0f6ff] text-[1.08rem]">
                {p.name}
              </div>
              <p className="text-[#8fa3b8] text-[0.86rem] leading-relaxed flex-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(s => (
                  <span key={s}
                    className="font-mono text-[0.63rem] px-2 py-1 rounded bg-[#1a2432] text-[#546a82] border border-[rgba(255,255,255,0.06)]">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                <a href={p.github} target="_blank" rel="noreferrer"
                  className="font-mono text-[0.68rem] flex items-center gap-1.5 px-3 py-1.5 border border-[rgba(255,255,255,0.06)] rounded-md text-[#8fa3b8] hover:text-[#00e6a0] hover:border-[#00e6a0] hover:bg-[rgba(0,230,160,0.05)] transition-all">
                  ⌥ GitHub
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    className="font-mono text-[0.68rem] flex items-center gap-1.5 px-3 py-1.5 border border-[rgba(255,255,255,0.06)] rounded-md text-[#8fa3b8] hover:text-[#00b8ff] hover:border-[#00b8ff] hover:bg-[rgba(0,184,255,0.05)] transition-all">
                    ↗ Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
