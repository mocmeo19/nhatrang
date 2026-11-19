"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { people, type Person } from "./data";

function PersonRow({ person, flip }: { person: Person; flip: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const placeY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <article ref={ref} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={`relative mx-auto w-full ${person.lowRes ? "max-w-[18rem]" : "max-w-md"} ${flip ? "lg:order-2" : ""}`}>
        <div className={`absolute -inset-3 rotate-3 rounded-[2.5rem] bg-gradient-to-br ${person.color} opacity-80`} />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border-4 border-white bg-sand-100 shadow-2xl shadow-ocean-950/20">
          <Image
            src={person.portrait.src}
            alt={person.portrait.alt}
            fill
            sizes={person.lowRes ? "18rem" : "(min-width: 1024px) 28rem, 90vw"}
            style={{ objectPosition: person.portraitPosition }}
            className="object-cover"
          />
        </div>
        <motion.figure
          style={{ y: placeY }}
          className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl sm:block"
        >
          <div className="relative aspect-[4/3]">
            <Image src={person.place.src} alt={person.place.alt} fill sizes="12rem" className="object-cover" />
          </div>
          <figcaption className="px-3 py-2 text-xs font-semibold text-ocean-800">{person.placeLabel}</figcaption>
        </motion.figure>
      </Reveal>

      <div className={flip ? "lg:order-1" : ""}>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral-500">{person.role}</p>
          <h3 className="mt-3 font-display text-4xl text-ocean-950 sm:text-5xl">{person.name}</h3>
          {person.years && <p className="mt-2 font-display text-xl italic text-ocean-500">{person.years}</p>}
          <p className="mt-6 text-lg leading-relaxed text-ocean-800/85">{person.story}</p>
          <ul className="mt-6 space-y-3">
            {person.facts.map((fact) => (
              <li key={fact} className="flex items-start gap-3 text-ocean-950">
                <span className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br ${person.color}`} />
                {fact}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-3 text-ocean-800/80">
            {person.more.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ol className="mt-8 space-y-3 border-l-2 border-dashed border-ocean-300 pl-5">
            {person.lifeline.map((point) => (
              <li key={point.year} className="relative">
                <span
                  aria-hidden
                  className={`absolute -left-[1.65rem] top-2 h-2.5 w-2.5 rounded-full bg-gradient-to-br ${person.color}`}
                />
                <span className="font-display text-lg text-coral-500">{point.year}</span>
                <span className="ml-3 text-ocean-950">{point.event}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </article>
  );
}

export function People() {
  return (
    <section className="bg-sand-50 px-5 pb-28 pt-12 sm:px-8 lg:pb-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Con người"
          title={
            <>
              Những cái tên <span className="italic text-coral-500">gắn với Nha Trang</span>
            </>
          }
          description="Họ đến từ nhiều thời đại và hoàn cảnh khác nhau, nhưng đều để lại dấu ấn trên vùng đất ven vịnh này."
        />
        <div className="mt-20 space-y-28">
          {people.map((person, index) => (
            <PersonRow key={person.name} person={person} flip={index % 2 === 1} />
          ))}
        </div>
        <p className="mt-16 text-center text-xs text-ocean-800/60">
          Ảnh Yersin là tranh tường; ảnh Bảo Đại là tư liệu lịch sử, được cắt khung để hiển thị.
        </p>
      </div>
    </section>
  );
}
