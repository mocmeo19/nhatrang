"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionHeading } from "@/shared/components/section-heading";
import { destinationCategories, destinations, type DestinationCategory } from "./data";

export function Destinations() {
  const [category, setCategory] = useState<DestinationCategory | "Tất cả">("Tất cả");
  const [activeId, setActiveId] = useState(destinations[0].id);
  const visible = category === "Tất cả" ? destinations : destinations.filter((item) => item.category === category);
  const active = visible.find((item) => item.id === activeId) ?? visible[0];
  const filters = ["Tất cả", ...destinationCategories] as const;

  return (
    <section
      className="relative rounded-b-[2.5rem] bg-gradient-to-b from-ocean-600 to-ocean-950 px-5 pb-24 pt-16 sm:px-8 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl pt-8">
        <SectionHeading
          light
          eyebrow="Điểm đến"
          title={
            <>
              Những nơi <span className="text-gradient-sun italic">không thể bỏ lỡ</span>
            </>
          }
          description="Chọn một điểm đến để khám phá câu chuyện, điểm nhấn và lý do vì sao nơi đây khiến du khách say mê."
        />

        <div role="group" aria-label="Lọc theo nhóm điểm đến" className="mt-12 flex flex-wrap justify-center gap-2">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={category === name}
              onClick={() => setCategory(name)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                category === name ? "bg-sun-400 text-ocean-950" : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div role="tablist" aria-label="Điểm đến" className="flex gap-3 overflow-x-auto pb-2 lg:max-h-[560px] lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:pr-2">
            {visible.map((item, index) => {
              const selected = item.id === active.id;
              return (
                <button
                  key={item.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  onClick={() => setActiveId(item.id)}
                  className={`group relative shrink-0 rounded-2xl px-6 py-4 text-left transition-colors lg:shrink ${
                    selected ? "text-ocean-950" : "text-white hover:bg-white/10"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="destination-pill"
                      className="absolute inset-0 rounded-2xl bg-white shadow-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-4">
                    <span className={`font-display text-2xl ${selected ? "text-coral-500" : "text-sun-400"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block whitespace-nowrap text-lg font-semibold">{item.name}</span>
                      <span className={`block text-xs uppercase tracking-wider ${selected ? "text-ocean-600" : "text-ocean-100"}`}>
                        {item.tag}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-ocean-950 shadow-2xl shadow-black/40">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="tabpanel"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.photo.src}
                  alt={active.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                  <span className="rounded-full bg-sun-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-ocean-950">
                    {active.tag}
                  </span>
                  <h3 className="mt-4 font-display text-4xl text-white sm:text-5xl">{active.name}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-white/85">{active.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {active.highlights.map((highlight, index) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm text-white backdrop-blur-md"
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    href={`/kham-pha/diem-den/${active.id}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-950 transition-transform hover:scale-105"
                  >
                    Xem thuyết minh chi tiết <span aria-hidden>→</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
