import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CommunitySection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Building a Healthy Community Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Our community health initiatives bring people together to create
              lasting positive change and support networks for better health
              outcomes.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Health fairs and screenings</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Community gardens</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Wellness challenges</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop"
              alt="Community members working together in a garden"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
