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
    summary:
      "Hier komen later aanmelding, wachttijd, tarieven, vergoedingen, verwijzing en bereikbaarheid.",
    status: "placeholder",
  },
  privacy: {
    title: "Privacy",
    summary:
      "Hier komt later een heldere uitleg over privacy, dossiervoering en zorgvuldig omgaan met gegevens.",
    status: "placeholder",
  },
} satisfies PagesContent;
