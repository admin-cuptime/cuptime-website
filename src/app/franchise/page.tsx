
import CuptimeImageMedia from '@/components/cuptime-image-media/cuptime-image-media';
import CuptimeRoadmap from '@/components/cuptime-roadmap/cuptime-roadmap';
import FicoFranchise from '@/components/entrepreneurial-model-2/fico-franchise';
import FranchiseSteps from '@/components/franchise-steps/franchise-steps';
import FranchiseHero from '@/components/franchisehero/franchisehero';
import HorizontelTimeline from '@/components/horizontel-timeline/horizontel-timeline';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import WhyChoose from '@/components/why-choose-CT-1/why-choose-cuptimeboy';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Franchisee | Cup Time',
    template: '%s | CupTime',
  },
  description:
    'Partner with us & Become a part of the Cup Time family. Bring authentic South Indian beverages to your community with a proven business model rooted in tradition and trust.',
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

const FranchisePage = () => {
  return (
    <div className="max-w-screen-3xl mx-auto space-y-6 md:space-y-32">
      <FranchiseHero />
      <section>
        <div className="space-y-16 md:space-y-32">
          <FranchiseSteps />
          <WhyChoose />
          <HorizontelTimeline />
          <FicoFranchise />
        </div>
      </section>
      <ReviewMarquee />
    </div>
  );
};
export default FranchisePage;
