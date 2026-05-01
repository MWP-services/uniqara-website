# Placeholder Registry

Centraal overzicht van ontbrekende input. Gebruik dezelfde sleutel in UI, content en TODO's zodat placeholders later makkelijk te vinden en te vervangen zijn.

| Sleutel | Huidige placeholder | Nog aan te leveren | Waar beheerd |
| --- | --- | --- | --- |
| `LOGO_PRIMARY` | `LOGO PLACEHOLDER – UNIQARA` | Definitief logo voor headergebruik | `src/content/placeholders.ts`, `public/placeholders/logo-placeholder.svg` |
| `LOGO_FOOTER` | `LOGO PLACEHOLDER – UNIQARA` | Definitief logo voor footer | `src/content/placeholders.ts`, `public/placeholders/logo-placeholder.svg` |
| `FAVICON_PLACEHOLDER` | `[FAVICON_PLACEHOLDER] Tijdelijk Uniqara favicon` | Definitief favicon op basis van het echte logo | `src/content/placeholders.ts`, `src/app/icon.tsx` |
| `APP_ICON_PLACEHOLDER` | `[APP_ICON_PLACEHOLDER] Tijdelijk Uniqara app-icoon` | Definitieve app-icon set voor manifest en devices | `src/content/placeholders.ts`, `src/app/apple-icon.tsx`, `src/app/manifest.ts` |
| `SOCIAL_PREVIEW_IMAGE` | `[SOCIAL_PREVIEW_IMAGE] Tijdelijke social preview voor Uniqara` | Definitieve social preview image met logo/fotografie | `src/content/placeholders.ts`, `src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx` |
| `HERO_IMAGE_HOOIBERG` | `[HERO_IMAGE_HOOIBERG] Foto van De Hooiberg, natuur of praktijk volgt` | Foto of beeld van De Hooiberg/groene omgeving | `src/content/placeholders.ts`, `src/content/home.ts` |
| `HERO_IMAGE_NATURE` | `[HERO_IMAGE_NATURE] Foto van groen en natuur volgt` | Ondersteunende foto van groen, rust en natuur | `src/content/placeholders.ts`, `src/content/home.ts` |
| `HERO_IMAGE_PRACTICE` | `[HERO_IMAGE_PRACTICE] Foto van praktijk of landelijke sfeer volgt` | Foto van praktijkruimte of landelijke sfeer | `src/content/placeholders.ts`, `src/content/home.ts` |
| `CONTACT_EMAIL` | `CONTACT_EMAIL - e-mailadres volgt` | Publiek contactmailadres | `src/content/placeholders.ts`, `src/content/contact.ts` |
| `CONTACT_PHONE` | `CONTACT_PHONE - telefoonnummer volgt` | Publiek telefoonnummer of keuze om geen telefoon te tonen | `src/content/placeholders.ts`, `src/content/contact.ts` |
| `CONTACT_FORM_HANDLER` | `[CONTACT_FORM_HANDLER] Formulierverzending wordt later gekoppeld` | Formulierbackend, mailservice of CRM-koppeling | `src/content/placeholders.ts`, `src/content/contact.ts`, `src/components/forms/ContactFormPlaceholder.tsx` |
| `LOCATION_ADDRESS` | `LOCATION_ADDRESS - adres volgt` | Straat, huisnummer, postcode en plaats | `src/content/placeholders.ts`, `src/content/contact.ts` |
| `OWNER_NAME` | `OWNER_NAME - praktijkhouder volgt` | Naam/namen van praktijkhouder of behandelaren | `src/content/placeholders.ts` |
| `SEO_SITE_URL` | `SEO_SITE_URL - definitief websitedomein volgt` | Definitieve publieke URL voor metadata, canonical links en share-data | `src/content/placeholders.ts`, `src/content/seo.ts` |
| `SOCIAL_PROFILE_URLS` | `SOCIAL_PROFILE_URLS - eventuele social/profiel-links volgen` | Eventuele publieke social/profiel-URLs voor structured data | `src/content/placeholders.ts`, `src/content/structuredData.ts` |
| `TARIFFS_INFO` | `TARIFFS_INFO - tarieven en vergoedingen volgen` | Tarieven, vergoedingen en betaalinformatie | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `REIMBURSEMENT_INFO` | `REIMBURSEMENT_INFO - vergoedingsinformatie volgt` | Vergoedingen, verwijzing en betaalroute | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `WAITLIST_INFO` | `WAITLIST_INFO - wachttijdinformatie volgt` | Wachttijd of aanmeldstatus | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `PRIVACY_INFO` | `PRIVACY_INFO - privacytekst volgt` | Privacyverklaring of samenvatting | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `PRIVACY_LEGAL_TEXT` | `PRIVACY_LEGAL_TEXT - juridische privacytekst volgt` | Juridisch gecontroleerde privacytekst | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `PRIVACY_DATA_CATEGORIES` | `PRIVACY_DATA_CATEGORIES - overzicht persoonsgegevens volgt` | Gegevenscategorieen en verwerkingsdoelen | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `PRIVACY_RIGHTS_INFO` | `PRIVACY_RIGHTS_INFO - rechten en verwijzingen volgen` | Privacyrechten, inzage, correctie en klachtenroute | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `FAQ_CONTENT` | `FAQ_CONTENT - definitieve antwoorden volgen` | Definitieve antwoorden op veelgestelde vragen | `src/content/placeholders.ts`, `src/content/faq.ts` |
| `ROUTE_PARKING_INFO` | `ROUTE_PARKING_INFO - route en parkeren volgen` | Routebeschrijving, parkeren en aankomstinformatie | `src/content/placeholders.ts`, `src/content/contact.ts` |
| `LOCATION_MAP_PLACEHOLDER` | `[LOCATION_MAP_PLACEHOLDER] Kaart of routeblok volgt` | Kaartweergave, routeblok of locatiekaart | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `PRACTICE_PHOTOS` | `[PRACTICE_PHOTOS] Praktijkfoto's volgen` | Foto's van praktijkruimte, erf en natuur | `src/content/placeholders.ts`, `src/content/home.ts` |
| `REGISTRATION_PROCESS` | `REGISTRATION_PROCESS - aanmeldproces volgt` | Aanmeldroute, eerste contact en processtappen | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `REFERRER_SCHOOL_INFO` | `REFERRER_SCHOOL_INFO - afspraken voor scholen en verwijzers volgen` | Afspraken voor scholen, huisartsen en andere verwijzers | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `OPENING_HOURS` | `OPENING_HOURS - openingstijden volgen` | Openingstijden en bereikbaarheid | `src/content/placeholders.ts`, `src/content/contact.ts`, `src/content/pages.ts` |
| `CONTACT_ROUTE_INFO` | `CONTACT_ROUTE_INFO - contactroute volgt` | Beste manier om contact op te nemen | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `PRIVACY_DOSSIER_INFO` | `PRIVACY_DOSSIER_INFO - uitleg over dossier en gegevens volgt` | Uitleg over dossier, bewaartermijnen en rechten | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `PRIVACY_CONTACT_ROUTE` | `PRIVACY_CONTACT_ROUTE - contactroute voor privacyvragen volgt` | Contactroute voor privacyvragen | `src/content/placeholders.ts`, `src/content/pages.ts` |
| `COPYRIGHT_INFO` | `COPYRIGHT_INFO - copyrighttekst volgt` | Copyrightregel en eventuele juridische footerregel | `src/content/placeholders.ts`, `src/components/layout/Footer.tsx` |

