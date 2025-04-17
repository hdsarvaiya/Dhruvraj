import IntroAnimation from "@/components/animations/IntroAnimation";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProject from "@/components/home/FeaturedProject";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";
import MapSection from "@/components/home/MapSection";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/back-to-top";
import MobileNav from "@/components/layout/MobileNav";
import { useState } from "react";

export default function Home() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  
  return (
    <>
      <IntroAnimation />
      <Header toggleMobileNav={toggleMobileNav} />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <FeaturedProject />
        <ProjectsSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
