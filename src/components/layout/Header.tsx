import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CartSheet } from "./CartSheet";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Contact" },
  { to: "/checkout", label: "Checkout" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0c0b09]/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <NavLink to="/" className="flex items-center space-x-3 text-foreground">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-background shadow-glow">
            AGH
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold uppercase tracking-wide">
              Afghan Grill House
            </p>
            <p className="text-xs text-muted">Taste the tradition</p>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium uppercase tracking-[0.2em] transition",
                  isActive ? "text-accent" : "text-muted hover:text-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <Button asChild size="sm" className="hidden rounded-full md:inline-flex">
            <a href="tel:01912734466">Call 0191 273 4466</a>
          </Button>
          <CartSheet />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#111]">
        <nav className="mt-12 space-y-6 text-lg">
          {links.map((link) => (
            <SheetClose asChild key={link.to}>
              <NavLink to={link.to} className="block font-medium">
                {link.label}
              </NavLink>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
