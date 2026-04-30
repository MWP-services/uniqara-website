import { AudienceSection } from "@/components/sections/home/AudienceSection";
import { ContactCTASection } from "@/components/sections/home/ContactCTASection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { LocationSection } from "@/components/sections/home/LocationSection";
import { PracticalInfoSection } from "@/components/sections/home/PracticalInfoSection";
import { ServicesPreviewSection } from "@/components/sections/home/ServicesPreviewSection";
import { StepsSection } from "@/components/sections/home/StepsSection";
import { contact } from "@/content/contact";
import { home } from "@/content/home";
import { pages } from "@/content/pages";
import { routes } from "@/content/routes";
import { services } from "@/content/services";
import { brand } from "@/content/site";

export default function Home() {
  const audienceSections = pages.voorWie.sections.slice(0, 4);
  const workSteps = pages.werkwijze.sections.slice(0, 4);
  const practicalItems = pages.praktischeInformatie.sections.slice(0, 4);

  return (
    <main className="page-shell">
      <HeroSection hero={home.hero} />

      <IntroSection
        ctaHref={routes.overUniqara.href}
        ctaLabel={home.intro.ctaLabel}
        intro={pages.overUniqara.intro}
        title={pages.overUniqara.title}
        valueCardText={home.intro.valueCardText}
        values={brand.values}
      />

      <AudienceSection
        ctaHref={routes.voorWie.href}
        ctaLabel={home.audience.ctaLabel}
        intro={pages.voorWie.intro}
        sections={audienceSections}
        title={pages.voorWie.title}
      />

      <ServicesPreviewSection
        helpQuestions={services.helpQuestions}
        intro={pages.hulpvragen.intro}
        primaryCtaHref={routes.hulpvragen.href}
        primaryCtaLabel={home.servicesPreview.primaryCtaLabel}
        secondaryCtaHref={routes.werkwijze.href}
        secondaryCtaLabel={home.servicesPreview.secondaryCtaLabel}
        services={services.items}
        title={home.servicesPreview.title}
      />

      <StepsSection
        ctaHref={routes.werkwijze.href}
        ctaLabel={home.approach.ctaLabel}
        intro={pages.werkwijze.intro}
        steps={workSteps}
        title={home.approach.heading}
      />

      <LocationSection
        ctaHref={routes.locatie.href}
        ctaLabel={home.location.ctaLabel}
        imageLabel={home.hero.imagePlaceholderLabel}
        imageText={home.hero.imagePlaceholderText}
        intro={home.location.intro}
        locationDescription={contact.locationDescription}
        title={home.location.heading}
      />

      <PracticalInfoSection
        ctaHref={routes.praktischeInformatie.href}
        ctaLabel={home.practicalInfo.ctaLabel}
        intro={pages.praktischeInformatie.intro}
        items={practicalItems}
        title={pages.praktischeInformatie.title}
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
