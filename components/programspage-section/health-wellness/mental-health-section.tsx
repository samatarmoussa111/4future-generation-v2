import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MentalHealthSection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Supporting Mental Health & Well-being
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide resources and support for mental health awareness,
              stress management, and emotional well-being for all family
              members.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Counseling services</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Mindfulness workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Support groups</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2940&auto=format&fit=crop"
              alt="Peaceful meditation and mindfulness session"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
