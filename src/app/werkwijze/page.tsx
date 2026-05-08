import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.werkwijze;

export default function WerkwijzePage() {
  return <ContentRoutePage routeKey="werkwijze" />;
}
