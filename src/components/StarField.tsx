import { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: { x: number; y: number; size: number; opacity: number; twinkleSpeed: number; color: string }[] = [];
    let shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; angle: number; life: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 3500);
      const colors = [
        "210, 40%, 95%",
        "192, 100%, 80%",
        "270, 60%, 85%",
        "40, 100%, 90%",
        "0, 0%, 100%",
      ];
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.2 + 0.3,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.015 + 0.003,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    // Draw a glowing planet/celestial body
    const drawPlanet = (
      x: number, y: number, radius: number,
      baseColor: string, glowColor: string, glowSize: number,
      shadowAngle: number, rings?: { color: string; width: number; tilt: number }
    ) => {
      ctx.save();
      // Outer glow
      const glow = ctx.createRadialGradient(x, y, radius * 0.8, x, y, radius + glowSize);
      glow.addColorStop(0, glowColor);
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, radius + glowSize, 0, Math.PI * 2);
      ctx.fill();

      // Planet body
      const grad = ctx.createRadialGradient(
        x - radius * 0.3, y - radius * 0.3, radius * 0.1,
        x, y, radius
      );
      grad.addColorStop(0, baseColor);
      grad.addColorStop(1, "hsl(228, 20%, 5%)");
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Atmosphere edge
      const atmo = ctx.createRadialGradient(x, y, radius * 0.85, x, y, radius * 1.05);
      atmo.addColorStop(0, "transparent");
      atmo.addColorStop(0.5, glowColor.replace("0.3", "0.08"));
      atmo.addColorStop(1, "transparent");
      ctx.fillStyle = atmo;
      ctx.beginPath();
      ctx.arc(x, y, radius * 1.05, 0, Math.PI * 2);
      ctx.fill();

      // Rings (e.g. Saturn-like)
      if (rings) {
        ctx.strokeStyle = rings.color;
        ctx.lineWidth = rings.width;
        ctx.beginPath();
        ctx.ellipse(x, y, radius * 1.8, radius * rings.tilt, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    };

    // Draw Earth with continents hint
    const drawEarth = (x: number, y: number, radius: number, time: number) => {
      ctx.save();
      // Glow
      const glow = ctx.createRadialGradient(x, y, radius * 0.8, x, y, radius * 2.5);
      glow.addColorStop(0, "hsla(210, 100%, 60%, 0.15)");
      glow.addColorStop(0.5, "hsla(192, 100%, 50%, 0.05)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, radius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Planet body - ocean
      const bodyGrad = ctx.createRadialGradient(
        x - radius * 0.3, y - radius * 0.3, radius * 0.05,
        x, y, radius
      );
      bodyGrad.addColorStop(0, "hsl(210, 80%, 55%)");
      bodyGrad.addColorStop(0.6, "hsl(210, 70%, 35%)");
      bodyGrad.addColorStop(1, "hsl(220, 50%, 12%)");
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // Continent-like patches
      ctx.save();
      ctx.clip(); // clip to planet circle
      const continentOffset = (time * 5) % (radius * 2);
      const continents = [
        { cx: -0.2, cy: -0.1, r: 0.35 },
        { cx: 0.3, cy: 0.2, r: 0.25 },
        { cx: -0.1, cy: 0.4, r: 0.2 },
        { cx: 0.5, cy: -0.3, r: 0.15 },
      ];
      continents.forEach(c => {
        const cx = x + (c.cx * radius * 2 + continentOffset) % (radius * 1.6) - radius * 0.3;
        const cy = y + c.cy * radius;
        const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, c.r * radius);
        cGrad.addColorStop(0, "hsla(140, 50%, 35%, 0.6)");
        cGrad.addColorStop(0.7, "hsla(120, 40%, 25%, 0.3)");
        cGrad.addColorStop(1, "transparent");
        ctx.fillStyle = cGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, c.r * radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // Atmosphere ring
      const atmo = ctx.createRadialGradient(x, y, radius * 0.9, x, y, radius * 1.12);
      atmo.addColorStop(0, "transparent");
      atmo.addColorStop(0.4, "hsla(200, 100%, 70%, 0.12)");
      atmo.addColorStop(1, "transparent");
      ctx.fillStyle = atmo;
      ctx.beginPath();
      ctx.arc(x, y, radius * 1.12, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Draw sun with corona
    const drawSun = (x: number, y: number, radius: number, time: number) => {
      ctx.save();

      // Corona rays
      const coronaSize = radius * 4 + Math.sin(time * 2) * radius * 0.5;
      const corona = ctx.createRadialGradient(x, y, radius * 0.5, x, y, coronaSize);
      corona.addColorStop(0, "hsla(40, 100%, 70%, 0.25)");
      corona.addColorStop(0.3, "hsla(30, 100%, 55%, 0.1)");
      corona.addColorStop(0.6, "hsla(20, 100%, 50%, 0.04)");
      corona.addColorStop(1, "transparent");
      ctx.fillStyle = corona;
      ctx.beginPath();
      ctx.arc(x, y, coronaSize, 0, Math.PI * 2);
      ctx.fill();

      // Sun body
      const sunGrad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      sunGrad.addColorStop(0, "hsl(50, 100%, 95%)");
      sunGrad.addColorStop(0.3, "hsl(45, 100%, 75%)");
      sunGrad.addColorStop(0.7, "hsl(35, 100%, 55%)");
      sunGrad.addColorStop(1, "hsl(20, 100%, 40%)");
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = sunGrad;
      ctx.fill();

      ctx.restore();
    };

    // Draw a spiral galaxy
    const drawGalaxy = (cx: number, cy: number, size: number, rotation: number, hue: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);

      // Galaxy core glow
      const core = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.3);
      core.addColorStop(0, `hsla(${hue}, 60%, 80%, 0.3)`);
      core.addColorStop(0.5, `hsla(${hue}, 50%, 50%, 0.1)`);
      core.addColorStop(1, "transparent");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Spiral arms
      for (let arm = 0; arm < 2; arm++) {
        const armOffset = arm * Math.PI;
        for (let i = 0; i < 120; i++) {
          const angle = armOffset + (i / 120) * Math.PI * 3;
          const dist = (i / 120) * size;
          const spread = (i / 120) * size * 0.15;
          const sx = Math.cos(angle) * dist + (Math.random() - 0.5) * spread;
          const sy = Math.sin(angle) * dist * 0.5 + (Math.random() - 0.5) * spread;
          const alpha = (1 - i / 120) * 0.35;
          const dotSize = (1 - i / 120) * 1.8 + 0.3;

          ctx.beginPath();
          ctx.arc(sx, sy, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue + (i / 120) * 40}, 70%, 75%, ${alpha})`;
          ctx.fill();
        }
      }

      ctx.restore();
    };

    const drawNebulae = (time: number) => {
      // Large nebula clouds
      const nebulae = [
        { x: 0.2, y: 0.15, r: 0.35, h: 270, drift: 0.3 },
        { x: 0.75, y: 0.35, r: 0.3, h: 192, drift: -0.2 },
        { x: 0.5, y: 0.65, r: 0.4, h: 240, drift: 0.15 },
        { x: 0.15, y: 0.85, r: 0.25, h: 300, drift: -0.1 },
        { x: 0.85, y: 0.75, r: 0.2, h: 200, drift: 0.25 },
      ];

      nebulae.forEach(n => {
        const nx = canvas.width * n.x + Math.sin(time + n.drift) * 20;
        const ny = canvas.height * n.y + Math.cos(time + n.drift) * 15;
        const g = ctx.createRadialGradient(nx, ny, 0, nx, ny, canvas.width * n.r);
        g.addColorStop(0, `hsla(${n.h}, 80%, 40%, 0.07)`);
        g.addColorStop(0.4, `hsla(${n.h}, 60%, 30%, 0.035)`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    const spawnShootingStar = () => {
      if (Math.random() < 0.003 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: 80 + Math.random() * 120,
          speed: 8 + Math.random() * 6,
          opacity: 1,
          angle: Math.PI * 0.2 + Math.random() * 0.3,
          life: 1,
        });
      }
    };

    const drawShootingStars = () => {
      shootingStars = shootingStars.filter(s => s.life > 0);
      shootingStars.forEach(s => {
        const endX = s.x - Math.cos(s.angle) * s.length;
        const endY = s.y + Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, endX, endY);
        grad.addColorStop(0, `hsla(192, 100%, 90%, ${s.opacity * s.life})`);
        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(192, 100%, 95%, ${s.life})`;
        ctx.fill();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life -= 0.015;
      });
    };

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Nebulae
      drawNebulae(time);

      // Galaxies (static positions, slow rotation)
      drawGalaxy(canvas.width * 0.12, canvas.height * 0.08, 100, time * 0.1, 260);
      drawGalaxy(canvas.width * 0.88, canvas.height * 0.55, 70, -time * 0.08, 200);
      if (canvas.height > 2000) {
        drawGalaxy(canvas.width * 0.3, canvas.height * 0.72, 55, time * 0.06, 290);
      }

      // Sun (top right area, subtle)
      drawSun(canvas.width * 0.92, canvas.height * 0.04, 18, time);

      // Earth (hero section area)
      drawEarth(canvas.width * 0.82, canvas.height * 0.18, 28, time);

      // Distant planet with rings
      drawPlanet(
        canvas.width * 0.08, canvas.height * 0.42, 14,
        "hsl(30, 50%, 45%)", "hsla(30, 60%, 50%, 0.1)", 20,
        0.3,
        { color: "hsla(40, 40%, 60%, 0.2)", width: 1.5, tilt: 0.35 }
      );

      // Small distant planet
      drawPlanet(
        canvas.width * 0.65, canvas.height * 0.88, 10,
        "hsl(340, 30%, 40%)", "hsla(340, 50%, 50%, 0.08)", 12,
        0.5
      );

      // Stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.1) star.twinkleSpeed *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${star.color}, ${star.opacity * 0.85})`;
        ctx.fill();

        if (star.size > 1.3) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${star.color}, ${star.opacity * 0.08})`;
          ctx.fill();
        }
      });

      // Shooting stars
      spawnShootingStar();
      drawShootingStars();

      time += 0.002;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

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
