import CoreTechnologyPage from '@/components/core-card-technology-section/core-technology';
import CupTimeMobileOrder from '@/components/cuptime-mobile-order/cuptime-mobileorder';
import CuptimeStandout from '@/components/cuptime-standout/cuptime-standout';
import TechnologyHero from '@/components/cuptime-technology-hero/technologyhero';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Technology | Cup Time',
    template: '%s | CupTime',
  },
  description:
    'At Cup Time, we believe great coffee isn’t just about the brew — it’s about the experience. We’ve built a smart, seamless technology ecosystem that makes your daily beverage routine faster, smoother, and more rewarding — all through your phone.',
  keywords: [
    'coffee',
    'tea',
    'coffee delivery',
    'coffee delivery app',
    'tea delivery app',
    'tea delivery',
    'filter coffee',
    'office coffee',
    'filter coffee delivery',
    'tea delivery service',
    'office coffee service',
    'traditional filter coffee',
    'Madurai filter coffee',
    'workspace tea and coffee',
    'hot coffee flask delivery',
    'South Indian filter coffee',
    'corporate tea coffee supplier',
    'fresh coffee for offices',
    'employee refreshment services',
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

const TechnologyPage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto space-y-16 md:space-y-32">
      <TechnologyHero />
      <CuptimeStandout />
      <CupTimeMobileOrder />
      <CoreTechnologyPage />
      <ReviewMarquee />
    </section>
  );
};
export default TechnologyPage;
