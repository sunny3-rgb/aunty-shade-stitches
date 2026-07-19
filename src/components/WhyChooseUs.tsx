import { Award, Heart, Sparkles, Flag, Palette, Clock, Smile, Trophy } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const reasons = [
  { icon: Award, title: '15 Years of Experience', desc: 'A trusted tailor with years of professional craftsmanship and satisfied customers.' },
  { icon: Heart, title: 'Trained by Her Mother', desc: 'A family tradition built on skill, patience, discipline, and love for tailoring.' },
  { icon: Sparkles, title: 'Beautiful Finishing', desc: 'Every outfit is carefully sewn with neat stitching and attention to every detail.' },
  { icon: Flag, title: 'Proudly Nigerian', desc: 'Modern fashion inspired by the beauty and richness of Nigerian culture.' },
  { icon: Palette, title: 'Creative Designs', desc: 'From traditional wear to contemporary styles, every outfit is designed to stand out.' },
  { icon: Clock, title: 'Customer Satisfaction', desc: 'We never rush quality. Every customer receives the time, care, and attention needed.' },
  { icon: Smile, title: 'Warm and Friendly Vibes', desc: 'A relaxed and welcoming experience, making every customer feel at home from the first fitting.' },
  { icon: Trophy, title: 'Exceeding Expectations', desc: 'Professionalism, beautiful results, clear communication, and outfits made to impress.' },
];

export default function WhyChooseUs() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold uppercase tracking-wide">
            Why Customers Choose Us
          </span>
          <h2 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
            The Aunty Shade <span className="text-neon-500">Difference</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            Warm, cheerful, stylish, and welcoming — every outfit is made with care and attention
            to detail.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5`}
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group relative rounded-2xl bg-neutral-50 p-6 border border-neutral-100 hover:border-neon-200 hover:bg-white hover:shadow-xl hover:shadow-neon-500/10 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-neon-50 text-neon-500 group-hover:bg-neon-500 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-semibold text-neutral-900 leading-snug">{r.title}</h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
