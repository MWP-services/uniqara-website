import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.ouderbegeleiding;

export default function OuderbegeleidingPage() {
  return <ContentRoutePage routeKey="ouderbegeleiding" />;
}
