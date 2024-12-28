import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const locations = [
  {
    name: "Main Office",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
    address: "123 Community Street, City, State 12345",
    phone: "(555) 123-4567",
    email: "main@4futuregenerations.org",
  },
  {
    name: "Youth Center",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2940&auto=format&fit=crop",
    address: "456 Leadership Avenue, City, State 12345",
    phone: "(555) 234-5678",
    email: "youth@4futuregenerations.org",
  },
  {
    name: "Community Hub",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2940&auto=format&fit=crop",
    address: "789 Development Road, City, State 12345",
    phone: "(555) 345-6789",
    email: "community@4futuregenerations.org",
  },
];

export function LocationsSection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Locations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Visit us at any of our locations to learn more about our programs
            and how we&apos;re making a difference in the community.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Card key={location.name} className="overflow-hidden">
              <div className="aspect-[16/9] relative">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{location.name}</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      {location.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      {location.phone}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      {location.email}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
