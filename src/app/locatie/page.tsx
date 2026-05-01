import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/content/seo";

const page = pages.locatie;

export const metadata = pageMetadata.locatie;

export default function LocatiePage() {
  return <StructuredContentPage aside={page.aside} page={page} />;
}
