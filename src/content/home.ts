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
    imagePlaceholderLabel: string;
    imagePlaceholderText: string;
  };
  approach: {
    heading: string;
    intro: string;
    pathways: CtaLink[];
  };
  location: {
    heading: string;
    intro: string;
    cardLabel: string;
    cardText: string;
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
    primaryCta: { label: "Bekijk het aanbod", href: "#aanbod" },
    secondaryCta: { label: "Ontdek De Hooiberg", href: "#locatie" },
    imagePlaceholderLabel: "Beeldplaceholder",
    imagePlaceholderText: "Hooiberg, erf, bomen en zachte natuurbeelden.",
  },
  approach: {
    heading: "Warm, rustig en professioneel",
    intro:
      "De site krijgt per onderwerp een eigen vervolgpagina, zodat de homepage licht en overzichtelijk blijft.",
    pathways: [
      { label: "Voor ouders en kinderen", href: "#contact" },
      { label: "Voor jongeren", href: "#contact" },
      { label: "Voor verwijzers", href: "#contact" },
      { label: "Praktische informatie", href: "#praktisch" },
    ],
  },
  location: {
    heading: "De Hooiberg als rustige praktijkplek",
    intro:
      "De locatiebeleving mag straks voelbaar worden door echte beelden van groen, erf en landelijke stilte. Voor nu is de structuur alvast voorbereid.",
    cardLabel: "Locatieblok",
    cardText:
      "Plek voor adres, route, parkeren en een zachte introductie op de praktijkruimte.",
  },
} satisfies HomeContent;
