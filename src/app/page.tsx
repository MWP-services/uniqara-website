import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/content/contact";
import { home } from "@/content/home";
import { pages } from "@/content/pages";
import { routes } from "@/content/routes";
import { services } from "@/content/services";
import { brand } from "@/content/site";

export default function Home() {
  const audienceSections = pages.voorWie.sections.slice(0, 4);
  const workSteps = pages.werkwijze.sections.slice(0, 4);
  const practicalItems = pages.praktischeInformatie.sections.slice(0, 4);

  return (
    <main className="page-shell">
      <section className="border-b border-border-soft bg-white">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <Badge className="mb-5">{home.hero.eyebrow}</Badge>
            <h1 className="text-display max-w-3xl">{home.hero.title}</h1>
            <p className="text-body mt-6 max-w-2xl text-lg">
              {home.hero.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={home.hero.primaryCta.href}>
                {home.hero.primaryCta.label}
              </Button>
              <Button href={home.hero.secondaryCta.href} variant="secondary">
                {home.hero.secondaryCta.label}
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
                  {home.hero.imagePlaceholderLabel}
                </p>
                <p className="mt-3 text-2xl font-semibold leading-snug text-foreground">
                  {home.hero.imagePlaceholderText}
                </p>
                {/* HERO_IMAGE_HOOIBERG wordt later vervangen door echte locatie- of natuurbeelden. */}
                <div className="mt-8 grid min-h-44 grid-cols-3 gap-3" aria-hidden="true">
                  <div className="rounded-soft bg-surface-strong" />
                  <div className="rounded-soft bg-accent-yellow-soft" />
                  <div className="rounded-soft bg-brand-green-soft" />
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            intro={pages.overUniqara.intro}
            title={pages.overUniqara.title}
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {brand.values.slice(0, 3).map((value) => (
              <Card key={value} className="p-5">
                <h3 className="text-lg font-semibold text-brand-green">
                  {value}
                </h3>
                <p className="text-support mt-3">
                  Een rustige basis voor contact, onderzoek en begeleiding.
                </p>
              </Card>
            ))}
          </div>
          <div className="lg:col-start-2">
            <Button href={routes.overUniqara.href} variant="ghost">
              Meer over Uniqara
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="voor-wie" variant="surface">
        <Container>
          <SectionHeading
            intro={pages.voorWie.intro}
            title={pages.voorWie.title}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {audienceSections.map((section) => (
              <Card key={section.title} className="p-5">
                <h3 className="font-semibold text-brand-green">
                  {section.title}
                </h3>
                <p className="text-support mt-3">{section.body[0]}</p>
              </Card>
            ))}
          </div>
          <Button href={routes.voorWie.href} className="mt-8" variant="ghost">
            Bekijk alle doelgroepen
          </Button>
        </Container>
      </Section>

      <Section id="hulpvragen">
        <Container>
          <SectionHeading
            intro={pages.hulpvragen.intro}
            title="Hulpvragen en aanbod"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {services.items.map((item) => (
                <Card key={item.title}>
                  <h3 className="text-xl font-semibold text-brand-green">
                    {item.title}
                  </h3>
                  <p className="text-body mt-4">{item.summary}</p>
                </Card>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {services.helpQuestions.map((question) => (
                <Card key={question.title} className="bg-surface p-5">
                  <h3 className="font-semibold text-foreground">
                    {question.title}
                  </h3>
                  <p className="text-support mt-3">{question.description}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={routes.hulpvragen.href} variant="secondary">
              Bekijk hulpvragen
            </Button>
            <Button href={routes.werkwijze.href} variant="ghost">
              Lees de werkwijze
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="werkwijze" variant="surface">
        <Container>
          <SectionHeading
            intro={pages.werkwijze.intro}
            title="Werkwijze in duidelijke stappen"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {workSteps.map((step, index) => (
              <Card key={step.title} className="p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-pill bg-accent-yellow-soft text-sm font-semibold text-foreground">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-semibold text-brand-green">
                  {step.title}
                </h3>
                <p className="text-support mt-3">{step.body[0]}</p>
              </Card>
            ))}
          </div>
          <Button href={routes.werkwijze.href} className="mt-8" variant="ghost">
            Bekijk de volledige werkwijze
          </Button>
        </Container>
      </Section>

      <Section id="locatie">
        <Container>
          <div className="grid gap-6 rounded-medium border border-border-soft bg-surface p-5 shadow-card sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              intro={home.location.intro}
              title={home.location.heading}
            >
              <Button href={routes.locatie.href} className="mt-6" variant="secondary">
                Bekijk de locatie
              </Button>
            </SectionHeading>
            <Card className="border-dashed bg-white p-5">
              <p className="text-sm font-semibold uppercase text-brand-green">
                {home.hero.imagePlaceholderLabel}
              </p>
              <p className="mt-3 text-xl font-semibold text-foreground">
                {home.hero.imagePlaceholderText}
              </p>
              <p className="text-support mt-5">{contact.locationDescription}</p>
              <div className="mt-6 grid min-h-36 grid-cols-4 gap-2" aria-hidden="true">
                <div className="rounded-soft bg-brand-green-soft" />
                <div className="rounded-soft bg-surface-strong" />
                <div className="rounded-soft bg-accent-yellow-soft" />
                <div className="rounded-soft bg-surface-strong" />
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="praktisch" variant="surface">
        <Container>
          <SectionHeading
            intro={pages.praktischeInformatie.intro}
            title={pages.praktischeInformatie.title}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {practicalItems.map((item) => (
              <Card key={item.title} className="p-5">
                <h3 className="font-semibold text-brand-green">{item.title}</h3>
                <p className="text-support mt-3">{item.body[0]}</p>
              </Card>
            ))}
          </div>
          <Button
            href={routes.praktischeInformatie.href}
            className="mt-8"
            variant="ghost"
          >
            Lees praktische informatie
          </Button>
        </Container>
      </Section>

      <section className="border-t border-border-soft bg-white py-14">
        <Container>
          <Card className="grid gap-6 bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-brand-green">
                Contact opnemen
              </h2>
              <p className="text-body mt-4 max-w-2xl">{pages.contact.intro}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={routes.contact.href}>Naar contact</Button>
              <Button href={routes.praktischeInformatie.href} variant="secondary">
                Praktische info
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </main>
  );
}
