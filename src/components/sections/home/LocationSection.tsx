import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type LocationSectionProps = {
  title: string;
  intro: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  imageLabel: string;
  imageText: string;
  locationDescription: string;
};

export function LocationSection({
  title,
  intro,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  imageLabel,
  imageText,
  locationDescription,
}: LocationSectionProps) {
  return (
    <Section id="locatie">
      <Container>
        <div className="grid gap-6 rounded-medium border border-border-soft bg-surface p-5 shadow-card sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading intro={intro} title={title}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={ctaHref} variant="secondary">
                {ctaLabel}
              </Button>
              <Button href={secondaryCtaHref} variant="ghost">
                {secondaryCtaLabel}
              </Button>
            </div>
          </SectionHeading>
          <Card className="border-dashed bg-white p-5">
            <p className="text-sm font-semibold uppercase text-brand-green">
              {imageLabel}
            </p>
            <p className="mt-3 break-words text-lg font-semibold text-foreground sm:text-xl">
              {imageText}
            </p>
            <p className="text-support mt-5">{locationDescription}</p>
            {/* HERO_IMAGE_HOOIBERG wordt later vervangen door echte locatie- of natuurbeelden. */}
            <div
              className="mt-6 grid min-h-32 grid-cols-2 gap-2 sm:min-h-40 sm:grid-cols-4"
              aria-hidden="true"
            >
              <div className="rounded-soft bg-brand-green-soft" />
              <div className="rounded-soft bg-surface-strong" />
              <div className="rounded-soft bg-accent-yellow-soft" />
              <div className="rounded-soft bg-surface-strong" />
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
