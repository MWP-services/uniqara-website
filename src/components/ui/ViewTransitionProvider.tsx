"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";

type ViewTransition = {
  finished: Promise<void>;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (
    callback: () => void | Promise<void>,
  ) => ViewTransition;
};

type ViewTransitionContextValue = {
  runViewTransition: (navigate: () => void) => void;
};

const ViewTransitionContext = createContext<ViewTransitionContextValue>({
  runViewTransition: (navigate) => navigate(),
});

export function ViewTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const resolveNavigationRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!resolveNavigationRef.current) {
      return;
    }

    resolveNavigationRef.current();
    resolveNavigationRef.current = null;
  }, [pathname]);

  const runViewTransition = useCallback((navigate: () => void) => {
    const viewTransitionDocument = document as ViewTransitionDocument;

    if (!viewTransitionDocument.startViewTransition) {
      navigate();
      return;
    }

    if (resolveNavigationRef.current) {
      resolveNavigationRef.current();
      resolveNavigationRef.current = null;
    }

    const transition = viewTransitionDocument.startViewTransition(
      () =>
        new Promise<void>((resolve) => {
          resolveNavigationRef.current = resolve;
          navigate();

          window.setTimeout(() => {
            if (resolveNavigationRef.current === resolve) {
              resolveNavigationRef.current = null;
              resolve();
            }
          }, 700);
        }),
    );

    transition.finished.catch(() => undefined);
  }, []);

  const value = useMemo(
    () => ({
      runViewTransition,
    }),
    [runViewTransition],
  );

  return (
    <ViewTransitionContext.Provider value={value}>
      {children}
    </ViewTransitionContext.Provider>
  );
}

export function useViewTransitionNavigation() {
  return useContext(ViewTransitionContext).runViewTransition;
}
