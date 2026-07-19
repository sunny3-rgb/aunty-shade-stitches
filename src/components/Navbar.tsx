import { useEffect, useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'December', href: '#december' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(255,23,68,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-neon-500 text-white shadow-lg shadow-neon-500/30 group-hover:scale-105 transition-transform">
            <Scissors className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <span className="font-display font-extrabold tracking-tight text-lg sm:text-xl leading-none">
            <span className={scrolled ? 'text-neutral-900' : 'text-neutral-900'}>Aunty Shade</span>{' '}
            <span className="text-neon-500">Stitches</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-neutral-700 hover:text-neon-600 hover:bg-neon-50 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-neon-500 text-white text-sm font-semibold shadow-lg shadow-neon-500/30 hover:bg-neon-600 hover:shadow-neon-500/40 transition-all"
        >
          Book a Fitting
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-xl text-neutral-800 hover:bg-neon-50 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md ${
          open ? 'max-h-96 border-t border-neon-100' : 'max-h-0'
        }`}
      >
        <ul className="px-5 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-neutral-700 font-medium hover:bg-neon-50 hover:text-neon-600 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center px-4 py-3 rounded-xl bg-neon-500 text-white font-semibold"
            >
              Book a Fitting
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
