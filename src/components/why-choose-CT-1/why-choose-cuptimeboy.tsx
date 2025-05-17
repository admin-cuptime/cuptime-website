'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import deliveryBoyImage from '@/assets/png/deliveryboy.png';
import { motion } from 'framer-motion';
import Okfinger from '@/assets/svg/ok-finger.svg';
import Retail from '@/assets/svg/shops.svg';
import Analytics from '@/assets/svg/analytics-up.svg';
import Elements from '@/assets/svg/elements.svg';
import Contact from '@/assets/svg/bubble-chat-user.svg';

const WhyChoose = () => {
  const workplaceDetails = [
    {
      Icon: Okfinger,
      title: 'Authentic Taste, Rooted in Tradition',
      description:
        'Our beverages are made using time-honored recipes from Madurai — no chemicals, no preservatives, only natural goodness.',
    },
    {
      Icon: Retail,
      title: 'High Demand, Everyday Needs',
      description:
        'Offices, hospitals, schools, and retail shops need consistent refreshments — you meet that demand with every cup served.',
    },
    {
      Icon: Analytics,
      title: 'Low Investment, High Potential',
      description:
        'With a compact kitchen setup and our full support, you can start small and grow fast.',
    },
    {
      Icon: Elements,
      title: 'Zero Royalty Fee',
      description:
        'Keep more of what you earn — we don’t charge any percentage of your profits.',
    },
    {
      Icon: Contact,
      title: 'Full Training & Support',
      description:
        'From recipe preparation to delivery management, we guide you every step of the way.',
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
            Why Choose CupTime?
          </motion.h2>
          <motion.p 
            className="flex flex-col items-center justify-between text-center text-base text-zinc-700 md:text-lg px-0 md:px-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At CupTime, we’re not just brewing beverages — we’re brewing business success. 
            Here's why <br /> entrepreneurs and local partners across Tamil Nadu trust us:
          </motion.p>
        </div>


        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Left Image Section */}
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
                    <tradition.Icon className="h-auto w-7 py-1" />
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
          {/* Right Content Section */}
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
              src={deliveryBoyImage}
              alt="Tradition Delivery"
              className="h-auto w-full rounded-lg"
            />
          </motion.div>
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
            <Link href="/franchise">Become a Franchisee</Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;