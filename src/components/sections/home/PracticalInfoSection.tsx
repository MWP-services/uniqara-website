import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageSection } from "@/content/pages";

type PracticalInfoSectionProps = {
  title: string;
  intro: string;
  items: PageSection[];
  ctaLabel: string;
  ctaHref: string;
  cardLinkLabel: string;
};

export function PracticalInfoSection({
  title,
  intro,
  items,
  ctaLabel,
  ctaHref,
  cardLinkLabel,
}: PracticalInfoSectionProps) {
  return (
    <Section id="praktisch" variant="surface">
      <Container>
        <SectionHeading intro={intro} title={title} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title} className="flex flex-col p-5">
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-support mt-3">{item.body[0]}</p>
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
