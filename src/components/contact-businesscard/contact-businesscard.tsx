'use client';

import Link from 'next/link';
import React from 'react';
import { CardContainer, CardItem } from '../ui/3d-card';

const ContactBusinessCard = () => {
  const businessData = [
    {
      title: 'Franchise Partnership',
      description: 'We’ll help you build your own success story.',
      subtitle: 'Start a Franchise',
      link: '/franchise',
    },
    {
      title: ' Bulk Orders / B2B',
      description: 'Serve your team hot beverages every day.',
      subtitle: 'Order Now',
      link: 'https://play.google.com/store/apps/details?id=com.cuptime.customer',
    },
    {
      title: 'Support / Feedback',
      description: 'Facing a delivery issue or want to suggest something?',
      subtitle: 'Write to Support',
      link: '/contact-us',
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col justify-between gap-4 select-none md:flex-row">
        {businessData.map((businessitem, index) => (
          <CardContainer
            key={index}
            containerClassName="h-full w-full "
            className="border-cuptime-border hover:border-cuptime-red flex h-full w-full flex-1 flex-col items-start justify-between space-y-4 rounded-xl border p-6"
          >
            <CardItem translateZ={50} className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-black">
                {businessitem.title}
              </h3>
              <p className="text-sm text-zinc-700">
                {businessitem.description}
              </p>
            </CardItem>

            {businessitem.link ? (
              <Link href={businessitem.link}>
                <span className="text-cuptime-red cursor-pointer text-sm hover:underline">
                  {businessitem.subtitle}
                </span>
              </Link>
            ) : (
              <span className="text-cuptime-red cursor-pointer text-sm">
                {businessitem.subtitle}
              </span>
            )}
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default ContactBusinessCard;
