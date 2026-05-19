import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages, type PageContent, type PageRouteKey } from "@/content/pages";
import type { ReactNode } from "react";

type ContentRoutePageProps = {
  afterSections?: ReactNode;
  routeKey: PageRouteKey;
};

export function ContentRoutePage({ afterSections, routeKey }: ContentRoutePageProps) {
  const page: PageContent = pages[routeKey];

  return (
    <StructuredContentPage
      afterSections={afterSections}
      aside={page.aside}
      page={page}
      stepNumbers={page.showStepNumbers}
    />
  );
}
