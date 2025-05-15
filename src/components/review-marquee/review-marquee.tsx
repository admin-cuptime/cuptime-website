'use client';

import React from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Pointer } from '@/components/magicui/pointer';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote:
      'Nice and good taste, fresh tea and coffee and delivery on time. Useful for my staff for ontime refreshments',
    name: 'SRINI Madurai',
    title: 'A Tale of Two Cities',
    rating: 4,
  },
  {
    quote:
      "Everyday me and my staffs boost up with cup time tea Thank you so much for your hygienic tea and perfect time delivery",
    name: 'Hari Rajaprabhu',
        title: 'Customer',
    rating: 5,
  },
  {
    quote: 'We purchase coffee and tea for our office . Prompt delivery and excellent taste every day . Highly recommended for your daily dose of coffee/tea.',
    name: 'Swathik Prasanna',
    title: 'Customer',
    rating: 4,
  },
  {
    quote:
      'Sweetly savoury, rich and deep. Dark in aroma and cup.very syrupy mouthfeel. Notes of coffee blended with undertones of taste, resonate in the finish.',
    name: 'Dinesh kumar',
    title: 'Customer',
    rating: 5,
  },
  {
    quote:
      'Best Masala Tea and Filter Coffee Servicing Company and Easily Ordered with this App',
    name: 'Dawood Farhan',
    title: 'Customer',
    rating: 4,
  },
  {
    quote:
      'Tastes are Good, especially with Masala Tea',
    name: 'Harikaran K',
    title: 'Customer',
    rating: 5,
  },
];

const ReviewMarquee = () => {
  return (
    <section className="relative bg-zinc-100 py-18 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] rounded-full blur-2xl opacity-10 bg-radial from-blue-500 to-cuptime-red"></div>
      </div>
      
      <Pointer>
        <div>
          <motion.div
            animate={{
              scale: [0.8, 1, 0.8],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-cuptime-red"
            >
              <motion.path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </svg>
          </motion.div>
        </div>
      </Pointer>
      <div className="flex flex-col items-center justify-center gap-2 px-4 md:flex-row md:px-24">
        <div className="text-3xl md:text-4xl font-bold text-zinc-800">
          Loved by Thousands Across Industries
        </div>
        <div>
          We proudly collaborate with visionary investors and reputed companies
          who believe in bringing traditional flavors to modern workplaces.
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md pt-10 antialiased">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
        />
      </div>
    </section>
  );
};

export default ReviewMarquee;
