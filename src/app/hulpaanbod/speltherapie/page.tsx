import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.speltherapie;

export default function SpeltherapiePage() {
  return <ContentRoutePage routeKey="speltherapie" />;
}
