# TODO voor gebruiker

## Prioriteit voor livegang

1. Lever het definitieve Uniqara-logo aan voor `LOGO_PRIMARY` en `LOGO_FOOTER`.
2. Lever praktijkgegevens aan voor `CONTACT_EMAIL`, `CONTACT_PHONE`, `LOCATION_ADDRESS`, `OPENING_HOURS`, `OWNER_NAME`, KvK/AGB indien van toepassing en gewenste contactroute.
3. Vul het definitieve websitedomein aan voor `SEO_SITE_URL`, zodat later canonical URLs, metadataBase, structured data en share-URL's gekoppeld kunnen worden.
4. Geef aan of er publieke social/profiel-links gebruikt mogen worden voor `SOCIAL_PROFILE_URLS`, of laat dit bewust leeg.
5. Vervang de tijdelijke branding-assets voor `FAVICON_PLACEHOLDER`, `APP_ICON_PLACEHOLDER` en `SOCIAL_PREVIEW_IMAGE` zodra het echte logo en eventuele fotografie beschikbaar zijn.
6. Kies en koppel later de echte formulierafhandeling voor `CONTACT_FORM_HANDLER` voordat het contactformulier live gebruikt wordt.
7. Vul de aanmeldroute, wachttijd, tarieven en vergoedingen aan voor `REGISTRATION_PROCESS`, `WAITLIST_INFO`, `TARIFFS_INFO` en `REIMBURSEMENT_INFO`.
8. Laat de privacy-inhoud juridisch controleren en vul aan voor `PRIVACY_INFO`, `PRIVACY_LEGAL_TEXT`, `PRIVACY_DATA_CATEGORIES`, `PRIVACY_DOSSIER_INFO`, `PRIVACY_RIGHTS_INFO`, `PRIVACY_CONTACT_ROUTE` en eventuele praktijkgegevens.
9. Lever echte foto's aan voor `HERO_IMAGE_HOOIBERG`, `HERO_IMAGE_NATURE`, `HERO_IMAGE_PRACTICE` en `PRACTICE_PHOTOS`.
10. Lever aan of er een kaart, routeblok of externe route-integratie gewenst is voor `LOCATION_MAP_PLACEHOLDER`.
11. Vul route, parkeren en aankomstinformatie aan voor `ROUTE_PARKING_INFO`.
12. Vul de definitieve footer-/copyrighttekst aan voor `COPYRIGHT_INFO`.

## Inhoud controleren

- Controleer de exacte zorgteksten voor doelgroep, aanbod, hulpvragen, werkwijze, tarieven en verwijzingen voordat de site live gaat.
- Controleer de FAQ-vragen en antwoorden voor `FAQ_CONTENT` in `src/content/faq.ts`.
- Controleer afspraken voor scholen en verwijzers voor `REFERRER_SCHOOL_INFO`.
- Controleer de inhoud van `/over-uniqara`, `/voor-wie`, `/hulpvragen`, `/werkwijze`, `/locatie`, `/praktische-informatie`, `/contact` en `/privacy`.
- Controleer later of CTA-teksten zoals "Neem contact op", "Lees de werkwijze" en "Praktische informatie" precies aansluiten bij de definitieve aanmeldroute.
- Controleer de metadata in `src/content/seo.ts`, vooral homepage-positionering, locatieomschrijving en beschrijvingen per pagina.
- Controleer voor livegang `src/app/sitemap.ts`, `src/app/robots.ts` en `src/app/manifest.ts` zodra het echte domein bekend is.
- Controleer voor livegang `src/content/structuredData.ts` zodra domein, adres, telefoon, openingstijden en eventuele profiel-links definitief zijn.
- Controleer de rustige vertrouwensteksten in footer, contact en CTA-banden zodra de definitieve praktijktoon bekend is.
- Gebruik `CONTENT_REVIEW.md` als korte launch-content checklist voor teksten die al sterk zijn en teksten die nog vervangen moeten worden.
- Controleer voor livegang ook `HOMEPAGE_QA.md`, `SITE_STATUS_V1.md` en `RESPONSIVE_AUDIT.md`.
- Controleer de mobiele weergave opnieuw zodra logo, foto's of formulierkoppeling definitief zijn vervangen.

Zie ook `PLACEHOLDER_REGISTRY.md` en `src/content/placeholders.ts` voor het centrale placeholderoverzicht.
