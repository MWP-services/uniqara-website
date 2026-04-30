# Placeholder Registry

Centraal overzicht van ontbrekende input. Gebruik dezelfde sleutel in UI, content en TODO's zodat placeholders later makkelijk te vinden en te vervangen zijn.

| Sleutel | Huidige placeholder | Nog aan te leveren | Waar beheerd |
| --- | --- | --- | --- |
| `LOGO_PRIMARY` | `LOGO PLACEHOLDER - UNIQARA` | Definitief logo voor headergebruik | `src/content/placeholders.ts`, `public/placeholders/logo-placeholder.svg` |
| `LOGO_FOOTER` | `LOGO PLACEHOLDER - UNIQARA` | Definitief logo voor footer | `src/content/placeholders.ts`, `public/placeholders/logo-placeholder.svg` |
| `HERO_IMAGE_HOOIBERG` | `HERO_IMAGE_HOOIBERG - beeld van De Hooiberg volgt` | Foto of beeld van De Hooiberg/groene omgeving | `src/content/placeholders.ts`, `src/content/home.ts` |
| `CONTACT_EMAIL` | `CONTACT_EMAIL - e-mailadres volgt` | Publiek contactmailadres | `src/content/placeholders.ts`, `src/content/contact.ts` |
| `CONTACT_PHONE` | `CONTACT_PHONE - telefoonnummer volgt` | Publiek telefoonnummer of keuze om geen telefoon te tonen | `src/content/placeholders.ts`, `src/content/contact.ts` |
| `LOCATION_ADDRESS` | `LOCATION_ADDRESS - adres volgt` | Straat, huisnummer, postcode en plaats | `src/content/placeholders.ts`, `src/content/contact.ts` |
| `OWNER_NAME` | `OWNER_NAME - praktijkhouder volgt` | Naam/namen van praktijkhouder of behandelaren | `src/content/placeholders.ts` |
| `TARIFFS_INFO` | `TARIFFS_INFO - tarieven en vergoedingen volgen` | Tarieven, vergoedingen en betaalinformatie | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `WAITLIST_INFO` | `WAITLIST_INFO - wachttijdinformatie volgt` | Wachttijd of aanmeldstatus | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `PRIVACY_INFO` | `PRIVACY_INFO - privacytekst volgt` | Privacyverklaring of samenvatting | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `FAQ_CONTENT` | `FAQ_CONTENT - definitieve antwoorden volgen` | Definitieve antwoorden op veelgestelde vragen | `src/content/placeholders.ts`, `src/content/faq.ts` |
| `ROUTE_PARKING_INFO` | `ROUTE_PARKING_INFO - route en parkeren volgen` | Routebeschrijving, parkeren en aankomstinformatie | `src/content/placeholders.ts`, `src/content/contact.ts` |
| `PRACTICE_PHOTOS` | `PRACTICE_PHOTOS - praktijkfoto's volgen` | Foto's van praktijkruimte, erf en natuur | `src/content/placeholders.ts`, `src/content/home.ts` |
| `REGISTRATION_PROCESS` | `REGISTRATION_PROCESS - aanmeldproces volgt` | Aanmeldroute, eerste contact en processtappen | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `REFERRER_SCHOOL_INFO` | `REFERRER_SCHOOL_INFO - afspraken voor scholen en verwijzers volgen` | Afspraken voor scholen, huisartsen en andere verwijzers | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `OPENING_HOURS` | `OPENING_HOURS - openingstijden volgen` | Openingstijden en bereikbaarheid | `src/content/placeholders.ts`, `src/content/contact.ts`, `src/content/pages.ts` |
| `CONTACT_ROUTE_INFO` | `CONTACT_ROUTE_INFO - contactroute volgt` | Beste manier om contact op te nemen | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `PRIVACY_DOSSIER_INFO` | `PRIVACY_DOSSIER_INFO - uitleg over dossier en gegevens volgt` | Uitleg over dossier, bewaartermijnen en rechten | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `PRIVACY_CONTACT_ROUTE` | `PRIVACY_CONTACT_ROUTE - contactroute voor privacyvragen volgt` | Contactroute voor privacyvragen | `src/content/placeholders.ts`, `src/content/pages.ts` |

Werkafspraak: voeg bij elke nieuwe ontbrekende input eerst een sleutel toe in `src/content/placeholders.ts`, registreer die hier, en verwijs ernaar in `TODO_USER.md`.
