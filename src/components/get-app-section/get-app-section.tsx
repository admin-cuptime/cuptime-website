'use client';

import React from 'react';
import CuptimeLogoWhite from '@/assets/svg/cuptime-logo-white.svg';
import { images } from '@/assets/png/images';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const GetAppSection = () => {
  return (
    <section className="bg-cuptime-black h-full w-full">
      <div className="flex h-full flex-col items-start justify-between gap-6 px-4 pt-10 md:flex-row md:items-center md:gap-2 md:px-16">
        <motion.div
          className="flex h-full flex-col gap-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            damping: 12,
            stiffness: 100,
          }}
        >
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CuptimeLogoWhite className="h-auto w-20" />
            </motion.div>
            <motion.div
              className="text-3xl font-bold text-white md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get the CupTime App Now
            </motion.div>
            <motion.div
              className="text-sm text-white md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              For the best offers and best serves to your Employee
            </motion.div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-zinc-400 md:flex-row md:gap-4 md:text-base">
            {[
              'Browse our full menu',
              'Schedule regular orders',
              'Get special offers and updates',
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  damping: 15,
                  stiffness: 100,
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Check className="text-emerald-400" strokeWidth={4} />
                <div>{text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src={images.getAppImages.getAppSplash.src}
            className="h-auto w-full"
            alt="get-app-splash"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GetAppSection;
