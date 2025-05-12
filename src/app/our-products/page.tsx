'use client';

import EntrepreneurialJourney from '@/components/entrepreneurial-journey/entrepreneurial-journey';
import GetAppSection from '@/components/get-app-section/get-app-section';
import MilestonesMedia from '@/components/milestones-media/milestones-media';
import ProductsHero from '@/components/our-products-hero/our-products-hero';
import ProductSteps from '@/components/product-delivery-steps/product-delivery-steps';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import React from 'react';

const products = [
  
];

export default function OurProducts() {
  return (
    <div className="our-products">
        <ProductsHero/>
      <div className="product-list">
      </div>
      <div className="lg:space-y-18 space-y-9">
        <ProductSteps />
        <MilestonesMedia />
        <GetAppSection />
        <EntrepreneurialJourney />
        <ReviewMarquee />
      </div>
    </div>
  );
}
