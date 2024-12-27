import { ApproachSection } from "@/components/aboutpage-sections/approach-section";
import { FocusAreasSection } from "@/components/aboutpage-sections/focus-areas-section";
import { AboutHeroSection } from "@/components/aboutpage-sections/hero-section";
import { HistorySection } from "@/components/aboutpage-sections/history-section";
import { ImpactSection } from "@/components/aboutpage-sections/impact-section";
import { TeamSection } from "@/components/aboutpage-sections/team-section";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <ImpactSection />
      <HistorySection />
      <TeamSection />
      <ApproachSection />
      <FocusAreasSection />
    </>
  );
}
