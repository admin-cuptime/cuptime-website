'use client';

import CuptimeImageMedia from '@/components/cuptime-image-media/cuptime-image-media';
import CuptimeRoadmap from '@/components/cuptime-roadmap/cuptime-roadmap';
import FicoFranchise from '@/components/entrepreneurial-model-2/fico-franchise';
import FranchiseSteps from '@/components/franchise-steps/franchise-steps';
import FranchiseHero from '@/components/franchisehero/franchisehero';
import HorizontelTimeline from '@/components/horizontel-timeline/horizontel-timeline';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import WhyChoose from '@/components/why-choose-CT-1/why-choose-cuptimeboy';
import React from 'react';

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
