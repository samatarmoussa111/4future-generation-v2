import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Users, Target } from "lucide-react";

const activities = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Academic Support",
    description: "Tutoring and educational guidance",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Mentorship",
    description: "One-on-one guidance from experienced mentors",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Leadership Training",
    description: "Developing future community leaders",
  },
];

export function YouthSection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Empowering Youth Through Mentorship and Activities
            </h2>
            <p className="text-lg text-muted-foreground">
              Our youth programs provide comprehensive support and opportunities
              for personal growth, academic success, and leadership development.
            </p>
            <div className="grid gap-6">
              {activities.map((activity) => (
                <div key={activity.title} className="flex gap-4">
                  <div className="flex-none">
                    <div className="rounded-lg bg-background p-2 text-primary">
                      {activity.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">{activity.title}</h3>
                    <p className="text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild>
              <Link href="/programs/youth">Join Our Youth Programs</Link>
            </Button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2949&auto=format&fit=crop"
              alt="Youth engaged in leadership activities"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
