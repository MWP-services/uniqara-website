export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = {
  heading: string;
  intro: string;
  items: FaqItem[];
};

// Vervang deze FAQ's later door definitieve antwoorden op veelgestelde vragen.
export const faq = {
  heading: "Veelgestelde vragen",
  intro:
    "Korte antwoorden helpen bezoekers snel begrijpen wat zij kunnen verwachten.",
  items: [
    {
      question: "Voor wie is Uniqara bedoeld?",
      answer:
        "Uniqara richt zich op kinderen, jongeren, ouders en gezinnen. De exacte doelgroep wordt later verder ingevuld.",
    },
    {
      question: "Hoe kan ik mij aanmelden?",
      answer:
        "De definitieve aanmeldroute volgt nog. Voor nu verwijst de website naar contact per e-mail.",
    },
    {
      question: "Waar vindt de begeleiding plaats?",
      answer:
        "De praktijk krijgt een plek bij De Hooiberg, in een rustige en groene omgeving.",
    },
  ],
} satisfies FaqContent;
