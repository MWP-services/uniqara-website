# Homepage QA

Laatste QA: Sprint 3D

## Verbeterd

- Mobiele kaarten stapelen rustiger met `sm`/`lg` grids in plaats van te vroege kolommen.
- Card-links hebben grotere klikgebieden en zijn beter bruikbaar op mobiel.
- Buttons hebben een minimale hoogte voor betere touch targets.
- Cards hebben een subtiele hover shadow voor meer affordance zonder drukke animatie.
- CTA's zijn consistenter geplaatst onder secties en in cards.
- De locatie-placeholder gebruikt nu een betere mobiele gridopbouw.
- Heading hierarchy blijft logisch: een enkele hero `h1`, daarna sectieheadings als `h2` en kaarttitels als `h3`.
- Focus states blijven centraal geregeld via `globals.css`.
- Interne homepage-links lopen via de centrale routeconfig en verwijzen naar bestaande pagina's.

## Openstaande placeholders

- `LOGO_PRIMARY`
- `HERO_IMAGE_HOOIBERG`
- `HERO_IMAGE_NATURE`
- `HERO_IMAGE_PRACTICE`
- `PRACTICE_PHOTOS`
- `CONTACT_EMAIL`
- `CONTACT_PHONE`
- `LOCATION_ADDRESS`
- `REGISTRATION_PROCESS`
- `TARIFFS_INFO`
- `WAITLIST_INFO`

Deze staan centraal in `src/content/placeholders.ts` en `PLACEHOLDER_REGISTRY.md`.

## Aandacht voor livegang

- Vervang logo- en fotoplaceholders door definitieve assets.
- Controleer alle zorginhoudelijke teksten op juistheid en toon.
- Vul contactgegevens, aanmeldroute, tarieven, wachttijd en adres aan.
- Test de homepage visueel in echte browsers op mobiel, tablet en desktop met definitieve content.
- Controleer privacy- en praktische informatie voordat de site publiek live gaat.
