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
  imageLabel: string;
  imageText: string;
  locationDescription: string;
};

export function LocationSection({
  title,
  intro,
  ctaLabel,
  ctaHref,
  imageLabel,
  imageText,
  locationDescription,
}: LocationSectionProps) {
  return (
    <Section id="locatie">
      <Container>
        <div className="grid gap-6 rounded-medium border border-border-soft bg-surface p-5 shadow-card sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading intro={intro} title={title}>
            <Button href={ctaHref} className="mt-6" variant="secondary">
              {ctaLabel}
            </Button>
          </SectionHeading>
          <Card className="border-dashed bg-white p-5">
            <p className="text-sm font-semibold uppercase text-brand-green">
              {imageLabel}
            </p>
            <p className="mt-3 text-xl font-semibold text-foreground">
              {imageText}
            </p>
            <p className="text-support mt-5">{locationDescription}</p>
            {/* HERO_IMAGE_HOOIBERG wordt later vervangen door echte locatie- of natuurbeelden. */}
            <div
              className="mt-6 grid min-h-36 grid-cols-4 gap-2"
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
