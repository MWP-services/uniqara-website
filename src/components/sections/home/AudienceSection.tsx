import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { IllustrationFrame } from "@/components/ui/IllustrationFrame";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageSection } from "@/content/pages";

type AudienceSectionProps = {
  title: string;
  intro: string;
  sections: PageSection[];
  ctaLabel: string;
  ctaHref: string;
  cardLinkLabel: string;
};

export function AudienceSection({
  title,
  intro,
  sections,
  ctaLabel,
  ctaHref,
  cardLinkLabel,
}: AudienceSectionProps) {
  return (
    <Section id="voor-wie" variant="surface">
      <Container>
        <SectionHeading intro={intro} title={title} />
        <IllustrationFrame
          alt="Vriendelijke dierenillustratie bij veiligheid en verbinding."
          className="mt-8 aspect-[4/3] border-brand-green/35 bg-[linear-gradient(135deg,rgba(204,245,222,0.76),rgba(255,255,255,0.55),rgba(255,241,173,0.52))] sm:aspect-[16/7]"
          imageClassName="object-contain p-4 sm:p-6"
          motion="float"
          sizes="(min-width: 1024px) 72rem, 100vw"
          src="/assets/DIEREN.jpg"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <Card key={section.title} className="flex flex-col p-5">
              <h3 className="font-semibold text-foreground">
                {section.title}
              </h3>
              <p className="text-support mt-3">{section.body[0]}</p>
              <Button
                href={ctaHref}
                className="mt-5 w-full justify-start sm:mt-auto"
                variant="ghost"
              >
                {cardLinkLabel}
              </Button>
            </Card>
          ))}
        </div>
        <Button href={ctaHref} className="mt-8" variant="secondary">
          {ctaLabel}
        </Button>
      </Container>
    </Section>
  );
}
