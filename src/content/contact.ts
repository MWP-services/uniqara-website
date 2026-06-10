import { placeholders } from "./placeholders";
import { routes } from "./routes";

export type ContactContent = {
  heading: string;
  heroIntro: string;
  intro: string;
  reassurance: string;
  email: string;
  phone: string;
  openingHours: string;
  ownerName: string;
  googleMapsUrl: string;
  address: {
    name: string;
    street: string;
    postalCodeCity: string;
    country: string;
  };
  locationDescription: string;
  routeNote: string;
  complaint: {
    title: string;
    intro: string;
    href: string;
    buttonAlt: string;
    buttonAriaLabel: string;
    contactImageSrc: string;
    footerImageSrc: string;
  };
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
  heading: "Kom in contact met Uniqara",
  heroIntro:
    "Voor korte vragen, aanmelding of het maken van een afspraak kun je telefonisch contact opnemen of het formulier gebruiken.",
  intro:
    "Uniqara is telefonisch bereikbaar voor korte vragen en berichten via 06* 486 468 40. Tijdens afspraken kan de telefoon niet altijd direct worden opgenomen.\n\nVoor vragen over behandelmogelijkheden, aanmeldingen of het maken van een afspraak kun je gebruikmaken van het contactformulier. We nemen daarna zo zorgvuldig mogelijk contact met je op.",
  reassurance:
    "Een eerste bericht hoeft niet volledig te zijn. Vermeld woonplaats, hulpvraag, telefoonnummer en e-mailadres.",
  email: "info@uniqara.nl",
  phone: "06* 486 468 40",
  openingHours:
    "Werkdagen van 9.00 tot 17.00 uur.",
  ownerName:
    "Elise Honkoop-de Visser, psycholoog NIP en EFT-relatietherapeut. Zzp'er: Annemarie van den Heuvel-de Jager.",
  googleMapsUrl:
    placeholders.GOOGLE_MAPS_LINK.uiText,
  address: {
    name: "Hooiberg",
    street: "Kerkweg 139a",
    postalCodeCity: "2935 AC Ouderkerk aan den IJssel",
    country: "Nederland",
  },
  locationDescription:
    "Uniqara is gevestigd bij Hooiberg aan de Kerkweg 139a in Ouderkerk aan den IJssel.",
  routeNote:
    "Bekijk de locatie op Google Maps voor de route.",
  complaint: {
    title: "Onvrede melden",
    intro:
      "Ben je ergens niet tevreden over of wil je onvrede melden? We vinden het belangrijk dat je je gehoord voelt. Via Erisietsmisgegaan.nl kun je je melding doorgeven.",
    href: "https://erisietsmisgegaan.nl/onvrede-melden/",
    buttonAlt: "Onvrede melden",
    buttonAriaLabel: "Onvrede melden via Erisietsmisgegaan.nl",
    contactImageSrc:
      "https://erisietsmisgegaan.nl/wp-content/uploads/2018/10/erisietsmisgegaan-onvredemelden2.png",
    footerImageSrc:
      "https://erisietsmisgegaan.nl/wp-content/uploads/2018/10/erisietsmisgegaan-onvredemelden3.png",
  },
  form: {
    title: "Aanmeldformulier",
    intro:
      "Gebruik het formulier voor een eerste aanmelding of vraag. Beschrijf kort de hulpvraag.",
    handlerPlaceholder:
      "Je bericht wordt veilig doorgestuurd naar de praktijkmailbox. Deel geen acute of spoedeisende informatie via dit formulier.",
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
      phone: "Telefoonnummer",
      city: "Woonplaats",
      subject: "Bijvoorbeeld: aanmelding of kennismaking",
      message:
        "Beschrijf kort de hulpvraag, leeftijd en je vraag.",
    },
    careTypeOptions: ["Kind en jeugd", "Volwassenen", "Relatie"],
    submitLabel: "Bericht versturen",
    successMessage:
      "Bedankt, je bericht is verzonden. We nemen zo snel mogelijk contact met je op.",
  },
  cta: {
    label: "Neem contact op",
    href: routes.contact.href,
  },
} satisfies ContactContent;
