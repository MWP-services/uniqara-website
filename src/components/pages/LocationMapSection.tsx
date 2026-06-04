import { contact } from "@/content/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const fullAddress = [
  contact.address.name,
  contact.address.street,
  contact.address.postalCodeCity,
  contact.address.country,
].join(", ");

const encodedAddress = encodeURIComponent(fullAddress);
const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

export function LocationMapSection() {
  return (
    <Section id="kaart-en-route" variant="surface" className="pt-0">
      <Container>
        <div className="overflow-hidden rounded-medium border border-border-soft bg-card shadow-card">
          <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-5 sm:p-7 lg:p-8">
              <p className="eyebrow">Locatie</p>
              <h2 className="mt-4 text-2xl sm:text-3xl">Kaart en route</h2>
              <address className="mt-4 not-italic text-body">
                <span className="block font-semibold text-foreground">
                  {contact.address.name}
                </span>
                <span className="block">{contact.address.street}</span>
                <span className="block">{contact.address.postalCodeCity}</span>
                <span className="block">{contact.address.country}</span>
              </address>
              <p className="mt-4 text-support">{contact.routeNote}</p>
              <div className="mt-6">
                <Button
                  href={contact.googleMapsUrl}
                  icon="route"
                  rel="noreferrer"
                  target="_blank"
                  variant="secondary"
                >
                  Bekijk op Google Maps
                </Button>
              </div>
            </div>

            <div className="min-h-[20rem] border-t border-border-soft lg:border-l lg:border-t-0">
              <iframe
                aria-label={`Google Maps kaart voor ${fullAddress}`}
                className="h-full min-h-[20rem] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapSrc}
                title={`Kaart van ${contact.address.name}`}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
