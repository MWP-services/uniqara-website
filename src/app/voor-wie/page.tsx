import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.voorWie;

export default function VoorWiePage() {
  return <ContentRoutePage routeKey="voorWie" />;
}
