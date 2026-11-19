"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

type CounterProps = { to: number; suffix?: string };

export function Counter({ to, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (value) => {
        node.textContent = `${Math.round(value).toLocaleString("vi-VN")}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>{`0${suffix}`}</span>;
}
