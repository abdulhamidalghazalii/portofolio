import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -800]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -200]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf808_1px,transparent_1px),linear-gradient(to_bottom,#38bdf808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_70%,transparent_100%)] opacity-70" />

      {/* Layer 1: Parallax deep ambient glow */}
      <motion.div
        style={{ y: y1 }}
        animate={{
          x: mousePos.x * 0.5,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 80 }}
        className="absolute top-1/4 -left-20 w-[550px] h-[550px] rounded-full bg-indigo-600/10 blur-[130px]"
      />

      {/* Layer 2: Parallax cyan pulse glow */}
      <motion.div
        style={{ y: y2 }}
        animate={{
          x: -mousePos.x * 0.7,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 80 }}
        className="absolute top-1/2 -right-20 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[140px]"
      />

      {/* Layer 3: Purple bottom glow */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[120px]"
      />

      {/* Floating particles layer */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0"
      >
        {[
          { top: '15%', left: '10%', size: 'w-1 h-1', color: 'bg-sky-400', glow: 'shadow-[0_0_8px_#38bdf8]' },
          { top: '25%', right: '15%', size: 'w-1.5 h-1.5', color: 'bg-indigo-400', glow: 'shadow-[0_0_10px_#818cf8]' },
          { top: '45%', left: '20%', size: 'w-1 h-1', color: 'bg-emerald-400', glow: 'shadow-[0_0_8px_#34d399]' },
          { top: '65%', right: '25%', size: 'w-1.5 h-1.5', color: 'bg-sky-400', glow: 'shadow-[0_0_10px_#38bdf8]' },
          { top: '80%', left: '15%', size: 'w-1 h-1', color: 'bg-purple-400', glow: 'shadow-[0_0_8px_#c084fc]' },
          { top: '35%', right: '35%', size: 'w-1 h-1', color: 'bg-sky-300', glow: 'shadow-[0_0_6px_#7dd3fc]' },
        ].map((pt, idx) => (
          <div
            key={idx}
            className={`absolute rounded-full ${pt.size} ${pt.color} ${pt.glow} opacity-60 animate-pulse`}
            style={{ top: pt.top, left: pt.left, right: pt.right }}
          />
        ))}
      </motion.div>
    </div>
  );
};
