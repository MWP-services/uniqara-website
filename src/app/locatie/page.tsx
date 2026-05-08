import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.locatie;

export default function LocatiePage() {
  return <ContentRoutePage routeKey="locatie" />;
}
