import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageLink } from "@/content/pages";

type RouteOverviewItem = PageLink & {
  description: string;
};

type RouteOverviewSectionProps = {
  intro: string;
  items: RouteOverviewItem[];
  title: string;
};

export function RouteOverviewSection({
  intro,
  items,
  title,
}: RouteOverviewSectionProps) {
  return (
    <Section variant="surface">
      <Container>
        <SectionHeading intro={intro} title={title} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.href} className="flex flex-col">
              <h3 className="font-semibold text-foreground">{item.label}</h3>
              <p className="text-support mt-3">{item.description}</p>
              <Button
                href={item.href}
                className="mt-5 w-full justify-start sm:mt-auto"
                variant="ghost"
              >
                Bekijk pagina
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
