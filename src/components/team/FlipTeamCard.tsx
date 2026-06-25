"use client";

import Image from "next/image";
import { type KeyboardEvent, useId, useState } from "react";

type FlipTeamCardProps = {
  name: string;
  role: string;
  summary: string;
  backText: string;
  image?: string;
  imageAlt?: string;
  initials?: string;
  badge?: string;
  tags?: string[];
};

export function FlipTeamCard({
  name,
  role,
  summary,
  image,
  imageAlt,
  initials,
  badge,
  backText,
  tags = [],
}: FlipTeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const contentId = useId();
  const paragraphs = backText.split("\n\n").filter(Boolean);
  const flipCardClassName = `team-flip-card group block h-full w-full min-w-0 cursor-pointer rounded-soft text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus-ring ${
    isFlipped ? "is-flipped" : ""
  }`;
  const toggleCard = () => setIsFlipped((current) => !current);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard();
    }
  }

  return (
    <button
      type="button"
      aria-controls={contentId}
      aria-expanded={isFlipped}
      aria-label={
        isFlipped
          ? `Draai de kaart van ${name} terug`
          : `Lees meer over ${name}`
      }
      aria-pressed={isFlipped}
      className={flipCardClassName}
      onClick={toggleCard}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <span className="team-flip-card__scene block h-full">
        <span
          className={`team-flip-card__inner block h-full min-h-[43rem] rounded-soft md:min-h-[41rem] lg:min-h-[39rem] ${
            isFlipped ? "team-flip-card__inner--flipped" : ""
          }`}
        >
          <span
            aria-hidden={isFlipped}
            className="team-flip-card__face team-flip-card__face--front flex min-w-0 flex-col overflow-hidden p-0 text-left transition-[box-shadow,border-color] group-hover:border-border-strong group-hover:shadow-soft"
          >
            <span className="team-flip-card__visual grid min-h-56 w-full place-items-center overflow-hidden p-6">
              {image ? (
                <Image
                  src={image}
                  alt={imageAlt ?? `Portret van ${name}`}
                  width={200}
                  height={200}
                  sizes="200px"
                  className="h-40 w-40 rounded-pill border border-border-soft object-cover shadow-card sm:h-44 sm:w-44"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="m-auto inline-flex h-28 w-28 items-center justify-center rounded-pill border border-brand-green/40 bg-card text-5xl font-semibold text-foreground shadow-card"
                >
                  {initials ?? name.slice(0, 1)}
                </span>
              )}
            </span>
            <span className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="block text-2xl font-semibold leading-tight text-foreground">
                {name}
              </span>
              <span className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-support block font-semibold">{role}</span>
                {badge ? (
                  <span className="rounded-pill border border-brand-green/35 bg-brand-green-soft px-3 py-1 text-xs font-semibold text-foreground">
                    {badge}
                  </span>
                ) : null}
              </span>
              <span className="mt-4 block text-base leading-7 text-muted">
                {summary}
              </span>
              {tags.length > 0 ? (
                <span className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill border border-brand-green/35 bg-brand-green-soft px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              ) : null}
              <span className="mt-auto block pt-6 text-sm font-semibold text-brand-green-deep">
                Klik op de kaart voor meer informatie
              </span>
            </span>
          </span>

          <span
            id={contentId}
            aria-hidden={!isFlipped}
            className="team-flip-card__face team-flip-card__face--back flex min-w-0 flex-col overflow-y-auto p-5 sm:p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Meer informatie
            </span>
            <span className="block text-2xl font-semibold leading-tight text-foreground">
              {name}
            </span>
            <span className="text-support mt-2 block font-semibold">{role}</span>
            <span className="mt-5 block space-y-3">
              {paragraphs.map((paragraph) => (
                <span key={paragraph} className="text-body block">
                  {paragraph}
                </span>
              ))}
            </span>
            <span className="mt-auto block pt-6 text-sm font-semibold text-brand-green-deep">
              Klik opnieuw om terug te draaien
            </span>
          </span>
        </span>
      </span>
    </button>
  );
}
