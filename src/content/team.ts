export type TeamMember = {
  name: string;
  role: string;
  image: string;
  backText: string;
  tags?: string[];
};

export const teamMembers = [
  {
    name: "Annemarie de Jager",
    role: "Orthopedagoog-generalist",
    image: "/assets/Annemarie.jpeg",
    backText:
      "Annemarie de Jager is orthopedagoog-generalist en heeft ruime ervaring binnen de geestelijke gezondheidszorg. Zij werkt met kinderen, jongeren en ouders en is betrokken bij diagnostiek en behandeling.\n\nDaarnaast is Annemarie EMDR-therapeut, Writejunior-therapeut en ACT4Life-therapeut. Vanuit haar achtergrond kan zij worden ingezet bij vragen rondom ontwikkeling, gedrag, emoties, trauma en psychodiagnostisch onderzoek.",
  },
  // Voeg toekomstige behandelaren hier toe wanneer naam, rol, afbeelding en introductietekst definitief zijn.
] satisfies TeamMember[];
