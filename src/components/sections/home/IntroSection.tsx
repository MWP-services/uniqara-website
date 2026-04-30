import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type IntroSectionProps = {
  title: string;
  intro: string;
  values: string[];
  valueCardText: string;
  ctaLabel: string;
  ctaHref: string;
};

export function IntroSection({
  title,
  intro,
  values,
  valueCardText,
  ctaLabel,
  ctaHref,
}: IntroSectionProps) {
  return (
    <Section>
      <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading intro={intro} title={title} />
        <div className="grid gap-4 sm:grid-cols-3">
          {values.slice(0, 3).map((value) => (
            <Card key={value} className="p-5">
              <span className="inline-flex h-2 w-10 rounded-pill bg-accent-yellow" />
              <h3 className="text-lg font-semibold text-brand-green">
                {value}
              </h3>
              <p className="text-support mt-3">{valueCardText}</p>
            </Card>
          ))}
        </div>
        <div className="lg:col-start-2">
          <Button href={ctaHref} variant="ghost">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
