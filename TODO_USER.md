# TODO voor gebruiker

## Prioriteit voor livegang

1. Lever het definitieve Uniqara-logo aan voor `LOGO_PRIMARY` en `LOGO_FOOTER`.
2. Controleer de overige praktijkgegevens voor `LOCATION_ADDRESS`, `OPENING_HOURS`, `OWNER_NAME`, KvK/AGB indien van toepassing en gewenste contactroute. Het publieke telefoonnummer is aangeleverd en wordt bewust met sterretje getoond.
3. Vul het definitieve websitedomein aan voor `SEO_SITE_URL`, zodat later canonical URLs, metadataBase, structured data en share-URL's gekoppeld kunnen worden.
4. Geef aan of er publieke social/profiel-links gebruikt mogen worden voor `SOCIAL_PROFILE_URLS`, of laat dit bewust leeg.
5. Vervang de tijdelijke branding-assets voor `FAVICON_PLACEHOLDER`, `APP_ICON_PLACEHOLDER` en `SOCIAL_PREVIEW_IMAGE` zodra het echte logo en eventuele fotografie beschikbaar zijn.
6. Maak een Resend-account/API key aan en zet `RESEND_API_KEY`, `CONTACT_FORM_FROM` en `CONTACT_FORM_TO` in Azure voordat het contactformulier live gebruikt wordt.
7. Zet voor livegang in Azure ook `WAITING_TIMES_CSV_URL=https://docs.google.com/spreadsheets/d/1gYS1kzeBqcffsgrstlZlM3ryC7fuS2Vcw7_1W8q8dZk/export?format=csv&gid=0`, zodat de wachttijdentabel online uit de Google Sheet wordt geladen.
8. Vul de aanmeldroute, wachttijd, tarieven en vergoedingen aan voor `REGISTRATION_PROCESS`, `WAITLIST_INFO`, `TARIFFS_INFO` en `REIMBURSEMENT_INFO`.
9. Laat de privacy-inhoud juridisch controleren en vul aan voor `PRIVACY_INFO`, `PRIVACY_LEGAL_TEXT`, `PRIVACY_DATA_CATEGORIES`, `PRIVACY_DOSSIER_INFO`, `PRIVACY_RIGHTS_INFO`, `PRIVACY_CONTACT_ROUTE` en eventuele praktijkgegevens.
10. Lever echte foto's aan voor `HERO_IMAGE_HOOIBERG`, `HERO_IMAGE_NATURE`, `HERO_IMAGE_PRACTICE` en `PRACTICE_PHOTOS`.
11. Lever aan of er een kaart, routeblok of externe route-integratie gewenst is voor `LOCATION_MAP_PLACEHOLDER`.
12. Vul route, parkeren en aankomstinformatie aan voor `ROUTE_PARKING_INFO`.
13. Vul de definitieve footer-/copyrighttekst aan voor `COPYRIGHT_INFO`.
14. Vul definitieve teaminformatie aan voor `TEAM_DETAILS`, inclusief functies, registraties en specialisaties van Elise Honkoop-de Visser en Annemarie van den Heuvel-de Jager.

## Inhoud controleren

- Afgerond `TELEFOONNUMMER_VOLGT`: telefoonnummer is aangeleverd; huidige UI toont bewust `06* 486 468 40` en gebruikt geen telefoonlink.
- Open punt `HULPAANBOD_BANNER_VARIANT`: bannerkleur later visueel beoordelen; opties zijn groen, geel en terra.
- Open punt `FOOTER_SHORT_TAGLINE`: voorlopige tekst is "Persoonlijk, zorgvuldig en met aandacht."; later definitief beoordelen.
- Open punt `KINDERTHERAPIE_BEHANDELVORMEN`: voorlopige opties zijn EMDR, ACT en CGT; later eventueel uitbreiden.
- Open punt `VERWIJSROUTE_DETAILS`: basisroute staat op de site; details later verfijnen.
- Open punt `GOOGLE_MAPS_LINK`: Google Maps-link is toegevoegd; later controleren.
- Controleer de exacte zorgteksten voor doelgroep, aanbod, hulpvragen, werkwijze, tarieven en verwijzingen voordat de site live gaat.
- Controleer en vul de definitieve praktijkteksten aan voor `TREATMENT_METHOD_CONTENT`: EMDR, ACT en CGT.
- Controleer de FAQ-vragen en antwoorden voor `FAQ_CONTENT` in `src/content/faq.ts`.
- Controleer afspraken voor scholen en verwijzers voor `REFERRER_SCHOOL_INFO`.
- Vul definitieve verwijsroute-details voor scholen, huisartsen en verwijzers aan, waaronder exacte aanleverwijze, eventuele verwijsvoorwaarden, terugkoppeling en bereikbaarheid.
- Controleer de inhoud van `/over-uniqara`, `/voor-wie`, `/hulpvragen`, `/werkwijze`, `/locatie`, `/praktische-informatie`, `/contact` en `/privacy`.
- Controleer later of CTA-teksten zoals "Neem contact op", "Lees de werkwijze" en "Praktische informatie" precies aansluiten bij de definitieve aanmeldroute.
- Controleer de metadata in `src/content/seo.ts`, vooral homepage-positionering, locatieomschrijving en beschrijvingen per pagina.
- Controleer voor livegang `src/app/sitemap.ts`, `src/app/robots.ts` en `src/app/manifest.ts` zodra het echte domein bekend is.
- Controleer voor livegang `src/content/structuredData.ts` zodra domein, adres, telefoon, openingstijden en eventuele profiel-links definitief zijn.
- Controleer de vertrouwensteksten in footer, contact en CTA-banden zodra de definitieve praktijktoon bekend is.
- Gebruik `CONTENT_REVIEW.md` als korte launch-content checklist voor teksten die al sterk zijn en teksten die nog vervangen moeten worden.
- Gebruik `DEPLOYMENT_GUIDE.md` voor deployment-stappen en vertaal de environment variables naar Azure Application settings. Voor het contactformulier zijn Resend environment variables nodig; voor wachttijden is `WAITING_TIMES_CSV_URL` nodig.
- Controleer de fallbackteksten in `src/content/fallbacks.ts` zodra echte contactgegevens en de definitieve praktijktoon bekend zijn.
- Gebruik `FINAL_QA_V1.md` als laatste overzicht van wat technisch klaar is en wat voor livegang idealiter nog vervangen wordt.
- Gebruik `HANDOFF_FOR_USER.md` als startpunt voor beheer, tekstwijzigingen en veilige vervolgopdrachten aan Codex.
- Controleer voor livegang ook `HOMEPAGE_QA.md`, `SITE_STATUS_V1.md` en `RESPONSIVE_AUDIT.md`.
- Controleer de mobiele weergave opnieuw zodra logo, foto's of formulierkoppeling definitief zijn vervangen.

Zie ook `PLACEHOLDER_REGISTRY.md` en `src/content/placeholders.ts` voor het centrale placeholderoverzicht.
