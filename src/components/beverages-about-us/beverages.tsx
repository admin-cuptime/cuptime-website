'use client';

import React from 'react';

import Award from '@/assets/svg/award.svg';
import Shield from '@/assets/svg/shield-tick.svg';
import People from '@/assets/svg/user-group.svg';
import Smile from '@/assets/svg/smile.svg';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { CardContainer, CardItem } from '../ui/3d-card';

const Beverages = () => {
  const beveragesData = [
    {
      icon: Award,
      title: '05',
      numericValue: 5,
      subtitle: 'Award Won',
    },
    {
      icon: Shield,
      title: '200+',
      numericValue: 200,
      subtitle: 'Trusted by companies',
    },
    {
      icon: People,
      title: '10,000+',
      numericValue: 10000,
      subtitle: 'Employees tracked',
    },
    {
      icon: Smile,
      title: '98%',
      isPercentage: true,
      subtitle: 'Client satisfaction',
    },
  ];

  return (
    <div className="w-full">
      <h2 className="pb-6 text-center text-3xl md:text-4xl font-bold text-zinc-900 md:pb-12">
        Serving More Than Beverages
      </h2>
      <div className="flex flex-col gap-4 md:flex-row justify-center items-center w-full select-none">
        {beveragesData.map((beverageitem, index) => (
          <CardContainer
            key={index}
            containerClassName='w-full md:w-[250px]'
            className="border-2 border-zinc-300 flex flex-col gap-1 rounded-lg bg-white px-4 text-center py-8 w-full md:w-[250px] "
          >
            <CardItem asChild translateZ={30} className="flex flex-shrink-0 items-center justify-center">
              <beverageitem.icon className="h-auto w-9" />
            </CardItem>
            <CardItem asChild translateZ={50}>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                {beverageitem.isPercentage ? (
                  beverageitem.title
                ) : (
                  <React.Fragment>
                    <NumberTicker
                    
                      value={beverageitem.numericValue ?? 0}
                      className="text-3xl font-bold text-gray-800"
                    />
                    {beverageitem.title.includes('+') && '+'}
                  </React.Fragment>
                )}
              </h3>
            </CardItem>
            <CardItem asChild translateZ={30}>
              <p className="text-zinc-700 text-sm font-semibold">
                {beverageitem.subtitle}
              </p>
            </CardItem>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Beverages;
