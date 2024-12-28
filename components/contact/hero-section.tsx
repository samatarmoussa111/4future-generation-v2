export function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Let&apos;s Make a Difference Together
          </h1>
          <p className="animate-slide-up mt-6 text-lg text-primary-foreground/90">
            Have questions about our programs? Want to get involved? We&apos;d
            love to hear from you. Reach out and let&apos;s start a conversation
            about creating positive change in our community.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </section>
  );
}
