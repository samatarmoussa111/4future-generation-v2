import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SkillsSection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Essential Leadership Skills Development
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive program helps young people develop the key
              skills needed to become effective leaders in their communities.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Public speaking and communication</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Project management and organization</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Team building and collaboration</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Develop Your Skills</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2940&auto=format&fit=crop"
              alt="Youth participating in leadership workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
