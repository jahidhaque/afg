import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import useCartStore, {
  selectCartCount,
  selectCartTotal,
} from "@/store/cart";
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CartSheet() {
  const items = useCartStore((state) => state.items);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const removeItem = useCartStore((state) => state.removeItem);
  const itemCount = useCartStore(selectCartCount);
  const total = useCartStore(selectCartTotal);
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent px-1 text-xs font-semibold text-background">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            A taste of Kabul at your doorstep. Review your selection below.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 space-y-6 overflow-y-auto pr-2">
          {items.length === 0 ? (
            <p className="text-sm text-muted">Your cart is currently empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-4 rounded-2xl bg-white/5 p-4 shadow">
                <div>
                  <h4 className="font-semibold leading-tight">{item.name}</h4>
                  {item.description && (
                    <p className="mt-1 text-sm text-muted">
                      {item.description}
                    </p>
                  )}
                  <p className="mt-2 text-sm font-medium text-accent">
                    £{item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-col items-end space-y-3">
                  <div className="flex items-center space-x-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Decrease ${item.name}`}
                      onClick={() => decrement(item.id)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="min-w-[28px] text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Increase ${item.name}`}
                      onClick={() => increment(item.id)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-xs text-red-400 hover:text-red-300"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="mr-1 h-3.5 w-3.5" /> Remove
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-6 space-y-4 rounded-2xl bg-white/5 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <span className="font-semibold">£{total.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted">Estimated time</span>
            <span className="font-semibold">45 - 55 mins</span>
          </div>
          <SheetClose asChild>
            <Button
              disabled={items.length === 0}
              className="w-full"
              variant="default"
              onClick={() => navigate("/checkout")}
            >
              Review & Checkout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
