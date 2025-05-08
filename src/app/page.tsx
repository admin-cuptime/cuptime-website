import EntrepreneurialJourney from "@/components/entrepreneurial-journey/entrepreneurial-journey";
import FeatureCard from "@/components/feature-card/feature-card";
import HeroSection from "@/components/hero-section/hero-section";
import TraditionWorkplace from "@/components/tradition-workplace/tradition-workplace";
import TrustDelivery from "@/components/trust-delivery-time/trust-delivery";

export default function Home() {
  return (
    <main className="max-w-screen-3xl mx-auto space-y-32">
      <HeroSection /> 
      <FeatureCard />
      <TrustDelivery/>
      <TraditionWorkplace />
      <EntrepreneurialJourney />
    </main>
  );
}
