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
    intro: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
};

// Homepage-copy: dit zijn de teksten die het vaakst worden aangepast.
export const home = {
  hero: {
    eyebrow: "Psychologiepraktijk",
    title: "Groeien begint met gezien worden.",
    intro:
      "Persoonlijke begeleiding voor kinderen, jongeren en gezinnen. Met aandacht voor ontwikkeling, vertrouwen en welzijn.",
    primaryCta: { label: "Neem contact op", href: routes.contact.href },
    secondaryCta: { label: "Lees de werkwijze", href: routes.werkwijze.href },
    supportItems: [],
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
      "Een zachte basis om te beginnen.",
    ctaLabel: "Meer over Uniqara",
  },
  routeOverview: {
    title: "Waar wil je meer over weten?",
    intro:
      "Kies rustig wat nu bij je vraag past.",
    items: [
      {
        label: "Wie zijn wij",
        href: routes.wieZijnWij.href,
        description: "Maak kennis met de praktijk en de manier van werken.",
      },
      {
        label: "Voor wie",
        href: routes.voorWie.href,
        description: "Informatie voor kinderen, jongeren, ouders en verwijzers.",
      },
      {
        label: "Hulpaanbod",
        href: routes.hulpaanbod.href,
        description: "Bekijk welke begeleiding mogelijk is.",
      },
      {
        label: "Werkwijze",
        href: routes.werkwijze.href,
        description: "Lees hoe een traject meestal begint.",
      },
      {
        label: "Praktische informatie",
        href: routes.praktischeInformatie.href,
        description: "Aanmelden, wachttijd, tarieven en privacy.",
      },
      {
        label: "Contact",
        href: routes.contact.href,
        description: "Stel een vraag of meld je rustig aan.",
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
    title: "Een eerste bericht is genoeg",
    intro:
      "Je hoeft nog niet alles precies te weten. Stuur gerust een korte vraag.",
    primaryCtaLabel: "Neem contact op",
    secondaryCtaLabel: "Praktische informatie",
  },
} satisfies HomeContent;
