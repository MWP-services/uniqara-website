import { placeholders } from "./placeholders";
import { routes, type RouteKey } from "./routes";
import { services } from "./services";

export type PageLink = {
  label: string;
  href: string;
};

export type PageSection = {
  title: string;
  body: string[];
  links?: PageLink[];
};

export type PageContent = {
  routeKey: RouteKey;
  title: string;
  description: string;
  intro: string;
  sections: PageSection[];
  ctas: PageLink[];
};

export type PagesContent = {
  overUniqara: PageContent;
  voorWie: PageContent;
  hulpvragen: PageContent;
  werkwijze: PageContent;
  locatie: PageContent;
  praktischeInformatie: PageContent;
  contact: PageContent;
  privacy: PageContent;
};

// Pagina-inhoud voor de App Router routes. Pas hier tekst aan, niet in de routebestanden.
export const pages = {
  overUniqara: {
    routeKey: "overUniqara",
    title: "Over Uniqara",
    description:
      "Maak kennis met Uniqara: een rustige psychologiepraktijk met aandacht voor veiligheid, vertrouwen en professionele begeleiding.",
    intro:
      "Uniqara is een plek waar zorgvuldigheid en warmte samenkomen. De praktijk is in opbouw; definitieve details worden stap voor stap aangevuld.",
    sections: [
      {
        title: "Visie",
        body: [
          "Bij Uniqara staat de mens achter de hulpvraag centraal. Er is aandacht voor wat iemand meemaakt, nodig heeft en al in zich draagt.",
          "De begeleiding is helder, zorgvuldig en afgestemd op de situatie van kind, jongere, ouder of gezin.",
        ],
      },
      {
        title: "Persoonlijke benadering",
        body: [
          "Er wordt rustig gekeken naar de vraag, de context en wat helpend kan zijn. Samen zoeken we naar taal, richting en passende ondersteuning.",
          placeholders.OWNER_NAME.uiText,
        ],
      },
      {
        title: "Sfeer en kernwaarden",
        body: [
          "De uitstraling van de praktijk is rustig, veilig en professioneel. Natuur, vertrouwen en aandacht vormen belangrijke uitgangspunten.",
        ],
      },
    ],
    ctas: [
      { label: "Bekijk voor wie", href: routes.voorWie.href },
      { label: "Lees over de werkwijze", href: routes.werkwijze.href },
    ],
  },
  voorWie: {
    routeKey: "voorWie",
    title: "Voor wie",
    description:
      "Uniqara biedt ondersteuning voor kinderen, jongeren, ouders en gezinnen, met ruimte voor afstemming met school of verwijzers.",
    intro:
      "Iedere hulpvraag heeft een eigen verhaal. Deze pagina geeft een eerste beeld van de doelgroepen waarvoor Uniqara ondersteuning kan bieden.",
    sections: [
      {
        title: "Kinderen",
        body: [
          "Voor kinderen kan begeleiding helpen wanneer emoties, gedrag, ontwikkeling of spanning vragen oproepen.",
          "Er is aandacht voor veiligheid, tempo en de omgeving waarin het kind leeft.",
        ],
      },
      {
        title: "Jongeren",
        body: [
          "Jongeren kunnen terecht wanneer zij vastlopen, veel druk ervaren of behoefte hebben aan iemand die rustig meedenkt.",
        ],
      },
      {
        title: "Ouders en verzorgers",
        body: [
          "Ouders en verzorgers worden waar passend betrokken. Hun kennis van het kind en de thuissituatie is waardevol in het traject.",
        ],
      },
      {
        title: "Scholen en verwijzers",
        body: [
          "Afstemming met scholen of verwijzers kan later onderdeel worden van de werkwijze.",
          placeholders.REFERRER_SCHOOL_INFO.uiText,
        ],
      },
    ],
    ctas: [
      { label: "Bekijk hulpvragen", href: routes.hulpvragen.href },
      { label: "Neem contact op", href: routes.contact.href },
    ],
  },
  hulpvragen: {
    routeKey: "hulpvragen",
    title: "Hulpvragen",
    description:
      "Een rustig overzicht van thema's waarmee kinderen, jongeren en ouders bij Uniqara terecht kunnen.",
    intro:
      "Hulpvragen kunnen klein beginnen of al langer spelen. Uniqara kijkt zorgvuldig mee zonder zware woorden groter te maken dan nodig.",
    sections: services.helpQuestions.map((question) => ({
      title: question.title,
      body: [question.description],
      links: [{ label: "Lees over de werkwijze", href: routes.werkwijze.href }],
    })),
    ctas: [
      { label: "Voor wie is Uniqara", href: routes.voorWie.href },
      { label: "Contactgegevens bekijken", href: routes.contact.href },
    ],
  },
  werkwijze: {
    routeKey: "werkwijze",
    title: "Werkwijze",
    description:
      "Lees hoe een traject bij Uniqara rustig en zorgvuldig kan worden opgebouwd, van kennismaking tot evaluatie.",
    intro:
      "Een duidelijke werkwijze geeft houvast. De precieze invulling wordt afgestemd op de hulpvraag en de situatie.",
    sections: [
      {
        title: "Kennismaking",
        body: [
          "Een eerste contactmoment is bedoeld om kort te verkennen wat er speelt en of Uniqara passend kan zijn.",
        ],
      },
      {
        title: "Intake",
        body: [
          "Tijdens de intake wordt de hulpvraag zorgvuldig besproken. Er is aandacht voor achtergrond, verwachtingen en praktische afspraken.",
        ],
      },
      {
        title: "Traject en begeleiding",
        body: [
          "Daarna volgt een traject dat aansluit bij de vraag. Dit kan bestaan uit begeleiding, onderzoek, behandeling of oudergesprekken.",
        ],
      },
      {
        title: "Evaluatie en afstemming",
        body: [
          "Regelmatig wordt gekeken wat werkt, wat bijgesteld moet worden en welke afstemming met ouders, school of verwijzers helpend is.",
        ],
      },
    ],
    ctas: [
      { label: "Praktische informatie", href: routes.praktischeInformatie.href },
      { label: "Neem contact op", href: routes.contact.href },
    ],
  },
  locatie: {
    routeKey: "locatie",
    title: "Locatie",
    description:
      "De locatie van Uniqara krijgt een rustige landelijke sfeer, met natuur, ruimte en De Hooiberg als herkenbare plek.",
    intro:
      "De plek waar zorg plaatsvindt doet ertoe. Uniqara wil een omgeving bieden die rustig, overzichtelijk en prettig voelt.",
    sections: [
      {
        title: "Landelijke sfeer",
        body: [
          "De praktijk krijgt een rustige uitstraling met veel aandacht voor groen, natuur en ruimte.",
          placeholders.PRACTICE_PHOTOS.uiText,
        ],
      },
      {
        title: "De Hooiberg",
        body: [
          "De Hooiberg vormt straks een herkenbare plek binnen de locatiebeleving.",
          placeholders.HERO_IMAGE_HOOIBERG.uiText,
        ],
      },
      {
        title: "Bereikbaarheid",
        body: [
          placeholders.LOCATION_ADDRESS.uiText,
          placeholders.ROUTE_PARKING_INFO.uiText,
        ],
      },
    ],
    ctas: [
      { label: "Praktische informatie", href: routes.praktischeInformatie.href },
      { label: "Contact", href: routes.contact.href },
    ],
  },
  praktischeInformatie: {
    routeKey: "praktischeInformatie",
    title: "Praktische informatie",
    description:
      "Praktische informatie over aanmelden, tarieven, vergoedingen, wachttijd en contactroute bij Uniqara.",
    intro:
      "Deze pagina verzamelt de praktische informatie die bezoekers nodig hebben voordat zij contact opnemen.",
    sections: [
      {
        title: "Aanmelden",
        body: [placeholders.REGISTRATION_PROCESS.uiText],
      },
      {
        title: "Tarieven en vergoedingen",
        body: [placeholders.TARIFFS_INFO.uiText],
      },
      {
        title: "Wachttijd",
        body: [placeholders.WAITLIST_INFO.uiText],
      },
      {
        title: "Contactroute",
        body: [
          "Wanneer de praktijkgegevens compleet zijn, komt hier een heldere uitleg over de beste manier om contact op te nemen.",
          placeholders.CONTACT_EMAIL.uiText,
        ],
      },
    ],
    ctas: [
      { label: "Contact", href: routes.contact.href },
      { label: "Privacy", href: routes.privacy.href },
    ],
  },
  contact: {
    routeKey: "contact",
    title: "Contact",
    description:
      "Contactgegevens en route-informatie voor psychologiepraktijk Uniqara.",
    intro:
      "De definitieve contactgegevens volgen nog. De pagina staat alvast klaar met duidelijke placeholders.",
    sections: [
      {
        title: "Contactgegevens",
        body: [
          placeholders.CONTACT_EMAIL.uiText,
          placeholders.CONTACT_PHONE.uiText,
        ],
      },
      {
        title: "Locatie",
        body: [
          "Uniqara krijgt een rustige plek bij De Hooiberg.",
          placeholders.LOCATION_ADDRESS.uiText,
        ],
      },
      {
        title: "Route en aankomst",
        body: [placeholders.ROUTE_PARKING_INFO.uiText],
      },
    ],
    ctas: [
      { label: "Bekijk locatie", href: routes.locatie.href },
      { label: "Praktische informatie", href: routes.praktischeInformatie.href },
    ],
  },
  privacy: {
    routeKey: "privacy",
    title: "Privacy",
    description:
      "Placeholder voor privacy-informatie, dossiervoering en zorgvuldig omgaan met gegevens bij Uniqara.",
    intro:
      "Zorgvuldige omgang met gegevens is belangrijk. De definitieve privacytekst wordt later toegevoegd.",
    sections: [
      {
        title: "Privacyverklaring",
        body: [placeholders.PRIVACY_INFO.uiText],
      },
      {
        title: "Dossier en gegevens",
        body: [
          "Hier komt later een heldere uitleg over dossiervoering, bewaartermijnen en rechten van clienten.",
        ],
      },
      {
        title: "Vragen over privacy",
        body: [
          "Voor privacyvragen komt later een passende contactroute beschikbaar.",
          placeholders.CONTACT_EMAIL.uiText,
        ],
      },
    ],
    ctas: [
      { label: "Contact", href: routes.contact.href },
      { label: "Praktische informatie", href: routes.praktischeInformatie.href },
    ],
  },
} satisfies PagesContent;
