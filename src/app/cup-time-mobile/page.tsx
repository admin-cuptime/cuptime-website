
'use client';
import CuptimeMobileHero from '@/components/cuptime-mobile-hero/cuptime-mobile-hero';
import CupTimeMobileOrder from '@/components/cuptime-mobile-order/cuptime-mobileorder';
import CuptimeStandout from '@/components/cuptime-standout/cuptime-standout';
import ReviewMarquee from '@/components/review-marquee/review-marquee';

const CuptimeMobilepage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto space-y-32">
      <CuptimeMobileHero />
      <CupTimeMobileOrder />
      <CuptimeStandout />
      <ReviewMarquee />
    </section>
  );
};
export default CuptimeMobilepage;