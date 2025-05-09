'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import QuoteLine from '@/assets/svg/quote-line.svg';
import RatingStar from '@/assets/svg/rating-star.svg';
import { div } from 'framer-motion/client';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    rating?: number;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className="hover:border-cuptime-red relative min-h-[220px] w-[350px] max-w-full shrink-0 rounded-lg border-2 border-zinc-300 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 transition-all duration-200 md:w-[450px]"
            key={item.name}
          >
            <blockquote className="h-full">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="flex h-full items-center justify-between gap-4">
                <div className="flex h-full flex-col justify-between">
                  <span className="relative z-20 text-sm text-zinc-600 italic md:text-base">
                    {item.quote}
                  </span>
                  <div className="relative mt-6 flex flex-col gap-1">
                    {item.rating && (
                      <div className="flex flex-row items-center gap-2">
                        {[...Array(item.rating)].map((_, index) => (
                          <RatingStar key={index} className="h-auto w-5" />
                        ))}
                      </div>
                    )}
                    <div className="flex flex-row items-center">
                      <span className="flex flex-col">
                        <span className="text-sm font-bold text-zinc-800 md:text-base">
                          {item.name}
                        </span>
                        <span className="text-xs font-bold text-zinc-800 md:text-sm">
                          {item.title}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <QuoteLine className="h-auto w-8" />
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
