import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageCtaBand } from "@/components/pages/PageCtaBand";
import { PageHero } from "@/components/pages/PageHero";
import type { PageAside, PageContent, PageSection } from "@/content/pages";

type StructuredContentPageProps = {
  page: PageContent;
  aside?: PageAside;
  stepNumbers?: boolean;
};

function sectionId(section: PageSection) {
  return section.title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-");
}

export function StructuredContentPage({
  page,
  aside,
  stepNumbers = false,
}: StructuredContentPageProps) {
  return (
    <main className="page-shell">
      <PageHero aside={aside} intro={page.intro} title={page.title} />

      <section className="border-b border-border-soft bg-surface py-4 sm:py-5">
        <Container>
          <nav
            aria-label={`Inhoud van ${page.title}`}
            className="flex flex-wrap gap-2"
          >
            {page.sections.map((section) => (
              <Link
                key={section.title}
                href={`#${sectionId(section)}`}
                className="inline-flex min-h-10 items-center rounded-pill border border-border-soft bg-white px-4 py-2 text-sm font-semibold leading-snug text-brand-green transition hover:bg-brand-green-soft active:bg-accent-yellow-soft"
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <Section variant="surface">
        <Container className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {page.sections.map((section, index) => (
            <Card
              key={section.title}
              id={sectionId(section)}
              className="scroll-mt-32"
            >
              {stepNumbers ? (
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-pill bg-accent-yellow-soft text-sm font-semibold text-foreground">
                  {index + 1}
                </span>
              ) : null}
              <h2 className={stepNumbers ? "mt-5 text-2xl" : "text-2xl"}>
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.links ? (
                <nav
                  aria-label={`Vervolglinks bij ${section.title}`}
                  className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap"
                >
                  {section.links.map((link) => (
                    <Button key={link.href} href={link.href} variant="ghost">
                      {link.label}
                    </Button>
                  ))}
                </nav>
              ) : null}
            </Card>
          ))}
        </Container>
      </Section>

      <PageCtaBand links={page.ctas} />
    </main>
  );
}
