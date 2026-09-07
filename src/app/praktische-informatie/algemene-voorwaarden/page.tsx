import type { Metadata } from "next";
import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata: Metadata = pageMetadata.praktischeAlgemeneVoorwaarden;

export default function AlgemeneVoorwaardenPage() {
  return <ContentRoutePage routeKey="praktischeAlgemeneVoorwaarden" />;
}
