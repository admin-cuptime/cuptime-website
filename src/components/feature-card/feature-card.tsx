'use client';

import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { IconBriefcase, IconClock2, IconCoffee, IconDeviceMobileMessage, IconHeartHandshake, IconTruck } from '@tabler/icons-react';

const FeatureCard = () => {
  const features = [
    {
      icon: IconCoffee,
      title: 'Unmatched Refreshment',
      description:
        'From authentic filter coffee to flavorful teas, every cup is brewed fresh with premium ingredients—keeping your team energized, focused, and satisfied.',
    },
    {
      icon: IconClock2,
      title: 'Ultimate Convenience',
      description:
        'Say goodbye to long tea breaks or messy DIY setups. We deliver ready-to-drink beverages right to your doorstep, hassle-free and on time.',
    },
    {
      icon: IconDeviceMobileMessage,
      title: 'Customer Mobile App Access',
      description:
        'Manage your daily subscription with ease through our mobile app. Pause, resume, or customize your orders anytime, anywhere—total control at your fingertips.',
    },
    {
      icon: IconTruck,
      title: 'Reliable Delivery System',
      description:
        'Whether it’s daily office service or event-based orders, we ensure timely delivery with zero compromise on quality or temperature.',
    },
    {
      icon: IconBriefcase,
      title: 'Office-Friendly Solutions',
      description:
        'Designed for workspaces, our beverage plans and menus fit seamlessly into your routine. Whether it’s 5 cups or 500, we’ve got you covered.',
    },
    {
      icon: IconHeartHandshake,
      title: 'Trusted by 800+ Businesses',
      description:
        'Our growing network of happy clients across Tamil Nadu is proof of our consistency, service and value.',
    },
  ];

  return (
    <div className="flex h-auto items-center justify-center overflow-hidden bg-white px-4 sm:px-8 md:px-16">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          >
            <CardContainer containerClassName="py-4">
              <CardBody className="hover:border-cuptime-red flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-transparent p-6 text-center transition-all duration-300 select-none md:items-start md:text-left">
                <CardItem translateZ="30">
                  <feature.icon className="h-auto w-9 text-cuptime-red" />
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
