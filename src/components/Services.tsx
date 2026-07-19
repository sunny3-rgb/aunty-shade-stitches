import { Users, Crown, User, GraduationCap, Scissors, PartyPopper } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  { icon: Users, title: 'Aso-Ebi Group Orders', desc: 'Beautifully tailored outfits for weddings, birthdays, anniversaries, family celebrations, and special occasions.', price: '₦20,000', unit: 'per outfit' },
  { icon: Crown, title: 'Agbada', desc: 'Luxury traditional Agbada tailored with premium finishing and exceptional attention to detail.', price: '₦35,000', unit: 'starting' },
  { icon: User, title: 'Senator Wears', desc: 'Classic and modern senator styles designed for comfort, elegance, and confidence.', price: '₦25,000', unit: 'starting' },
  { icon: GraduationCap, title: 'School Uniforms', desc: 'Neatly sewn uniforms for nursery, primary, and secondary school students.', price: '₦8,000', unit: 'starting' },
  { icon: Scissors, title: 'Amendments & Adjustments', desc: 'Professional clothing alterations including resizing, repairs, fitting adjustments, and finishing touches.', price: '₦3,000', unit: 'starting' },
  { icon: PartyPopper, title: 'Party Clothes for All Ages', desc: 'Stylish outfits for children, teenagers, and adults in a wide variety of beautiful fabrics and designs.', price: '₦18,000', unit: 'starting' },
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold uppercase tracking-wide">
            Our Services & Prices
          </span>
          <h2 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
            Tailored for <span className="text-neon-500">Every Occasion</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            From traditional celebrations to everyday fashion — each piece made with care,
            precision, and love.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative rounded-3xl bg-white p-7 border border-neutral-100 hover:border-neon-200 hover:shadow-2xl hover:shadow-neon-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-500 to-neon-600 text-white shadow-lg shadow-neon-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </span>
                  <div className="text-right">
                    <p className="font-display font-extrabold text-2xl text-neon-500 leading-none">
                      {s.price}
                    </p>
                    <p className="text-xs text-neutral-400 font-medium mt-1">{s.unit}</p>
                  </div>
                </div>
                <h3 className="mt-5 font-display font-bold text-xl text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed flex-1">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neon-600 hover:gap-2.5 transition-all"
                >
                  Book this service
                  <span aria-hidden>→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
