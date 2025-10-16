const dishes = [
  {
    name: "Qabili Pilau",
    description: "Signature Afghan rice crowned with lamb, caramelised carrots and raisins.",
    image: new URL("../../../resources/qabili-pilau.JPG", import.meta.url).href,
  },
  {
    name: "Charcoal Mix Grill",
    description: "Juicy lamb chops, kofta kebab and chicken tikka grilled over open flames.",
    image: new URL("../../../resources/IMG_1335.JPG", import.meta.url).href,
  },
  {
    name: "Tandoori Chicken",
    description: "Free-range chicken marinated overnight in saffron, garlic and yoghurt.",
    image: new URL("../../../resources/tandoori-chicken-kebab.JPG", import.meta.url).href,
  },
];

export function FeaturedDishes() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-3">
        {dishes.map((dish) => (
          <article
            key={dish.name}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-display text-xl font-semibold">{dish.name}</h3>
              <p className="text-sm text-muted">{dish.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
