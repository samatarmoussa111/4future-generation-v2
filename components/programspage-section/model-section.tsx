import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ModelSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Discover the SAFARGA MODEL
            </h2>
            <p className="text-lg text-muted-foreground">
              Our innovative approach combines Support, Assessment, Family
              engagement, Academic excellence, Resources, Growth monitoring, and
              Achievement tracking to ensure comprehensive development and
              success for every child.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Personalized learning paths for each child</li>
              <li>• Regular progress monitoring and assessment</li>
              <li>• Strong family-program partnership</li>
              <li>• Evidence-based teaching methods</li>
            </ul>
            <Button asChild>
              <Link href="/programs/model">Learn More About Our Model</Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2940&auto=format&fit=crop"
              alt="Educational model visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
