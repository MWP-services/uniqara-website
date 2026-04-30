import { placeholders } from "./placeholders";
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
  audience: {
    ctaLabel: string;
  };
  servicesPreview: {
    title: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  approach: {
    heading: string;
    intro: string;
    pathways: CtaLink[];
    ctaLabel: string;
  };
  location: {
    heading: string;
    intro: string;
    cardLabel: string;
    cardText: string;
    ctaLabel: string;
  };
  practicalInfo: {
    ctaLabel: string;
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
    eyebrow: "Nieuwe psychologiepraktijk in het groen",
    title:
      "Uniqara biedt rust, aandacht en professionele psychologische zorg.",
    intro:
      "Een warme praktijkplek waar kinderen, jongeren en gezinnen zich veilig mogen voelen. In een landelijke omgeving, met ruimte om zorgvuldig te kijken naar wat nodig is.",
    primaryCta: { label: "Neem contact op", href: routes.contact.href },
    secondaryCta: { label: "Lees de werkwijze", href: routes.werkwijze.href },
    supportItems: [
      "Rustige praktijkplek",
      "Groene landelijke omgeving",
      "Zorgvuldig afgestemd traject",
    ],
    imagePlaceholderLabel: "Visuele placeholder",
    imagePlaceholderText: placeholders.HERO_IMAGE_HOOIBERG.uiText,
    imagePlaceholders: [
      {
        label: "De Hooiberg",
        text: placeholders.HERO_IMAGE_HOOIBERG.uiText,
      },
      {
        label: "Natuur en groen",
        text: placeholders.HERO_IMAGE_NATURE.uiText,
      },
      {
        label: "Praktijk en sfeer",
        text: placeholders.HERO_IMAGE_PRACTICE.uiText,
      },
    ],
  },
  intro: {
    valueCardText:
      "Een rustige basis voor contact, onderzoek en begeleiding.",
    ctaLabel: "Meer over Uniqara",
  },
  audience: {
    ctaLabel: "Bekijk alle doelgroepen",
  },
  servicesPreview: {
    title: "Hulpvragen en aanbod",
    primaryCtaLabel: "Bekijk hulpvragen",
    secondaryCtaLabel: "Lees de werkwijze",
  },
  approach: {
    heading: "Werkwijze in duidelijke stappen",
    intro:
      "De site krijgt per onderwerp een eigen vervolgpagina, zodat de homepage licht en overzichtelijk blijft.",
    pathways: [
      { label: "Voor ouders en kinderen", href: routes.voorWie.href },
      { label: "Voor jongeren", href: routes.voorWie.href },
      { label: "Voor verwijzers", href: routes.voorWie.href },
      { label: "Praktische informatie", href: routes.praktischeInformatie.href },
    ],
    ctaLabel: "Bekijk de volledige werkwijze",
  },
  location: {
    heading: "De Hooiberg als rustige praktijkplek",
    intro:
      "De locatiebeleving mag straks voelbaar worden door echte beelden van groen, erf en landelijke stilte. Voor nu is de structuur alvast voorbereid.",
    cardLabel: "Locatieblok",
    cardText: placeholders.PRACTICE_PHOTOS.uiText,
    ctaLabel: "Bekijk de locatie",
  },
  practicalInfo: {
    ctaLabel: "Lees praktische informatie",
  },
  contactCta: {
    title: "Contact opnemen",
    primaryCtaLabel: "Naar contact",
    secondaryCtaLabel: "Praktische info",
  },
} satisfies HomeContent;
