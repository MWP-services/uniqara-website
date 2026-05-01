# Handoff voor gebruiker

Dit document is bedoeld als eenvoudige wegwijzer. Je hoeft geen technische kennis te hebben om te begrijpen waar teksten, placeholders en assets later vervangen worden.

## Begin hier

De belangrijkste bestanden om als eerste te kennen:

1. `TODO_USER.md`  
   De praktische lijst met wat nog aangeleverd of gecontroleerd moet worden.

2. `PLACEHOLDER_REGISTRY.md`  
   Het centrale overzicht van alle placeholders, met per sleutel waar die gebruikt wordt.

3. `FINAL_QA_V1.md`  
   De laatste status van wat klaar is voor v1 en wat nog openstaat.

4. `src/content/placeholders.ts`  
   De centrale plek waar placeholderteksten beheerd worden.

5. `src/content/contact.ts`  
   De plek voor contactgegevens, adres, openingstijden en formuliercopy.

## Waar staan de teksten?

De meeste teksten staan in `src/content`.

- Homepage: `src/content/home.ts`
- Binnenpagina's zoals Over, Voor wie, Werkwijze, Locatie, Praktische informatie, Contact en Privacy: `src/content/pages.ts`
- Hulpvragen en aanbod: `src/content/services.ts`
- Veelgestelde vragen: `src/content/faq.ts`
- Algemene sitenaam, korte merkbeschrijving en gedeelde CTA-tekst: `src/content/site.ts`
- Header- en footerlinks: `src/content/navigation.ts`

Laat gewone pagina-aanpassingen zoveel mogelijk in deze bestanden doen. Componentbestanden in `src/components` hoeven meestal niet aangepast te worden voor tekstwijzigingen.

## Waar staan contactgegevens?

Contactgegevens staan vooral in:

- `src/content/contact.ts`
- `src/content/placeholders.ts`

Belangrijke placeholderkeys:

- `CONTACT_EMAIL`
- `CONTACT_PHONE`
- `LOCATION_ADDRESS`
- `OPENING_HOURS`
- `OWNER_NAME`
- `CONTACT_FORM_HANDLER`

De contactpagina werkt nu als nette placeholder. Voor livegang moet vooral duidelijk zijn welk e-mailadres, telefoonnummer, adres en welke contactroute gebruikt mogen worden.

## Waar staat SEO-informatie?

SEO en vindbaarheid staan vooral in:

- `src/content/seo.ts`
- `src/content/structuredData.ts`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/manifest.ts`

Belangrijkste placeholder:

- `SEO_SITE_URL`

Zodra het definitieve domein bekend is, moet `SEO_SITE_URL` worden vervangen door het echte domein. Daarna kunnen metadata, sitemap, robots en structured data op dat domein aansluiten.

## Waar staan placeholders?

De centrale placeholderplek is:

- `src/content/placeholders.ts`

De uitleg per placeholder staat in:

- `PLACEHOLDER_REGISTRY.md`

Gebruik altijd dezelfde placeholderkey. Zo blijft alles later makkelijk terug te vinden. Voeg geen losse placeholdertekst toe op willekeurige plekken als er al een centrale placeholder bestaat.

## Waar moet het logo later vervangen worden?

Er is nu bewust nog geen definitief logo gebruikt.

Belangrijke plekken:

- `public/placeholders/logo-placeholder.svg`
- `src/components/ui/LogoPlaceholder.tsx`
- `src/content/placeholders.ts`
- `src/app/icon.tsx`
- `src/app/apple-icon.tsx`

Placeholderkeys:

- `LOGO_PRIMARY`
- `LOGO_FOOTER`
- `FAVICON_PLACEHOLDER`
- `APP_ICON_PLACEHOLDER`

Voor livegang is een definitief logo sterk aanbevolen. Favicon en app-icon kunnen daarna uit hetzelfde logo worden afgeleid.

## Waar moeten foto's later vervangen worden?

Foto's zijn nu nette placeholders. Echte beelden kunnen later de landelijke sfeer en De Hooiberg veel sterker maken.

Belangrijke contentplekken:

- `src/content/home.ts`
- `src/content/pages.ts`
- `src/content/placeholders.ts`

Placeholderkeys:

- `HERO_IMAGE_HOOIBERG`
- `HERO_IMAGE_NATURE`
- `HERO_IMAGE_PRACTICE`
- `PRACTICE_PHOTOS`
- `SOCIAL_PREVIEW_IMAGE`

Gebruik bij voorkeur rustige, lichte foto's van De Hooiberg, natuur, de praktijkruimte of de aankomstomgeving.

## Eerst invullen voor livegang

De aanbevolen volgorde:

1. Logo en basisbranding  
   `LOGO_PRIMARY`, `LOGO_FOOTER`, favicon/app-icon.

2. Contactgegevens  
   E-mailadres, telefoonnummer, adres, openingstijden en praktijkhouder.

3. Definitief domein  
   `SEO_SITE_URL` in `src/content/seo.ts`.

4. Privacytekst  
   Laat de privacy-inhoud juridisch controleren voordat de site echt live wordt gebruikt.

5. Praktische informatie  
   Aanmelden, tarieven, vergoedingen, wachttijd en contactroute.

6. Formulierafhandeling  
   Kies of het formulier echt gekoppeld wordt, of dat contact alleen via e-mail/telefoon loopt.

7. Minimaal enkele echte foto's  
   Vooral voor homepage, locatie en social preview.

## Kan ook later

Dit hoeft niet per se vóór de eerste livegang:

- FAQ uitbreiden.
- Blog of kennisartikelen toevoegen.
- Teamleden toevoegen.
- Informatie voor scholen en verwijzers uitbreiden.
- Testimonials alleen toevoegen als dit juridisch en beroepsmatig passend is.
- Extra structured data of social/profiel-links toevoegen.

## Veilig kleine aanpassingen laten doen door Codex

Je kunt Codex later heel gericht vragen stellen. Bijvoorbeeld:

- "Pas de tekst op de homepage aan in `src/content/home.ts`, maar verander niets aan de layout."
- "Vervang `CONTACT_EMAIL` door dit e-mailadres en werk de registraties bij."
- "Controleer of alle placeholders rond tarieven nog zichtbaar zijn."
- "Werk alleen `src/content/pages.ts` bij voor de pagina Werkwijze."
- "Voer na de wijziging lint en build uit."

Een goede opdracht bevat:

- Welke tekst of placeholder aangepast moet worden.
- Welke bestanden wel of niet aangepast mogen worden.
- Of Codex lint/build moet draaien.
- Of de wijziging meteen gecommit moet worden.

## Belangrijkste naslagbestanden

- `TODO_USER.md`: praktische actielijst.
- `PLACEHOLDER_REGISTRY.md`: alle placeholders.
- `CONTENT_REVIEW.md`: tekstuele review.
- `FINAL_QA_V1.md`: laatste productiecheck.
- `DEPLOYMENT_GUIDE.md`: GitHub/Vercel-stappen.
- `src/content/README.md`: overzicht van contentbestanden.

## Korte samenvatting

De site is technisch klaar als v1, maar echte praktijkgegevens, privacytekst, logo, domein en foto's moeten nog worden ingevuld voor een sterke livegang. De meeste wijzigingen kunnen later rustig via de bestanden in `src/content` worden gedaan.
