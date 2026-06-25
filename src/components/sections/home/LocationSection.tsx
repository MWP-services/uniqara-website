import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PracticePhoto } from "@/components/media/PracticePhoto";
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
          <Card className="overflow-hidden bg-card p-0">
            <div className="relative">
              <PracticePhoto
                alt="Buitenzijde van de Hooiberg in de groene omgeving van Ouderkerk aan den IJssel."
                className="aspect-[16/10] rounded-none border-0 shadow-none"
                imageClassName="object-[50%_46%]"
                sizes="(min-width: 1024px) 42vw, 100vw"
                src="/assets/Hooiberg-2-768x1024.webp"
              />
              <p className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-pill border border-brand-green/30 bg-background/85 px-4 py-2 text-sm font-semibold uppercase text-foreground shadow-card backdrop-blur">
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
