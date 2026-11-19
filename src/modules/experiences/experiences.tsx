"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { photos } from "@/shared/data/images";

type Experience = {
  title: string;
  description: string;
  emoji: string;
  src: string;
  alt: string;
  span: string;
};

const experiences: Experience[] = [
  {
    title: "Lặn ngắm san hô",
    description: "Thả mình xuống làn nước trong vắt Hòn Mun, hòa cùng đàn cá nhiệt đới rực rỡ.",
    emoji: "🤿",
    src: "/images/ai-diving.jpg",
    alt: "Minh họa rạn san hô nhiều màu sắc dưới biển",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Tour 4 đảo",
    description: "Hòn Mun, Hòn Tằm, Hòn Miễu, Hòn Một… điểm dừng tùy tour — một ngày tràn ngập nắng gió.",
    emoji: "🏝️",
    src: photos.monkey.src,
    alt: photos.monkey.alt,
    span: "",
  },
  {
    title: "Tắm bùn khoáng",
    description: "Thư giãn với suối khoáng nóng và bùn thiên nhiên giúp phục hồi năng lượng.",
    emoji: "♨️",
    src: "/images/ai-mud.jpg",
    alt: "Minh họa spa tắm bùn khoáng giữa vườn nhiệt đới",
    span: "",
  },
  {
    title: "Du thuyền hoàng hôn",
    description: "Ngắm mặt trời lặn nhuộm vàng vịnh biển trên chiếc thuyền gỗ truyền thống.",
    emoji: "🌅",
    src: "/images/ai-sunset.jpg",
    alt: "Minh họa thuyền gỗ giữa vịnh biển lúc hoàng hôn",
    span: "lg:col-span-2",
  },
  {
    title: "Cáp treo vượt biển",
    description: "Bay qua vịnh trên tuyến cáp treo dài, thu trọn toàn cảnh biển đảo từ trên cao.",
    emoji: "🚡",
    src: photos.cableCar.src,
    alt: photos.cableCar.alt,
    span: "sm:col-span-2 lg:col-span-4",
  },
];

export function Experiences() {
  return (
    <section className="relative bg-sand-50 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trải nghiệm"
          title={
            <>
              Làm gì ở <span className="italic text-coral-500">Nha Trang?</span>
            </>
          }
          description="Từ phiêu lưu dưới đáy biển đến những phút giây thư giãn — hãy chọn nhịp điệu của riêng bạn."
        />

        <div className="mt-16 grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className={item.span}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-[2rem] shadow-xl shadow-ocean-950/10"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/20 to-transparent" />
                <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg transition-transform duration-500 group-hover:rotate-[360deg]">
                  {item.emoji}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-white">{item.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/90 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ocean-800/60">
          Ảnh minh họa Lặn ngắm san hô, Tắm bùn khoáng và Du thuyền hoàng hôn được tạo bằng AI.
        </p>
      </div>
    </section>
  );
}
