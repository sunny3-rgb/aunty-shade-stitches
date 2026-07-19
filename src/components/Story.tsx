import { useReveal } from '../hooks/useReveal';

export default function Story() {
  const { ref, visible } = useReveal();

  return (
    <section id="story" className="relative py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-12 gap-12 items-center`}
        >
          {/* Left visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-neon-500 via-neon-600 to-neon-700 shadow-2xl shadow-neon-500/25 p-8 flex flex-col justify-between text-white overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(135deg, #fff 0 2px, transparent 2px 16px)',
                  }}
                />
                <div className="relative">
                  <p className="text-neon-100 font-semibold uppercase tracking-widest text-xs">
                    Our Story
                  </p>
                  <p className="mt-4 font-display font-extrabold text-5xl leading-none">15</p>
                  <p className="font-display font-bold text-xl mt-1">Years of Passion</p>
                </div>
                <div className="relative space-y-3 text-neon-50">
                  <p className="text-sm leading-relaxed">
                    "Tailoring is not just about stitching clothes — it is about making people feel
                    confident, beautiful, and proud of who they are."
                  </p>
                  <p className="font-semibold text-white">— Aunty Shade</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-4 hidden sm:block">
                <p className="font-display font-extrabold text-2xl text-neon-500">A Family</p>
                <p className="text-sm text-neutral-500 font-medium">Tradition</p>
              </div>
            </div>
          </div>

          {/* Right copy */}
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold uppercase tracking-wide">
              Our Story
            </span>
            <h2 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-balance">
              15 Years of Passion, Precision, and{' '}
              <span className="text-neon-500">Family Tradition</span>
            </h2>
            <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed text-[17px]">
              <p>
                Every great tailor has a beginning, and Aunty Shade's journey began at home. As a
                young girl, she watched her mother carefully measure fabrics, guide the sewing
                machine, and transform simple materials into beautiful outfits. What started as
                curiosity soon became a lifelong passion.
              </p>
              <p>
                Under her mother's guidance, she learned that tailoring is not just about stitching
                clothes — it is about making people feel confident, beautiful, and proud of who they
                are. For the past <strong className="text-neutral-900">15 years</strong>, Aunty
                Shade has dedicated herself to creating outfits that celebrate life's special
                moments.
              </p>
              <p>
                Today, Aunty Shade proudly continues the family tradition passed down by her
                mother, combining timeless tailoring techniques with modern fashion to create
                clothing that is elegant, colourful, and proudly Nigerian.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Neat Finishing', desc: 'Every detail perfected' },
                { label: 'Perfect Fitting', desc: 'Tailored to you' },
                { label: 'Creative Designs', desc: 'Styles that stand out' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-100 hover:border-neon-200 hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-neutral-900">{item.label}</p>
                  <p className="text-sm text-neutral-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
