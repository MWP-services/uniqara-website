import Link from "next/link";
import { contact } from "@/content/contact";
import { navigation } from "@/content/navigation";
import { brand } from "@/content/site";
import { LogoPlaceholder } from "./LogoPlaceholder";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-surface">
      <div className="section-inner grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <LogoPlaceholder placeholderKey="LOGO_FOOTER" />
          <p className="text-support mt-4 max-w-sm">
            {brand.shortDescription}
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-brand-green">Snel naar</h2>
          <ul className="text-support mt-4 space-y-2">
            {navigation.footer.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-brand-green" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="contact">
          <h2 className="text-base font-semibold text-brand-green">
            {contact.heading}
          </h2>
          <p className="text-support mt-4">
            {contact.intro}
          </p>
          <p className="text-support mt-3">{contact.email}</p>
          <p className="text-support">{contact.phone}</p>
          <p className="text-support">{contact.openingHours}</p>
          <Link
            href={contact.cta.href}
            className="mt-4 inline-flex rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-deep"
          >
            {contact.cta.label}
          </Link>
        </div>
      </div>
    </footer>
  );
}
