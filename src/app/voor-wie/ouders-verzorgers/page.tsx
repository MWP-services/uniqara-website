import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.voorWieOuders;

export default function OudersVerzorgersPage() {
  return <ContentRoutePage routeKey="voorWieOuders" />;
}
