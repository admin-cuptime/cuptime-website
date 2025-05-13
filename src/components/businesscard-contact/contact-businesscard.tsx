'use client';

import React from 'react';
// import { NumberTicker } from '@/components/magicui/number-ticker';
// import { CardContainer, CardItem } from '../ui/3d-card';

const ContactBusinessCard = () => {
  const businessData = [
    {
      title: 'Franchise Partnership',
      description:"We’ll help you build your own success story.",
      subtitle: 'Start a Franchise',
    },
    {
      title: ' Bulk Orders / B2B',
      description:"Serve your team hot beverages every day.",
      subtitle: "Order Now",
    },
    {
      title: 'Support / Feedback',
      description: "Facing a delivery issue or want to suggest something?",
      subtitle: 'Write to Support',
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 md:flex-row justify-center items-center w-full select-none">
        {businessData.map((businessitem, index) => (
          <section key={index}>
            <div
              className=" space-y-6 rounded-xl md:w-80 w-60 md:h-50 h-auto border border-cuptime-border p-6"
            //   translateZ={20}
            >
              <h3 className="text-xl font-bold text-black">{businessitem.title}</h3>
              <p className="text-zinc-700 text-sm ">{businessitem.description}</p>
              <p className="text-cuptime-red text-sm">
                {businessitem.subtitle}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ContactBusinessCard;
