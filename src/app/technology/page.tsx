'use client';

import CoreTechnologyPage from '@/components/core-card-technology-section/core-technology';
import CupTimeMobileOrder from '@/components/cuptime-mobile-order/cuptime-mobileorder';
import CuptimeStandout from '@/components/cuptime-standout/cuptime-standout';
import TechnologyHero from '@/components/cuptime-technology-hero/technologyhero';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import React from 'react';

const TechnologyPage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto space-y-32">
      <TechnologyHero />
      <CuptimeStandout />
      <CupTimeMobileOrder />
      <CoreTechnologyPage/>
      <ReviewMarquee />
    </section>
  );
};
export default TechnologyPage;
