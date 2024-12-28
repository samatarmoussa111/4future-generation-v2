import { HealthWellnessHeroSection } from "@/components/programspage-section/health-wellness/hero-section";
import { FeaturesSection } from "@/components/programspage-section/health-wellness/features-section";
import { NutritionSection } from "@/components/programspage-section/health-wellness/nutrition-section";
import { PhysicalActivitySection } from "@/components/programspage-section/health-wellness/physical-activity-section";
import { MentalHealthSection } from "@/components/programspage-section/health-wellness/mental-health-section";
import { CommunitySection } from "@/components/programspage-section/health-wellness/community-section";
import { FaqSection } from "@/components/programspage-section/health-wellness/faq-section";

export default function HealthWellnessPage() {
  return (
    <>
      <HealthWellnessHeroSection />
      <FeaturesSection />
      <NutritionSection />
      <PhysicalActivitySection />
      <MentalHealthSection />
      <CommunitySection />
      <FaqSection />
    </>
  );
}
