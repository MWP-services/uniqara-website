import type { Metadata } from "next";
import { FlipTeamCard } from "@/components/team/FlipTeamCard";
import { PageCtaBand } from "@/components/pages/PageCtaBand";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { teamMembers } from "@/content/team";

export const metadata: Metadata = {
  title: "Team en behandelaren",
  description:
    "Maak kennis met de behandelaren die betrokken zijn bij Uniqara.",
  openGraph: {
    title: "Team en behandelaren",
    description:
      "Maak kennis met de behandelaren die betrokken zijn bij Uniqara.",
    siteName: "Uniqara",
    locale: "nl_NL",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <main className="page-shell">
      <PageHero
        title="Team en behandelaren"
        intro="Maak kennis met de behandelaren die betrokken zijn bij Uniqara. Ieder brengt eigen expertise mee binnen diagnostiek, behandeling en jeugdhulp."
        heroVariant="connected"
        illustration={{
          alt: "Vriendelijke illustratie met dieren als beeld voor veiligheid en verbinding.",
          src: "/assets/DIEREN.jpg",
          tone: "turquoise",
        }}
      />

      <Section variant="surface">
        <Container>
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <FlipTeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                backText={member.backText}
                tags={member.tags}
              />
            ))}
          </div>
        </Container>
      </Section>

      <PageCtaBand
        title="Wil je weten welke hulp passend is?"
        intro="Neem contact op om kort te bespreken wat er speelt en welke vervolgstap mogelijk is."
        links={[
          { label: "Neem contact op", href: "/contact" },
          { label: "Bekijk hulpaanbod", href: "/hulpaanbod" },
        ]}
      />
    </main>
  );
}
