import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Being part of Science Association has given me a chance to participate in events that I would never have experienced otherwise. It really helped me become more confident",
    name: "Mahadesh L M",
    batch: "Batch of 2026",
  },
  {
    text: "The events organized by Science Association are not just about competitions. They give us a chance to learn, work as a team, and actually enjoy college life",
    name: "Tara B R",
    batch: "Batch of 2025",
  },
  {
    text: "I joined the association just to participate in an event, but ended up getting involved in organizing activities too. It helped me improve my communication and leadership skills",
    name: "Varun .",
    batch: "Batch of 2017",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            Voices from the <span className="text-secondary glow-text-purple">Stars</span>
          </h2>

          <div className="relative">
            <Quote className="text-primary/20 mx-auto mb-6" size={48} />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 min-h-[80px]">
              "{testimonials[current].text}"
            </p>
            <p className="font-heading text-sm font-bold text-foreground">{testimonials[current].name}</p>
            <p className="text-xs text-muted-foreground mt-1">{testimonials[current].batch}</p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-colors">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
