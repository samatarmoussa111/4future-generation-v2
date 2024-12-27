const testimonials = [
  {
    quote:
      "The early childhood program has been transformative for my daughter. She's learning and growing every day.",
    author: "Sarah Johnson",
    role: "Parent",
  },
  {
    quote:
      "The youth leadership program gave me the confidence to pursue my dreams and make a difference.",
    author: "Marcus Rodriguez",
    role: "Program Graduate",
  },
  {
    quote:
      "As a community partner, we've seen firsthand the positive impact of their programs.",
    author: "Dr. Emily Chen",
    role: "Community Partner",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-16">
          What Our Community Says
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.author}
              className="animate-fade-in rounded-lg bg-background p-6 shadow [animation-delay:var(--delay)]"
              style={
                {
                  "--delay": `${index * 200}ms`,
                } as React.CSSProperties
              }
            >
              <p className="text-muted-foreground">{testimonial.quote}</p>
              <footer className="mt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
