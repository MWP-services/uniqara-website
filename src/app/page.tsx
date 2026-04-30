import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/content/contact";
import { faq } from "@/content/faq";
import { home } from "@/content/home";
import { pages } from "@/content/pages";
import { routes } from "@/content/routes";
import { services } from "@/content/services";

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="border-b border-border-soft bg-white">
          <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge className="mb-5">{home.hero.eyebrow}</Badge>
              <h1 className="text-display max-w-3xl">
                {home.hero.title}
              </h1>
              <p className="text-body mt-6 max-w-2xl text-lg">
                {home.hero.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={home.hero.primaryCta.href}
                >
                  {home.hero.primaryCta.label}
                </Button>
                <Button
                  href={home.hero.secondaryCta.href}
                  variant="secondary"
                >
                  {home.hero.secondaryCta.label}
                </Button>
              </div>
            </div>
            <div className="surface-panel p-6">
              <Card className="p-5">
                <p className="text-sm font-semibold uppercase text-brand-green">
                  {home.hero.imagePlaceholderLabel}
                </p>
                <p className="mt-3 text-2xl font-semibold leading-snug text-foreground">
                  {home.hero.imagePlaceholderText}
                </p>
                {/* HERO_IMAGE_HOOIBERG wordt later vervangen door echte locatie- of natuurbeelden. */}
                <div className="mt-8 grid grid-cols-3 gap-3" aria-hidden="true">
                  <div className="h-24 rounded-[8px] bg-surface-strong" />
                  <div className="h-24 rounded-[8px] bg-accent-yellow" />
                  <div className="h-24 rounded-[8px] bg-brand-green" />
                </div>
              </Card>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              intro={pages.overUniqara.intro}
              title={pages.overUniqara.title}
            />
            <nav
              aria-label="Introductie links"
              className="grid gap-3 sm:grid-cols-2"
            >
              <Link
                href={routes.overUniqara.href}
                className="rounded-[8px] border border-border-soft bg-surface px-5 py-4 font-semibold text-foreground transition hover:border-brand-green hover:bg-white"
              >
                Meer over Uniqara
              </Link>
              <Link
                href={routes.werkwijze.href}
                className="rounded-[8px] border border-border-soft bg-surface px-5 py-4 font-semibold text-foreground transition hover:border-brand-green hover:bg-white"
              >
                Lees de werkwijze
              </Link>
            </nav>
          </Container>
        </section>

        <section id="voor-wie" className="border-y border-border-soft bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading
              intro={pages.voorWie.intro}
              title={pages.voorWie.title}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {pages.voorWie.sections.map((section) => (
                <Card key={section.title} className="p-5">
                  <h3 className="font-semibold text-brand-green">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {section.body[0]}
                  </p>
                </Card>
              ))}
            </div>
            <Button
              href={routes.voorWie.href}
              className="mt-8"
              variant="ghost"
            >
              Bekijk alle doelgroepen
            </Button>
          </Container>
        </section>

        <section id="aanbod" className="bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading intro={services.intro} title={services.heading} />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {services.items.map((area) => (
                <Card key={area.title}>
                  <h3 className="text-xl font-semibold text-brand-green">
                    {area.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted">{area.summary}</p>
                  <Link
                    href={area.href}
                    className="mt-6 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-deep"
                  >
                    Meer informatie
                  </Link>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="hulpvragen" className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeading
              intro={pages.hulpvragen.intro}
              title={pages.hulpvragen.title}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {services.helpQuestions.map((question) => (
                <Card key={question.title} className="bg-surface p-5">
                  <h3 className="font-semibold text-foreground">
                    {question.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {question.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="werkwijze" className="border-y border-border-soft bg-white py-16 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              intro={home.approach.intro}
              title={home.approach.heading}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {home.approach.pathways.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[8px] border border-border-soft bg-surface px-5 py-4 font-semibold text-foreground transition hover:border-brand-green hover:bg-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section id="locatie" className="bg-white py-16 sm:py-20">
          <Container>
            <div className="rounded-[8px] border border-border-soft bg-surface p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                <SectionHeading
                  intro={home.location.intro}
                  title={home.location.heading}
                />
                <Card className="p-5">
                  <p className="text-sm font-semibold uppercase text-brand-green">
                    {home.location.cardLabel}
                  </p>
                  <p className="mt-3 text-lg leading-7 text-muted">
                    {home.location.cardText}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {contact.locationDescription}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {contact.address.street}
                  </p>
                  <p className="text-sm leading-6 text-muted">
                    {contact.routeNote}
                  </p>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <section id="praktisch" className="border-y border-border-soft bg-surface py-16 sm:py-20">
          <Container className="grid gap-4 md:grid-cols-2">
            {[pages.praktischeInformatie, pages.privacy].map((page) => (
              <Card
                key={page.title}
                id={page.title === pages.privacy.title ? "privacy" : undefined}
              >
                <h2 className="text-2xl font-semibold text-brand-green">
                  {page.title}
                </h2>
                <p className="mt-4 leading-7 text-muted">{page.intro}</p>
                <Link
                  href={
                    page.routeKey === "privacy"
                      ? routes.privacy.href
                      : routes.praktischeInformatie.href
                  }
                  className="mt-5 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-deep"
                >
                  Lees verder
                </Link>
              </Card>
            ))}
          </Container>
        </section>

        <section id="faq" className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeading intro={faq.intro} title={faq.heading} />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {faq.items.map((item) => (
                <Card key={item.question} className="bg-surface p-5">
                  <h3 className="font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-border-soft bg-surface py-14">
          <Container>
            <Card className="p-6 sm:p-8">
              <h2 className="text-3xl font-semibold text-brand-green">
                Contact opnemen
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted">
                {pages.contact.intro}
              </p>
              <Button
                href={routes.contact.href}
                className="mt-6"
              >
                Naar contact
              </Button>
            </Card>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
