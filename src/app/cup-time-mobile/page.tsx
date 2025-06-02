
import CuptimeMobileHero from '@/components/cuptime-mobile-hero/cuptime-mobile-hero';
import CupTimeMobileOrder from '@/components/cuptime-mobile-order/cuptime-mobileorder';
import CuptimeStandout from '@/components/cuptime-standout/cuptime-standout';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Cup Time Mobile | Cup Time',
    template: '%s | CupTime',
  },
  description:
    'Download the Cup Time Mobile App.',
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

const CuptimeMobilepage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto space-y-16 md:space-y-32">
      <CuptimeMobileHero />
      <CupTimeMobileOrder />
      <CuptimeStandout />
      <ReviewMarquee />
    </section>
  );
};
export default CuptimeMobilepage;