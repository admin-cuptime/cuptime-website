'use client';

import React from 'react';
import { motion } from 'framer-motion';
import trust1 from '@/assets/svg/fi_6046785.svg';
import trust2 from '@/assets/svg/peak-hour.svg';
import trust3 from '@/assets/svg/quality-check.svg';

const TrustDelivery = () => {
  const deliveries = [
    {
      icon: trust1,
      title: 'Real-time Order tracking via our mobile app',
    },
    {
      icon: trust2,
      title: 'Time-slotted Delivery for peak-hours convenience',
    },
    {
      icon: trust3,
      title: 'Quality-packed in insulated flasks for temperature lock',
    },
  ];

  return (
    <section className="flex h-full items-center justify-center overflow-hidden px-5 md:px-16">
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
        {/* Left Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="content-section relative flex flex-col justify-center gap-1 lg:w-1/2"
        >
          <h2 className="mb-4 text-center text-3xl font-bold text-zinc-900 md:text-left md:text-4xl">
            Trusted. Timed. Delivered.
          </h2>

          <p className="mb-3 text-center text-base md:text-left md:text-lg">
            We understand that in a busy workplace, time is everything. That's
            why we pride ourselves on
            <span className="mb-3 p-1 font-bold md:text-lg">
              punctual delivery of every cup — hot, fresh, and on schedule.
            </span>
          </p>
          <div className="space-y-5">
            {deliveries.map((timing, index) => (
              <motion.div
                key={index}
                className="flex flex-row items-center justify-center gap-4 md:justify-start"
              >
                {/* Render the icon using the Image component */}
                <div className="flex-shrink-0">
                  <timing.icon className="h-auto w-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-center text-sm font-semibold text-zinc-800 md:text-left md:text-lg">
                    {timing.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="image-section flex items-center justify-between lg:w-1/2"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="h-auto w-full rounded-lg [&:not(:hover)]:controls-hidden"
          >
            <source src="/franchise.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustDelivery;
