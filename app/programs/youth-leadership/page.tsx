import { YouthLeadershipHeroSection } from "@/components/programspage-section/youth-leadership/hero-section";
import { FeaturesSection } from "@/components/programspage-section/youth-leadership/features-section";
import { SkillsSection } from "@/components/programspage-section/youth-leadership/skills-section";
import { MentorshipSection } from "@/components/programspage-section/youth-leadership/mentorship-section";
import { ProjectsSection } from "@/components/programspage-section/youth-leadership/projects-section";
import { WorkshopsSection } from "@/components/programspage-section/youth-leadership/workshops-section";
import { ContactSection } from "@/components/programspage-section/youth-leadership/contact-section";

export default function YouthLeadershipPage() {
  return (
    <>
      <YouthLeadershipHeroSection />
      <FeaturesSection />
      <SkillsSection />
      <MentorshipSection />
      <ProjectsSection />
      <WorkshopsSection />
      <ContactSection />
    </>
  );
}
