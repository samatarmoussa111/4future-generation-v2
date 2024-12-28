import { Card, CardContent } from "@/components/ui/card";
import { Heart, Apple, Users } from "lucide-react";

const features = [
  {
    title: "Nutrition Education",
    description:
      "Learning about healthy eating habits and meal planning for families.",
    icon: <Apple className="h-8 w-8 text-primary" />,
  },
  {
    title: "Physical Activity",
    description: "Age-appropriate exercise programs and movement activities.",
    icon: <Heart className="h-8 w-8 text-primary" />,
  },
  {
    title: "Community Health",
    description: "Building a supportive network for lasting health outcomes.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Comprehensive Health & Wellness Programs for All Ages
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
