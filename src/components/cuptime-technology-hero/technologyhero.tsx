'use client';

import React from 'react';
import TechnologuHero from '@/assets/png/technologyhand.png';

const TechnologyHero = () => {
  return (
    <section className="bg-cuptime-pistha h-[calc(90vh-4rem)] w-full">
      <div
        className="relative flex h-full w-full flex-col items-center justify-center px-4 md:px-42">
        <div className="flex h-full flex-col items-center justify-center gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-6 md:gap-16 text-center md:text-left">
            <div className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-6xl">
              Brewing Innovation with <br /> Every Cup
            </div>
            <div className="text-base md:text-xl">
              At Cuptime, we believe great coffee isn’t just about the brew — it’s 
              about the experience. We’ve built a smart, seamless technology 
              ecosystem that makes your daily beverage routine faster, smoother, 
              and more rewarding — all through your phone.
            </div>
          </div>
          <div className="w-1/2">
            <div className="image-section flex items-center justify-between">
              <img
                src={TechnologuHero.src}
                alt="Delivery Team"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;
