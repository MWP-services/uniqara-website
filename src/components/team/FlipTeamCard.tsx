"use client";

import Image from "next/image";
import { useId, useState } from "react";

type FlipTeamCardProps = {
  name: string;
  role: string;
  image: string;
  backText: string;
  tags?: string[];
};

export function FlipTeamCard({
  name,
  role,
  image,
  backText,
  tags = [],
}: FlipTeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const contentId = useId();
  const paragraphs = backText.split("\n\n").filter(Boolean);

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
      className="team-flip-card group block h-full w-full min-w-0 cursor-pointer rounded-soft text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
      onClick={() => setIsFlipped((current) => !current)}
    >
      <span className="team-flip-card__scene block h-full">
        <span
          className={`team-flip-card__inner grid h-full min-h-[31rem] rounded-soft sm:min-h-[30rem] ${
            isFlipped ? "team-flip-card__inner--flipped" : ""
          }`}
        >
          <span
            aria-hidden={isFlipped}
            className="team-flip-card__face surface-card col-start-1 row-start-1 flex min-w-0 flex-col items-center overflow-hidden p-5 text-center transition-[box-shadow,border-color] group-hover:border-border-strong group-hover:shadow-soft sm:p-6"
          >
            <span className="relative block aspect-square w-full max-w-[15rem] overflow-hidden rounded-medium border border-border-soft bg-brand-green-soft shadow-card">
              <Image
                src={image}
                alt={`Portret van ${name}`}
                fill
                sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 80vw"
                className="object-cover"
              />
            </span>
            <span className="mt-6 block text-2xl font-semibold leading-tight text-foreground">
              {name}
            </span>
            <span className="text-support mt-2 block">{role}</span>
            {tags.length > 0 ? (
              <span className="mt-4 flex flex-wrap justify-center gap-2">
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
              Klik voor meer informatie
            </span>
          </span>

          <span
            id={contentId}
            aria-hidden={!isFlipped}
            className="team-flip-card__face team-flip-card__face--back surface-card col-start-1 row-start-1 flex min-w-0 flex-col overflow-hidden border-brand-green/55 bg-card p-5 sm:p-6"
          >
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
              Draai terug
            </span>
          </span>
        </span>
      </span>
    </button>
  );
}
