"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { MilestoneCard } from "./milestone-card";
import { milestones } from "./data";

export function History() {
  const trackRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="relative rounded-b-[2.5rem] bg-ocean-950 px-5 pb-24 pt-20 sm:px-8 lg:pt-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          light
          eyebrow="Lịch sử"
          title={
            <>
              Hành trình <span className="text-gradient-sun italic">qua thời gian</span>
            </>
          }
          description="Từ vương quốc Kauthara của người Chăm đến thành phố biển hôm nay — những dấu mốc đã làm nên Nha Trang."
        />

        <ol ref={trackRef} className="relative mt-20">
          <span aria-hidden className="absolute bottom-0 left-4 top-0 w-0.5 bg-white/15 lg:left-1/2 lg:-translate-x-1/2" />
          <motion.span
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute bottom-0 left-4 top-0 w-0.5 origin-top bg-gradient-to-b from-sun-400 to-coral-400 lg:left-1/2 lg:-translate-x-1/2"
          />

          {milestones.map((item, index) => {
            const left = index % 2 === 0;
            return (
              <li key={item.period} className="relative mb-12 pl-12 last:mb-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0">
                <span
                  aria-hidden
                  className={`absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full ring-4 ring-ocean-950 lg:left-1/2 ${item.accent}`}
                />
                <Reveal y={30} className={left ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"}>
                  <MilestoneCard item={item} />
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
