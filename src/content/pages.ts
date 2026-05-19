import { contact } from "./contact";
import { placeholders } from "./placeholders";
import { routes, routeGroups, type RouteKey } from "./routes";

export type PageLink = {
  label: string;
  href: string;
};

export type PageSection = {
  title: string;
  body: string[];
  illustration?: PageIllustration;
  links?: PageLink[];
};

export type PageIllustration = {
  alt: string;
  src: string;
  tone?: "turquoise" | "yellow" | "coral" | "neutral";
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
  illustration?: PageIllustration;
  showStepNumbers?: boolean;
  sections: PageSection[];
  ctas: PageLink[];
};

export type PageRouteKey = Exclude<
  RouteKey,
  "home" | "overUniqaraLegacy" | "hulpvragenLegacy" | "privacyLegacy"
>;

const contactCta = { label: "Neem contact op", href: routes.contact.href };
const practicalCta = {
  label: "Praktische informatie",
  href: routes.praktischeInformatie.href,
};

export const pages = {
  wieZijnWij: {
    routeKey: "wieZijnWij",
    title: "Wie zijn wij",
    description:
      "Maak kennis met Uniqara: visie, missie, behandelaren, kernwaarden en persoonlijke benadering.",
    intro:
      "Uniqara biedt een rustige, professionele praktijkplek waar aandacht, veiligheid en groei centraal staan.",
    illustration: {
      alt: "Vriendelijke illustratie met dieren als beeld voor veiligheid en verbinding.",
      src: "/assets/DIEREN.jpg",
      tone: "turquoise",
    },
    aside: {
      label: "Praktijk",
      title: "Uniqara",
      text: contact.ownerName,
    },
    sections: [
      {
        title: "Visie en missie",
        body: [
          "Missie: Uniqara helpt kinderen, jongeren en gezinnen om met vertrouwen en passende ondersteuning stappen vooruit te zetten in hun ontwikkeling en welzijn.",
          "Visie: Wij geloven dat ontwikkeling ontstaat wanneer kinderen zich gezien, gehoord en begrepen voelen binnen een veilige en betrokken omgeving.",
        ],
        links: [{ label: "Bekijk hulpaanbod", href: routes.hulpaanbod.href }],
      },
      {
        title: "Team en behandelaren",
        body: [
          contact.ownerName,
          placeholders.TEAM_DETAILS.uiText,
        ],
        links: [{ label: "Contact", href: routes.contact.href }],
      },
      {
        title: "Kernwaarden",
        body: [
          "Rust, aandacht, vertrouwen, professionaliteit en groei vormen de basis van de praktijk.",
          "De communicatie blijft helder en overzichtelijk, zodat bezoekers snel weten waar zij terecht kunnen.",
        ],
      },
      {
        title: "Persoonlijke benadering",
        body: [
          "Iedere hulpvraag wordt in context bekeken. Samen wordt gezocht naar wat passend, haalbaar en helpend is.",
          "Bij kinderen en jongeren is er waar nodig aandacht voor ouders, verzorgers, school en verwijzers.",
        ],
        links: [{ label: "Lees de werkwijze", href: routes.werkwijze.href }],
      },
    ],
    ctas: [contactCta, { label: "Voor wie", href: routes.voorWie.href }],
  },

  voorWie: {
    routeKey: "voorWie",
    title: "Voor wie",
    description:
      "Overzicht van doelgroepen waarvoor Uniqara begeleiding kan bieden.",
    intro:
      "Uniqara is er voor kinderen, jongeren, ouders/verzorgers en waar passend voor scholen of verwijzers.",
    illustration: {
      alt: "Dierenillustratie bij doelgroepen en verbinding.",
      src: "/assets/DIEREN.jpg",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Kinderen",
        body: [
          "Voor kinderen die vastlopen in emoties, gedrag, ontwikkeling, spanning of ingrijpende ervaringen.",
          "Er wordt rustig gekeken naar wat het kind laat zien en wat helpend kan zijn.",
        ],
        links: [{ label: "Lees meer", href: routes.voorWieKinderen.href }],
      },
      {
        title: "Jongeren",
        body: [
          "Voor jongeren die druk ervaren, onzeker zijn, vastlopen of behoefte hebben aan iemand die meedenkt.",
          "De begeleiding sluit aan bij leeftijd, zelfstandigheid en hulpvraag.",
        ],
        links: [{ label: "Lees meer", href: routes.voorWieJongeren.href }],
      },
      {
        title: "Ouders / verzorgers",
        body: [
          "Voor ouders en verzorgers met vragen over opvoeding, gedrag, ontwikkeling of afstemming thuis en op school.",
          "Samen ontstaat meer zicht op wat er speelt en welke steun passend is.",
        ],
        links: [{ label: "Lees meer", href: routes.voorWieOuders.href }],
      },
      {
        title: "Scholen / verwijzers",
        body: [
          "Voor scholen, huisartsen en andere verwijzers komt hier een heldere verwijzersroute.",
          placeholders.REFERRER_SCHOOL_INFO.uiText,
        ],
        links: [
          { label: "Lees meer", href: routes.voorWieScholenVerwijzers.href },
        ],
      },
    ],
    ctas: [{ label: "Bekijk hulpaanbod", href: routes.hulpaanbod.href }, contactCta],
  },

  voorWieKinderen: {
    routeKey: "voorWieKinderen",
    title: "Kinderen",
    description: "Informatie voor kinderen en hun ouders/verzorgers.",
    intro:
      "Kinderen laten vaak via gedrag, spel of emoties zien dat er iets speelt. Uniqara kijkt zorgvuldig mee.",
    illustration: {
      alt: "Zandbakillustratie bij spel en kindgerichte begeleiding.",
      src: "/assets/ZANDBAK.webp",
      tone: "yellow",
    },
    sections: [
      {
        title: "Wanneer kan begeleiding helpen?",
        body: [
          "Bij spanning, boosheid, verdriet, onzekerheid, prikkelgevoeligheid, nare ervaringen of veranderingen thuis of op school.",
          "De definitieve voorbeelden en exclusiecriteria worden nog aangevuld.",
        ],
        links: [{ label: "Speltherapie", href: routes.speltherapie.href }],
      },
      {
        title: "Samen met ouders",
        body: [
          "Ouders of verzorgers worden passend betrokken. Hun kennis van het kind is belangrijk.",
          "Er wordt afgestemd wat het kind nodig heeft en hoe de omgeving kan ondersteunen.",
        ],
      },
    ],
    ctas: [{ label: "Kindertherapie", href: routes.kindertherapie.href }, contactCta],
  },

  voorWieJongeren: {
    routeKey: "voorWieJongeren",
    title: "Jongeren",
    description: "Informatie voor jongeren die begeleiding zoeken.",
    intro:
      "Jongeren kunnen terecht wanneer zij vastlopen, veel druk ervaren of behoefte hebben aan overzicht.",
    illustration: {
      alt: "Blokkenillustratie bij bouwen aan overzicht en ontwikkeling.",
      src: "/assets/BLOKKEN.png",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Hulpvragen",
        body: [
          "Denk aan piekeren, onzekerheid, somberheid, spanning, schooldruk, prikkels, verlies of vragen rond identiteit.",
          "Samen wordt gekeken welke begeleiding past bij de situatie.",
        ],
        links: [
          { label: "Jongerenbegeleiding", href: routes.jongerenbegeleiding.href },
        ],
      },
      {
        title: "Eigen tempo",
        body: [
          "Er is ruimte voor de stem van de jongere zelf. Tempo, vertrouwen en duidelijkheid zijn belangrijk.",
          "Waar nodig worden ouders of verzorgers zorgvuldig betrokken.",
        ],
      },
    ],
    ctas: [{ label: "Werkwijze", href: routes.werkwijze.href }, contactCta],
  },

  voorWieOuders: {
    routeKey: "voorWieOuders",
    title: "Ouders / verzorgers",
    description: "Informatie voor ouders en verzorgers.",
    intro:
      "Ouders en verzorgers kunnen terecht met vragen over opvoeding, gedrag, emoties of ontwikkeling.",
    illustration: {
      alt: "Dierenillustratie bij samen kijken naar veiligheid en verbinding.",
      src: "/assets/DIEREN.jpg",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Opvoedvragen",
        body: [
          "Soms is het helpend om samen te onderzoeken wat gedrag of emoties van een kind kunnen betekenen.",
          "De begeleiding kan bestaan uit gesprekken, afstemming en praktische richting.",
        ],
        links: [{ label: "Ouderbegeleiding", href: routes.ouderbegeleiding.href }],
      },
      {
        title: "Samen kijken wat past",
        body: [
          "Er wordt gekeken naar het kind, het gezin en de context eromheen.",
          "Als Uniqara niet passend is, kan worden meegedacht over een andere route.",
        ],
      },
    ],
    ctas: [contactCta, practicalCta],
  },

  voorWieScholenVerwijzers: {
    routeKey: "voorWieScholenVerwijzers",
    title: "Scholen / verwijzers",
    description: "Placeholderinformatie voor scholen en verwijzers.",
    intro:
      "Deze pagina krijgt later concrete informatie over verwijzing, afstemming en samenwerking.",
    sections: [
      {
        title: "Verwijzen",
        body: [
          placeholders.REFERRER_SCHOOL_INFO.uiText,
          "Vermeld bij contact zo concreet mogelijk de hulpvraag, leeftijd, woonplaats en betrokkenen.",
        ],
        links: [{ label: "Contact", href: routes.contact.href }],
      },
      {
        title: "Afstemming",
        body: [
          "Afstemming met school of verwijzers gebeurt alleen wanneer dit passend is en met de juiste toestemming.",
          "Definitieve afspraken rond bereikbaarheid en terugkoppeling worden nog toegevoegd.",
        ],
      },
    ],
    ctas: [contactCta, practicalCta],
  },

  hulpaanbod: {
    routeKey: "hulpaanbod",
    title: "Hulpaanbod",
    description:
      "Overzicht van het hulpaanbod van Uniqara met doorkliks naar losse thema's.",
    intro:
      "Het hulpaanbod is opgezet als overzichtspagina. Per onderdeel volgt een aparte pagina met meer uitleg.",
    illustration: {
      alt: "Speeltreinillustratie als beeld voor de route door het hulpaanbod.",
      src: "/assets/SPELTREIN.webp",
      tone: "coral",
    },
    sections: routeGroups.hulpaanbod.map((route) => ({
      title: route.label,
      body: [
        `Korte introductie bij ${route.label.toLowerCase()}. ${placeholders.SERVICE_DETAIL_CONTENT.uiText}`,
      ],
      links: [{ label: "Lees meer", href: route.href }],
    })),
    ctas: [{ label: "Voor wie", href: routes.voorWie.href }, contactCta],
  },

  speltherapie: {
    routeKey: "speltherapie",
    title: "Speltherapie",
    description: "Placeholderpagina over speltherapie bij Uniqara.",
    intro:
      "Speltherapie kan kinderen helpen om gevoelens, ervaringen en gedrag via spel te verkennen.",
    illustration: {
      alt: "Zandbakillustratie bij speltherapie.",
      src: "/assets/ZANDBAK.webp",
      tone: "yellow",
    },
    sections: [
      {
        title: "Wat is speltherapie?",
        body: [
          "Spel is voor kinderen een natuurlijke taal. In spel kan zichtbaar worden wat een kind bezighoudt.",
          placeholders.SERVICE_DETAIL_CONTENT.uiText,
        ],
        illustration: {
          alt: "Zandbakillustratie bij speltherapie.",
          src: "/assets/ZANDBAK.webp",
          tone: "yellow",
        },
      },
      {
        title: "Voor wie",
        body: [
          "Deze pagina sluit vooral aan bij kinderen en ouders/verzorgers.",
          "Bij aanmelding wordt samen gekeken of speltherapie passend is.",
        ],
        links: [{ label: "Kinderen", href: routes.voorWieKinderen.href }],
      },
    ],
    ctas: [contactCta, { label: "Alle hulpaanbod", href: routes.hulpaanbod.href }],
  },

  kindertherapie: {
    routeKey: "kindertherapie",
    title: "Kindertherapie",
    description: "Placeholderpagina over kindertherapie.",
    intro:
      "Kindertherapie richt zich op wat een kind nodig heeft om weer meer rust, vertrouwen of grip te ervaren.",
    illustration: {
      alt: "Blokkenillustratie bij ontwikkeling en groei.",
      src: "/assets/BLOKKEN.png",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Mogelijke hulpvragen",
        body: [
          "Emoties, gedrag, spanning, onzekerheid, prikkels, ingrijpende gebeurtenissen of ontwikkeling kunnen aanleiding zijn.",
          placeholders.SERVICE_DETAIL_CONTENT.uiText,
        ],
      },
      {
        title: "Betrokkenheid van ouders",
        body: [
          "Ouders/verzorgers worden waar passend betrokken bij intake, afstemming en evaluatie.",
        ],
      },
    ],
    ctas: [{ label: "Kinderen", href: routes.voorWieKinderen.href }, contactCta],
  },

  jongerenbegeleiding: {
    routeKey: "jongerenbegeleiding",
    title: "Jongerenbegeleiding",
    description: "Placeholderpagina over begeleiding voor jongeren.",
    intro:
      "Jongerenbegeleiding biedt ruimte om te ordenen wat speelt en stap voor stap verder te kijken.",
    illustration: {
      alt: "Speeltreinillustratie bij stap voor stap verder kijken.",
      src: "/assets/SPELTREIN.webp",
      tone: "coral",
    },
    sections: [
      {
        title: "Thema's",
        body: [
          "Denk aan schooldruk, piekeren, spanning, zelfbeeld, verlies, prikkels of vastlopen in dagelijkse situaties.",
        ],
      },
      {
        title: "Afstemming",
        body: [
          "De begeleiding wordt afgestemd op leeftijd, zelfstandigheid en de rol van ouders/verzorgers.",
        ],
      },
    ],
    ctas: [{ label: "Jongeren", href: routes.voorWieJongeren.href }, contactCta],
  },

  ouderbegeleiding: {
    routeKey: "ouderbegeleiding",
    title: "Opvoedvragen / ouderbegeleiding",
    description: "Placeholderpagina over opvoedvragen en ouderbegeleiding.",
    intro:
      "Ouderbegeleiding helpt om gedrag, emoties en behoeften van een kind beter te begrijpen.",
    illustration: {
      alt: "Dierenillustratie bij verbinding tussen ouders en kind.",
      src: "/assets/DIEREN.jpg",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Vragen van ouders",
        body: [
          "Ouders kunnen vragen hebben over gedrag, grenzen, emoties, prikkels, school of gezinsdynamiek.",
        ],
      },
      {
        title: "Praktisch en zorgvuldig",
        body: [
          "Samen wordt gezocht naar een passende manier om het kind en de omgeving te ondersteunen.",
        ],
      },
    ],
    ctas: [{ label: "Ouders / verzorgers", href: routes.voorWieOuders.href }, contactCta],
  },

  vaktherapieCreatieveTherapie: {
    routeKey: "vaktherapieCreatieveTherapie",
    title: "Vaktherapie / creatieve therapie",
    description: "Placeholderpagina over vaktherapie en creatieve therapie.",
    intro:
      "Deze pagina wordt later gevuld met definitieve informatie over creatieve of ervaringsgerichte werkvormen.",
    illustration: {
      alt: "Schilderillustratie bij creatieve en ervaringsgerichte werkvormen.",
      src: "/assets/VERVEN.webp",
      tone: "coral",
    },
    sections: [
      {
        title: "Werkvormen",
        body: [
          "Creatieve of ervaringsgerichte werkvormen kunnen helpen wanneer praten alleen niet genoeg is.",
          placeholders.SERVICE_DETAIL_CONTENT.uiText,
        ],
        illustration: {
          alt: "Schilderillustratie bij creatieve werkvormen.",
          src: "/assets/VERVEN.webp",
          tone: "coral",
        },
      },
    ],
    ctas: [{ label: "Alle hulpaanbod", href: routes.hulpaanbod.href }, contactCta],
  },

  psycholoogPedagoogBegeleiding: {
    routeKey: "psycholoogPedagoogBegeleiding",
    title: "Psycholoog / pedagoog begeleiding",
    description: "Placeholderpagina over psychologische en pedagogische begeleiding.",
    intro:
      "Psychologische en pedagogische begeleiding richt zich op inzicht, ontwikkeling, gedrag, emoties en context.",
    illustration: {
      alt: "Blokkenillustratie bij psychologische en pedagogische ontwikkeling.",
      src: "/assets/BLOKKEN.png",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Begeleiding",
        body: [
          "De begeleiding kan bestaan uit gesprekken, observatie, psycho-educatie, oudergesprekken of afstemming.",
          placeholders.SERVICE_DETAIL_CONTENT.uiText,
        ],
      },
    ],
    ctas: [{ label: "Werkwijze", href: routes.werkwijze.href }, contactCta],
  },

  werkwijze: {
    routeKey: "werkwijze",
    title: "Werkwijze",
    description:
      "Lees hoe een traject bij Uniqara is opgebouwd, van aanmelden tot evaluatie.",
    intro:
      "Een duidelijke werkwijze geeft houvast. De precieze invulling wordt afgestemd op hulpvraag en situatie.",
    illustration: {
      alt: "Speeltreinillustratie bij de stappen van de werkwijze.",
      src: "/assets/SPELTREIN.webp",
      tone: "coral",
    },
    showStepNumbers: true,
    sections: [
      {
        title: "Aanmelden",
        body: [
          "Aanmelden kan via het aanmeldformulier of door contact op te nemen.",
          "Vul woonplaats, hulpvraag, telefoonnummer en e-mailadres in.",
        ],
        illustration: {
          alt: "Speeltreinillustratie bij de start van het traject.",
          src: "/assets/SPELTREIN.webp",
          tone: "coral",
        },
        links: [{ label: "Aanmelden", href: routes.praktischeAanmelden.href }],
      },
      {
        title: "Kennismaking / intake",
        body: [
          "Tijdens de kennismaking of intake wordt de hulpvraag zorgvuldig verkend.",
          "Er is aandacht voor achtergrond, verwachtingen en praktische afspraken.",
        ],
      },
      {
        title: "Begeleiding / behandeltraject",
        body: [
          "Daarna volgt een traject dat aansluit bij de vraag. Dit kan bestaan uit begeleiding, behandeling, oudergesprekken of afstemming.",
        ],
        illustration: {
          alt: "Blokkenillustratie bij bouwen aan begeleiding en ontwikkeling.",
          src: "/assets/BLOKKEN.png",
          tone: "turquoise",
        },
      },
      {
        title: "Evaluatie / afstemming",
        body: [
          "Regelmatig wordt gekeken wat werkt, wat bijgesteld moet worden en welke vervolgstap passend is.",
        ],
      },
    ],
    ctas: [practicalCta, contactCta],
  },

  praktischeInformatie: {
    routeKey: "praktischeInformatie",
    title: "Praktische informatie",
    description:
      "Overzicht van aanmelden, wachttijd, tarieven, privacy, algemene informatie en FAQ.",
    intro:
      "Alle praktische onderwerpen zijn gebundeld onder één onderdeel, zodat bezoekers snel de juiste informatie vinden.",
    illustration: {
      alt: "Blokkenillustratie bij overzicht en praktische stappen.",
      src: "/assets/BLOKKEN.png",
      tone: "neutral",
    },
    sections: routeGroups.praktischeInformatie.map((route) => ({
      title: route.label,
      body: [
        `Korte introductie bij ${route.label.toLowerCase()}. ${placeholders.PRACTICAL_DETAIL_CONTENT.uiText}`,
      ],
      links: [{ label: "Lees meer", href: route.href }],
    })),
    ctas: [contactCta, { label: "Werkwijze", href: routes.werkwijze.href }],
  },

  praktischeAanmelden: {
    routeKey: "praktischeAanmelden",
    title: "Aanmelden",
    description: "Praktische informatie over aanmelden bij Uniqara.",
    intro:
      "Aanmelden begint met een eerste bericht via het formulier of per e-mail.",
    illustration: {
      alt: "Speeltreinillustratie bij aanmelden en starten.",
      src: "/assets/SPELTREIN.webp",
      tone: "coral",
    },
    sections: [
      {
        title: "Welke informatie is nodig?",
        body: [
          "Vul woonplaats, hulpvraag, telefoonnummer en e-mailadres in. Kies in het formulier voor kind en jeugd, volwassenen of relatie.",
          placeholders.REGISTRATION_PROCESS.uiText,
        ],
        illustration: {
          alt: "Speeltreinillustratie bij aanmelden.",
          src: "/assets/SPELTREIN.webp",
          tone: "coral",
        },
        links: [{ label: "Contactformulier", href: routes.contact.href }],
      },
    ],
    ctas: [contactCta, { label: "Wachttijd", href: routes.praktischeWachttijd.href }],
  },

  praktischeWachttijd: {
    routeKey: "praktischeWachttijd",
    title: "Wachttijden",
    description: "Actuele wachttijd en aanmeldstatus.",
    intro:
      "De wachttijden krijgen een vaste plek zodat ze makkelijk bijgehouden kunnen worden.",
    illustration: {
      alt: "Blokkenillustratie bij overzicht en wachttijd.",
      src: "/assets/BLOKKEN.png",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Actuele status",
        body: [
          "Onder het introductieblok staat een tabel met de actuele wachttijden per onderdeel.",
          "Neem bij twijfel altijd contact op voor de meest passende actuele route.",
        ],
      },
    ],
    ctas: [contactCta, { label: "Aanmelden", href: routes.praktischeAanmelden.href }],
  },

  praktischeTarievenVergoedingen: {
    routeKey: "praktischeTarievenVergoedingen",
    title: "Tarieven / vergoedingen",
    description: "Korte uitleg over tarieven, verwijzing en vergoeding.",
    intro:
      "Hier staat de praktische uitleg over kosten, verwijzing, vergoeding en eigen betaling.",
    illustration: {
      alt: "Blokkenillustratie bij praktische informatie.",
      src: "/assets/BLOKKEN.png",
      tone: "neutral",
    },
    sections: [
      {
        title: "Volwassenen",
        body: [
          "Voor volwassenen wordt onderscheid gemaakt tussen verzekerde GGZ-zorg en zorg die niet vanuit het basispakket wordt vergoed.",
          "Vergoeding loopt via de zorgverzekeraar en kan invloed hebben op het eigen risico.",
        ],
      },
      {
        title: "Jeugd",
        body: [
          "Voor jeugd kan vergoeding via gemeente of Jeugdwet mogelijk zijn wanneer er een geldige beschikking of verwijzing is.",
          "Definitieve contracten, tarieven en voorwaarden van Uniqara worden nog aangevuld.",
        ],
      },
      {
        title: "Afzeggen",
        body: [
          "Afspraken die te laat worden afgezegd kunnen in rekening worden gebracht. Definitieve termijn en tarief worden nog bevestigd.",
        ],
      },
    ],
    ctas: [contactCta, { label: "Privacy", href: routes.praktischePrivacy.href }],
  },

  praktischePrivacy: {
    routeKey: "praktischePrivacy",
    title: "Privacy",
    description:
      "Privacy-informatie, dossiervoering en omgaan met persoonsgegevens.",
    intro:
      "Uniqara gaat zorgvuldig om met persoonsgegevens en gezondheidsgegevens. Definitieve juridische controle volgt nog.",
    sections: [
      {
        title: "Welke gegevens",
        body: [
          "Uniqara kan gegevens verwerken zoals naam, contactgegevens, woonplaats, hulpvraag, verwijsinformatie, afspraken en verslaglegging.",
          "Bij kind en jeugd kunnen ook gegevens van ouders/verzorgers, school of verwijzers relevant zijn.",
        ],
      },
      {
        title: "Dossier en veiligheid",
        body: [
          "Voor goede en veilige zorg wordt een dossier bijgehouden met informatie die nodig is voor begeleiding, behandeling of wettelijke verplichtingen.",
          placeholders.PRIVACY_LEGAL_TEXT.uiText,
        ],
      },
      {
        title: "Rechten",
        body: [
          "Je hebt volgens de AVG onder andere recht op informatie, inzage, correctie en in sommige gevallen verwijdering van gegevens.",
        ],
      },
    ],
    ctas: [contactCta, practicalCta],
  },

  praktischeAlgemeen: {
    routeKey: "praktischeAlgemeen",
    title: "Algemene praktische informatie",
    description: "Algemene praktische informatie over afspraken en bereikbaarheid.",
    intro:
      "Deze pagina bundelt praktische informatie die niet onder tarieven, privacy of wachttijd valt.",
    sections: [
      {
        title: "Bereikbaarheid",
        body: [contact.openingHours, contact.routeNote],
      },
      {
        title: "Afspraken",
        body: [
          placeholders.PRACTICAL_DETAIL_CONTENT.uiText,
        ],
      },
    ],
    ctas: [contactCta, { label: "Locatie", href: routes.locatie.href }],
  },

  praktischeFaq: {
    routeKey: "praktischeFaq",
    title: "FAQ",
    description: "Veelgestelde vragen over Uniqara.",
    intro:
      "Korte antwoorden helpen bezoekers snel begrijpen wat zij kunnen verwachten.",
    illustration: {
      alt: "Blokkenillustratie bij veelgestelde vragen en overzicht.",
      src: "/assets/BLOKKEN.png",
      tone: "neutral",
    },
    sections: [
      {
        title: "Voor wie is Uniqara bedoeld?",
        body: ["Uniqara richt zich op kind en jeugd, volwassenen en relatievragen."],
      },
      {
        title: "Hoe kan ik mij aanmelden?",
        body: [
          "Aanmelden kan via het formulier op de contactpagina. Vul woonplaats, hulpvraag, telefoonnummer en e-mailadres in.",
        ],
      },
      {
        title: "Waar vindt begeleiding plaats?",
        body: [
          "Uniqara is gevestigd bij Speltherapie Krimpenerwaard, Kerkweg 139a, 2935 AC Ouderkerk aan den IJssel.",
        ],
      },
    ],
    ctas: [contactCta, practicalCta],
  },

  locatie: {
    routeKey: "locatie",
    title: "Locatie",
    description:
      "Adres, Google Maps kaart en route-informatie voor de locatie van Uniqara.",
    intro:
      "Uniqara is gevestigd aan de Kerkweg 139a in Ouderkerk aan den IJssel. Op deze pagina vind je het adres en de kaart.",
    illustration: {
      alt: "Blokkenillustratie bij locatie en aankomstinformatie.",
      src: "/assets/BLOKKEN.png",
      tone: "turquoise",
    },
    aside: {
      label: "Adres",
      title: contact.address.name,
      text: `${contact.address.street} - ${contact.address.postalCodeCity}`,
    },
    sections: [
      {
        title: "Adres",
        body: [
          contact.address.name,
          contact.address.street,
          contact.address.postalCodeCity,
        ],
      },
      {
        title: "Omgeving",
        body: [
          "De praktijk ligt in Ouderkerk aan den IJssel, in de Krimpenerwaard.",
          placeholders.PRACTICE_PHOTOS.uiText,
        ],
      },
      {
        title: "Bereikbaarheid",
        body: [
          "Gebruik de kaart op deze pagina om de route vanaf je eigen vertrekpunt te bekijken.",
          contact.routeNote,
        ],
      },
      {
        title: "Kaart en route",
        body: [
          "Onder deze informatie staat een Google Maps kaart met de locatie.",
          "Met de routeknop open je Google Maps in een nieuw tabblad.",
        ],
      },
    ],
    ctas: [contactCta, practicalCta],
  },

  contact: {
    routeKey: "contact",
    title: "Contact",
    description:
      "Contactgegevens, aanmeldformulier, route en adres van Uniqara.",
    intro: contact.intro,
    aside: {
      label: "Eerste stap",
      title: "Laagdrempelig contact",
      text: contact.reassurance,
    },
    sections: [
      {
        title: "Contactgegevens",
        body: [contact.email, contact.phone, contact.openingHours, contact.ownerName],
      },
      {
        title: "Route / adres",
        body: [contact.address.name, contact.address.street, contact.address.postalCodeCity, contact.routeNote],
      },
      {
        title: "Aanmelden",
        body: [
          "Gebruik het formulier op deze pagina en vermeld woonplaats, hulpvraag, telefoonnummer en e-mailadres.",
        ],
      },
    ],
    ctas: [{ label: "Locatie", href: routes.locatie.href }, practicalCta],
  },
} satisfies Record<PageRouteKey, PageContent>;
