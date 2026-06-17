# View Transitions Notes

## Gebruikte techniek

De site gebruikt View Transitions als progressive enhancement:

- `@view-transition { navigation: auto; }` voor browsers die cross-document view transitions ondersteunen.
- Een lichte `TransitionLink` wrapper rond interne Next.js navigatie.
- Een kleine `ViewTransitionProvider` die wacht tot de Next.js pathname is gewijzigd voordat de transition snapshot wordt afgerond.
- Geen experimentele Next.js `experimental.viewTransition` flag en geen animatie-library.

Als de browser View Transitions niet ondersteunt, of wanneer `prefers-reduced-motion: reduce` actief is, blijft navigatie normaal werken.

## Aangepaste bestanden

- `src/app/globals.css`
  - root view-transition animaties
  - keyframes voor subtiele fade/slide
  - reduced-motion override
- `src/components/ui/TransitionLink.tsx`
  - progressive-enhancement wrapper voor interne links
- `src/components/ui/ViewTransitionProvider.tsx`
  - houdt client-side route changes stabiel binnen `document.startViewTransition()`
- `src/app/layout.tsx`
  - plaatst de provider rond header, pagina-inhoud en footer
- `src/components/ui/Button.tsx`
  - gebruikt `TransitionLink` voor interne knoplinks
- `src/components/layout/Header.tsx`
  - gebruikt `TransitionLink` voor interne navigatielinks
- `src/components/layout/Footer.tsx`
  - gebruikt `TransitionLink` voor interne footernavigatie

## Animatie aanpassen

De timing en beweging staan in `src/app/globals.css`:

- `::view-transition-old(root)`
- `::view-transition-new(root)`
- `@keyframes pageViewTransitionOut`
- `@keyframes pageViewTransitionIn`

Aanbevolen bandbreedte:

- fade-out: 150ms tot 220ms
- fade-in: 240ms tot 350ms
- verticale beweging: maximaal 8px tot 12px

Houd de beweging subtiel, zodat de site professioneel en rustig blijft.

## Animatie uitzetten

Opties:

1. Verwijder of comment de `@view-transition` en `::view-transition-*` regels in `src/app/globals.css`.
2. Vervang `TransitionLink` imports weer door `next/link` voor componenten waar geen client-side view transition gewenst is.
3. Zet in het besturingssysteem `prefers-reduced-motion` aan; de CSS maakt de animatie dan vrijwel direct.

## Browserbeperkingen

- View Transitions zijn een progressive enhancement. Browsers zonder ondersteuning navigeren zonder animatie.
- Externe links, `mailto:` links, hashlinks op dezelfde pagina, downloads en links met `target="_blank"` worden niet door `TransitionLink` geanimeerd.
- De Next.js React ViewTransition-integratie bestaat in Next 16, maar vereist `experimental.viewTransition`. Die flag is hier bewust niet gebruikt voor productiezekerheid.
- Shared element transitions zijn bewust niet toegevoegd. De root-overgang is stabieler voor deze site en voorkomt conflicten met de bestaande team flipcard-animatie.
