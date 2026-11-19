"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import { Icon } from "@/shared/components/icon";
import { photos } from "@/shared/data/images";

export function About() {
  return (
    <section className="coastal-grain overflow-hidden bg-sand-50 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <Reveal className="relative order-2 pb-10 pr-12 lg:order-1">
          <div className="group relative aspect-[1.1] overflow-hidden rounded-t-[45%]">
            <Image src={photos.tranPhu.src} alt={photos.tranPhu.alt} fill sizes="(min-width: 1024px) 40vw, 85vw" className="image-zoom object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[42%] rotate-6 border-[7px] border-sand-50 bg-sand-50 shadow-xl">
            <div className="relative aspect-[.85]"><Image src={photos.ponagar.src} alt={photos.ponagar.alt} fill sizes="230px" className="object-cover" /></div>
            <p className="py-2 text-center font-display text-sm italic">Dấu xưa bên sóng biển</p>
          </div>
          <div aria-hidden className="absolute left-0 top-8 flex h-24 w-24 -translate-x-3 items-center justify-center rounded-full bg-sun-400 text-ocean-950 sm:-translate-x-7"><Icon name="sun" className="compass-turn h-14 w-14" /></div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal><p className="eyebrow text-ocean-600">Không chỉ là một điểm đến</p><h2 className="mt-6 font-display text-4xl leading-[1.2] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Một miền xanh.<br />Muôn điều <em className="font-normal text-ocean-500">thương nhớ.</em></h2></Reveal>
          <Reveal delay={0.15}><p className="mt-6 text-sm leading-7 text-ocean-800/80 sm:text-base sm:leading-8">Có những nơi khiến bạn muốn đi. Nha Trang là nơi khiến bạn muốn ở lại. Ở lại thêm một bình minh trên biển, một buổi chiều lang thang phố nhỏ, một bữa ăn đậm vị miền Trung.</p><p className="mt-4 text-sm leading-7 text-ocean-800/80 sm:text-base sm:leading-8">Từ những hòn đảo xanh trong đến tháp Chăm trầm mặc, mỗi góc nhỏ đều có một câu chuyện chờ bạn khám phá.</p></Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex gap-8 border-y border-ocean-950/15 py-6">
              {[{ icon: "wave", title: "Biển đảo", text: "Trong xanh & tự do" }, { icon: "sun", title: "Nhịp sống", text: "Chậm rãi & an yên" }].map((item) => <div key={item.title} className="flex items-center gap-3"><Icon name={item.icon as "wave" | "sun"} className="h-7 w-7 shrink-0 text-ocean-500" /><div><p className="text-sm font-semibold">{item.title}</p><p className="mt-1 text-[11px] text-ocean-800/70">{item.text}</p></div></div>)}
            </div>
            <Link href="/van-hoa" className="group mt-7 inline-flex min-h-11 items-center gap-6 text-sm font-semibold">Câu chuyện của Nha Trang <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-2" /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
