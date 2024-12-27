import Image from "next/image";

export function HistorySection() {
  return (
    <section className="bg-muted py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
            alt="Historical timeline visualization"
            width={700}
            height={700}
            className="object-cover rounded-lg"
          />

          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A Rich History: Tracing the Evolution of Our Organization
            </h2>
            <p className="text-lg text-muted-foreground">
              Since our founding, we&apos;ve been dedicated to creating positive
              change in our community through innovative programs and dedicated
              service.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-none">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2010
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Foundation</h3>
                  <p className="text-muted-foreground">
                    Established with a vision to transform early childhood
                    education
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-none">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2015
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Expansion</h3>
                  <p className="text-muted-foreground">
                    Launched youth leadership programs and health initiatives
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-none">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2020
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Innovation</h3>
                  <p className="text-muted-foreground">
                    Introduced comprehensive community development approach
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
