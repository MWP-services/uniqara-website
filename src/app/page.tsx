import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { contact } from "@/content/contact";
import { faq } from "@/content/faq";
import { home } from "@/content/home";
import { pages } from "@/content/pages";
import { routes } from "@/content/routes";
import { services } from "@/content/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="border-b border-border-soft bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full bg-accent-yellow px-4 py-2 text-sm font-semibold text-foreground">
                {home.hero.eyebrow}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-brand-green sm:text-5xl">
                {home.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                {home.hero.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={home.hero.primaryCta.href}
                  className="inline-flex justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-deep"
                >
                  {home.hero.primaryCta.label}
                </Link>
                <Link
                  href={home.hero.secondaryCta.href}
                  className="inline-flex justify-center rounded-full border border-border-soft px-6 py-3 text-sm font-semibold text-brand-green transition hover:bg-surface"
                >
                  {home.hero.secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="rounded-[8px] border border-border-soft bg-surface p-6 shadow-sm">
              <div className="rounded-[8px] border border-border-soft bg-white p-5">
                <p className="text-sm font-semibold uppercase text-brand-green">
                  {home.hero.imagePlaceholderLabel}
                </p>
                <p className="mt-3 text-2xl font-semibold leading-snug text-foreground">
                  {home.hero.imagePlaceholderText}
                </p>
                {/* HERO_IMAGE_HOOIBERG wordt later vervangen door echte locatie- of natuurbeelden. */}
                <div className="mt-8 grid grid-cols-3 gap-3" aria-hidden="true">
                  <div className="h-24 rounded-[8px] bg-surface-strong" />
                  <div className="h-24 rounded-[8px] bg-accent-yellow" />
                  <div className="h-24 rounded-[8px] bg-brand-green" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-brand-green">
                {pages.overUniqara.title}
              </h2>
              <p className="mt-4 leading-7 text-muted">
                {pages.overUniqara.intro}
              </p>
            </div>
            <nav
              aria-label="Introductie links"
              className="grid gap-3 sm:grid-cols-2"
            >
              <Link
                href={routes.overUniqara.href}
                className="rounded-[8px] border border-border-soft bg-surface px-5 py-4 font-semibold text-foreground transition hover:border-brand-green hover:bg-white"
              >
                Meer over Uniqara
              </Link>
              <Link
                href={routes.werkwijze.href}
                className="rounded-[8px] border border-border-soft bg-surface px-5 py-4 font-semibold text-foreground transition hover:border-brand-green hover:bg-white"
              >
                Lees de werkwijze
              </Link>
            </nav>
          </div>
        </section>

        <section id="voor-wie" className="border-y border-border-soft bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-brand-green">
                {pages.voorWie.title}
              </h2>
              <p className="mt-4 leading-7 text-muted">{pages.voorWie.intro}</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {pages.voorWie.sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[8px] border border-border-soft bg-white p-5"
                >
                  <h3 className="font-semibold text-brand-green">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {section.body[0]}
                  </p>
                </article>
              ))}
            </div>
            <Link
              href={routes.voorWie.href}
              className="mt-8 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-deep"
            >
              Bekijk alle doelgroepen
            </Link>
          </div>
        </section>

        <section id="aanbod" className="bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-brand-green">
                {services.heading}
              </h2>
              <p className="mt-4 leading-7 text-muted">
                {services.intro}
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {services.items.map((area) => (
                <article
                  key={area.title}
                  className="rounded-[8px] border border-border-soft bg-white p-6"
                >
                  <h3 className="text-xl font-semibold text-brand-green">
                    {area.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted">{area.summary}</p>
                  <Link
                    href={area.href}
                    className="mt-6 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-deep"
                  >
                    Meer informatie
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hulpvragen" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-brand-green">
                {pages.hulpvragen.title}
              </h2>
              <p className="mt-4 leading-7 text-muted">
                {pages.hulpvragen.intro}
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {services.helpQuestions.map((question) => (
                <article
                  key={question.title}
                  className="rounded-[8px] border border-border-soft bg-surface p-5"
                >
                  <h3 className="font-semibold text-foreground">
                    {question.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {question.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="werkwijze" className="border-y border-border-soft bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold text-brand-green">
                {home.approach.heading}
              </h2>
              <p className="mt-4 leading-7 text-muted">
                {home.approach.intro}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {home.approach.pathways.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[8px] border border-border-soft bg-surface px-5 py-4 font-semibold text-foreground transition hover:border-brand-green hover:bg-white"
                >
                  {item.label}
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
                    {home.location.heading}
                  </h2>
                  <p className="mt-4 leading-7 text-muted">
                    {home.location.intro}
                  </p>
                </div>
                <div className="rounded-[8px] border border-border-soft bg-white p-5">
                  <p className="text-sm font-semibold uppercase text-brand-green">
                    {home.location.cardLabel}
                  </p>
                  <p className="mt-3 text-lg leading-7 text-muted">
                    {home.location.cardText}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {contact.locationDescription}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {contact.address.street}
                  </p>
                  <p className="text-sm leading-6 text-muted">
                    {contact.routeNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="praktisch" className="border-y border-border-soft bg-surface py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-2">
            {[pages.praktischeInformatie, pages.privacy].map((page) => (
              <article
                key={page.title}
                id={page.title === pages.privacy.title ? "privacy" : undefined}
                className="rounded-[8px] border border-border-soft bg-white p-6"
              >
                <h2 className="text-2xl font-semibold text-brand-green">
                  {page.title}
                </h2>
                <p className="mt-4 leading-7 text-muted">{page.intro}</p>
                <Link
                  href={
                    page.routeKey === "privacy"
                      ? routes.privacy.href
                      : routes.praktischeInformatie.href
                  }
                  className="mt-5 inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-deep"
                >
                  Lees verder
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-brand-green">
                {faq.heading}
              </h2>
              <p className="mt-4 leading-7 text-muted">{faq.intro}</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {faq.items.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[8px] border border-border-soft bg-surface p-5"
                >
                  <h3 className="font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border-soft bg-surface py-14">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="rounded-[8px] border border-border-soft bg-white p-6 sm:p-8">
              <h2 className="text-3xl font-semibold text-brand-green">
                Contact opnemen
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted">
                De definitieve contactgegevens volgen nog. De contactpagina staat
                alvast klaar met alle placeholders op een vaste plek.
              </p>
              <Link
                href={routes.contact.href}
                className="mt-6 inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-deep"
              >
                Naar contact
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
