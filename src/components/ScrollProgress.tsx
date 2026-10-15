import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-[0_0_12px_#38bdf8] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
