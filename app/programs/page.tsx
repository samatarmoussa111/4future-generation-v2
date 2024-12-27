import { FoundationSection } from "@/components/programspage-section/foundation-section";
import { ProgramsHeroSection } from "@/components/programspage-section/hero-section";
import { ModelSection } from "@/components/programspage-section/model-section";
import { ProgramsOverviewSection } from "@/components/programspage-section/programs-overview-section";
import { YouthSection } from "@/components/programspage-section/youth-section";

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHeroSection />
      <ProgramsOverviewSection />
      <FoundationSection />
      <ModelSection />
      <YouthSection />
    </>
  );
}
