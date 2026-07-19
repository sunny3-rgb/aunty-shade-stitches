import { MapPin, Clock, MessageCircle, Mail } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold uppercase tracking-wide">
            Visit Us
          </span>
          <h2 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
            Let's Create Something <span className="text-neon-500">Beautiful Together</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            Book a fitting, ask a question, or just say hello — we'd love to hear from you.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-14 grid lg:grid-cols-3 gap-6`}
        >
          {/* Location */}
          <div className="rounded-3xl bg-neutral-50 p-8 border border-neutral-100 hover:border-neon-200 hover:shadow-lg transition-all">
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-neon-500 text-white shadow-lg shadow-neon-500/30">
              <MapPin className="w-7 h-7" strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-display font-bold text-xl text-neutral-900">Location</h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Aunty Shade Stitches
              <br />
              Shop Address Here
              <br />
              Nigeria
            </p>
          </div>

          {/* Hours */}
          <div className="rounded-3xl bg-neutral-50 p-8 border border-neutral-100 hover:border-neon-200 hover:shadow-lg transition-all">
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-neon-500 text-white shadow-lg shadow-neon-500/30">
              <Clock className="w-7 h-7" strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-display font-bold text-xl text-neutral-900">Opening Hours</h3>
            <ul className="mt-3 space-y-2">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className="text-neutral-600 font-medium">{h.day}</span>
                  <span className={`font-semibold ${h.time === 'Closed' ? 'text-neon-500' : 'text-neutral-900'}`}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp */}
          <div className="rounded-3xl bg-gradient-to-br from-neon-500 to-neon-700 p-8 text-white shadow-xl shadow-neon-500/25 flex flex-col">
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur">
              <MessageCircle className="w-7 h-7" strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-display font-bold text-xl">WhatsApp Us</h3>
            <p className="mt-2 text-neon-50 leading-relaxed flex-1">
              Chat with us directly for quick responses, bookings, and enquiries.
            </p>
            <a
              href="https://wa.me/2349999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-neon-600 font-semibold hover:bg-neon-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              +234 999 999 9999
            </a>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-10 rounded-3xl bg-neutral-900 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #ff1744 0 3px, transparent 3px 18px)',
            }}
          />
          <div className="relative">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl">
              Ready to Book Your Fitting?
            </h3>
            <p className="mt-3 text-neutral-300 max-w-xl mx-auto">
              Every measurement is taken with care. Every stitch is sewn with precision. Every
              customer is treated like family.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/2349999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neon-500 text-white font-semibold shadow-lg shadow-neon-500/30 hover:bg-neon-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
              <a
                href="mailto:hello@auntyshadestitches.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
