"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navigation() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-[1440px] mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_future_generation.png"
            alt="4 Future Generations Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            4 Future Generations
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-10">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4">
                    {programs.map((program) => (
                      <ListItem
                        key={program.title}
                        title={program.title}
                        href={program.href}
                      >
                        {program.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="default" asChild>
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_future_generation-xOgD7fjhxzZfbiHCSeCMVCiV3M1FXO.png"
                  alt="4 Future Generations Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  4 Future Generations
                </span>
              </div>
              <nav className="mt-6 flex flex-col gap-4">
                <Link
                  href="/about"
                  className="block px-2 py-1 text-lg hover:text-primary"
                >
                  About
                </Link>
                <div className="space-y-3">
                  <h4 className="font-medium">Programs</h4>
                  {programs.map((program) => (
                    <Link
                      key={program.title}
                      href={program.href}
                      className="block px-2 py-1 text-sm hover:text-primary"
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block px-2 py-1 text-lg hover:text-primary"
                >
                  Contact
                </Link>
                <Button variant="default" asChild className="mt-4">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
            className
          )}
          {...props}
        >
          <div
            className="text-sm font-medium leading-none"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const programs = [
  {
    title: "Early Childhood Development",
    href: "/programs/early-childhood",
    description:
      "Building strong foundations for lifelong learning and development.",
  },
  {
    title: "Health & Wellness",
    href: "/programs/health-wellness",
    description:
      "Promoting healthy lifestyles and well-being in our community.",
  },
  {
    title: "Youth Leadership",
    href: "/programs/youth-leadership",
    description: "Empowering the next generation of community leaders.",
  },
];
