export type TeamMember = {
  name: string;
  role: string;
  summary: string;
  backText: string;
  image?: string;
  imageAlt?: string;
  linkedinUrl?: string;
  initials?: string;
  tags?: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Annemarie van den Heuvel",
    role: "Speltherapeut",
    summary:
      "Annemarie biedt speltherapie aan kinderen en jongeren en betrekt ouders waar dat helpend is voor de ontwikkeling thuis en op school.",
    image: "/assets/Annemarie.jpg",
    imageAlt: "Portretfoto van Annemarie van den Heuvel.",
    linkedinUrl:
      "https://www.linkedin.com/in/annemarie-van-den-heuvel-9626731a6/?skipRedirect=true",
    backText:
      "Annemarie van den Heuvel is speltherapeut en sluit in haar werk aan bij de belevingswereld van kinderen en jongeren. Spel geeft ruimte om ervaringen, gevoelens en gedrag op een veilige manier zichtbaar te maken, ook wanneer woorden nog lastig zijn.\n\nIn de behandeling kijkt Annemarie zorgvuldig naar wat een kind nodig heeft en hoe ouders of verzorgers daarbij kunnen aansluiten. Haar werkwijze is rustig, betrokken en gericht op vertrouwen, ontwikkeling en veerkracht. Meer informatie over haar professionele achtergrond is te vinden via haar LinkedIn-profiel.",
    tags: ["Speltherapie", "Kind en jeugd", "Ouderbetrokkenheid"],
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
