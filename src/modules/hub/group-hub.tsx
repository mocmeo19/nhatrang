"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { NavGroup } from "@/config/site";
import { pagePhotos } from "@/modules/home/data";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";

const spansByCount: Record<number, string[]> = {
  2: ["lg:col-span-3", "lg:col-span-3"],
  3: ["lg:col-span-3", "lg:col-span-3", "lg:col-span-6"],
  4: ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4"],
  5: ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"],
};

export function GroupHub({ group }: { group: NavGroup }) {
  return (
    <section className="bg-sand-50 px-5 pb-24 pt-8 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={`${group.links.length} trang trong chủ đề`}
          title={
            <>
              Chọn nơi bạn muốn <span className="italic text-coral-500">bắt đầu</span>
            </>
          }
          description={group.description}
        />

        <ul className="mt-14 grid auto-rows-[300px] gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {group.links.map((link, index) => {
            const photo = pagePhotos[link.href];
            return (
              <li key={link.href} className={spansByCount[group.links.length]?.[index] ?? "lg:col-span-2"}>
                <Reveal delay={(index % 3) * 0.08} className="h-full">
                  <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="h-full">
                    <Link
                      href={link.href}
                      className="group relative block h-full overflow-hidden rounded-[2rem] shadow-xl shadow-ocean-950/10"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/25 to-transparent" />
                      <span className="absolute left-6 top-6 font-display text-lg text-sun-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden
                        className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl text-ocean-800 transition-transform duration-500 group-hover:rotate-45"
                      >
                        ↗
                      </span>
                      <span className="absolute inset-x-0 bottom-0 p-6">
                        <span className="block font-display text-3xl text-white">{link.label}</span>
                        <span className="mt-2 block max-w-sm text-sm leading-relaxed text-white/85">{link.description}</span>
                      </span>
                    </Link>
                  </motion.div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
