'use client';

import React, { useState } from 'react';
import { images } from '@/assets/png/images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Create an array of hero content to display in the carousel
  const heroContents = [
    {
      title: 'Traditional Taste. Modern Workspaces.',
      description:
        'Surprise your team, clients, or visitors with handcrafted beverages made the way they should be — no machines, no shortcuts, just pure Madurai tradition in every sip.',
      image: images.heroSection.heroSplash.src,
    },
    {
      title: 'Quality in Every Cup.',
      description:
        'Experience the authentic flavors of premium beverages crafted with care and traditional methods that make every sip special.',
      image: images.heroSection.heroSplash.src,
    },
    {
      title: 'Elevate Your Workspace Experience.',
      description:
        'Bring the rich heritage of authentic beverages to your modern environment with our traditional brewing methods and premium ingredients.',
      image: images.heroSection.heroSplash.src,
    },
  ];

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section className="bg-cuptime-light flex h-[calc(100vh-80px)] flex-col items-center justify-center px-16 pt-12">
      <Carousel setApi={setApi} className="flex-1">
        <CarouselContent>
          {heroContents.map((content, index) => (
            <CarouselItem key={index}>
              <div className="flex h-full flex-col items-center justify-center gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-6 md:w-1/2">
                  <div className="text-5xl font-bold text-zinc-900">
                    {content.title}
                  </div>
                  <div className="text-lg">{content.description}</div>

                  <div className="flex gap-2">
                    <button className="bg-cuptime-black rounded-lg px-6 py-3 font-semibold text-white">
                      Become a Franchise
                    </button>
                    <button className="from-cuptime-orange to-cuptime-red rounded-lg bg-gradient-to-tr px-4 py-3 font-semibold text-white">
                      Start Serving Wellness
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={content.image}
                    alt="hero-splash"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-1 py-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-2 w-2 rounded-full transition-colors duration-300',
              current === index
                ? 'bg-cuptime-black'
                : 'bg-gray-300 hover:bg-gray-400'
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
