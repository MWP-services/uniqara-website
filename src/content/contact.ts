export type ContactContent = {
  heading: string;
  intro: string;
  email: string;
  phone: string;
  address: {
    name: string;
    street: string;
    postalCodeCity: string;
    country: string;
  };
  locationDescription: string;
  routeNote: string;
  cta: {
    label: string;
    href: string;
  };
};

// Vervang deze placeholders zodra de definitieve praktijkgegevens bekend zijn.
export const contact = {
  heading: "Contact",
  intro:
    "Contactgegevens, adres en aanmeldinformatie worden later ingevuld. Gebruik voorlopig deze nette placeholders.",
  email: "info@uniqara.nl",
  phone: "Telefoonnummer volgt",
  address: {
    name: "Uniqara - De Hooiberg",
    street: "Adres volgt",
    postalCodeCity: "Postcode en plaats volgen",
    country: "Nederland",
  },
  locationDescription:
    "Een rustige praktijklocatie in een landelijke omgeving, met groen, ruimte en een veilige sfeer.",
  routeNote:
    "Praktische informatie over route, parkeren en aankomst wordt later toegevoegd.",
  cta: {
    label: "Mail Uniqara",
    href: "mailto:info@uniqara.nl",
  },
} satisfies ContactContent;
