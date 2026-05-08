import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HomeContent } from "@/content/home";

type HeroSectionProps = {
  hero: HomeContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative isolate min-h-[82vh] overflow-hidden border-b border-border-soft bg-brand-green-deep text-white sm:min-h-[88vh]">
      <Image
        src="/assets/Hooiberg-2-768x1024.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-image-motion -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,35,25,0.82)_0%,rgba(25,57,40,0.66)_42%,rgba(65,57,37,0.38)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.94)_100%)]" />

      <Container className="flex min-h-[82vh] items-center py-16 sm:min-h-[88vh] sm:py-24">
        <div className="max-w-3xl">
          <Badge className="hero-reveal hero-reveal-1 mb-5 border-white/25 bg-white/15 text-white shadow-card backdrop-blur">
            {hero.eyebrow}
          </Badge>
          <h1 className="hero-reveal hero-reveal-2 max-w-3xl text-[clamp(2.5rem,9vw,5.6rem)] font-semibold leading-[1.02] text-white">
            {hero.title}
          </h1>
          <p className="hero-reveal hero-reveal-3 mt-5 max-w-2xl text-base leading-8 text-white/90 sm:mt-6 sm:text-xl">
            {hero.intro}
          </p>
          <div className="hero-reveal hero-reveal-4 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button
              href={hero.primaryCta.href}
              className="bg-white text-brand-green hover:bg-accent-yellow-soft active:bg-accent-yellow-soft"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              className="border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20 active:bg-white/25"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
          <ul className="hero-reveal hero-reveal-5 mt-7 grid gap-3 text-sm leading-6 text-white/88 sm:mt-8 sm:grid-cols-3">
            {hero.supportItems.map((item) => (
              <li
                key={item}
                className="rounded-soft border border-white/18 bg-white/12 px-4 py-3 shadow-card backdrop-blur"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
