import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/content/seo";

const page = pages.voorWie;

export const metadata = pageMetadata.voorWie;

export default function VoorWiePage() {
  return <StructuredContentPage aside={page.aside} page={page} />;
}
