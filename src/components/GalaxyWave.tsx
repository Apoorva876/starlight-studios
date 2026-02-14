import { motion } from "framer-motion";

const GalaxyWave = () => {
  const rings = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
      {rings.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${200 + i * 150}px`,
            height: `${200 + i * 150}px`,
            borderColor: `hsl(192 100% 50% / ${0.15 - i * 0.02})`,
            boxShadow: `0 0 ${15 + i * 5}px hsl(192 100% 50% / ${0.08 - i * 0.01}), inset 0 0 ${10 + i * 5}px hsl(270 80% 60% / ${0.05 - i * 0.008})`,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 0.2, 0.6],
            rotate: [0, i % 2 === 0 ? 360 : -360],
          }}
          transition={{
            duration: 12 + i * 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.8,
          }}
        />
      ))}
      {/* Pulsing core glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 120,
          height: 120,
          background: "radial-gradient(circle, hsl(192 100% 50% / 0.12) 0%, hsl(270 80% 60% / 0.06) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default GalaxyWave;
