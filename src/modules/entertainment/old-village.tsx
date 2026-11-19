import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { aiImages } from "@/shared/data/images";
import { oldVillage } from "./data";

export function OldVillage() {
  return (
    <section className="bg-sand-50 px-5 pb-24 pt-8 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Văn hóa & trải nghiệm"
          title={
            <>
              Nha Trang Xưa — <span className="italic text-coral-500">làng nghề và show thực cảnh</span>
            </>
          }
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          <Reveal className="relative lg:sticky lg:top-28">
            <figure className="overflow-hidden rounded-[2rem] shadow-2xl shadow-ocean-950/20">
              <div className="relative aspect-[4/3]">
                <Image
                  src={aiImages.oldVillage.src}
                  alt={aiImages.oldVillage.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="bg-white px-5 py-3 text-xs text-ocean-800/70">
                Ảnh minh họa tạo bằng AI, không phải ảnh chụp thật của làng nghề.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-3xl text-ocean-950">{oldVillage.name}</h3>
            <p className="mt-4 text-lg leading-relaxed text-ocean-800/85">{oldVillage.intro}</p>

            <dl className="mt-6 space-y-3">
              {oldVillage.facts.map((fact) => (
                <div key={fact.label} className="rounded-2xl bg-white px-5 py-3 shadow-md shadow-ocean-950/5">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ocean-500">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-ocean-950">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <h4 className="mt-8 font-display text-2xl text-ocean-950">Các nghề được tái hiện</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {oldVillage.crafts.map((craft) => (
                <li key={craft} className="rounded-full bg-ocean-100 px-4 py-1.5 text-sm text-ocean-800">
                  {craft}
                </li>
              ))}
            </ul>

            <h4 className="mt-8 font-display text-2xl text-ocean-950">Bạn có thể làm gì?</h4>
            <ul className="mt-3 space-y-2">
              {oldVillage.activities.map((item) => (
                <li key={item} className="flex gap-3 text-ocean-800/85">
                  <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sun-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-ocean-800/70">
              Xem thêm về món{" "}
              <Link href="/am-thuc/mon-ngon#banh-can" className="font-semibold text-ocean-600 hover:text-coral-500">
                bánh căn
              </Link>{" "}
              trong trang Ẩm thực.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 rounded-[2rem] bg-ocean-950 p-8 text-white shadow-2xl shadow-ocean-950/30 sm:p-12">
          <h3 className="font-display text-3xl sm:text-4xl">Ánh sáng huyền thoại</h3>
          <p className="mt-3 max-w-2xl text-ocean-100">
            Show thực cảnh gồm 5 phân cảnh, kể câu chuyện văn hóa Nha Trang – Khánh Hòa theo dòng lịch sử: nghề thủ công và đời sống
            xưa, dấu chân bác sĩ Alexandre Yersin và sự giao thoa giữa các dân tộc.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {oldVillage.scenes.map((scene, index) => (
              <li key={scene} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <span className="font-display text-2xl text-sun-400">Phân cảnh {index + 1}</span>
                <p className="mt-2 font-semibold">{scene}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-ocean-100/70">Tên các phân cảnh theo thông tin báo chí.</p>
        </div>
      </div>
    </section>
  );
}