Werkafspraak: voeg bij elke nieuwe ontbrekende input eerst een sleutel toe in `src/content/placeholders.ts`, registreer die hier, en verwijs ernaar in `TODO_USER.md`.

Homepage-v1 gebruikt de centrale lijst `homepagePlaceholderKeys` in `src/content/placeholders.ts` als snel overzicht van placeholders die op of via de homepage zichtbaar zijn.

Sprint 4A binnenpagina's gebruiken vooral bestaande placeholders:
`OWNER_NAME`, `PRACTICE_PHOTOS`, `REFERRER_SCHOOL_INFO` en `REGISTRATION_PROCESS`.

Sprint 4B informatiepagina's gebruiken daarnaast:
`REIMBURSEMENT_INFO`, `LOCATION_MAP_PLACEHOLDER`, `LOCATION_ADDRESS`, `ROUTE_PARKING_INFO`, `WAITLIST_INFO`, `TARIFFS_INFO`, `CONTACT_ROUTE_INFO` en `FAQ_CONTENT`.

Sprint 4C contact en privacy gebruiken daarnaast:
`CONTACT_FORM_HANDLER`, `PRIVACY_LEGAL_TEXT`, `PRIVACY_DATA_CATEGORIES` en `PRIVACY_RIGHTS_INFO`.

