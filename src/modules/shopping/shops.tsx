"use client";

import { useState } from "react";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { shopKinds, shoppingTips, shops, type ShopKind } from "./data";

const mapUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address.split(" (")[0]}, Nha Trang`)}`;

export function Shops() {
  const [kind, setKind] = useState<ShopKind | "all">("all");
  const visible = kind === "all" ? shops : shops.filter((shop) => shop.kind === kind);
  const tabs = [{ id: "all" as const, label: "Tất cả" }, ...shopKinds];

  return (
    <section className="relative overflow-hidden rounded-b-[2.5rem] bg-gradient-to-b from-ocean-600 to-ocean-950 px-5 pb-24 pt-20 sm:px-8 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow="Gợi ý cửa hàng"
          title={
            <>
              Mua ở đâu <span className="italic text-sun-400">cho yên tâm</span>
            </>
          }
          description="Địa chỉ tổng hợp từ nhiều bài hướng dẫn du lịch; nên gọi hoặc xem bản đồ để xác nhận trước khi đến."
        />

        <div role="group" aria-label="Lọc theo loại cửa hàng" className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              aria-pressed={kind === tab.id}
              onClick={() => setKind(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                kind === tab.id ? "bg-sun-400 text-ocean-950" : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((shop, index) => (
            <li key={shop.id}>
              <Reveal delay={(index % 3) * 0.06} className="h-full">
                <article className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-xl shadow-black/20">
                  <span className="w-fit rounded-full bg-ocean-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ocean-600">
                    {shopKinds.find((item) => item.id === shop.kind)?.label}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-ocean-950">{shop.name}</h3>
                  <dl className="mt-3 space-y-2 text-sm text-ocean-800/90">
                    <div>
                      <dt className="inline font-semibold text-ocean-950">Địa chỉ: </dt>
                      <dd className="inline">{shop.address}, Nha Trang</dd>
                    </div>
                    {shop.hours && (
                      <div>
                        <dt className="inline font-semibold text-ocean-950">Giờ mở cửa: </dt>
                        <dd className="inline">{shop.hours}</dd>
                      </div>
                    )}
                    <div>
                      <dt className="inline font-semibold text-ocean-950">Bán: </dt>
                      <dd className="inline">{shop.sells}</dd>
                    </div>
                  </dl>
                  {(shop.note || shop.singleSource) && (
                    <p className="mt-3 text-xs leading-relaxed text-ocean-800/70">
                      {shop.note ?? "Thông tin từ một nguồn; nên gọi hỏi lại trước khi đến."}
                    </p>
                  )}
                  <a
                    href={mapUrl(shop.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-4 text-sm font-semibold text-ocean-600 hover:text-coral-500"
                  >
                    Xem trên bản đồ ↗
                  </a>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-16 rounded-[2rem] bg-white/10 p-8 backdrop-blur-md sm:p-10">
          <h3 className="font-display text-3xl text-white">Mẹo mua quà</h3>
          <ul className="mt-5 grid gap-3 text-ocean-100 md:grid-cols-2">
            {shoppingTips.map((tip) => (
              <li key={tip} className="flex gap-3 leading-relaxed">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-400" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
