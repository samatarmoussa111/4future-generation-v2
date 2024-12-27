import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container max-w-7xl mx-auto relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight sm:text-6xl">
            Building a Better Future for Our Children
          </h1>
          <p className="animate-slide-up mt-6 text-lg leading-8">
            Through Early Childhood Development, Health & Wellness, and Youth
            Leadership programs, we&apos;re empowering the next generation to
            create positive change in their communities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent"
              asChild
            >
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
