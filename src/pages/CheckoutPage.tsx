import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useCartStore, { selectCartTotal } from "@/store/cart";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Timer } from "lucide-react";

const checkoutSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(6, "Enter your contact number."),
  address: z.string().min(10, "Enter delivery address."),
  notes: z.string().optional(),
});

type CheckoutValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore(selectCartTotal);
  const clearCart = useCartStore((state) => state.clear);
  const form = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      notes: "",
    },
  });

  const serviceFee = useMemo(() => (total > 0 ? 2.5 : 0), [total]);
  const grandTotal = total + serviceFee;

  const onSubmit = (values: CheckoutValues) => {
    console.table(values);
    alert("Thank you for your order! We'll confirm shortly.");
    clearCart();
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-16 md:px-8">
      <header className="space-y-4">
        <Badge variant="outline" className="border-accent/40 text-accent">
          <Truck className="mr-2 h-4 w-4" /> Secure checkout
        </Badge>
        <h1 className="font-display text-4xl font-semibold">Checkout</h1>
        <p className="max-w-2xl text-muted">
          Provide your details and we'll take care of the rest. Our team will call to confirm your order and estimated delivery time.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="bg-white/5">
          <CardHeader>
            <CardTitle>Delivery details</CardTitle>
            <CardDescription>
              We deliver across Newcastle upon Tyne within 5 miles of NE4 5LH.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted">
                  Full name
                </label>
                <Input placeholder="Your name" {...form.register("name")} />
                {form.formState.errors.name && (
                  <p className="mt-2 text-xs text-red-400">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted">
                  Contact number
                </label>
                <Input placeholder="0191 273 4466" {...form.register("phone")} />
                {form.formState.errors.phone && (
                  <p className="mt-2 text-xs text-red-400">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted">
                  Delivery address
                </label>
                <Textarea rows={4} placeholder="Door number, street, postcode" {...form.register("address")} />
                {form.formState.errors.address && (
                  <p className="mt-2 text-xs text-red-400">
                    {form.formState.errors.address.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted">
                  Notes (optional)
                </label>
                <Textarea rows={3} placeholder="Tell us about allergies or delivery instructions" {...form.register("notes")} />
              </div>
              <Button type="submit" className="w-full rounded-full" disabled={items.length === 0}>
                Place order
              </Button>
            </form>
          </CardContent>
        </Card>

        <aside className="space-y-6">
          <Card className="bg-white/5">
            <CardHeader>
              <CardTitle>Your order</CardTitle>
              <CardDescription>
                Review your selection before confirming.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.length === 0 ? (
                <p className="text-sm text-muted">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-start justify-between gap-4 text-sm">
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">£{(item.price * item.quantity).toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              )}
              <div className="space-y-2 border-t border-white/10 pt-4 text-sm">
                <div className="flex justify-between text-muted">
                  <span>Subtotal</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Service fee</span>
                  <span>£{serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-foreground">
                  <span>Total</span>
                  <span>£{grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#111]">
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Timer className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Estimated delivery</p>
                  <p className="text-xs text-muted">45 - 55 minutes within NE4</p>
                </div>
              </div>
              <p className="text-xs text-muted">
                We will contact you if your address is outside our delivery radius.
              </p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
