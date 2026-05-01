import type { Metadata } from "next";
import { pages } from "./pages";
import { placeholders } from "./placeholders";
import { routes, type RouteKey } from "./routes";
import { site } from "./site";

export type SeoEntry = {
  routeKey: RouteKey;
  path: string;
  title: string;
  description: string;
};

export type SeoContent = {
  siteName: string;
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  locale: string;
  placeholderBaseUrl: string;
  siteUrlPlaceholder: string;
  assets: {
    faviconPlaceholder: string;
    appIconPlaceholder: string;
    socialPreviewPlaceholder: string;
    socialPreviewAlt: string;
  };
  pages: Record<RouteKey, SeoEntry>;
};

const homeTitle = `${site.name} | ${site.tagline}`;
const placeholderBaseUrl = "https://uniqara.example";

export const seo = {
  siteName: site.name,
  titleTemplate: site.titleTemplate,
  defaultTitle: site.defaultTitle,
  defaultDescription: site.description,
  locale: "nl_NL",
  placeholderBaseUrl,
  siteUrlPlaceholder: placeholders.SEO_SITE_URL.uiText,
  assets: {
    faviconPlaceholder: placeholders.FAVICON_PLACEHOLDER.uiText,
    appIconPlaceholder: placeholders.APP_ICON_PLACEHOLDER.uiText,
    socialPreviewPlaceholder: placeholders.SOCIAL_PREVIEW_IMAGE.uiText,
    socialPreviewAlt:
      "Uniqara - rustige psychologiepraktijk in een groene omgeving",
  },
  pages: {
    home: {
      routeKey: "home",
      path: routes.home.href,
      title: homeTitle,
      description:
        "Uniqara is een rustige en professionele psychologiepraktijk in een groene omgeving, met aandacht voor kinderen, jongeren, ouders en gezinnen.",
    },
    overUniqara: {
      routeKey: "overUniqara",
      path: routes.overUniqara.href,
      title: pages.overUniqara.title,
      description: pages.overUniqara.description,
    },
    voorWie: {
      routeKey: "voorWie",
      path: routes.voorWie.href,
      title: pages.voorWie.title,
      description: pages.voorWie.description,
    },
    hulpvragen: {
      routeKey: "hulpvragen",
      path: routes.hulpvragen.href,
      title: pages.hulpvragen.title,
      description: pages.hulpvragen.description,
    },
    werkwijze: {
      routeKey: "werkwijze",
      path: routes.werkwijze.href,
      title: pages.werkwijze.title,
      description: pages.werkwijze.description,
    },
    locatie: {
      routeKey: "locatie",
      path: routes.locatie.href,
      title: pages.locatie.title,
      description: pages.locatie.description,
    },
    praktischeInformatie: {
      routeKey: "praktischeInformatie",
      path: routes.praktischeInformatie.href,
      title: pages.praktischeInformatie.title,
      description: pages.praktischeInformatie.description,
    },
    contact: {
      routeKey: "contact",
      path: routes.contact.href,
      title: pages.contact.title,
      description: pages.contact.description,
    },
    privacy: {
      routeKey: "privacy",
      path: routes.privacy.href,
      title: pages.privacy.title,
      description: pages.privacy.description,
    },
  },
} satisfies SeoContent;

export function absoluteUrl(path: string) {
  return new URL(path, seo.placeholderBaseUrl).toString();
}

export const technicalSeoRoutes = Object.values(seo.pages);

function openGraphFor(entry: SeoEntry): NonNullable<Metadata["openGraph"]> {
  return {
    title: entry.title,
    description: entry.description,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
  };
}

export function createPageMetadata(routeKey: RouteKey): Metadata {
  const entry = seo.pages[routeKey];

  return {
    title: entry.title,
    description: entry.description,
    openGraph: openGraphFor(entry),
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(seo.placeholderBaseUrl),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.defaultDescription,
  applicationName: seo.siteName,
  openGraph: {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const pageMetadata = {
  home: createPageMetadata("home"),
  overUniqara: createPageMetadata("overUniqara"),
  voorWie: createPageMetadata("voorWie"),
  hulpvragen: createPageMetadata("hulpvragen"),
  werkwijze: createPageMetadata("werkwijze"),
  locatie: createPageMetadata("locatie"),
  praktischeInformatie: createPageMetadata("praktischeInformatie"),
  contact: createPageMetadata("contact"),
  privacy: createPageMetadata("privacy"),
} satisfies Record<RouteKey, Metadata>;
