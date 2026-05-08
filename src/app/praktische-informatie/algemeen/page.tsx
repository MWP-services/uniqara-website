import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.praktischeAlgemeen;

export default function AlgemenePraktischeInformatiePage() {
  return <ContentRoutePage routeKey="praktischeAlgemeen" />;
}
