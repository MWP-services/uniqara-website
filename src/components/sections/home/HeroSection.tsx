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
    <section className="overflow-hidden border-b border-border-soft bg-white">
      <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div className="max-w-3xl">
          <Badge className="mb-5">{hero.eyebrow}</Badge>
          <h1 className="text-display max-w-3xl">{hero.title}</h1>
          <p className="text-body mt-6 max-w-2xl text-lg">{hero.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <ul className="mt-8 grid gap-3 text-support sm:grid-cols-3">
            {hero.supportItems.map((item) => (
              <li
                key={item}
                className="rounded-soft border border-border-soft bg-surface px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Card className="bg-surface p-4 shadow-soft sm:p-6">
          <div className="grid gap-4">
            <div className="rounded-soft border border-border-soft bg-white p-4 shadow-card">
              <p className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
                Logo positie
              </p>
              <LogoPlaceholder size="lg" className="max-w-full" />
            </div>

            <div className="rounded-medium border border-dashed border-border-strong bg-white p-5">
              {/* HERO_IMAGE_HOOIBERG wordt later vervangen door echte locatie- of natuurbeelden. */}
              <div className="flex min-h-56 flex-col justify-between rounded-soft bg-surface p-5">
                <div>
                  <p className="text-sm font-semibold uppercase text-brand-green">
                    {hero.imagePlaceholderLabel}
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-snug text-foreground">
                    {hero.imagePlaceholderText}
                  </p>
                </div>
                <div
                  className="mt-8 grid grid-cols-3 gap-3"
                  aria-hidden="true"
                >
                  <div className="h-20 rounded-soft bg-brand-green-soft" />
                  <div className="h-20 rounded-soft bg-accent-yellow-soft" />
                  <div className="h-20 rounded-soft bg-surface-strong" />
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {hero.imagePlaceholders.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-soft border border-border-soft bg-white p-3"
                  >
                    <p className="text-xs font-semibold uppercase text-brand-green">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-muted">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
