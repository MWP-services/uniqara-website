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
      city: string;
      careType: string;
      subject: string;
      message: string;
    };
    fieldPlaceholders: {
      name: string;
      email: string;
      phone: string;
      city: string;
      subject: string;
      message: string;
    };
    careTypeOptions: string[];
    submitLabel: string;
    successMessage: string;
  };
  cta: {
    label: string;
    href: string;
  };
};

export const contact = {
  heading: "Contact",
  intro:
    "Neem gerust contact op wanneer je wilt verkennen of Uniqara passend kan zijn. Voor vragen, aanmelding of een kennismaking kun je mailen, bellen of het formulier invullen.",
  reassurance:
    "Een eerste bericht hoeft nog niet volledig te zijn. Vermeld in ieder geval je woonplaats, hulpvraag, telefoonnummer en e-mailadres, dan kan er gericht worden meegedacht.",
  email: "contact@uniqara.nl",
  phone: "06 3603 6772",
  openingHours:
    "Openingstijden worden nog definitief aangevuld. Tijdens afspraken kan de telefoon niet altijd direct worden opgenomen; spreek gerust de voicemail in of stuur een e-mail.",
  ownerName:
    "Elise Honkoop-de Visser, psycholoog NIP en EFT-relatietherapeut. Zzp'er: Annemarie van den Heuvel-de Jager.",
  address: {
    name: "Speltherapie Krimpenerwaard",
    street: "Kerkweg 139a",
    postalCodeCity: "2935 AC Ouderkerk aan den IJssel",
    country: "Nederland",
  },
  locationDescription:
    "Uniqara is gevestigd bij Speltherapie Krimpenerwaard aan de Kerkweg 139a in Ouderkerk aan den IJssel.",
  routeNote:
    "Bekijk de locatie op Google Maps voor de route vanaf je eigen vertrekpunt.",
  form: {
    title: "Aanmeldformulier",
    intro:
      "Gebruik het formulier voor een eerste aanmelding of vraag. Kies de richting die het beste past en beschrijf kort de hulpvraag.",
    handlerPlaceholder:
      "De technische verzending wordt later gekoppeld. Tot die tijd kan contact via contact@uniqara.nl.",
    fields: {
      name: "Naam",
      email: "E-mailadres",
      phone: "Telefoonnummer",
      city: "Woonplaats",
      careType: "Waarvoor zoek je hulp?",
      subject: "Onderwerp",
      message: "Hulpvraag of bericht",
    },
    fieldPlaceholders: {
      name: "Voor- en achternaam",
      email: "naam@voorbeeld.nl",
      phone: "06 1234 5678",
      city: "Woonplaats",
      subject: "Bijvoorbeeld: aanmelding of kennismaking",
      message:
        "Beschrijf kort de hulpvraag, leeftijd en wat je graag wilt bespreken.",
    },
    careTypeOptions: ["Kind en jeugd", "Volwassenen", "Relatie"],
    submitLabel: "Bericht controleren",
    successMessage:
      "Voorbeeldmelding: je bericht is nog niet verzonden. De echte formulierafhandeling wordt later gekoppeld.",
  },
  cta: {
    label: "Neem contact op",
    href: routes.contact.href,
  },
} satisfies ContactContent;
