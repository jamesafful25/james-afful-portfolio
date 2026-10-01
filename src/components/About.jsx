const focusTags = [
  'Scalable Backend Systems', 'Infrastructure Automation', 'Cloud Deployment',
  'AI-Driven Workflows', 'Data-Driven Systems', 'CI/CD Pipelines',
]

const stats = [
  { num: '8+',   label: 'Technologies Mastered' },
  { num: 'AWS',  label: '& Azure Cloud Platforms' },
  { num: 'CI/CD', label: 'Automated Pipelines' },
  { num: 'AI',   label: 'LLM & Automation Expert' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d1117]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="fade-up">
            <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#00e6a0] mb-4">
              <span className="opacity-50">//</span> About Me
            </div>
            <h2 className="font-display font-extrabold text-[#f0f6ff] mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Engineering reliable systems at scale
            </h2>
            <div className="w-12 h-0.5 rounded-full mb-8"
              style={{ background: 'linear-gradient(90deg, #00e6a0, #00b8ff)' }} />

            <p className="text-[#8fa3b8] leading-[1.85] mb-4">
              James Afful is a technology professional based in Ghana working across DevOps engineering,
              backend development, cloud infrastructure, AI automation, and data analytics. He designs
              and operates systems built to scale — with a focus on reliability, automation, and
              operational intelligence.
            </p>
            <p className="text-[#8fa3b8] leading-[1.85] mb-4">
              My engineering philosophy centers on building infrastructure that removes friction:
              automated delivery pipelines, cloud-native deployments and AI-driven workflows that
              let teams move faster with greater confidence.
            </p>
            <p className="text-[#8fa3b8] leading-[1.85] mb-6">
              I brings additional depth in data science, financial modeling and research 
              enabling data-driven decision systems that bridge technical capability with business impact.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {focusTags.map(tag => (
                <span key={tag}
                  className="bg-[#141c25] border border-[rgba(0,230,160,0.12)] text-[#00e6a0] font-mono text-[0.68rem] px-3 py-1.5 rounded-md tracking-wide hover:bg-[rgba(0,230,160,0.08)] hover:border-[#00e6a0] transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* Open to work badge */}
            <div className="flex items-center gap-4 bg-[#141c25] border border-[#00e6a0] rounded-xl p-4 mt-2">
              <div className="w-10 h-10 rounded-full bg-[rgba(0,230,160,0.1)] flex items-center justify-center text-xl flex-shrink-0">
                🌍
              </div>
              <div>
                <strong className="block text-[#f0f6ff] text-[0.95rem] mb-0.5">Open to Remote Opportunities</strong>
                <p className="text-[#00e6a0] text-[0.82rem] m-0">
                  DevOps Engineering · Backend Engineering · Full Stack · Data Science · AI Automation
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="fade-up delay-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map(s => (
                <div key={s.num}
                  className="bg-[#141c25] border border-[rgba(0,230,160,0.12)] rounded-xl p-6 relative overflow-hidden hover:border-[#00e6a0] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,230,160,0.1)] transition-all group">
                  <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'linear-gradient(90deg, #00e6a0, #00b8ff)' }} />
                  <div className="font-display font-extrabold text-[#00e6a0] leading-none mb-1.5"
                    style={{ fontSize: '2.2rem' }}>{s.num}</div>
                  <div className="text-[0.82rem] text-[#8fa3b8]">{s.label}</div>
                </div>
              ))}
              {/* Wide card */}
              <div className="col-span-2 bg-[#141c25] border border-[rgba(0,230,160,0.12)] rounded-xl p-6 hover:border-[#00e6a0] transition-all hover:-translate-y-1">
                <div className="font-display font-extrabold text-[#00e6a0] text-2xl leading-snug mb-1">
                  Ghana 🇬🇭
                </div>
                <div className="text-[0.82rem] text-[#8fa3b8]">
                  Based in · Available globally · Remote-first
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
