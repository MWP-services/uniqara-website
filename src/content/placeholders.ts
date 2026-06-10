export type PlaceholderKey =
  | "LOGO_PRIMARY"
  | "LOGO_FOOTER"
  | "FAVICON_PLACEHOLDER"
  | "APP_ICON_PLACEHOLDER"
  | "SOCIAL_PREVIEW_IMAGE"
  | "HERO_IMAGE_HOOIBERG"
  | "HERO_IMAGE_NATURE"
  | "HERO_IMAGE_PRACTICE"
  | "CONTACT_EMAIL"
  | "CONTACT_PHONE"
  | "TELEFOONNUMMER_VOLGT"
  | "HULPAANBOD_BANNER_VARIANT"
  | "FOOTER_SHORT_TAGLINE"
  | "KINDERTHERAPIE_BEHANDELVORMEN"
  | "VERWIJSROUTE_DETAILS"
  | "GOOGLE_MAPS_LINK"
  | "CONTACT_FORM_HANDLER"
  | "LOCATION_ADDRESS"
  | "OWNER_NAME"
  | "SEO_SITE_URL"
  | "SOCIAL_PROFILE_URLS"
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
  | "TEAM_DETAILS"
  | "SERVICE_DETAIL_CONTENT"
  | "TREATMENT_METHOD_CONTENT"
  | "PRACTICAL_DETAIL_CONTENT"
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
  FAVICON_PLACEHOLDER: {
    key: "FAVICON_PLACEHOLDER",
    uiText: "[FAVICON_PLACEHOLDER] Tijdelijk Uniqara favicon",
    description: "Tijdelijk gegenereerd browsericoon voor Uniqara.",
    replaceWith: "Definitief favicon op basis van het echte logo.",
  },
  APP_ICON_PLACEHOLDER: {
    key: "APP_ICON_PLACEHOLDER",
    uiText: "[APP_ICON_PLACEHOLDER] Tijdelijk Uniqara app-icoon",
    description: "Tijdelijk gegenereerd app- en manifest-icoon.",
    replaceWith: "Definitieve app-icon set op basis van het echte logo.",
  },
  SOCIAL_PREVIEW_IMAGE: {
    key: "SOCIAL_PREVIEW_IMAGE",
    uiText: "[SOCIAL_PREVIEW_IMAGE] Tijdelijke social preview voor Uniqara",
    description: "Tijdelijke Open Graph en Twitter preview-afbeelding.",
    replaceWith: "Definitieve social preview image met logo/fotografie.",
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
    uiText: "06* 486 468 40",
    description: "Publiek telefoonnummer van de praktijk.",
    replaceWith: "Aangeleverd; bewust niet als tel-link gebruiken.",
  },
  TELEFOONNUMMER_VOLGT: {
    key: "TELEFOONNUMMER_VOLGT",
    uiText: "06* 486 468 40",
    description: "Historische telefoonplaceholder; nummer is inmiddels aangeleverd.",
    replaceWith: "Aangeleverd; bewust niet als tel-link gebruiken.",
  },
  HULPAANBOD_BANNER_VARIANT: {
    key: "HULPAANBOD_BANNER_VARIANT",
    uiText: "green",
    description: "Visuele kleurvariant voor de Hulpaanbod-banner.",
    replaceWith: "Kies na visuele beoordeling: green, yellow of terra.",
  },
  FOOTER_SHORT_TAGLINE: {
    key: "FOOTER_SHORT_TAGLINE",
    uiText: "Persoonlijk, zorgvuldig en met aandacht.",
    description: "Korte footerregel onder de praktijkintro.",
    replaceWith: "Definitieve korte footerregel in de gewenste praktijktoon.",
  },
  KINDERTHERAPIE_BEHANDELVORMEN: {
    key: "KINDERTHERAPIE_BEHANDELVORMEN",
    uiText: "EMDR, ACT en CGT",
    description: "Voorlopige behandelvormen bij kindertherapie.",
    replaceWith: "Definitieve lijst met behandelvormen of aanvullende uitleg.",
  },
  VERWIJSROUTE_DETAILS: {
    key: "VERWIJSROUTE_DETAILS",
    uiText: "Basisroute toevoegen, details later verfijnen",
    description: "Nog te verfijnen details rond verwijzen en afstemming.",
    replaceWith: "Definitieve verwijsroute, voorwaarden, aanleverwijze en terugkoppeling.",
  },
  GOOGLE_MAPS_LINK: {
    key: "GOOGLE_MAPS_LINK",
    uiText:
      "https://www.google.com/maps/search/?api=1&query=Kerkweg%20139a%2C%202935%20AC%20Ouderkerk%20aan%20den%20IJssel",
    description: "Google Maps-link naar de praktijklocatie.",
    replaceWith: "Definitief gecontroleerde Google Maps-link.",
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
  SEO_SITE_URL: {
    key: "SEO_SITE_URL",
    uiText: "SEO_SITE_URL - definitief websitedomein volgt",
    description: "Definitieve publieke URL voor metadata, canonical links en share-data.",
    replaceWith: "Definitieve productie-URL, bijvoorbeeld het Vercel- of eigen domein.",
  },
  SOCIAL_PROFILE_URLS: {
    key: "SOCIAL_PROFILE_URLS",
    uiText: "SOCIAL_PROFILE_URLS - eventuele social/profiel-links volgen",
    description:
      "Eventuele publieke profielpagina's voor structured data en online herkenbaarheid.",
    replaceWith:
      "Definitieve URLs naar toegestane publieke profielen, of leeg laten als die er niet zijn.",
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
  TEAM_DETAILS: {
    key: "TEAM_DETAILS",
    uiText: "TEAM_DETAILS - aanvullende teaminformatie volgt",
    description: "Aanvullende informatie over behandelaren, registraties en specialisaties.",
    replaceWith: "Definitieve teamtekst met functies, registraties en specialisaties.",
  },
  SERVICE_DETAIL_CONTENT: {
    key: "SERVICE_DETAIL_CONTENT",
    uiText: "SERVICE_DETAIL_CONTENT - definitieve aanbodtekst volgt",
    description: "Definitieve inhoud per hulpaanbodpagina.",
    replaceWith: "Definitieve uitleg per hulpvorm, doelgroep en werkwijze.",
  },
  TREATMENT_METHOD_CONTENT: {
    key: "TREATMENT_METHOD_CONTENT",
    uiText: "TREATMENT_METHOD_CONTENT - definitieve behandelvormtekst volgt",
    description: "Definitieve praktijkteksten voor EMDR, ACT en CGT.",
    replaceWith: "Definitieve uitleg per behandelvorm, toepassing en werkwijze.",
  },
  PRACTICAL_DETAIL_CONTENT: {
    key: "PRACTICAL_DETAIL_CONTENT",
    uiText: "PRACTICAL_DETAIL_CONTENT - praktische details volgen",
    description: "Ontbrekende praktische details per subpagina.",
    replaceWith: "Definitieve praktische informatie per onderwerp.",
  },
  COPYRIGHT_INFO: {
    key: "COPYRIGHT_INFO",
    uiText: "© Uniqara. Alle rechten voorbehouden.",
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
  "TELEFOONNUMMER_VOLGT",
  "GOOGLE_MAPS_LINK",
  "LOCATION_ADDRESS",
  "REGISTRATION_PROCESS",
  "TARIFFS_INFO",
  "WAITLIST_INFO",
] satisfies PlaceholderKey[];

// Sprint 6D launch-content check: deze placeholders hebben de meeste invloed op
// vertrouwen, vindbaarheid en livegangkwaliteit.
export const launchContentPlaceholderKeys = [
  "CONTACT_EMAIL",
  "CONTACT_PHONE",
  "TELEFOONNUMMER_VOLGT",
  "GOOGLE_MAPS_LINK",
  "HULPAANBOD_BANNER_VARIANT",
  "FOOTER_SHORT_TAGLINE",
  "KINDERTHERAPIE_BEHANDELVORMEN",
  "VERWIJSROUTE_DETAILS",
  "LOCATION_ADDRESS",
  "OPENING_HOURS",
  "OWNER_NAME",
  "SEO_SITE_URL",
  "SOCIAL_PROFILE_URLS",
  "REGISTRATION_PROCESS",
  "TARIFFS_INFO",
  "REIMBURSEMENT_INFO",
  "WAITLIST_INFO",
  "PRIVACY_LEGAL_TEXT",
  "PRIVACY_DATA_CATEGORIES",
  "PRIVACY_RIGHTS_INFO",
] satisfies PlaceholderKey[];

// Sprint 7C finale QA: deze lijst bundelt de placeholders die voor een
// productie-v1 het meest zichtbaar of kritisch zijn.
export const finalQaPlaceholderKeys = [
  "LOGO_PRIMARY",
  "LOGO_FOOTER",
  "FAVICON_PLACEHOLDER",
  "APP_ICON_PLACEHOLDER",
  "SOCIAL_PREVIEW_IMAGE",
  "SEO_SITE_URL",
  "CONTACT_EMAIL",
  "CONTACT_PHONE",
  "TELEFOONNUMMER_VOLGT",
  "GOOGLE_MAPS_LINK",
  "HULPAANBOD_BANNER_VARIANT",
  "FOOTER_SHORT_TAGLINE",
  "KINDERTHERAPIE_BEHANDELVORMEN",
  "VERWIJSROUTE_DETAILS",
  "LOCATION_ADDRESS",
  "OPENING_HOURS",
  "OWNER_NAME",
  "CONTACT_FORM_HANDLER",
  "REGISTRATION_PROCESS",
  "TARIFFS_INFO",
  "REIMBURSEMENT_INFO",
  "WAITLIST_INFO",
  "PRIVACY_LEGAL_TEXT",
  "PRIVACY_DATA_CATEGORIES",
  "PRIVACY_RIGHTS_INFO",
  "HERO_IMAGE_HOOIBERG",
  "PRACTICE_PHOTOS",
] satisfies PlaceholderKey[];
