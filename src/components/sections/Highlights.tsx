import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Bike, Leaf } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Handcrafted",
    description: "Slow-marinated meats and handmade breads baked fresh through the day.",
  },
  {
    icon: Bike,
    title: "Swift Delivery",
    description: "From grill to your door in under an hour across Newcastle upon Tyne.",
  },
  {
    icon: Leaf,
    title: "Halal & Fresh",
    description: "Halal certified suppliers and seasonal produce, prepared to order.",
  },
];

export function Highlights() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-4 md:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} className="bg-white/5">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <item.icon className="h-6 w-6" />
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
