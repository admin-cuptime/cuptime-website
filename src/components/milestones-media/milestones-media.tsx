'use client';

import Image from 'next/image';
import React, { useState } from 'react';
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

const MilestonesMedia = () => {
  const [api, setApi] = React.useState<CarouselApi>();

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
      description: 'Read More',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-white px-4 sm:px-8 md:px-16">
      <h2 className="text-center text-2xl font-bold text-zinc-900 md:text-3xl lg:text-4xl">
        Our Milestones & Media Recognition
      </h2>
      <p className="text-center text-base sm:px-8 md:px-16 md:text-lg">
        From the Chief Minister’s appreciation to media spotlights, Cup Time’s
        journey has been marked by trust, innovation, and community impact.
        These recognitions reflect our commitment to quality, entrepreneurship,
        and empowering local talent.
      </p>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="-ml-1">
          {milestones.map((milestone, index) => (
            <CarouselItem
              key={index}
              className="pl-1 sm:basis-1/2 lg:basis-1/4"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  className="rounded-lg"
                />
                <h3 className="text-sm font-semibold md:text-lg">
                  {milestone.title}
                </h3>
                {milestone.description && (
                  <p className="text-cuptime-red text-sm font-semibold underline md:text-lg">
                    {milestone.description}
                  </p>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 py-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => api?.scrollPrev()}
            className="size-8 rounded-full"
            disabled={!api?.canScrollPrev()}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => api?.scrollNext()}
            className="size-8 rounded-full"
            disabled={!api?.canScrollNext()}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

export default MilestonesMedia;
