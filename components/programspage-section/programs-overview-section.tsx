import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const programs = [
  {
    title: "Early Childhood Program",
    description:
      "Building strong foundations through education and care for children ages 0-5.",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2940&auto=format&fit=crop",
    href: "/programs/early-childhood",
  },
  {
    title: "Health & Wellness",
    description:
      "Promoting healthy lifestyles and well-being in our community.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2940&auto=format&fit=crop",
    href: "/programs/health-wellness",
  },
  {
    title: "Youth Leadership",
    description:
      "Empowering young people to become leaders in their communities.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2940&auto=format&fit=crop",
    href: "/programs/youth-leadership",
  },
];

export function ProgramsOverviewSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Transforming Lives Through Early Childhood Development
          </h2>
          <p className="text-lg text-muted-foreground mb-16">
            Our comprehensive programs support children and families at every
            stage of their journey.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.title} className="overflow-hidden">
              <div className="aspect-[16/9] relative">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>
                <Button variant="outline" asChild>
                  <Link href={program.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
