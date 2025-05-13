'use client';

import React from 'react';
import { CardContainer, CardItem } from '../ui/3d-card';

const ContactBusinessCard = () => {
  const businessData = [
    {
      title: 'Franchise Partnership',
      description: 'We’ll help you build your own success story.',
      subtitle: 'Start a Franchise',
    },
    {
      title: ' Bulk Orders / B2B',
      description: 'Serve your team hot beverages every day.',
      subtitle: 'Order Now',
    },
    {
      title: 'Support / Feedback',
      description: 'Facing a delivery issue or want to suggest something?',
      subtitle: 'Write to Support',
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="flex w-full flex-col justify-between gap-4 select-none md:flex-row h-full">
        {businessData.map((businessitem, index) => (
          <CardContainer
            key={index}
            containerClassName='h-full w-full '
            className="border-cuptime-border hover:border-cuptime-red flex h-full w-full flex-1 flex-col justify-between items-start space-y-4 rounded-xl border p-6"
          >
            <CardItem translateZ={50} className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-black">
                {businessitem.title}
              </h3>
              <p className="text-sm text-zinc-700">
                {businessitem.description}
              </p>
            </CardItem>

            <div className="text-cuptime-red text-sm cursor-pointer hover:underline">
              {businessitem.subtitle}
            </div>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default ContactBusinessCard;
