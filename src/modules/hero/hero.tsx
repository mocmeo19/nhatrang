"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Icon } from "@/shared/components/icon";
import { photos } from "@/shared/data/images";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const appear = (delay: number) => ({
    initial: { opacity: 0, y: reducedMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: reducedMotion ? 0 : delay },
  });

  return (
    <section ref={ref} className="relative isolate flex min-h-[760px] flex-col justify-end overflow-hidden bg-ocean-950 text-white lg:h-[min(900px,100svh)]">
      <motion.div style={{ y: reducedMotion ? 0 : imageY }} className="absolute inset-0 -z-20">
        <Image src={photos.hero.src} alt={photos.hero.alt} fill priority sizes="100vw" className="hero-photo object-cover object-[60%_center]" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,37,35,.63),rgba(8,37,35,.12)),linear-gradient(0deg,rgba(8,37,35,.75),transparent_60%,rgba(8,37,35,.3))]" />
      <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-40 sm:px-8 lg:pb-12">
        <motion.div style={{ y: reducedMotion ? 0 : textY }}>
          <motion.p {...appear(0.15)} className="eyebrow text-sun-400">Khánh Hòa, Việt Nam · Miền biển thương nhớ</motion.p>
          <motion.p {...appear(0.3)} className="mt-9 font-display text-3xl italic sm:text-4xl">Hẹn bạn ở</motion.p>
          <motion.h1 {...appear(0.45)} className="mt-1 font-display text-[clamp(5rem,13vw,11rem)] leading-[1.15] tracking-[-0.055em]">Nha Trang<span className="text-sun-400">.</span></motion.h1>
          <motion.div {...appear(0.6)} className="mt-6 flex items-end justify-between gap-12">
            <div>
              <p className="max-w-md text-sm leading-7 text-white/85 sm:text-base sm:leading-8">Một chút nắng, một làn gió, cả một trời biển xanh.<br className="hidden sm:block" /> Để mỗi chuyến đi là một lần tìm thấy bình yên.</p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href="#diem-den" className="button-primary">Khám phá Nha Trang <Icon name="arrow-up" /></a>
                <Link href="/thu-vien" className="group inline-flex min-h-12 items-center gap-3 text-sm text-white"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition-colors group-hover:bg-white/20"><Icon name="compass" /></span>Một thoáng Nha Trang</Link>
              </div>
            </div>
            <Link href="/kham-pha/diem-den/dao-yen" className="group hidden w-[245px] shrink-0 -rotate-3 rounded-sm bg-sand-50 p-2.5 pb-4 text-ocean-950 shadow-2xl transition-transform duration-500 hover:rotate-0 lg:block">
              <div className="relative h-36 overflow-hidden"><Image src={photos.honNoi.src} alt={photos.honNoi.alt} fill sizes="245px" className="image-zoom object-cover" /></div>
              <div className="mt-3 flex items-center justify-between px-1"><span className="font-display text-lg italic">Một ngày ở Đảo Yến</span><Icon name="arrow-up" className="h-4 w-4" /></div>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div {...appear(0.85)} className="mt-16 flex items-center justify-between gap-4 border-t border-white/25 pt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/75 lg:mt-20">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Bờ biển Nam Trung Bộ</span>
          <a href="#bat-dau" className="flex min-h-8 items-center gap-3 hover:text-sun-400">Chạm vào mùa hè <span aria-hidden className="text-lg">↓</span></a>
          <span className="hidden items-center gap-2 sm:flex"><Icon name="wave" className="h-5 w-5" /> Cứ để biển dẫn lối</span>
        </motion.div>
      </div>
    </section>
  );
}
