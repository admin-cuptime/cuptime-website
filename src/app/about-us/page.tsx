'use client';

import Beverages from '@/components/beverages-about-us/beverages';
import CuptimeRoadmap from '@/components/cuptime-roadmap/cuptime-roadmap';
import TraditionWorkplace from '@/components/tradition-workplace/tradition-workplace';
import ProductBanner from '@/components/product-banner/product-banner';
import ReviewMarquee from '@/components/review-marquee/review-marquee';

import React from 'react';

const AboutPage = () => {
  return (
      <div className="max-w-screen-3xl mx-auto space-y-32">
        <Beverages />
        <section>
          <div className="space-y-16">
            <TraditionWorkplace />
            <ProductBanner />
            <ReviewMarquee />
            <CuptimeRoadmap />
          </div>
        </section>
      </div>
  );
};
export default AboutPage;
