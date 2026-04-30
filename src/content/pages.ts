import { placeholders } from "./placeholders";

export type InfoPageContent = {
  title: string;
  summary: string;
  status: "placeholder" | "draft" | "ready";
};

export type PagesContent = {
  practical: InfoPageContent;
  privacy: InfoPageContent;
};

// Placeholderteksten voor toekomstige informatiepagina's.
export const pages = {
  practical: {
    title: "Praktische informatie",
    summary: `${placeholders.WAITLIST_INFO.uiText}. ${placeholders.TARIFFS_INFO.uiText}.`,
    status: "placeholder",
  },
  privacy: {
    title: "Privacy",
    summary: placeholders.PRIVACY_INFO.uiText,
    status: "placeholder",
  },
} satisfies PagesContent;
