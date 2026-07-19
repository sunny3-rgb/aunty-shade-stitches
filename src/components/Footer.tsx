import { Scissors, Heart } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-neon-500 text-white shadow-lg shadow-neon-500/30">
                <Scissors className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="font-display font-extrabold text-lg">
                Aunty Shade <span className="text-neon-500">Stitches</span>
              </span>
            </div>
            <p className="mt-4 text-neutral-600 leading-relaxed text-sm max-w-xs">
              Elegant Tailoring • Beautiful Craftsmanship • Proudly Nigerian. 15 Years of
              Excellence.
            </p>
            <p className="mt-4 text-sm font-semibold text-neutral-900">
              Every Stitch Made with Love.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-neutral-900">Explore</h4>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-neutral-600 hover:text-neon-600 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-neutral-900">Get in Touch</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>Shop Address Here, Nigeria</li>
              <li>
                <a href="https://wa.me/2349999999999" target="_blank" rel="noopener noreferrer" className="hover:text-neon-600 transition-colors">
                  WhatsApp: +234 999 999 9999
                </a>
              </li>
              <li>Mon–Fri: 8AM–6PM · Sat: 9AM–5PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
          <p>© 2026 Aunty Shade Stitches. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-neon-500 fill-neon-500" /> in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
