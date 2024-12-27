import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Heart, Users } from "lucide-react";

const focusAreas = [
  {
    title: "Early Childhood Development",
    description: "Building Strong Foundations",
    icon: <Brain className="h-8 w-8" />,
    href: "/programs/early-childhood",
  },
  {
    title: "Health & Wellness",
    description: "Promoting Healthy Lives",
    icon: <Heart className="h-8 w-8" />,
    href: "/programs/health-wellness",
  },
  {
    title: "Youth Leadership",
    description: "Empowering the Future",
    icon: <Users className="h-8 w-8" />,
    href: "/programs/youth-leadership",
  },
];

export function FocusAreasSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Strategic Focus Areas: Driving Positive Community Change
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our programs are strategically designed to create lasting impact
            across key areas of community development.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <Card key={area.title}>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  {area.icon}
                </div>
                <h3 className="mb-2 font-bold">{area.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {area.description}
                </p>
                <Button variant="outline" asChild>
                  <Link href={area.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
