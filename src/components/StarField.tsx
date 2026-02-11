import { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: { x: number; y: number; size: number; speed: number; opacity: number; twinkleSpeed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 4000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      }));
    };

    const drawNebula = () => {
      // Nebula cloud 1
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.2, 0,
        canvas.width * 0.3, canvas.height * 0.2, canvas.width * 0.4
      );
      g1.addColorStop(0, "hsla(270, 80%, 40%, 0.06)");
      g1.addColorStop(0.5, "hsla(260, 60%, 30%, 0.03)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebula cloud 2
      const g2 = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.5, 0,
        canvas.width * 0.7, canvas.height * 0.5, canvas.width * 0.35
      );
      g2.addColorStop(0, "hsla(192, 100%, 50%, 0.04)");
      g2.addColorStop(0.5, "hsla(210, 80%, 40%, 0.02)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebula cloud 3
      const g3 = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.8, 0,
        canvas.width * 0.5, canvas.height * 0.8, canvas.width * 0.5
      );
      g3.addColorStop(0, "hsla(240, 60%, 35%, 0.05)");
      g3.addColorStop(1, "transparent");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawNebula();

      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.1) star.twinkleSpeed *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(210, 40%, 95%, ${star.opacity * 0.8})`;
        ctx.fill();

        // Glow for larger stars
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(192, 100%, 70%, ${star.opacity * 0.1})`;
          ctx.fill();
        }
      });

      time += 0.001;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    // Re-calc height on scroll for long pages
    const resizeObserver = new ResizeObserver(() => {
      canvas.height = document.documentElement.scrollHeight;
    });
    resizeObserver.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarField;
