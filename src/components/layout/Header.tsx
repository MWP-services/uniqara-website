"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";
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
          <Link
            key={item.href}
            aria-current={isActive ? "page" : undefined}
            href={item.href}
            className={`flex min-h-11 items-center whitespace-nowrap rounded-pill px-3.5 py-2.5 text-[0.95rem] font-semibold leading-snug transition hover:bg-brand-green-soft hover:text-foreground active:bg-accent-yellow-soft lg:text-base ${
              isActive
                ? "bg-brand-green-soft text-foreground"
                : "text-foreground"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const contactIsActive = isActivePath(pathname, routes.contact.href);

  return (
    <>
      <header className="site-header-pastel sticky top-0 z-[1000] w-full max-w-[100vw] overflow-visible backdrop-blur">
        <Container>
          <div className="flex min-h-20 items-center justify-between gap-3 py-2 sm:min-h-24 sm:gap-4 sm:py-3 lg:min-h-32">
            <Link
              href={routes.home.href}
              aria-label={`${site.name} home`}
              className="inline-flex shrink-0 items-center self-stretch rounded-soft px-1.5 transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
            >
              <LogoPlaceholder priority size="header" />
            </Link>

            <div className="hidden items-center gap-4 lg:flex">
              <NavigationLinks
                ariaLabel="Hoofdnavigatie"
                className="flex items-center gap-1.5 xl:gap-2"
                pathname={pathname}
              />
              <Button
                aria-current={contactIsActive ? "page" : undefined}
                href={routes.contact.href}
                className={`ml-2 whitespace-nowrap ${contactIsActive ? "ring-2 ring-focus-ring/40" : ""}`}
              >
                {navigation.headerCtaLabel}
              </Button>
            </div>

            <button
              type="button"
              aria-controls="mobile-navigation-panel"
              aria-expanded={mobileMenuIsOpen}
              className="min-h-11 cursor-pointer rounded-pill border border-border-soft bg-[#fafcf9] px-4 py-2.5 text-sm font-semibold text-foreground shadow-card transition hover:bg-brand-green-soft lg:hidden"
              onClick={() => setMobileMenuIsOpen((isOpen) => !isOpen)}
            >
              Menu
            </button>
          </div>
        </Container>
      </header>

      {mobileMenuIsOpen ? (
        <div
          id="mobile-navigation-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobiele navigatie"
          className="lg:hidden"
          style={{
            background: "#fafcf9",
            inset: 0,
            isolation: "isolate",
            overflowY: "auto",
            padding:
              "max(1rem, env(safe-area-inset-top)) 1rem max(1rem, env(safe-area-inset-bottom))",
            position: "fixed",
            transform: "translateZ(0)",
            WebkitOverflowScrolling: "touch",
            zIndex: 2147483647,
          }}
        >
          <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-3 py-2">
            <Link
              href={routes.home.href}
              aria-label={`${site.name} home`}
              className="inline-flex shrink-0 items-center rounded-soft px-1.5 transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              <LogoPlaceholder priority size="header" />
            </Link>
            <button
              type="button"
              className="min-h-11 rounded-pill border border-border-soft bg-white px-4 py-2.5 text-sm font-semibold text-foreground shadow-card transition hover:bg-brand-green-soft"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              Sluit
            </button>
          </div>

          <div
            className="mx-auto mt-6 max-w-6xl rounded-medium border border-border-soft bg-white p-4 shadow-soft"
            onClickCapture={(event) => {
              if (
                event.target instanceof Element &&
                event.target.closest("a")
              ) {
                setMobileMenuIsOpen(false);
              }
            }}
          >
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
        </div>
      ) : null}
    </>
  );
}
