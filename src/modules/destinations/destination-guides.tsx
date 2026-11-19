import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { destinationCategories, destinations } from "./data";

export function DestinationGuides() {
  return (
    <section className="bg-sand-50 px-5 pb-24 pt-12 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Cẩm nang"
          title={
            <>
              Thuyết minh <span className="italic text-ocean-500">từng điểm đến</span>
            </>
          }
          description="Câu chuyện, thông tin thực tế và lưu ý khi tham quan được tổng hợp riêng cho từng nơi."
        />

        {destinationCategories.map((category) => {
          const items = destinations.filter((item) => item.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category} className="mt-16">
              <h3 className="font-display text-3xl text-ocean-950">
                {category} <span className="text-lg text-ocean-500">({items.length})</span>
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => (
                  <Reveal key={item.id} delay={(index % 3) * 0.08}>
                    <Link
                      href={`/kham-pha/diem-den/${item.id}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-ocean-950/10 transition-transform duration-300 hover:-translate-y-2"
                    >
                      <span className="relative block aspect-[4/3] overflow-hidden">
                        <Image
                          src={item.photo.src}
                          alt={item.photo.alt}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-sun-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ocean-950">
                          {item.tag}
                        </span>
                      </span>
                      <span className="flex flex-1 flex-col p-6">
                        <span className="font-display text-2xl text-ocean-950">{item.name}</span>
                        <span className="mt-3 line-clamp-3 text-sm leading-relaxed text-ocean-800/80">{item.summary}</span>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean-600">
                          Đọc thuyết minh <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
