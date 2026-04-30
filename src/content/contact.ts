import { placeholders } from "./placeholders";
import { routes } from "./routes";

export type ContactContent = {
  heading: string;
  intro: string;
  email: string;
  phone: string;
  address: {
    name: string;
    street: string;
    postalCodeCity: string;
    country: string;
  };
  locationDescription: string;
  routeNote: string;
  cta: {
    label: string;
    href: string;
  };
};

// Vervang de gekoppelde placeholders zodra de definitieve praktijkgegevens bekend zijn.
export const contact = {
  heading: "Contact",
  intro:
    "Contactgegevens, adres en aanmeldinformatie worden later ingevuld. De placeholders hieronder maken duidelijk wat nog volgt.",
  email: placeholders.CONTACT_EMAIL.uiText,
  phone: placeholders.CONTACT_PHONE.uiText,
  address: {
    name: "Uniqara - De Hooiberg",
    street: placeholders.LOCATION_ADDRESS.uiText,
    postalCodeCity: placeholders.LOCATION_ADDRESS.uiText,
    country: "Nederland",
  },
  locationDescription:
    "Een rustige praktijklocatie in een landelijke omgeving, met groen, ruimte en een veilige sfeer.",
  routeNote: placeholders.ROUTE_PARKING_INFO.uiText,
  cta: {
    label: "Contactgegevens volgen",
    href: routes.contact.href,
  },
} satisfies ContactContent;
