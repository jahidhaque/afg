import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { FeaturedDishes } from "@/components/sections/FeaturedDishes";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <main className="space-y-24 pb-20">
      <Hero />
      <Highlights />
      <FeaturedDishes />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
