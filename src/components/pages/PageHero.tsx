import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { IllustrationFrame } from "@/components/ui/IllustrationFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type {
  PageAside,
  PageBannerVariant,
  PageIllustration,
} from "@/content/pages";

type PageHeroProps = {
  title: string;
  intro: string;
  aside?: PageAside;
  eyebrow?: string;
  heroBannerVariant?: PageBannerVariant;
  heroVariant?: "default" | "connected" | "banner";
  illustration?: PageIllustration;
};

const bannerVariantClasses: Record<
  PageBannerVariant,
  { panel: string; visual: string }
> = {
  green: {
    panel: "border-brand-green bg-brand-green-soft",
    visual: "bg-accent-blue-soft",
  },
  terra: {
    panel: "border-accent-coral/70 bg-accent-coral-soft",
    visual: "bg-accent-coral-soft",
  },
  blue: {
    panel: "border-accent-blue bg-accent-blue-soft",
    visual: "bg-brand-green-soft",
  },
};

export function PageHero({
  title,
  intro,
  aside,
  eyebrow,
  heroBannerVariant = "green",
  heroVariant = "default",
  illustration,
}: PageHeroProps) {
  if (heroVariant === "banner") {
    const variantClasses = bannerVariantClasses[heroBannerVariant];

    return (
      <section className="page-hero-branded page-hero-banner">
        <Container className="py-6 sm:py-8 lg:py-9">
          <div
            className={`page-hero-banner-panel grid min-w-0 grid-cols-1 overflow-hidden rounded-medium border shadow-soft md:grid-cols-[1fr_16rem] md:items-stretch lg:grid-cols-[1fr_20rem] ${variantClasses.panel}`}
          >
            <div className="min-w-0 p-5 sm:p-7 lg:p-8">
              <SectionHeading
                eyebrow={eyebrow}
                headingLevel="h1"
                intro={intro || undefined}
                title={title}
              />
            </div>
            {illustration ? (
              <IllustrationFrame
                alt={illustration.alt}
                className={`page-hero-banner-visual min-h-40 rounded-none border-0 shadow-none md:min-h-full ${variantClasses.visual}`}
                imageClassName="object-contain p-3 sm:p-4 md:p-5"
                motion="reveal"
                sizes="(min-width: 1024px) 20rem, (min-width: 768px) 16rem, 100vw"
                src={illustration.src}
              />
            ) : null}
          </div>
        </Container>
      </section>
    );
  }

  if (heroVariant === "connected" && illustration) {
    return (
      <section className="page-hero-branded page-hero-connected">
        <Container className="py-8 sm:py-10 lg:py-12">
          <div className="page-hero-connected-panel grid overflow-hidden rounded-medium border border-brand-green/40 shadow-soft lg:grid-cols-[1fr_0.46fr] lg:items-stretch">
            <div className="p-6 sm:p-8 lg:p-10">
              <SectionHeading
                eyebrow={eyebrow}
                headingLevel="h1"
                intro={intro}
                title={title}
              />
            </div>
            <IllustrationFrame
              alt={illustration.alt}
              className="page-hero-connected-visual min-h-72 rounded-none border-0 shadow-none lg:h-full"
              imageClassName="page-hero-branded-image object-contain p-5 sm:p-7 lg:p-8"
              motion="reveal"
              sizes="(min-width: 1024px) 32vw, 100vw"
              src={illustration.src}
            />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="page-hero-branded">
      <Container className="grid gap-6 py-12 sm:gap-8 sm:py-16 lg:grid-cols-[1fr_0.42fr] lg:items-end">
        <SectionHeading
          eyebrow={eyebrow}
          headingLevel="h1"
          intro={intro}
          title={title}
        />
        {illustration ? (
          <IllustrationFrame
            alt={illustration.alt}
            className="page-hero-branded-visual aspect-[4/3]"
            imageClassName="page-hero-branded-image object-contain"
            motion="reveal"
            sizes="(min-width: 1024px) 32vw, 100vw"
            src={illustration.src}
          />
        ) : aside ? (
          <Card className="border-dashed bg-card/94 p-5 shadow-soft">
            <p className="text-sm font-semibold uppercase text-muted-foreground">
              {aside.label}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-foreground">
              {aside.title}
            </h2>
            <p className="text-support mt-3 break-words">{aside.text}</p>
          </Card>
        ) : null}
      </Container>
    </section>
  );
}
