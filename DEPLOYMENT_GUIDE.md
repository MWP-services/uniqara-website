# Deployment guide voor Uniqara

Deze gids beschrijft hoe de Uniqara website als normale Next.js site op Vercel gedeployed kan worden.

## Huidige technische status

- Framework: Next.js App Router.
- Package manager: npm.
- Build command: `npm run build`.
- Lint command: `npm run lint`.
- Output: standaard Next.js/Vercel output. Geen aparte output-map instellen.
- Environment variables: niet nodig voor deze placeholder-v1.

## Voorbereiden voor GitHub

1. Controleer lokaal:

```bash
npm install
npm run lint
npm run build
```

2. Controleer welke bestanden gewijzigd zijn:

```bash
git status
```

3. Commit de laatste wijzigingen als dat nog niet gebeurd is:

```bash
git add .
git commit -m "Prepare Uniqara v1 for deployment"
```

4. Koppel eventueel een GitHub repository en push:

```bash
git remote add origin https://github.com/GEBRUIKERSNAAM/REPOSITORYNAAM.git
git branch -M main
git push -u origin main
```

Als er al een `origin` bestaat, gebruik dan alleen:

```bash
git push
```

## Koppelen aan Vercel

1. Log in op Vercel.
2. Kies `Add New Project`.
3. Selecteer de GitHub repository van Uniqara.
4. Laat de standaard Next.js instellingen staan:
   - Framework Preset: Next.js
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: leeg laten
5. Voeg geen environment variables toe, tenzij er later een echte formulierintegratie of andere externe dienst komt.
6. Klik op `Deploy`.

## Na de eerste deployment

Vervang na livegang zo snel mogelijk:

- `SEO_SITE_URL`: zet het definitieve domein in `src/content/seo.ts`.
- `CONTACT_EMAIL`, `CONTACT_PHONE`, `LOCATION_ADDRESS`, `OPENING_HOURS`: vul echte praktijkgegevens in via `src/content/contact.ts`.
- `CONTACT_FORM_HANDLER`: koppel later een echte formulierafhandeling.
- `LOGO_PRIMARY`, `LOGO_FOOTER`, `FAVICON_PLACEHOLDER`, `APP_ICON_PLACEHOLDER`, `SOCIAL_PREVIEW_IMAGE`: vervang placeholders door definitieve branding.
- `HERO_IMAGE_HOOIBERG`, `HERO_IMAGE_NATURE`, `HERO_IMAGE_PRACTICE`, `PRACTICE_PHOTOS`: vervang beeldplaceholders door echte fotografie.
- `PRIVACY_LEGAL_TEXT`, `PRIVACY_DATA_CATEGORIES`, `PRIVACY_RIGHTS_INFO`: vul juridisch gecontroleerde privacy-informatie in.

## Belangrijke bestanden voor livegang

- `TODO_USER.md`: belangrijkste nog aan te leveren informatie.
- `PLACEHOLDER_REGISTRY.md`: alle placeholderkeys en waar ze beheerd worden.
- `CONTENT_REVIEW.md`: korte launch-content review.
- `SITE_STATUS_V1.md`: algemene status van de site.
- `src/content/seo.ts`: metadata, domein en technische SEO-basis.
- `src/content/placeholders.ts`: centrale placeholderteksten.

## Environment variables

Voor deze v1 zijn geen environment variables nodig.

Later kan dit veranderen als er bijvoorbeeld een formulierbackend, CRM, analytics of e-mailservice wordt gekoppeld. Voeg die variabelen dan pas toe in Vercel en documenteer ze in dit bestand.
