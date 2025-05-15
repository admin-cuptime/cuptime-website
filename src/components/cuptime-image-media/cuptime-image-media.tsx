'use client';

import React from 'react';
import cmAward from '@/assets/png/milestone-4.png';
import vikatan from '@/assets/png/milestone-3.png';
import mou from '@/assets/png/milestone-1.png';
import yourStory from '@/assets/png/milestone-2.png';
import { motion } from 'framer-motion';
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

const CuptimeImageMedia = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const images = [
    cmAward, vikatan, mou, yourStory,
    cmAward, vikatan, mou, yourStory,
    cmAward, vikatan, mou, yourStory,
    cmAward, vikatan
  ];

  // Group images by layout
  const getSlides = () => {
  const groups: any[] = [];
  const perGroup = 8; // 4 per row x 2 rows for lg
  for (let i = 0; i < images.length; i += perGroup) {
    groups.push(images.slice(i, i + perGroup));
  }
  return groups;
};

  return (
    <div className="bg-white px-4 py-8 sm:px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          damping: 12,
          stiffness: 100,
        }}
      >
        <Carousel
          opts={{ align: 'center', loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {getSlides().map((group, groupIndex) => (
              <CarouselItem key={groupIndex} className="w-full">
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {group.map(( img: any, index: any) => (
                    <div
                      key={index}
                      className=" overflow-hidden"
                    >
                      <img
                        src={img.src}
                        alt={`Image ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
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
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              className="size-8 rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default CuptimeImageMedia;
