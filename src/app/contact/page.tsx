import type { Metadata } from "next";
import { ContactFormPlaceholder } from "@/components/forms/ContactFormPlaceholder";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/content/contact";
import { pages } from "@/content/pages";
import { routes } from "@/content/routes";

const page = pages.contact;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="border-b border-border-soft bg-white">
        <Container className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <SectionHeading
            eyebrow={page.title}
            headingLevel="h1"
            intro={page.intro}
            title={page.title}
          />
          {page.aside ? (
            <Card className="border-dashed bg-surface p-5">
              <p className="text-sm font-semibold uppercase text-brand-green">
                {page.aside.label}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-brand-green">
                {page.aside.title}
              </h2>
              <p className="text-support mt-3">{page.aside.text}</p>
            </Card>
          ) : null}
        </Container>
      </section>

      <Section variant="surface">
        <Container className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <Card>
              <p className="text-sm font-semibold uppercase text-brand-green">
                Contactgegevens
              </p>
              <h2 className="mt-3 text-2xl">Uniqara</h2>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-foreground">
                    E-mail
                  </dt>
                  <dd className="text-body">{contact.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">
                    Telefoon
                  </dt>
                  <dd className="text-body">{contact.phone}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">
                    Praktijkhouder
                  </dt>
                  <dd className="text-body">{contact.ownerName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">
                    Bereikbaarheid
                  </dt>
                  <dd className="text-body">{contact.openingHours}</dd>
                </div>
              </dl>
            </Card>

            <Card>
              <p className="text-sm font-semibold uppercase text-brand-green">
                Locatie
              </p>
              <h2 className="mt-3 text-2xl">{contact.address.name}</h2>
              <address className="text-body mt-4 not-italic">
                <span className="block">{contact.address.street}</span>
                <span className="block">{contact.address.postalCodeCity}</span>
                <span className="block">{contact.address.country}</span>
              </address>
              <p className="text-body mt-4">{contact.locationDescription}</p>
              <p className="text-support mt-3">{contact.routeNote}</p>
              <Button
                className="mt-5"
                href={routes.locatie.href}
                variant="secondary"
              >
                Bekijk locatie
              </Button>
            </Card>
          </div>

          <Card className="p-6 sm:p-8">
            <SectionHeading
              headingLevel="h2"
              intro={contact.form.intro}
              title={contact.form.title}
            />
            <div className="mt-7">
              <ContactFormPlaceholder form={contact.form} />
            </div>
          </Card>
        </Container>
      </Section>

      <section className="bg-white py-12">
        <Container>
          <Card className="grid gap-5 bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-brand-green">
                Vervolgstap
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-green">
                Liever eerst rustig lezen?
              </h2>
              <p className="text-body mt-3">{contact.reassurance}</p>
            </div>
            <nav
              aria-label="Vervolglinks vanaf contact"
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Button href={routes.werkwijze.href}>Lees de werkwijze</Button>
              <Button href={routes.praktischeInformatie.href} variant="secondary">
                Praktische informatie
              </Button>
            </nav>
          </Card>
        </Container>
      </section>
    </main>
  );
}
