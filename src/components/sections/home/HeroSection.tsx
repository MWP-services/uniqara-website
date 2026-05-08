import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { VideoFrame } from "@/components/ui/VideoFrame";
import type { HomeContent } from "@/content/home";

type HeroSectionProps = {
  hero: HomeContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border-soft bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_82%_20%,rgba(99,207,198,0.22),transparent_34rem)]" />

      <Container className="grid items-center gap-8 py-10 sm:min-h-[78vh] sm:gap-10 sm:py-16 lg:min-h-[84vh] lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:py-20 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="max-w-3xl">
          <Badge className="hero-reveal hero-reveal-1 mb-5 border-brand-green/30 bg-brand-green-soft text-foreground shadow-card backdrop-blur">
            {hero.eyebrow}
          </Badge>
          <h1 className="hero-reveal hero-reveal-2 max-w-3xl text-[clamp(2.25rem,12vw,5.6rem)] font-semibold leading-[1.02] text-foreground">
            {hero.title}
          </h1>
          <p className="hero-reveal hero-reveal-3 mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-xl sm:leading-8">
            {hero.intro}
          </p>
          <div className="hero-reveal hero-reveal-4 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button
              href={hero.primaryCta.href}
              className="bg-brand-green text-foreground hover:bg-accent-yellow active:bg-accent-yellow"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              className="border-brand-green/40 bg-card/85 text-foreground backdrop-blur hover:bg-brand-green-soft active:bg-accent-yellow-soft"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
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
        </div>
        <VideoFrame
          className="mx-auto aspect-[4/3] w-full max-w-[42rem] border-brand-green/35 bg-[linear-gradient(135deg,rgba(248,233,142,0.58),rgba(99,207,198,0.18),rgba(246,163,140,0.13))] lg:aspect-[1.16/1] lg:max-w-none xl:-mr-4"
          motion="hero"
          poster="/assets/HOMEPAGE.webp"
          src="/assets/HOMEPAGE-ANIMATED.mp4"
        />
      </Container>
    </section>
  );
}
