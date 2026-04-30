import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { HelpQuestion, ServiceItem } from "@/content/services";

type ServicesPreviewSectionProps = {
  title: string;
  intro: string;
  services: ServiceItem[];
  helpQuestions: HelpQuestion[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export function ServicesPreviewSection({
  title,
  intro,
  services,
  helpQuestions,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: ServicesPreviewSectionProps) {
  return (
    <Section id="hulpvragen">
      <Container>
        <SectionHeading intro={intro} title={title} />
        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {services.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-semibold text-brand-green">
                  {item.title}
                </h3>
                <p className="text-body mt-4">{item.summary}</p>
              </Card>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {helpQuestions.map((question) => (
              <Card key={question.title} className="bg-surface p-5">
                <h3 className="font-semibold text-foreground">
                  {question.title}
                </h3>
                <p className="text-support mt-3">{question.description}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={primaryCtaHref} variant="secondary">
            {primaryCtaLabel}
          </Button>
          <Button href={secondaryCtaHref} variant="ghost">
            {secondaryCtaLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
