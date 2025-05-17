'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { images } from '@/assets/png/images';
import heroleft from '@/assets/png/hero-art-left.png';
import heroright from '@/assets/png/hero-art-right.png';
import heroWave1 from '@/assets/png/hero-wave-1.png';
import heroWave2 from '@/assets/png/hero-wave-2.png';
import { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import {
  BicepsFlexed,
  Coffee,
  Leaf,
  Sparkles,
  MonitorSmartphone,
  MapPinned,
  Rocket,
  PackageCheck,
} from 'lucide-react';

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
      setIsLargeScreen(window.innerWidth >= 1024);
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

  const firstSlideTaglines = [
    {
      icon: <BicepsFlexed className="h-6 w-6" />,
      text: 'Boost workplace daily healthy drinks',
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      text: '100% natural, made fresh every Day',
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      text: 'Signature beverages rooted in tradition',
    },
  ];

  const secondSlideTaglines = [
    {
      icon: <MonitorSmartphone className="h-6 w-6" />,
      text: 'Sustainable Tech',
    },
    {
      icon: <MapPinned className="h-6 w-6" />,
      text: 'Real-Time Delivery Tracking',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      text: 'Customizable Preferences',
    },
  ];

  const thirdSlideTaglines = [
    { icon: <MapPinned className="h-6 w-6" />, text: 'Smart order tracking' },
    {
      icon: <PackageCheck className="h-6 w-6" />,
      text: 'Real-time delivery updates',
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      text: 'Freshly brewed, locally sourced',
    },
  ];

  return (
    <section className="bg-cuptime-light h-full w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'center',
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        className="relative w-full flex-1"
      >
        <CarouselContent className="relative -ml-0 h-full md:h-[calc(100vh-4rem)]">
          {/* First Carousel Item */}
          <CarouselItem className="flex basis-full pl-0">
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
                <div className="flex w-full flex-col gap-4 md:w-1/2 md:gap-6 text-center md:text-left">
                  <div className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl">
                    Traditional Taste. Modern Workspaces.
                  </div>
                  <div className="text-sm md:text-lg">
                    Surprise your team, clients, or visitors with handcrafted
                    beverages made the way they should be — no machines, no
                    shortcuts, just pure Madurai tradition in every sip.
                  </div>

                  <div className="flex flex-col items-center gap-2 sm:flex-row">
                    <button className="bg-cuptime-black w-50 rounded-lg px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 md:text-base">
                      <Link href="/franchise">Become a Franchise</Link>
                    </button>
                    <button className="from-cuptime-orange to-cuptime-red w-50 rounded-lg bg-gradient-to-tr px-4 py-2 text-sm font-semibold text-white md:py-3 md:text-base">
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

              {/* Taglines for first slide */}
              <div className="flex flex-col items-center justify-center gap-3 pb-6 text-center italic md:flex-row lg:flex-row lg:gap-9">
                {firstSlideTaglines.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-between gap-1 rounded-4xl bg-white/20 px-4 py-2 text-center text-zinc-900 hover:scale-105 transition-all duration-300 select-none"
                  >
                    {item.icon}
                    <p className="text-sm font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </CarouselItem>

          {/* Second Carousel Item */}
          <CarouselItem
            className="basis-full bg-cover pl-0"
            style={{
              backgroundImage: `url(${heroWave1.src})`,
            }}
          >
            <div className="flex h-full flex-col justify-between bg-cover px-4 py-4 md:px-10">
              <div className="flex h-full flex-col items-center justify-center gap-4 md:flex-row">
                <div
                  className="flex w-full flex-col gap-4 bg-contain bg-left bg-no-repeat md:w-1/2 md:gap-6 text-center md:text-left"
                  style={{
                    backgroundImage: `url(${images.heroSection.leafArt.src})`,
                  }}
                >
                  <div className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    Tech in Every Step, Taste in Every Sip
                  </div>
                  <div className="text-sm text-zinc-100 md:text-lg">
                    CupTime blends technology with tradition to serve you the
                    perfect cup—every time. Experience the future of workplace
                    tea and coffee, crafted with care and delivered with
                    precision.
                  </div>

                  <div className="flex flex-col items-center gap-2 sm:flex-row">
                    <button className="bg-cuptime-black rounded-lg px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 md:text-base">
                      Experience our Innovation
                    </button>
                    <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 md:px-6 md:py-3 md:text-base">
                      <Link href="/cup-time-mobile">See How It Works</Link>
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

              {/* Taglines for second slide */}
              <div className="flex flex-col items-center justify-center gap-3 pb-6 text-center italic md:flex-row lg:flex-row lg:gap-9">
                {secondSlideTaglines.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-between gap-1 rounded-4xl bg-black/20 px-4 py-2 text-center text-white hover:scale-105 transition-all duration-300 select-none"
                  >
                    {item.icon}
                    <p className="text-sm font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </CarouselItem>

          {/* Third Carousel Item */}
          <CarouselItem className="basis-full bg-cover pl-0">
            <div className="relative h-full w-full">
              <div className="h-[90%]">
                <video
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                  aria-label="Background video showing tea cup"
                >
                  <source src="/teacup.webm" type="video/webm" />
                  <track
                    kind="captions"
                    srcLang="en"
                    label="English captions"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroWave2.src})`,
                }}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute top-1/6 left-1/2 md:top-1/3 md:left-1/3 h-[80%] md:h-[500px] w-[80%] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-white to-white/70 blur-2xl"></div>
                </div>
                <div className="relative w-full p-5 lg:p-16 md:w-1/2 text-center md:text-left">
                  <div
                    className="flex flex-col gap-4 bg-cover bg-left bg-no-repeat"
                    
                  >
                    <div className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl" >
                      Brewed Fresh. Delivered Fast. Powered by Tech.
                    </div>
                    <div className="text-sm md:text-lg">
                      At Cuptime, we blend tradition with innovation. Our smart
                      delivery system ensures your favorite brew reaches you at
                      peak freshness — every time, right on schedule. Whether
                      it's a busy office morning or a relaxed afternoon break,
                      we bring café-quality coffee and tea straight to your door
                      with just a tap.
                    </div>

                    <div className="flex flex-col items-center gap-2 sm:flex-row">
                      <button className="bg-cuptime-black rounded-lg px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 md:text-base">
                        <Link href="/https://play.google.com/store/apps/details?id=com.cuptime.customer">Place your Order Now</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Taglines for third slide */}
              <div className="absolute right-0 bottom-0 left-0 flex flex-col items-center justify-center gap-3 pb-8 text-center italic md:flex-row lg:flex-row lg:gap-9">
                {thirdSlideTaglines.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-between gap-1 rounded-4xl bg-black/20 px-4 py-2 text-center text-white hover:scale-105 transition-all duration-300 select-none"
                  >
                    {item.icon}
                    <p className="text-sm font-semibold">{item.text}</p>
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
