'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import deliveryImage from '@/assets/png/trust-delivery-time.png';
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
    <section className="flex h-full items-center justify-center overflow-hidden px-4 md:px-16">
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
        {/* Left Content Section */}
        <div className="content-section relative flex flex-col justify-center gap-4 lg:w-1/2">
          <h2 className="mb-4 text-center text-3xl font-bold text-zinc-900 md:text-left md:text-4xl">
            Trusted. Timed. Delivered.
          </h2>

          <p className="mb-3 text-base md:text-lg text-center md:text-left">
            We understand that in a busy workplace, time is everything. That’s
            why we pride ourselves on
            <span className="mb-3 p-1 font-bold md:text-lg">
              punctual delivery of every cup — hot, fresh, and on schedule.
            </span>
          </p>
          <div className="space-y-5">
            {deliveries.map((timing, index) => (
              <motion.div key={index} className="flex flex-col md:flex-row items-center gap-1">
                {/* Render the icon using the Image component */}
                <div className="flex-shrink-0">
                  <timing.icon className="h-auto w-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm md:text-lg font-semibold text-zinc-800 text-center md:text-left">
                    {timing.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Right Image Section */}
        <div className="image-section flex items-center justify-between lg:w-1/2">
          <Image
            src={deliveryImage}
            alt="Delivery Team"
            className="rounded-lg"
            width={580}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustDelivery;
