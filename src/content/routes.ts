export type RouteKey =
  | "home"
  | "wieZijnWij"
  | "voorWie"
  | "voorWieKinderen"
  | "voorWieJongeren"
  | "voorWieOuders"
  | "voorWieScholenVerwijzers"
  | "hulpaanbod"
  | "speltherapie"
  | "kindertherapie"
  | "jongerenbegeleiding"
  | "ouderbegeleiding"
  | "vaktherapieCreatieveTherapie"
  | "psycholoogPedagoogBegeleiding"
  | "watIsEmdr"
  | "watIsAct"
  | "watIsCgt"
  | "werkwijze"
  | "praktischeInformatie"
  | "praktischeAanmelden"
  | "praktischeWachttijd"
  | "praktischeTarievenVergoedingen"
  | "praktischePrivacy"
  | "praktischeAlgemeen"
  | "praktischeFaq"
  | "locatie"
  | "contact"
  | "overUniqaraLegacy"
  | "hulpvragenLegacy"
  | "privacyLegacy";

export type RouteConfig = {
  key: RouteKey;
  label: string;
  href: string;
};

// Centrale routeconfig voor App Router pagina's en interne links.
export const routes = {
  home: { key: "home", label: "Home", href: "/" },
  wieZijnWij: {
    key: "wieZijnWij",
    label: "Wie zijn wij",
    href: "/wie-zijn-wij",
  },
  voorWie: { key: "voorWie", label: "Voor wie", href: "/voor-wie" },
  voorWieKinderen: {
    key: "voorWieKinderen",
    label: "Kinderen",
    href: "/voor-wie/kinderen",
  },
  voorWieJongeren: {
    key: "voorWieJongeren",
    label: "Jongeren",
    href: "/voor-wie/jongeren",
  },
  voorWieOuders: {
    key: "voorWieOuders",
    label: "Ouders / verzorgers",
    href: "/voor-wie/ouders-verzorgers",
  },
  voorWieScholenVerwijzers: {
    key: "voorWieScholenVerwijzers",
    label: "Scholen / verwijzers",
    href: "/voor-wie/scholen-verwijzers",
  },
  hulpaanbod: {
    key: "hulpaanbod",
    label: "Hulpaanbod",
    href: "/hulpaanbod",
  },
  speltherapie: {
    key: "speltherapie",
    label: "Speltherapie",
    href: "/hulpaanbod/speltherapie",
  },
  kindertherapie: {
    key: "kindertherapie",
    label: "Kindertherapie",
    href: "/hulpaanbod/kindertherapie",
  },
  jongerenbegeleiding: {
    key: "jongerenbegeleiding",
    label: "Jeugdhulp",
    href: "/hulpaanbod/jeugdhulp",
  },
  ouderbegeleiding: {
    key: "ouderbegeleiding",
    label: "Ouderbegeleiding / oudertherapie",
    href: "/hulpaanbod/ouderbegeleiding-oudertherapie",
  },
  vaktherapieCreatieveTherapie: {
    key: "vaktherapieCreatieveTherapie",
    label: "Vaktherapie / beeldende therapie",
    href: "/hulpaanbod/vaktherapie-beeldende-therapie",
  },
  psycholoogPedagoogBegeleiding: {
    key: "psycholoogPedagoogBegeleiding",
    label: "Psycholoog / pedagoog",
    href: "/hulpaanbod/psycholoog-pedagoog",
  },
  watIsEmdr: {
    key: "watIsEmdr",
    label: "Wat is EMDR",
    href: "/hulpaanbod/kindertherapie/emdr",
  },
  watIsAct: {
    key: "watIsAct",
    label: "Wat is ACT",
    href: "/hulpaanbod/kindertherapie/act",
  },
  watIsCgt: {
    key: "watIsCgt",
    label: "Wat is CGT",
    href: "/hulpaanbod/kindertherapie/cgt",
  },
  werkwijze: { key: "werkwijze", label: "Werkwijze", href: "/werkwijze" },
  praktischeInformatie: {
    key: "praktischeInformatie",
    label: "Praktische informatie",
    href: "/praktische-informatie",
  },
  praktischeAanmelden: {
    key: "praktischeAanmelden",
    label: "Aanmelden",
    href: "/praktische-informatie/aanmelden",
  },
  praktischeWachttijd: {
    key: "praktischeWachttijd",
    label: "Wachttijden",
    href: "/praktische-informatie/wachttijd",
  },
  praktischeTarievenVergoedingen: {
    key: "praktischeTarievenVergoedingen",
    label: "Tarieven / vergoedingen",
    href: "/praktische-informatie/tarieven-vergoedingen",
  },
  praktischePrivacy: {
    key: "praktischePrivacy",
    label: "Privacy",
    href: "/praktische-informatie/privacy",
  },
  praktischeAlgemeen: {
    key: "praktischeAlgemeen",
    label: "Algemene praktische informatie",
    href: "/praktische-informatie/algemeen",
  },
  praktischeFaq: {
    key: "praktischeFaq",
    label: "FAQ",
    href: "/praktische-informatie/faq",
  },
  locatie: { key: "locatie", label: "Locatie", href: "/locatie" },
  contact: { key: "contact", label: "Contact", href: "/contact" },
  overUniqaraLegacy: {
    key: "overUniqaraLegacy",
    label: "Over Uniqara",
    href: "/over-uniqara",
  },
  hulpvragenLegacy: {
    key: "hulpvragenLegacy",
    label: "Hulpvragen",
    href: "/hulpvragen",
  },
  privacyLegacy: { key: "privacyLegacy", label: "Privacy", href: "/privacy" },
} satisfies Record<RouteKey, RouteConfig>;

export const primaryRoutes = [
  routes.home,
  routes.wieZijnWij,
  routes.voorWie,
  routes.hulpaanbod,
  routes.werkwijze,
  routes.praktischeInformatie,
  routes.locatie,
  routes.contact,
] satisfies RouteConfig[];

export const routeGroups = {
  voorWie: [
    routes.voorWieKinderen,
    routes.voorWieJongeren,
    routes.voorWieOuders,
    routes.voorWieScholenVerwijzers,
  ],
  hulpaanbod: [
    routes.speltherapie,
    routes.kindertherapie,
    routes.jongerenbegeleiding,
    routes.ouderbegeleiding,
    routes.psycholoogPedagoogBegeleiding,
  ],
  behandelvormen: [
    routes.watIsEmdr,
    routes.watIsAct,
    routes.watIsCgt,
  ],
  praktischeInformatie: [
    routes.praktischeAanmelden,
    routes.praktischeWachttijd,
    routes.praktischeTarievenVergoedingen,
    routes.praktischePrivacy,
    routes.praktischeAlgemeen,
    routes.praktischeFaq,
  ],
} satisfies Record<string, RouteConfig[]>;

export const legacyRoutes = [
  routes.overUniqaraLegacy,
  routes.hulpvragenLegacy,
  routes.privacyLegacy,
] satisfies RouteConfig[];
