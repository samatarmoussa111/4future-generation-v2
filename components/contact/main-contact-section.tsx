"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function MainContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 md:py-32 px-2">
      <div className="container max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form and we&apos;ll get back to you as soon as
                possible. Your message helps us better understand how we can
                assist you.
              </p>
            </div>

            <div className="space-y-4 rounded-lg border bg-card p-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-sm text-muted-foreground">
                    info@4futuregenerations.org
                  </p>
                  <p className="text-sm text-muted-foreground">
                    support@4futuregenerations.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Main: (555) 123-4567
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Support: (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Community Street
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92691.00447401391!2d-70.27415424259916!3d44.09741787672946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb26af12ea43761%3A0x5c1c59935cdcd810!2sLewiston%2C%20ME%2C%20USA!5e0!3m2!1sen!2s!4v1703778851359!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="programs">
                      Programs Information
                    </SelectItem>
                    <SelectItem value="volunteer">
                      Volunteer Opportunities
                    </SelectItem>
                    <SelectItem value="donation">Donation Questions</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
