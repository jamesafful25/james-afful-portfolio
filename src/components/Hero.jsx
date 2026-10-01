import { useState, useRef } from 'react'
import jamesPhoto from "../images/james1.jpeg.jpg"

export default function Hero() {
  const [photo, setPhoto] = useState(null)
  const fileInputRef = useRef(null)

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setPhoto(ev.target.result)
    reader.readAsDataURL(file)
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-[68px] relative overflow-hidden grid-bg"
    >
      <style>{`
        @keyframes spin-ring { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spin-ring { animation: spin-ring 6s linear infinite; }
      `}</style>

      {/* Glow blobs */}
      <div className="pulse-glow absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,230,160,0.06) 0%, transparent 70%)', top: '-100px', right: '-200px' }} />
      <div className="pulse-glow-2 absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,184,255,0.05) 0%, transparent 70%)', bottom: '-100px', left: '-100px' }} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div>

            {/* PHOTO + NAME ROW */}
            <div className="flex items-center gap-5 mb-8">

              {/* Avatar with spinning accent ring */}
              <div className="relative flex-shrink-0 group">
                {/* Spinning conic gradient ring */}
                <div className="spin-ring absolute -inset-[3px] rounded-full z-0"
                  style={{ background: 'conic-gradient(from 0deg, #00e6a0, #00b8ff, #7c3aed, #00e6a0)' }} />
                {/* Separator ring */}
                <div className="absolute -inset-[1px] rounded-full bg-[#080c10] z-[1]" />
                {/* Photo circle */}
                <div
                  onClick={() => fileInputRef.current.click()}
                  className="relative z-10 w-24 h-24 rounded-full overflow-hidden cursor-pointer bg-[#141c25] flex items-center justify-center select-none"
                  title="Click to upload your photo"
                >
                  <img src={jamesPhoto} alt="James Afful" className="w-full h-full object-cover" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-mono text-[0.62rem] text-[#00e6a0] text-center leading-snug whitespace-pre">
                      {photo ? '✎ Change\nphoto' : '+ Upload\nphoto'}
                    </span>
                  </div>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />

                {/* Green online dot */}
                <div className="absolute bottom-1 right-1 z-20 w-4 h-4 rounded-full bg-[#00e6a0] border-2 border-[#080c10]" />
              </div>

              {/* Name / location / badge */}
              <div>
                <div className="font-display font-extrabold text-[#f0f6ff] text-xl leading-tight tracking-tight">James Afful</div>
                <div className="font-mono text-[0.68rem] text-[#546a82] mt-1 mb-2">Ghana 🇬🇭</div>
                <div className="inline-flex items-center gap-2 bg-[#141c25] border border-[rgba(0,230,160,0.15)] rounded-full px-3 py-1 font-mono text-[0.62rem] text-[#00e6a0] tracking-widest uppercase">
                  <span className="status-dot w-1.5 h-1.5 rounded-full bg-[#00e6a0] inline-block flex-shrink-0" />
                  Available for Remote Work
                </div>
              </div>
            </div>
            {/* END PHOTO ROW */}

            <h1 className="font-display font-extrabold leading-none tracking-tight mb-4"
              style={{
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                background: 'linear-gradient(135deg, #f0f6ff 60%, #00e6a0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              James<br />Afful
            </h1>

            <div className="font-mono text-[#00b8ff] leading-loose mb-6"
              style={{ fontSize: 'clamp(0.72rem, 1.5vw, 0.85rem)', letterSpacing: '0.08em' }}
            >
              DevOps Engineer &nbsp;|&nbsp; Backend Developer<br />
              Full-Stack (React) &nbsp;|&nbsp; Data Science &amp; AI Automation
            </div>

            <p className="text-[#8fa3b8] text-[1.02rem] leading-relaxed max-w-lg mb-10">
              DevOps and Backend Engineer specializing in cloud infrastructure, scalable backend systems
              and intelligent automation. Building reliable software systems, automated delivery pipelines,
              and data-driven solutions that improve operational efficiency and decision-making.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-[0.76rem] font-bold uppercase tracking-wide bg-[#00e6a0] text-black border border-[#00e6a0] hover:bg-transparent hover:text-[#00e6a0] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,230,160,0.2)]">
                ↓ View Projects
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-[0.76rem] font-bold uppercase tracking-wide bg-[#141c25] text-[#8fa3b8] border border-[rgba(0,230,160,0.12)] hover:border-[#00b8ff] hover:text-[#00b8ff] transition-all hover:-translate-y-0.5">
                ⌥ GitHub
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-[0.76rem] font-bold uppercase tracking-wide bg-transparent text-[#8fa3b8] border border-[rgba(255,255,255,0.06)] hover:border-[#00e6a0] hover:text-[#00e6a0] transition-all hover:-translate-y-0.5"
              >
                ↓ Resume
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-[0.76rem] font-bold uppercase tracking-wide bg-transparent text-[#8fa3b8] border border-[rgba(255,255,255,0.06)] hover:border-[#00e6a0] hover:text-[#00e6a0] transition-all hover:-translate-y-0.5">
                ✉ Contact
              </a>
            </div>
          </div>

          {/* TERMINAL CARD */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="float-anim w-full max-w-[460px] rounded-2xl overflow-hidden border border-[rgba(0,230,160,0.12)] bg-[#0d1117]"
              style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,230,160,0.08)' }}>
              <div className="flex items-center gap-2 bg-[#141c25] px-4 py-3 border-b border-[rgba(0,230,160,0.08)]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[0.68rem] text-[#546a82] ml-2">bash — james@devops-server</span>
              </div>
              <div className="p-5 font-mono text-[0.76rem] leading-[2]">
                <div><span className="text-[#00e6a0]">➜</span> <span className="text-[#f0f6ff]">whoami</span></div>
                <div><span className="text-[#00b8ff]">james_afful</span> <span className="text-[#00e6a0]">@ghana</span></div>
                <br />
                <div><span className="text-[#00e6a0]">➜</span> <span className="text-[#f0f6ff]">cat skills.json</span></div>
                <div><span className="text-[#e879f9]">"role"</span>: <span className="text-[#fbbf24]">"DevOps Engineer"</span>,</div>
                <div><span className="text-[#e879f9]">"stack"</span>: [<span className="text-[#fbbf24]">"Docker"</span>, <span className="text-[#fbbf24]">"K8s"</span>],</div>
                <div><span className="text-[#e879f9]">"cloud"</span>: [<span className="text-[#fbbf24]">"AWS"</span>, <span className="text-[#fbbf24]">"Azure"</span>],</div>
                <div><span className="text-[#e879f9]">"backend"</span>: <span className="text-[#fbbf24]">"Node / Python"</span>,</div>
                <div><span className="text-[#e879f9]">"ai"</span>: <span className="text-[#fbbf24]">"LLM Automation"</span></div>
                <br />
                <div><span className="text-[#00e6a0]">➜</span> <span className="text-[#f0f6ff]">kubectl get pods</span></div>
                <div className="text-[#8fa3b8]">NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; READY &nbsp; STATUS</div>
                <div className="text-[#00b8ff]">api-server-7d9f &nbsp; 1/1 &nbsp;&nbsp;&nbsp; Running</div>
                <div className="text-[#00b8ff]">worker-6b8c &nbsp;&nbsp;&nbsp;&nbsp; 1/1 &nbsp;&nbsp;&nbsp; Running</div>
                <br />
                <div><span className="text-[#00e6a0]">➜</span> <span className="terminal-cursor" /></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
