'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import EntrepreneurialBg from '@/assets/png/entrepreneurial-bg.png';

const FicoFranchise = () => {
  const ficoJourney = [
    {
      description: 'Space Required: 1500–2000 sq ft',
    },
    {
      description: 'Passion for customer service',
    },
    {
      description: 'Prime or semi-prime location',
    },
    {
      description: 'Commitment to hygiene and brand standards',
    },
  ];

  return (
    <section className="flex items-center justify-center overflow-hidden px-0 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-cuptime-shadow items-center justify-center rounded-2xl bg-gradient-to-tr"
      >
        <div
          className="flex flex-col gap-4 bg-cover bg-bottom bg-no-repeat p-4 md:p-12 lg:flex-row"
          style={{
            backgroundImage: `url(${EntrepreneurialBg.src})`,
          }}
        >
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
              delay: 0.4,
            }}
            className="flex flex-col items-center justify-center gap-6 lg:w-1/2"
          >
            <div className="space-y-6">
              <h2 className="mb-2 text-center text-3xl font-bold text-white md:text-left md:text-4xl">
                What You Need to Get Started
              </h2>
              <p className="py-1.5 text-base text-white md:py-3 md:text-xl">
                Join Cup Time’s growing franchisee network with our flexible,
                profitable franchisee model.
              </p>
              <div className="flex flex-col items-start justify-center gap-3">
                {ficoJourney.map((ficomodel, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {/* Render the icon using the Image component */}
                    <div className="flex items-center space-x-2">
                      <Check className="text-white" strokeWidth={4} />
                      <p className="text-base text-white md:text-lg">
                        {ficomodel.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex">
                <Link
                  href="/contact-us?reason=franchise"
                  className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-200 md:text-base"
                >
                  Become a Cup Time Franchisee
                </Link>
              </div>
            </div>
          </motion.div>
          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
              delay: 0.4,
            }}
            className="image-section flex items-center justify-between lg:w-1/2"
          >
            <video
            autoPlay
            loop
            muted
            playsInline
            className="md:h-150 h-auto w-full rounded-lg [&:not(:hover)]:controls-hidden"
          >
            <source src="/franchise-out.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FicoFranchise;
