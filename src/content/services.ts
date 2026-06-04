import { routes } from "./routes";

export type ServiceItem = {
  title: string;
  summary: string;
  href: string;
};

export type HelpQuestion = {
  title: string;
  description: string;
};

export type ServicesContent = {
  heading: string;
  intro: string;
  items: ServiceItem[];
  helpQuestions: HelpQuestion[];
};

// Pas hier het aanbod en de hulpvragen aan. Houd de teksten kort en concreet.
export const services = {
  heading: "Zorg met duidelijke stappen",
  intro:
    "Een kort overzicht van mogelijke ondersteuning.",
  items: [
    {
      title: "Kind en jeugd",
      summary:
        "Ondersteuning voor kinderen, jongeren en ouders bij emoties, gedrag, ontwikkeling of spanning.",
      href: routes.kindertherapie.href,
    },
    {
      title: "Volwassenen",
      summary:
        "Zorg bij persoonlijke vragen, spanning, vastlopen, verlies, onzekerheid of andere hulpvragen.",
      href: routes.psycholoogPedagoogBegeleiding.href,
    },
    {
      title: "Relatie",
      summary:
        "EFT-relatietherapie voor partners die willen werken aan verbinding, patronen en communicatie.",
      href: routes.hulpaanbod.href,
    },
  ],
  helpQuestions: [
    {
      title: "Angst, spanning of piekeren",
      description:
        "Ondersteuning wanneer zorgen, spanning of piekeren veel vraagt.",
    },
    {
      title: "Emoties en gedrag",
      description:
        "Samen kijken naar signalen, behoeften en wat overzicht kan geven.",
    },
    {
      title: "Zelfvertrouwen en weerbaarheid",
      description:
        "Aandacht voor onzekerheid, grenzen aangeven en steviger staan.",
    },
    {
      title: "School, druk en prikkels",
      description:
        "Verkennen wat school of dagelijkse prikkels zwaar maakt en welke steun passend is.",
    },
    {
      title: "Gezin en opvoeding",
      description:
        "Meedenken met ouders en verzorgers wanneer gedrag, emoties of afstemming vragen oproepen.",
    },
    {
      title: "Ontwikkeling en levensfase",
      description:
        "Vragen rond groei, verandering, identiteit en context.",
    },
  ],
} satisfies ServicesContent;
