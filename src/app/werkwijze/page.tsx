import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/content/seo";

const page = pages.werkwijze;

export const metadata = pageMetadata.werkwijze;

export default function WerkwijzePage() {
  return (
    <StructuredContentPage
      aside={page.aside}
      page={page}
      stepNumbers={page.showStepNumbers}
    />
  );
}
