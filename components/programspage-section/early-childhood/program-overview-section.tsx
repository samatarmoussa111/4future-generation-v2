import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProgramOverviewSection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Supporting Families with Children Aged 0-5
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive early childhood development program provides the
              tools, resources, and support needed to ensure every child reaches
              their full potential during these crucial early years.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Age-appropriate developmental activities</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Parent education and support groups</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Regular developmental assessments</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Enroll Your Child</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2940&auto=format&fit=crop"
              alt="Children engaged in early learning activities"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
