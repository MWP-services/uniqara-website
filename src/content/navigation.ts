import { routes } from "./routes";

export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationContent = {
  main: NavigationItem[];
  footer: NavigationItem[];
  headerCtaLabel: string;
};

// Pas hier het hoofdmenu en de footer-links aan wanneer pagina's worden toegevoegd.
export const navigation = {
  main: [
    routes.overUniqara,
    routes.voorWie,
    routes.hulpvragen,
    routes.werkwijze,
    routes.locatie,
  ],
  footer: [
    routes.home,
    routes.overUniqara,
    routes.voorWie,
    routes.hulpvragen,
    routes.werkwijze,
    routes.locatie,
    routes.praktischeInformatie,
    routes.contact,
    routes.privacy,
  ],
  headerCtaLabel: "Neem contact op",
} satisfies NavigationContent;
