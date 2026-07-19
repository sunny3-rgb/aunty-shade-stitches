import { useReveal } from '../hooks/useReveal';

// Curated stock photos from Pexels (fashion / tailoring / African attire)
const galleryItems = [
  { src: 'https://images.pexels.com/photos/37766536/pexels-photo-37766536.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Elegant Agbada', tag: 'Traditional' },
  { src: 'https://images.pexels.com/photos/34821105/pexels-photo-34821105.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Senator Style', tag: 'Classic' },
  { src: 'https://images.pexels.com/photos/30224929/pexels-photo-30224929.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Aso-Ebi Celebration', tag: 'Group' },
  { src: 'https://images.pexels.com/photos/34417794/pexels-photo-34417794.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Party Wear', tag: 'Festive' },
  { src: 'https://images.pexels.com/photos/31712574/pexels-photo-31712574.jpeg?auto=compress&cs=tinysrgb&w=800', label: "Children's Outfits", tag: 'Kids' },
  { src: 'https://images.pexels.com/photos/34162709/pexels-photo-34162709.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'School Uniforms', tag: 'Everyday' },
  { src: 'https://images.pexels.com/photos/37550056/pexels-photo-37550056.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Modern Traditional', tag: 'Contemporary' },
  { src: 'https://images.pexels.com/photos/38487458/pexels-photo-38487458.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Colourful Fabrics', tag: 'Materials' },
];

export default function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="gallery" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-50 text-neon-600 text-xs font-semibold uppercase tracking-wide">
            Our Work
          </span>
          <h2 className="mt-5 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
            Crafted with Care & <span className="text-neon-500">Creativity</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            A showcase of elegant Agbada, stylish Senator Wears, colourful Aso-Ebi, school uniforms,
            party dresses, and many more beautiful designs.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
        >
          {galleryItems.map((item, i) => (
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
                  i === 0 || i === 5 ? 'min-h-[320px] sm:min-h-[400px]' : 'aspect-square'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-2.5 py-1 rounded-full bg-neon-500 text-white text-[10px] font-semibold uppercase tracking-wide mb-1.5">
                  {item.tag}
                </span>
                <p className="text-white font-semibold text-sm">{item.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
