import { placeholders } from "./placeholders";

export type SiteMetadata = {
  name: string;
  tagline: string;
  description: string;
  defaultTitle: string;
  titleTemplate: string;
};

export type BrandContent = {
  name: string;
  shortDescription: string;
  footerShortTagline: string;
  values: string[];
};

export type SharedUiContent = {
  pageCtaEyebrow: string;
  pageCtaTitle: string;
  pageCtaIntro: string;
};

// Pas hier de algemene merknaam, SEO-beschrijving en korte praktijkintro aan.
export const site = {
  name: "Uniqara",
  tagline: "Psychologiepraktijk in een groene omgeving",
  description:
    "Uniqara is een warme en professionele psychologiepraktijk met aandacht voor kinderen, jongeren, ouders en gezinnen.",
  defaultTitle: "Uniqara | Psychologiepraktijk",
  titleTemplate: "%s | Uniqara",
} satisfies SiteMetadata;

export const brand = {
  name: "Uniqara",
  shortDescription:
    "Een professionele praktijkplek voor zorg, onderzoek en behandeling, met aandacht voor veiligheid, vertrouwen en groei.",
  footerShortTagline: placeholders.FOOTER_SHORT_TAGLINE.uiText,
  values: ["Aandacht", "Vertrouwen", "Veiligheid", "Groei", "Professionaliteit"],
} satisfies BrandContent;

export const sharedUi = {
  pageCtaEyebrow: "Vervolgstap",
  pageCtaTitle: "Verder kijken",
  pageCtaIntro:
    "Kies de route die nu past. Je kunt stap voor stap verkennen wat aansluit.",
} satisfies SharedUiContent;
