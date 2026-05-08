import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.hulpaanbod;

export default function HulpaanbodPage() {
  return <ContentRoutePage routeKey="hulpaanbod" />;
}
