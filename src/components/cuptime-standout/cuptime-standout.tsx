'use client';

import React from 'react';
import Image from 'next/image';
import cuptimemobileorder from '@/assets/png/Cuptimemobileorder.png';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type StandoutSectionProps = {
  title: string;
  links: { text: string; href: string }[];
};

const StandoutSection = ({ title, links }: StandoutSectionProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex flex-col gap-1 space-y-5 text-lg font-bold md:text-xl">
      {links.map((link, index) => (
        <Link className="hover:text-cuptime-red" key={index} href={link.href}>
          {link.text}
        </Link>
      ))}
    </div>
  </div>
);

const CuptimeStandout = () => {
  const aboutLinks = [
    { text: 'Product Selection', href: '/cup-time-mobile' },
    { text: 'Monthlly Subscriptions', href: '/cup-time-mobile' },
    { text: 'My Orders & Invoice', href: '/cup-time-mobile' },
    { text: 'Track My Delivery', href: '/cup-time-mobile' },
    { text: 'Flask Management', href: '/cup-time-mobile' },
    { text: 'Event Booking', href: '/cup-time-mobile' },
    { text: 'My Cup Tracker', href: '/cup-time-mobile' },
    { text: 'Notifications', href: '/cup-time-mobile' },
  ];
  const standoutfeatures = [
    {
      description: 'Browse from a wide range of filter coffee, tea, and snacks',
    },
    {
      description: 'Customization options (sugar, milk, flavor)',
    },
  ];

  return (
    <section className="flex items-center justify-center overflow-hidden px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full items-center justify-center rounded-2xl"
      >
        <div className="flex flex-col gap-6">
          <motion.h2
            className="text-center text-3xl font-bold text-zinc-900 md:text-4xl lg:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Makes CupTime Stand Out
          </motion.h2>
          <motion.p
            className="flex flex-col items-center justify-between px-0 text-center text-base text-zinc-700 md:px-28 md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From hassle-free scheduling to personalized flavors and sustainable
            delivery, CupTime is built to <br />
            enhance your beverage experience. Discover the features that make
            every sip smarter, smoother, <br />
            and more satisfying.
          </motion.p>
        </div>
        <div className="flex flex-col gap-4 md:p-12 lg:flex-row">
          {/*section-1*/}
          <div className="flex flex-col items-center justify-center gap-6 md:w-1/3">
            <StandoutSection title="About Cuptime" links={aboutLinks} />
          </div>
          {/* Section-2 */}
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
            className="flex flex-col items-center justify-center p-5 md:w-1/3"
          >
            <Image
              src={cuptimemobileorder}
              alt="Cup Time Mobile App"
              //   className="h-full w-auto rounded-lg md:h-[578px] md:w-[310px]"
              className="h-auto w-[200px] rounded-lg object-contain sm:w-[250px] md:h-[578px] md:w-[310px]"
            />
          </motion.div>
          {/* Section-3 */}
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
            className="flex flex-col items-center justify-center gap-6 px-4 lg:w-1/2"
          >
            <div className=" space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl lg:text-4xl">
                Product Selection
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {standoutfeatures.map((standout, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-2">
                      <Check
                        className="text-cuptime-red justify-center"
                        strokeWidth={4}
                      />
                      <p className="text-sm font-semibold text-zinc-700 md:text-lg">
                        {standout.description}
                      </p>
                    </div>
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

export default CuptimeStandout;
