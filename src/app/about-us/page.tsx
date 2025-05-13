'use client';

import Beverages from '@/components/beverages-about-us/beverages';
import CuptimeRoadmap from '@/components/cuptime-roadmap/cuptime-roadmap';
import TraditionWorkplace from '@/components/tradition-workplace/tradition-workplace';
import ProductBanner from '@/components/product-banner/product-banner';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import CeoCard from '@/components/ceo-card/ceo-card';
import AboutUsHero from '@/components/about-us-hero/about-us-hero';


const AboutPage = () => {
  return (
      <main className="max-w-screen-3xl mx-auto space-y-32">
        <AboutUsHero/>
        <Beverages />
        <section>
          <div className="space-y-16">
            <TraditionWorkplace />
            <ProductBanner />
            <ReviewMarquee />
            <CeoCard/>
            <CuptimeRoadmap />
          </div>
        </section>
      </main>
  );
};
export default AboutPage;
