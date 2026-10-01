import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about',    label: 'About'    },
  { href: '#skills',   label: 'Skills'   },
  { href: '#projects', label: 'Projects' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#research', label: 'Research' },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-[68px] transition-all duration-300
        ${scrolled
          ? darkMode
            ? 'bg-[#080c10]/88 backdrop-blur-xl border-b border-[rgba(0,230,160,0.12)]'
            : 'bg-white/90 backdrop-blur-xl border-b border-gray-200'
          : ''
        }`}
      >
        {/* Logo */}
        <div className="font-mono text-sm font-bold text-white dark:text-white">
          JA<span className="text-[#00e6a0]">.</span>dev
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[0.72rem] uppercase tracking-widest text-[#8fa3b8] hover:text-[#00e6a0] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-full border border-[rgba(0,230,160,0.12)] bg-[#141c25] text-[#8fa3b8] hover:text-[#00e6a0] hover:border-[#00e6a0] transition-all flex items-center justify-center text-sm"
            title="Toggle theme"
          >
            {darkMode ? '☀' : '◑'}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-[#8fa3b8] transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#8fa3b8] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#8fa3b8] transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#0d1117] flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-display text-[1.8rem] font-extrabold text-[#f0f6ff] hover:text-[#00e6a0] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
