import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ContactReferralNotice } from "@/components/ui/ContactReferralNotice";
import { IllustrationFrame } from "@/components/ui/IllustrationFrame";
import { Section } from "@/components/ui/Section";
import { PageCtaBand } from "@/components/pages/PageCtaBand";
import { PageHero } from "@/components/pages/PageHero";
import { FlipTeamCard } from "@/components/team/FlipTeamCard";
import type {
  PageAside,
  PageContent,
  PageIllustration,
  PageSection,
} from "@/content/pages";
import type { TeamMember } from "@/content/team";

type StructuredContentPageProps = {
  page: PageContent;
  aside?: PageAside;
  afterSections?: ReactNode;
  stepNumbers?: boolean;
};

const routeThemeGroups = {
  contact: new Set(["contact", "locatie"]),
  forWho: new Set([
    "voorWie",
    "voorWieKinderen",
    "voorWieJongeren",
    "voorWieOuders",
    "voorWieScholenVerwijzers",
  ]),
  help: new Set([
    "hulpaanbod",
    "speltherapie",
    "kindertherapie",
    "jongerenbegeleiding",
    "ouderbegeleiding",
    "vaktherapieCreatieveTherapie",
    "psycholoogPedagoogBegeleiding",
    "watIsEmdr",
    "watIsAct",
    "watIsCgt",
  ]),
  practical: new Set([
    "praktischeInformatie",
    "praktischeAanmelden",
    "praktischeWachttijd",
    "praktischeTarievenVergoedingen",
    "praktischePrivacy",
    "praktischeAlgemeen",
    "praktischeFaq",
  ]),
  work: new Set(["werkwijze"]),
};

function pageThemeClass(routeKey: PageContent["routeKey"]) {
  if (routeThemeGroups.forWho.has(routeKey)) {
    return "page-theme-for-who";
  }
  if (routeThemeGroups.help.has(routeKey)) {
    return "page-theme-help";
  }
  if (routeThemeGroups.work.has(routeKey)) {
    return "page-theme-work";
  }
  if (routeThemeGroups.practical.has(routeKey)) {
    return "page-theme-practical";
  }
  if (routeThemeGroups.contact.has(routeKey)) {
    return "page-theme-contact";
  }

  return "page-theme-practice";
}

function sectionId(section: PageSection) {
  return section.title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-");
}

const toneClasses = {
  coral: "border-accent-coral/45 bg-accent-coral-soft",
  neutral: "border-border-soft bg-card",
  turquoise: "border-brand-green/45 bg-brand-green-soft",
  blue: "border-accent-blue bg-accent-blue-soft",
};

function SectionIllustration({
  illustration,
  variant = "default",
}: {
  illustration: PageIllustration;
  variant?: "default" | "timeline";
}) {
  const frameClass =
    variant === "timeline"
      ? "section-illustration section-illustration--timeline mt-5 h-32 w-40 max-w-full self-center sm:h-36 sm:w-48"
      : "section-illustration mt-5 aspect-[4/3]";
  const imageClass =
    variant === "timeline"
      ? "object-contain p-3 sm:p-4"
      : "object-contain p-4 sm:p-5";

  return (
    <IllustrationFrame
      alt={illustration.alt}
      className={`${frameClass} ${toneClasses[illustration.tone ?? "neutral"]}`}
      imageClassName={imageClass}
      motion={variant === "timeline" ? undefined : "up"}
      sizes="(min-width: 768px) 44vw, 100vw"
      src={illustration.src}
    />
  );
}

