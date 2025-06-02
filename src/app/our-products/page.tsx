
import EntrepreneurialJourney from '@/components/entrepreneurial-journey/entrepreneurial-journey';
import GetAppSection from '@/components/get-app-section/get-app-section';
import MilestonesMedia from '@/components/milestones-media/milestones-media';
import ProductsHero from '@/components/our-products-hero/our-products-hero';
import ProductSteps from '@/components/product-delivery-steps/product-delivery-steps';
import ProductsSection from '@/components/products-section/products-section';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Our Products | Cup Time',
    template: '%s | CupTime',
  },
  description:
    'At Cup Time, we’re committed to protecting your personal data and ensuring transparency in how we collect, use, and safeguard your information. Whether you’re ordering your favorite brew or applying for a career, your trust matters. Explore our privacy policy to learn more about how we keep your data safe, secure, and never shared without consent.',
  keywords: [
    'coffee near me',
    'tea near me',
    'rose milk delivery',
    'coffee delivery near me',
    'healthy drinks delivery',
    'coffee delivery app',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
};

export default function OurProducts() {
  return (
    <div className="max-w-screen-3xl mx-auto">
      <ProductsHero />
      <div className="mt-5 md:mt-10 lg:-mt-24">
        <ProductsSection />
      </div>
      <div>
        <ProductSteps />
        <ReviewMarquee />
      </div>
    </div>
  );
}
