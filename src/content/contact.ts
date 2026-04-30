import { placeholders } from "./placeholders";
import { routes } from "./routes";

export type ContactContent = {
  heading: string;
  intro: string;
  reassurance: string;
  email: string;
  phone: string;
  openingHours: string;
  ownerName: string;
  address: {
    name: string;
    street: string;
    postalCodeCity: string;
    country: string;
  };
  locationDescription: string;
  routeNote: string;
  form: {
    title: string;
    intro: string;
    handlerPlaceholder: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    submitLabel: string;
    successMessage: string;
  };
  cta: {
    label: string;
    href: string;
  };
};

// Vervang de gekoppelde placeholders zodra de definitieve praktijkgegevens bekend zijn.
export const contact = {
  heading: "Contact",
  intro:
    "Neem rustig contact op wanneer je wilt verkennen of Uniqara passend kan zijn. De definitieve contactgegevens worden later ingevuld.",
  reassurance:
    "Een eerste bericht hoeft nog niet volledig te zijn. Kort aangeven wat de vraag is, is genoeg om samen te bepalen wat een passende vervolgstap kan zijn.",
  email: placeholders.CONTACT_EMAIL.uiText,
  phone: placeholders.CONTACT_PHONE.uiText,
  openingHours: placeholders.OPENING_HOURS.uiText,
  ownerName: placeholders.OWNER_NAME.uiText,
  address: {
    name: "Uniqara - De Hooiberg",
    street: placeholders.LOCATION_ADDRESS.uiText,
    postalCodeCity: placeholders.LOCATION_ADDRESS.uiText,
    country: "Nederland",
  },
  locationDescription:
    "Een rustige praktijklocatie in een landelijke omgeving, met groen, ruimte en een veilige sfeer.",
  routeNote: placeholders.ROUTE_PARKING_INFO.uiText,
  form: {
    title: "Contactformulier",
    intro:
      "Dit formulier is alvast vormgegeven als placeholder. De technische verzending wordt later gekoppeld.",
    handlerPlaceholder: placeholders.CONTACT_FORM_HANDLER.uiText,
    fields: {
      name: "Naam",
      email: "E-mailadres",
      phone: "Telefoonnummer",
      subject: "Onderwerp",
      message: "Bericht",
    },
    submitLabel: "Bericht controleren",
    successMessage:
      "Formulierplaceholder: je bericht is niet verzonden. De echte formulierafhandeling wordt later gekoppeld.",
  },
  cta: {
    label: "Contactgegevens volgen",
    href: routes.contact.href,
  },
} satisfies ContactContent;
