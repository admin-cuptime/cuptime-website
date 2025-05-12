'use client';

import React from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Pointer } from '@/components/magicui/pointer';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    rating: 4,
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
        title: 'Hamlet',
    rating: 5,
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
    rating: 3,
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
    rating: 4,
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
    rating: 4,
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
