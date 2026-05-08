export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = {
  heading: string;
  intro: string;
  items: FaqItem[];
};

export const faq = {
  heading: "Veelgestelde vragen",
  intro:
    "Korte antwoorden helpen bezoekers snel begrijpen wat zij kunnen verwachten.",
  items: [
    {
      question: "Voor wie is Uniqara bedoeld?",
      answer:
        "Uniqara richt zich op kind en jeugd, volwassenen en relatievragen.",
    },
    {
      question: "Hoe kan ik mij aanmelden?",
      answer:
        "Aanmelden kan via het formulier op de contactpagina. Vul woonplaats, hulpvraag, telefoonnummer en e-mailadres in.",
    },
    {
      question: "Waar vindt de begeleiding plaats?",
      answer:
        "Uniqara is gevestigd bij De Hooiberg. De volledige adresgegevens, routebeschrijving en parkeerinformatie worden nog aangevuld.",
    },
  ],
} satisfies FaqContent;
