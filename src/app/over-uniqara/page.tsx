import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/content/pages";

const page = pages.overUniqara;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function OverUniqaraPage() {
  return <ContentPage page={page} />;
}
