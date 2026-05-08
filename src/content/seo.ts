import type { Metadata } from "next";
import { pages, type PageRouteKey } from "./pages";
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
  pages: Record<"home" | PageRouteKey, SeoEntry>;
};

const homeTitle = `${site.name} | ${site.tagline}`;
const placeholderBaseUrl = "https://uniqara.example";

const contentPageSeo = Object.fromEntries(
  Object.values(pages).map((page) => [
    page.routeKey,
    {
      routeKey: page.routeKey,
      path: routes[page.routeKey].href,
      title: page.title,
      description: page.description,
    },
  ]),
) as Record<PageRouteKey, SeoEntry>;

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
      "Uniqara - rustige psychologiepraktijk voor kinderen, jongeren, volwassenen en relaties",
  },
  pages: {
    home: {
      routeKey: "home",
      path: routes.home.href,
      title: homeTitle,
      description:
        "Uniqara is een rustige en professionele psychologiepraktijk met aandacht voor kinderen, jongeren, volwassenen, ouders en relaties.",
    },
    ...contentPageSeo,
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

export function createPageMetadata(routeKey: "home" | PageRouteKey): Metadata {
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

export const pageMetadata = Object.fromEntries(
  (Object.keys(seo.pages) as Array<"home" | PageRouteKey>).map((routeKey) => [
    routeKey,
    createPageMetadata(routeKey),
  ]),
) as Record<"home" | PageRouteKey, Metadata>;
