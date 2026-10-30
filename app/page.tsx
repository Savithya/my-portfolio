import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060914] dark:bg-[#060914] light:bg-[#FAFAFC] text-slate-100 dark:text-slate-100 light:text-slate-900 selection:bg-blue-600/30">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ResearchSection />
      <SoftSkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
