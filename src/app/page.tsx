import { ContactCTASection } from "@/components/sections/home/ContactCTASection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { LocationSection } from "@/components/sections/home/LocationSection";
import { RouteOverviewSection } from "@/components/sections/home/RouteOverviewSection";
import { contact } from "@/content/contact";
import { home } from "@/content/home";
import { routes } from "@/content/routes";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.home;

export default function Home() {
  return (
    <main className="page-shell">
      <HeroSection hero={home.hero} />

      <RouteOverviewSection
        intro={home.routeOverview.intro}
        items={home.routeOverview.items}
        title={home.routeOverview.title}
      />

      <LocationSection
        ctaHref={routes.locatie.href}
        ctaLabel={home.location.ctaLabel}
        imageLabel={home.location.cardLabel}
        imageText={contact.address.name}
        intro={home.location.intro}
        locationDescription={contact.locationDescription}
        secondaryCtaHref={routes.praktischeAlgemeen.href}
        secondaryCtaLabel={home.location.secondaryCtaLabel}
        title={home.location.heading}
      />

      <ContactCTASection
        intro={home.contactCta.intro}
        primaryCtaHref={routes.contact.href}
        primaryCtaLabel={home.contactCta.primaryCtaLabel}
        secondaryCtaHref={routes.praktischeInformatie.href}
        secondaryCtaLabel={home.contactCta.secondaryCtaLabel}
        title={home.contactCta.title}
      />
    </main>
  );
}
