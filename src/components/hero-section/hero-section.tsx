'use client';

import React, { useState } from 'react';
import { images } from '@/assets/png/images';
import heroleft from '@/assets/png/hero-art-left.png';
import heroright from '@/assets/png/hero-art-right.png';
import { useEffect } from 'react';
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
      heroFrame: 'Boost workplace daily healthy drinks',
      icon: images.heroframe.heromuscle.src,
    },
    {
      title: 'Quality in Every Cup.',
      description:
        'Experience the authentic flavors of premium beverages crafted with care and traditional methods that make every sip special.',
      image: images.heroSection.heroSplash.src,
      heroFrame: '100% natural, made fresh every Day',
      icon: images.heroframe.heromuscle.src,
    },
    {
      title: 'Elevate Your Workspace Experience.',
      description:
        'Bring the rich heritage of authentic beverages to your modern environment with our traditional brewing methods and premium ingredients.',
      image: images.heroSection.heroSplash.src,
      heroFrame: 'Signature beverages rooted in tradition',
      icon: images.heroframe.heromuscle.src,
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
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint in Tailwind
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const backgroundImages = isLargeScreen
    ? `url(${heroleft.src}), url(${heroright.src})`
    : `url(${heroleft.src})`;

  const backgroundPosition = isLargeScreen
    ? 'left top, right bottom'
    : 'left top';

  const backgroundRepeat = isLargeScreen
    ? 'no-repeat, no-repeat'
    : 'no-repeat';

    const backgroundSize = isLargeScreen
    ? 'contain, w-90 h-90'
    : 'contain';

  return (
    <section className="bg-cuptime-light flex min-h-[calc(105vh-80px)] flex-col items-center justify-center px-4 sm:px-8 md:px-16 pt-12 overflow-hidden"
    style={{
      backgroundImage: backgroundImages,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
    }}>
      <Carousel setApi={setApi} className="flex-1 w-full">
        <CarouselContent>
          {heroContents.map((content, index) => (
            <CarouselItem key={index}>
              <div className="flex h-full flex-col items-center justify-center gap-4 md:flex-row"
              >
                <div className="flex w-full flex-col gap-4 md:gap-6 md:w-1/2">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900">
                    {content.title}
                  </div>
                  <div className="text-base md:text-lg">{content.description}</div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="bg-cuptime-black rounded-lg px-4 md:px-6 py-2 md:py-3 font-semibold text-white text-sm md:text-base">
                      Become a Franchise
                    </button>
                    <button className="from-cuptime-orange to-cuptime-red rounded-lg bg-gradient-to-tr px-4 py-2 md:py-3 font-semibold text-white text-sm md:text-base">
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

        {/* Hero Frame */}
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center text-center lg:gap-9 gap-3 mt-5 italic">
          {heroContents.map((content, index) => (
            <div
              key={index}
              className="flex flex-row justify-between text-center items-center lg:h-13 bg-white rounded-4xl gap-4 p-4"
            >
              <img
                src={content.icon}
                alt={`icon-${index}`}
                className="h-6 w-6 mb-1 mt-1"
              />
              <p className="font-semibold text-sm">{content.heroFrame}</p>
            </div>
          ))}
        </div>
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
