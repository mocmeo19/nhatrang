import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { audiences, experienceGuides } from "./data";

export function ExperienceGuides() {
  return (
    <section className="bg-sand-50 px-5 pb-24 pt-8 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Cẩm nang"
          title={
            <>
              Chi tiết <span className="italic text-ocean-500">từng trải nghiệm</span>
            </>
          }
          description="Những điều cần biết trước khi bạn đặt chỗ."
        />

        <div className="mt-16 space-y-12">
          {experienceGuides.map((guide, index) => (
            <Reveal key={guide.id}>
              <article
                id={guide.id}
                className="grid overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-ocean-950/10 lg:grid-cols-2"
              >
                <div className={`relative min-h-[260px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={guide.src}
                    alt={guide.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg">
                    {guide.emoji}
                  </span>
                </div>
                <div className="p-7 sm:p-10">
                  <h3 className="font-display text-3xl text-ocean-950">{guide.title}</h3>
                  <div className="mt-4 space-y-3 leading-relaxed text-ocean-800/85">
                    {guide.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                    {guide.facts.map((fact) => (
                      <div key={fact.label} className="rounded-2xl bg-ocean-50 px-4 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-ocean-500">{fact.label}</dt>
                        <dd className="mt-1 text-sm text-ocean-950">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="mt-6 space-y-2">
                    {guide.tips.map((tip) => (
                      <li key={tip} className="flex gap-3 text-sm text-ocean-800/85">
                        <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sun-400" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                  {guide.link && (
                    <Link href={guide.link.href} className="mt-6 inline-block text-sm font-semibold text-ocean-600 hover:text-coral-500">
                      {guide.link.label} →
                    </Link>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Gợi ý"
            title={
              <>
                Chọn theo <span className="italic text-coral-500">nhóm của bạn</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {audiences.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.1}>
                <div className="h-full rounded-3xl bg-gradient-to-br from-ocean-500 to-ocean-800 p-7 text-white shadow-xl">
                  <span className="text-4xl">{group.emoji}</span>
                  <h3 className="mt-3 font-display text-2xl">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-ocean-100">
                    {group.picks.map((pick) => (
                      <li key={pick} className="flex gap-2">
                        <span aria-hidden className="text-sun-400">✓</span>
                        {pick}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
