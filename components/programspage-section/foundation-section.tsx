import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FoundationSection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=2940&auto=format&fit=crop"
              alt="Children engaged in educational activities"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Building a Strong Foundation for Children&apos;s Future
            </h2>
            <p className="text-lg text-muted-foreground">
              Our early childhood development programs create nurturing
              environments where children can thrive, learn, and develop
              essential skills for lifelong success.
            </p>
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
