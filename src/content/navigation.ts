export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationContent = {
  main: NavigationItem[];
  footer: NavigationItem[];
};

// Pas hier het hoofdmenu en de footer-links aan wanneer pagina's worden toegevoegd.
export const navigation = {
  main: [
    { label: "Aanbod", href: "#aanbod" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "De Hooiberg", href: "#locatie" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  footer: [
    { label: "Aanbod", href: "#aanbod" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "Praktische informatie", href: "#praktisch" },
    { label: "Privacy", href: "#privacy" },
    { label: "Contact", href: "#contact" },
  ],
} satisfies NavigationContent;
