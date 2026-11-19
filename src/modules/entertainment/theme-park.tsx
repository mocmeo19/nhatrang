import Image from "next/image";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { photos } from "@/shared/data/images";
import { themePark } from "./data";

export function ThemePark() {
  return (
    <section className="bg-sand-50 px-5 pb-24 pt-12 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Công viên giải trí"
          title={
            <>
              VinWonders — <span className="italic text-coral-500">một ngày trọn vẹn</span>
            </>
          }
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          <Reveal className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-ocean-950/20">
              <Image
                src={photos.bay.src}
                alt={photos.bay.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-3 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
              <div className="relative aspect-[4/3]">
                <Image src={photos.cableCar.src} alt={photos.cableCar.alt} fill sizes="13rem" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-3xl text-ocean-950">{themePark.name}</h3>
            <p className="mt-4 text-lg leading-relaxed text-ocean-800/85">{themePark.intro}</p>
            <dl className="mt-6 space-y-3">
              {themePark.facts.map((fact) => (
                <div key={fact.label} className="rounded-2xl bg-white px-5 py-3 shadow-md shadow-ocean-950/5">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ocean-500">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-ocean-950">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-ocean-800/60">
              Giá vé, giờ hoạt động và lịch show lấy từ các trang tổng hợp, có thể đã thay đổi — hãy kiểm tra kênh chính thức.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themePark.features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 0.08}>
              <article className="h-full rounded-3xl bg-white p-6 shadow-xl shadow-ocean-950/10 transition-transform hover:-translate-y-1">
                <span className="text-4xl" aria-hidden>
                  {feature.emoji}
                </span>
                <h3 className="mt-3 font-display text-2xl text-ocean-950">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ocean-800/85">{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center font-display text-3xl text-ocean-950">Ra đảo bằng cách nào?</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {themePark.access.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="h-full rounded-3xl bg-gradient-to-br from-ocean-500 to-ocean-800 p-7 text-white shadow-xl">
                  <span className="text-4xl" aria-hidden>
                    {item.emoji}
                  </span>
                  <h4 className="mt-3 font-display text-2xl">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ocean-100">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
