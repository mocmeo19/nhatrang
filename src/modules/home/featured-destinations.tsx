"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/shared/components/icon";
import { Reveal } from "@/shared/components/reveal";
import type { FeaturedCollection } from "./featured-data";

export function FeaturedDestinations({ collections }: { collections: FeaturedCollection[] }) {
  const [selected, setSelected] = useState<string>(collections[0].id);
  const reducedMotion = useReducedMotion();
  const collection = collections.find((item) => item.id === selected)!;

  return (
    <section id="diem-den" className="bg-sand-50 px-5 pb-20 pt-4 sm:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="eyebrow text-ocean-600">Những tọa độ thương nhớ</p><h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">Đi đâu cũng <em className="text-ocean-500">thấy đẹp.</em></h2></div>
          <Link href="/kham-pha/diem-den" className="inline-flex min-h-11 items-center gap-5 text-xs font-semibold">Tất cả điểm đến <Icon name="arrow-up" /></Link>
        </Reveal>
        <div aria-label="Lọc điểm đến theo sở thích" className="mt-9 flex flex-wrap gap-2">
          {collections.map((item) => <button key={item.id} type="button" aria-pressed={selected === item.id} aria-controls="featured-destinations" onClick={() => setSelected(item.id)} className={`rounded-full border px-5 py-3 text-xs font-medium transition-colors ${selected === item.id ? "border-ocean-950 bg-ocean-950 text-white" : "border-ocean-950/15 hover:border-ocean-500 hover:bg-white"}`}>{item.label}</button>)}
        </div>
        <div id="featured-destinations" aria-live="polite" aria-atomic="true" className="mt-7">
          <span className="sr-only">{collection.label} — 3 điểm đến</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={collection.id} initial={{ opacity: 0, y: reducedMotion ? 0 : 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="grid gap-5 md:grid-cols-[1.2fr_1fr_1fr]">
              {collection.destinations.map((item, index) => {
                const id = item.id;
                return <Link key={id} href={`/kham-pha/diem-den/${id}`} className="group relative isolate flex h-[390px] flex-col justify-between overflow-hidden rounded-xl p-6 text-white sm:h-[440px]">
                  <Image src={item.photo.src} alt={item.photo.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="image-zoom -z-20 object-cover" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#082d2b]/95 via-[#082d2b]/10 to-[#082d2b]/20" />
                  <div className="flex items-start justify-between"><span className="rounded-full border border-white/30 bg-ocean-950/25 px-3 py-1.5 text-[10px] uppercase tracking-wider backdrop-blur-sm">{item.illustrated ? "Ảnh minh họa AI" : item.tag}</span><span className="font-display text-xl italic text-white/80">0{index + 1}</span></div>
                  <div><p className="text-[10px] uppercase tracking-[0.16em] text-sun-400">{item.category}</p><h3 className="mt-2 font-display text-3xl">{item.name}</h3><p className="mt-3 line-clamp-2 text-xs leading-6 text-white/80">{item.summary}</p><div className="mt-5 flex items-center justify-between border-t border-white/25 pt-4"><span className="text-xs">Ghé thăm nơi này</span><Icon name="arrow-up" className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></div>
                </Link>;
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
