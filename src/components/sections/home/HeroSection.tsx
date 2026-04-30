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
      <Container className="grid gap-8 py-12 sm:gap-10 sm:py-20 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div className="max-w-3xl">
          <Badge className="mb-5">{hero.eyebrow}</Badge>
          <h1 className="text-display max-w-3xl">{hero.title}</h1>
          <p className="text-body mt-5 max-w-2xl text-base sm:mt-6 sm:text-lg">
            {hero.intro}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <ul className="mt-7 grid gap-3 text-support sm:mt-8 sm:grid-cols-3">
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
              <div className="flex min-h-52 flex-col justify-between rounded-soft bg-surface p-4 sm:min-h-56 sm:p-5">
                <div>
                  <p className="text-sm font-semibold uppercase text-brand-green">
                    {hero.imagePlaceholderLabel}
                  </p>
                  <p className="mt-3 break-words text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                    {hero.imagePlaceholderText}
                  </p>
                </div>
                <div
                  className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3"
                  aria-hidden="true"
                >
                  <div className="h-16 rounded-soft bg-brand-green-soft sm:h-20" />
                  <div className="h-16 rounded-soft bg-accent-yellow-soft sm:h-20" />
                  <div className="h-16 rounded-soft bg-surface-strong sm:h-20" />
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
                    <p className="mt-2 break-words text-xs leading-5 text-muted">
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
