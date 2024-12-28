import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Community Impact Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Put your leadership skills into action through hands-on community
              projects that make a real difference in people&apos;s lives.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Project planning and execution</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Community needs assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Impact measurement and reporting</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2949&auto=format&fit=crop"
              alt="Youth leaders working on community project"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
