# Site status v1

Deze status hoort bij het einde van Sprint 4D. De website staat als consistente v1 klaar met centrale content en duidelijke placeholders.

## Klaar

- Globale layout met header, navigatie, footer en duidelijke logo-placeholders.
- Homepage met hero, introductie, doelgroepen, hulpvragen, werkwijze, locatie, praktische info en contact-CTA.
- Binnenpagina's:
  - `/over-uniqara`
  - `/voor-wie`
  - `/hulpvragen`
  - `/werkwijze`
  - `/locatie`
  - `/praktische-informatie`
  - `/contact`
  - `/privacy`
- Herbruikbare UI-kit voor container, section, headings, buttons, cards, badges en logo-placeholder.
- Herbruikbare paginapatronen voor hero, CTA-band en gestructureerde binnenpagina's.
- Contactpagina met front-end formulierplaceholder en duidelijke melding dat verzending nog niet gekoppeld is.
- Centrale placeholderregistratie in `src/content/placeholders.ts`, `PLACEHOLDER_REGISTRY.md` en `TODO_USER.md`.

## Visueel sterk genoeg voor v1

- De homepage voelt rustig en compleet genoeg als eerste indruk, ook zonder definitieve fotografie.
- De herbruikbare cards, borders, radius en schaduwen zijn consistent en subtiel gehouden.
- Header, CTA-banden en footer hebben een rustige, professionele basis.
- De locatie- en foto-placeholders zijn verzorgd genoeg voor een tijdelijke versie en blijven duidelijk gemarkeerd.
- Contact en praktische informatie geven al vertrouwen door korte contextregels en rustige doorverwijzingen.

## Nog placeholders

- Logo: `LOGO_PRIMARY`, `LOGO_FOOTER`.
- Foto's en sfeerbeelden: `HERO_IMAGE_HOOIBERG`, `HERO_IMAGE_NATURE`, `HERO_IMAGE_PRACTICE`, `PRACTICE_PHOTOS`.
- Contact en locatie: `CONTACT_EMAIL`, `CONTACT_PHONE`, `LOCATION_ADDRESS`, `OPENING_HOURS`, `ROUTE_PARKING_INFO`, `LOCATION_MAP_PLACEHOLDER`.
- Praktijkhouder: `OWNER_NAME`.
- Formulierafhandeling: `CONTACT_FORM_HANDLER`.
- Praktische informatie: `REGISTRATION_PROCESS`, `TARIFFS_INFO`, `REIMBURSEMENT_INFO`, `WAITLIST_INFO`, `CONTACT_ROUTE_INFO`.
- Privacy en juridisch: `PRIVACY_INFO`, `PRIVACY_LEGAL_TEXT`, `PRIVACY_DATA_CATEGORIES`, `PRIVACY_DOSSIER_INFO`, `PRIVACY_RIGHTS_INFO`, `PRIVACY_CONTACT_ROUTE`.
- FAQ en footer: `FAQ_CONTENT`, `COPYRIGHT_INFO`.
- Verwijzers/scholen: `REFERRER_SCHOOL_INFO`.

## Later vervangen

- Definitieve praktijkgegevens, inclusief contact, adres, openingstijden en praktijkhouder.
- Definitieve zorginhoud voor doelgroep, hulpvragen, werkwijze, tarieven en vergoeding.
- Juridisch gecontroleerde privacytekst.
- Echte fotografie van De Hooiberg, praktijk en groene omgeving.
- Echte formulierkoppeling of keuze voor een andere contactroute.
- Definitieve footer- en copyrighttekst.

## Micro-polish Sprint 5D

- Zichtbare placeholderteksten voor foto's, locatiekaart en formulierafhandeling zijn rustiger geformuleerd.
- De standaard afsluitende CTA-band heeft nu een korte geruststellende contextregel.
- Footerintro, contactformuliercopy en locatie-intro zijn iets warmer en minder technisch gemaakt.
- Card-schaduwen en badge-afwerking zijn subtieler gemaakt voor een rustigere totaalindruk.

## Belangrijkste bestanden

- Teksten en routes: `src/content/site.ts`, `src/content/navigation.ts`, `src/content/routes.ts`.
- Homepage: `src/content/home.ts`.
- Binnenpagina's: `src/content/pages.ts`.
- Hulpvragen en aanbod: `src/content/services.ts`.
- Contact: `src/content/contact.ts`.
- FAQ: `src/content/faq.ts`.
- Placeholderbeheer: `src/content/placeholders.ts`, `PLACEHOLDER_REGISTRY.md`, `TODO_USER.md`.
- Status/audit: `CONTENT_NOG_NODIG.md`, `HOMEPAGE_QA.md`, `SITE_STATUS_V1.md`.
