import Image from "next/image";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { dishGuides, giftIdeas, seafoodTips, type DishGuide } from "./guide-data";

function DishPhoto({ dish, className }: { dish: DishGuide; className: string }) {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <Image
        src={dish.image.src}
        alt={dish.image.alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-950/80 to-transparent px-4 pb-3 pt-8 text-xs text-white/90">
        {dish.imageNote ? `${dish.imageNote} ` : ""}
        {dish.image.credit}
      </figcaption>
    </figure>
  );
}

function DishCard({ dish, flip }: { dish: DishGuide; flip: boolean }) {
  return (
    <article
      id={dish.id}
      className="grid overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-ocean-950/10 md:grid-cols-2"
    >
      <DishPhoto dish={dish} className={`min-h-[260px] ${flip ? "md:order-2" : ""}`} />
      <div className="p-7 sm:p-9">
        <h3 className="font-display text-3xl text-ocean-950">{dish.name}</h3>
        <p className="mt-3 leading-relaxed text-ocean-800/85">{dish.description}</p>
        <p className="mt-4 rounded-2xl bg-sun-400/15 px-4 py-3 text-sm text-ocean-950">
          <span className="font-semibold">Cách ăn: </span>
          {dish.howToEat}
        </p>
      </div>
    </article>
  );
}

function FeaturedDish({ dish }: { dish: DishGuide }) {
  return (
    <article id={dish.id} className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-ocean-950/15 ring-2 ring-sun-400">
      <div className="grid lg:grid-cols-[1fr_1.1fr]">
        <DishPhoto dish={dish} className="min-h-[320px]" />
        <div className="p-7 sm:p-10">
          <span className="rounded-full bg-sun-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-ocean-950">
            Món nên thử
          </span>
          <h3 className="mt-4 font-display text-4xl text-ocean-950">{dish.name}</h3>
          <p className="mt-3 text-lg leading-relaxed text-ocean-800/85">{dish.description}</p>
          <p className="mt-4 rounded-2xl bg-sun-400/15 px-4 py-3 text-sm text-ocean-950">
            <span className="font-semibold">Cách ăn: </span>
            {dish.howToEat}
          </p>
        </div>
      </div>

      <div className="grid gap-5 border-t border-ocean-100 p-7 sm:grid-cols-2 sm:p-10">
        {dish.details?.map((item) => (
          <div key={item.heading}>
            <h4 className="font-display text-xl text-ocean-600">{item.heading}</h4>
            <p className="mt-2 text-sm leading-relaxed text-ocean-800/85">{item.body}</p>
          </div>
        ))}
      </div>

      {dish.facts && (
        <dl className="grid gap-3 bg-ocean-50 p-7 sm:grid-cols-3 sm:p-10">
          {dish.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-semibold uppercase tracking-wider text-ocean-500">{fact.label}</dt>
              <dd className="mt-1 text-sm text-ocean-950">{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {dish.sources && (
        <div className="border-t border-ocean-100 px-7 py-4 text-xs text-ocean-800/75 sm:px-10">
          <p className="font-semibold">Đọc thêm về món ăn</p>
          <ul className="mt-2 space-y-2">
            {dish.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ocean-600">
                  {source.label}<span className="sr-only"> (mở trong tab mới)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export function DishGuides() {
  let regularIndex = 0;

  return (
    <section className="bg-sand-50 px-5 pb-24 pt-8 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Cẩm nang"
          title={
            <>
              Ăn gì, ăn <span className="italic text-coral-500">thế nào?</span>
            </>
          }
          description="Những món nên thử và cách thưởng thức để bữa ăn ở Nha Trang trọn vẹn hơn."
        />

        <div className="mt-16 space-y-8">
          {dishGuides.map((dish) => (
            <Reveal key={dish.id}>
              {dish.details ? <FeaturedDish dish={dish} /> : <DishCard dish={dish} flip={regularIndex++ % 2 === 1} />}
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-ocean-800/60">
          Ảnh món ăn lấy từ Wikimedia Commons; riêng bún sứa và bánh canh chả cá là ảnh minh họa tạo bằng AI.
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-gradient-to-br from-ocean-500 to-ocean-800 p-8 text-white shadow-xl">
              <h3 className="font-display text-3xl">Mang gì về làm quà?</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {giftIdeas.map((gift) => (
                  <li key={gift} className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur-md">
                    {gift}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-ocean-100">Nên mua ở cửa hàng có địa chỉ rõ ràng và kiểm tra hạn sử dụng.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-white p-8 shadow-xl shadow-ocean-950/10">
              <h3 className="font-display text-3xl text-ocean-950">Mẹo ăn hải sản</h3>
              <ul className="mt-5 space-y-3">
                {seafoodTips.map((tip) => (
                  <li key={tip} className="flex gap-3 text-ocean-800/85">
                    <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral-400" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
