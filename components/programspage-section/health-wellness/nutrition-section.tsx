import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NutritionSection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nutrition Education & Healthy Eating Habits
            </h2>
            <p className="text-lg text-muted-foreground">
              Our nutrition program provides practical knowledge and skills for
              families to make healthy food choices and develop sustainable
              eating habits.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Interactive cooking workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Meal planning guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Budget-friendly healthy recipes</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Join a Workshop</Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2940&auto=format&fit=crop"
              alt="Family cooking healthy meal together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
