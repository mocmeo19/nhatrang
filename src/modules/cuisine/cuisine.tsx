"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { photos } from "@/shared/data/images";
import { dishGuides } from "./guide-data";

export function Cuisine() {
  return (
    <section className="coastal-grain relative overflow-hidden bg-sand-100 px-5 pb-24 pt-20 sm:px-8 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ẩm thực"
          title={
            <>
              Hương vị <span className="italic text-ocean-600">của biển</span>
            </>
          }
          description="Hải sản tươi sống mỗi ngày và những món đặc sản mang đậm bản sắc miền Trung."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {[photos.lobster, photos.clams].map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.15}>
              <motion.div
                whileHover={{ rotate: index === 0 ? -1.5 : 1.5, scale: 1.02 }}
                className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-coral-500">
                  {index === 0 ? "Tôm hùm" : "Nghêu lụa"}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-center font-display text-3xl text-ocean-950">Món nên thử</h3>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {dishGuides.map((dish, index) => (
              <li key={dish.id}>
                <Reveal delay={index * 0.05}>
                  <a
                    href={`#${dish.id}`}
                    className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:-translate-y-1"
                  >
                    <span className="relative block aspect-square overflow-hidden">
                      <Image
                        src={dish.image.src}
                        alt={dish.image.alt}
                        fill
                        sizes="(min-width: 1024px) 12vw, (min-width: 640px) 22vw, 45vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </span>
                    <span className="flex min-h-[3.5rem] items-center justify-center px-3 py-2 text-center text-sm font-semibold text-ocean-950">{dish.name}</span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
