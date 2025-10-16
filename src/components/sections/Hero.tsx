import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredSections } from "@/data/menu";
import { Flame, Star } from "lucide-react";
import { NavLink } from "react-router-dom";

const heroImage = new URL("../../../resources/special-platter-for-2.JPG", import.meta.url).href;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Afghan feast platter"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>
      <div className="relative mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col justify-center px-4 py-24 md:px-8">
        <div className="max-w-xl space-y-6">
          <Badge className="bg-accent/20 text-accent">
            <Flame className="mr-2 h-3.5 w-3.5" /> Charcoal-grilled specialities
          </Badge>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Discover the soul of Afghan cuisine in Newcastle upon Tyne.
          </h1>
          <p className="text-lg text-muted">
            From juicy kebabs kissed by charcoal to fragrant qabili pilau, we craft
            every plate with heritage recipes and locally sourced ingredients.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <NavLink to="/menu">Explore the menu</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="tel:01912734466">Order by phone</a>
            </Button>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featuredSections.map((section) => (
            <div key={section.id} className="rounded-3xl bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-accent">
                  {section.name}
                </h3>
                <Star className="h-5 w-5 text-accent" />
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {section.items.slice(0, 3).map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-medium text-foreground">
                      £{item.price.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
