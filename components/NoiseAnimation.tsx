import React, { useEffect, useRef } from 'react';
import { noise } from '@/utils/noise';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
}

const NoiseAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  
  const { scrollYProgress } = useScroll();
  
  const animationProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  );
  
  const springProgress = useSpring(animationProgress, {
    stiffness: 50,
    damping: 25,
    mass: 1
  });

  const updateCanvasSize = () => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const container = containerRef.current;
    const canvas = canvasRef.current;
    
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    updateCanvasSize();
    
    window.addEventListener('resize', updateCanvasSize);

    let z = 0;
    const particles: Particle[] = [];
    const spacing = 15;

    const resetParticles = () => {
      particles.length = 0;
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          particles.push({ x, y });
        }
      }
    };

    resetParticles();

    let lastProgress = 0;

    const unsubscribe = springProgress.onChange(value => {
      z = value * 0.01;
      lastProgress = value;
    });

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(({ x, y }) => {
        const value = noise.perlin3(x * 0.002, y * 0.002, z) * Math.PI * 2;
        const size = Math.abs(value) * 1.5;
        
        if (size > 0.1) {
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fillStyle = `hsla(197, 29%, ${20 + 20 * Math.abs(value)}%, ${0.6 + 0.2 * Math.abs(value)})`;
          context.fill();
        }
      });

      const gradientPosition = lastProgress / 100;
      
      const isContentOnLeft = 
        gradientPosition < 0.15 || 
        (gradientPosition >= 0.3 && gradientPosition < 0.6) || 
        gradientPosition >= 0.75;
      
      const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
      
      if (isContentOnLeft) {
        gradient.addColorStop(0, 'rgba(33, 33, 33, 0)');
        gradient.addColorStop(0.2, 'rgba(37, 57, 67, 0.9)');
        gradient.addColorStop(0.8, 'rgba(37, 57, 67, 0.9)');
        gradient.addColorStop(1, 'rgba(33, 33, 33, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(33, 33, 33, 0)');
        gradient.addColorStop(0.2, 'rgba(37, 57, 67, 0.9)');
        gradient.addColorStop(0.8, 'rgba(37, 57, 67, 0.9)');
        gradient.addColorStop(1, 'rgba(33, 33, 33, 0)');
      }

      context.globalCompositeOperation = 'destination-in';
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.globalCompositeOperation = 'source-over';

      z += 0.0005;  
      animationFrameRef.current = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
      resetParticles();
    });
    
    resizeObserver.observe(container);
    
    noise.seed(Math.random());
    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', updateCanvasSize);
      resizeObserver.disconnect();
      unsubscribe();
    };
  }, [springProgress]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed top-0 h-screen pointer-events-none overflow-visible"
      style={{
        width: '100%',
        left: '0',
        opacity: 1
      }}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
      />
    </motion.div>
  );
};

export default NoiseAnimation;