import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.kindertherapie;

export default function KindertherapiePage() {
  return <ContentRoutePage routeKey="kindertherapie" />;
}
