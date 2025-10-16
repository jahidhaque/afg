const testimonials = [
  {
    name: "Sana K.",
    quote:
      "The flavours transported me straight back to Kabul. The qabili pilau and mantu are absolute stand-outs.",
  },
  {
    name: "David R.",
    quote:
      "Easily the best kebabs in Newcastle. Tender meat, smoky from the grill, and generous portions.",
  },
  {
    name: "Aisha M.",
    quote:
      "Friendly staff, beautiful interiors and food that feels like a warm hug. Highly recommend the family platters!",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4 md:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-muted shadow"
          >
            <p className="italic">“{testimonial.quote}”</p>
            <footer className="mt-4 font-semibold text-foreground">
              — {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
