import { ContactCTASection } from "@/components/sections/home/ContactCTASection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { RouteOverviewSection } from "@/components/sections/home/RouteOverviewSection";
import { home } from "@/content/home";
import { pages } from "@/content/pages";
import { routes } from "@/content/routes";
import { pageMetadata } from "@/content/seo";
import { brand } from "@/content/site";

export const metadata = pageMetadata.home;

export default function Home() {
  return (
    <main className="page-shell">
      <HeroSection hero={home.hero} />

      <IntroSection
        ctaHref={routes.wieZijnWij.href}
        ctaLabel={home.intro.ctaLabel}
        intro={pages.wieZijnWij.intro}
        title={pages.wieZijnWij.title}
        valueCardText={home.intro.valueCardText}
        values={brand.values}
      />

      <RouteOverviewSection
        intro={home.routeOverview.intro}
        items={home.routeOverview.items}
        title={home.routeOverview.title}
      />

      <ContactCTASection
        intro={pages.contact.intro}
        primaryCtaHref={routes.contact.href}
        primaryCtaLabel={home.contactCta.primaryCtaLabel}
        secondaryCtaHref={routes.praktischeInformatie.href}
        secondaryCtaLabel={home.contactCta.secondaryCtaLabel}
        title={home.contactCta.title}
      />
    </main>
  );
}
