import { workflowSteps } from '../data/data.js'

const infoItems = [
  {
    icon: '⚡',
    title: 'Continuous Integration',
    desc: 'Automated testing, linting, and security scanning on every pull request — ensuring code quality before merge.',
  },
  {
    icon: '🚀',
    title: 'Continuous Delivery',
    desc: 'Zero-downtime deployments with rollback capabilities, feature flags, and environment promotion workflows.',
  },
  {
    icon: '📊',
    title: 'Observability',
    desc: 'Real-time metrics, distributed tracing, alerting, and performance dashboards across all production services.',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-[#080c10]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#00e6a0] mb-4">
          <span className="opacity-50">//</span> Architecture
        </div>
        <h2 className="font-display font-extrabold text-[#f0f6ff] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}>
          DevOps Workflow
        </h2>
        <p className="text-[#8fa3b8] text-[1.02rem] max-w-xl mb-12">
          An end-to-end automated delivery system — from code commit to monitored production.
        </p>

        <div className="fade-up bg-[#141c25] border border-[rgba(0,230,160,0.12)] rounded-2xl p-10 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(0,230,160,0.04) 0%, transparent 60%, rgba(0,184,255,0.04) 100%)' }} />

          <h3 className="font-display font-bold text-[#f0f6ff] text-xl mb-2 relative z-10">
            Automated Software Delivery Pipeline
          </h3>
          <p className="text-[#8fa3b8] text-[0.88rem] mb-12 max-w-xl relative z-10">
            Every deployment follows a fully automated, tested, and monitored path — eliminating manual
            steps, reducing risk, and enabling continuous delivery at scale.
          </p>

          {/* Pipeline steps */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-0 relative z-10 mb-12">
            {workflowSteps.map((step, i) => (
              <div key={step.name} className="flex items-center">
                <div className="flex flex-col items-center text-center min-w-[100px] px-2 group">
                  <div className="w-16 h-16 bg-[#0d1117] border-2 border-[rgba(0,230,160,0.15)] rounded-xl flex items-center justify-center text-2xl mb-3 transition-all group-hover:border-[#00e6a0] group-hover:bg-[rgba(0,230,160,0.06)] group-hover:scale-110 group-hover:shadow-[0_12px_30px_rgba(0,230,160,0.12)]">
                    {step.icon}
                  </div>
                  <div className="font-mono text-[0.7rem] font-bold text-[#8fa3b8] mb-1">{step.name}</div>
                  <div className="font-mono text-[0.62rem] text-[#546a82] leading-snug"
                    dangerouslySetInnerHTML={{ __html: step.desc.replace('·', '<br/>·') }} />
                </div>
                {i < workflowSteps.length - 1 && (
                  <div className="text-[#00e6a0] opacity-40 text-xl mx-1 pb-7 hidden md:block">→</div>
                )}
              </div>
            ))}
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {infoItems.map(item => (
              <div key={item.title} className="bg-[#0d1117] border border-[rgba(255,255,255,0.06)] rounded-xl p-5">
                <h4 className="font-display font-bold text-[#f0f6ff] text-[0.88rem] mb-2">
                  {item.icon} {item.title}
                </h4>
                <p className="text-[#8fa3b8] text-[0.8rem] leading-relaxed m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
