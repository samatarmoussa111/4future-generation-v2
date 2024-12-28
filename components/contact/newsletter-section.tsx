"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate newsletter signup
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg bg-primary px-6 py-16 sm:px-16 sm:py-24">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Subscribe to our newsletter for updates on our programs, events,
              and ways to get involved in the community.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white"
              />
              <Button
                type="submit"
                variant="secondary"
                disabled={isSubmitting}
                className="whitespace-nowrap"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="mt-4 text-sm text-primary-foreground/80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
