import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContactReferralNotice } from "@/components/ui/ContactReferralNotice";
import type { HomeContent } from "@/content/home";

type HeroSectionProps = {
  hero: HomeContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="hero-pastel-background absolute inset-0 z-[1]" />

      <Container className="relative z-10 grid items-center gap-8 py-10 sm:min-h-[78vh] sm:gap-10 sm:py-16 lg:min-h-[84vh] lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:py-20 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="min-w-0 max-w-3xl">
          <h1 className="hero-reveal hero-reveal-2 max-w-full text-balance break-words text-[clamp(2.25rem,12vw,5.6rem)] font-semibold leading-[1.02] text-foreground">
            {hero.title}
          </h1>
          <p className="hero-reveal hero-reveal-3 mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-xl sm:leading-8">
            {hero.intro}
            {hero.introSecondary ? (
              <>
                <br />
                {hero.introSecondary}
              </>
            ) : null}
          </p>
          <div className="hero-reveal hero-reveal-4 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button
              href={hero.primaryCta.href}
              className="bg-brand-green text-white hover:bg-brand-green-deep active:bg-brand-green-deep"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              className="border-brand-green/40 bg-card/85 text-foreground backdrop-blur hover:bg-brand-green-soft active:bg-accent-blue-soft"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
          <ContactReferralNotice
            className="hero-reveal hero-reveal-5 mt-4 max-w-2xl"
            compact
          />
          {hero.supportItems.length > 0 ? (
            <ul className="hero-reveal hero-reveal-5 mt-7 grid gap-3 text-sm leading-6 text-muted-foreground sm:mt-8 sm:grid-cols-3">
              {hero.supportItems.map((item) => (
                <li
                  key={item}
                  className="rounded-soft border border-border-soft bg-card px-4 py-3 shadow-card backdrop-blur"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="illustration-motion illustration-motion-hero mx-auto aspect-[3/4] w-full max-w-[24rem] overflow-hidden rounded-medium border border-border-soft bg-brand-green-soft shadow-card lg:max-w-[29rem] xl:-mr-2">
          <div className="illustration-motion-inner h-full w-full">
            <Image
              alt="Vriendelijke illustratie met dieren als beeld voor veiligheid en verbinding."
              className="block h-full w-full object-contain p-5 sm:p-7"
              height={2160}
              loading="eager"
              preload
              sizes="(min-width: 1280px) 29rem, (min-width: 1024px) 36vw, min(24rem, 100vw)"
              src="/assets/hooiberg.jpeg"
              width={3840}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
