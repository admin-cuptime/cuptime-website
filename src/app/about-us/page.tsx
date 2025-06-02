import Beverages from '@/components/beverages-about-us/beverages';
import CuptimeRoadmap from '@/components/cuptime-roadmap/cuptime-roadmap';
import TraditionWorkplace from '@/components/tradition-workplace/tradition-workplace';
import ProductBanner from '@/components/product-banner/product-banner';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import CeoCard from '@/components/ceo-card/ceo-card';
import AboutUsHero from '@/components/about-us-hero/about-us-hero';
import HorizontelTimeline from '@/components/horizontel-timeline/horizontel-timeline';
import CuptimeImageMedia from '@/components/cuptime-image-media/cuptime-image-media';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'About Us | Cup Time',
    template: '%s | CupTime',
  },
  description:
    'We are Food Company Delivering Filter Coffee & Hot Tea to Businesses in Madurai & Coimbatore twice a Day!',
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

const AboutPage = () => {
  return (
    <main className="max-w-screen-3xl mx-auto space-y-16 md:space-y-32" id="">
      <AboutUsHero />
      <section id="timeline-section" className="-mt-16 md:-mt-34">
        <HorizontelTimeline />
      </section>
      <section>
        <div className="space-y-16">
          <Beverages />
          <TraditionWorkplace />
          <ProductBanner />
          <ReviewMarquee />
          <CeoCard />
          <CuptimeImageMedia />
          <CuptimeRoadmap />
        </div>
      </section>
    </main>
  );
};
export default AboutPage;
