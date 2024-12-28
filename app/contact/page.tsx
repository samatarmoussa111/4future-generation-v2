import { ContactHeroSection } from "@/components/contact/hero-section";
import { MainContactSection } from "@/components/contact/main-contact-section";
import { LocationsSection } from "@/components/contact/locations-section";
import { NewsletterSection } from "@/components/contact/newsletter-section";

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <MainContactSection />
      <LocationsSection />
      <NewsletterSection />
    </>
  );
}
