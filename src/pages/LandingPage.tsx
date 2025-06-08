import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/landingPage/FeatureSection";
import Navigation from "../components/Navigation";

export default function LandingPage() {
  return (
    <div className=" min-h-screen bg-black text-white">
      <Navigation />
      {/* Hero Section */}
      <HeroSection />
      {/* Feature Section */}
      <FeatureSection />
    </div>
  );
}
