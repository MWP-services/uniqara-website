import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/content/pages";

const page = pages.voorWie;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function VoorWiePage() {
  return <ContentPage page={page} />;
}
