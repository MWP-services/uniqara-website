import Image from "next/image";
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
          <Card className="overflow-hidden bg-white p-0">
            <div className="relative min-h-64 overflow-hidden sm:min-h-80">
              <Image
                src="/assets/Hooiberg-2-768x1024.webp"
                alt={imageText}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,41,30,0.08)_0%,rgba(19,41,30,0.52)_100%)]" />
              <p className="absolute bottom-4 left-4 rounded-pill border border-white/25 bg-white/18 px-4 py-2 text-sm font-semibold uppercase text-white shadow-card backdrop-blur">
                {imageLabel}
              </p>
            </div>
            <div className="p-5 sm:p-6">
              <p className="break-words text-lg font-semibold text-foreground sm:text-xl">
                {imageText}
              </p>
              <p className="text-support mt-4">{locationDescription}</p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
