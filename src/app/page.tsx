
import CuptimeRoadmap from '@/components/cuptime-roadmap/cuptime-roadmap';
import DeliverySteps from '@/components/delivery-steps/delivery-steps';
import EntrepreneurialJourney from '@/components/entrepreneurial-journey/entrepreneurial-journey';
import FAQsection from '@/components/faq-section/faq-questions';
import FeatureCard from '@/components/feature-card/feature-card';
import GetAppSection from '@/components/get-app-section/get-app-section';
import HeroSection from '@/components/hero-section/hero-section';
import MilestonesMedia from '@/components/milestones-media/milestones-media';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import TraditionWorkplace from '@/components/tradition-workplace/tradition-workplace';
import TrustDelivery from '@/components/trust-delivery-time/trust-delivery';


export default function Home() {
  return (
    <main className="max-w-screen-3xl mx-auto space-y-32">
      <HeroSection />
      <FeatureCard />
      <MilestonesMedia/>
      <TrustDelivery />
      <TraditionWorkplace />
      <DeliverySteps />
      <EntrepreneurialJourney />
      <FAQsection />
      <section>
        <ReviewMarquee />
        <GetAppSection />
      </section>
      <CuptimeRoadmap />
    </main>
  );
}
