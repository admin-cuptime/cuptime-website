import CuptimeRoadmap from '@/components/cuptime-roadmap/cuptime-roadmap';
import DeliverySteps from '@/components/delivery-steps/delivery-steps';
import EntrepreneurialJourney from '@/components/entrepreneurial-journey/entrepreneurial-journey';
import FAQsection from '@/components/faq-section/faq-questions';
import FeatureCard from '@/components/feature-card/feature-card';
import GetAppSection from '@/components/get-app-section/get-app-section';
import HeroSection from '@/components/hero-section/hero-section';
import MilestonesMedia from '@/components/milestones-media/milestones-media';
import ProductOverview from '@/components/product-overview/product-overview';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import TraditionWorkplace from '@/components/tradition-workplace/tradition-workplace';
import TrustDelivery from '@/components/trust-delivery-time/trust-delivery';
import AppRedirectHandler from '@/components/app-redirect-handler/app-redirect-handler';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'CupTime - Tea and Coffee Delivery',
    template: '%s | CupTime',
  },
  description:
    'CupTime is a dedicated Filter Coffee & Tea service, bringing rich tradition straight to your workspace. Rooted in the authentic flavors of Madurai, we honor the cultural ritual of enjoying Filter Coffee and Tea during work. With every flask we deliver, we bring not just a brew—but a moment of warmth, aroma, and renewed focus. CupTime bridges tradition and productivity, energizing your workday, one cup at a time.',
  keywords: [
    'coffee',
    'tea',
    'coffee delivery',
    'coffee delivery app',
    'coffee delivery near me',
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
  authors: [{ name: 'CupTime' }],
  creator: 'CupTime',
  publisher: 'CupTime',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cuptime.com',
    siteName: 'CupTime',
    title: 'CupTime - Coffee and Tea Delivery',
    description:
      'CupTime is a dedicated Filter Coffee & Tea service, bringing rich tradition straight to your workspace. Rooted in the authentic flavors of Madurai, we honor the cultural ritual of enjoying Filter Coffee and Tea during work. With every flask we deliver, we bring not just a brew—but a moment of warmth, aroma, and renewed focus. CupTime bridges tradition and productivity, energizing your workday, one cup at a time.',
  },
};

export default function Home() {
  
  return (
    <>
      <Suspense fallback={null}>
        <AppRedirectHandler />
      </Suspense>
      <main className="max-w-screen-3xl mx-auto space-y-16 md:space-y-32">
        <HeroSection />
        <FeatureCard />
        <ProductOverview />
        <MilestonesMedia />
        <TrustDelivery />
        <TraditionWorkplace />
        <DeliverySteps />
        <EntrepreneurialJourney />
        <FAQsection />
        <section>
          <ReviewMarquee />
          <GetAppSection />
          <CuptimeRoadmap />
        </section>
      </main>
    </>
  );
}
