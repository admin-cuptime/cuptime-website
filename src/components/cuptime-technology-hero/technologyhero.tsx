'use client';

import React from 'react';
import TechnologuHero from '@/assets/png/technologyhand.png';
import { motion } from 'framer-motion';

const TechnologyHero = () => {
  return (
    <section className="h-full w-full bg-zinc-100 py-12 lg:h-[calc(100vh-4rem)] lg:py-0">
      <div className="relative flex h-full w-full flex-col items-center justify-center px-4 lg:px-28">
        <div className="flex h-full flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="flex w-full flex-col gap-2 text-center md:gap-5 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
              }}
              className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-6xl"
            >
              Brewing Innovation with <br /> Every Cup
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay: 0.2,
              }}
              className="text-base md:text-xl"
            >
              At Cuptime, we believe great coffee isn’t just about the brew —
              it’s about the experience. We’ve built a smart, seamless
              technology ecosystem that makes your daily beverage routine
              faster, smoother, and more rewarding — all through your phone.
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
              delay: 0.3,
            }}
            className="w-full lg:w-1/2"
          >
            <div className="image-section flex items-center justify-between">
              <img
                src={TechnologuHero.src}
                alt="Delivery Team"
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;
