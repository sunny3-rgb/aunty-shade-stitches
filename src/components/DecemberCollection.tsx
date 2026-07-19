import {
  Sparkles,
  Check,
  Heart,
  Users,
  Crown,
  Palette,
  ArrowRight,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const ladiesStyles = [
  'Luxury Lace Gowns',
  'Elegant Ankara Dresses',
  'George & Sequin Styles',
  'Boubou Gowns',
  'Aso-Ebi Party Dresses',
  'Mother & Daughter Matching Outfits',
];

const gentsStyles = [
  'Premium Agbada',
  'Luxury Senator Wears',
  'Kaftans',
  'Isi Agu Styles',
  'Traditional Native Wears',
  'Father & Son Matching Outfits',
];

const familyOccasions = [
  'Christmas Celebrations',
  'Family Photoshoots',
  'Weddings',
  'Naming Ceremonies',
  'Thanksgiving Services',
  'New Year Celebrations',
];

const fabrics = [
  { name: 'Neon Red', hex: '#ff1744' },
  { name: 'Emerald Green', hex: '#0f8a5f' },
  { name: 'Royal Blue', hex: '#1a4fa0' },
  { name: 'Gold', hex: '#f5b400' },
  { name: 'White', hex: '#f5f5f5' },
  { name: 'Black', hex: '#1a1a1a' },
  { name: 'Purple', hex: '#7b1fa2' },
  { name: 'Chocolate Brown', hex: '#5d4037' },
];

const standouts = [
  'Designed with over 15 years of experience',
  'Professionally tailored for a perfect fit',
  'Beautiful finishing and attention to detail',
  'Premium fabrics and quality craftsmanship',
  'Modern styles inspired by Nigerian fashion',
  'Elegant designs for children, teenagers, and adults',
  'Friendly service that makes every customer feel confident and comfortable',
  'Outfits created to exceed expectations and make every celebration memorable',
];

const lookbook = [
  { src: 'https://images.pexels.com/photos/30224929/pexels-photo-30224929.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Bride & Bridesmaids in Aso-Ebi', tag: 'Weddings' },
  { src: 'https://images.pexels.com/photos/37766536/pexels-photo-37766536.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Luxury Emerald-Green Agbada', tag: 'Gentlemen' },
  { src: 'https://images.pexels.com/photos/34417794/pexels-photo-34417794.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Elegant Red Lace Gown', tag: 'Ladies' },
  { src: 'https://images.pexels.com/photos/33763961/pexels-photo-33763961.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Family in Coordinated Ankara', tag: 'Family' },
  { src: 'https://images.pexels.com/photos/31712574/pexels-photo-31712574.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Children in Festive Christmas Wear', tag: 'Kids' },
  { src: 'https://images.pexels.com/photos/6461130/pexels-photo-6461130.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Detailed Embroidery & Finishing', tag: 'Craftsmanship' },
  { src: 'https://images.pexels.com/photos/38487458/pexels-photo-38487458.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Colourful Fabrics in the Studio', tag: 'Studio' },
  { src: 'https://images.pexels.com/photos/33939066/pexels-photo-33939066.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'A Smiling Customer in Her Outfit', tag: 'Happy Client' },
];

export default function DecemberCollection() {
  const { ref: r1, visible: v1 } = useReveal();
  const { ref: r2, visible: v2 } = useReveal();
  const { ref: r3, visible: v3 } = useReveal();
  const { ref: r4, visible: v4 } = useReveal();

  return (
    <section id="december" className="relative bg-white overflow-hidden">
      {/* ===== Hero banner ===== */}
      <div className="relative bg-gradient-to-br from-neon-600 via-neon-500 to-neon-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0 2px, transparent 2px 16px)',
          }}
        />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-neon-900/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Limited Time · December 2026
          </span>
          <h2 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
            December Special Collection
          </h2>
          <p className="mt-4 font-display font-medium text-xl text-neon-50">
            Celebrate the Most Beautiful Season of the Year
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-neon-50/90 leading-relaxed text-lg">
            December is a time of celebration, laughter, family reunions, weddings, church
            programmes, concerts, end-of-year parties, and unforgettable moments. At Aunty Shade
            Stitches, we make sure you step into every celebration looking your absolute best.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-neon-50/80 leading-relaxed">
            With over 15 years of tailoring experience, Aunty Shade creates elegant festive outfits
            that combine modern fashion with the beauty of Nigerian tradition. Every design is
            carefully handcrafted to fit perfectly and leave a lasting impression.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neon-600 font-semibold shadow-xl hover:bg-neon-50 hover:-translate-y-0.5 transition-all"
            >
              Book Your December Outfit
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#lookbook"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold border border-white/25 backdrop-blur hover:bg-white/20 transition-colors"
            >
              View the Lookbook
            </a>
          </div>
        </div>
      </div>

      {/* ===== Ladies & Gentlemen collections ===== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold uppercase tracking-wide">
            December Collection
          </span>
          <h3 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-balance">
            Festive Styles for <span className="text-neon-500">Everyone</span>
          </h3>
        </div>

        <div ref={r1} className={`reveal ${v1 ? 'is-visible' : ''} mt-12 grid md:grid-cols-2 gap-6`}>
          {/* Ladies */}
          <div className="group relative rounded-3xl bg-gradient-to-br from-neon-500 to-neon-600 p-8 text-white shadow-xl shadow-neon-500/25 overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'repeating-linear-gradient(135deg, #fff 0 2px, transparent 2px 18px)' }}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur">
                  <Heart className="w-7 h-7" strokeWidth={2} />
                </span>
                <div className="text-right">
                  <p className="text-xs text-neon-50 font-medium">Starting from</p>
                  <p className="font-display font-extrabold text-2xl">₦25,000</p>
                </div>
              </div>
              <h4 className="mt-5 font-display font-bold text-2xl">For Ladies</h4>
              <ul className="mt-4 space-y-2.5">
                {ladiesStyles.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-neon-50">
                    <span className="grid place-items-center w-5 h-5 rounded-full bg-white/20">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gentlemen */}
          <div className="group relative rounded-3xl bg-neutral-900 p-8 text-white shadow-xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: 'repeating-linear-gradient(135deg, #ff1744 0 2px, transparent 2px 18px)' }}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-neon-500/20 text-neon-400">
                  <Crown className="w-7 h-7" strokeWidth={2} />
                </span>
                <div className="text-right">
                  <p className="text-xs text-neutral-400 font-medium">Starting from</p>
                  <p className="font-display font-extrabold text-2xl text-neon-400">₦30,000</p>
                </div>
              </div>
              <h4 className="mt-5 font-display font-bold text-2xl">For Gentlemen</h4>
              <ul className="mt-4 space-y-2.5">
                {gentsStyles.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-neutral-300">
                    <span className="grid place-items-center w-5 h-5 rounded-full bg-neon-500/20 text-neon-400">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ===== Family Collections ===== */}
        <div ref={r2} className={`reveal ${v2 ? 'is-visible' : ''} mt-6 rounded-3xl bg-neutral-50 border border-neutral-100 p-8 sm:p-10`}>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-neon-500 text-white shadow-lg shadow-neon-500/30">
                <Users className="w-7 h-7" strokeWidth={2} />
              </span>
              <h4 className="mt-5 font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                Family <span className="text-neon-500">Collections</span>
              </h4>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                Create beautiful memories with matching outfits for the whole family. Perfect for
                every celebration this festive season.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {familyOccasions.map((o) => (
                  <div
                    key={o}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 border border-neutral-100 hover:border-neon-200 hover:shadow-md transition-all"
                  >
                    <span className="grid place-items-center w-8 h-8 rounded-lg bg-neon-50 text-neon-500 shrink-0">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-neutral-800">{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Endless Colours & Fabrics ===== */}
      <div className="bg-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div ref={r3} className={`reveal ${v3 ? 'is-visible' : ''}`}>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold uppercase tracking-wide">
                <Palette className="w-4 h-4" />
                Endless Colours & Fabrics
              </span>
              <h3 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-balance">
                Choose Your Perfect <span className="text-neon-500">Palette</span>
              </h3>
              <p className="mt-4 text-neutral-600 text-lg">
                A wide range of beautiful fabrics and colours to match your style — and many more
                beautiful combinations.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {fabrics.map((c, i) => (
                <div
                  key={c.name}
                  className="group text-center"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div
                    className="aspect-[4/3] rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ring-2 ring-white"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="mt-3 text-sm font-semibold text-neutral-800">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Why Our December Collection Stands Out ===== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold uppercase tracking-wide">
            Why Our December Collection Stands Out
          </span>
          <h3 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-balance">
            Crafted to <span className="text-neon-500">Exceed Expectations</span>
          </h3>
        </div>

        <div ref={r4} className={`reveal ${v4 ? 'is-visible' : ''} mt-12 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto`}>
          {standouts.map((s, i) => (
            <div
              key={s}
              className="flex items-start gap-3 rounded-2xl bg-neutral-50 p-5 border border-neutral-100 hover:border-neon-200 hover:bg-white hover:shadow-md transition-all"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="grid place-items-center w-7 h-7 rounded-full bg-neon-500 text-white shrink-0 mt-0.5">
                <Check className="w-4 h-4" strokeWidth={3} />
              </span>
              <p className="text-sm text-neutral-700 font-medium leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== A December to Remember ===== */}
      <div className="relative bg-neutral-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ff1744 0 3px, transparent 3px 20px)' }}
        />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neon-500/20 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-20 text-center">
          <Sparkles className="w-10 h-10 text-neon-400 mx-auto" />
          <h3 className="mt-6 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-balance">
            A December to <span className="text-neon-400">Remember</span>
          </h3>
          <p className="mt-5 text-neutral-300 leading-relaxed text-lg">
            Every festive season deserves clothing that reflects the joy of the occasion. At Aunty
            Shade Stitches, we don't simply sew clothes — we create outfits that help people
            celebrate life's most precious moments with confidence, elegance, and pride.
          </p>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            This December, let your outfit tell a beautiful story. Celebrate in style. Celebrate
            with Aunty Shade Stitches.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neon-500 text-white font-semibold shadow-xl shadow-neon-500/30 hover:bg-neon-600 hover:-translate-y-0.5 transition-all"
          >
            Book Your Fitting Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* ===== December Lookbook 2026 ===== */}
      <div id="lookbook" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold uppercase tracking-wide">
            <Sparkles className="w-4 h-4" />
            December Lookbook 2026
          </span>
          <h3 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
            A Glimpse of the <span className="text-neon-500">Festive Magic</span>
          </h3>
          <p className="mt-4 text-neutral-600 text-lg">
            Real moments, real craftsmanship — a showcase of the beautiful outfits created for
            December celebrations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {lookbook.map((item, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-neutral-200 ${
                i === 0 || i === 5 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 || i === 5 ? 'min-h-[320px] sm:min-h-[420px]' : 'aspect-square'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-2.5 py-1 rounded-full bg-neon-500 text-white text-[10px] font-semibold uppercase tracking-wide mb-1.5">
                  {item.tag}
                </span>
                <p className="text-white font-semibold text-sm leading-snug">{item.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neon-500 text-white font-semibold shadow-xl shadow-neon-500/30 hover:bg-neon-600 hover:-translate-y-0.5 transition-all"
          >
            Create Your December Look
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
