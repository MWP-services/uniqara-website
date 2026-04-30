import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
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
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {sections.map((section) => (
            <Card key={section.title} className="p-5">
              <h3 className="font-semibold text-brand-green">
                {section.title}
              </h3>
              <p className="text-support mt-3">{section.body[0]}</p>
              <Button href={ctaHref} className="mt-5 px-0 py-0" variant="ghost">
                {cardLinkLabel}
              </Button>
            </Card>
          ))}
        </div>
        <Button href={ctaHref} className="mt-8" variant="ghost">
          {ctaLabel}
        </Button>
      </Container>
    </Section>
  );
}
