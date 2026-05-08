import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages, type PageContent, type PageRouteKey } from "@/content/pages";

type ContentRoutePageProps = {
  routeKey: PageRouteKey;
};

export function ContentRoutePage({ routeKey }: ContentRoutePageProps) {
  const page: PageContent = pages[routeKey];

  return (
    <StructuredContentPage
      aside={page.aside}
      page={page}
      stepNumbers={page.showStepNumbers}
    />
  );
}