function SectionBody({ section }: { section: PageSection }) {
  return (
    <div className="mt-4 space-y-3">
      {section.body.map((paragraph) => (
        <p key={paragraph} className="text-body">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function SectionLinks({ section }: { section: PageSection }) {
  if (!section.links) {
    return null;
  }
  const hasContactLink = section.links.some((link) => link.href === "/contact");

  return (
    <>
      {hasContactLink ? (
        <ContactReferralNotice className="mt-auto pt-5" compact />
      ) : null}
      <nav
        aria-label={`Vervolglinks bij ${section.title}`}
        className={`${hasContactLink ? "mt-3" : "mt-auto pt-5"} flex flex-col gap-2 sm:flex-row sm:flex-wrap`}
      >
        {section.links.map((link) => (
          <Button key={link.href} href={link.href} variant="ghost">
            {link.label}
          </Button>
        ))}
      </nav>
    </>
  );
}

function PageAnchorBand({
  navSections,
  page,
}: {
  navSections: PageSection[];
  page: PageContent;
}) {
  return (
    <section className="page-anchor-band">
      <Container className="grid gap-5 py-5 sm:py-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <p className="max-w-xl text-support">{page.description}</p>
        <nav
          aria-label={`Inhoud van ${page.title}`}
          className="flex flex-wrap gap-2 lg:justify-end"
        >
          {navSections.map((section) => (
            <Link
              key={section.title}
              href={`#${sectionId(section)}`}
              className="compact-link-card inline-flex min-h-11 max-w-full items-center rounded-pill border border-border-soft bg-card/70 px-4 py-2 text-sm font-semibold leading-snug text-foreground shadow-card transition hover:border-brand-green hover:bg-brand-green-soft active:bg-accent-blue-soft"
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}

function PageVisualAccent({ page }: { page: PageContent }) {
  if (!page.illustration) {
    return null;
  }

  return (
    <IllustrationFrame
      alt={page.illustration.alt}
      className={`content-visual-accent aspect-[4/3] ${toneClasses[page.illustration.tone ?? "neutral"]}`}
      imageClassName="object-contain p-4 sm:p-6"
      motion="up"
      sizes="(min-width: 1024px) 28rem, 100vw"
      src={page.illustration.src}
    />
  );
}

function ContentCard({
  index,
  section,
  stepNumbers,
  variant = "default",
}: {
  index: number;
  section: PageSection;
  stepNumbers?: boolean;
  variant?: "default" | "highlight" | "compact" | "timeline";
}) {
  const variantClass =
    variant === "highlight"
      ? "content-card content-card--highlight md:col-span-2"
      : variant === "compact"
        ? "content-card content-card--compact"
        : variant === "timeline"
          ? "content-card content-card--timeline"
          : "content-card";

  return (
    <Card
      id={sectionId(section)}
      className={`flex w-full min-w-0 scroll-mt-32 flex-col ${variantClass}`}
    >
      {stepNumbers ? (
        <span className="step-number-marker">
          {index + 1}
        </span>
      ) : null}
      <h2 className={stepNumbers ? "mt-5 text-2xl" : "text-2xl"}>
        {section.title}
      </h2>
      <SectionBody section={section} />
      {section.illustration ? (
        <SectionIllustration
          illustration={section.illustration}
          variant={variant === "timeline" ? "timeline" : "default"}
        />
      ) : null}
      <SectionLinks section={section} />
    </Card>
  );
}

function FeaturedSection({
  section,
  therapists = [],
}: {
  section: PageSection;
  therapists?: TeamMember[];
}) {
  return (
    <Section className="featured-rhythm-section" variant="white">
        <Container>
          <div
            id={sectionId(section)}
            className="featured-panel scroll-mt-32 overflow-hidden rounded-medium border border-border-soft bg-card/70 shadow-soft"
          >
          <div className="p-5 sm:p-8 lg:p-10">
            <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Praktijkteam
                </span>
                <h2 className="mt-3 max-w-2xl text-heading">{section.title}</h2>
              </div>
              <div className="max-w-3xl lg:justify-self-end">
                <SectionBody section={section} />
              </div>
            </div>

            {therapists.length > 0 ? (
              <div className="mt-7 grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8 lg:gap-5">
                {therapists.map((therapist) => (
                  <FlipTeamCard
                    key={therapist.name}
                    name={therapist.name}
                    role={therapist.role}
                    summary={therapist.summary}
                    backText={therapist.backText}
                    image={therapist.image}
                    imageAlt={therapist.imageAlt}
                    initials={therapist.initials}
                    tags={therapist.tags}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                Informatie
              </span>
              <div className="max-w-3xl">
                <SectionBody section={section} />
              </div>
              </div>
            )}

            <SectionLinks section={section} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function TimelineSections({
  page,
  sections,
}: {
  page: PageContent;
  sections: PageSection[];
}) {
  return (
    <Section className="content-rhythm-section content-rhythm-section--timeline" variant="surface">
      <Container>
        <div className="content-rhythm-heading">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Stap voor stap
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl">Een helder traject</h2>
          <p className="mt-3 max-w-3xl text-body">{page.description}</p>
        </div>
        <div className="timeline-layout">
          {sections.map((section, index) => (
            <ContentCard
              key={section.title}
              index={index}
              section={section}
              stepNumbers
              variant="timeline"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ShortNarrativeSections({
  page,
  sections,
}: {
  page: PageContent;
  sections: PageSection[];
}) {
  const [firstSection, ...restSections] = sections;

  if (!firstSection) {
    return null;
  }

  return (
    <Section className="content-rhythm-section content-rhythm-section--split" variant="surface">
      <Container>
        <div className="content-split-layout">
          <ContentCard
            index={0}
            section={firstSection}
            variant="highlight"
          />
          <aside className="content-side-rail" aria-label={`Verdieping bij ${page.title}`}>
            <PageVisualAccent page={page} />
            {restSections.map((section, index) => (
              <ContentCard
                key={section.title}
                index={index + 1}
                section={section}
                variant="compact"
              />
            ))}
          </aside>
        </div>
      </Container>
    </Section>
  );
}

function MosaicSections({
  page,
  sections,
}: {
  page: PageContent;
  sections: PageSection[];
}) {
  return (
    <Section className="content-rhythm-section content-rhythm-section--mosaic" variant="surface">
      <Container>
        {page.featuredSection ? (
          <div className="content-rhythm-heading">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Deelonderwerpen
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl">Meer over Uniqara</h2>
          </div>
        ) : (
          <div className="content-rhythm-heading content-rhythm-heading--wide">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Verdieping
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl">Kies wat nu past</h2>
            <p className="mt-3 max-w-3xl text-body">{page.description}</p>
          </div>
        )}
        <div
          className={`content-mosaic-grid grid min-w-0 grid-cols-1 gap-3 sm:gap-4 lg:gap-5 ${
            page.featuredSection ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {sections.map((section, index) => (
            <ContentCard
              key={section.title}
              index={index}
              section={section}
              variant={index === 0 && sections.length > 3 ? "highlight" : "default"}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PageContentSections({
  page,
  stepNumbers,
}: {
  page: PageContent;
  stepNumbers?: boolean;
}) {
  if (stepNumbers) {
    return <TimelineSections page={page} sections={page.sections} />;
  }

  if (!page.featuredSection && page.sections.length <= 2) {
    return <ShortNarrativeSections page={page} sections={page.sections} />;
  }

  return <MosaicSections page={page} sections={page.sections} />;
}

export function StructuredContentPage({
  afterSections,
  page,
  aside,
  stepNumbers = false,
}: StructuredContentPageProps) {
  const navSections = page.featuredSection
    ? [page.featuredSection, ...page.sections]
    : page.sections;
  const themeClass = pageThemeClass(page.routeKey);

  return (
    <main className={`page-shell ${themeClass}`}>
      <PageHero
        aside={aside}
        eyebrow={page.heroEyebrow}
        heroBannerVariant={page.heroBannerVariant}
        heroVariant={page.heroVariant}
        illustration={page.illustration}
        intro={page.intro}
        title={page.title}
      />

      <PageAnchorBand navSections={navSections} page={page} />

      {page.featuredSection ? (
        <FeaturedSection
          section={page.featuredSection}
          therapists={page.featuredTeamMembers}
        />
      ) : null}

      <PageContentSections page={page} stepNumbers={stepNumbers} />

      {afterSections}

      <PageCtaBand
        eyebrow={page.ctaBand?.eyebrow}
        intro={page.ctaBand?.intro}
        links={page.ctas}
        sectionClassName={themeClass}
        title={page.ctaBand?.title}
      />
    </main>
  );
}
