# Content aanpassen

De website gebruikt centrale contentbestanden in `src/content`. Daardoor kunnen teksten worden aangepast zonder de componentcode te wijzigen.

- `site.ts`: sitenaam, merkbeschrijving, SEO-basisteksten en gedeelde UI-copy.
- `seo.ts`: centrale metadata per pagina, inclusief titels, descriptions en Open Graph-basis.
- `navigation.ts`: hoofdmenu en footer-links.
- `home.ts`: homepage-hero, werkwijze, CTA's en locatieblok.
- `services.ts`: aanbod en hulpvragen.
- `contact.ts`: contactgegevens, adres, locatieomschrijving en formulierplaceholder.
- `pages.ts`: binnenpagina's, CTA's, secties en placeholders voor praktische informatie en privacy.
- `routes.ts`: vaste routeconfig voor interne links.
- `faq.ts`: veelgestelde vragen.
- `placeholders.ts`: centrale placeholderteksten met vaste sleutels.

Laat componenten vooral in `src/components` en `src/app` staan. Pas voor tekstwijzigingen eerst de bestanden hierboven aan.

Ontbrekende input staat ook centraal geregistreerd in `PLACEHOLDER_REGISTRY.md` en `TODO_USER.md` in de projectroot.
