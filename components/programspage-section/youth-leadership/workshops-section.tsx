import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WorkshopsSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Interactive Leadership Workshops
            </h2>
            <p className="text-lg text-muted-foreground">
              Engage in dynamic workshops that combine theory and practice to
              develop your leadership potential and practical skills.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Leadership style assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Conflict resolution training</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Decision-making workshops</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Join a Workshop</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
              alt="Interactive leadership workshop session"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
