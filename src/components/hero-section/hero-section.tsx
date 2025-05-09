'use client';

import React, { useState } from 'react';
import { images } from '@/assets/png/images';
import heroleft from '@/assets/png/hero-art-left.png';
import heroright from '@/assets/png/hero-art-right.png';
import heroWave1 from '@/assets/png/hero-wave-1.png';
import { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import { BicepsFlexed } from 'lucide-react';

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

  const backgroundRepeat = isLargeScreen ? 'no-repeat, no-repeat' : 'no-repeat';

  const backgroundSize = isLargeScreen ? 'contain, w-90 h-90' : 'contain';

  return (
    <section className="bg-cuptime-light w-full h-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'center',
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 2000,
        //     stopOnInteraction: true,
        //   }),
        // ]}
        className="relative flex-1 w-full"
      >
        <CarouselContent className="relative -ml-0">
          {/* First Carousel Item */}
          <CarouselItem className='basis-full flex pl-0'>
            <div
              className="flex flex-col px-4 pt-6 md:px-10"
              style={{
                backgroundImage: backgroundImages,
                backgroundRepeat: backgroundRepeat,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
              }}
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-4 md:w-1/2 md:gap-6">
                  <div className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl">
                    Traditional Taste. Modern Workspaces.
                  </div>
                  <div className="text-base md:text-lg">
                    Surprise your team, clients, or visitors with handcrafted
                    beverages made the way they should be — no machines, no
                    shortcuts, just pure Madurai tradition in every sip.
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <button className="bg-cuptime-black rounded-lg px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 md:text-base">
                      Become a Franchise
                    </button>
                    <button className="from-cuptime-orange to-cuptime-red rounded-lg bg-gradient-to-tr px-4 py-2 text-sm font-semibold text-white md:py-3 md:text-base">
                      Start Serving Wellness
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={images.heroSection.heroSplash.src}
                    alt="hero-splash"
                    className="h-auto w-full"
                  />
                </div>
              </div>

              {/* Taglines */}
              <div className="flex flex-col items-center justify-center gap-3 pb-6 text-center italic md:flex-row lg:flex-row lg:gap-9">
                {[
                  'Boost workplace daily healthy drinks',
                  '100% natural, made fresh every Day',
                  'Signature beverages rooted in tradition',
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-between gap-1 rounded-4xl bg-white/20 px-4 py-2 text-center text-zinc-900"
                  >
                    <BicepsFlexed className="h-6 w-6" />
                    <p className="text-sm font-semibold">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </CarouselItem>

          {/* Second Carousel Item */}
          <CarouselItem
            className="bg-cover basis-full pl-0"
            style={{
              backgroundImage: `url(${heroWave1.src})`,
            }}
          >
            <div className="flex flex-col bg-cover px-4 py-4 md:px-10">
              <div className="flex h-full flex-col items-center justify-center gap-4 md:flex-row">
                <div
                  className="flex w-full flex-col gap-4 bg-contain bg-left bg-no-repeat md:w-1/2 md:gap-6"
                  style={{
                    backgroundImage: `url(${images.heroSection.leafArt.src})`,
                  }}
                >
                  <div className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    Tech in Every Step, Taste in Every Sip
                  </div>
                  <div className="text-base text-zinc-100 md:text-lg">
                    CupTime blends technology with tradition to serve you the
                    perfect cup—every time. Experience the future of workplace
                    tea and coffee, crafted with care and delivered with
                    precision.
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <button className="bg-cuptime-black rounded-lg px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 md:text-base">
                      Become a Franchise
                    </button>
                    <button className="from-cuptime-orange to-cuptime-red rounded-lg bg-gradient-to-tr px-4 py-2 text-sm font-semibold text-white md:py-3 md:text-base">
                      Start Serving Wellness
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={images.heroSection.heroSplash2.src}
                    alt="hero-splash"
                    className="h-auto w-[650px]"
                  />
                </div>
              </div>

              {/* Taglines */}
              <div className="flex flex-col items-center justify-center gap-3 pb-6 text-center italic md:flex-row lg:flex-row lg:gap-9">
                {[
                  'Boost workplace daily healthy drinks',
                  '100% natural, made fresh every Day',
                  'Signature beverages rooted in tradition',
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-between gap-1 rounded-4xl bg-black/20 px-4 py-2 text-center text-white"
                  >
                    <BicepsFlexed className="h-6 w-6" />
                    <p className="text-sm font-semibold">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </CarouselItem>

        </CarouselContent>
        <div className="absolute right-0 bottom-0 left-0 flex justify-center gap-1 pb-2">
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
      </Carousel>

      {/* Pagination Dots */}
    </section>
  );
};

export default HeroSection;
