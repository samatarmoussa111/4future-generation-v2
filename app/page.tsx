import { FaqSection } from "@/components/homepage-sections/faq-section";
import { FeaturesSection } from "@/components/homepage-sections/features-section";
import { HeroSection } from "@/components/homepage-sections/hero-section";
import { TestimonialsSection } from "@/components/homepage-sections/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
