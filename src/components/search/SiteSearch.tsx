"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { searchEntries } from "@/content/search";

function normalize(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" />
    </svg>
  );
}

export function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const normalizedQuery = normalize(query);

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return searchEntries.slice(0, 6);
    }

    return searchEntries
      .map((entry) => {
        const haystack = normalize(`${entry.title} ${entry.description} ${entry.keywords}`);
        const title = normalize(entry.title);
        const score =
          title.includes(normalizedQuery) ? 3 :
            haystack.includes(normalizedQuery) ? 1 :
              0;

        return { entry, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
      .slice(0, 8)
      .map((item) => item.entry);
  }, [normalizedQuery]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeSearch() {
    setIsOpen(false);
    setQuery("");
  }

  return (
    <>
      <button
        aria-label="Zoeken"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-soft bg-card/75 text-foreground shadow-card transition hover:border-brand-green hover:bg-brand-green-soft focus-visible:ring-4 focus-visible:ring-focus-ring/25"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <SearchIcon className="h-5 w-5" />
      </button>

      {isOpen ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[200] bg-foreground/25 px-4 py-5 backdrop-blur-sm sm:py-10"
          role="dialog"
        >
          <div className="mx-auto max-w-2xl rounded-medium border border-border-soft bg-white p-4 shadow-soft sm:p-5">
            <div className="flex items-center gap-3">
              <SearchIcon className="h-5 w-5 shrink-0 text-muted" />
              <input
                ref={inputRef}
                aria-label="Zoek op de website"
                className="min-h-12 flex-1 rounded-soft border border-border-soft bg-card px-4 py-3 text-base text-foreground outline-none transition placeholder:italic placeholder:text-[#789084] focus:border-brand-green focus:ring-4 focus:ring-focus-ring/25"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Zoeken op onderwerp"
                type="search"
                value={query}
              />
              <button
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-foreground transition hover:bg-brand-green-soft focus-visible:ring-4 focus-visible:ring-focus-ring/25"
                onClick={closeSearch}
                type="button"
                aria-label="Zoeken sluiten"
              >
                <span aria-hidden="true" className="text-2xl leading-none">
                  x
                </span>
              </button>
            </div>

            <div className="mt-4 max-h-[min(28rem,60dvh)] overflow-y-auto">
              {results.length > 0 ? (
                <nav aria-label="Zoekresultaten" className="grid gap-2">
                  {results.map((result) => (
                    <TransitionLink
                      key={result.href}
                      className="rounded-soft border border-border-soft bg-card px-4 py-3 transition hover:border-brand-green hover:bg-brand-green-soft"
                      href={result.href}
                      onClick={closeSearch}
                    >
                      <span className="block text-sm font-semibold text-foreground">
                        {result.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted">
                        {result.description}
                      </span>
                    </TransitionLink>
                  ))}
                </nav>
              ) : (
                <p className="rounded-soft border border-border-soft bg-card px-4 py-3 text-sm text-muted">
                  Geen resultaten gevonden.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
