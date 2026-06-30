"use client";

import {
  type KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { disclaimerParagraphs } from "@/content/disclaimer";

export const DISCLAIMER_STORAGE_KEY = "uniqara_disclaimer_accepted_v1";

function focusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled"));
}

function subscribeToDisclaimerAcceptance(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("uniqara-disclaimer-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("uniqara-disclaimer-change", onStoreChange);
  };
}

function getDisclaimerSnapshot() {
  try {
    return localStorage.getItem(DISCLAIMER_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getServerDisclaimerSnapshot() {
  return true;
}

export function FirstVisitDisclaimer() {
  const dialogRef = useRef<HTMLDivElement>(null);
  const acceptButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [acceptedInMemory, setAcceptedInMemory] = useState(false);
  const hasAccepted = useSyncExternalStore(
    subscribeToDisclaimerAcceptance,
    getDisclaimerSnapshot,
    getServerDisclaimerSnapshot,
  );
  const isOpen = !(hasAccepted || acceptedInMemory);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    acceptButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function acceptDisclaimer() {
    try {
      localStorage.setItem(DISCLAIMER_STORAGE_KEY, "true");
    } catch {
      // De modal mag ook sluiten wanneer storage in de browser is geblokkeerd.
    }

    setAcceptedInMemory(true);
    window.dispatchEvent(new Event("uniqara-disclaimer-change"));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !dialogRef.current) {
      return;
    }

    const elements = focusableElements(dialogRef.current);
    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];

    if (!firstElement || !lastElement) {
      event.preventDefault();
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[200] grid min-h-dvh place-items-center bg-foreground/32 p-4 backdrop-blur-[1px] motion-safe:animate-[disclaimerFade_180ms_ease-out]">
      <div
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-modal="true"
        className="max-h-[min(42rem,calc(100dvh-2rem))] w-full max-w-2xl overflow-y-auto rounded-medium border border-border-soft bg-background p-5 shadow-soft outline-none sm:p-7"
        onKeyDown={handleKeyDown}
        role="dialog"
        tabIndex={-1}
      >
        <h2 id={titleId} className="text-2xl font-semibold text-foreground">
          Disclaimer
        </h2>
        <div className="mt-4 space-y-4">
          {disclaimerParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-body">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            ref={acceptButtonRef}
            className="primary-button inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-pill bg-brand-green px-5 py-3 text-center text-sm font-semibold leading-snug text-white shadow-card transition-[background-color,border-color,box-shadow,color,transform] hover:-translate-y-0.5 hover:bg-brand-green-deep focus-visible:ring-4 focus-visible:ring-focus-ring/25 active:bg-brand-green-deep"
            onClick={acceptDisclaimer}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
            Akkoord en doorgaan
          </button>
        </div>
      </div>
    </div>
  );
}
