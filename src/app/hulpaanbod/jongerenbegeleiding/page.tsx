import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.jongerenbegeleiding;

export default function JongerenbegeleidingPage() {
  return <ContentRoutePage routeKey="jongerenbegeleiding" />;
}
