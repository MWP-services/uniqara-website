import type { Metadata } from "next";
import { ContactFormPlaceholder } from "@/components/forms/ContactFormPlaceholder";
import { PageCtaBand } from "@/components/pages/PageCtaBand";
import { PageHero } from "@/components/pages/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/content/contact";
import { pages } from "@/content/pages";
import { routes } from "@/content/routes";
import { site } from "@/content/site";

const page = pages.contact;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHero aside={page.aside} intro={page.intro} title={page.title} />

      <Section variant="surface">
        <Container className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <Card>
              <p className="text-sm font-semibold uppercase text-brand-green">
                Contactgegevens
              </p>
              <h2 className="mt-3 text-2xl">{site.name}</h2>
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

      <PageCtaBand
        intro={contact.reassurance}
        links={[
          { label: "Lees de werkwijze", href: routes.werkwijze.href },
          {
            label: "Praktische informatie",
            href: routes.praktischeInformatie.href,
          },
        ]}
        title="Liever eerst rustig lezen?"
      />
    </main>
  );
}
