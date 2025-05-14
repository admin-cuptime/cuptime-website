'use client';

import CupTimeMobileOrder from '@/components/cuptime-mobile-order/cuptime-mobileorder';
import CuptimeStandout from '@/components/cuptime-standout/cuptime-standout';
import TechnologyHero from '@/components/cuptime-technology-hero/technologyhero';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import React from 'react';

const TechnologyPage = () => {
  return (
      <div className="max-w-screen-3xl mx-auto space-y-32">
        <TechnologyHero/>
        <section>
          <div className="space-y-32">
            <CuptimeStandout/>
            <CupTimeMobileOrder/>
            <ReviewMarquee/>
          </div>
        </section>
      </div>
  );
};
export default TechnologyPage;
