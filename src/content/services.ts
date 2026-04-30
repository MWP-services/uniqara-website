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
    "Korte teksten, heldere routes en rustige keuzes helpen bezoekers snel te vinden wat bij hun vraag past.",
  items: [
    {
      title: "Begeleiding",
      summary:
        "Ruimte om stil te staan bij klachten, patronen en vragen die aandacht nodig hebben.",
      href: routes.hulpvragen.href,
    },
    {
      title: "Onderzoek",
      summary:
        "Heldere diagnostiek met oog voor het hele verhaal achter gedrag en ontwikkeling.",
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
        "Ondersteuning bij klachten die het dagelijks leven of school moeilijker maken.",
    },
    {
      title: "Emoties en gedrag",
      description:
        "Samen kijken naar signalen, behoeften en passende ondersteuning.",
    },
    {
      title: "Ontwikkeling en gezin",
      description:
        "Aandacht voor kinderen, jongeren, ouders en de context waarin zij leven.",
    },
  ],
} satisfies ServicesContent;
