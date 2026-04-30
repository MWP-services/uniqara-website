import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageAside } from "@/content/pages";

type PageHeroProps = {
  title: string;
  intro: string;
  aside?: PageAside;
};

export function PageHero({ title, intro, aside }: PageHeroProps) {
  return (
    <section className="border-b border-border-soft bg-white">
      <Container className="grid gap-6 py-12 sm:gap-8 sm:py-16 lg:grid-cols-[1fr_0.42fr] lg:items-end">
        <SectionHeading
          eyebrow={title}
          headingLevel="h1"
          intro={intro}
          title={title}
        />
        {aside ? (
          <Card className="border-dashed bg-surface p-5">
            <p className="text-sm font-semibold uppercase text-brand-green">
              {aside.label}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-brand-green">
              {aside.title}
            </h2>
            <p className="text-support mt-3 break-words">{aside.text}</p>
          </Card>
        ) : null}
      </Container>
    </section>
  );
}
