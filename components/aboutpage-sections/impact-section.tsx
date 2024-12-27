import Image from "next/image";

export function ImpactSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Empowering communities through early childhood development and
              leadership
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to fostering growth and development has created
              lasting impact in communities across the region.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">95%</h3>
                <p className="text-sm text-muted-foreground">
                  Program completion rate among enrolled youth
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">50%</h3>
                <p className="text-sm text-muted-foreground">
                  Of graduates pursue higher education
                </p>
              </div>
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop"
            alt="Impact visualization"
            width={700}
            height={700}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
