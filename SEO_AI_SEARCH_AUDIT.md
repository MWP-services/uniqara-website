# SEO en AI-search audit

Datum: 10 juli 2026

## Direct aangepast

- Productiedomein ingesteld als metadata-basis: `https://uniqara.nl`.
- Canonical URLs toegevoegd via de Next.js metadata API.
- Open Graph URLs aangevuld.
- Sitemap `lastModified` bijgewerkt naar 10 juli 2026.
- LocalBusiness/MedicalBusiness structured data opgeschoond:
  - postcode en plaats gescheiden;
  - `hasMap`, `areaServed` en `contactPoint` toegevoegd;
  - placeholder-`sameAs` verwijderd zolang er geen publieke profiel-URLs zijn;
  - telefoonnummer niet in JSON-LD gezet omdat het bewust met sterretjes wordt getoond.
- `public/llms.txt` toegevoegd als compacte bron voor AI-tools die dit bestand lezen.

## Aanbevolen vervolgstappen voor Google Search

- Verifieer `https://uniqara.nl` in Google Search Console.
- Dien `https://uniqara.nl/sitemap.xml` in en vraag herindexering aan voor home, contact, locatie, hulpaanbod en wachttijden.
- Controleer met de Rich Results Test of de Organization/LocalBusiness JSON-LD zonder fouten wordt gelezen.
- Maak of beheer een Google Business Profile met exact dezelfde naam, adresgegevens, openingstijden, website en categorie.
- Voeg alleen publieke profiel-URLs toe aan `sameAs` wanneer die echt bestaan en inhoudelijk bij Uniqara horen.
- Breid FAQ-content uit met concrete vragen die bezoekers echt stellen, bijvoorbeeld over aanmelden, vergoeding, verwijzing, wachttijd, locatie en verschil tussen speltherapie/kindertherapie.
- Maak meta descriptions per belangrijke pagina specifieker rond zoekintentie en locatie, bijvoorbeeld "speltherapie Ouderkerk aan den IJssel", "kindertherapie Krimpenerwaard" en "psycholoog jeugd".

## Aanbevolen vervolgstappen voor AI-search

- Houd contactgegevens, adres, wachttijden en aanbod consequent op alle pagina's en in structured data.
- Laat `robots.txt` belangrijke pagina's en assets crawlen; de huidige configuratie staat crawling toe.
- Sta zoekgerichte AI-crawlers toe zolang zichtbaarheid gewenst is. OpenAI onderscheidt onder meer `OAI-SearchBot`, `ChatGPT-User` en `GPTBot`; Perplexity gebruikt onder meer `PerplexityBot` en `Perplexity-User`.
- Publiceer duidelijke, feitelijke pagina's met vraag-antwoordblokken. AI-antwoorden citeren vaker compacte, goed gestructureerde tekst die direct antwoord geeft.
- Vermijd claims over extra technische bescherming van formulierverzending, tenzij die aantoonbaar ingericht en gedocumenteerd zijn.
- Houd `llms.txt` actueel wanneer aanbod, wachttijden, adres of contactgegevens wijzigen.

## Bronnen

- Google Search Central: SEO Starter Guide, title links, meta snippets, sitemaps, robots.txt, structured data en LocalBusiness.
- OpenAI crawler documentation: `https://platform.openai.com/docs/bots`.
- Perplexity crawler documentation: `https://www.perplexity.ai/perplexitybot`.
