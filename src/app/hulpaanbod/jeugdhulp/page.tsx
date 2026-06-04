import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.jongerenbegeleiding;

export default function JeugdhulpPage() {
  return <ContentRoutePage routeKey="jongerenbegeleiding" />;
}
