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
    role: "Speltherapeut MA",
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
    name: "Durga van Velzen",
    role: "Beeldend therapeut AG",
    summary:
      "Durga helpt kinderen vanaf 6 jaar, jongeren en volwassenen om met creatieve materialen te werken aan meer balans en veerkracht.",
    initials: "DV",
    backText:
      `Durga van Velzen is beeldend therapeut AG (Antroposofisch Geïnspireerd) en sluit met haar creatieve materialen aan op de behoeften en belevingswereld van kinderen, jongeren en volwassenen. In de therapie gaat zij samen met jou opzoek naar wat er nodig is om meer balans en veerkracht te ervaren. Haar werkwijze is persoonlijk en laagdrempelig, en een rustige, sensitieve en warme benadering kenmerken Durga als therapeut.

Beeldende therapie is een non-verbale en ervaringsgerichte vorm van therapie, het gaat hierbij om het proces en niet om het perfecte kunstwerk. Beeldende therapie is geschikt voor mensen die het lastig vinden om woorden te geven aan gevoelens, emoties en/of ervaringen, en daarnaast ook voor mensen die zich juist verbaal makkelijk kunnen uiten en het lastig vinden om stil te staan bij wat zij ervaren.

Binnen de therapie wordt de hulpvraag holistisch bekeken. Er is aandacht voor de mens als geheel en voor wat er op verschillende gebieden speelt. De beeldende werkvormen bieden hierbij ruimte om op een andere manier stil te staan bij wat je bezighoudt en om nieuwe ervaringen op te doen.

Er zijn binnen de beeldende therapie veel verschillende mogelijkheden en materialen om mee te werken. Denk bijvoorbeeld aan tekenen, schilderen, boetseren en andere creatieve werkvormen. De keuze voor materiaal en werkvorm wordt afgestemd op de hulpvraag, de persoon en op wat er op dat moment passend is.

Een beeldend therapie traject duurt gemiddeld 15 sessies. Deze vinden wekelijks plaats in een speciaal ingerichte ruimte waar een veilige sfeer voorop staat. In het begin van de therapie zal de therapeut werken aan een vertrouwensrelatie met jou en/of het kind, dit kan een aantal weken duren. Tijdens het traject wordt er regelmatig samen geëvalueerd. De ene keer is dit kort aan het einde van een therapiesessie en de andere keer in een apart (ouder)gesprek. In tussentijdse evaluatiegesprekken wordt gekeken hoe de therapie verloopt, welke ontwikkelingen er zijn en of we (nog) op de goede weg zitten. Wanneer nodig kan het behandelplan worden aangepast, zodat de therapie blijft aansluiten bij de behoeften en ontwikkeling van jou en/of het kind.

**Kwalificaties**

- Aangesloten bij Vaktherapie Nederland
- Lid van de NVBT (Nederlandse Vereniging Beeldende Therapie)
- Ingeschreven bij het kwaliteitsregister Vaktherapie

**Doelgroepen**

- Kinderen (vanaf 6 jaar)
- Jongeren
- Volwassenen

**Speciale aandachtsgebieden**

- Hoogsensitiviteit
- Rouw en verlies
- Angsten
- Emotieregulatie
- Negatief zelfbeeld
- Assertiviteit
- Trauma
- Hechtingsproblematiek

**Achtergrond**

- Bachelor Beeldende Therapie AG (Antroposofisch Geïnspireerd)
- Minor Beroepsmatig omgaan met Rouw en Verlies situaties
- Eigenaar van Praktijk Durga

**Werkdagen**

Durga werkt op maandag, woensdag en donderdag voor Uniqara.`,
    tags: ["Beeldende therapie", "Vanaf 6 jaar en volwassenen", "Balans en veerkracht"],
  },
];
