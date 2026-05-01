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
    "Een rustig overzicht helpt bezoekers herkennen welke ondersteuning mogelijk passend kan zijn.",
  items: [
    {
      title: "Begeleiding",
      summary:
        "Ruimte om stil te staan bij vragen, patronen en wat iemand nodig heeft.",
      href: routes.hulpvragen.href,
    },
    {
      title: "Onderzoek",
      summary:
        "Zorgvuldig kijken naar gedrag, ontwikkeling en de context eromheen.",
      href: routes.hulpvragen.href,
    },
    {
      title: "Behandeling",
      summary:
        "Een zorgvuldig traject dat aansluit bij leeftijd, gezinssituatie en hulpvraag.",
      href: routes.hulpvragen.href,
    },
  ],
  helpQuestions: [
    {
      title: "Angst, spanning of piekeren",
      description:
        "Ondersteuning wanneer zorgen, spanning of piekergedachten veel ruimte innemen.",
    },
    {
      title: "Emoties en gedrag",
      description:
        "Samen kijken naar signalen, behoeften en wat helpt om weer meer overzicht te ervaren.",
    },
    {
      title: "Zelfvertrouwen en weerbaarheid",
      description:
        "Aandacht voor onzekerheid, grenzen aangeven en stap voor stap steviger staan.",
    },
    {
      title: "School, druk en prikkels",
      description:
        "Rustig verkennen wat school of dagelijkse prikkels zwaar maakt en welke steun passend is.",
    },
    {
      title: "Gezin en opvoeding",
      description:
        "Meedenken met ouders en verzorgers wanneer gedrag, emoties of afstemming vragen oproepen.",
    },
    {
      title: "Ontwikkeling en levensfase",
      description:
        "Ruimte voor vragen rond groei, verandering, identiteit en de context waarin iemand leeft.",
    },
  ],
} satisfies ServicesContent;
