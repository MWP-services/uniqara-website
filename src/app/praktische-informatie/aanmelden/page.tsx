import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.praktischeAanmelden;

export default function AanmeldenPage() {
  return <ContentRoutePage routeKey="praktischeAanmelden" />;
}
