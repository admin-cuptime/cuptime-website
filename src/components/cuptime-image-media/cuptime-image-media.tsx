'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { fetchGalleryData } from '@/app/api/gallery';

const CuptimeImageMedia = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [images, setImages] = useState<{ src: string; alt?: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGallery = async () => {
      setLoading(true);
      const data = await fetchGalleryData();
      if (Array.isArray(data)) {
        setImages(
          data.map((img: any, idx: number) => ({
            src: img.images || '',
            alt: `Image ${idx + 1}`,
          }))
        );
      }
      setLoading(false);
    };
    getGallery();
  }, []);

  // Loader: 8 pulsing rectangles like image items
  const Loader = () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="w-full aspect-square rounded-lg bg-gray-200 animate-pulse"
          style={{
            minHeight: '120px',
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  );

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
            {loading ? (
              <CarouselItem className="w-full">
                <Loader />
              </CarouselItem>
            ) : (
              getSlides().map((group, groupIndex) => (
                <CarouselItem key={groupIndex} className="w-full">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {group.map((img: any, index: any) => (
                      <div key={index} className="overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.alt || `Image ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))
            )}
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
