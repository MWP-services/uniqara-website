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
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": organizationId,
      name: site.name,
      legalName: site.name,
      url: absoluteUrl(routes.home.href),
      description: brand.shortDescription,
      image: absoluteUrl("/opengraph-image"),
      logo: absoluteUrl("/placeholders/logo.jpeg"),
      telephone: contact.phone,
      email: contact.email,
      openingHours: contact.openingHours,
      sameAs: [placeholders.SOCIAL_PROFILE_URLS.uiText],
      address: {
        "@type": "PostalAddress",
        name: contact.address.name,
        streetAddress: contact.address.street,
        addressLocality: contact.address.postalCodeCity,
        addressCountry: contact.address.country,
      },
      location: {
        "@id": placeId,
      },
    },
    {
      "@type": "Place",
      "@id": placeId,
      name: contact.address.name,
      description: contact.locationDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address.street,
        addressLocality: contact.address.postalCodeCity,
        addressCountry: contact.address.country,
      },
    },
  ],
};

export function serializeJsonLd(data: JsonLdGraph) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
