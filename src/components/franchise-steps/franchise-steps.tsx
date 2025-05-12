'use client';

import { motion } from 'framer-motion';
import {
  IconAccessPoint,
  IconMapPin,
  IconMessageDots,
  IconProgressCheck,
  IconTeapot,
} from '@tabler/icons-react';
import React from 'react';

const deliveryStepsData = [
  {
    icon: <IconProgressCheck className="h-7 w-7" />,
    title: 'Apply Online',
    date: 'Step 1',
    description:
      'Fill out our franchise application form. We’ll review your interest and connect with you quickly.',
  },
  {
    icon: <IconMapPin className="h-7 w-7" />,
    title: 'Location & Feasibility Check',
    date: 'Step 2',
    description:
      'We assess your proposed location to ensure it meets the market need and setup requirements.',
  },
  {
    icon: <IconTeapot className="h-7 w-7" />,
    title: 'Setup & Training',
    date: 'Step 3',
    description:
      'Once approved, we help with kitchen setup, provide branded materials, and train your team on beverage',
    subdescription: ' preparation and hygiene.',
  },
  {
    icon: <IconAccessPoint className="h-7 w-7" />,
    title: 'Go Live',
    date: 'Step 4',
    description:
      'Start preparing and delivering fresh beverages to businesses in your area under the CupTime brand.',
  },
  {
    icon: <IconMessageDots className="h-7 w-7" />,
    title: 'Ongoing Support',
    date: 'Step 5',
    description:
      'Receive continuous marketing support, product updates, operational guidance, and more as you grow.',
  },
];

const FranchiseSteps = () => {
  return (
    <section className="bg-cuptime-black flex flex-col gap-16 items-center justify-center py-20 text-white">
      <div className="flex flex-col gap-2">
        <motion.h2
          className="text-center text-3xl font-bold text-zinc-50 md:text-4xl lg:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How It Works – Start Your Franchise in 5 Easy Steps
        </motion.h2>
        <motion.p
          className="flex flex-col items-center justify-between px-0 text-center text-base text-zinc-400 md:px-28 md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          From Order to Sip – A Seamless 5-Step Journey
        </motion.p>
      </div>
      <div className="mx-auto w-full max-w-4xl overflow-hidden">
        <div className="-my-6">
          {deliveryStepsData.map((step, index) => (
            <div key={index} className="group relative py-6 pl-8 sm:pl-32 select-none">
              <div className="flex items-center gap-2 rounded-3xl border-2 border-zinc-500/5 p-3 hover:bg-zinc-500/20">
                <div className={`${index === 0 ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'} rounded-2xl bg-[#1E1E1E] p-2`}>{step.icon}</div>

                <div>
                  <div className="text-lg font-medium text-white">
                    {step.title}
                  </div>

                  <div
                    className={`flex flex-col items-start ${index === 0 ? 'after:bg-cuptime-red' : 'group-hover:after:bg-cuptime-red after:bg-zinc-600'} before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-zinc-500/20 before:px-px before:transition-colors before:duration-300 group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-zinc-500/20 after:transition-colors after:duration-300 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]`}
                  >
                    <time
                      className={`${index === 0 ? 'bg-cuptime-red' : 'group-hover:bg-cuptime-red bg-zinc-500/20'} left-0 mb-3 inline-flex h-7 w-20 translate-y-0.5 items-center justify-center rounded-full text-sm font-semibold text-white transition-colors duration-300 sm:absolute sm:mb-0`}
                    >
                      {step.date}
                    </time>
                  </div>

                  <div className="text-sm md:text-nowrap text-wrap text-zinc-400">
                    {step.description} <br />
                    {step.subdescription}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
      <button className="bg-zinc-50 cursor-pointer rounded-lg px-6 py-3 text-base font-semibold text-zinc-900 transition-all">
            Order Now
          </button>
      </div>
    </section>
  );
};

export default FranchiseSteps;
