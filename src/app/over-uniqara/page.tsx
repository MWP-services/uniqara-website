import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/content/seo";

const page = pages.overUniqara;

export const metadata = pageMetadata.overUniqara;

export default function OverUniqaraPage() {
  return <StructuredContentPage aside={page.aside} page={page} />;
}
