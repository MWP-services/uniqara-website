import Link from "next/link";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { LogoPlaceholder } from "./LogoPlaceholder";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border-soft bg-white/95 backdrop-blur">
      <nav
        aria-label="Hoofdnavigatie"
        className="section-inner flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <Link href="/" aria-label={`${site.name} home`}>
          <LogoPlaceholder priority />
        </Link>
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-foreground sm:gap-3">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-border-soft hover:bg-surface"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
