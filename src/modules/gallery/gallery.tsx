"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { commonsUrl } from "@/shared/data/images";
import { categories, galleryItems, type Category } from "./data";

export function Gallery() {
  const [category, setCategory] = useState<Category>("Tất cả");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (category === "Tất cả" ? galleryItems : galleryItems.filter((item) => item.category === category)),
    [category],
  );

  const step = useCallback(
    (delta: number) => {
      setIndex((current) => (current === null ? current : (current + delta + items.length) % items.length));
    },
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, step]);

  const current = index === null ? null : items[index];

  return (
    <section className="bg-sand-50 px-5 pb-24 pt-12 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Thư viện"
          title={
            <>
              Nha Trang <span className="italic text-ocean-500">qua ống kính</span>
            </>
          }
          description="Nhấn vào ảnh để xem lớn, dùng phím mũi tên để chuyển ảnh. Lọc theo chủ đề để tìm nhanh hơn."
        />

        <div role="tablist" aria-label="Lọc ảnh theo chủ đề" className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((name) => {
            const selected = name === category;
            const count = name === "Tất cả" ? galleryItems.length : galleryItems.filter((item) => item.category === name).length;
            return (
              <button
                key={name}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setCategory(name)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  selected ? "bg-ocean-600 text-white shadow-lg" : "bg-white text-ocean-800 hover:bg-ocean-100"
                }`}
              >
                {name} <span className={selected ? "text-ocean-100" : "text-ocean-500"}>({count})</span>
              </button>
            );
          })}
        </div>

        <motion.div key={category} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <Reveal key={item.photo.src} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Xem ảnh: ${item.photo.alt}`}
                className="group relative block w-full overflow-hidden rounded-3xl shadow-lg shadow-ocean-950/10"
              >
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  width={item.photo.width}
                  height={item.photo.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ocean-950/70 to-transparent p-5 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.photo.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.photo.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ocean-950/95 p-4 backdrop-blur-md"
            onClick={() => setIndex(null)}
          >
            <button
              type="button"
              aria-label="Đóng"
              onClick={() => setIndex(null)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/30"
            >
              ✕
            </button>
            {(["prev", "next"] as const).map((direction) => (
              <button
                key={direction}
                type="button"
                aria-label={direction === "prev" ? "Ảnh trước" : "Ảnh sau"}
                onClick={(event) => {
                  event.stopPropagation();
                  step(direction === "prev" ? -1 : 1);
                }}
                className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/30 ${
                  direction === "prev" ? "left-4" : "right-4"
                }`}
              >
                {direction === "prev" ? "‹" : "›"}
              </button>
            ))}
            <motion.figure
              key={current.photo.src}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-5xl"
            >
              <Image
                src={current.photo.src}
                alt={current.photo.alt}
                width={current.photo.width}
                height={current.photo.height}
                sizes="100vw"
                className="max-h-[74vh] w-auto rounded-2xl object-contain"
              />
              <figcaption className="mt-4 space-y-2 text-center text-sm text-white/80">
                <p>
                  <span className="text-sun-400">{(index ?? 0) + 1} / {items.length}</span> · {current.photo.alt}
                </p>
                <p>
                  {current.href && (
                    <>
                      <Link href={current.href} className="font-semibold text-sun-400 hover:underline">
                        Đọc thuyết minh →
                      </Link>{" "}
                      ·{" "}
                    </>
                  )}
                  <a
                    href={commonsUrl(current.photo.commonsFile)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-sun-400"
                  >
                    Wikimedia Commons ({current.photo.license})
                  </a>
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
