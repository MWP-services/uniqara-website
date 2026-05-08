import { routes } from "./routes";

export type CtaLink = {
  label: string;
  href: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    supportItems: string[];
    imagePlaceholderLabel: string;
    imagePlaceholderText: string;
    imagePlaceholders: {
      label: string;
      text: string;
    }[];
  };
  intro: {
    valueCardText: string;
    ctaLabel: string;
  };
  routeOverview: {
    title: string;
    intro: string;
    items: Array<CtaLink & { description: string }>;
  };
  audience: {
    ctaLabel: string;
    cardLinkLabel: string;
  };
  servicesPreview: {
    title: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    serviceLinkLabel: string;
    questionLinkLabel: string;
  };
  approach: {
    heading: string;
    intro: string;
    pathways: CtaLink[];
    ctaLabel: string;
    stepLinkLabel: string;
  };
  location: {
    heading: string;
    intro: string;
    cardLabel: string;
    cardText: string;
    ctaLabel: string;
    secondaryCtaLabel: string;
  };
  practicalInfo: {
    ctaLabel: string;
    cardLinkLabel: string;
  };
  contactCta: {
    title: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
};

// Homepage-copy: dit zijn de teksten die het vaakst worden aangepast.
export const home = {
  hero: {
    eyebrow: "Psychologiepraktijk met aandacht voor groei",
    title:
      "Uniqara biedt rust, aandacht en professionele psychologische zorg.",
    intro:
      "Een warme praktijkplek voor kinderen, jongeren, volwassenen en relaties. Met rust, aandacht en ruimte om samen te kijken naar nieuwe mogelijkheden.",
    primaryCta: { label: "Neem contact op", href: routes.contact.href },
    secondaryCta: { label: "Lees de werkwijze", href: routes.werkwijze.href },
    supportItems: [
      "Rustige praktijkplek",
      "Groen, helder en overzichtelijk",
      "Zorgvuldig afgestemd traject",
      "Wachttijd wordt actueel bijgehouden",
    ],
    imagePlaceholderLabel: "Ontwikkeling",
    imagePlaceholderText:
      "Illustratie rond spel, groei en onderweg zijn naar nieuwe mogelijkheden.",
    imagePlaceholders: [
      {
        label: "Natuur en groei",
        text: "Sfeerbeeld rond natuur, groei en onderweg zijn naar nieuwe mogelijkheden volgt later.",
      },
      {
        label: "Natuur en groen",
        text: "Rustige illustratie rond veiligheid, verbinding en groei.",
      },
      {
        label: "Praktijk en sfeer",
        text: "Kindvriendelijke illustratie die de praktijk warm en overzichtelijk ondersteunt.",
      },
    ],
  },
  intro: {
    valueCardText:
      "Een rustige basis voor contact, onderzoek en begeleiding.",
    ctaLabel: "Meer over Uniqara",
  },
  routeOverview: {
    title: "Snel naar de juiste pagina",
    intro:
      "De homepage geeft alleen een kort overzicht. De inhoud staat overzichtelijk verdeeld over aparte pagina's.",
    items: [
      {
        label: "Wie zijn wij",
        href: routes.wieZijnWij.href,
        description: "Visie, missie, behandelaren, kernwaarden en persoonlijke benadering.",
      },
      {
        label: "Voor wie",
        href: routes.voorWie.href,
        description: "Aparte pagina's voor kinderen, jongeren, ouders en verwijzers.",
      },
      {
        label: "Hulpaanbod",
        href: routes.hulpaanbod.href,
        description: "Een overzicht met doorkliks naar de verschillende vormen van begeleiding.",
      },
      {
        label: "Werkwijze",
        href: routes.werkwijze.href,
        description: "Aanmelden, kennismaking, begeleiding en evaluatie in duidelijke stappen.",
      },
      {
        label: "Praktische informatie",
        href: routes.praktischeInformatie.href,
        description: "Aanmelden, wachttijd, tarieven, privacy, algemene informatie en FAQ.",
      },
      {
        label: "Contact",
        href: routes.contact.href,
        description: "Contactgegevens, formulier, adres en een laagdrempelige eerste stap.",
      },
    ],
  },
  audience: {
    ctaLabel: "Bekijk alle doelgroepen",
    cardLinkLabel: "Voor wie",
  },
  servicesPreview: {
    title: "Hulpaanbod",
    primaryCtaLabel: "Bekijk hulpaanbod",
    secondaryCtaLabel: "Lees de werkwijze",
    serviceLinkLabel: "Meer over aanbod",
    questionLinkLabel: "Bekijk aanbod",
  },
  approach: {
    heading: "Werkwijze in duidelijke stappen",
    intro:
      "Een traject krijgt stap voor stap vorm. Duidelijkheid over het proces helpt om met rust te beginnen.",
    pathways: [
      { label: "Voor ouders en kinderen", href: routes.voorWie.href },
      { label: "Voor jongeren", href: routes.voorWie.href },
      { label: "Voor verwijzers", href: routes.voorWie.href },
      { label: "Praktische informatie", href: routes.praktischeInformatie.href },
    ],
    ctaLabel: "Bekijk de volledige werkwijze",
    stepLinkLabel: "Stap bekijken",
  },
  location: {
    heading: "Een rustige plek voor groei",
    intro:
      "De locatie-informatie blijft helder en praktisch: adres, bereikbaarheid, routebeschrijving, parkeren en openingstijden.",
    cardLabel: "Locatieblok",
    cardText:
      "Illustratie rond ontwikkeling, bouwen en stap voor stap verder groeien.",
    ctaLabel: "Bekijk de locatie",
    secondaryCtaLabel: "Praktische route-info",
  },
  practicalInfo: {
    ctaLabel: "Lees praktische informatie",
    cardLinkLabel: "Meer informatie",
  },
  contactCta: {
    title: "Contact opnemen",
    primaryCtaLabel: "Neem contact op",
    secondaryCtaLabel: "Praktische informatie",
  },
} satisfies HomeContent;
