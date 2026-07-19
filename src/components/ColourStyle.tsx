import { useReveal } from '../hooks/useReveal';

const colors = [
  { name: 'Royal Red', hex: '#c62828' },
  { name: 'Gold Glow', hex: '#f5b400' },
  { name: 'Emerald', hex: '#0f8a5f' },
  { name: 'Sunset Orange', hex: '#ff6b35' },
  { name: 'Royal Blue', hex: '#1a4fa0' },
  { name: 'Magenta', hex: '#c2185b' },
  { name: 'Teal', hex: '#00897b' },
  { name: 'Ivory', hex: '#f5e6d3' },
];

export default function ColourStyle() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-neon-50/50 blur-3xl rounded-full -translate-y-1/3" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold uppercase tracking-wide">
              Colour & Style
            </span>
            <h2 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-balance">
              A World of Beautiful{' '}
              <span className="text-neon-500">Colours</span>
            </h2>
            <p className="mt-5 text-neutral-600 text-lg leading-relaxed">
              Fashion is personal, and every customer deserves a style that reflects their
              personality. Choose from a wide variety of colourful fabrics and beautiful designs for
              weddings, birthdays, naming ceremonies, school events, corporate occasions, religious
              celebrations, and everyday wear.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Our signature style blends elegance with energy, giving every outfit a fresh,
              confident, and eye-catching finish.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Weddings', 'Birthdays', 'Naming Ceremonies', 'School Events', 'Corporate', 'Religious', 'Everyday Wear'].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-neutral-50 text-neutral-700 text-sm font-medium border border-neutral-100 hover:border-neon-300 hover:text-neon-600 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Colour swatches */}
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
            <div className="grid grid-cols-4 gap-4">
              {colors.map((c, i) => (
                <div
                  key={c.name}
                  className="group cursor-pointer"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div
                    className="aspect-square rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ring-2 ring-white"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="mt-2 text-xs font-medium text-neutral-600 text-center">
                    {c.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
