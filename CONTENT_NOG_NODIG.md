# Content nog nodig voor Uniqara

Dit overzicht laat zien welke informatie nog nodig is voordat de website live kan. De website werkt nu met duidelijke placeholders, zodat alles later rustig vervangen kan worden.

## Nodig voor livegang

| Onderdeel | Waarom nodig | Waar later invullen |
| --- | --- | --- |
| Definitief logo | Voor herkenbaarheid en een professionele eerste indruk. | `public/placeholders/logo-placeholder.svg`, `src/components/ui/LogoPlaceholder.tsx`, placeholderkeys `LOGO_PRIMARY` en `LOGO_FOOTER` |
| Contactgegevens | Bezoekers moeten weten hoe ze contact kunnen opnemen. | `src/content/contact.ts`, placeholderkeys `CONTACT_EMAIL` en `CONTACT_PHONE` |
| Formulierafhandeling | Nodig om berichten echt te kunnen ontvangen via het contactformulier. | `src/content/contact.ts`, `src/components/forms/ContactFormPlaceholder.tsx`, placeholderkey `CONTACT_FORM_HANDLER` |
| Adres en bereikbaarheid | Nodig voor route, locatiepagina en praktische informatie. | `src/content/contact.ts`, placeholderkeys `LOCATION_ADDRESS` en `ROUTE_PARKING_INFO` |
| Kaart of routeblok | Helpt bezoekers de locatie rustig en duidelijk te vinden. | `src/content/pages.ts`, placeholderkey `LOCATION_MAP_PLACEHOLDER` |
| Foto's van De Hooiberg, natuur en praktijk | Versterkt de rustige, landelijke sfeer en maakt de plek concreet. | `src/content/home.ts`, `src/content/pages.ts`, placeholderkeys `HERO_IMAGE_HOOIBERG`, `HERO_IMAGE_NATURE`, `HERO_IMAGE_PRACTICE` en `PRACTICE_PHOTOS` |
| Naam behandelaar / praktijkhouder | Geeft vertrouwen en maakt de praktijk persoonlijker. | `src/content/pages.ts`, placeholderkey `OWNER_NAME` |
| Openingstijden | Helpt bezoekers begrijpen wanneer de praktijk bereikbaar is. | `src/content/contact.ts`, placeholderkey `OPENING_HOURS` |
| Tarieven en vergoedingen | Belangrijk voor transparantie voordat iemand contact opneemt. | `src/content/pages.ts`, placeholderkey `TARIFFS_INFO` |
| Vergoedingsinformatie | Maakt duidelijk of en hoe vergoeding, verwijzing of betaling werkt. | `src/content/pages.ts`, placeholderkey `REIMBURSEMENT_INFO` |
| Wachttijd | Bezoekers willen weten wanneer hulp mogelijk is. | `src/content/pages.ts`, placeholderkey `WAITLIST_INFO` |
| Privacytekst | Nodig voor zorgvuldige uitleg over gegevens en dossiers. | `src/content/pages.ts`, placeholderkey `PRIVACY_INFO` |
| Juridische privacydetails | Nodig om correct te beschrijven welke gegevens worden verwerkt en welke rechten bezoekers hebben. | `src/content/pages.ts`, placeholderkeys `PRIVACY_LEGAL_TEXT`, `PRIVACY_DATA_CATEGORIES` en `PRIVACY_RIGHTS_INFO` |
| Aanmeldinformatie | Maakt duidelijk hoe iemand de eerste stap zet. | `src/content/pages.ts`, placeholderkey `REGISTRATION_PROCESS` |
| Footer- en copyrighttekst | Zorgt dat de onderkant van de site netjes en volledig is. | `src/content/placeholders.ts`, placeholderkey `COPYRIGHT_INFO` |

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
- `HERO_IMAGE_NATURE`
- `HERO_IMAGE_PRACTICE`
- `CONTACT_EMAIL`
- `CONTACT_PHONE`
- `CONTACT_FORM_HANDLER`
- `LOCATION_ADDRESS`
- `OWNER_NAME`
- `TARIFFS_INFO`
- `REIMBURSEMENT_INFO`
- `WAITLIST_INFO`
- `PRIVACY_INFO`
- `PRIVACY_LEGAL_TEXT`
- `PRIVACY_DATA_CATEGORIES`
- `PRIVACY_RIGHTS_INFO`
- `FAQ_CONTENT`
- `ROUTE_PARKING_INFO`
- `LOCATION_MAP_PLACEHOLDER`
- `PRACTICE_PHOTOS`
- `REGISTRATION_PROCESS`
- `REFERRER_SCHOOL_INFO`
- `OPENING_HOURS`
- `CONTACT_ROUTE_INFO`
- `PRIVACY_DOSSIER_INFO`
- `PRIVACY_CONTACT_ROUTE`
- `COPYRIGHT_INFO`
