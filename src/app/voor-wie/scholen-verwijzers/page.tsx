import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.voorWieScholenVerwijzers;

export default function ScholenVerwijzersPage() {
  return <ContentRoutePage routeKey="voorWieScholenVerwijzers" />;
}
