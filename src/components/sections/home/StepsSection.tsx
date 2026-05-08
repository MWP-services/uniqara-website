import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { IllustrationFrame } from "@/components/ui/IllustrationFrame";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageSection } from "@/content/pages";

type StepsSectionProps = {
  title: string;
  intro: string;
  steps: PageSection[];
  ctaLabel: string;
  ctaHref: string;
  stepLinkLabel: string;
};

export function StepsSection({
  title,
  intro,
  steps,
  ctaLabel,
  ctaHref,
  stepLinkLabel,
}: StepsSectionProps) {
  return (
    <Section id="werkwijze" variant="surface">
      <Container>
        <SectionHeading intro={intro} title={title} />
        <IllustrationFrame
          alt="Speeltreinillustratie bij de stappen van de werkwijze."
          className="mt-8 aspect-[4/3] border-accent-coral/45 bg-[linear-gradient(135deg,rgba(246,163,140,0.18),rgba(253,246,236,0.78),rgba(99,207,198,0.14))] sm:aspect-[16/7]"
          imageClassName="object-contain p-4 sm:p-6"
          motion="left"
          sizes="(min-width: 1024px) 72rem, 100vw"
          src="/assets/SPELTREIN.webp"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title} className="flex flex-col p-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-pill bg-accent-yellow-soft text-sm font-semibold text-foreground">
                {index + 1}
              </span>
              <h3 className="mt-5 font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-support mt-3">{step.body[0]}</p>
              <Button
                href={ctaHref}
                className="mt-5 w-full justify-start sm:mt-auto"
                variant="ghost"
              >
                {stepLinkLabel}
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
