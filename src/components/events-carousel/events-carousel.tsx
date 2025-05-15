'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import { images } from '@/assets/png/images';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

// Replace with JSON data
const eventsData = [
  {
    image: images.event.gallery1,
    date: 'June 15, 2025',
    location: 'Chennai',
    title: 'Cuptime Lovers Meeting',
  },
  {
    image: images.event.gallery1,
    date: 'July 20, 2025',
    location: 'Chennai',
    title: 'Cuptime Lovers Meeting',
  },
  {
    image: images.event.gallery1,
    date: 'August 5, 2025',
    location: 'Chennai',
    title: 'Cuptime Lovers Meeting',
  },
  {
    image: images.event.gallery1,
    date: 'September 12, 2025',
    location: 'Chennai',
    title: 'Cuptime Lovers Meeting',
  },
  {
    image: images.event.gallery1,
    date: 'October 18, 2025',
    location: 'Chennai',
    title: 'Cuptime Lovers Meeting',
  },
  {
    image: images.event.gallery1,
    date: 'November 22, 2025',
    location: 'Chennai',
    title: 'Cuptime Lovers Meeting',
  },
  {
    image: images.event.gallery1,
    date: 'December 10, 2025',
    location: 'Chennai',
    title: 'Cuptime Lovers Meeting',
  },
];

const EventsCarousel = () => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbsApi, setThumbsApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi]
  );

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbsApi) return;

    const index = mainApi.selectedScrollSnap();
    setCurrentIndex(index);
    thumbsApi.scrollTo(index);
  }, [mainApi, thumbsApi, setCurrentIndex]);

  useEffect(() => {
    if (!mainApi || !thumbsApi) return;

    onSelect();

    mainApi.on('select', onSelect);
    mainApi.on('reInit', onSelect);

    return () => {
      mainApi.off('select', onSelect);
      mainApi.off('reInit', onSelect);
    };
  }, [mainApi, thumbsApi, onSelect]);

  return (
    <section className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <Carousel
          setApi={setMainApi}
          opts={{
            loop: true,
            align: 'center',
          }}
          className="mx-auto w-full max-w-4xl"
        >
          <CarouselContent>
            {eventsData.map((event, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src={event.image.src}
                    alt={`${event.title} - ${event.date}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="bg-cuptime-red absolute bottom-4 left-4 max-w-xs rounded-bl-2xl rounded-tr-2xl p-4 text-white flex flex-col gap-2">
                    <h3 className="text-lg md:text-xl font-bold">{event.title}</h3>
                    <div className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Carousel
          setApi={setThumbsApi}
          opts={{
            containScroll: 'keepSnaps',
            dragFree: true,
          }}
          className="relative mx-auto w-full max-w-4xl"
        >
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l"></div>
          <CarouselContent className="-ml-2 md:-ml-4">
            {eventsData.map((event, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 cursor-pointer pl-2 sm:basis-1/5 md:basis-1/6 md:pl-4"
                onClick={() => onThumbClick(index)}
              >
                <div
                  className={cn(
                    'overflow-hidden rounded border-2 transition-all',
                    currentIndex === index
                      ? 'border-cuptime-red opacity-100'
                      : 'scale-95 border-transparent opacity-70 hover:opacity-100'
                  )}
                >
                  <img
                    src={event.image.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default EventsCarousel;
