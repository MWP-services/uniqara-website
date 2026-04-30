# Content nog nodig voor Uniqara

Dit overzicht laat zien welke informatie nog nodig is voordat de website live kan. De website werkt nu met duidelijke placeholders, zodat alles later rustig vervangen kan worden.

## Nodig voor livegang

| Onderdeel | Waarom nodig | Waar later invullen |
| --- | --- | --- |
| Definitief logo | Voor herkenbaarheid en een professionele eerste indruk. | `public/placeholders/logo-placeholder.svg`, `src/components/LogoPlaceholder.tsx`, placeholderkeys `LOGO_PRIMARY` en `LOGO_FOOTER` |
| Contactgegevens | Bezoekers moeten weten hoe ze contact kunnen opnemen. | `src/content/contact.ts`, placeholderkeys `CONTACT_EMAIL` en `CONTACT_PHONE` |
| Adres en bereikbaarheid | Nodig voor route, locatiepagina en praktische informatie. | `src/content/contact.ts`, placeholderkeys `LOCATION_ADDRESS` en `ROUTE_PARKING_INFO` |
| Foto's van De Hooiberg en praktijk | Versterkt de rustige, landelijke sfeer en maakt de plek concreet. | `src/content/home.ts`, `src/content/pages.ts`, placeholderkeys `HERO_IMAGE_HOOIBERG` en `PRACTICE_PHOTOS` |
| Naam behandelaar / praktijkhouder | Geeft vertrouwen en maakt de praktijk persoonlijker. | `src/content/pages.ts`, placeholderkey `OWNER_NAME` |
| Openingstijden | Helpt bezoekers begrijpen wanneer de praktijk bereikbaar is. | `src/content/contact.ts`, placeholderkey `OPENING_HOURS` |
| Tarieven en vergoedingen | Belangrijk voor transparantie voordat iemand contact opneemt. | `src/content/pages.ts`, placeholderkey `TARIFFS_INFO` |
| Wachttijd | Bezoekers willen weten wanneer hulp mogelijk is. | `src/content/pages.ts`, placeholderkey `WAITLIST_INFO` |
| Privacytekst | Nodig voor zorgvuldige uitleg over gegevens en dossiers. | `src/content/pages.ts`, placeholderkey `PRIVACY_INFO` |
| Aanmeldinformatie | Maakt duidelijk hoe iemand de eerste stap zet. | `src/content/pages.ts`, placeholderkey `REGISTRATION_PROCESS` |

## Optioneel later

| Onderdeel | Waarom handig | Waar later invullen |
| --- | --- | --- |
| Blog of kennisartikelen | Kan vertrouwen opbouwen en uitleg geven over thema's. | Nieuwe routes/contentbestanden later toevoegen |
| FAQ uitbreiden | Scheelt herhaalde vragen en helpt bezoekers sneller kiezen. | `src/content/faq.ts`, placeholderkey `FAQ_CONTENT` |
| Teamleden | Handig als er meerdere behandelaren of medewerkers komen. | Later toevoegen aan `src/content/pages.ts` of nieuw `src/content/team.ts` |
| Verwijzersinformatie | Nuttig voor scholen, huisartsen en andere verwijzers. | `src/content/pages.ts`, placeholderkey `REFERRER_SCHOOL_INFO` |
| Testimonials | Alleen gebruiken als dit inhoudelijk, juridisch en beroepsmatig passend/toegestaan is. | Later apart beoordelen en toevoegen |

## Gebruikte placeholders

Er zijn al placeholders gebruikt die later vervangen moeten worden. Ze staan centraal geregistreerd in:

- `PLACEHOLDER_REGISTRY.md`
- `TODO_USER.md`
- `src/content/placeholders.ts`

Belangrijkste placeholderkeys:

- `LOGO_PRIMARY`
- `LOGO_FOOTER`
- `HERO_IMAGE_HOOIBERG`
- `CONTACT_EMAIL`
- `CONTACT_PHONE`
- `LOCATION_ADDRESS`
- `OWNER_NAME`
- `TARIFFS_INFO`
- `WAITLIST_INFO`
- `PRIVACY_INFO`
- `FAQ_CONTENT`
- `ROUTE_PARKING_INFO`
- `PRACTICE_PHOTOS`
- `REGISTRATION_PROCESS`
- `REFERRER_SCHOOL_INFO`
- `OPENING_HOURS`
- `CONTACT_ROUTE_INFO`
- `PRIVACY_DOSSIER_INFO`
- `PRIVACY_CONTACT_ROUTE`
