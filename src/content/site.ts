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
  values: string[];
};

// Pas hier de algemene merknaam, SEO-beschrijving en korte praktijkintro aan.
export const site = {
  name: "Uniqara",
  tagline: "Psychologiepraktijk in een rustige, groene omgeving",
  description:
    "Uniqara is een warme en professionele psychologiepraktijk met aandacht voor kinderen, jongeren, ouders en gezinnen.",
  defaultTitle: "Uniqara | Psychologiepraktijk",
  titleTemplate: "%s | Uniqara",
} satisfies SiteMetadata;

export const brand = {
  name: "Uniqara",
  shortDescription:
    "Een rustige praktijkplek voor begeleiding, onderzoek en behandeling, met aandacht voor veiligheid, vertrouwen en groei.",
  values: ["Rust", "Vertrouwen", "Aandacht", "Natuur", "Professionaliteit"],
} satisfies BrandContent;
