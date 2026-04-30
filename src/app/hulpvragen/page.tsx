import type { Metadata } from "next";
import { StructuredContentPage } from "@/components/pages/StructuredContentPage";
import { pages } from "@/content/pages";

const page = pages.hulpvragen;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function HulpvragenPage() {
  return <StructuredContentPage aside={page.aside} page={page} />;
}
