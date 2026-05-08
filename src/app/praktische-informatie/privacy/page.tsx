import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.praktischePrivacy;

export default function PraktischePrivacyPage() {
  return <ContentRoutePage routeKey="praktischePrivacy" />;
}
