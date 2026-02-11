import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const images = [
  { id: 1, alt: "Hackathon event with participants coding", gradient: "from-neon-cyan/20 to-neon-purple/20" },
  { id: 2, alt: "Workshop on robotics", gradient: "from-neon-purple/20 to-neon-blue/20" },
  { id: 3, alt: "Technical talk by industry expert", gradient: "from-neon-blue/20 to-neon-cyan/20" },
  { id: 4, alt: "Team building and networking event", gradient: "from-neon-cyan/20 to-secondary/20" },
  { id: 5, alt: "Award ceremony celebration", gradient: "from-secondary/20 to-neon-purple/20" },
  { id: 6, alt: "Innovation lab prototyping session", gradient: "from-neon-purple/20 to-neon-cyan/20" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">Gallery</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Captured <span className="text-secondary glow-text-purple">Moments</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setLightbox(i)}
              className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${img.gradient} border border-border overflow-hidden group relative`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-xs text-muted-foreground tracking-wider text-center px-4">{img.alt}</span>
              </div>
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm" onClick={() => setLightbox(null)}>
            <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <div className={`w-full max-w-3xl aspect-video rounded-2xl bg-gradient-to-br ${images[lightbox].gradient} border border-border flex items-center justify-center mx-4`}>
              <span className="font-heading text-sm text-muted-foreground">{images[lightbox].alt}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
