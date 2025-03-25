import React, { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';

const NoiseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let noise: ImageData;
    
    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 15;  
      }
      
      return imageData;
    };
    
    const render = () => {
      if (!noise) noise = createNoise();
      
      const scrollPosition = scrollY.get();
      const xOffset = (scrollPosition / window.innerHeight) * canvas.width;
      
      ctx.putImageData(noise, -xOffset, 0);
      ctx.putImageData(noise, canvas.width - xOffset, 0);
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollY]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30"
      style={{ mixBlendMode: 'overlay' }}
    />
  );
};

export default NoiseBackground; 