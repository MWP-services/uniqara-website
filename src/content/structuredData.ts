import { contact } from "./contact";
import { placeholders } from "./placeholders";
import { routes } from "./routes";
import { seo, absoluteUrl } from "./seo";
import { brand, site } from "./site";

export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

export type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": JsonLdValue[];
};

const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");
const placeId = absoluteUrl("/#practice-location");
const schemaPhone = contact.phone.includes("*") ? undefined : contact.phone;
const hasPublicPhone =
  Boolean(schemaPhone) &&
  schemaPhone !== placeholders.CONTACT_PHONE.uiText &&
  schemaPhone !== placeholders.TELEFOONNUMMER_VOLGT.uiText;
const socialProfileUrls = placeholders.SOCIAL_PROFILE_URLS.uiText.startsWith(
  "http",
)
  ? [placeholders.SOCIAL_PROFILE_URLS.uiText]
  : [];

function splitPostalCodeCity(value: string) {
  const match = value.match(/^(\d{4}\s?[A-Z]{2})\s+(.+)$/);

  return {
    postalCode: match?.[1] ?? value,
    city: match?.[2] ?? value,
  };
}

const addressParts = splitPostalCodeCity(contact.address.postalCodeCity);
const postalAddress = {
  "@type": "PostalAddress",
  name: contact.address.name,
  streetAddress: contact.address.street,
  postalCode: addressParts.postalCode,
  addressLocality: addressParts.city,
  addressRegion: "Zuid-Holland",
  addressCountry: contact.address.country,
};

// Structured data gebruikt placeholders totdat domein, contactgegevens,
// openingstijden en social profielen definitief zijn aangeleverd.
export const structuredData: JsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: seo.siteName,
      url: absoluteUrl(routes.home.href),
      description: seo.defaultDescription,
      inLanguage: "nl-NL",
      publisher: {
        "@id": organizationId,
      },
    },
    {
      "@type": ["Organization", "LocalBusiness", "MedicalBusiness", "ProfessionalService"],
      "@id": organizationId,
      name: site.name,
      legalName: site.name,
      url: absoluteUrl(routes.home.href),
      description: brand.shortDescription,
      image: absoluteUrl("/opengraph-image"),
      logo: absoluteUrl("/assets/logo-transparent.png"),
      ...(hasPublicPhone ? { telephone: schemaPhone } : {}),
      email: contact.email,
      openingHours: contact.openingHours,
      hasMap: contact.googleMapsUrl,
      areaServed: ["Krimpenerwaard", "Gouda", "Zuidplas", "Waddinxveen", "Bodegraven-Reeuwijk"],
      ...(socialProfileUrls.length > 0 ? { sameAs: socialProfileUrls } : {}),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Aanmelding en praktijkvragen",
        email: contact.email,
        availableLanguage: ["nl-NL"],
      },
      address: postalAddress,
      location: {
        "@id": placeId,
      },
    },
    {
      "@type": "Place",
      "@id": placeId,
      name: contact.address.name,
      description: contact.locationDescription,
      hasMap: contact.googleMapsUrl,
      address: postalAddress,
    },
  ],
};

export function serializeJsonLd(data: JsonLdGraph) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
