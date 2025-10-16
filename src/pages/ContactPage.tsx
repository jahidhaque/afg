import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(6, "Enter your contact number."),
  message: z.string().min(10, "Let us know how we can help."),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    console.table(values);
    form.reset();
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-16 md:px-8">
      <header className="space-y-4 text-center">
        <h1 className="font-display text-4xl font-semibold">Let's plan your next gathering</h1>
        <p className="mx-auto max-w-2xl text-muted">
          Book a table, arrange a catering order or ask us anything about our menu.
          We would love to hear from you.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="bg-white/5">
          <CardHeader>
            <CardTitle className="text-2xl">Send us a message</CardTitle>
            <CardDescription>
              Share your details and we will get in touch with you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted">
                  Name
                </label>
                <Input placeholder="Your full name" {...form.register("name")} />
                {form.formState.errors.name && (
                  <p className="mt-2 text-xs text-red-400">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted">
                    Email
                  </label>
                  <Input placeholder="you@example.com" {...form.register("email")} />
                  {form.formState.errors.email && (
                    <p className="mt-2 text-xs text-red-400">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted">
                    Phone
                  </label>
                  <Input placeholder="0191 273 4466" {...form.register("phone")} />
                  {form.formState.errors.phone && (
                    <p className="mt-2 text-xs text-red-400">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted">
                  Message
                </label>
                <Textarea rows={5} placeholder="Share your request" {...form.register("message")} />
                {form.formState.errors.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="rounded-full">
                Send enquiry
              </Button>
            </form>
          </CardContent>
        </Card>

        <aside className="space-y-6 rounded-3xl border border-white/10 bg-[#111] p-8">
          <h2 className="font-display text-2xl text-accent">Visit us</h2>
          <div className="space-y-4 text-sm text-muted">
            <p>
              Afghan Grill House<br />
              121 Stanton St,<br />
              Newcastle upon Tyne NE4 5LH
            </p>
            <a href="https://maps.google.com/?q=Afghan+Grill+House+NE4+5LH" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent">
              <MapPin className="h-4 w-4" />
              View on Google Maps
            </a>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:01912734466" className="hover:text-foreground">
                0191 273 4466
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:hello@afghangrillhouse.co.uk" className="hover:text-foreground">
                hello@afghangrillhouse.co.uk
              </a>
            </div>
            <div>
              <h3 className="font-semibold uppercase tracking-[0.3em] text-xs text-muted">
                Opening Hours
              </h3>
              <ul className="mt-2 space-y-2 text-xs text-muted">
                <li>Mon - Thu: 12:00 - 22:00</li>
                <li>Fri - Sat: 12:00 - 23:00</li>
                <li>Sun: 13:00 - 21:00</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
