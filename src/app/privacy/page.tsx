import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/content/seo";

const page = pages.privacy;

export const metadata = pageMetadata.privacy;

export default function PrivacyPage() {
  return <StructuredContentPage aside={page.aside} page={page} />;
}
