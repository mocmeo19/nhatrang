import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import { photos } from "@/shared/data/images";
import { areas, chooseTips, lodgingNote, priceNotes } from "./data";

const areaPhotos: Record<string, (typeof photos)[keyof typeof photos]> = {
  "tran-phu": photos.khachSanTranPhu,
  "hon-tre": photos.resortHonTre,
};

export function Lodging() {
  return (
    <section className="bg-sand-50 px-5 pb-24 pt-8 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600">Chọn nơi ở</p>
          <h2 className="mt-3 font-display text-4xl text-ocean-950 sm:text-5xl">Ở đâu cho đúng chuyến đi</h2>
          <p className="mt-4 text-lg leading-relaxed text-ocean-800/85">
            Nha Trang có nhiều khu lưu trú với tính cách khác nhau. Hãy chọn khu trước, rồi mới chọn khách sạn hoặc resort.
          </p>
        </header>

        <ol className="mt-14 space-y-16">
          {areas.map((area, index) => {
            const photo = areaPhotos[area.id];
            return (
              <li key={area.id} id={area.id} className="grid gap-8 border-t border-ocean-950/15 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
                <Reveal>
                  <p className="font-display text-5xl text-coral-500 tabular-nums">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-display text-3xl text-ocean-950">{area.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-ocean-600">{area.distance}</p>
                  <p className="mt-3 leading-relaxed text-ocean-800/90">{area.summary}</p>
                  {photo && (
                    <figure className="mt-5 overflow-hidden rounded-2xl">
                      <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(min-width: 1024px) 28rem, 100vw" className="h-56 w-full object-cover" />
                    </figure>
                  )}
                </Reveal>

                <Reveal delay={0.08}>
                  <dl className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-palm-500">Ưu điểm</dt>
                      <dd>
                        <ul className="mt-2 space-y-1.5 text-sm text-ocean-950">
                          {area.pros.map((item) => (
                            <li key={item}>+ {item}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-coral-500">Cần cân nhắc</dt>
                      <dd>
                        <ul className="mt-2 space-y-1.5 text-sm text-ocean-950">
                          {area.cons.map((item) => (
                            <li key={item}>– {item}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-4 rounded-xl bg-sun-400/15 px-4 py-3 text-sm text-ocean-950">
                    <span className="font-semibold">Hợp với: </span>
                    {area.suits}
                  </p>

                  <ul className="mt-5 divide-y divide-ocean-950/10 border-y border-ocean-950/10">
                    {area.stays.map((stay) => (
                      <li key={stay.id} className="py-4">
                        <p className="font-semibold text-ocean-950">
                          {stay.name} <span className="ml-1 rounded-full bg-ocean-100 px-2 py-0.5 text-xs font-medium text-ocean-600">{stay.kind}</span>
                        </p>
                        <p className="mt-1 text-sm text-ocean-800/85">{stay.note}</p>
                        <p className="mt-1 text-sm text-ocean-800/85">
                          <span className="font-semibold text-ocean-950">Địa chỉ: </span>
                          {stay.address}
                          {stay.singleSource && <span className="text-ocean-800/60"> (một nguồn, nên xác nhận)</span>}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-3xl text-ocean-950">Giá và mùa</h3>
            <ul className="mt-4 space-y-3 text-ocean-800/90">
              {priceNotes.map((note) => (
                <li key={note} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                  {note}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              Xem thêm{" "}
              <Link href="/van-hoa/thoi-tiet" className="font-semibold text-ocean-600 hover:text-coral-500">
                khí hậu các tháng
              </Link>{" "}
              để chọn thời điểm.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="font-display text-3xl text-ocean-950">Mẹo chọn chỗ ở</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-ocean-800/90 marker:font-semibold marker:text-coral-500">
              {chooseTips.map((tip) => (
                <li key={tip} className="pl-1 leading-relaxed">
                  {tip}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <p className="mt-14 border-t border-ocean-950/15 pt-6 text-xs leading-relaxed text-ocean-800/70">{lodgingNote}</p>
      </div>
    </section>
  );
}
