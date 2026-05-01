import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/content/seo";

const page = pages.praktischeInformatie;

export const metadata = pageMetadata.praktischeInformatie;

export default function PraktischeInformatiePage() {
  return <StructuredContentPage page={page} />;
}
