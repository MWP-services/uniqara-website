import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";
import { navigation } from "@/content/navigation";
import { routes } from "@/content/routes";
import { site } from "@/content/site";

function NavigationLinks({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Hoofdnavigatie" className={className}>
      {navigation.main.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-pill px-3 py-2.5 text-sm font-semibold leading-snug text-foreground transition hover:bg-surface hover:text-brand-green"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-soft bg-white/95 backdrop-blur">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-3 py-3 sm:min-h-24 sm:gap-4">
          <Link href={routes.home.href} aria-label={`${site.name} home`}>
            <LogoPlaceholder priority />
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <NavigationLinks className="flex items-center gap-1" />
            <Button href={routes.contact.href} className="ml-2">
              Contact
            </Button>
          </div>

          <details className="group relative lg:hidden">
            <summary className="min-h-11 cursor-pointer list-none rounded-pill border border-border-soft bg-white px-4 py-3 text-sm font-semibold text-brand-green shadow-card transition hover:bg-surface">
              Menu
            </summary>
            <div className="absolute right-0 z-40 mt-3 max-h-[calc(100vh-7rem)] w-[min(88vw,22rem)] overflow-auto rounded-medium border border-border-soft bg-white p-4 shadow-soft">
              <NavigationLinks className="grid gap-1" />
              <Button href={routes.contact.href} className="mt-3 w-full">
                Contact
              </Button>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
