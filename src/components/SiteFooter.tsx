import Link from "next/link";
import { LogoPlaceholder } from "./LogoPlaceholder";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <LogoPlaceholder />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            Psychologiepraktijk Uniqara biedt een rustige plek voor begeleiding,
            onderzoek en behandeling in een groene omgeving.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-brand-green">Snel naar</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link className="hover:text-brand-green" href="#aanbod">
                Aanbod
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-green" href="#werkwijze">
                Werkwijze
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-green" href="#locatie">
                De Hooiberg
              </Link>
            </li>
          </ul>
        </div>
        <div id="contact">
          <h2 className="text-base font-semibold text-brand-green">Contact</h2>
          <p className="mt-4 text-sm leading-6 text-muted">
            Contactgegevens, adres en aanmeldinformatie worden later ingevuld.
          </p>
          <Link
            href="mailto:info@uniqara.nl"
            className="mt-4 inline-flex rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-deep"
          >
            Mail Uniqara
          </Link>
        </div>
      </div>
    </footer>
  );
}
