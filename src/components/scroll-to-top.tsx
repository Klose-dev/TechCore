import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";

/**
 * Restores the correct scroll position on navigation.
 *
 * A hash target cannot be scrolled to the moment the location changes, because
 * route transitions exit the old page first and lazy route chunks mount after
 * that. Just as important, the new page's height is not final when the target
 * first appears: the outgoing page unmounts and the document can shrink by
 * thousands of pixels, which would leave us scrolled far past the target.
 * So we wait for the target, wait for the document height to stop changing,
 * and then scroll, correcting once if the layout shifts again.
 */
const POLL_INTERVAL = 50;
const MAX_POLLS = 60;
const SETTLE_CHECKS = 2;
const DRIFT_TOLERANCE = 8;
const CORRECTION_DELAY = 350;

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const reduceMotion = useReducedMotion();
  const userScrolled = useRef(false);

  useEffect(() => {
    const id = hash ? decodeURIComponent(hash.replace(/^#/, "")) : "";
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    if (!id) {
      scrollToTop();
      return;
    }

    let cancelled = false;
    let polls = 0;
    let settleCount = 0;
    let lastHeight = -1;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let correction: ReturnType<typeof setTimeout> | undefined;

    const onUserScroll = () => {
      userScrolled.current = true;
    };
    window.addEventListener("wheel", onUserScroll, { passive: true });
    window.addEventListener("touchstart", onUserScroll, { passive: true });

    const scrollToTarget = (behavior: ScrollBehavior) => {
      const target = document.getElementById(id);
      if (!target) return false;

      userScrolled.current = false;
      target.scrollIntoView({ behavior, block: "start" });

      correction = setTimeout(() => {
        if (cancelled || userScrolled.current) return;

        const element = document.getElementById(id);
        if (!element) return;

        const top = element.getBoundingClientRect().top;
        const expected = Number.parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop || "0",
        );

        if (Math.abs(top - expected) > DRIFT_TOLERANCE) {
          element.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }, CORRECTION_DELAY);

      return true;
    };

    const waitForLayout = () => {
      if (cancelled) return;

      const target = document.getElementById(id);

      if (!target) {
        polls += 1;
        if (polls < MAX_POLLS) timer = setTimeout(waitForLayout, POLL_INTERVAL);
        else scrollToTop();
        return;
      }

      const height = document.body.scrollHeight;
      settleCount = height === lastHeight ? settleCount + 1 : 0;
      lastHeight = height;

      if (settleCount < SETTLE_CHECKS) {
        timer = setTimeout(waitForLayout, POLL_INTERVAL);
        return;
      }

      scrollToTarget(reduceMotion ? "auto" : "smooth");
    };

    waitForLayout();

    return () => {
      cancelled = true;
      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchstart", onUserScroll);
      if (timer) clearTimeout(timer);
      if (correction) clearTimeout(correction);
    };
  }, [pathname, hash, reduceMotion]);

  return null;
}
