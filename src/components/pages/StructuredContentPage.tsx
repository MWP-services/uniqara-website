import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
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

function sectionId(section: PageSection) {
  return section.title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-");
}

const toneClasses = {
  coral: "border-accent-coral/45 bg-accent-coral-soft",
  neutral: "border-border-soft bg-card",
  turquoise: "border-brand-green/35 bg-brand-green-soft",
  yellow: "border-accent-yellow/70 bg-accent-yellow-soft",
};

function SectionIllustration({
  illustration,
}: {
  illustration: PageIllustration;
}) {
  return (
    <IllustrationFrame
      alt={illustration.alt}
      className={`mt-5 aspect-[4/3] ${toneClasses[illustration.tone ?? "neutral"]}`}
      imageClassName="object-contain p-4 sm:p-5"
      motion="up"
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

  return (
    <nav
      aria-label={`Vervolglinks bij ${section.title}`}
      className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row sm:flex-wrap"
    >
      {section.links.map((link) => (
        <Button key={link.href} href={link.href} variant="ghost">
          {link.label}
        </Button>
      ))}
    </nav>
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
    <Section variant="white">
      <Container>
        <div
          id={sectionId(section)}
          className="scroll-mt-32 overflow-hidden rounded-medium border border-brand-green/25 bg-card shadow-soft"
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

export function StructuredContentPage({
  afterSections,
  page,
  aside,
  stepNumbers = false,
}: StructuredContentPageProps) {
  const navSections = page.featuredSection
    ? [page.featuredSection, ...page.sections]
    : page.sections;

  return (
    <main className="page-shell">
      <PageHero
        aside={aside}
        eyebrow={page.heroEyebrow}
        heroBannerVariant={page.heroBannerVariant}
        heroVariant={page.heroVariant}
        illustration={page.illustration}
        intro={page.intro}
        title={page.title}
      />

      <section className="section-surface py-4 sm:py-5">
        <Container>
          <nav
            aria-label={`Inhoud van ${page.title}`}
            className="flex flex-wrap gap-2"
          >
            {navSections.map((section) => (
              <Link
                key={section.title}
                href={`#${sectionId(section)}`}
                className="inline-flex min-h-11 max-w-full items-center rounded-pill border border-border-soft bg-card px-4 py-2 text-sm font-semibold leading-snug text-foreground transition hover:border-brand-green hover:bg-brand-green-soft active:bg-accent-yellow-soft"
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      {page.featuredSection ? (
        <FeaturedSection
          section={page.featuredSection}
          therapists={page.featuredTeamMembers}
        />
      ) : null}

      <Section variant="surface">
        <Container>
          {page.featuredSection ? (
            <div className="mb-5 sm:mb-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                Deelonderwerpen
              </span>
              <h2 className="mt-2 text-2xl">Meer over Uniqara</h2>
            </div>
          ) : null}
          <div
            className={`grid min-w-0 grid-cols-1 gap-3 sm:gap-4 lg:gap-5 ${
              page.featuredSection ? "md:grid-cols-3" : "md:grid-cols-2"
            }`}
          >
            {page.sections.map((section, index) => (
              <Card
                key={section.title}
                id={sectionId(section)}
                className="flex w-full min-w-0 scroll-mt-32 flex-col"
              >
                {stepNumbers ? (
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-pill bg-accent-yellow-soft text-sm font-semibold text-foreground">
                    {index + 1}
                  </span>
                ) : null}
                <h2 className={stepNumbers ? "mt-5 text-2xl" : "text-2xl"}>
                  {section.title}
                </h2>
                <SectionBody section={section} />
                {section.illustration ? (
                  <SectionIllustration illustration={section.illustration} />
                ) : null}
                <SectionLinks section={section} />
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {afterSections}

      <PageCtaBand
        eyebrow={page.ctaBand?.eyebrow}
        intro={page.ctaBand?.intro}
        links={page.ctas}
        title={page.ctaBand?.title}
      />
    </main>
  );
}
