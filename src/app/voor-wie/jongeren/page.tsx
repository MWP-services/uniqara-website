import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.voorWieJongeren;

export default function JongerenPage() {
  return <ContentRoutePage routeKey="voorWieJongeren" />;
}
