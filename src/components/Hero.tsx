import { Scissors, Calendar, Images, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[640px] max-h-[640px] rounded-full bg-neon-50 blur-3xl opacity-70 -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full bg-neon-100/60 blur-3xl translate-y-1/4 -translate-x-1/4" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #ff1744 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold tracking-wide uppercase">
            <Star className="w-3.5 h-3.5 fill-neon-500 text-neon-500" />
            15 Years of Beautiful Tailoring
          </span>

          <h1 className="mt-6 font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Every Stitch Tells a{' '}
            <span className="relative inline-block text-neon-500">
              Story
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 50 2, 100 6 T 198 5"
                  stroke="#ff1744"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            ,<br className="hidden sm:block" /> Every Outfit Made with Love.
          </h1>

          <p className="mt-6 text-lg text-neutral-600 max-w-xl leading-relaxed">
            Welcome to <strong className="text-neutral-900">Aunty Shade Stitches</strong>, where
            creativity, tradition, and expert craftsmanship come together to create beautiful
            clothing for every occasion.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neon-500 text-white font-semibold shadow-xl shadow-neon-500/30 hover:bg-neon-600 hover:shadow-neon-500/40 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book a Fitting
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-800 font-semibold border-2 border-neutral-200 hover:border-neon-300 hover:text-neon-600 hover:-translate-y-0.5 transition-all"
            >
              <Images className="w-5 h-5" />
              View Our Work
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="font-display font-extrabold text-3xl text-neon-500">15+</p>
              <p className="text-sm text-neutral-500 font-medium">Years of Craft</p>
            </div>
            <div className="w-px h-10 bg-neutral-200" />
            <div>
              <p className="font-display font-extrabold text-3xl text-neon-500">100s</p>
              <p className="text-sm text-neutral-500 font-medium">Happy Customers</p>
            </div>
            <div className="w-px h-10 bg-neutral-200" />
            <div>
              <p className="font-display font-extrabold text-3xl text-neon-500">6</p>
              <p className="text-sm text-neutral-500 font-medium">Services Offered</p>
            </div>
          </div>
        </div>

        {/* Right: visual */}
        <div className="relative animate-fade-in">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            {/* Main card */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-500 to-neon-700 shadow-2xl shadow-neon-500/30 rotate-3 hover:rotate-0 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-white shadow-xl flex items-center justify-center overflow-hidden -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div
                className="w-full h-full opacity-10"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #ff1744 0 2px, transparent 2px 14px)',
                }}
              />
              <div className="absolute inset-0 grid place-items-center text-center px-10">
                <div>
                  <Scissors className="w-20 h-20 text-neon-500 mx-auto mb-4 animate-float" strokeWidth={1.5} />
                  <p className="font-display font-bold text-2xl text-neutral-900">Elegant</p>
                  <p className="font-display font-bold text-2xl text-neon-500">Colourful</p>
                  <p className="font-display font-bold text-2xl text-neutral-900">Proudly Nigerian</p>
                  <div className="mt-5 h-1 w-24 mx-auto stitch-line" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3.5 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
              <span className="grid place-items-center w-10 h-10 rounded-full bg-neon-50">
                <Star className="w-5 h-5 text-neon-500 fill-neon-500" />
              </span>
              <div>
                <p className="text-xs text-neutral-500 font-medium">Crafted with</p>
                <p className="font-bold text-neutral-900 text-sm leading-none">Love & Care</p>
              </div>
            </div>

            {/* Floating badge top right */}
            <div className="absolute -top-4 -right-2 bg-neon-500 text-white rounded-2xl shadow-xl px-4 py-3 text-center animate-float" style={{ animationDelay: '2s' }}>
              <p className="font-display font-extrabold text-2xl leading-none">15</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider mt-1">Years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 80" className="w-full h-[40px]" preserveAspectRatio="none">
          <path d="M0 40 Q 360 0 720 40 T 1440 40 V80 H0 Z" fill="#fafafa" />
        </svg>
      </div>
    </section>
  );
}
