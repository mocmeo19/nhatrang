"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { findGroup } from "@/config/site";
import { Icon } from "./icon";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  parent?: { label: string; href: string };
  edgeFill?: string;
};

export function PageHero({ eyebrow, title, description, src, alt, parent, edgeFill = "var(--color-sand-50)" }: PageHeroProps) {
  const pathname = usePathname();
  const group = findGroup(pathname);
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[560px] overflow-hidden bg-ocean-950 sm:min-h-[620px]">
      <motion.div style={{ y: reducedMotion ? 0 : imageY }} className="absolute -inset-y-[15%] inset-x-0 -z-20">
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,37,35,.75),rgba(8,37,35,.15)),linear-gradient(0deg,rgba(8,37,35,.75),transparent)]" />

      <motion.div
        style={{ y: reducedMotion ? 0 : textY, opacity: reducedMotion ? 1 : textOpacity }}
        className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:min-h-[620px] sm:px-8 sm:pb-24 sm:pt-40"
      >
        <motion.nav
          aria-label="Đường dẫn"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-white/75"
        >
          <Link href="/" className="hover:text-sun-400">
            Trang chủ
          </Link>
          <span aria-hidden>/</span>
          {group && pathname !== group.href && (
            <>
              <Link href={group.href} className="hover:text-sun-400">
                {group.label}
              </Link>
              <span aria-hidden>/</span>
            </>
          )}
          {parent && (
            <>
              <Link href={parent.href} className="hover:text-sun-400">
                {parent.label}
              </Link>
              <span aria-hidden>/</span>
            </>
          )}
          <span className="font-semibold text-white">{title}</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="eyebrow mb-5 w-fit text-sun-400"
        >
          {eyebrow}
        </motion.span>

        <h1 className="max-w-5xl font-display text-5xl leading-[1.15] tracking-[-0.035em] text-white sm:text-6xl lg:text-8xl">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8"
        >
          {description}
        </motion.p>

        {group && (
          <motion.nav
            aria-label={`Trong chủ đề ${group.label}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="-mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 [scrollbar-width:none] sm:flex-wrap sm:px-0"
          >
            {group.links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold backdrop-blur-md transition-colors ${
                    active
                      ? "border-sun-400 bg-sun-400 text-ocean-950"
                      : "border-white/30 bg-white/5 text-white hover:bg-white/20"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </motion.div>
      <Icon name="compass" className="pointer-events-none absolute bottom-20 right-[7%] hidden h-28 w-28 text-white/25 xl:block" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-4" style={{ backgroundColor: edgeFill }} />
    </section>
  );
}
