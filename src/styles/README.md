# Design system basis

De belangrijkste visuele keuzes staan in `src/app/globals.css`.

- Kleuren: CSS-variabelen in `:root`, zoals `--background`, `--foreground`, `--brand-green`, `--accent-blue`, `--surface` en `--border-soft`.
- Tailwind tokens: dezelfde waarden worden in `@theme inline` beschikbaar gemaakt voor classes zoals `bg-surface`, `text-brand-green` en `border-border-soft`.
- Typografie: globale heading-stijlen en utilities zoals `.text-display`, `.text-heading`, `.text-body` en `.text-support`.
- Layout: `.section-shell`, `.section-inner` en `.content-measure` zorgen voor consistente witruimte en maximale breedte.
- Oppervlakken: `.surface-card` en `.surface-panel` leggen zachte kaders, afgeronde hoeken en subtiele schaduw vast.
- Focus: `--focus-ring` bepaalt de toegankelijke focusstijl voor links en knoppen.

Kleurgevoel: fris wit, bijna-zwarte tekst, natuurlijk groen, zacht blauw en gedempte neutrale tinten. Er is bewust geen oranje gebruikt.
