import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ApproachSection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Approach: Community-led, Data-driven Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in the power of community-driven solutions supported by
              rigorous data analysis and continuous improvement.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-none">
                  <div className="h-2 w-2 translate-y-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Community Engagement</h3>
                  <p className="text-muted-foreground">
                    Working closely with local leaders and families
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-none">
                  <div className="h-2 w-2 translate-y-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Data-Driven Decisions</h3>
                  <p className="text-muted-foreground">
                    Using metrics to guide program development
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-none">
                  <div className="h-2 w-2 translate-y-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    Regular evaluation and adaptation of programs
                  </p>
                </div>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
            alt="Our approach visualization"
            width={700}
            height={700}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
