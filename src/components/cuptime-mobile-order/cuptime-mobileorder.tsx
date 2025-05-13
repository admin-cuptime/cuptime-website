'use client';

import React from 'react';
import Image from 'next/image';
import cuptimemobilescan from '@/assets/png/Cuptimemobilescan.png';
import { motion } from 'framer-motion';

const CupTimeMobileOrder = () => {
  const features = [
    {
      title: 'Convenience',
      description: 'Save time daily, schedule in advance',
    },
    {
      title: 'Customization',
      description: 'Personalize every cup',
    },
    {
      title: 'Reliability',
      description: 'Timed delivery at your office doorstep',
    },
    {
      title: 'Sustainability',
      description: 'Track flasks, reduce waste',
    },
  ];

  return (
    <section className="flex items-center justify-center overflow-hidden px-6 md:px-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-cuptime-light w-full items-center justify-center rounded-2xl"
      >
        <div className="flex flex-col gap-4 md:p-12 lg:flex-row">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
              delay: 0.4,
            }}
            className="flex flex-col items-center justify-center p-5 md:justify-start lg:w-1/3"
          >
            <Image
              src={cuptimemobilescan}
              alt="Cup Time Mobile App"
            //   className="h-full w-auto rounded-lg md:h-[578px] md:w-[310px]"
              className="w-[200px] h-auto sm:w-[250px] md:w-[310px] md:h-[578px] rounded-lg object-contain"
            />
          </motion.div>
          {/* Right Content Section */}
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
            className="flex flex-col items-start justify-center gap-6 px-4 lg:w-2/3"
          >
            <div className="mb-6 space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl lg:text-4xl">
                Your Daily Brew, Made Smarter
              </h2>
              <p className="text-sm md:text-lg">
                CupTime brings you fresh, flavorful coffee and tea exactly when
                and how you want it. With smart scheduling, customizable
                options, and eco-friendly practices, we make your daily beverage
                break seamless and sustainable—right at your doorstep.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-bold text-zinc-700 md:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-700 md:text-lg">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CupTimeMobileOrder;
