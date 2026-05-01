import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";
import { contact } from "@/content/contact";
import { navigation } from "@/content/navigation";
import { placeholders } from "@/content/placeholders";
import { brand } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-surface">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_1fr] lg:gap-10">
          <section aria-label="Praktijkintro">
            <LogoPlaceholder placeholderKey="LOGO_FOOTER" />
            <p className="text-support mt-5 max-w-sm">
              {brand.shortDescription}
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-green">
              Rustig, zorgvuldig en persoonlijk.
            </p>
          </section>

          <nav aria-label="Footer navigatie">
            <h2 className="text-base font-semibold text-brand-green">
              Navigatie
            </h2>
            <ul className="text-support mt-4 grid gap-2">
              {navigation.footer.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex min-h-10 items-center hover:text-brand-green"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact">
            <h2
              id="footer-contact"
              className="text-base font-semibold text-brand-green"
            >
              Contact
            </h2>
            <div className="text-support mt-4 space-y-1">
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.openingHours}</p>
            </div>
            <Button href={contact.cta.href} className="mt-4" variant="secondary">
              {contact.cta.label}
            </Button>
          </section>

          <section aria-labelledby="footer-location">
            <h2
              id="footer-location"
              className="text-base font-semibold text-brand-green"
            >
              Locatie
            </h2>
            <div className="text-support mt-4 space-y-1">
              <p>{contact.address.name}</p>
              <p>{contact.address.street}</p>
              <p>{contact.address.postalCodeCity}</p>
              <p>{contact.routeNote}</p>
            </div>
          </section>
        </div>

        <div className="mt-10 border-t border-border-soft pt-6">
          <p className="text-support">{placeholders.COPYRIGHT_INFO.uiText}</p>
        </div>
      </Container>
    </footer>
  );
}
