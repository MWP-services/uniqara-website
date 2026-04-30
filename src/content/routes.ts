export type RouteKey =
  | "home"
  | "overUniqara"
  | "voorWie"
  | "hulpvragen"
  | "werkwijze"
  | "locatie"
  | "praktischeInformatie"
  | "contact"
  | "privacy";

export type RouteConfig = {
  key: RouteKey;
  label: string;
  href: string;
};

// Centrale routeconfig voor App Router pagina's en interne links.
export const routes = {
  home: { key: "home", label: "Home", href: "/" },
  overUniqara: {
    key: "overUniqara",
    label: "Over Uniqara",
    href: "/over-uniqara",
  },
  voorWie: { key: "voorWie", label: "Voor wie", href: "/voor-wie" },
  hulpvragen: { key: "hulpvragen", label: "Hulpvragen", href: "/hulpvragen" },
  werkwijze: { key: "werkwijze", label: "Werkwijze", href: "/werkwijze" },
  locatie: { key: "locatie", label: "Locatie", href: "/locatie" },
  praktischeInformatie: {
    key: "praktischeInformatie",
    label: "Praktische informatie",
    href: "/praktische-informatie",
  },
  contact: { key: "contact", label: "Contact", href: "/contact" },
  privacy: { key: "privacy", label: "Privacy", href: "/privacy" },
} satisfies Record<RouteKey, RouteConfig>;
