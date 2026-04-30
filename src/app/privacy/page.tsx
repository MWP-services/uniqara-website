import type { Metadata } from "next";
import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages } from "@/content/pages";

const page = pages.privacy;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function PrivacyPage() {
  return <StructuredContentPage aside={page.aside} page={page} />;
}
