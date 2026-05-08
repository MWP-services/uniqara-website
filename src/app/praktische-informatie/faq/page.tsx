import { ContentRoutePage } from "@/components/pages/ContentRoutePage";
import { pageMetadata } from "@/content/seo";

export const metadata = pageMetadata.praktischeFaq;

export default function FaqPage() {
  return <ContentRoutePage routeKey="praktischeFaq" />;
}
