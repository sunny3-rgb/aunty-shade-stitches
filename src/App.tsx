import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import ColourStyle from './components/ColourStyle';
import Gallery from './components/Gallery';
import DecemberCollection from './components/DecemberCollection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-neon-500 text-white shadow-xl shadow-neon-500/30 hover:bg-neon-600 hover:-translate-y-1 transition-all animate-fade-in"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <WhyChooseUs />
        <Services />
        <ColourStyle />
        <Gallery />
        <DecemberCollection />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
