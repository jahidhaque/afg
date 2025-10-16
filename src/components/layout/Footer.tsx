import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#080705]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold text-accent">
            Afghan Grill House
          </h3>
          <p className="text-sm text-muted">
            Authentic Afghan takeaway and restaurant in the heart of Newcastle
            upon Tyne. Freshly grilled meats, fragrant rice dishes and vibrant
            salads crafted with love.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold uppercase tracking-[0.3em] text-sm text-muted">
            Visit Us
          </h4>
          <div className="flex items-start space-x-3 text-sm text-muted">
            <MapPin className="mt-0.5 h-5 w-5 text-accent" />
            <span>121 Stanton St, Newcastle upon Tyne NE4 5LH</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-muted">
            <Phone className="h-5 w-5 text-accent" />
            <a href="tel:01912734466" className="hover:text-foreground">
              0191 273 4466
            </a>
          </div>
          <div className="flex items-center space-x-3 text-sm text-muted">
            <Mail className="h-5 w-5 text-accent" />
            <a href="mailto:hello@afghangrillhouse.co.uk" className="hover:text-foreground">
              hello@afghangrillhouse.co.uk
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold uppercase tracking-[0.3em] text-sm text-muted">
            Opening Hours
          </h4>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex justify-between">
              <span>Monday - Thursday</span>
              <span>12:00 - 22:00</span>
            </li>
            <li className="flex justify-between">
              <span>Friday - Saturday</span>
              <span>12:00 - 23:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>13:00 - 21:00</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Afghan Grill House. All rights reserved.
      </div>
    </footer>
  );
}
