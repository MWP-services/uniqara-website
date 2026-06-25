"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { navigation } from "@/content/navigation";
import { routes } from "@/content/routes";
import { site } from "@/content/site";

function isActivePath(pathname: string, href: string) {
  return href === routes.home.href
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}

function NavigationLinks({
  ariaLabel,
  className = "",
  pathname,
}: {
  ariaLabel: string;
  className?: string;
  pathname: string;
}) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      {navigation.main.map((item) => {
        const isActive = isActivePath(pathname, item.href);

        return (
          <TransitionLink
            key={item.href}
            aria-current={isActive ? "page" : undefined}
            href={item.href}
            className={`flex min-h-11 items-center whitespace-nowrap rounded-pill px-3.5 py-2.5 text-[0.95rem] font-semibold leading-snug transition hover:bg-brand-green-soft hover:text-foreground active:bg-accent-blue-soft lg:text-base ${
              isActive
                ? "bg-brand-green-soft text-foreground"
                : "text-foreground"
            }`}
          >
            {item.label}
          </TransitionLink>
        );
      })}
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();
  const contactIsActive = isActivePath(pathname, routes.contact.href);

  return (
    <header className="site-header-pastel sticky top-0 z-[100] w-full max-w-[100vw] overflow-visible backdrop-blur">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-3 py-2 sm:min-h-28 sm:gap-4 sm:py-3 lg:min-h-36 xl:min-h-40">
          <TransitionLink
            href={routes.home.href}
            aria-label={`${site.name} home`}
            className="inline-flex shrink-0 items-center self-stretch rounded-soft px-1.5 transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
          >
            <LogoPlaceholder priority size="header" />
          </TransitionLink>

          <div className="hidden items-center gap-4 lg:flex">
            <NavigationLinks
              ariaLabel="Hoofdnavigatie"
              className="flex items-center gap-1.5 xl:gap-2"
              pathname={pathname}
            />
            <div className="ml-2 flex max-w-[13rem] flex-col items-end gap-1">
              <Button
                aria-current={contactIsActive ? "page" : undefined}
                href={routes.contact.href}
                className={`whitespace-nowrap ${contactIsActive ? "ring-2 ring-focus-ring/40" : ""}`}
              >
                {navigation.headerCtaLabel}
              </Button>
            </div>
          </div>

          <details className="group relative z-[100] lg:hidden">
            <summary className="min-h-11 cursor-pointer list-none rounded-pill border border-border-soft bg-[#fafcf9] px-4 py-2.5 text-sm font-semibold text-foreground shadow-card transition hover:bg-brand-green-soft">
              Menu
            </summary>
            <div className="absolute right-0 z-[100] mt-3 max-h-[calc(100vh-5.5rem)] w-[min(calc(100vw-2rem),22rem)] overflow-auto rounded-medium border border-border-soft bg-[#fafcf9] p-4 shadow-soft">
              <NavigationLinks
                ariaLabel="Mobiele navigatie"
                className="grid gap-1"
                pathname={pathname}
              />
              <Button
                aria-current={contactIsActive ? "page" : undefined}
                href={routes.contact.href}
                className="mt-3 w-full"
              >
                {navigation.headerCtaLabel}
              </Button>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
