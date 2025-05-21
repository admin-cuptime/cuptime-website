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
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { fetchEventsData } from '@/app/api/events';

// Define the type for event data
interface EventData {
  image: string;
  date: string;
  location: string;
  title: string;
}

const EventsCarousel = () => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbsApi, setThumbsApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eventsData, setEventsData] = useState<EventData[]>([]);

  // Fetch events data when component mounts
  useEffect(() => {
    const getEventsData = async () => {
      const data = await fetchEventsData();
      if (data) {
        setEventsData(data);
      }
    };
    getEventsData();
  }, []);

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
                    src={event.image}
                    alt={`${event.title} - ${event.date}`}
                    className="h-full w-full object-cover"
                  />
                  {event.title && (
                    <div className="bg-cuptime-red absolute bottom-4 left-4 flex max-w-xs flex-col gap-2 rounded-tr-2xl rounded-bl-2xl p-4 text-white">
                      <h3 className="text-xs font-bold md:text-xl">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        <span className="text-xs md:text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        <span className="text-xs md:text-sm">
                          {event.location}
                        </span>
                      </div>
                    </div>
                  )}
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
                    src={event.image}
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
