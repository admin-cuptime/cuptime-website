'use client';
import React from 'react';
import { motion } from 'framer-motion';
import eventHeroBg from '@/assets/png/event-hero-bg.png';

const EventHero = () => {
  return (
    <div>
      <div
        className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:h-[450px]"
        style={{
          backgroundImage: `url(${eventHeroBg.src})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
            }}
            className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Sip, Savor, Celebrate – Join Our Events
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
            className="text-cuptime-zinc text-center text-base md:text-lg"
          >
            At Cuptime, we do more than serve beverages—we create experiences.
            From tech-powered tastings to interactive <br />
            coffee workshops, discover where you can meet us, learn, and
            celebrate the world of tea and coffee.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
