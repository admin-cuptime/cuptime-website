'use client';
import React from 'react';
import { motion } from 'framer-motion';
import eventHeroBg from '@/assets/png/event-hero-bg.png';
import EventsCarousel from '../events-carousel/events-carousel';

const EventHero = () => {
  return (
    <div className="">
      <div
        className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:h-[450px]"
        style={{
          backgroundImage: `url(${eventHeroBg.src})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full px-2 md:px-0 md:max-w-4xl mb-0 flex flex-col items-center justify-center gap-4 md:mb-24 md:gap-6">
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
            className="text-cuptime-zinc text-center text-sm md:text-lg"
          >
            At Cup Time, we do more than serve beverages—we create experiences.
            From tech-powered tastings to interactive coffee workshops, discover
            where you can meet us, learn, and celebrate the world of tea and
            coffee.
          </motion.div>
        </div>
      </div>
      <div className="-mt-6 px-0 md:-mt-24 md:px-0">
        <EventsCarousel />
      </div>
    </div>
  );
};

export default EventHero;
