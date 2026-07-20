import { motion } from 'framer-motion';

interface FloatingGlowProps {
  delay: number;
  size: number;
  top: string;
  left: string;
  color: string;
}

export const FloatingGlow = ({ delay, size, top, left, color }: FloatingGlowProps) => {
  return (
    <motion.div
      className="fixed pointer-events-none z-0 rounded-full"
      style={{
        top,
        left,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(40px)',
      }}
      animate={{
        y: [0, -50, 0],
        x: [0, 30, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export const FloatingGlows = () => {
  return (
    <>
      <FloatingGlow delay={0} size={300} top="10%" left="10%" color="rgba(186, 156, 221, 0.4)" />
      <FloatingGlow delay={2} size={250} top="20%" left="70%" color="rgba(255, 215, 0, 0.2)" />
      <FloatingGlow delay={4} size={280} top="60%" left="20%" color="rgba(147, 112, 219, 0.3)" />
      <FloatingGlow delay={6} size={220} top="70%" left="80%" color="rgba(255, 182, 193, 0.25)" />
    </>
  );
};
