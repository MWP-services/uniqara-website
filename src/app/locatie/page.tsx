import { LocationMapSection } from "@/components/pages/LocationMapSection";
import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.locatie;

export default function LocatiePage() {
  return (
    <StructuredContentPage
      afterSections={<LocationMapSection />}
      aside={pages.locatie.aside}
      page={pages.locatie}
    />
  );
}
