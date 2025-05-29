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

const CuptimeImageMedia = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [images, setImages] = useState<{ src: string; alt?: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');

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

  const Loader = () => (
    <div className="grid grid-cols-1 gap-4">
      {[...Array(1)].map((_, i) => (
        <div
          key={i}
          className="aspect-square w-full animate-pulse rounded-lg bg-gray-200"
          style={{
            minHeight: '120px',
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
  
  const getSlides = () => {
    if (isMobile) {
      // One image per slide for mobile
      return images.map((img) => [img]);
    } else {
      // Group by 8 images for larger screens
      const groups: any[] = [];
      const perGroup = 8;
      for (let i = 0; i < images.length; i += perGroup) {
        groups.push(images.slice(i, i + perGroup));
      }
      return groups;
    }
  };

  return (
    <div className="bg-white px-4 py-1 sm:px-8 md:px-16">
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
                  <div
                    className={`grid gap-4 ${
                      isMobile
                        ? 'grid-cols-1'
                        : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                    }`}
                  >
                    {Array.isArray(group) &&
                      group.map((img, index) => (
                        <div key={index} className="overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="h-full w-full rounded-md object-cover"
                          />
                        </div>
                      ))}
                  </div>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          { (isMobile ||isTablet) && (
          <div className="flex justify-center gap-2 py-1">
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
          </div>)}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default CuptimeImageMedia;
