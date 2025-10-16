import { useMemo, useState } from "react";
import { menuSections } from "@/data/menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useCartStore from "@/store/cart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Flame } from "lucide-react";

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState<number | "all">("all");
  const addToCart = useCartStore((state) => state.addItem);

  const filteredSections = useMemo(() => {
    return menuSections
      .filter((section) =>
        activeSectionId === "all" ? true : section.id === activeSectionId
      )
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeSectionId, query]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-16 md:px-8">
      <header className="space-y-4 text-center">
        <Badge variant="outline" className="border-accent/40 text-accent">
          <Flame className="mr-2 h-4 w-4" /> Crafted with love
        </Badge>
        <h1 className="font-display text-4xl font-semibold">
          Our menu celebrates the traditions of Afghanistan
        </h1>
        <p className="mx-auto max-w-2xl text-muted">
          Explore charcoal-grilled kebabs, aromatic rice dishes, hearty stews and
          vegetarian favourites. Tap an item to add it to your cart.
        </p>
      </header>

      <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <Input
            placeholder="Search for kabuli, kebab, mantu..."
            className="pl-12"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            aria-pressed={activeSectionId === "all"}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
              activeSectionId === "all"
                ? "border-accent bg-accent/20 text-accent"
                : "border-white/20 text-muted hover:border-accent hover:text-foreground"
            }`}
            onClick={() => setActiveSectionId("all")}
          >
            All dishes
          </button>
          {menuSections.map((section) => (
            <button
              key={section.id}
              type="button"
              aria-pressed={activeSectionId === section.id}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                activeSectionId === section.id
                  ? "border-accent bg-accent/20 text-accent"
                  : "border-white/20 text-muted hover:border-accent hover:text-foreground"
              }`}
              onClick={() => setActiveSectionId(section.id)}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 space-y-16">
        {filteredSections.map((section) => (
          <section key={section.id} className="space-y-6">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold text-accent">
                  {section.name}
                </h2>
                {section.description && (
                  <p className="mt-1 max-w-2xl text-sm text-muted">
                    {section.description}
                  </p>
                )}
              </div>
              <Badge variant="outline" className="border-white/20 text-muted">
                {section.items.length} dishes
              </Badge>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {section.items.map((item) => (
                <Card key={item.id} className="bg-white/5">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {item.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted">
                      {item.description || "Traditional Afghan speciality."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-accent">
                        £{item.price.toFixed(2)}
                      </p>
                      {item.comesWith && (
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                          Comes with {item.comesWith}
                        </p>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="rounded-full"
                      onClick={() => addToCart(item)}
                    >
                      Add to cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {filteredSections.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center text-muted">
            No dishes match your search at the moment. Try another keyword.
          </div>
        )}
      </div>
    </main>
  );
}
