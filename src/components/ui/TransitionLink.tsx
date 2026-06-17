"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import { useViewTransitionNavigation } from "@/components/ui/ViewTransitionProvider";

type TransitionLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  children: ReactNode;
  href: string;
  prefetch?: boolean | null;
  replace?: boolean;
  scroll?: boolean;
};

function shouldUseViewTransition({
  event,
  href,
}: {
  event: MouseEvent<HTMLAnchorElement>;
  href: string;
}) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return false;
  }

  const linkTarget = event.currentTarget.getAttribute("target");

  if (linkTarget && linkTarget !== "_self") {
    return false;
  }

  if (event.currentTarget.hasAttribute("download")) {
    return false;
  }

  if (
    !document.startViewTransition ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return false;
  }

  const url = new URL(href, window.location.href);

  if (url.origin !== window.location.origin || !/^https?:$/.test(url.protocol)) {
    return false;
  }

  if (
    url.pathname === window.location.pathname &&
    url.search === window.location.search &&
    url.hash
  ) {
    return false;
  }

  return true;
}

export function TransitionLink({
  children,
  href,
  onClick,
  replace = false,
  scroll,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const runViewTransition = useViewTransitionNavigation();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (!shouldUseViewTransition({ event, href })) {
      return;
    }

    event.preventDefault();

    runViewTransition(() => {
      if (replace) {
        router.replace(href, { scroll });
      } else {
        router.push(href, { scroll });
      }
    });
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      replace={replace}
      scroll={scroll}
      {...props}
    >
      {children}
    </Link>
  );
}
