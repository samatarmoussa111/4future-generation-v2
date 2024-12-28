import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MentoringSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=500&auto=format&fit=crop"
              alt="Mentor working with a young child"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Supporting Families with Our Mentoring Program
            </h2>
            <p className="text-lg text-muted-foreground">
              Our mentoring program pairs experienced early childhood educators
              with families to provide personalized guidance and support
              throughout their child&apos;s developmental journey.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>One-on-one mentoring sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Monthly progress reviews</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Customized development plans</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/programs/mentoring">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
