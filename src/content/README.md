# Content aanpassen

De website gebruikt centrale contentbestanden in `src/content`. Daardoor kunnen teksten worden aangepast zonder de componentcode te wijzigen.

- `site.ts`: sitenaam, merkbeschrijving en SEO-basisteksten.
- `navigation.ts`: hoofdmenu en footer-links.
- `home.ts`: homepage-hero, werkwijze, CTA's en locatieblok.
- `services.ts`: aanbod en hulpvragen.
- `contact.ts`: contactgegevens, adres en locatieomschrijving.
- `pages.ts`: placeholders voor praktische informatie en privacy.
- `faq.ts`: veelgestelde vragen.
- `placeholders.ts`: centrale placeholderteksten met vaste sleutels.

Laat componenten vooral in `src/components` en `src/app` staan. Pas voor tekstwijzigingen eerst de bestanden hierboven aan.

Ontbrekende input staat ook centraal geregistreerd in `PLACEHOLDER_REGISTRY.md` en `TODO_USER.md` in de projectroot.
