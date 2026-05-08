import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

type ContactCTASectionProps = {
  title: string;
  intro: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export function ContactCTASection({
  title,
  intro,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: ContactCTASectionProps) {
  return (
    <section className="border-t border-border-soft bg-background py-10 sm:py-14">
      <Container>
        <Card className="grid gap-6 border-accent-coral/45 bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-muted-foreground">
              Volgende stap
            </p>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              {title}
            </h2>
            <p className="text-body mt-4 max-w-2xl">{intro}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={primaryCtaHref}>{primaryCtaLabel}</Button>
            <Button href={secondaryCtaHref} variant="secondary">
              {secondaryCtaLabel}
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
