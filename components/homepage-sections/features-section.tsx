import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Users } from "lucide-react";

const features = [
  {
    title: "Early Childhood Development",
    description:
      "Building strong foundations through education and care for children ages 0-5.",
    icon: <Brain className="h-12 w-12 text-primary" />,
  },
  {
    title: "Health & Wellness",
    description:
      "Promoting healthy lifestyles and well-being in our community.",
    icon: <Heart className="h-12 w-12 text-primary" />,
  },
  {
    title: "Youth Leadership",
    description:
      "Empowering young people to become leaders in their communities.",
    icon: <Users className="h-12 w-12 text-primary" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-16">
          Our Initiatives
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="animate-fade-in [animation-delay:var(--delay)]"
              style={
                {
                  "--delay": `${index * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
