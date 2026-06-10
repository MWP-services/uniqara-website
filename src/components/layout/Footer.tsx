import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ErisietsmisgegaanButton } from "@/components/ui/ErisietsmisgegaanButton";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";
import { contact } from "@/content/contact";
import { navigation } from "@/content/navigation";
import { placeholders } from "@/content/placeholders";
import { brand } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer-pastel backdrop-blur">
      <Container className="py-8 sm:py-12">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_1fr] lg:gap-10">
          <section aria-label="Praktijkintro">
            <LogoPlaceholder placeholderKey="LOGO_FOOTER" />
            <p className="text-support mt-5 max-w-sm">
              {brand.shortDescription}
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground">
              {brand.footerShortTagline}
            </p>
          </section>

          <nav aria-label="Footer navigatie">
            <h2 className="text-base font-semibold text-foreground">
              Navigatie
            </h2>
            <ul className="text-support mt-4 grid gap-1.5">
              {navigation.footer.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex min-h-11 items-center hover:text-foreground hover:underline decoration-brand-green decoration-2 underline-offset-4 lg:min-h-9"
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
              className="text-base font-semibold text-foreground"
            >
              Contact
            </h2>
            <div className="text-support mt-4 space-y-1">
              <p>
                <Link
                  className="hover:text-foreground hover:underline decoration-brand-green decoration-2 underline-offset-4"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </Link>
              </p>
              <p>{contact.phone}</p>
              <p>{contact.openingHours}</p>
            </div>
            <Button href={contact.cta.href} className="mt-4" variant="secondary">
              {contact.cta.label}
            </Button>
            <div className="mt-4">
              <ErisietsmisgegaanButton variant="footer" />
            </div>
          </section>

          <section aria-labelledby="footer-location">
            <h2
              id="footer-location"
              className="text-base font-semibold text-foreground"
            >
              Locatie
            </h2>
            <div className="text-support mt-4 space-y-1">
              <p>{contact.address.name}</p>
              <p>{contact.address.street}</p>
              <p>{contact.address.postalCodeCity}</p>
              <p>{contact.routeNote}</p>
            </div>
            <Button
              href={contact.googleMapsUrl}
              icon="route"
              className="mt-4"
              rel="noreferrer"
              target="_blank"
              variant="secondary"
            >
              Bekijk op Google Maps
            </Button>
          </section>
        </div>

        <div className="mt-10 pt-6">
          <p className="text-support">{placeholders.COPYRIGHT_INFO.uiText}</p>
        </div>
      </Container>
    </footer>
  );
}
