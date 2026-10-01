import { useState } from 'react'

const contactLinks = [
  { icon: '✉', label: 'Email', value: 'james.afful47@gmail.com', href: 'mailto:james.afful47@gmail.com' },
  { icon: '⌥', label: 'GitHub', value: 'github.com/jamesafful25', href: 'https://github.com' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/james-afful-52303836/', href: 'https://linkedin.com' },
  { icon: '📍', label: 'Location', value: 'Ghana 🇬🇭 · Available for Remote Work', href: null },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-[#0d1117]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#00e6a0] mb-4">
          <span className="opacity-50">//</span> Let's Talk
        </div>
        <h2 className="font-display font-extrabold text-[#f0f6ff] mb-12"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}>
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div className="fade-up">
            <p className="text-[#8fa3b8] leading-relaxed mb-10 text-[0.95rem]">
              Open to remote opportunities in DevOps engineering, backend development and AI automation.
              Whether you have a project, a role, or just want to connect reach out.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {contactLinks.map(link => {
                const inner = (
                  <>
                    <div className="w-10 h-10 bg-[#141c25] rounded-xl flex items-center justify-center text-base flex-shrink-0">
                      {link.icon}
                    </div>
                    <div>
                      <strong className="block text-[#f0f6ff] text-[0.88rem] mb-0.5">{link.label}</strong>
                      <span className="font-mono text-[0.7rem] text-[#8fa3b8]">{link.value}</span>
                    </div>
                  </>
                )
                return link.href ? (
                  <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#111820] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[#00e6a0] hover:bg-[rgba(0,230,160,0.04)] hover:translate-x-1 transition-all">
                    {inner}
                  </a>
                ) : (
                  <div key={link.label}
                    className="flex items-center gap-4 p-4 bg-[#111820] border border-[rgba(255,255,255,0.06)] rounded-xl cursor-default">
                    {inner}
                  </div>
                )
              })}
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-[0.78rem] font-bold uppercase tracking-wide bg-[#00e6a0] text-black border border-[#00e6a0] hover:bg-transparent hover:text-[#00e6a0] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,230,160,0.2)]"
            >
              ↓ Download Resume
            </a>
          </div>

          {/* Right: Form */}
          <div className="fade-up delay-2 bg-[#111820] border border-[rgba(0,230,160,0.12)] rounded-2xl p-9">
            <h3 className="font-display font-bold text-[#f0f6ff] text-[1.1rem] mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Project inquiry, job opportunity, etc.' },
              ].map(field => (
                <div key={field.id}>
                  <label className="block font-mono text-[0.68rem] tracking-widest uppercase text-[#8fa3b8] mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.id]}
                    onChange={e => setForm({ ...form, [field.id]: e.target.value })}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-[#141c25] border border-[rgba(255,255,255,0.06)] rounded-lg px-4 py-3 text-[#f0f6ff] text-[0.88rem] font-body placeholder-[#546a82] focus:outline-none focus:border-[#00e6a0] focus:shadow-[0_0_0_3px_rgba(0,230,160,0.1)] transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block font-mono text-[0.68rem] tracking-widest uppercase text-[#8fa3b8] mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="w-full bg-[#141c25] border border-[rgba(255,255,255,0.06)] rounded-lg px-4 py-3 text-[#f0f6ff] text-[0.88rem] font-body placeholder-[#546a82] focus:outline-none focus:border-[#00e6a0] focus:shadow-[0_0_0_3px_rgba(0,230,160,0.1)] transition-all resize-y"
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3.5 rounded-lg font-mono text-[0.78rem] font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5
                  ${submitted
                    ? 'bg-[#00e6a0] text-black'
                    : 'bg-[#00e6a0] text-black hover:bg-[#00b8ff] hover:shadow-[0_8px_30px_rgba(0,184,255,0.2)]'
                  }`}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
