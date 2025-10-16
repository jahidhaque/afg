import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="mx-auto mt-24 w-full max-w-5xl overflow-hidden rounded-[3rem] border border-accent/20 bg-gradient-to-r from-accent/20 via-transparent to-transparent px-6 py-16 text-center shadow-glow md:px-16">
      <h2 className="font-display text-3xl font-semibold">
        Ready for an unforgettable Afghan feast?
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
        Book a table for family gatherings or order a takeaway to enjoy our signature dishes in the comfort of your home.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" className="rounded-full">
          <NavLink to="/contact">Reserve a table</NavLink>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <NavLink to="/menu">Start your order</NavLink>
        </Button>
      </div>
    </section>
  );
}
