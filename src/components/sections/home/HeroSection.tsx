import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";
import type { HomeContent } from "@/content/home";

type HeroSectionProps = {
  hero: HomeContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="border-b border-border-soft bg-white">
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <Badge className="mb-5">{hero.eyebrow}</Badge>
          <h1 className="text-display max-w-3xl">{hero.title}</h1>
          <p className="text-body mt-6 max-w-2xl text-lg">{hero.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <Card className="bg-surface p-5 sm:p-6">
          <div className="flex flex-col gap-5">
            <div className="rounded-soft border border-border-soft bg-white p-4">
              <LogoPlaceholder size="lg" />
            </div>
            <div className="rounded-soft border border-dashed border-border-strong bg-white p-5">
              <p className="text-sm font-semibold uppercase text-brand-green">
                {hero.imagePlaceholderLabel}
              </p>
              <p className="mt-3 text-2xl font-semibold leading-snug text-foreground">
                {hero.imagePlaceholderText}
              </p>
              {/* HERO_IMAGE_HOOIBERG wordt later vervangen door echte locatie- of natuurbeelden. */}
              <div
                className="mt-8 grid min-h-44 grid-cols-3 gap-3"
                aria-hidden="true"
              >
                <div className="rounded-soft bg-surface-strong" />
                <div className="rounded-soft bg-accent-yellow-soft" />
                <div className="rounded-soft bg-brand-green-soft" />
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
