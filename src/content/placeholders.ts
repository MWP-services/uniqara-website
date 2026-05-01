export type PlaceholderKey =
  | "LOGO_PRIMARY"
  | "LOGO_FOOTER"
  | "HERO_IMAGE_HOOIBERG"
  | "HERO_IMAGE_NATURE"
  | "HERO_IMAGE_PRACTICE"
  | "CONTACT_EMAIL"
  | "CONTACT_PHONE"
  | "CONTACT_FORM_HANDLER"
  | "LOCATION_ADDRESS"
  | "OWNER_NAME"
  | "TARIFFS_INFO"
  | "REIMBURSEMENT_INFO"
  | "WAITLIST_INFO"
  | "PRIVACY_INFO"
  | "PRIVACY_LEGAL_TEXT"
  | "PRIVACY_DATA_CATEGORIES"
  | "PRIVACY_RIGHTS_INFO"
  | "FAQ_CONTENT"
  | "ROUTE_PARKING_INFO"
  | "LOCATION_MAP_PLACEHOLDER"
  | "PRACTICE_PHOTOS"
  | "REGISTRATION_PROCESS"
  | "REFERRER_SCHOOL_INFO"
  | "OPENING_HOURS"
  | "CONTACT_ROUTE_INFO"
  | "PRIVACY_DOSSIER_INFO"
  | "PRIVACY_CONTACT_ROUTE"
  | "COPYRIGHT_INFO";

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
    uiText: "LOGO PLACEHOLDER – UNIQARA",
    description: "Primair logo in de header.",
    replaceWith: "Definitief Uniqara-logo voor headergebruik.",
  },
  LOGO_FOOTER: {
    key: "LOGO_FOOTER",
    uiText: "LOGO PLACEHOLDER – UNIQARA",
    description: "Logo in de footer.",
    replaceWith: "Definitief Uniqara-logo voor footergebruik.",
  },
  HERO_IMAGE_HOOIBERG: {
    key: "HERO_IMAGE_HOOIBERG",
    uiText: "[HERO_IMAGE_HOOIBERG] Foto van De Hooiberg, natuur of praktijk volgt",
    description: "Hero- of sfeerbeeld van De Hooiberg en groene omgeving.",
    replaceWith: "Echte foto of zorgvuldig gekozen beeld van locatie/natuur.",
  },
  HERO_IMAGE_NATURE: {
    key: "HERO_IMAGE_NATURE",
    uiText: "[HERO_IMAGE_NATURE] Foto van groen en natuur volgt",
    description: "Ondersteunend sfeerbeeld van groen, rust en natuur.",
    replaceWith: "Definitieve natuurfoto voor de homepage-hero.",
  },
  HERO_IMAGE_PRACTICE: {
    key: "HERO_IMAGE_PRACTICE",
    uiText: "[HERO_IMAGE_PRACTICE] Foto van praktijk of landelijke sfeer volgt",
    description: "Ondersteunend sfeerbeeld van praktijkruimte of landelijke omgeving.",
    replaceWith: "Definitieve praktijk- of sfeerfoto voor de homepage-hero.",
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
  CONTACT_FORM_HANDLER: {
    key: "CONTACT_FORM_HANDLER",
    uiText: "[CONTACT_FORM_HANDLER] Formulierverzending wordt later gekoppeld",
    description: "Technische afhandeling van het contactformulier.",
    replaceWith: "Definitieve formulierbackend, mailservice of CRM-koppeling.",
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
  REIMBURSEMENT_INFO: {
    key: "REIMBURSEMENT_INFO",
    uiText: "REIMBURSEMENT_INFO - vergoedingsinformatie volgt",
    description: "Uitleg over eventuele vergoedingen, verwijzing en betaalroute.",
    replaceWith: "Definitieve informatie over vergoeding, verwijzing en betaling.",
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
  PRIVACY_LEGAL_TEXT: {
    key: "PRIVACY_LEGAL_TEXT",
    uiText: "PRIVACY_LEGAL_TEXT - juridische privacytekst volgt",
    description: "Juridisch gecontroleerde privacyverklaring voor de praktijk.",
    replaceWith: "Definitieve juridisch gecontroleerde privacytekst.",
  },
  PRIVACY_DATA_CATEGORIES: {
    key: "PRIVACY_DATA_CATEGORIES",
    uiText: "PRIVACY_DATA_CATEGORIES - overzicht persoonsgegevens volgt",
    description: "Overzicht van gegevens die mogelijk worden verwerkt.",
    replaceWith: "Definitieve lijst met gegevenscategorieen en verwerkingsdoelen.",
  },
  PRIVACY_RIGHTS_INFO: {
    key: "PRIVACY_RIGHTS_INFO",
    uiText: "PRIVACY_RIGHTS_INFO - rechten en verwijzingen volgen",
    description: "Uitleg over privacyrechten, inzage, correctie en klachtenroute.",
    replaceWith: "Definitieve rechteninformatie en eventuele externe verwijzingen.",
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
  LOCATION_MAP_PLACEHOLDER: {
    key: "LOCATION_MAP_PLACEHOLDER",
    uiText: "[LOCATION_MAP_PLACEHOLDER] Kaart of routeblok volgt",
    description: "Placeholder voor kaartweergave, routeblok of locatiekaart.",
    replaceWith: "Definitieve kaart, routevisual of externe route-integratie.",
  },
  PRACTICE_PHOTOS: {
    key: "PRACTICE_PHOTOS",
    uiText: "[PRACTICE_PHOTOS] Praktijkfoto's volgen",
    description: "Foto's van praktijkruimte, erf, natuur en omgeving.",
    replaceWith: "Definitieve fotografie voor websitegebruik.",
  },
  REGISTRATION_PROCESS: {
    key: "REGISTRATION_PROCESS",
    uiText: "REGISTRATION_PROCESS - aanmeldproces volgt",
    description: "Uitleg over aanmelden, eerste contact en vervolg.",
    replaceWith: "Definitieve aanmeldroute en processtappen.",
  },
  REFERRER_SCHOOL_INFO: {
    key: "REFERRER_SCHOOL_INFO",
    uiText: "REFERRER_SCHOOL_INFO - afspraken voor scholen en verwijzers volgen",
    description: "Informatie voor scholen, huisartsen en andere verwijzers.",
    replaceWith: "Definitieve afspraken voor afstemming en verwijzing.",
  },
  OPENING_HOURS: {
    key: "OPENING_HOURS",
    uiText: "OPENING_HOURS - openingstijden volgen",
    description: "Bereikbaarheid en openingstijden van de praktijk.",
    replaceWith: "Definitieve openingstijden of bereikbaarheid per dag.",
  },
  CONTACT_ROUTE_INFO: {
    key: "CONTACT_ROUTE_INFO",
    uiText: "CONTACT_ROUTE_INFO - contactroute volgt",
    description: "Uitleg over de beste manier om contact op te nemen.",
    replaceWith: "Definitieve contactroute, bijvoorbeeld mail, formulier of telefoon.",
  },
  PRIVACY_DOSSIER_INFO: {
    key: "PRIVACY_DOSSIER_INFO",
    uiText: "PRIVACY_DOSSIER_INFO - uitleg over dossier en gegevens volgt",
    description: "Uitleg over dossiervoering, bewaartermijnen en rechten.",
    replaceWith: "Definitieve privacy- en dossierinformatie.",
  },
  PRIVACY_CONTACT_ROUTE: {
    key: "PRIVACY_CONTACT_ROUTE",
    uiText: "PRIVACY_CONTACT_ROUTE - contactroute voor privacyvragen volgt",
    description: "Contactmogelijkheid voor vragen over privacy.",
    replaceWith: "Definitieve contactroute voor privacyvragen.",
  },
  COPYRIGHT_INFO: {
    key: "COPYRIGHT_INFO",
    uiText: "COPYRIGHT_INFO - copyrighttekst volgt",
    description: "Copyrightregel en eventuele juridische footerregel.",
    replaceWith: "Definitieve copyrighttekst voor de footer.",
  },
} satisfies Record<PlaceholderKey, PlaceholderRecord>;

// Homepage-v1 gebruikt deze placeholders voor logo, fotografie en praktische gegevens.
export const homepagePlaceholderKeys = [
  "LOGO_PRIMARY",
  "HERO_IMAGE_HOOIBERG",
  "HERO_IMAGE_NATURE",
  "HERO_IMAGE_PRACTICE",
  "PRACTICE_PHOTOS",
  "CONTACT_EMAIL",
  "CONTACT_PHONE",
  "LOCATION_ADDRESS",
  "REGISTRATION_PROCESS",
  "TARIFFS_INFO",
  "WAITLIST_INFO",
] satisfies PlaceholderKey[];
