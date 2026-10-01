export default function GitHub() {
  return (
    <section id="github" className="py-24 bg-[#0d1117]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#00e6a0] mb-4">
          <span className="opacity-50">//</span> Open Source
        </div>
        <h2 className="font-display font-extrabold text-[#f0f6ff] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}>
          GitHub
        </h2>
        <p className="text-[#8fa3b8] text-[1.02rem] max-w-xl mb-12">
          Explore code, projects and contributions across DevOps, backend engineering and AI automation.
        </p>

        <div className="fade-up bg-[#111820] border border-[rgba(0,230,160,0.12)] rounded-2xl p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <h3 className="font-display font-extrabold text-[#f0f6ff] text-2xl mb-3">@jamesafful</h3>
            <p className="text-[#8fa3b8] text-[0.92rem] leading-relaxed mb-8 max-w-lg">
              Open-source repositories covering DevOps tooling, backend APIs, infrastructure automation,
              and AI integrations. All projects are documented and built for production readiness.
            </p>
            <div className="flex gap-10 mb-8 flex-wrap">
              {[
                { num: '20+', label: 'Repositories' },
                { num: 'DevOps', label: 'Primary Focus' },
                { num: 'AI', label: 'Automation' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-extrabold text-[#00e6a0] text-3xl leading-none mb-1">{s.num}</div>
                  <div className="font-mono text-[0.68rem] text-[#546a82] tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-[0.76rem] font-bold uppercase tracking-wide bg-[#00e6a0] text-black hover:bg-transparent hover:text-[#00e6a0] border border-[#00e6a0] transition-all hover:-translate-y-0.5">
                View GitHub Profile
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-[0.76rem] font-bold uppercase tracking-wide bg-[#141c25] text-[#8fa3b8] border border-[rgba(0,230,160,0.12)] hover:border-[#00b8ff] hover:text-[#00b8ff] transition-all hover:-translate-y-0.5">
                Browse Repositories
              </a>
            </div>
          </div>

          <div className="text-center hidden lg:block">
            <div className="text-8xl leading-none mb-4">⌥</div>
            <div className="font-mono text-[0.72rem] text-[#546a82]">github.com/jamesafful25</div>
          </div>
        </div>
      </div>
    </section>
  )
}
