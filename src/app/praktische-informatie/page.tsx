import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.praktischeInformatie;

export default function PraktischeInformatiePage() {
  return <ContentRoutePage routeKey="praktischeInformatie" />;
}
