import { pages, type PageContent } from "./pages";
import { routes } from "./routes";
import { site } from "./site";

export type SearchEntry = {
  description: string;
  href: string;
  keywords: string;
  title: string;
};

function pageText(page: PageContent) {
  return [
    page.title,
    page.description,
    page.intro,
    page.aside?.title,
    page.aside?.text,
    page.sections.flatMap((section) => [
      section.title,
      ...section.body,
      ...(section.subsections?.flatMap((subsection) => [subsection.title, ...subsection.body]) ?? []),
      section.links?.map((link) => link.label).join(" "),
    ]),
  ]
    .flat(2)
    .filter(Boolean)
    .join(" ");
}

export const searchEntries = [
  {
    title: "Home",
    description: site.description,
    href: routes.home.href,
    keywords: `${site.name} ${site.tagline} ${site.description}`,
  },
  ...Object.values(pages).map((page: PageContent) => ({
    title: page.title,
    description: page.description,
    href: routes[page.routeKey].href,
    keywords: pageText(page),
  })),
] satisfies SearchEntry[];
