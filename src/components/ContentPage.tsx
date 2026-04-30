import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageContent } from "@/content/pages";

type ContentPageProps = {
  page: PageContent;
};

export function ContentPage({ page }: ContentPageProps) {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="border-b border-border-soft bg-white">
          <Container size="narrow" className="py-14 sm:py-16">
            <SectionHeading
              eyebrow={page.title}
              headingLevel="h1"
              intro={page.intro}
              title={page.title}
            />
          </Container>
        </section>

        <Section variant="surface">
          <Container className="grid gap-4 md:grid-cols-2">
            {page.sections.map((section) => (
              <Card key={section.title}>
                <h2 className="text-2xl font-semibold text-brand-green">
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
                  <nav aria-label={`Links bij ${section.title}`} className="mt-5">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-deep"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                ) : null}
              </Card>
            ))}
          </Container>
        </Section>

        <section className="bg-white py-12">
          <nav
            aria-label="Vervolgstappen"
            className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 sm:flex-row sm:px-8"
          >
            {page.ctas.map((cta) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant="secondary"
              >
                {cta.label}
              </Button>
            ))}
          </nav>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
