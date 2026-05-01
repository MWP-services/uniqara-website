# Final QA v1

Deze QA hoort bij Sprint 7C en vat de productiecheck voor de eerste liveversie samen.

## Gecontroleerd

- Alle hoofdroutes staan klaar:
  - `/`
  - `/over-uniqara`
  - `/voor-wie`
  - `/hulpvragen`
  - `/werkwijze`
  - `/locatie`
  - `/praktische-informatie`
  - `/contact`
  - `/privacy`
- Navigatie en interne links gebruiken de centrale routeconfig in `src/content/routes.ts`.
- Metadata bestaat voor alle hoofdpagina's via `src/content/seo.ts`.
- Technische SEO-routes bestaan voor sitemap, robots, manifest, iconen en social preview.
- Structured data staat centraal in `src/content/structuredData.ts`.
- 404-, error- en loadingstates zijn aanwezig en passen bij de huisstijl.
- Contact- en privacypagina's zijn netjes bruikbaar als placeholder-v1.
- Placeholderregistratie staat centraal in `src/content/placeholders.ts`, `PLACEHOLDER_REGISTRY.md` en `TODO_USER.md`.
- Lint en productiebuild zijn uitgevoerd tijdens deze sprint.

## Goedgekeurd voor v1

- De site is technisch klaar voor Vercel-deployment.
- De pagina-opbouw is consistent en mobile-first.
- De visuele basis is rustig, licht, groen/warm en professioneel.
- De meeste teksten zijn sterk genoeg als v1-placeholdercopy.
- De gebruiker kan teksten later centraal aanpassen zonder componentcode te wijzigen.

## Open placeholders

Belangrijkste zichtbare placeholders:

- Logo en branding: `LOGO_PRIMARY`, `LOGO_FOOTER`, `FAVICON_PLACEHOLDER`, `APP_ICON_PLACEHOLDER`, `SOCIAL_PREVIEW_IMAGE`.
- Domein en vindbaarheid: `SEO_SITE_URL`, `SOCIAL_PROFILE_URLS`.
- Contact en locatie: `CONTACT_EMAIL`, `CONTACT_PHONE`, `LOCATION_ADDRESS`, `OPENING_HOURS`, `ROUTE_PARKING_INFO`, `LOCATION_MAP_PLACEHOLDER`.
- Praktijkinformatie: `OWNER_NAME`, `REGISTRATION_PROCESS`, `TARIFFS_INFO`, `REIMBURSEMENT_INFO`, `WAITLIST_INFO`, `CONTACT_ROUTE_INFO`.
- Privacy en juridisch: `PRIVACY_INFO`, `PRIVACY_LEGAL_TEXT`, `PRIVACY_DATA_CATEGORIES`, `PRIVACY_DOSSIER_INFO`, `PRIVACY_RIGHTS_INFO`, `PRIVACY_CONTACT_ROUTE`.
- Beeldmateriaal: `HERO_IMAGE_HOOIBERG`, `HERO_IMAGE_NATURE`, `HERO_IMAGE_PRACTICE`, `PRACTICE_PHOTOS`.
- Formulier en extra inhoud: `CONTACT_FORM_HANDLER`, `FAQ_CONTENT`, `REFERRER_SCHOOL_INFO`, `COPYRIGHT_INFO`.

## Idealiter voor livegang vervangen

- Definitief logo en favicon/app-icon.
- Definitief domein in `src/content/seo.ts`.
- E-mailadres, telefoonnummer, adres, openingstijden en praktijkhouder.
- Juridisch gecontroleerde privacytekst.
- Aanmeldroute, tarieven, vergoedingen en wachttijd.
- Keuze voor echte formulierafhandeling of een alternatieve contactroute.
- Minimaal een paar echte foto's van De Hooiberg, praktijk of groene omgeving.

## Kan ook na livegang

- FAQ uitbreiden.
- Informatie voor scholen en verwijzers verfijnen.
- Extra fotografie of social preview verfijnen.
- Blog, kennisartikelen of teaminformatie toevoegen.
- Structured data aanvullen met definitieve profiel-links, als die er komen.

## Eindconclusie

De website is klaar als technische en inhoudelijke v1 met duidelijke placeholders. Voor een professionele livegang zijn vooral echte contactgegevens, privacytekst, domein, branding en fotografie nog belangrijk.
