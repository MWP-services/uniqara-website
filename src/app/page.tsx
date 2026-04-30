import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const supportAreas = [
  {
    title: "Begeleiding",
    text: "Ruimte om stil te staan bij klachten, patronen en vragen die aandacht nodig hebben.",
  },
  {
    title: "Onderzoek",
    text: "Heldere diagnostiek met oog voor het hele verhaal achter gedrag en ontwikkeling.",
  },
  {
    title: "Behandeling",
    text: "Een zorgvuldig traject dat aansluit bij leeftijd, gezinssituatie en hulpvraag.",
  },
];

const pathways = [
  "Voor ouders en kinderen",
  "Voor jongeren",
  "Voor verwijzers",
  "Praktische informatie",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="border-b border-border-soft bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full bg-accent-yellow px-4 py-2 text-sm font-semibold text-foreground">
                Nieuwe psychologiepraktijk in het groen
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-brand-green sm:text-5xl">
                Uniqara biedt rust, aandacht en professionele psychologische
                zorg.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Een warme praktijkplek waar kinderen, jongeren en gezinnen zich
                veilig mogen voelen. In een landelijke omgeving, met ruimte om
                zorgvuldig te kijken naar wat nodig is.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#aanbod"
                  className="inline-flex justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-deep"
                >
                  Bekijk het aanbod
                </Link>
                <Link
                  href="#locatie"
                  className="inline-flex justify-center rounded-full border border-border-soft px-6 py-3 text-sm font-semibold text-brand-green transition hover:bg-surface"
                >
                  Ontdek De Hooiberg
                </Link>
              </div>
            </div>
            <div className="rounded-[8px] border border-border-soft bg-surface p-6 shadow-sm">
              <div className="rounded-[8px] border border-border-soft bg-white p-5">
                <p className="text-sm font-semibold uppercase text-brand-green">
                  Beeldplaceholder
                </p>
                <p className="mt-3 text-2xl font-semibold leading-snug text-foreground">
                  Hooiberg, erf, bomen en zachte natuurbeelden.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-3" aria-hidden="true">
                  <div className="h-24 rounded-[8px] bg-surface-strong" />
                  <div className="h-24 rounded-[8px] bg-accent-yellow" />
                  <div className="h-24 rounded-[8px] bg-brand-green" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="aanbod" className="bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-brand-green">
                Zorg met duidelijke stappen
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Korte teksten, heldere routes en rustige keuzes helpen bezoekers
                snel te vinden wat bij hun vraag past.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {supportAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-[8px] border border-border-soft bg-white p-6"
                >
                  <h3 className="text-xl font-semibold text-brand-green">
                    {area.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted">{area.text}</p>
                  <Link
                    href="#contact"
                    className="mt-6 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-deep"
                  >
                    Meer informatie
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="werkwijze" className="border-y border-border-soft bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold text-brand-green">
                Warm, rustig en professioneel
              </h2>
              <p className="mt-4 leading-7 text-muted">
                De site krijgt per onderwerp een eigen vervolgpagina, zodat de
                homepage licht en overzichtelijk blijft.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {pathways.map((item) => (
                <Link
                  key={item}
                  href="#contact"
                  className="rounded-[8px] border border-border-soft bg-surface px-5 py-4 font-semibold text-foreground transition hover:border-brand-green hover:bg-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="locatie" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="rounded-[8px] border border-border-soft bg-surface p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold text-brand-green">
                    De Hooiberg als rustige praktijkplek
                  </h2>
                  <p className="mt-4 leading-7 text-muted">
                    De locatiebeleving mag straks voelbaar worden door echte
                    beelden van groen, erf en landelijke stilte. Voor nu is de
                    structuur alvast voorbereid.
                  </p>
                </div>
                <div className="rounded-[8px] border border-border-soft bg-white p-5">
                  <p className="text-sm font-semibold uppercase text-brand-green">
                    Locatieblok
                  </p>
                  <p className="mt-3 text-lg leading-7 text-muted">
                    Plek voor adres, route, parkeren en een zachte introductie
                    op de praktijkruimte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
