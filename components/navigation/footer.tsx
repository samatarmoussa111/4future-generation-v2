import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground px-2">
      <div className="container max-w-[1440px] mx-auto py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex  items-center gap-4">
              <div className="rounded-full bg-white/95 p-2">
                <Image
                  src="/logo_future_generation.png"
                  alt="4 Future Generations Logo"
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px]"
                />
              </div>
              <h3 className="text-lg font-bold">4 Future Generations</h3>
            </div>
            <p className="text-sm leading-loose">
              Empowering youth through Early Childhood Development, Health &
              Wellness, and Leadership programs.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:underline">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                123 Community Street, City, ST 12345
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@4futuregenerations.org
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-secondary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-secondary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-secondary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} 4 Future Generations. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
