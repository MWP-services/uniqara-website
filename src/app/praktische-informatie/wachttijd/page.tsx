import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { WaitingTimesSection } from "@/components/pages/WaitingTimesSection";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.praktischeWachttijd;

export default function WachttijdPage() {
  return (
    <ContentRoutePage
      afterSections={<WaitingTimesSection />}
      routeKey="praktischeWachttijd"
    />
  );
}
