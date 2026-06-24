import { contact } from "./contact";
import { routes, routeGroups, type RouteKey } from "./routes";
import { teamMembers, type TeamMember } from "./team";

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
  tone?: "turquoise" | "blue" | "coral" | "neutral";
};

export type PageBannerVariant = "green" | "blue" | "terra";

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
  ctaBand?: {
    eyebrow?: string;
    title?: string;
    intro?: string;
  };
  heroEyebrow?: string;
  heroVariant?: "default" | "connected" | "banner";
  heroBannerVariant?: PageBannerVariant;
  illustration?: PageIllustration;
  featuredSection?: PageSection;
  featuredTeamMembers?: TeamMember[];
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
  label: "Bekijk praktische informatie",
  href: routes.praktischeInformatie.href,
};

const hulpaanbodSummaries = {
  speltherapie:
    "Speltherapie helpt kinderen via spel te laten zien wat hen bezighoudt. In een veilige setting kunnen ervaringen, gevoelens en gedrag beter worden begrepen.",
  kindertherapie:
    "Kindertherapie is een paraplubegrip voor hulp aan kinderen die vastlopen door bijvoorbeeld trauma, complexe rouw, pesten of een ingewikkelde thuissituatie.",
  jongerenbegeleiding:
    "Jeugdhulp is er voor jongeren die vastlopen op school, thuis of in contact met anderen. Denk aan somberheid, terugtrekken, boze buien of onzekerheid.",
  ouderbegeleiding:
    "Ouders hebben soms een zetje, extra kennis of nieuwe blik nodig wanneer een kind meer vraagt in de opvoedsituatie. We kijken contextueel en systemisch naar het gezin.",
  vaktherapieCreatieveTherapie:
    "Vaktherapie en beeldende therapie bieden een veilige setting om te maken, te ervaren en nieuw gedrag te oefenen.",
  psycholoogPedagoogBegeleiding:
    "Bij onderzoeksvragen of vragen over classificatie kan een psycholoog of pedagoog worden ingezet binnen de basis GGZ / ZPM GGZ.",
} satisfies Partial<Record<RouteKey, string>>;

