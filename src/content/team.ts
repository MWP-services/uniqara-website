export type TeamMember = {
  name: string;
  role: string;
  summary: string;
  backText: string;
  image?: string;
  imageAlt?: string;
  initials?: string;
  tags?: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Annemarie de Jager",
    role: "Orthopedagoog-generalist en speltherapeut",
    summary:
      "Annemarie werkt met kinderen, jongeren en ouders en is betrokken bij diagnostiek, behandeling en speltherapie.",
    image: "/assets/Annemarie.jpeg",
    imageAlt: "Portretfoto van Annemarie de Jager.",
    backText:
      "Annemarie de Jager is orthopedagoog-generalist en heeft ruime ervaring binnen de geestelijke gezondheidszorg. Zij werkt met kinderen, jongeren en ouders en kan worden ingezet bij vragen rondom ontwikkeling, gedrag, emoties, trauma en psychodiagnostisch onderzoek.\n\nDaarnaast is Annemarie speltherapeut, EMDR-therapeut, Writejunior-therapeut en ACT4Life-therapeut. Vanuit haar achtergrond kijkt zij zorgvuldig naar wat een kind, jongere of gezin nodig heeft.",
    tags: ["Speltherapie", "EMDR", "Diagnostiek"],
  },
  {
    name: "Behandelaar volgt",
    role: "Psycholoog / pedagoog",
    summary:
      "Binnenkort wordt hier meer informatie toegevoegd over een behandelaar binnen Uniqara.",
    backText:
      "Hier komt binnenkort meer informatie over de achtergrond, expertise en werkwijze van deze behandelaar. De kaart is alvast ingericht zodat de pagina visueel in balans blijft en later eenvoudig kan worden aangevuld.",
    initials: "U",
    tags: ["Basis GGZ", "Jeugdhulp", "Onderzoek"],
  },
];
