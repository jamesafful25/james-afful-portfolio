import { researchItems } from '../data/data.js'

export default function Research() {
  return (
    <section id="research" className="py-24 bg-[#080c10]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#00e6a0] mb-4">
          <span className="opacity-50">//</span> Innovation
        </div>
        <h2 className="font-display font-extrabold text-[#f0f6ff] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}>
          Research &amp; Innovation
        </h2>
        <p className="text-[#8fa3b8] text-[1.02rem] max-w-xl mb-12">
          Exploring the intersection of technology, data systems, and policy through applied research and analysis.
        </p>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))' }}>
          {researchItems.map((item, i) => (
            <div
              key={item.title}
              data-num={item.num}
              className={`research-num fade-up ${['', 'delay-1', 'delay-2', 'delay-3'][i]} bg-[#111820] border border-[rgba(255,255,255,0.06)] rounded-xl p-8 relative overflow-hidden hover:border-[#00e6a0] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,230,160,0.08)] transition-all`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-display font-bold text-[#f0f6ff] text-[1rem] mb-3">{item.title}</h3>
              <p className="text-[#8fa3b8] text-[0.84rem] leading-relaxed m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
