"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/shared/components/icon";
import { Reveal } from "@/shared/components/reveal";
import { photos } from "@/shared/data/images";

const experiences = [
  { title: "Theo những con sóng", subtitle: "Một ngày xanh giữa vịnh đảo", description: "Rời phố thị, ra khơi và để những hòn đảo kể câu chuyện của biển. Một chuyến đi dành cho những tâm hồn yêu tự do.", photo: photos.honNoi, href: "/kham-pha/trai-nghiem", caption: "Đảo Yến · Hòn Nội" },
  { title: "Chạm vào dấu xưa", subtitle: "Một hành trình qua miền di sản", description: "Chậm bước dưới những ngọn tháp gạch đỏ, nghe câu chuyện Chăm Pa và tìm nét bình yên giữa lòng thành phố biển.", photo: photos.ponagarTower, href: "/van-hoa/lich-su", caption: "Tháp Bà Ponagar" },
  { title: "Chẳng vội đi đâu", subtitle: "Một khoảng lặng bên bờ biển", description: "Dậy sớm đón bình minh, đi chân trần trên cát, đọc nốt một cuốn sách. Đôi khi, trải nghiệm đẹp nhất là được thảnh thơi.", photo: photos.tranPhu, href: "/kham-pha/luu-tru", caption: "Bãi biển Trần Phú" },
];

export function ExperienceSpotlight() {
  const [selected, setSelected] = useState(0);
  const reducedMotion = useReducedMotion();
  const active = experiences[selected];

  return (
    <section className="relative overflow-hidden bg-ocean-950 text-white">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <div className="px-5 py-16 sm:px-8 lg:py-24 lg:pl-[max(2rem,calc((100vw-1216px)/2))] lg:pr-16">
          <Reveal><p className="eyebrow text-sun-400">Sống trọn từng khoảnh khắc</p><h2 className="mt-6 font-display text-4xl leading-[1.2] tracking-[-0.035em] sm:text-5xl">Đến để khám phá.<br /><em className="text-sun-400">Ở lại vì cảm xúc.</em></h2></Reveal>
          <div className="mt-10 divide-y divide-white/20 border-y border-white/20">
            {experiences.map((item, index) => <div key={item.title}>
              <button type="button" aria-expanded={selected === index} aria-controls={`experience-${index}`} onClick={() => setSelected(index)} className="group flex w-full items-center gap-4 py-5 text-left"><span className={`text-xs tabular-nums ${selected === index ? "text-sun-400" : "text-white/45"}`}>0{index + 1}</span><span className={`flex-1 font-display text-2xl transition-colors ${selected === index ? "text-sun-400" : "group-hover:text-sun-400"}`}>{item.title}</span><span aria-hidden className="text-xl text-sun-400">{selected === index ? "−" : "+"}</span></button>
              <div id={`experience-${index}`} hidden={selected !== index} className="pb-6 pl-8"><p className="max-w-sm text-sm leading-7 text-white/70">{item.description}</p><Link href={item.href} className="mt-4 inline-flex min-h-9 items-center gap-4 text-xs font-semibold text-sun-400">Khám phá trải nghiệm <Icon name="arrow" className="h-4 w-4" /></Link></div>
            </div>)}
          </div>
        </div>
        <div className="relative min-h-[440px] overflow-hidden lg:min-h-[680px]">
          <AnimatePresence initial={false}>
            <motion.div key={active.title} initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.65 }} className="absolute inset-0"><Image src={active.photo.src} alt={active.photo.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-ocean-950/65 via-transparent to-transparent" /></motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute left-8 top-8 flex h-16 w-16 items-center justify-center rounded-full border border-white/60 text-white"><Icon name="compass" className="h-9 w-9" /></div>
          <div aria-live="polite" className="absolute inset-x-0 bottom-0 p-8 sm:p-12"><p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.15em]"><Icon name="pin" className="h-4 w-4" />{active.caption}</p><p className="max-w-sm font-display text-3xl italic sm:text-4xl">{active.subtitle}</p></div>
        </div>
      </div>
    </section>
  );
}
