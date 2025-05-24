'use client';

import React from 'react';
import { images } from '@/assets/png/images';
import Ranking from '@/assets/svg/ranking.svg';
import Favourite from '@/assets/svg/favourite.svg';
import Cash from '@/assets/svg/cash.svg';
import Muscle from '@/assets/svg/muscle.svg';
import { motion } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const CareersHero = () => {
  const features = [
    {
      icon: Ranking,
      title: 'Opportunities for Growth:',
      description:
        'From interns to full-time roles, Cuptime nurtures talent. With learning paths, mentorship, and leadership visibility, you’ll have the tools to grow.',
    },
    {
      icon: Cash,
      title: 'Modern Work Benefits',
      description:
        'Enjoy a flexible work environment, team outings, health benefits, and product discounts.',
    },
    {
      icon: Favourite,
      title: 'Work with Heart',
      description:
        'Whether you’re brewing coffee, coding the app, or managing franchise support—you’re part of a tight-knit, purpose-driven team.',
    },
    {
      icon: Muscle,
      title: 'Culture of Purpose',
      description:
        'We’re passionate about great taste, community roots, and meaningful work. Your contribution matters from Day 1.',
    },
  ];
  return (
    <section className="bg-cuptime-pistha h-full w-full">
      <div
        className="flex shrink-0 flex-col gap-4 bg-cover bg-no-repeat p-4 md:p-12"
        style={{
          backgroundImage: `url(${images.backgroundArtwork.printerArtwork.src})`,
        }}
      >
        <div className="relative items-center py-16 text-center">
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
                    className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl"
                  >
                    Brew Your Future With Cuptime
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
                    Join a team that’s redefining refreshment with tradition,
                    technology, and timely delivery. Whether you're into
                    operations, logistics, tech, or flavor—your journey starts
                    here.
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col gap-4 lg:flex-row">
          {features.map((feature, index) => (
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
                <CardBody className="hover:border-cuptime-red flex h-[250px] w-fit flex-col items-center justify-baseline gap-4 rounded-lg border-2 border-transparent p-6 text-center transition-all duration-300 select-none lg:items-start lg:text-left">
                  <CardItem translateZ="30">
                    <feature.icon className="h-auto w-9" />
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-2xl font-bold text-zinc-900"
                  >
                    {feature.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="30"
                    className="text-sm lg:text-base"
                  >
                    {feature.description}
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

export default CareersHero;
