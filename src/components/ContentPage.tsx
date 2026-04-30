import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { PageContent } from "@/content/pages";

type ContentPageProps = {
  page: PageContent;
};

export function ContentPage({ page }: ContentPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="border-b border-border-soft bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
            <p className="text-sm font-semibold text-brand-green">
              {page.title}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-brand-green sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">{page.intro}</p>
          </div>
        </section>

        <section className="bg-surface py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-2">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[8px] border border-border-soft bg-white p-6"
              >
                <h2 className="text-2xl font-semibold text-brand-green">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.links ? (
                  <nav aria-label={`Links bij ${section.title}`} className="mt-5">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex text-sm font-semibold text-brand-green hover:text-brand-green-deep"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-12">
          <nav
            aria-label="Vervolgstappen"
            className="mx-auto flex max-w-6xl flex-col gap-3 px-5 sm:flex-row sm:px-8"
          >
            {page.ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="inline-flex justify-center rounded-full border border-border-soft px-6 py-3 text-sm font-semibold text-brand-green transition hover:bg-surface"
              >
                {cta.label}
              </Link>
            ))}
          </nav>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
