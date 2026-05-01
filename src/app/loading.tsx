import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { fallbacks } from "@/content/fallbacks";

export default function Loading() {
  const content = fallbacks.loading;

  return (
    <main className="page-shell" aria-busy="true" aria-live="polite">
      <Section variant="surface">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-brand-green">
                {content.eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl text-3xl font-semibold text-brand-green sm:text-4xl">
                {content.title}
              </h1>
              <p className="text-body mt-4 max-w-2xl">{content.intro}</p>
            </div>
            <div className="surface-card border-dashed p-5">
              <div className="h-3 w-28 rounded-pill bg-brand-green-soft" />
              <div className="mt-5 h-4 w-full rounded-pill bg-muted" />
              <div className="mt-3 h-4 w-5/6 rounded-pill bg-muted" />
              <div className="mt-3 h-4 w-2/3 rounded-pill bg-muted" />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
