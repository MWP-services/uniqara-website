export type TeamMember = {
  name: string;
  role: string;
  summary: string;
  backText: string;
  image?: string;
  imageAlt?: string;
  linkedinUrl?: string;
  initials?: string;
  badge?: string;
  tags?: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Elise",
    role: "Praktijkhouder en psycholoog",
    summary:
      "Elise is praktijkhouder en biedt warme, doelgerichte psychologische hulp voor relaties, trauma, angst en stressklachten.",
    image: "/assets/Elise.jpg",
    imageAlt: "Portretfoto van Elise, praktijkhouder en psycholoog bij Uniqara.",
    badge: "Praktijkhouder",
    backText:
      "Elise is een warme en betrokken psycholoog die cliënten helpt hun kracht te hervinden met een korte, doelgerichte en hoopgevende aanpak. Ze biedt een veilige, oordeelvrije ruimte om pijnpunten en patronen te onderzoeken en samen nieuwe perspectieven te ontdekken.\n\nElise is NIP-psycholoog en werkt met bewezen methoden zoals EFT (relatietherapie), EMDR en ACT, met ruime ervaring binnen de GGZ. Zij richt zich op (partner)relaties, trauma, angst en stressklachten en werkt op dinsdag en donderdag.",
    tags: ["Praktijkhouder", "NIP-psycholoog", "EFT, EMDR en ACT"],
  },
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
];
