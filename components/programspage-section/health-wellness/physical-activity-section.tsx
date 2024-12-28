import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PhysicalActivitySection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop"
              alt="Family engaging in outdoor physical activities"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Active Living for the Whole Family
            </h2>
            <p className="text-lg text-muted-foreground">
              Our physical activity programs make exercise fun and accessible
              for all ages and ability levels, promoting lifelong healthy
              habits.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Family fitness classes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Youth sports programs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Outdoor adventure activities</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Get Active</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
