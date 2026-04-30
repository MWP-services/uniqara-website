import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageSection } from "@/content/pages";

type StepsSectionProps = {
  title: string;
  intro: string;
  steps: PageSection[];
  ctaLabel: string;
  ctaHref: string;
};

export function StepsSection({
  title,
  intro,
  steps,
  ctaLabel,
  ctaHref,
}: StepsSectionProps) {
  return (
    <Section id="werkwijze" variant="surface">
      <Container>
        <SectionHeading intro={intro} title={title} />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-pill bg-accent-yellow-soft text-sm font-semibold text-foreground">
                {index + 1}
              </span>
              <h3 className="mt-5 font-semibold text-brand-green">
                {step.title}
              </h3>
              <p className="text-support mt-3">{step.body[0]}</p>
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
