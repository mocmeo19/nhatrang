import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { specialties } from "./data";

export function Specialties() {
  return (
    <section className="bg-sand-50 px-5 pb-24 pt-8 sm:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Đặc sản mang về"
          title={
            <>
              Quà từ <span className="italic text-coral-500">biển Nha Trang</span>
            </>
          }
          description="Những món dễ mang theo, bảo quản được vài ngày hoặc lâu hơn, được du khách mua nhiều nhất."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={(index % 3) * 0.08} className="h-full">
                <article
                  id={item.id}
                  className="flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-xl shadow-ocean-950/10"
                >
                  <span className="font-display text-lg text-coral-500">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-2xl text-ocean-950">{item.name}</h3>
                  <p className="mt-3 leading-relaxed text-ocean-800/85">{item.description}</p>
                  <p className="mt-5 rounded-2xl bg-sun-400/15 px-4 py-3 text-sm text-ocean-950">
                    <span className="font-semibold">Lưu ý: </span>
                    {item.tip}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
