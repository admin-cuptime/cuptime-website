'use client';

import EntrepreneurialJourney from '@/components/entrepreneurial-journey/entrepreneurial-journey';
import GetAppSection from '@/components/get-app-section/get-app-section';
import MilestonesMedia from '@/components/milestones-media/milestones-media';
import ProductsHero from '@/components/our-products-hero/our-products-hero';
import ProductSteps from '@/components/product-delivery-steps/product-delivery-steps';
import ProductsSection from '@/components/products-section/products-section';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import React from 'react';


export default function OurProducts() {
  return (
    <div className="max-w-screen-3xl mx-auto">
        <ProductsHero/>
      <div className="md:mt-10 mt-5 lg:-mt-24">
        <ProductsSection />
      </div>
      <div>
        <ProductSteps />
        <ReviewMarquee />
      </div>
    </div>
  );
}
