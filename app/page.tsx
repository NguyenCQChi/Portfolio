import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import WorkSection from "@/components/sections/work-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
