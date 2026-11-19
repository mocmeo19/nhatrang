import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import { destinations, infoDisclaimer, type Destination } from "./data";

export function DestinationDetail({ destination }: { destination: Destination }) {
  const index = destinations.findIndex((item) => item.id === destination.id);
  const prev = destinations[(index - 1 + destinations.length) % destinations.length];
  const next = destinations[(index + 1) % destinations.length];

  return (
    <section className="bg-sand-50 px-5 pb-24 pt-8 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div>
          <Reveal>
            <p className="font-display text-2xl leading-relaxed text-ocean-800 sm:text-3xl">{destination.intro}</p>
          </Reveal>

          {destination.illustrated && (
            <p className="mt-6 rounded-2xl bg-sun-400/15 px-4 py-3 text-sm text-ocean-950">
              Ảnh bìa là hình minh họa do AI tạo, không phải ảnh chụp thực tế của địa điểm.
            </p>
          )}

          {destination.sections.map((section) => (
            <Reveal key={section.heading} className="mt-14">
              <h2 className="font-display text-3xl text-ocean-950">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-ocean-800/85">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}

          {destination.gallery && destination.gallery.length > 0 && (
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {destination.gallery.map((photo) => (
                <Reveal key={photo.src}>
                  <figure className="overflow-hidden rounded-3xl shadow-xl shadow-ocean-950/10">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 1024px) 28rem, 100vw"
                      className="h-auto w-full"
                    />
                    <figcaption className="bg-white px-4 py-3 text-sm text-ocean-800/80">{photo.alt}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="rounded-3xl bg-white p-6 shadow-xl shadow-ocean-950/10">
              <h2 className="font-display text-2xl text-ocean-950">Thông tin nhanh</h2>
              <dl className="mt-4 space-y-4">
                {destination.info.map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ocean-500">{row.label}</dt>
                    <dd className="mt-1 text-ocean-950">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 border-t border-ocean-100 pt-4 text-xs leading-relaxed text-ocean-800/60">{infoDisclaimer}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-ocean-950 p-6 text-white">
              <h2 className="font-display text-2xl">Lưu ý khi đi</h2>
              <ul className="mt-4 space-y-3">
                {destination.tips.map((tip) => (
                  <li key={tip} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </aside>
      </div>

      <nav aria-label="Điểm đến khác" className="mx-auto mt-20 grid max-w-6xl gap-5 sm:grid-cols-2">
        {[
          { item: prev, label: "← Điểm đến trước" },
          { item: next, label: "Điểm đến tiếp theo →" },
        ].map(({ item, label }) => (
          <Link
            key={label}
            href={`/kham-pha/diem-den/${item.id}`}
            className="group rounded-3xl bg-gradient-to-br from-ocean-500 to-ocean-800 p-7 text-white shadow-xl transition-transform hover:-translate-y-1"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-400">{label}</span>
            <span className="mt-2 block font-display text-3xl">{item.name}</span>
            <span className="mt-1 block text-sm text-ocean-100">{item.tag}</span>
          </Link>
        ))}
      </nav>
      <p className="mt-8 text-center">
        <Link href="/kham-pha/diem-den" className="text-sm font-semibold text-ocean-600 hover:text-coral-500">
          ← Tất cả điểm đến
        </Link>
      </p>
    </section>
  );
}
