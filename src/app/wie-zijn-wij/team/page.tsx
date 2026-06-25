import type { Metadata } from "next";
import { FlipTeamCard } from "@/components/team/FlipTeamCard";
import { PageCtaBand } from "@/components/pages/PageCtaBand";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { type TeamMember, teamMembers } from "@/content/team";

export const metadata: Metadata = {
  title: "Team en behandelaars",
  description:
    "Maak kennis met de behandelaars die betrokken zijn bij Uniqara.",
  openGraph: {
    title: "Team en behandelaars",
    description:
      "Maak kennis met de behandelaars die betrokken zijn bij Uniqara.",
    siteName: "Uniqara",
    locale: "nl_NL",
    type: "website",
  },
};

export default function TeamPage() {
  const linkedInProfiles = teamMembers.filter(
    (member): member is TeamMember & { linkedinUrl: string } =>
      Boolean(member.linkedinUrl),
  );

  return (
    <main className="page-shell">
      <PageHero
        title="Team en behandelaars"
        intro="Maak kennis met de behandelaars die betrokken zijn bij Uniqara. Ieder brengt eigen expertise mee binnen diagnostiek, behandeling en jeugdhulp."
        heroVariant="connected"
        illustration={{
          alt: "Vriendelijke illustratie met dieren als beeld voor veiligheid en verbinding.",
          src: "/assets/DIEREN.png",
          tone: "turquoise",
        }}
      />

      <Section variant="surface">
        <Container>
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {teamMembers.map((member) => (
              <FlipTeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                summary={member.summary}
                image={member.image}
                imageAlt={member.imageAlt}
                initials={member.initials}
                badge={member.badge}
                backText={member.backText}
                tags={member.tags}
              />
            ))}
          </div>
          {linkedInProfiles.length > 0 ? (
            <div className="text-support mt-6 flex flex-wrap gap-3">
              {linkedInProfiles.map((member) => (
                <a
                  key={member.linkedinUrl}
                  href={member.linkedinUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex min-h-11 items-center rounded-pill border border-brand-green/35 bg-card px-4 py-2 font-semibold text-foreground shadow-card transition hover:border-border-strong hover:bg-brand-green-soft"
                >
                  LinkedIn-profiel van {member.name}
                </a>
              ))}
            </div>
          ) : null}
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
