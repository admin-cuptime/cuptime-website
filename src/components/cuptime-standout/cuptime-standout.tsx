'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import cuptimemobileorder1 from '@/assets/png/Cuptimemobileorder.png';
import cuptimemobileorder2 from '@/assets/png/Cuptimemobilescan.png';
import cuptimemobileorder3 from '@/assets/png/Cuptimemobileorder.png';
import cuptimemobileorder4 from '@/assets/png/Cuptimemobilescan.png';
import cuptimemobileorder5 from '@/assets/png/Cuptimemobileorder.png';
import cuptimemobileorder6 from '@/assets/png/Cuptimemobilescan.png';
import cuptimemobileorder7 from '@/assets/png/Cuptimemobileorder.png';
import cuptimemobileorder8 from '@/assets/png/Cuptimemobilescan.png';
import { Check } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { images } from '@/assets/png/images';
import { div } from 'framer-motion/client';

type StandoutSectionProps = {
  title: string;
  links: { text: string; href: string }[];
  onLinkClick: (index: number) => void;
  activeIndex: number;
};

const StandoutSection = ({
  title,
  links,
  onLinkClick,
  activeIndex,
}: StandoutSectionProps) => (
  
  <div dir='ltr' className="scrollbar scrollbar-thumb-cuptime-red scrollbar-track-white/50 scrollbar-h-2 relative flex w-full snap-x scroll-ml-11 flex-row items-center overflow-x-auto gap-0 lg:gap-6 py-4 text-lg text-nowrap md:text-xl lg:w-fit lg:flex-col lg:items-start lg:py-0">
    {links.map((link, index) => (
      <div key={index} className="snap-start scroll-ms-11">
        <motion.button
          className={`ml-6 mr-3 cursor-pointer text-left ${activeIndex === index ? '!text-cuptime-red font-bold' : 'font-medium'}`}
          onClick={() => onLinkClick(index)}
          whileHover={{ 
            x: 8,
            color: '#E51937',
            transition: { duration: 0.2 }
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
    { text: 'Product Selection', href: '/cup-time-mobile' },
    { text: 'Monthly Subscriptions', href: '/cup-time-mobile' },
    { text: 'My Orders & Invoice', href: '/cup-time-mobile' },
    { text: 'Track My Delivery', href: '/cup-time-mobile' },
    { text: 'Flask Management', href: '/cup-time-mobile' },
    { text: 'Event Booking', href: '/cup-time-mobile' },
    { text: 'My Cup Tracker', href: '/cup-time-mobile' },
    { text: 'Notifications', href: '/cup-time-mobile' },
  ];

  const featuresContent = [
    {
      title: 'Product Selection',
      image: images.appScreenshot.screenshot1,
      features: [
        'Browse from a wide range of filter coffee, tea, and snacks',
        'Customization options (sugar, milk, flavor)',
      ],
    },
    {
      title: 'Monthly Subscriptions',
      image: images.appScreenshot.screenshot2,
      features: [
        'Flexible subscription plans',
        'Exclusive discounts for members',
      ],
    },
    {
      title: 'My Orders & Invoice',
      image: images.appScreenshot.screenshot1,
      features: ['Track your orders easily', 'Download invoices anytime'],
    },
    {
      title: 'Track My Delivery',
      image: images.appScreenshot.screenshot4,
      features: [
        'Real-time delivery tracking',
        'Notifications for delivery updates',
      ],
    },
    {
      title: 'Flask Management',
      image: images.appScreenshot.screenshot5,
      features: ['Manage your flask inventory', 'Request flask replacements'],
    },
    {
      title: 'Event Booking',
      image: images.appScreenshot.screenshot1,
      features: ['Book events with ease', 'Customizable event packages'],
    },
    {
      title: 'My Cup Tracker',
      image: images.appScreenshot.screenshot2,
      features: ['Track your cup usage', 'Monitor sustainability impact'],
    },
    {
      title: 'Notifications',
      image: images.appScreenshot.screenshot3,
      features: ['Receive timely updates', 'Stay informed about offers'],
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
        className="w-full rounded-2xl flex flex-col gap-10 lg:gap-0"
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
            <div className="block lg:hidden from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r"></div>
            <div className="block lg:hidden from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l"></div>
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
                    <div className="flex flex-col gap-3 items-center lg:items-start">
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
