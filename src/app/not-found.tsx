import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { fallbacks } from "@/content/fallbacks";

export const metadata: Metadata = {
  title: "Pagina niet gevonden | Uniqara",
  description:
    "De gevraagde pagina kon niet worden gevonden. Ga terug naar de homepage, het hulpaanbod of de contactpagina van Uniqara.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const content = fallbacks.notFound;

  return (
    <main className="page-shell">
      <Section variant="surface">
        <Container size="narrow">
          <Card className="text-center">
            <p className="text-sm font-semibold uppercase text-muted-foreground">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              {content.title}
            </h1>
            <p className="text-body mx-auto mt-4 max-w-2xl">{content.intro}</p>
            {content.note ? (
              <p className="text-support mx-auto mt-4 max-w-2xl break-words">
                {content.note}
              </p>
            ) : null}
            <nav
              aria-label="Vervolgroutes vanaf foutpagina"
              className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"
            >
              {content.links.map((link, index) => (
                <Button
                  key={link.href}
                  href={link.href}
                  variant={index === 0 ? "primary" : "secondary"}
                >
                  {link.label}
                </Button>
              ))}
            </nav>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
