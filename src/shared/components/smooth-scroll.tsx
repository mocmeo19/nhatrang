"use client";

import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { useEffect } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = undefined;
      if (media.matches) return;
      lenis = new Lenis({ duration: 0.95, anchors: true });
      frame = requestAnimationFrame(function raf(time) {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      });
    };
    update();
    media.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      media.removeEventListener("change", update);
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
