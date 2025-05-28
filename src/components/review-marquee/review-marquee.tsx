'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Pointer } from '@/components/magicui/pointer';
import { motion } from 'motion/react';
import { fetchReviewsData } from '@/app/api/reviews';

const ReviewMarquee = () => {
  const [reviews, setReviews] = useState<
    { quote: string; name: string; title: string; rating?: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      const data = await fetchReviewsData();
      if (Array.isArray(data)) setReviews(data);
      setLoading(false);
    };
    getReviews();
  }, []);

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
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md pt-10 antialiased min-h-[260px] w-full">
        {loading ? (
          <div className="scroller relative max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <ul className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 animate-scroll">
              {[...Array(4)].map((_, i) => (
                <li
                  key={i}
                  className="min-h-[220px] w-[350px] max-w-full md:w-[450px] rounded-lg border-2 border-zinc-200 bg-white animate-pulse flex flex-col justify-between px-8 py-6 cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="h-5 w-3/4 bg-zinc-100 rounded mb-4"></div>
                  <div className="h-4 w-2/3 bg-zinc-100 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-zinc-100 rounded mb-2"></div>
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="h-4 w-16 bg-zinc-100 rounded"></div>
                    <div className="h-4 w-10 bg-zinc-100 rounded"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <InfiniteMovingCards
            items={reviews}
            direction="left"
            speed="normal"
          />
        )}
      </div>
    </section>
  );
};

export default ReviewMarquee;
