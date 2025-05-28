'use client';

import Link from 'next/link';
import { handleAppRedirect } from '@/utils/helper';
import { motion } from 'framer-motion';
import React from 'react';
import Leaf from '@/assets/png/LeafTimeline.png';

const timelineData = [
  {
    year: '2018',
    title: '2018 – The First Spark',
    description:
      'The idea was born in the heritage-rich streets of Madurai — a city known for its taste, culture, and warmth. We envisioned bringing authentic local beverages like Karungali Coffee, Panangkinjau Paal, and Sukku Kaapi back into everyday life.',
  },
  {
    year: '2019',
    title: '2019 – Groundwork & Recipe Trials',
    description:
      'Collaborated with local traditional recipe makers, documenting authentic preparation methods that preserved authentic taste without compromising hygiene and consistency.',
  },
  {
    year: '2020',
    title: '2020 – Officially Brewed: Cup Time Launched',
    description:
      'We launched Cup Time with one goal: serve businesses fresh, hot, preservative-free beverages in a sustainable and scalable way — prepared with love, not machines.',
  },
  {
    year: '2021',
    title: '2021 – First B2B Deliveries',
    description:
      'Offices, hospitals, and educational institutions started ordering and sipping our products — quickly making Cup Time a part of their morning refreshments.',
  },
  {
    year: '2022',
    title: '2022 – Franchise Model Introduced',
    description:
      'Our Franchise (Franchise Cup Time-Operated) model helped local entrepreneurs to start their own Cup Time kitchen, with products overseen by us, but prepared by them.',
  },
  {
    year: '2023',
    title: '2023 – Franchise Model Introduced',
    description:
      'Our Franchise (Franchise Cup Time-Operated) model helped local entrepreneurs to start their own Cup Time kitchen, with products overseen by us, but prepared by them.',
  },
  {
    year: '2024',
    title: '2024 – Franchise Model Introduced',
    description:
      'Our Franchise (Franchise Cup Time-Operated) model helped local entrepreneurs to start their own Cup Time kitchen, with products overseen by us, but prepared by them.',
  },
  {
    year: '2025',
    title: '2025 – Franchise Model Introduced',
    description:
      'Our Franchise (Franchise Cup Time-Operated) model helped local entrepreneurs to start their own Cup Time kitchen, with products overseen by us, but prepared by them.',
  },
];

const HorizontelTimeline = () => {
  return (
    <section
      className="bg-cuptime-black overflow-hidden py-10 text-white lg:py-20"
      style={{
        backgroundImage: `url(${Leaf.src})`,
        backgroundSize: 'auto 350px',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-2 text-center text-3xl font-bold lg:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Journey, One Cup at a Time
        </motion.h2>
        <motion.p
          className="mb-16 py-3 text-center text-zinc-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          From the heart of Madurai to your business doorstep — here's how our
          passion for traditional beverages became a brewing movement.
        </motion.p>
        {/* Desktop lg+ view: Horizontal Timeline */}
        <div className="relative hidden px-5 lg:block">
          <div className="absolute top-6 right-20 left-20 z-0 h-0.5 bg-zinc-700"></div>
          <div className="relative flex justify-between gap-2">
            {timelineData
              .filter((item) =>
                ['2018', '2019', '2020', '2021', '2022'].includes(item.year)
              )
              .map((item, index) => (
                <motion.div
                  key={item.year}
                  className="group flex w-65 flex-col items-center gap-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 mt-4 h-4 w-4 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-cuptime-red' : 'group-hover:bg-cuptime-red bg-zinc-700'}`}
                  />
                  {/* Year Button */}
                  <button className="bg-cuptime-red mb-1 rounded-2xl px-6 py-2 text-base font-bold">
                    {item.year}
                  </button>
                  {/* Card Content */}
                  <div
                    className={`hover:border-cuptime-red h-auto rounded-lg border-1 border-zinc-700 p-4 transition-all hover:border-1 xl:h-80 ${index === 0 ? 'bg-cuptime-black' : 'bg-transparent'} hover:bg-cuptime-shadow hover:border-cuptime-red`}
                  >
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <p className="text-base text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Mobile + Tablet view: Vertical Timeline */}
        <div className="relative border-l border-zinc-700 lg:hidden">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              className="group relative mb-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Dot */}
              <div
                className={`absolute top-1 -left-2 h-4 w-4 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-cuptime-red' : 'group-hover:bg-cuptime-red bg-zinc-700'}`}
              />

              <div className="ml-6">
                {/* Year Button */}
                <button className="bg-cuptime-red mb-1 rounded-lg px-3 py-1.5 text-base font-bold">
                  {item.year}
                </button>

                {/* Card Content */}
                <div
                  className={`mt-2 rounded-lg border-1 border-zinc-700 p-4 transition-all ${index === 0 ? 'bg-cuptime-black' : 'bg-transparent'} hover:bg-cuptime-shadow`}
                >
                  <h3 className="mb-2 text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs text-zinc-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontelTimeline;
