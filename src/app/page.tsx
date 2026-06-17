import { ContactCTASection } from "@/components/sections/home/ContactCTASection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { RouteOverviewSection } from "@/components/sections/home/RouteOverviewSection";
import { home } from "@/content/home";
import { routes } from "@/content/routes";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.home;

export default function Home() {
  return (
    <main className="page-shell page-theme-home">
      <HeroSection hero={home.hero} />

      <RouteOverviewSection
        intro={home.routeOverview.intro}
        items={home.routeOverview.items}
        title={home.routeOverview.title}
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
