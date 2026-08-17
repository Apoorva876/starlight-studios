import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const galleryData = [
  {
    title: "SCIENTIA",
    images: [
      { id: 1, src: "/gallery/scientia1.jpg", alt: "SCIENTIA event photo 1" },
      { id: 2, src: "/gallery/scientia2.jpg", alt: "SCIENTIA event photo 2" },
      { id: 3, src: "/gallery/scientia3.JPG", alt: "SCIENTIA event photo 3" },
    ],
  },
  {
    title: "Orientation & Freshers",
    images: [
      { id: 4, src: "/gallery/orientation1.jpg", alt: "Orientation photo 1" },
      { id: 5, src: "/gallery/orientation2.jpg", alt: "Orientation photo 2" },
      { id: 6, src: "/gallery/orientation3.jpg", alt: "Orientation photo 3" },
    ],
  },
  {
    title: "Farewell",
    images: [
      { id: 7, src: "/gallery/farewell1.jpg", alt: "Farewell photo 1" },
      { id: 8, src: "/gallery/farewell2.jpg", alt: "Farewell photo 2" },
      { id: 9, src: "/gallery/farewell3.jpg", alt: "Farewell photo 3" },
    ],
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    if (activeGallery === null) return;
    setDirection(1);
    setLightboxIndex((prev) => (prev + 1) % galleryData[activeGallery].images.length);
  };

  const prevImage = () => {
    if (activeGallery === null) return;
    setDirection(-1);
    setLightboxIndex(
      (prev) =>
        (prev - 1 + galleryData[activeGallery].images.length) %
        galleryData[activeGallery].images.length
    );
  };

  return (
    <section id="gallery" className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">
            Gallery
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Captured <span className="text-secondary glow-text-purple">Moments</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryData.map((gallery, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => {
                setActiveGallery(i);
                setLightboxIndex(0);
              }}
              className="aspect-[4/3] rounded-2xl border border-border overflow-hidden group relative"
            >
              <img
                src={gallery.images[0].src}
                alt={gallery.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="font-heading text-white text-xl tracking-wider text-center px-4">
                  {gallery.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence initial={false} custom={direction}>
          {activeGallery !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={() => setActiveGallery(null)}
            >
              <button
                className="absolute left-6 text-white text-4xl"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                ◀
              </button>

              <motion.div
                onClick={(e) => e.stopPropagation()}
                key={lightboxIndex}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-5xl max-h-[80vh] rounded-2xl border border-border mx-4 overflow-hidden bg-black"
              >
                <img
                  src={galleryData[activeGallery].images[lightboxIndex].src}
                  alt={galleryData[activeGallery].images[lightboxIndex].alt}
                  className="w-full h-full max-h-[80vh] object-contain"
                />
              </motion.div>

              <button
                className="absolute right-6 text-white text-4xl"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                ▶
              </button>

              <button
                className="absolute top-6 right-8 text-white text-4xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveGallery(null);
                }}
              >
                ×
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;