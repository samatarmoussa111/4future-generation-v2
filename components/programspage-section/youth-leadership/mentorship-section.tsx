import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MentorshipSection() {
  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=1770&auto=format&fit=crop&q=80"
              alt="Mentor working with youth leader"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              One-on-One Mentorship Program
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with experienced mentors who provide guidance, support,
              and real-world insights to help you grow as a leader.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Regular mentoring sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Career guidance and planning</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Networking opportunities</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Find a Mentor</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
