import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageContent, PageSection } from "@/content/pages";

type StructuredContentPageProps = {
  page: PageContent;
  aside?: {
    label: string;
    title: string;
    text: string;
  };
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
      <section className="border-b border-border-soft bg-white">
        <Container className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <SectionHeading
            eyebrow={page.title}
            headingLevel="h1"
            intro={page.intro}
            title={page.title}
          />
          {aside ? (
            <Card className="border-dashed bg-surface p-5">
              <p className="text-sm font-semibold uppercase text-brand-green">
                {aside.label}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-brand-green">
                {aside.title}
              </h2>
              <p className="text-support mt-3">{aside.text}</p>
            </Card>
          ) : null}
        </Container>
      </section>

      <section className="border-b border-border-soft bg-surface py-5">
        <Container>
          <nav
            aria-label={`Inhoud van ${page.title}`}
            className="flex flex-wrap gap-2"
          >
            {page.sections.map((section) => (
              <Link
                key={section.title}
                href={`#${sectionId(section)}`}
                className="rounded-pill border border-border-soft bg-white px-4 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green-soft"
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <Section variant="surface">
        <Container className="grid gap-4 md:grid-cols-2">
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
                  className="mt-5 flex flex-wrap gap-2"
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

      <section className="bg-white py-12">
        <Container>
          <Card className="grid gap-5 bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-brand-green">
                Vervolgstap
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-green">
                Rustig verder kijken
              </h2>
            </div>
            <nav
              aria-label="Vervolgstappen"
              className="flex flex-col gap-3 sm:flex-row"
            >
              {page.ctas.map((cta, index) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant={index === 0 ? "primary" : "secondary"}
                >
                  {cta.label}
                </Button>
              ))}
            </nav>
          </Card>
        </Container>
      </section>
    </main>
  );
}
