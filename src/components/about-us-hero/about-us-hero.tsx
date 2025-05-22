'use client';
import Link from 'next/link';
import { handleAppRedirect } from '@/utils/helper';
import React from 'react';
import { FlipText } from '@/components/magicui/flip-text';
import CupWhite from '@/assets/svg/cup-white.svg';
import { AuroraText } from '../magicui/aurora-text';
import { motion } from 'framer-motion';

const AboutUsHero = () => {
  return (
    <section className="relative -mt-16 h-screen">
      <div className="absolute inset-0">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="h-full w-full object-cover brightness-50"
          aria-label="Background video for about us page"
        >
          <source src="/aboutbanner.webm" type="video/webm" />
          <track kind="captions" srcLang="en" label="English captions" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="w-full text-center text-white md:max-w-[60%]">
          <div className="flex flex-col items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
              }}
            >
              <CupWhite className="h-auto w-48" />
            </motion.div>

            <motion.div
              className="w-full text-4xl font-bold md:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay: 0.2,
              }}
            >
              <AuroraText colors={['#ed1c24', '#ff7654', '#ed1c24', '#ff7654']}>
                <AuroraText colors={['#FFFFFF']}>
                  Rooted in Tradition.
                </AuroraText>{' '}
                Driven by Passion.
              </AuroraText>
            </motion.div>

            <motion.p
              className="mx-auto text-base"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay: 0.4,
              }}
            >
              From the bustling streets of Madurai to your workplace, we bring
              hot, healthy beverages made the traditional way — no shortcuts, no
              machines, just authentic taste.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-2 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay: 0.6,
              }}
            >
              <button
                onClick={handleAppRedirect}
                className="bg-cuptime-black w-full rounded-lg px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 md:text-base"
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.cuptime.customer"
                  target="_blank"
                >
                  Order Now
                </Link>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('timeline-section');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="from-cuptime-orange to-cuptime-red w-full rounded-lg bg-gradient-to-tr px-4 py-2 text-sm font-semibold text-nowrap text-white md:py-3 md:text-base"
              >
                Explore Our Journey
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
