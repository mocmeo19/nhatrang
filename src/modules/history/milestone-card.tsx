"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useId, useState } from "react";
import type { Milestone } from "./data";

export function MilestoneCard({ item }: { item: Milestone }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="rounded-3xl border border-white/15 bg-white/5 p-6 text-left backdrop-blur-md transition-colors hover:bg-white/10">
      <p className="font-display text-3xl text-sun-400">{item.period}</p>
      <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 leading-relaxed text-ocean-100">{item.description}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3 border-t border-white/15 pt-4 text-sm leading-relaxed text-ocean-100/90">
              {item.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {item.link && (
                <Link href={item.link.href} className="inline-block font-semibold text-sun-400 hover:underline">
                  {item.link.label} →
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
      >
        {open ? "Thu gọn" : "Xem chi tiết"}
        <span aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ↓
        </span>
      </button>
    </article>
  );
}
