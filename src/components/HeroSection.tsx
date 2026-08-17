import { motion } from "framer-motion";
import { Rocket, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bgHome from "@/assets/bg-home.png";
import saLogoWhite from "@/assets/sa-logo-white.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background image */}
      {/* Galaxy Background Animation */}
<div className="absolute inset-0 z-0 overflow-hidden">

  {/* Main Galaxy */}
  <motion.div
    className="absolute inset-[-20%]"
    animate={{
      rotate: [0, 360],
      scale: [1.05, 1.12, 1.05],
    }}
    transition={{
      rotate: {
        duration: 180,
        repeat: Infinity,
        ease: "linear",
      },
      scale: {
        duration: 35,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
  >
    <img
      src={bgHome}
      alt=""
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* Slow drifting galaxy layer */}
  {/* Animated Galaxy Background */}
<motion.div
  className="absolute inset-0 z-0"
  animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, 0] }}
  transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
>
  <img
    src={bgHome}
    alt=""
    className="w-full h-full object-cover"
  />
</motion.div>

</div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-[1]" />

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-primary/5 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-secondary/10 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-neon-blue/5 animate-[spin_80s_linear_infinite]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 md:pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
  src={saLogoWhite}
  alt="Science Association Logo"
  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-5 object-contain"
 />
          <p className="text-primary font-body text-xs sm:text-sm md:text-base tracking-[0.25em] md:tracking-[0.3em] uppercase mb-6 glow-text">
            Malnad College of Engineering, Hassan
          </p>
        </motion.div>

        <motion.h1
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
             className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.15] md:leading-[1.1]"
             style={{ fontFamily: "Megatron, sans-serif" }}
         >
         <span className="block text-foreground">SCIENCE</span>
         <span className="block text-primary glow-text mt-2 md:mt-3">
          ASSOCIATION
         </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Exploring Innovation Beyond Boundaries
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate("/events")}
            className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wider px-8 py-4 rounded-lg"
          >
            <Rocket size={18} />
            Explore Events
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-glow-purple inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-heading text-sm font-semibold tracking-wider px-8 py-4 rounded-lg"
          >
            <Users size={18} />
            Join the Club
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  );
};

export default HeroSection;
