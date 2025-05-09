'use client';

import React from 'react';
import Image from 'next/image';
import deliveryImage from '@/assets/png/tradition-girl.png';
import { motion } from 'framer-motion';
import Office from '@/assets/svg/office.svg';
import Retail from '@/assets/svg/shops.svg';
import College from '@/assets/svg/colleges.svg';
import Hospital from '@/assets/svg/hospitals.svg';
import Manufacturing from '@/assets/svg/manufacturing.svg';
const TraditionWorkplace = () => {
  const workplaceDetails = [
    {
      Icon: Office,
      title: 'IT & Corporate Offices',
      description:
        'Supporting high-performing teams with time-slotted, hot beverage delivery — straight to desks.',
    },
    {
      Icon: Retail,
      title: 'Retail Shops & Marketplaces',
      description:
        'Helping retailers stay refreshed during busy hours with on-the-go beverages.',
    },
    {
      Icon: College,
      title: 'Colleges & Schools',
      description:
        'Trusted by educators and students alike — for those much-needed refreshment breaks.',
    },
    {
      Icon: Hospital,
      title: 'Hospitals',
      description:
        'Supplying healthy, comforting drinks for caregivers, patients, and healthcare staff 24/7.',
    },
    {
      Icon: Manufacturing,
      title: 'Manufacturing Units',
      description:
        'Fueling factory floors with strong filter coffee and traditional drinks that keep productivity flowing.',
    },
  ];

  return (
    <section className="flex items-center justify-center overflow-hidden px-0 md:px-16">
      <div className="bg-cuptime-light flex h-full w-full flex-col items-center justify-center gap-7 rounded-2xl p-4 md:p-12">
        <div className="flex flex-col gap-6">
          <motion.h2 
            className="text-center text-3xl font-bold text-zinc-900 md:text-4xl lg:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Bringing Tradition to Every Workplace
          </motion.h2>
          <motion.p 
            className="flex flex-col items-center justify-between text-center text-base text-zinc-700 md:text-lg px-0 md:px-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From early mornings to late-night shifts, we serve a wide range of
            industries with fresh, authentic beverages — brewed the Madurai way.
            Wherever there are teams that need energy and warmth, CupTime
            delivers.
          </motion.p>
        </div>


        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Left Image Section */}
          <motion.div 
            className="w-full p-2 md:p-8 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: 'spring',
              damping: 12,
              stiffness: 100,
              delay: 0.4 
            }}
          >
            <Image
              src={deliveryImage}
              alt="Tradition Delivery"
              className="h-auto w-full rounded-lg"
            />
          </motion.div>
          {/* Right Content Section */}
          <div className="flex flex-col items-center justify-center gap-6 p-2 py-8 md:p-8 lg:w-1/2">
            <div className="space-y-6">
              {workplaceDetails.map((tradition, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: 'spring',
                    damping: 12,
                    stiffness: 100,
                  }}
                >
                  <div className="mb-4 flex-shrink-0">
                    <tradition.Icon className="h-auto w-7" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-zinc-800">
                      {tradition.title}
                    </h3>
                    <p className="text-sm text-zinc-700 md:text-base">
                      {tradition.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: 'spring',
            damping: 12,
            stiffness: 100,
          }}
        >
          <button className="bg-cuptime-black hover:bg-cuptime-black/80 cursor-pointer rounded-lg px-6 py-3 text-base font-semibold text-white transition-all">
            Start Serving Wellness
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TraditionWorkplace;
