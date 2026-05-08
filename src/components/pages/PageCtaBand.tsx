import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import type { PageLink } from "@/content/pages";
import { sharedUi } from "@/content/site";

type PageCtaBandProps = {
  links: PageLink[];
  eyebrow?: string;
  title?: string;
  intro?: string;
};

export function PageCtaBand({
  links,
  eyebrow = sharedUi.pageCtaEyebrow,
  title = sharedUi.pageCtaTitle,
  intro = sharedUi.pageCtaIntro,
}: PageCtaBandProps) {
  return (
    <section className="bg-background py-10 sm:py-12">
      <Container>
        <Card className="grid gap-5 border-accent-coral/45 bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-muted-foreground">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              {title}
            </h2>
            {intro ? <p className="text-body mt-3">{intro}</p> : null}
          </div>
          <nav
            aria-label="Vervolgstappen"
            className="flex flex-col gap-3 sm:flex-row lg:justify-end"
          >
            {links.map((link, index) => (
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
    </section>
  );
}
