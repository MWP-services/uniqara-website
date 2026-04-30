export type PlaceholderKey =
  | "LOGO_PRIMARY"
  | "LOGO_FOOTER"
  | "HERO_IMAGE_HOOIBERG"
  | "CONTACT_EMAIL"
  | "CONTACT_PHONE"
  | "LOCATION_ADDRESS"
  | "OWNER_NAME"
  | "TARIFFS_INFO"
  | "WAITLIST_INFO"
  | "PRIVACY_INFO"
  | "FAQ_CONTENT"
  | "ROUTE_PARKING_INFO"
  | "PRACTICE_PHOTOS";

export type PlaceholderRecord = {
  key: PlaceholderKey;
  uiText: string;
  description: string;
  replaceWith: string;
};

// Centraal beheer van ontbrekende input. Gebruik deze waarden in contentbestanden
// wanneer definitieve informatie nog niet is aangeleverd.
export const placeholders = {
  LOGO_PRIMARY: {
    key: "LOGO_PRIMARY",
    uiText: "LOGO PLACEHOLDER - UNIQARA",
    description: "Primair logo in de header.",
    replaceWith: "Definitief Uniqara-logo voor headergebruik.",
  },
  LOGO_FOOTER: {
    key: "LOGO_FOOTER",
    uiText: "LOGO PLACEHOLDER - UNIQARA",
    description: "Logo in de footer.",
    replaceWith: "Definitief Uniqara-logo voor footergebruik.",
  },
  HERO_IMAGE_HOOIBERG: {
    key: "HERO_IMAGE_HOOIBERG",
    uiText: "HERO_IMAGE_HOOIBERG - beeld van De Hooiberg volgt",
    description: "Hero- of sfeerbeeld van De Hooiberg en groene omgeving.",
    replaceWith: "Echte foto of zorgvuldig gekozen beeld van locatie/natuur.",
  },
  CONTACT_EMAIL: {
    key: "CONTACT_EMAIL",
    uiText: "CONTACT_EMAIL - e-mailadres volgt",
    description: "Publiek contactmailadres van de praktijk.",
    replaceWith: "Definitief e-mailadres.",
  },
  CONTACT_PHONE: {
    key: "CONTACT_PHONE",
    uiText: "CONTACT_PHONE - telefoonnummer volgt",
    description: "Publiek telefoonnummer van de praktijk.",
    replaceWith: "Definitief telefoonnummer of keuze om geen telefoon te tonen.",
  },
  LOCATION_ADDRESS: {
    key: "LOCATION_ADDRESS",
    uiText: "LOCATION_ADDRESS - adres volgt",
    description: "Adresgegevens van de praktijklocatie.",
    replaceWith: "Straat, huisnummer, postcode en plaats.",
  },
  OWNER_NAME: {
    key: "OWNER_NAME",
    uiText: "OWNER_NAME - praktijkhouder volgt",
    description: "Naam van praktijkhouder of behandelaren.",
    replaceWith: "Definitieve naam/namen en eventuele titels.",
  },
  TARIFFS_INFO: {
    key: "TARIFFS_INFO",
    uiText: "TARIFFS_INFO - tarieven en vergoedingen volgen",
    description: "Praktische informatie over tarieven en vergoedingen.",
    replaceWith: "Definitieve tariefinformatie en vergoedingsuitleg.",
  },
  WAITLIST_INFO: {
    key: "WAITLIST_INFO",
    uiText: "WAITLIST_INFO - wachttijdinformatie volgt",
    description: "Actuele wachttijd of aanmeldstatus.",
    replaceWith: "Definitieve wachttijdinformatie.",
  },
  PRIVACY_INFO: {
    key: "PRIVACY_INFO",
    uiText: "PRIVACY_INFO - privacytekst volgt",
    description: "Privacy, dossier en omgang met persoonsgegevens.",
    replaceWith: "Definitieve privacyverklaring of samenvatting.",
  },
  FAQ_CONTENT: {
    key: "FAQ_CONTENT",
    uiText: "FAQ_CONTENT - definitieve antwoorden volgen",
    description: "Veelgestelde vragen en antwoorden.",
    replaceWith: "Definitieve FAQ op basis van praktijkwerkwijze.",
  },
  ROUTE_PARKING_INFO: {
    key: "ROUTE_PARKING_INFO",
    uiText: "ROUTE_PARKING_INFO - route en parkeren volgen",
    description: "Routebeschrijving, parkeren en aankomstinformatie.",
    replaceWith: "Definitieve praktische locatie-informatie.",
  },
  PRACTICE_PHOTOS: {
    key: "PRACTICE_PHOTOS",
    uiText: "PRACTICE_PHOTOS - praktijkfoto's volgen",
    description: "Foto's van praktijkruimte, erf, natuur en omgeving.",
    replaceWith: "Definitieve fotografie voor websitegebruik.",
  },
} satisfies Record<PlaceholderKey, PlaceholderRecord>;
