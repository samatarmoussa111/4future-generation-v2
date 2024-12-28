import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AcademicSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Academic Support: Empowering Children to Excel in Learning and
              Life
            </h2>
            <p className="text-lg text-muted-foreground">
              Our academic support program provides age-appropriate learning
              experiences that foster curiosity, creativity, and critical
              thinking skills.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Play-based learning activities</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Early literacy and numeracy programs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Social-emotional skill development</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/programs/academic-support">Learn More</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2944&auto=format&fit=crop"
              alt="Children engaged in academic activities"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
