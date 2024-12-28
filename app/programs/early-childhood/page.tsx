import { AcademicSection } from "@/components/programspage-section/early-childhood/academic-section";
import { FaqSection } from "@/components/programspage-section/early-childhood/faq-section";
import { FeaturesSection } from "@/components/programspage-section/early-childhood/features-section";
import { EarlyChildhoodHeroSection } from "@/components/programspage-section/early-childhood/hero-section";
import { MentoringSection } from "@/components/programspage-section/early-childhood/mentoring-section";
import { NavigationSection } from "@/components/programspage-section/early-childhood/navigation-section";
import { ProgramOverviewSection } from "@/components/programspage-section/early-childhood/program-overview-section";

export default function EarlyChildhoodPage() {
  return (
    <>
      <EarlyChildhoodHeroSection />
      <FeaturesSection />
      <ProgramOverviewSection />
      <MentoringSection />
      <NavigationSection />
      <AcademicSection />
      <FaqSection />
    </>
  );
}
