import { placeholders } from "./placeholders";
import { contact } from "./contact";
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

export type PageAside = {
  label: string;
  title: string;
  text: string;
};

export type PageContent = {
  routeKey: RouteKey;
  title: string;
  description: string;
  intro: string;
  aside?: PageAside;
  showStepNumbers?: boolean;
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
      "Uniqara is een plek waar zorgvuldigheid en warmte samenkomen. Definitieve praktijkdetails worden later rustig aangevuld.",
    aside: {
      label: "Sfeerbeeld",
      title: "Rust, groen en aandacht",
      text: placeholders.PRACTICE_PHOTOS.uiText,
    },
    sections: [
      {
        title: "Visie",
        body: [
          "Bij Uniqara staat de mens achter de hulpvraag centraal. Er is aandacht voor wat iemand meemaakt, nodig heeft en al in zich draagt.",
          "De begeleiding is helder, zorgvuldig en afgestemd op de situatie van kind, jongere, ouder of gezin.",
        ],
        links: [
          { label: "Voor wie", href: routes.voorWie.href },
          { label: "Werkwijze", href: routes.werkwijze.href },
        ],
      },
      {
        title: "Persoonlijke benadering",
        body: [
          "Er wordt rustig gekeken naar de vraag, de context en wat helpend kan zijn. Samen zoeken we naar taal, richting en passende ondersteuning.",
          placeholders.OWNER_NAME.uiText,
        ],
        links: [{ label: "Neem contact op", href: routes.contact.href }],
      },
      {
        title: "Sfeer en kernwaarden",
        body: [
          "De uitstraling van de praktijk is rustig, veilig en professioneel. Natuur, vertrouwen en aandacht vormen belangrijke uitgangspunten.",
          "De landelijke locatie en de Hooiberg krijgen later een zichtbare plek met echte fotografie.",
        ],
        links: [{ label: "Bekijk locatie", href: routes.locatie.href }],
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
    aside: {
      label: "Doelgroepen",
      title: "Samen kijken wat past",
      text: "De exacte doelgroepafbakening wordt later verder afgestemd met de praktijk.",
    },
    sections: [
      {
        title: "Kinderen",
        body: [
          "Voor kinderen kan begeleiding helpen wanneer emoties, gedrag, ontwikkeling of spanning vragen oproepen.",
          "Er is aandacht voor veiligheid, tempo en de omgeving waarin het kind leeft.",
        ],
        links: [
          { label: "Bekijk hulpvragen", href: routes.hulpvragen.href },
          { label: "Werkwijze", href: routes.werkwijze.href },
        ],
      },
      {
        title: "Jongeren",
        body: [
          "Jongeren kunnen terecht wanneer zij vastlopen, veel druk ervaren of behoefte hebben aan iemand die rustig meedenkt.",
          "De begeleiding sluit aan bij leeftijd, zelfstandigheid en wat de jongere zelf belangrijk vindt.",
        ],
        links: [{ label: "Bekijk hulpvragen", href: routes.hulpvragen.href }],
      },
      {
        title: "Ouders en verzorgers",
        body: [
          "Ouders en verzorgers worden waar passend betrokken. Hun kennis van het kind en de thuissituatie is waardevol in het traject.",
          "Samen ontstaat meer zicht op wat er speelt en welke ondersteuning helpend kan zijn.",
        ],
        links: [{ label: "Neem contact op", href: routes.contact.href }],
      },
      {
        title: "Scholen en verwijzers",
        body: [
          "Afstemming met scholen of verwijzers kan later onderdeel worden van de werkwijze.",
          placeholders.REFERRER_SCHOOL_INFO.uiText,
        ],
        links: [{ label: "Praktische informatie", href: routes.praktischeInformatie.href }],
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
    aside: {
      label: "Overzicht",
      title: "Zacht verkennen wat speelt",
      text: "De thema's op deze pagina zijn bedoeld als herkenning en startpunt. De exacte vraag wordt altijd rustig samen bekeken.",
    },
    sections: services.helpQuestions.map((question) => ({
      title: question.title,
      body: [question.description],
      links: [
        { label: "Lees over de werkwijze", href: routes.werkwijze.href },
        { label: "Neem contact op", href: routes.contact.href },
      ],
    })),
    ctas: [
      { label: "Voor wie is Uniqara", href: routes.voorWie.href },
      { label: "Neem contact op", href: routes.contact.href },
    ],
  },
  werkwijze: {
    routeKey: "werkwijze",
    title: "Werkwijze",
    description:
      "Lees hoe een traject bij Uniqara rustig en zorgvuldig kan worden opgebouwd, van kennismaking tot evaluatie.",
    intro:
      "Een duidelijke werkwijze geeft houvast. De precieze invulling wordt afgestemd op de hulpvraag en de situatie.",
    aside: {
      label: "Aanmelden",
      title: "Eerste stap",
      text: placeholders.REGISTRATION_PROCESS.uiText,
    },
    showStepNumbers: true,
    sections: [
      {
        title: "Kennismaking",
        body: [
          "Een eerste contactmoment is bedoeld om kort te verkennen wat er speelt en of Uniqara passend kan zijn.",
          "Er is ruimte voor praktische vragen en een eerste indruk van de hulpvraag.",
        ],
        links: [{ label: "Neem contact op", href: routes.contact.href }],
      },
      {
        title: "Intake",
        body: [
          "Tijdens de intake wordt de hulpvraag zorgvuldig besproken. Er is aandacht voor achtergrond, verwachtingen en praktische afspraken.",
          "Waar passend worden ouders of verzorgers betrokken bij het verhelderen van de vraag.",
        ],
        links: [{ label: "Voor wie", href: routes.voorWie.href }],
      },
      {
        title: "Traject en begeleiding",
        body: [
          "Daarna volgt een traject dat aansluit bij de vraag. Dit kan bestaan uit begeleiding, onderzoek, behandeling of oudergesprekken.",
          "Het tempo en de vorm worden afgestemd op wat veilig, haalbaar en helpend is.",
        ],
        links: [{ label: "Hulpvragen", href: routes.hulpvragen.href }],
      },
      {
        title: "Evaluatie en afstemming",
        body: [
          "Regelmatig wordt gekeken wat werkt, wat bijgesteld moet worden en welke afstemming met ouders, school of verwijzers helpend is.",
          "Zo blijft het traject overzichtelijk en verbonden met de dagelijkse context.",
        ],
        links: [{ label: "Praktische informatie", href: routes.praktischeInformatie.href }],
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
    aside: {
      label: "Sfeerbeeld volgt",
      title: "De Hooiberg en groen",
      text: placeholders.HERO_IMAGE_HOOIBERG.uiText,
    },
    sections: [
      {
        title: "De Hooiberg",
        body: [
          "De Hooiberg wordt een herkenbare plek binnen de locatiebeleving van Uniqara: landelijk, rustig en overzichtelijk.",
          "Echte fotografie volgt later, zodat bezoekers vooraf al een eerlijk beeld krijgen van aankomst en sfeer.",
          placeholders.PRACTICE_PHOTOS.uiText,
        ],
        links: [{ label: "Bekijk praktische informatie", href: routes.praktischeInformatie.href }],
      },
      {
        title: "Natuur en rust",
        body: [
          "Groen, ruimte en een rustige omgeving ondersteunen de veilige en warme uitstraling van de praktijk.",
          "De locatiepagina blijft bewust helder en niet druk, zodat de sfeer rustig blijft aanvoelen.",
          placeholders.HERO_IMAGE_NATURE.uiText,
        ],
        links: [{ label: "Lees over Uniqara", href: routes.overUniqara.href }],
      },
      {
        title: "Bereikbaarheid",
        body: [
          placeholders.LOCATION_ADDRESS.uiText,
          placeholders.ROUTE_PARKING_INFO.uiText,
        ],
        links: [{ label: "Neem contact op", href: routes.contact.href }],
      },
      {
        title: "Route en kaart",
        body: [
          "Hier komt later een eenvoudig routeblok of kaartweergave, passend bij de rustige stijl van de site.",
          placeholders.LOCATION_MAP_PLACEHOLDER.uiText,
        ],
        links: [{ label: "Neem contact op", href: routes.contact.href }],
      },
    ],
    ctas: [
      { label: "Praktische informatie", href: routes.praktischeInformatie.href },
      { label: "Neem contact op", href: routes.contact.href },
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
        body: [
          "Aanmelden begint met een rustige eerste stap. De definitieve route wordt later ingevuld, zodat bezoekers precies weten wat zij kunnen verwachten.",
          placeholders.REGISTRATION_PROCESS.uiText,
        ],
        links: [{ label: "Lees de werkwijze", href: routes.werkwijze.href }],
      },
      {
        title: "Tarieven en vergoedingen",
        body: [
          "Tarieven, betaalafspraken en eventuele vergoedingen worden transparant vermeld zodra deze definitief zijn.",
          placeholders.TARIFFS_INFO.uiText,
          placeholders.REIMBURSEMENT_INFO.uiText,
        ],
        links: [{ label: "Neem contact op", href: routes.contact.href }],
      },
      {
        title: "Wachttijd",
        body: [
          "De actuele wachttijd of aanmeldstatus krijgt hier een duidelijke plek, zodat verwachtingen vanaf het begin helder zijn.",
          placeholders.WAITLIST_INFO.uiText,
        ],
        links: [{ label: "Neem contact op", href: routes.contact.href }],
      },
      {
        title: "Contactroute",
        body: [
          "Voor vragen of aanmelding komt hier de gewenste contactroute te staan. Tot die tijd blijft de informatie bewust als placeholder zichtbaar.",
          placeholders.CONTACT_ROUTE_INFO.uiText,
        ],
        links: [{ label: "Neem contact op", href: routes.contact.href }],
      },
      {
        title: "Veelgestelde vragen",
        body: [
          "Korte antwoorden op praktische vragen kunnen bezoekers later helpen om sneller overzicht te krijgen.",
          placeholders.FAQ_CONTENT.uiText,
        ],
        links: [{ label: "Bekijk privacy", href: routes.privacy.href }],
      },
    ],
    ctas: [
      { label: "Neem contact op", href: routes.contact.href },
      { label: "Bekijk privacy", href: routes.privacy.href },
    ],
  },
  contact: {
    routeKey: "contact",
    title: "Contact",
    description:
      "Contactgegevens en route-informatie voor psychologiepraktijk Uniqara.",
    intro: contact.intro,
    aside: {
      label: "Eerste stap",
      title: "Rustig contact opnemen",
      text: contact.reassurance,
    },
    sections: [
      {
        title: "Contactgegevens",
        body: [
          placeholders.CONTACT_EMAIL.uiText,
          placeholders.CONTACT_PHONE.uiText,
          placeholders.OPENING_HOURS.uiText,
          placeholders.OWNER_NAME.uiText,
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
      "Zorgvuldige omgang met gegevens is belangrijk. Deze pagina staat klaar als professionele placeholder tot de definitieve privacytekst is aangeleverd.",
    aside: {
      label: "Juridische tekst",
      title: "Definitieve controle volgt",
      text: placeholders.PRIVACY_LEGAL_TEXT.uiText,
    },
    sections: [
      {
        title: "Welke gegevens",
        body: [
          "Hier komt later helder te staan welke gegevens mogelijk worden verwerkt wanneer iemand contact opneemt of begeleiding start.",
          placeholders.PRIVACY_DATA_CATEGORIES.uiText,
        ],
        links: [{ label: "Neem contact op", href: routes.contact.href }],
      },
      {
        title: "Dossier en gegevens",
        body: [
          "Voor zorgvuldige begeleiding kan dossiervoering nodig zijn. De definitieve uitleg wordt later juridisch en inhoudelijk aangevuld.",
          placeholders.PRIVACY_DOSSIER_INFO.uiText,
        ],
        links: [{ label: "Praktische informatie", href: routes.praktischeInformatie.href }],
      },
      {
        title: "Privacyverklaring",
        body: [
          "De volledige privacyverklaring wordt later vervangen door de definitieve tekst van de praktijk.",
          placeholders.PRIVACY_INFO.uiText,
          placeholders.PRIVACY_LEGAL_TEXT.uiText,
        ],
      },
      {
        title: "Rechten en verwijzingen",
        body: [
          "Hier komt later te staan welke rechten bezoekers en clienten hebben rond inzage, correctie en verwijdering.",
          placeholders.PRIVACY_RIGHTS_INFO.uiText,
        ],
      },
      {
        title: "Contact over privacy",
        body: [
          placeholders.PRIVACY_CONTACT_ROUTE.uiText,
          placeholders.CONTACT_EMAIL.uiText,
        ],
        links: [{ label: "Contactpagina", href: routes.contact.href }],
      },
    ],
    ctas: [
      { label: "Neem contact op", href: routes.contact.href },
      { label: "Praktische informatie", href: routes.praktischeInformatie.href },
    ],
  },
} satisfies PagesContent;
