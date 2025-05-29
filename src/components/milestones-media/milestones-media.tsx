'use client';

import Image from 'next/image';
import React, { useState,useEffect } from 'react';
import cmAward from '@/assets/png/milestone-4.png';
import { motion } from 'motion/react';
import vikatan from '@/assets/png/milestone-3.png';
import mou from '@/assets/png/milestone-1.png';
import yourStory from '@/assets/png/milestone-2.png';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);
  return matches;
};

const MilestonesMedia = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const isMobile = useMediaQuery('(max-width: 640px)');

  React.useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  const milestones = [
    {
      image: cmAward,
      title:
        'Awarded from Hon’ble Chief Minister of Tamilnadu Thiru M. K. Stalin',
    },
    {
      image: vikatan,
      title: 'Featured in VIKATAN',
    },
    {
      image: mou,
      title:
        'Signed a MOU with Tamilnadu Startup and Innovation Mission for Supporting Women Entrepreneurs',
    },
    {
      image: yourStory,
      title: 'Featured in Your Story',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-white px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="flex flex-col gap-4">
          <motion.h2 
            className="text-center text-3xl font-bold text-zinc-900 md:text-4xl lg:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Milestones & Media Recognition
          </motion.h2>
          <motion.p 
            className="flex flex-col items-center justify-between text-center text-base text-zinc-700 md:text-lg px-0 md:px-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From the Chief Minister’s appreciation to media spotlights, Cup Time’s
        journey has been marked by trust, innovation, and community impact.
        These recognitions reflect our commitment to quality, entrepreneurship,
        and empowering local talent.
          </motion.p>
        </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          damping: 12,
          stiffness: 100,
        }}
        className="flex-1 py-6"
      >
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-1">
            {milestones.map((milestone, index) => (
              <CarouselItem
                key={index}
                className= "-pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
              >
                <div className="flex flex-col items-center justify-between text-center">
                  <div className="relative w-full aspect-[3/4] rounded-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${milestone.image.src})`,
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold md:text-lg">
                      {milestone.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          { isMobile && (
          <div className="flex justify-center gap-2 py-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              className="size-8 rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              className="size-8 rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>)}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default MilestonesMedia;
