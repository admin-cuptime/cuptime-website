'use client';

import Beverages from '@/components/beverages-about-us/beverages';
import CuptimeRoadmap from '@/components/cuptime-roadmap/cuptime-roadmap';
import TraditionWorkplace from '@/components/tradition-workplace/tradition-workplace';
import ProductBanner from '@/components/product-banner/product-banner';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import CeoCard from '@/components/ceo-card/ceo-card';
import AboutUsHero from '@/components/about-us-hero/about-us-hero';
import HorizontelTimeline from '@/components/horizontel-timeline/horizontel-timeline';
import CuptimeImageMedia from '@/components/cuptime-image-media/cuptime-image-media';


const AboutPage = () => {
  return (
      <main className="max-w-screen-3xl mx-auto space-y-16 md:space-y-32"id=''>
        <AboutUsHero/>
        <section id='timeline-section' className='md:-mt-34 -mt-16'>
        <HorizontelTimeline/>
        </section>
        <section>
          <div className="space-y-16">
            <Beverages/>
            <TraditionWorkplace />
            <ProductBanner />
            <ReviewMarquee />
            <CeoCard/>
            <CuptimeImageMedia/>
            <CuptimeRoadmap />
          </div>
        </section>
      </main>
  );
};
export default AboutPage;
