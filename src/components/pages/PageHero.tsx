import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { IllustrationFrame } from "@/components/ui/IllustrationFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageAside, PageIllustration } from "@/content/pages";

type PageHeroProps = {
  title: string;
  intro: string;
  aside?: PageAside;
  illustration?: PageIllustration;
};

export function PageHero({ title, intro, aside, illustration }: PageHeroProps) {
  return (
    <section className="page-hero-branded">
      <Container className="grid gap-6 py-12 sm:gap-8 sm:py-16 lg:grid-cols-[1fr_0.42fr] lg:items-end">
        <SectionHeading
          headingLevel="h1"
          intro={intro}
          title={title}
        />
        {illustration ? (
          <IllustrationFrame
            alt={illustration.alt}
            className="page-hero-branded-visual aspect-[4/3]"
            imageClassName="page-hero-branded-image object-contain"
            motion="reveal"
            sizes="(min-width: 1024px) 32vw, 100vw"
            src={illustration.src}
          />
        ) : aside ? (
          <Card className="border-dashed bg-card/94 p-5 shadow-soft">
            <p className="text-sm font-semibold uppercase text-muted-foreground">
              {aside.label}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-foreground">
              {aside.title}
            </h2>
            <p className="text-support mt-3 break-words">{aside.text}</p>
          </Card>
        ) : null}
      </Container>
    </section>
  );
}
