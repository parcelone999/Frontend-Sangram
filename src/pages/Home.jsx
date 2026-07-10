import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import ParcelLensSection from "../components/landing/ParcelLensSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import CoverageSection from "../components/landing/CoverageSection";
import AudienceSection from "../components/landing/AudienceSection";
import CTAFooter from "../components/landing/CTAFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ParcelLensSection />
      <FeaturesSection />
      <CoverageSection />
      <AudienceSection />
      <CTAFooter />
    </div>
  );
}
