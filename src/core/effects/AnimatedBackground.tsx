import { useEffect, useState, useRef, useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  directionX: number;
  directionY: number;
  twinkleSpeed: number;
  hue: number;
}

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [showDark, setShowDark] = useState(() => document.documentElement.classList.contains('dark'));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const checkDarkMode = () => {
      const dark = document.documentElement.classList.contains('dark');
      setIsDark(dark);
      setTimeout(() => setShowDark(dark), 50);
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (starsRef.current.length > 0) return; // Already initialized
    
    starsRef.current = Array.from({ length: 90 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      return {
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 0.75 + 0.15,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.33 + 0.11,
        directionX: Math.cos(angle),
        directionY: Math.sin(angle),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        hue: Math.random() > 0.7 ? 200 + Math.random() * 60 : 0,
      };
    });
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'rgb(8, 8, 20)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      starsRef.current.forEach((star) => {
        star.x += star.directionX * star.speed;
        star.y += star.directionY * star.speed;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        const twinkle = Math.sin(time * star.twinkleSpeed * 100 + star.id) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;

        const glowSize = star.size * 4;
        const glow = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, glowSize
        );

        if (star.hue > 0) {
          glow.addColorStop(0, `hsla(${star.hue}, 70%, 90%, ${currentOpacity})`);
          glow.addColorStop(0.3, `hsla(${star.hue}, 60%, 70%, ${currentOpacity * 0.5})`);
          glow.addColorStop(1, 'transparent');
        } else {
          glow.addColorStop(0, `hsla(0, 0%, 100%, ${currentOpacity})`);
          glow.addColorStop(0.3, `hsla(0, 0%, 90%, ${currentOpacity * 0.4})`);
          glow.addColorStop(1, 'transparent');
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, Math.max(0.5, glowSize), 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(star.x, star.y, Math.max(0.3, star.size), 0, Math.PI * 2);
        if (star.hue > 0) {
          ctx.fillStyle = `hsla(${star.hue}, 80%, 95%, ${currentOpacity})`;
        } else {
          ctx.fillStyle = `hsla(0, 0%, 100%, ${currentOpacity})`;
        }
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      <div 
        className="absolute inset-0 transition-opacity ease-in-out"
        style={{ 
          opacity: showDark ? 0 : 1,
          transitionDuration: '1000ms',
          pointerEvents: showDark ? 'none' : 'auto'
        }}
      >
        
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 0% 0%, hsl(340 70% 85% / 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 100% 0%, hsl(200 80% 85% / 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 100%, hsl(45 80% 90% / 0.5) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 50%, hsl(280 60% 90% / 0.3) 0%, transparent 40%),
              linear-gradient(180deg, hsl(45 30% 98%) 0%, hsl(200 20% 96%) 100%)
            `,
          }}
        />
        
        
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-40 blur-3xl animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, hsl(330 80% 80%), transparent 70%)',
            top: '-10%',
            left: '-5%',
            transform: `translateY(${scrollY * 0.05}px)`,
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-30 blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, hsl(180 70% 75%), transparent 70%)',
            top: '30%',
            right: '-10%',
            transform: `translateY(${scrollY * 0.08}px)`,
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-[350px] h-[350px] rounded-full opacity-35 blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, hsl(45 90% 80%), transparent 70%)',
            bottom: '10%',
            left: '20%',
            transform: `translateY(${scrollY * -0.06}px)`,
            animation: 'float 18s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full opacity-25 blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, hsl(280 70% 85%), transparent 70%)',
            top: '60%',
            right: '25%',
            transform: `translateY(${scrollY * -0.04}px)`,
            animation: 'float 22s ease-in-out infinite reverse',
          }}
        />

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-30px) scale(1.05); }
          }
        `}</style>
      </div>

      
      <div 
        className="absolute inset-0 transition-opacity ease-in-out"
        style={{ 
          opacity: showDark ? 1 : 0,
          transitionDuration: '1000ms',
          pointerEvents: showDark ? 'auto' : 'none'
        }}
      >
        
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, hsl(240 30% 8% / 0.6) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, hsl(260 25% 6% / 0.6) 0%, transparent 50%),
              linear-gradient(180deg, hsl(240 20% 5%) 0%, hsl(220 15% 3%) 50%, hsl(200 10% 2%) 100%)
            `,
          }}
        />
        
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(260 40% 30%), transparent 70%)',
            top: '-15%',
            left: '-5%',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-8 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(200 35% 25%), transparent 70%)',
            bottom: '-10%',
            right: '-5%',
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
