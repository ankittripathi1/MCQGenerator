import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/landingPage/FeatureSection";
import Footer from "../components/landingPage/Footer";
import HowItWorksSection from "../components/landingPage/HowItWorks";
import SupportedFormates from "../components/landingPage/SupportedFormats";
import Navigation from "../components/Navigation";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <Navigation />
      {/* Hero Section */}
      <HeroSection />
      {/* Feature Section */}
      <FeatureSection />
      {/* How It Works */}
      <HowItWorksSection />
      {/* Supported Formats */}
      <SupportedFormates />
      {/* Footer */}
      <Footer />
    </div>
  );
}
