'use client';

import { motion } from 'framer-motion';
import {
  IconBottleFilled,
  IconMapPin,
  IconMoped,
  IconQrcode,
  IconShoppingCartCopy,
  IconTeapot,
} from '@tabler/icons-react';
import React from 'react';
import CoffeeBeans from '@/assets/png/coffee-beans.png';

const productdeliveryStepsData = [
  {
    icon: <IconShoppingCartCopy className="h-7 w-7" />,
    title: 'Receive Order',
    date: 'Step 1',
    description:
      'Orders are placed through our easy-to-use mobile app — anytime, anywhere.',
  },
  {
    icon: <IconTeapot className="h-7 w-7" />,
    title: 'Prepare Fresh Batches (Twice in a Day)',
    date: 'Step 2',
    description:
      'Freshly made beverages are poured into food-grade, sanitized flasks to retain heat and hygiene.',
  },
  {
    icon: <IconBottleFilled className="h-7 w-7" />,
    title: 'Transfer to Sanitized Flasks',
    date: 'Step 3',
    description:
      'Freshly made beverages are poured into food-grade, sanitized flasks to retain heat and hygiene.',
  },
  {
    icon: <IconQrcode className="h-7 w-7" />,
    title: 'Attach QR Code with Details',
    date: 'Step 4',
    description:
      'Each flask is labeled with a QR code containing product and delivery details for full traceability.',
  },
  {
    icon: <IconMoped className="h-7 w-7" />,
    title: 'Delivery Person Collection',
    date: 'Step 5',
    description:
      'Our trained delivery partners collect the batched order, ready for safe and quick transportation.',
  },
  {
    icon: <IconMapPin className="h-7 w-7" />,
    title: 'Delivery at Your Doorsteps',
    date: 'Step 6',
    description:
      'Your order is delivered hot and fresh — right to your business location, ready to serve.',
  },
];

const ProductSteps = () => {
  return (
    <section
      className="bg-cuptime-black flex flex-col items-center justify-center gap-16 bg-size-[200px] bg-top-right bg-no-repeat px-4 py-20 text-white md:bg-size-[400px] md:px-0"
      style={{
        backgroundImage: `url(${CoffeeBeans.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
      }}
    >
      <div className="flex flex-col gap-2">
        <motion.h2
          className="text-center text-3xl font-bold text-zinc-50 md:text-4xl lg:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How Cuptime Delivers Tradition to Your Workplace
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
      <div className="mx-auto w-full max-w-4xl">
        <div className="-my-6">
          {productdeliveryStepsData.map((step, index) => (
            <div
              key={index}
              className="group relative py-6 pl-8 select-none sm:pl-32"
            >
              <div className="flex items-center gap-2 rounded-3xl border-2 border-zinc-500/5 p-3 hover:bg-zinc-500/20">
                <div
                  className={`${index === 0 ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'} rounded-2xl bg-[#1E1E1E] p-2`}
                >
                  {step.icon}
                </div>

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

                  <div className="text-sm text-wrap text-zinc-400 md:text-nowrap">
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        <button className="cursor-pointer rounded-lg bg-zinc-50 px-6 py-3 text-base font-semibold text-zinc-900 transition-all">
          Start Serving Wellness
        </button>
      </div> */}
    </section>
  );
};

export default ProductSteps;
