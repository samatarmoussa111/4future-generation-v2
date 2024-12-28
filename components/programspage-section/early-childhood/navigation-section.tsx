import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavigationSection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Supporting Families: Navigating School Readiness and Building
              Networks
            </h2>
            <p className="text-lg text-muted-foreground">
              We help families prepare for their child&apos;s transition to
              formal education while building lasting connections within the
              community.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>School readiness workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Parent networking events</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Community resource connections</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2944&auto=format&fit=crop"
              alt="Parents and children participating in school readiness activities"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
