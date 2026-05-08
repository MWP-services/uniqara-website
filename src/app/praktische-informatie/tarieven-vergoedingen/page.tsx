import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.praktischeTarievenVergoedingen;

export default function TarievenVergoedingenPage() {
  return <ContentRoutePage routeKey="praktischeTarievenVergoedingen" />;
}
