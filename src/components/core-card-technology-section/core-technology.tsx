'use client';

import React from 'react';
import ReactNative from '@/assets/svg/React.svg';
import Firebase from '@/assets/svg/Firebase.svg';
import AWS from '@/assets/svg/AWS.svg';
import Googlemap from '@/assets/svg/GoogleMap.svg';
import AI from '@/assets/svg/AI.svg';
import { motion } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const CoreTechnologyPage = () => {
  const coretech = [
    {
      icon: ReactNative,
      title: 'React Native',
      description:
        'Enables seamless cross-platform mobile development, ensuring Cup Time runs smoothly on both Android and iOS devices.',
    },
    {
      icon: Firebase,
      title: 'Firebase',
      description:
        'Powers push notifications, real-time database updates (like live order tracking), and user authentication.',
    },
    {
      icon: AWS,
      title: 'AWS (Amazon Web Services)',
      description:
        'Provides cloud infrastructure, ensuring the app is fast, scalable, and secure even during high demand. during to ',
    },
    {
      icon: Googlemap,
      title: 'Google Maps API',
      description:
        'Enables real-time location tracking of your coffee delivery, giving users transparency and control.',
    },
    {
      icon: AI,
      title: 'AI & Machine Learning',
      description:
        'Helps optimize delivery times, predict popular orders, and manage flask sustainability intelligently.',
    },
  ];
  return (
    <section className="h-full w-full">
      <div className="flex shrink-0 flex-col bg-cover bg-no-repeat p-4 md:p-12">
        <div className="relative items-center text-center">
          <div className="flex basis-full justify-center pl-0">
            <div className="flex flex-col items-start justify-start px-4 md:px-10">
              <div className="flex h-full flex-col gap-4">
                <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      damping: 12,
                      stiffness: 100,
                    }}
                    className="text-2xl font-bold text-zinc-900 md:text-3xl lg:text-4xl"
                  >
                    Built with the Best: Our Core Technologies
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      damping: 12,
                      stiffness: 100,
                      delay: 0.2,
                    }}
                    className="text-base md:px-42 md:text-lg"
                  >
                    From hassle-free scheduling to personalized flavors and
                    sustainable delivery, Cup Time is built to enhance your
                    beverage experience. Discover the features that make every
                    sip smarter, smoother, and more satisfying.
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto grid gap-6 md:py-18 py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {coretech.map((coretechnology, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay: index * 0.1,
              }}
              className="flex-1"
            >
              <CardContainer key={index}>
                <CardBody className="hover:border-cuptime-red md:flex-cols-3 flex h-auto w-full flex-col items-center justify-start gap-4 rounded-lg border-2 border-transparent p-6 text-center transition-all duration-300 select-none md:gap-8 lg:h-[350px] lg:items-start lg:text-left">
                  <CardItem translateZ="30">
                    <coretechnology.icon className="h-auto w-9" />
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-2xl font-bold text-zinc-900"
                  >
                    {coretechnology.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="30"
                    className="text-sm lg:text-base"
                  >
                    {coretechnology.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologyPage;
