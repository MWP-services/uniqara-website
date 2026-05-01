import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/content/seo";

const page = pages.hulpvragen;

export const metadata = pageMetadata.hulpvragen;

export default function HulpvragenPage() {
  return <StructuredContentPage aside={page.aside} page={page} />;
}
