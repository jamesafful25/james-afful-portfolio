export default function Footer() {
  return (
    <footer className="bg-[#080c10] border-t border-[rgba(255,255,255,0.05)] py-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[0.82rem] text-[#546a82]">
            JA<span className="text-[#00e6a0]">.</span>dev — James Afful
          </div>
          <div className="font-mono text-[0.7rem] text-[#546a82]">
            © 2021 · Built with care · Ghana 🇬🇭
          </div>
          <div className="flex gap-6">
            {[
              { href: '#hero', label: 'Top' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact' },
            ].map(link => (
              <a key={link.href} href={link.href}
                className="font-mono text-[0.7rem] text-[#546a82] hover:text-[#00e6a0] transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
