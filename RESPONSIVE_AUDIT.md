# Responsive audit Sprint 5A

Deze audit beschrijft de mobile-first polish voor de huidige v1 van Uniqara.

## Verbeterd

### Typografie en spacing

- Mobiele heading-groottes iets rustiger gemaakt, zodat lange koppen beter passen.
- Sectie-padding mobile-first aangescherpt: minder zwaar op kleine schermen, ruim op desktop.
- Container-padding verfijnd voor mobiel, tablet en desktop.
- Section headings gebruiken nu consistenter dezelfde schaal.

### Header en navigatie

- Mobiele header iets compacter gemaakt.
- Mobiel menu heeft grotere tap target, betere dropdownbreedte en scrollbare dropdown bij kleine schermhoogte.
- Navigatielinks hebben ruimere klikhoogte.

### Buttons en links

- Buttons hebben consistente regelhoogte en tekstuitlijning.
- CTA-groepen blijven netjes stapelen op mobiel en uitlijnen op grotere schermen.
- Interne navigatiechips op binnenpagina's hebben betere tap targets.

### Cards en grids

- Cards hebben mobile-first padding en gelijke hoogte waar logisch.
- Homepagekaarten gebruiken flex-opbouw zodat buttons rustiger onderaan blijven staan op tablet/desktop.
- Grids blijven mobiel enkelkoloms en krijgen pas meer kolommen op tablet/desktop.

### Placeholderblokken

- Logo-, foto- en locatieplaceholders breken tekst beter af op kleine schermen.
- Visuele placeholderblokken in hero en locatie zijn lager en rustiger op mobiel.
- Placeholderweergave is aangepast zonder nieuwe placeholderkeys toe te voegen.

### Footer

- Footer stapelt overzichtelijker op mobiel en gebruikt twee kolommen op tablet.
- Footerlinks hebben ruimere klikgebieden.

## Gecontroleerde pagina's

- `/`
- `/over-uniqara`
- `/voor-wie`
- `/hulpvragen`
- `/werkwijze`
- `/locatie`
- `/praktische-informatie`
- `/contact`
- `/privacy`

## Lichte aandacht voor later

- Visuele QA met echte screenshots op mobiele breedtes zodra definitieve fotografie beschikbaar is.
- Contactformulier opnieuw controleren zodra `CONTACT_FORM_HANDLER` echt gekoppeld wordt.
- Header opnieuw beoordelen zodra het definitieve logo de placeholder vervangt.
- Locatiepagina opnieuw beoordelen zodra echte Hooiberg- en routebeelden beschikbaar zijn.
