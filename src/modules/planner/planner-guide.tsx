"use client";

import { useState } from "react";
import { Reveal } from "@/shared/components/reveal";
import { faqs, packingList, rainySeason, transport } from "./guide-data";

export function PlannerGuide() {
  const [packed, setPacked] = useState<Record<string, boolean>>({});
  const doneCount = packingList.filter((item) => packed[item]).length;

  return (
    <section className="rounded-t-[2.5rem] bg-white px-5 pb-24 pt-20 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600">Cẩm nang</p>
          <h2 className="mt-3 font-display text-4xl text-ocean-950 sm:text-5xl">Trước khi lên đường</h2>
        </header>

        <ul className="mt-12 grid gap-10 border-t border-ocean-950/15 pt-8 md:grid-cols-3">
          {transport.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 0.08}>
                <p className="font-display text-sm text-coral-500 tabular-nums">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 font-display text-2xl text-ocean-950">{item.title}</h3>
                <ul className="mt-3 space-y-2 text-ocean-800/85">
                  {item.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-3xl text-ocean-950">Mùa mưa thì sao?</h3>
            <ul className="mt-5 space-y-3 text-ocean-800/90">
              {rainySeason.map((line) => (
                <li key={line} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-3xl text-ocean-950">Chuẩn bị hành lý</h3>
              <span className="text-sm font-semibold text-ocean-600 tabular-nums">
                {doneCount}/{packingList.length}
              </span>
            </div>
            <ul className="mt-5 divide-y divide-ocean-950/10 border-y border-ocean-950/10">
              {packingList.map((item) => (
                <li key={item}>
                  <label className="flex cursor-pointer items-center gap-3 py-2.5">
                    <input
                      type="checkbox"
                      checked={Boolean(packed[item])}
                      onChange={(event) => setPacked((current) => ({ ...current, [item]: event.target.checked }))}
                      className="h-5 w-5 accent-ocean-800"
                    />
                    <span className={packed[item] ? "text-ocean-800/50 line-through" : "text-ocean-950"}>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="font-display text-3xl text-ocean-950">Câu hỏi thường gặp</h3>
          <div className="mt-6 divide-y divide-ocean-950/10 border-y border-ocean-950/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ocean-950">
                  {faq.question}
                  <span aria-hidden className="text-2xl text-coral-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ocean-800/85">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