Sprint 6A metadata gebruikt daarnaast:
`SEO_SITE_URL`. Canonical URLs, `metadataBase` en definitieve share-URL's worden pas gekoppeld zodra dit domein bekend is.

Sprint 6B technische SEO gebruikt daarnaast:
`FAVICON_PLACEHOLDER`, `APP_ICON_PLACEHOLDER` en `SOCIAL_PREVIEW_IMAGE`.
Sitemap en robots gebruiken tijdelijk `https://uniqara.example` via `src/content/seo.ts` totdat `SEO_SITE_URL` definitief is.

Sprint 6C structured data gebruikt daarnaast:
`SOCIAL_PROFILE_URLS`, plus bestaande placeholders voor `SEO_SITE_URL`, `CONTACT_EMAIL`, `CONTACT_PHONE`, `LOCATION_ADDRESS`, `OPENING_HOURS`, `FAVICON_PLACEHOLDER`, `APP_ICON_PLACEHOLDER` en `SOCIAL_PREVIEW_IMAGE`.
De JSON-LD basis staat centraal in `src/content/structuredData.ts` en wordt sitebreed geplaatst via `src/components/seo/StructuredData.tsx`.

Sprint 6D contentpolish heeft geen nieuwe placeholderkeys toegevoegd. De belangrijkste launch-content placeholders staan als `launchContentPlaceholderKeys` in `src/content/placeholders.ts` en worden samengevat in `CONTENT_REVIEW.md`.

## Belangrijkste beheerbestanden

- Algemene sitecopy: `src/content/site.ts`, `src/content/navigation.ts`, `src/content/routes.ts`.
- Metadata en SEO-basis: `src/content/seo.ts`.
- Structured data: `src/content/structuredData.ts`, `src/components/seo/StructuredData.tsx`.
- Launch-content review: `CONTENT_REVIEW.md`.
- Technische SEO-bestanden: `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/manifest.ts`, `src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx`, `src/app/icon.tsx`, `src/app/apple-icon.tsx`.
- Homepagecopy: `src/content/home.ts`.
- Binnenpagina's en CTA's: `src/content/pages.ts`.
- Hulpvragen en aanbod: `src/content/services.ts`.
- Contactgegevens en formulierplaceholder: `src/content/contact.ts`.
- FAQ: `src/content/faq.ts`.
- Alle placeholderwaarden: `src/content/placeholders.ts`.

## Weergave-afspraken

- Sprint 5A heeft de mobiele weergave van logo-, foto-, locatie- en formulierplaceholders aangescherpt.
- Sprint 5D heeft zichtbare foto-, locatie- en formulierplaceholderteksten rustiger gemaakt, met de sleutel nog duidelijk zichtbaar.
- Er zijn geen nieuwe placeholderkeys toegevoegd; alle placeholderteksten blijven centraal beheerd in `src/content/placeholders.ts`.
