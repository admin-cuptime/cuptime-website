'use client';

import React from 'react';
import Image from 'next/image';
import deliveryImage from '@/assets/png/tradition-girl.png';
import { motion } from 'framer-motion';
import { images } from '@/assets/png/images';

const TraditionWorkplace = () => {
  const workplaceDetails = [
    {
      icon: images.traditionalimages.building.src,
      title: 'IT & Corporate Offices',
      description:
        'Supporting high-performing teams with time-slotted, hot beverage delivery — straight to desks.',
    },
    {
      icon: images.traditionalimages.city.src,
      title: 'Retail Shops & Marketplaces',
      description:
        'Helping retailers stay refreshed during busy hours with on-the-go beverages.',
    },
    {
      icon: images.traditionalimages.school.src,
      title: 'Colleges & Schools',
      description:
        'Trusted by educators and students alike — for those much-needed refreshment breaks.',
    },
    {
      icon: images.traditionalimages.hospital.src,
      title: 'Hospitals',
      description:
        'Supplying healthy, comforting drinks for caregivers, patients, and healthcare staff 24/7.',
    },
    {
      icon: images.traditionalimages.university.src,
      title: 'Manufacturing Units',
      description:
        'Fueling factory floors with strong filter coffee and traditional drinks that keep productivity flowing.',
    },
  ];

  return (
    <section className="flex items-center justify-center overflow-hidden sm:px-8 md:px-16">
      <div className="bg-cuptime-light w-full items-center justify-center rounded-2xl px-4 lg:px-8">
        <h2 className="mb-2 flex flex-col items-center justify-between py-12 text-center text-2xl font-bold text-zinc-900 md:text-3xl lg:text-4xl">
          Bringing Tradition to Every Workplace
        </h2>
        <p className="flex flex-col items-center justify-between text-center text-base text-zinc-700 md:text-lg">
          From early mornings to late-night shifts, we serve a wide range of
          industries with fresh, authentic <br /> beverages — brewed the Madurai
          way. Wherever there are teams that need energy and warmth, <br />
          CupTime delivers.
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Left Image Section */}
          <div className="flex justify-center p-8 lg:w-1/2">
            <Image
              src={deliveryImage}
              alt="Tradition Delivery"
              className="h-auto w-full rounded-lg" // Added w-full and h-auto for responsiveness
            />
          </div>
          {/* Right Content Section */}
          <div className="flex flex-col items-center justify-center gap-6 p-8 py-8 lg:w-1/2">
            <div className="space-y-6">
              {workplaceDetails.map((tradition, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {/* Render the icon using the Image component */}
                  <div className="mb-4 flex-shrink-0">
                    <Image
                      src={tradition.icon}
                      alt={tradition.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 mb-4"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 md:text-2xl">
                      {tradition.title}
                    </h3>
                    <p className="text-base text-zinc-700 md:text-lg">
                      {tradition.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-12 flex justify-center">
          <button className="bg-cuptime-black rounded-lg px-6 py-3 text-base font-medium text-white hover:bg-zinc-800">
            Start Serving Wellness
          </button>
        </div>
      </div>
    </section>
  );
};

export default TraditionWorkplace;
