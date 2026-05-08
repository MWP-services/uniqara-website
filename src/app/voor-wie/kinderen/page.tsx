import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.voorWieKinderen;

export default function KinderenPage() {
  return <ContentRoutePage routeKey="voorWieKinderen" />;
}
