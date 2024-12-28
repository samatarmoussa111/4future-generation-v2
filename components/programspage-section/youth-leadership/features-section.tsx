import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb } from "lucide-react";

const features = [
  {
    title: "Leadership Development",
    description:
      "Building essential skills for effective leadership and decision-making.",
    icon: <Target className="h-8 w-8 text-primary" />,
  },
  {
    title: "Community Engagement",
    description:
      "Creating meaningful connections and impact in local communities.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    title: "Personal Growth",
    description:
      "Fostering confidence, creativity, and critical thinking skills.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Developing Young Leaders Through Action and Experience
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
