import { ContactFormPlaceholder } from "@/components/forms/ContactFormPlaceholder";
import { PageCtaBand } from "@/components/pages/PageCtaBand";
import { PageHero } from "@/components/pages/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ErisietsmisgegaanButton } from "@/components/ui/ErisietsmisgegaanButton";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/content/contact";
import { pages } from "@/content/pages";
import { routes } from "@/content/routes";
import { pageMetadata } from "@/content/seo";
import { site } from "@/content/site";

const page = pages.contact;

export const metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <main className="page-shell page-theme-contact">
      <PageHero aside={page.aside} intro={page.intro} title={page.title} />

      <Section className="contact-rhythm-section" variant="surface">
        <Container className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <Card className="contact-card--highlight !h-auto">
              <p className="text-sm font-semibold uppercase text-muted-foreground">
                Contact
              </p>
              <h2 className="mt-3 text-2xl">{contact.heading}</h2>
              <div className="text-body mt-4 space-y-3">
                {contact.intro.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <dl className="mt-6 grid gap-4 rounded-soft border border-border-soft bg-card/70 p-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold text-foreground">
                    Telefoon
                  </dt>
                  <dd className="text-body">{contact.phone}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">
                    E-mail
                  </dt>
                  <dd className="text-body break-words">
                    <a
                      className="hover:text-foreground hover:underline decoration-brand-green decoration-2 underline-offset-4"
                      href={`mailto:${contact.email}`}
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">
                    Bereikbaarheid
                  </dt>
                  <dd className="text-body">{contact.openingHours}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-foreground">
                    Praktijk
                  </dt>
                  <dd className="text-body">{site.name}</dd>
                </div>
              </dl>
              <Button className="mt-6" href="#contactformulier">
                Naar het contactformulier
              </Button>
            </Card>

            <Card className="contact-card--compact !h-auto">
              <p className="text-sm font-semibold uppercase text-muted-foreground">
                Feedback
              </p>
              <h2 className="mt-3 text-2xl">{contact.complaint.title}</h2>
              <p className="text-body mt-4">{contact.complaint.intro}</p>
              <div className="mt-5">
                <ErisietsmisgegaanButton variant="contact" />
              </div>
            </Card>

            <Card className="contact-card--location !h-auto">
              <p className="text-sm font-semibold uppercase text-muted-foreground">
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
                href={contact.googleMapsUrl}
                icon="route"
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                Bekijk op Google Maps
              </Button>
            </Card>
          </div>

          <Card className="contact-form-card p-6 sm:p-8" id="contactformulier">
            <SectionHeading
              headingLevel="h2"
              intro={contact.form.intro}
              title={contact.form.title}
            />
            <div className="mt-7">
              <ContactFormPlaceholder
                form={contact.form}
                supportEmail={contact.email}
              />
            </div>
          </Card>
        </Container>
      </Section>

      <PageCtaBand
        intro={contact.reassurance}
        links={[
          { label: "Lees de werkwijze", href: routes.werkwijze.href },
          {
            label: "Bekijk praktische informatie",
            href: routes.praktischeInformatie.href,
          },
        ]}
        sectionClassName="page-theme-contact"
        title="Liever eerst verder lezen?"
      />
    </main>
  );
}
