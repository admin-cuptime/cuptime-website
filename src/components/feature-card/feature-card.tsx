'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/assets/png/images';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import CupRed from '@/assets/svg/cup-red.svg';
import LeafRed from '@/assets/svg/leaf-red.svg';
import OfficeRed from '@/assets/svg/office-red.svg';

const FeatureCard = () => {
  const features = [
    {
      icon: CupRed,
      title: 'Handcrafted Recipes',
      description:
        'Authentic flavors prepared the traditional way — no machines, no shortcuts.',
    },
    {
      icon: LeafRed,
      title: 'Natural, Pure Ingredients',
      description:
        'Only fresh, regional ingredients. No artificial additives or preservatives.',
    },
    {
      icon: OfficeRed,
      title: 'Made for Modern Workspaces',
      description:
        'Bringing homemade-style drinks directly to corporate spaces, schools, hospitals, and events.',
    },
  ];
  return (
    <div className="flex h-auto items-center justify-center overflow-hidden bg-white sm:px-8 md:px-16">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row">
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
            <CardContainer containerClassName="py-4" key={index}>
              <CardBody className="hover:border-cuptime-red flex h-fit w-fit flex-col items-center justify-center gap-4 rounded-lg border-2 border-transparent p-6 text-center transition-all duration-300 select-none md:items-start md:text-left">
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
  );
};
export default FeatureCard;
