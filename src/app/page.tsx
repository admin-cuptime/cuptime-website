import FeatureCard from "@/components/feature-card/feature-card";
import HeroSection from "@/components/hero-section/hero-section";

export default function Home() {
  return (
    <main className="max-w-screen-3xl mx-auto">
      <HeroSection /> 
      <FeatureCard />
    </main>
  );
}
