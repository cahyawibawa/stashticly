// Thank you: https://ui.aceternity.com/components/glowing-stars-effect

'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, useEffect, useRef, useState } from 'react';

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      className={className}
    >
      <div className='flex justify-center items-center'>
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className='px-4 pb-0'>{children}</div>
    </div>
  );
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 108;
  const columns = 18;

  const [glowingStars, setGlowingStars] = useState<number[]>([]);

  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='h-[150px] p-1 w-full'
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1px',
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx.toString()}}`}
            className='relative flex items-center justify-center'
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence mode='wait'>
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? 'hsl(var(--primary))' : '#666',
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
      }}
      className={cn('bg-[#666] h-[1px] w-[1px] rounded-full relative z-20')}
    />
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className='absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-background blur-[1px] shadow-2xl shadow-primary/10'
    />
  );
};
