import { contact } from "./contact";
import { routes } from "./routes";

export type FallbackLink = {
  label: string;
  href: string;
};

export type FallbackContent = {
  eyebrow: string;
  title: string;
  intro: string;
  note?: string;
  links: FallbackLink[];
};

export type LoadingContent = {
  eyebrow: string;
  title: string;
  intro: string;
};

export type FallbacksContent = {
  notFound: FallbackContent;
  error: FallbackContent & {
    retryLabel: string;
  };
  loading: LoadingContent;
};

// Productiewaardige fallbackcopy. Houd deze teksten helder en algemeen.
export const fallbacks = {
  notFound: {
    eyebrow: "Pagina niet gevonden",
    title: "Deze pagina lijkt niet te bestaan.",
    intro:
      "De gevraagde pagina is verplaatst, verwijderd of nog niet aangemaakt. Vanaf hier kun je terug naar een bekende plek.",
    note: `Voor contact kun je mailen naar ${contact.email}.`,
    links: [
      { label: "Terug naar home", href: routes.home.href },
      { label: "Bekijk hulpaanbod", href: routes.hulpaanbod.href },
      { label: "Neem contact op", href: routes.contact.href },
    ],
  },
  error: {
    eyebrow: "Er ging iets mis",
    title: "De pagina kon niet goed worden geladen.",
    intro:
      "Probeer het opnieuw of ga terug naar een vaste pagina. De rest van de site blijft gewoon bereikbaar.",
    note: `Voor contact kun je mailen naar ${contact.email}.`,
    retryLabel: "Opnieuw proberen",
    links: [
      { label: "Terug naar home", href: routes.home.href },
      { label: "Contact", href: routes.contact.href },
    ],
  },
  loading: {
    eyebrow: "Even laden",
    title: "De pagina wordt geladen.",
    intro:
      "De site laadt de inhoud. Dit scherm houdt de ervaring netjes wanneer een route nog onderweg is.",
  },
} satisfies FallbacksContent;
