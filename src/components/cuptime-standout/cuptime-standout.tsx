'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import cuptimemobileorder1 from '@/assets/png/Cuptimemobileorder.png';
import { Check } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { images } from '@/assets/png/images';

type StandoutSectionProps = {
  title: string;
  links: { text: string }[];
  onLinkClick: (index: number) => void;
  activeIndex: number;
};

const StandoutSection = ({
  title,
  links,
  onLinkClick,
  activeIndex,
}: StandoutSectionProps) => (
  <div
    dir="ltr"
    className="scrollbar scrollbar-thumb-cuptime-red scrollbar-track-white/50 scrollbar-h-2 relative flex w-full snap-x scroll-ml-11 flex-row items-center gap-0 overflow-x-auto py-4 text-lg text-nowrap md:text-xl lg:w-fit lg:flex-col lg:items-start lg:gap-6 lg:py-0"
  >
    {links.map((link, index) => (
      <div key={index} className="snap-start scroll-ms-11">
        <motion.button
          className={`mr-3 ml-6 cursor-pointer text-left ${activeIndex === index ? '!text-cuptime-red font-bold' : 'font-medium'}`}
          onClick={() => onLinkClick(index)}
          whileHover={{
            x: 8,
            color: '#E51937',
            transition: { duration: 0.2 },
          }}
        >
          {link.text}
        </motion.button>
      </div>
    ))}
  </div>
);

const CuptimeStandout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const aboutLinks = [
    { text: 'Product Selection' },
    { text: 'Monthly Subscriptions' },
    { text: 'My Orders & Invoice' },
    { text: 'Track My Delivery' },
    { text: 'Flask Management' },
    { text: 'Event Booking' },
    { text: 'Refer & Earn' },
  ];

  const featuresContent = [
    {
      title: 'Product Selection',
      image: images.appScreenshot.screenProducts,
      features: [
        'Browse from a wide range of filter coffee, tea, and snacks',
        'Customization options',
      ],
    },
    {
      title: 'Monthly Subscriptions',
      image: images.appScreenshot.screenSubscription,
      features: [
        'Flexible subscription plans',
        'Customizable subscription options',
      ],
    },
    {
      title: 'My Orders & Invoice',
      image: images.appScreenshot.screenInvoices,
      features: ['Track your orders easily', 'Download invoices anytime'],
    },
    {
      title: 'Track My Delivery',
      image: images.appScreenshot.screenTrack,
      features: [
        'Real-time delivery tracking',
        'Notifications for delivery updates',
      ],
    },
    {
      title: 'Flask Management',
      image: images.appScreenshot.screenFlasks,
      features: ['Track and manage your flask returns', 'Monitor your flask inventory and history'],
    },
    {
      title: 'Event Booking',
      image: images.appScreenshot.screenEvents,
      features: ['Book events with ease', 'Manage and Track your events'],
    },
    {
      title: 'Refer & Earn',
      image: images.appScreenshot.screenRefer,
      features: [
        'Earn rewards for every referral',
        'Share with friends and earn',
      ],
    },
  ];

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden px-4 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col gap-10 rounded-2xl lg:gap-0"
      >
        <div className="flex flex-col gap-4">
          <motion.h2
            className="text-center text-3xl font-bold text-zinc-900 lg:text-4xl"
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
            delivery, CupTime is built to enhance your beverage experience.
            Discover the features that make every sip smarter, smoother, and
            more satisfying.
          </motion.p>
        </div>
        <div className="flex flex-col gap-6 p-1 lg:flex-row lg:gap-0 lg:p-14">
          {/*section-1*/}
          <div className="relative flex flex-col items-center justify-center gap-6 px-0 lg:px-20">
            <StandoutSection
              title="About Cuptime"
              links={aboutLinks}
              onLinkClick={handleLinkClick}
              activeIndex={activeIndex}
            />
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 block w-1/6 bg-gradient-to-r lg:hidden"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 block w-1/6 bg-gradient-to-l lg:hidden"></div>
          </div>
          {/* Section-2 */}
          <div className="flex h-full w-full items-center border-l-0 border-zinc-300 px-1 lg:border-l-2 lg:px-20">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  type: 'spring',
                  damping: 12,
                  stiffness: 100,
                }}
                className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row"
              >
                <img
                  src={
                    featuresContent[activeIndex]?.image.src ||
                    cuptimemobileorder1.src
                  }
                  alt="Cup Time Mobile App"
                  className="h-auto w-[300px] rounded-lg object-contain drop-shadow-2xl sm:w-[250px] md:h-[578px] md:w-[310px]"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    damping: 12,
                    stiffness: 100,
                    delay: 0.4,
                  }}
                  className="flex w-full flex-col"
                >
                  <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl lg:text-4xl">
                      {featuresContent[activeIndex]?.title ||
                        'Product Selection'}
                    </h2>
                    <div className="flex flex-col items-center gap-3 lg:items-start">
                      {featuresContent[activeIndex]?.features.map(
                        (feature, index) => (
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
                                {feature}
                              </p>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CuptimeStandout;
