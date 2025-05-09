'use client';

import Image from 'next/image';
import journeygirl from '@/assets/png/journeygirl.png';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import EntrepreneurialBg from '@/assets/png/entrepreneurial-bg.png';

const EntrepreneurialJourney = () => {
  const entrepreneurialJourney = [
    {
      description: 'Low investment, high returns',
    },
    {
      description: 'Complete setup and marketing support',
    },
    {
      description: 'Full training & tech support provided',
    },
  ];

  return (
    <section className="flex items-center justify-center overflow-hidden px-8 md:px-16">
      <div className="from-cuptime-orange to-cuptime-red w-full items-center justify-center rounded-2xl bg-gradient-to-tr ">
        <div
          className="flex flex-col bg-cover bg-bottom bg-no-repeat lg:flex-row"
          style={{
            backgroundImage: `url(${EntrepreneurialBg.src})`,
          }}
        >
          {/* Left Image Section */}
          <div className="flex flex-col items-center justify-center gap-6 p-4 py-8 lg:w-1/2">
            <div className="space-y-6">
              <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Start Your{' '}
                <span className="italic underline">
                  {' '}
                  Entrepreneurial
                  <br /> Journey
                </span>{' '}
                with Cup Time
              </h2>
              <p className="py-1.5 text-lg text-white md:text-xl lg:py-3">
                Join Cup Time’s growing franchise network with our flexible,{' '}
                <br />
                profitable FICO model
              </p>
              {entrepreneurialJourney.map((tradition, index) => (
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
                      {tradition.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div className="flex">
                <button className="rounded-lg bg-white px-6 py-3 text-base font-bold text-zinc-900">
                  Become a Cuptime Franchisee
                </button>
              </div>
            </div>
          </div>
          {/* Right Content Section */}
          <div className="shrink-0 flex justify-center p-8 lg:w-1/2">
            <Image
              src={journeygirl}
              alt="Entrepreneurial Journey"
              className="h-auto w-full rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurialJourney;