export const pages = {
  wieZijnWij: {
    routeKey: "wieZijnWij",
    title: "Wie zijn wij",
    description:
      "Maak kennis met Uniqara: visie, missie, behandelaren, kernwaarden en persoonlijke benadering.",
    intro:
      "Uniqara is een professionele praktijkplek met aandacht voor veiligheid, vertrouwen en groei.",
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
    featuredSection: {
      title: "Team en behandelaars",
      body: [
        "Maak kennis met de behandelaars van Uniqara. Klik op een kaart voor meer informatie.",
      ],
      links: [{ label: "Neem contact op", href: routes.contact.href }],
    },
    featuredTeamMembers: teamMembers,
    sections: [
      {
        title: "Visie en missie",
        body: [
          "Uniqara biedt basis GGZ en jeugdhulp aan kinderen, jongeren en gezinnen.",
          "We kijken met aandacht naar wat nodig is voor ontwikkeling, vertrouwen en welzijn.",
        ],
        links: [{ label: "Bekijk hulpaanbod", href: routes.hulpaanbod.href }],
      },
      {
        title: "Kernwaarden",
        body: [
          "Aandacht, vertrouwen, professionaliteit en groei vormen de basis van de praktijk.",
          "De communicatie blijft helder en overzichtelijk.",
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
      "Overzicht van doelgroepen waarvoor Uniqara hulp kan bieden.",
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
          "Er wordt met aandacht gekeken naar wat het kind laat zien en wat kan helpen.",
          "Zodat kinderen zich weer veiliger voelen, beter in hun vel zitten en zich verder kunnen ontwikkelen.",
        ],
        links: [{ label: "Lees meer", href: routes.voorWieKinderen.href }],
      },
      {
        title: "Jongeren",
        body: [
          "Voor jongeren die druk ervaren, onzeker zijn, vastlopen of behoefte hebben aan iemand die meedenkt.",
          "De hulp sluit aan bij leeftijd, zelfstandigheid en hulpvraag.",
          "Doel is dat jongeren weer meer overzicht, vertrouwen en grip ervaren in hun dagelijks leven.",
        ],
        links: [{ label: "Lees meer", href: routes.voorWieJongeren.href }],
      },
      {
        title: "Ouders / verzorgers",
        body: [
          "Voor ouders en verzorgers met vragen over opvoeding, gedrag, ontwikkeling of afstemming thuis en op school.",
          "Samen ontstaat meer zicht op wat er speelt en wat het kind nodig heeft.",
          "Zodat ouders met meer zelfvertrouwen en energie hun kind kunnen begeleiden bij de ontwikkelingstaken die er liggen.",
        ],
        links: [{ label: "Lees meer", href: routes.voorWieOuders.href }],
      },
      {
        title: "Scholen / verwijzers",
        body: [
          "Voor scholen, huisartsen en andere verwijzers die willen afstemmen over passende hulp.",
          "De verdiepingspagina licht contact, verwijzing en afstemming toe.",
          "Zo ontstaat sneller duidelijkheid over passende hulp, afstemming en vervolgstappen.",
        ],
        links: [
          { label: "Lees meer", href: routes.voorWieScholenVerwijzers.href },
        ],
      },
    ],
    ctaBand: {
      title: "Verder kijken",
      intro:
        "Kies de route die nu past. Je kunt stap voor stap bekijken welke hulp aansluit.",
    },
    ctas: [{ label: "Bekijk hulpaanbod", href: routes.hulpaanbod.href }, contactCta],
  },

  voorWieKinderen: {
    routeKey: "voorWieKinderen",
    title: "Kinderen",
    description: "Informatie voor kinderen en hun ouders/verzorgers.",
    intro:
      "Kinderen laten via gedrag, spel of emoties zien dat er iets speelt. Uniqara kijkt met aandacht mee.",
    illustration: {
      alt: "Zandbakillustratie bij spel en kindgerichte hulp.",
      src: "/assets/ZANDBAK.webp",
      tone: "blue",
    },
    sections: [
      {
        title: "Wanneer kan hulp helpen?",
        body: [
          "Bij spanning, boosheid, verdriet, onzekerheid, prikkelgevoeligheid, nare ervaringen of veranderingen thuis of op school.",
          "De hulp is erop gericht dat een kind zich weer veiliger voelt, emoties beter kan uiten en stap voor stap verder kan groeien.",
        ],
        links: [{ label: "Speltherapie", href: routes.speltherapie.href }],
      },
      {
        title: "Samen met ouders",
        body: [
          "Ouders of verzorgers worden passend betrokken. Hun kennis van het kind is belangrijk.",
          "Samen wordt afgestemd wat het kind en de omgeving nodig hebben.",
        ],
      },
    ],
    ctas: [{ label: "Kindertherapie", href: routes.kindertherapie.href }, contactCta],
  },

  voorWieJongeren: {
    routeKey: "voorWieJongeren",
    title: "Jongeren",
    description: "Informatie voor jongeren die hulp zoeken.",
    intro:
      "Jongeren kunnen terecht wanneer zij vastlopen, veel druk ervaren of behoefte hebben aan overzicht.",
    illustration: {
      alt: "Blokkenillustratie bij bouwen aan overzicht en ontwikkeling.",
      src: "/assets/BLOKKEN.webp",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Hulpvragen",
        body: [
          "Denk aan piekeren, onzekerheid, somberheid, spanning, schooldruk, prikkels, verlies of vragen rond identiteit.",
          "Samen wordt bekeken welke hulp past.",
          "Het doel is dat jongeren weer meer overzicht, vertrouwen en ruimte ervaren om verder te kunnen.",
        ],
        links: [
          { label: "Jeugdhulp", href: routes.jongerenbegeleiding.href },
        ],
      },
      {
        title: "Eigen tempo",
        body: [
          "De stem van de jongere zelf is belangrijk. Tempo en duidelijkheid doen ertoe.",
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
      "Ouders en verzorgers kunnen terecht wanneer de ontwikkeling, emoties of het gedrag van hun kind om extra zorg vraagt.",
    illustration: {
      alt: "Dierenillustratie bij samen kijken naar veiligheid en verbinding.",
      src: "/assets/DIEREN.jpg",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Ouderbegeleiding / oudertherapie",
        body: [
          "Soms vraagt een kind meer van ouders dan vanzelf lukt.",
          "Ouderbegeleiding of oudertherapie helpt om beter te begrijpen wat er speelt en hoe ouders hun kind kunnen ondersteunen.",
          "Doel is dat ouders met meer zelfvertrouwen, energie en duidelijkheid hun kind kunnen begeleiden.",
        ],
        links: [{ label: "Ouderbegeleiding", href: routes.ouderbegeleiding.href }],
      },
      {
        title: "Samen kijken wat past",
        body: [
          "Daarbij wordt gekeken naar het kind, de ouders en het gezin als geheel, zodat iedereen weer beter op zijn eigen plek kan komen.",
          "Als Uniqara niet passend is, wordt meegedacht over een andere route.",
        ],
      },
    ],
    ctas: [contactCta, practicalCta],
  },

  voorWieScholenVerwijzers: {
    routeKey: "voorWieScholenVerwijzers",
    title: "Scholen / verwijzers",
    description: "Informatie voor scholen, huisartsen en verwijzers.",
    heroEyebrow: "Voor wie",
    intro:
      "Informatie over verwijzen, afstemmen en passende hulp voor kinderen en jongeren.",
    sections: [
      {
        title: "Voor (huis)artsen",
        body: [
          "Een verwijzing helpt om de aanvraag zorgvuldig te verwerken. Vermeld bij voorkeur een datum vóór de eerste afspraak, een korte klachtbeschrijving, een eventueel DSM-5-vermoeden en de naam en AGB-code van de verwijzer.",
        ],
        links: [{ label: "Contact", href: routes.contact.href }],
      },
      {
        title: "Voor scholen",
        body: [
          "Scholen kunnen contact opnemen bij vragen rond persoonlijke problemen van kinderen, uitdagingen in de klas, rouw, trauma of verwante onderwerpen. Er kan advies of hulp op maat worden aangevraagd.",
        ],
        links: [{ label: "Contact", href: routes.contact.href }],
      },
      {
        title: "Verwijsroute",
        body: [
          "Neem contact op.",
          "Stuur de benodigde verwijsinformatie.",
          "De aanvraag wordt beoordeeld.",
          "Er volgt afstemming over de vervolgstap.",
        ],
        links: [{ label: "Contact", href: routes.contact.href }],
      },
      {
        title: "Afstemming met school of verwijzers",
        body: [
          "Afstemming met school of verwijzers gebeurt alleen wanneer dit passend is en met de juiste toestemming.",
        ],
        links: [{ label: "Contact", href: routes.contact.href }],
      },
    ],
    ctaBand: {
      title: "Vragen over verwijzen?",
      intro:
        "Neem contact op voor overleg over een verwijzing, schoolvraag of vervolgstap.",
    },
    ctas: [contactCta, { label: "Voor wie is Uniqara?", href: routes.voorWie.href }],
  },

  hulpaanbod: {
    routeKey: "hulpaanbod",
    title: "Hulpaanbod",
    description:
      "Overzicht van het hulpaanbod van Uniqara met doorkliks naar losse thema's.",
    intro: "",
    illustration: {
      alt: "Speeltreinillustratie als beeld bij het hulpaanbod.",
      src: "/assets/SPELTREIN.webp",
      tone: "turquoise",
    },
    sections: routeGroups.hulpaanbod.map((route) => ({
      title: route.label,
      body: [hulpaanbodSummaries[route.key] ?? ""],
      links: [{ label: "Lees meer", href: route.href }],
    })),
    ctas: [{ label: "Voor wie is Uniqara?", href: routes.voorWie.href }, contactCta],
  },

  speltherapie: {
    routeKey: "speltherapie",
    title: "Speltherapie",
    description: "Informatie over speltherapie bij Uniqara.",
    heroEyebrow: "Hulpaanbod",
    intro:
      "Speltherapie helpt kinderen via spel te laten zien wat hen bezighoudt.",
    illustration: {
      alt: "Zandbakillustratie bij speltherapie.",
      src: "/assets/ZANDBAK.webp",
      tone: "blue",
    },
    sections: [
      {
        title: "Wat is speltherapie?",
        body: [
          "Speltherapie helpt kinderen via spel te laten zien wat hen bezighoudt.",
          "In een veilige setting kunnen ervaringen, gevoelens en gedrag beter worden begrepen.",
        ],
        illustration: {
          alt: "Zandbakillustratie bij speltherapie.",
          src: "/assets/ZANDBAK.webp",
          tone: "blue",
        },
      },
      {
        title: "Voor wie",
        body: [
          "Deze pagina sluit vooral aan bij kinderen en ouders/verzorgers.",
          "Bij aanmelding wordt bekeken of speltherapie passend is.",
        ],
        links: [{ label: "Kinderen", href: routes.voorWieKinderen.href }],
      },
    ],
    ctas: [contactCta, { label: "Alle hulpaanbod", href: routes.hulpaanbod.href }],
  },

  kindertherapie: {
    routeKey: "kindertherapie",
    title: "Kindertherapie",
    description: "Informatie over kindertherapie bij Uniqara.",
    heroEyebrow: "Hulpaanbod",
    intro:
      "Kindertherapie is een paraplubegrip voor hulp aan kinderen die vastlopen.",
    illustration: {
      alt: "Blokkenillustratie bij ontwikkeling en groei.",
      src: "/assets/BLOKKEN.webp",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Mogelijke hulpvragen",
        body: [
          "Kindertherapie kan passen bij trauma, complexe rouw, pesten of een ingewikkelde thuissituatie.",
          "Samen wordt bekeken welke hulp aansluit bij kind, vraag en context.",
        ],
      },
      {
        title: "Behandelvormen",
        body: [
          "Binnen kindertherapie kunnen onder andere EMDR, ACT en CGT worden ingezet.",
          "Welke vorm passend is, wordt afgestemd op de hulpvraag.",
        ],
        links: [
          { label: "Wat is EMDR", href: routes.watIsEmdr.href },
          { label: "Wat is ACT", href: routes.watIsAct.href },
          { label: "Wat is CGT", href: routes.watIsCgt.href },
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
    title: "Jeugdhulp",
    description: "Informatie over jeugdhulp voor jongeren.",
    heroEyebrow: "Hulpaanbod",
    intro:
      "Jeugdhulp is er voor jongeren die vastlopen op school, thuis of in contact met anderen.",
    illustration: {
      alt: "Speeltreinillustratie bij stap voor stap verder kijken.",
      src: "/assets/SPELTREIN.webp",
      tone: "coral",
    },
    sections: [
      {
        title: "Thema's",
        body: [
          "Denk aan somberheid, terugtrekken, boze buien, onzekerheid of het gevoel niet meer verder te kunnen.",
          "Er wordt bekeken wat de jongere nodig heeft en wie daarbij betrokken moet worden.",
        ],
      },
      {
        title: "Afstemming",
        body: [
          "De hulp sluit aan bij leeftijd, zelfstandigheid en de rol van ouders/verzorgers.",
        ],
      },
    ],
    ctas: [{ label: "Jongeren", href: routes.voorWieJongeren.href }, contactCta],
  },

  ouderbegeleiding: {
    routeKey: "ouderbegeleiding",
    title: "Ouderbegeleiding / oudertherapie",
    description: "Informatie over ouderbegeleiding en oudertherapie.",
    heroEyebrow: "Hulpaanbod",
    intro:
      "Ouderbegeleiding of oudertherapie helpt ouders beter begrijpen wat er speelt en hoe zij hun kind kunnen ondersteunen.",
    illustration: {
      alt: "Dierenillustratie bij verbinding tussen ouders en kind.",
      src: "/assets/DIEREN.jpg",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Vragen van ouders",
        body: [
          "Soms vraagt een kind meer van ouders dan vanzelf lukt.",
          "We kijken contextueel en systemisch naar het kind, de ouders en het gezin als geheel.",
        ],
      },
      {
        title: "Doel",
        body: [
          "Doel is dat ouders met meer zelfvertrouwen, energie en duidelijkheid hun kind kunnen begeleiden.",
        ],
      },
    ],
    ctas: [{ label: "Ouders / verzorgers", href: routes.voorWieOuders.href }, contactCta],
  },

  vaktherapieCreatieveTherapie: {
    routeKey: "vaktherapieCreatieveTherapie",
    title: "Vaktherapie / beeldende therapie",
    description: "Informatie over vaktherapie en beeldende therapie.",
    heroEyebrow: "Hulpaanbod",
    intro:
      "Vaktherapie en beeldende therapie bieden een veilige setting om nieuwe ervaringen op te doen.",
    illustration: {
      alt: "Schilderillustratie bij beeldende en ervaringsgerichte werkvormen.",
      src: "/assets/VERVEN.webp",
      tone: "coral",
    },
    sections: [
      {
        title: "Werkvormen",
        body: [
          "Door te maken en te ervaren kan nieuw gedrag worden geoefend.",
          "Beeldende therapie maakt zichtbaar wat soms lastig in woorden te vangen is.",
        ],
        illustration: {
          alt: "Schilderillustratie bij beeldende werkvormen.",
          src: "/assets/VERVEN.webp",
          tone: "coral",
        },
      },
    ],
    ctas: [{ label: "Alle hulpaanbod", href: routes.hulpaanbod.href }, contactCta],
  },

  psycholoogPedagoogBegeleiding: {
    routeKey: "psycholoogPedagoogBegeleiding",
    title: "Psycholoog / pedagoog",
    description: "Informatie over psychologische en pedagogische zorg.",
    heroEyebrow: "Hulpaanbod",
    intro:
      "Een psycholoog of pedagoog kan worden ingezet bij onderzoeksvragen of behandeling binnen de basis GGZ / ZPM GGZ.",
    illustration: {
      alt: "Blokkenillustratie bij psychologische en pedagogische ontwikkeling.",
      src: "/assets/BLOKKEN.webp",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Zorg",
        body: [
          "Bij psychodiagnostische onderzoeksvragen of vragen over classificatie kan een psycholoog of pedagoog worden ingezet.",
          "Ook kan een psycholoog of pedagoog kindertherapie bieden binnen de basis GGZ / ZPM GGZ.",
        ],
      },
    ],
    ctas: [{ label: "Werkwijze", href: routes.werkwijze.href }, contactCta],
  },

  watIsEmdr: {
    routeKey: "watIsEmdr",
    title: "Wat is EMDR",
    description: "Korte uitleg over EMDR als mogelijke behandelvorm.",
    heroEyebrow: "Kindertherapie",
    intro:
      "EMDR is een behandelvorm die kan worden ingezet bij klachten na ingrijpende ervaringen.",
    sections: [
      {
        title: "Korte uitleg",
        body: [
          "Bij EMDR wordt gericht gewerkt met herinneringen die spanning oproepen.",
          "Of EMDR passend is, wordt beoordeeld binnen de hulpvraag.",
        ],
      },
      {
        title: "Binnen Uniqara",
        body: [
          "Binnen Uniqara kan EMDR worden ingezet wanneer klachten samenhangen met ingrijpende of nare ervaringen.",
          "Samen wordt zorgvuldig bekeken of deze behandelvorm past bij de hulpvraag en leeftijd van het kind of de jongere.",
        ],
        links: [{ label: "Kindertherapie", href: routes.kindertherapie.href }],
      },
    ],
    ctas: [{ label: "Kindertherapie", href: routes.kindertherapie.href }, contactCta],
  },

  watIsAct: {
    routeKey: "watIsAct",
    title: "Wat is ACT",
    description: "Korte uitleg over ACT als mogelijke behandelvorm.",
    heroEyebrow: "Kindertherapie",
    intro:
      "ACT helpt om anders om te gaan met gedachten, gevoelens en gedragspatronen.",
    sections: [
      {
        title: "Korte uitleg",
        body: [
          "ACT staat voor Acceptance and Commitment Therapy.",
          "De behandeling richt zich op omgaan met gedachten en kiezen wat belangrijk is.",
        ],
      },
      {
        title: "Binnen Uniqara",
        body: [
          "ACT helpt kinderen en jongeren om anders om te gaan met lastige gedachten en gevoelens.",
          "De behandeling richt zich op veerkracht, keuzevrijheid en doen wat belangrijk is, ook als iets moeilijk voelt.",
        ],
        links: [{ label: "Kindertherapie", href: routes.kindertherapie.href }],
      },
    ],
    ctas: [{ label: "Kindertherapie", href: routes.kindertherapie.href }, contactCta],
  },

  watIsCgt: {
    routeKey: "watIsCgt",
    title: "Wat is CGT",
    description: "Korte uitleg over CGT als mogelijke behandelvorm.",
    heroEyebrow: "Kindertherapie",
    intro:
      "CGT onderzoekt de samenhang tussen gedachten, gevoelens en gedrag.",
    sections: [
      {
        title: "Korte uitleg",
        body: [
          "CGT staat voor cognitieve gedragstherapie.",
          "Binnen CGT wordt gekeken naar patronen en manieren om daarmee te oefenen.",
        ],
      },
      {
        title: "Binnen Uniqara",
        body: [
          "CGT helpt om gedachten, gevoelens en gedrag beter te begrijpen.",
          "Door samen patronen te herkennen en nieuwe vaardigheden te oefenen, ontstaat meer grip op klachten en situaties.",
        ],
        links: [{ label: "Kindertherapie", href: routes.kindertherapie.href }],
      },
    ],
    ctas: [{ label: "Kindertherapie", href: routes.kindertherapie.href }, contactCta],
  },

  werkwijze: {
    routeKey: "werkwijze",
    title: "Werkwijze",
    description:
      "Lees hoe een traject bij Uniqara is opgebouwd, van aanmelden tot evaluatie.",
    intro:
      "Een duidelijke werkwijze geeft houvast. De invulling wordt afgestemd op hulpvraag en situatie.",
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
          "Aanmelden kan door contact op te nemen.",
          "Vermeld woonplaats, hulpvraag, telefoonnummer en e-mailadres.",
        ],
        illustration: {
          alt: "Illustratie bij aanmelden voor een traject bij Uniqara.",
          src: "/assets/aanmelden.png",
          tone: "coral",
        },
        links: [{ label: "Aanmelden", href: routes.praktischeAanmelden.href }],
      },
      {
        title: "Kennismaking / intake",
        body: [
          "Tijdens de kennismaking of intake wordt de hulpvraag verkend.",
          "Er is aandacht voor achtergrond, verwachtingen en praktische afspraken.",
        ],
        illustration: {
          alt: "Illustratie bij kennismaking en intake.",
          src: "/assets/kennismaking.png",
          tone: "blue",
        },
      },
      {
        title: "Behandeltraject",
        body: [
          "Daarna volgt een traject dat aansluit bij de vraag, zoals behandeling, oudergesprekken of afstemming.",
        ],
        illustration: {
          alt: "Illustratie bij het behandeltraject.",
          src: "/assets/behandeltraject.png",
          tone: "turquoise",
        },
      },
      {
        title: "Evaluatie / afstemming",
        body: [
          "Regelmatig wordt bekeken wat werkt en welke vervolgstap passend is.",
        ],
        illustration: {
          alt: "Illustratie bij evaluatie en afstemming.",
          src: "/assets/evaluatie.png",
          tone: "neutral",
        },
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
      "Aanmelden, wachttijd, tarieven, privacy en veelgestelde vragen staan hier bij elkaar.",
    illustration: {
      alt: "Blokkenillustratie bij overzicht en praktische stappen.",
      src: "/assets/BLOKKEN.webp",
      tone: "neutral",
    },
    sections: routeGroups.praktischeInformatie.map((route) => {
      const topic =
        route.label === "FAQ"
          ? "veelgestelde vragen"
          : route.label.toLowerCase();

      return {
        title: route.label,
        body: [`Korte informatie over ${topic}. Bekijk de detailpagina voor wat nu belangrijk is.`],
        links: [{ label: "Lees meer", href: route.href }],
      };
    }),
    ctas: [contactCta, { label: "Lees de werkwijze", href: routes.werkwijze.href }],
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
          "Vermeld woonplaats, hulpvraag, telefoonnummer en e-mailadres.",
          "Na ontvangst wordt bekeken welke vervolgstap passend is.",
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
      "De actuele wachttijd en aanmeldstatus staan hier bij elkaar.",
    illustration: {
      alt: "Blokkenillustratie bij overzicht en wachttijd.",
      src: "/assets/BLOKKEN.webp",
      tone: "turquoise",
    },
    sections: [
      {
        title: "Actuele status",
        body: [
          "Onder het introductieblok staat de actuele wachttijd per onderdeel.",
          "Neem bij twijfel contact op voor de passende route.",
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
      "Hier staat praktische uitleg over kosten, verwijzing, vergoeding en eigen betaling.",
    illustration: {
      alt: "Blokkenillustratie bij praktische informatie.",
      src: "/assets/BLOKKEN.webp",
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
          "Bij aanmelding wordt afgestemd welke betaal- of verwijsroute van toepassing is.",
        ],
      },
      {
        title: "Afzeggen",
        body: [
          "Afspraken die te laat worden afgezegd kunnen in rekening worden gebracht.",
        ],
      },
    ],
    ctas: [contactCta, { label: "Privacy", href: routes.praktischePrivacy.href }],
  },

  praktischePrivacy: {
    routeKey: "praktischePrivacy",
    title: "Privacyverklaring",
    description:
      "Privacyverklaring van Uniqara over persoonsgegevens, gezondheidsgegevens, dossiers en rechten.",
    intro:
      "Uniqara gaat zorgvuldig en vertrouwelijk om met persoonsgegevens en gezondheidsgegevens. Deze privacyverklaring legt uit welke gegevens wij verwerken, waarom dat gebeurt en welke rechten je hebt.",
    sections: [
      {
        title: "Wie is verantwoordelijk?",
        body: [
          "Uniqara is verantwoordelijk voor de verwerking van persoonsgegevens die via deze website, per e-mail, telefonisch, tijdens aanmelding of binnen een behandeltraject worden gedeeld.",
          `Voor privacyvragen kun je contact opnemen via ${contact.email}. De praktijk is gevestigd aan ${contact.address.street}, ${contact.address.postalCodeCity}.`,
          "Wanneer meerdere zorgverleners bij een traject betrokken zijn, wordt per situatie bekeken wie welke gegevens verwerkt en met welk doel.",
        ],
      },
      {
        title: "Welke gegevens verwerken wij?",
        body: [
          "Wij kunnen contactgegevens verwerken, zoals naam, e-mailadres, telefoonnummer, woonplaats en gegevens die je invult in het contactformulier.",
          "Voor aanmelding, intake en behandeling kunnen ook hulpvraag, geboortedatum, verwijsinformatie, verzekerings- of gemeentegegevens, afspraken, gespreksverslagen, behandelgegevens en andere gezondheidsgegevens worden verwerkt.",
          "Bij kinderen en jongeren kunnen ook gegevens van ouders/verzorgers, gezag, school, huisarts, gemeente, verwijzer of andere betrokken professionals relevant zijn.",
          "Deel via het contactformulier alleen informatie die nodig is voor een eerste contact of aanmelding. Gebruik het formulier niet voor acute of spoedeisende situaties.",
        ],
      },
      {
        title: "Waarom verwerken wij gegevens?",
        body: [
          "Wij verwerken gegevens om contact op te nemen, aanmeldingen te beoordelen, afspraken te plannen, passende zorg te kunnen bieden, dossiers bij te houden, te communiceren met betrokkenen en te voldoen aan administratieve, declaratie- en wettelijke verplichtingen.",
          "De grondslagen hiervoor zijn onder meer uitvoering van een zorg- of behandelovereenkomst, voorbereiding daarop, wettelijke verplichtingen, gerechtvaardigd belang en, waar nodig, toestemming.",
          "Gezondheidsgegevens worden alleen verwerkt wanneer dat noodzakelijk is voor goede zorg, dossiervoering, verwijzing, afstemming of een andere wettelijk toegestane reden.",
        ],
      },
      {
        title: "Dossier en bewaartermijn",
        body: [
          "Voor goede en veilige zorg wordt een dossier bijgehouden. In het dossier staan gegevens die nodig zijn voor behandeling, begeleiding, afstemming, verslaglegging en continuiteit van zorg.",
          "Medische dossiers worden in beginsel minimaal twintig jaar bewaard vanaf de laatste wijziging in het dossier, tenzij een langere of kortere bewaartermijn wettelijk is toegestaan of noodzakelijk is.",
          "Gegevens uit een eerste contact of contactformulier worden niet langer bewaard dan nodig is voor beantwoording, aanmelding, administratieve opvolging of een eventueel behandeltraject.",
        ],
      },
      {
        title: "Delen met anderen",
        body: [
          "Gegevens worden niet zonder reden gedeeld. Delen gebeurt alleen wanneer dat nodig is voor zorgverlening, verwijzing, declaratie, administratie, wettelijke verplichtingen of wanneer je daarvoor toestemming hebt gegeven.",
          "Denk aan afstemming met huisarts, verwijzer, gemeente, school, andere behandelaren, zorgadministratie, boekhouding, ICT-leveranciers of e-maildienstverleners. Met leveranciers die persoonsgegevens verwerken worden passende afspraken gemaakt.",
          "Bij kinderen en jongeren wordt zorgvuldig gekeken naar leeftijd, gezag, toestemming en het belang van het kind.",
        ],
      },
      {
        title: "Beveiliging",
        body: [
          "Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, onbevoegde toegang en onzorgvuldig gebruik.",
          "Alleen personen die de gegevens nodig hebben voor hun taak krijgen toegang. Waar mogelijk beperken wij de hoeveelheid gegevens en bewaren wij gegevens niet langer dan nodig.",
          "E-mail en online formulieren kunnen nooit volledig risicovrij worden gebruikt. Vermeld daarom in een eerste bericht alleen wat nodig is om contact op te nemen of de hulpvraag kort te duiden.",
        ],
      },
      {
        title: "Jouw rechten",
        body: [
          "Je hebt volgens de AVG onder andere recht op informatie, inzage, correctie, aanvulling, beperking van verwerking, bezwaar en in sommige gevallen verwijdering of overdracht van gegevens.",
          "Voor medische dossiers gelden daarnaast specifieke regels. Een verzoek wordt zorgvuldig beoordeeld, onder meer in verband met wettelijke bewaarplichten, rechten van anderen en het belang van goede zorg.",
          `Je kunt een verzoek of privacyvraag sturen naar ${contact.email}. Wij kunnen vragen om identificatie voordat wij gegevens verstrekken of aanpassen.`,
        ],
      },
      {
        title: "Cookies en websitegebruik",
        body: [
          "Deze website gebruikt voor zover bekend geen trackingcookies, advertentiecookies of analytische cookies waarvoor vooraf toestemming nodig is.",
          "Wanneer later wel tracking, externe analyse of vergelijkbare technieken worden toegevoegd, wordt de website daarop aangepast en wordt waar nodig vooraf toestemming gevraagd.",
          "Voor functionele of strikt noodzakelijke technieken die nodig zijn om de website te laten werken, is geen toestemmingspopup nodig.",
        ],
      },
      {
        title: "Klachten",
        body: [
          "Heb je een vraag of klacht over privacy, neem dan eerst contact op met Uniqara. Dan kunnen we samen kijken wat er aan de hand is.",
          "Je hebt ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.",
          "Deze privacyverklaring kan worden aangepast wanneer de praktijk, website, wetgeving of gebruikte systemen veranderen.",
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
      "Deze pagina bundelt algemene praktische informatie.",
    sections: [
      {
        title: "Bereikbaarheid",
        body: [contact.openingHours, contact.routeNote],
      },
      {
        title: "Afspraken",
        body: ["Afspraken worden in overleg gepland en afgestemd op de hulpvraag."],
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
      src: "/assets/BLOKKEN.webp",
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
        title: "Waar vindt hulp plaats?",
        body: [contact.locationDescription],
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
      `Uniqara is gevestigd bij ${contact.address.name} aan de ${contact.address.street} in ${contact.address.postalCodeCity.replace(/^\d{4}\s?[A-Z]{2}\s/, "")}. Op deze pagina vind je het adres en de kaart.`,
    illustration: {
      alt: "Blokkenillustratie bij locatie en aankomstinformatie.",
      src: "/assets/BLOKKEN.webp",
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
          "Foto's van de praktijk en omgeving worden later toegevoegd.",
        ],
      },
      {
        title: "Bereikbaarheid",
        body: [
          "Gebruik de kaart om de route vanaf je eigen vertrekpunt te bekijken.",
          contact.routeNote,
        ],
      },
      {
        title: "Kaart en route",
        body: [
          "Onder deze informatie staat een Google Maps-kaart.",
          "Met de knop open je de locatie in een nieuw tabblad.",
        ],
        links: [
          {
            label: "Bekijk op Google Maps",
            href: contact.googleMapsUrl,
          },
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
    intro: contact.heroIntro,
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
