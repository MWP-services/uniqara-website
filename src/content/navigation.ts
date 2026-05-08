import { primaryRoutes, routeGroups } from "./routes";

export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationContent = {
  main: NavigationItem[];
  groups: {
    voorWie: NavigationItem[];
    hulpaanbod: NavigationItem[];
    praktischeInformatie: NavigationItem[];
  };
  footer: NavigationItem[];
  headerCtaLabel: string;
};

// Pas hier het hoofdmenu en de footer-links aan wanneer pagina's worden toegevoegd.
export const navigation = {
  main: primaryRoutes,
  groups: routeGroups,
  footer: [
    ...primaryRoutes,
    ...routeGroups.voorWie,
    ...routeGroups.hulpaanbod,
    ...routeGroups.praktischeInformatie,
  ],
  headerCtaLabel: "Neem contact op",
} satisfies NavigationContent;
