import React from 'react';

import Award from '@/assets/svg/award.svg';
import Shield from '@/assets/svg/shield-tick.svg';
import People from '@/assets/svg/user-group.svg';
import Smile from '@/assets/svg/smile.svg';

const Beverages = () => {
  const beveragesData = [
    {
      icon: Award,
      title: '05',
      subtitle: 'Award Won',
    },
    {
      icon: Shield,
      title: '200+',
      subtitle: 'Trusted by companies',
    },
    {
      icon: People,
      title: '10,000+',
      subtitle: 'Employees tracked',
    },
    {
      icon: Smile,
      title: '98%',
      subtitle: 'Client satisfaction',
    },
  ];

  return (
    <div className="mx-auto px-4 md:px-32">
      <h2 className="text-center text-3xl font-bold text-zinc-900  md:pb-12 pb-6">
        Serving More Than Beverages
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {beveragesData.map((beverageitem, index) => (
          <div
            key={index}
            className="rounded-lg border-cuptime-black bg-white p-4 text-center md:py-10 py-4 shadow-sm"
          >
            <div className="mb-3 flex-shrink-0 flex justify-center items-center">
              <beverageitem.icon className="h-auto w-7" />
            </div>
            {/* <div className="text-4xl mb-3">{item.icon}</div> */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">{beverageitem.title}</h3>
              <p className="text-zinc-700">{beverageitem.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beverages;
