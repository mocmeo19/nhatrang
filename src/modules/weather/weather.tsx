"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { annual, climate, climateSource, monthAdvice, outlook, phases } from "./data";

const chart = { width: 640, height: 300, left: 44, right: 44, top: 20, bottom: 34, rainMax: 400, tempMin: 20, tempMax: 34 };
const plotWidth = chart.width - chart.left - chart.right;
const plotHeight = chart.height - chart.top - chart.bottom;
const step = plotWidth / climate.length;

const xAt = (index: number) => chart.left + step * index + step / 2;
const yRain = (value: number) => chart.top + plotHeight * (1 - value / chart.rainMax);
const yTemp = (value: number) => chart.top + plotHeight * (1 - (value - chart.tempMin) / (chart.tempMax - chart.tempMin));
const line = (pick: (item: (typeof climate)[number]) => number) =>
  climate.map((item, index) => `${index === 0 ? "M" : "L"}${xAt(index).toFixed(1)} ${yTemp(pick(item)).toFixed(1)}`).join(" ");

const toneClass = { good: "text-palm-500", ok: "text-ocean-950", wet: "text-coral-500" };

export function Weather() {
  const [selected, setSelected] = useState(3);

  useEffect(() => {
    setSelected(new Date().getMonth());
  }, []);

  const item = climate[selected];
  const current = outlook(item);
  const stats = [
    { label: "Nhiệt độ cao nhất (TB)", value: `${item.max.toFixed(1)} °C` },
    { label: "Nhiệt độ thấp nhất (TB)", value: `${item.min.toFixed(1)} °C` },
    { label: "Lượng mưa", value: `${Math.round(item.rain)} mm` },
    { label: "Số ngày mưa", value: `${item.rainyDays.toFixed(1)} ngày` },
    { label: "Giờ nắng", value: `${Math.round(item.sunshine)} giờ` },
    { label: "Độ ẩm", value: `${item.humidity.toFixed(0)} %` },
  ];

  return (
    <section className="bg-sand-50 px-5 pb-24 pt-8 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Khí hậu theo tháng"
          title={
            <>
              Tháng nào, <span className="italic text-coral-500">thời tiết ra sao?</span>
            </>
          }
          description="Số liệu trung bình nhiều năm, giúp chọn thời điểm đi. Đây không phải dự báo cho ngày cụ thể."
        />

        <div role="group" aria-label="Chọn tháng" className="mt-12 grid grid-cols-6 gap-2 sm:grid-cols-12">
          {climate.map((entry, index) => (
            <button
              key={entry.month}
              type="button"
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              className={`rounded-xl py-2.5 text-sm font-semibold transition-colors ${
                selected === index ? "bg-ocean-800 text-white" : "bg-white text-ocean-800 hover:bg-ocean-100"
              }`}
            >
              T{entry.month}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="min-w-0 rounded-3xl bg-white p-5 shadow-xl shadow-ocean-950/10 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl text-ocean-950">Biểu đồ khí hậu cả năm</h3>
              <ul className="flex flex-wrap gap-4 text-xs text-ocean-800/80">
                <li className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-sm bg-ocean-400" /> Mưa (mm)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-0.5 w-4 bg-coral-500" /> Cao nhất (°C)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-0.5 w-4 bg-ocean-800" /> Thấp nhất (°C)
                </li>
              </ul>
            </div>
            <div className="mt-4 overflow-x-auto">
              <svg
                viewBox={`0 0 ${chart.width} ${chart.height}`}
                role="img"
                aria-label="Biểu đồ lượng mưa và nhiệt độ trung bình theo tháng ở Nha Trang"
                className="min-w-[520px]"
              >
                {[0, 100, 200, 300, 400].map((tick) => (
                  <g key={tick}>
                    <line x1={chart.left} x2={chart.width - chart.right} y1={yRain(tick)} y2={yRain(tick)} className="stroke-ocean-100" />
                    <text x={chart.left - 8} y={yRain(tick) + 4} textAnchor="end" className="fill-ocean-800/70 text-[11px]">
                      {tick}
                    </text>
                  </g>
                ))}
                {[20, 24, 28, 32].map((tick) => (
                  <text key={tick} x={chart.width - chart.right + 8} y={yTemp(tick) + 4} className="fill-ocean-800/70 text-[11px]">
                    {tick}°
                  </text>
                ))}
                {climate.map((entry, index) => (
                  <g key={entry.month}>
                    <rect
                      x={xAt(index) - step * 0.3}
                      y={yRain(entry.rain)}
                      width={step * 0.6}
                      height={yRain(0) - yRain(entry.rain)}
                      rx={3}
                      className={selected === index ? "fill-coral-400" : "fill-ocean-400"}
                    />
                    <text x={xAt(index)} y={chart.height - 12} textAnchor="middle" className="fill-ocean-800/80 text-[11px]">
                      {entry.month}
                    </text>
                  </g>
                ))}
                <path d={line((entry) => entry.max)} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="stroke-coral-500" />
                <path d={line((entry) => entry.min)} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="stroke-ocean-800" />
                <circle cx={xAt(selected)} cy={yTemp(item.max)} r={5} className="fill-coral-500 stroke-white" strokeWidth={2} />
                <circle cx={xAt(selected)} cy={yTemp(item.min)} r={5} className="fill-ocean-800 stroke-white" strokeWidth={2} />
              </svg>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-ocean-600 to-ocean-950 p-7 text-white shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-400">Tháng {item.month}</p>
            <span className={`mt-3 inline-block rounded-full px-4 py-1 text-sm font-semibold ${toneClass[current.tone]} bg-white`}>
              {current.label}
            </span>
            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs text-ocean-100/80">{stat.label}</dt>
                  <dd className="mt-0.5 font-display text-2xl tabular-nums">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <Reveal className="mt-6">
          <div className="rounded-3xl bg-white p-7 shadow-xl shadow-ocean-950/10">
            <h3 className="font-display text-2xl text-ocean-950">Đi vào tháng {item.month} thì nên…</h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {monthAdvice(item).map((tip) => (
                <li key={tip} className="rounded-2xl bg-ocean-50 p-4 text-sm leading-relaxed text-ocean-950">
                  {tip}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ocean-800/80">
              Muốn có lịch trình theo tháng đi và sở thích?{" "}
              <Link href="/lap-ke-hoach" className="font-semibold text-ocean-600 hover:text-coral-500">
                Mở trang Lên kế hoạch →
              </Link>
            </p>
          </div>
        </Reveal>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Theo mùa"
            title={
              <>
                Ba giai đoạn <span className="italic text-ocean-500">trong năm</span>
              </>
            }
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {phases.map((phase, index) => (
              <li key={phase.months}>
                <Reveal delay={index * 0.1} className="h-full">
                  <article className="h-full rounded-3xl border-t-4 border-sun-400 bg-white p-7 shadow-xl shadow-ocean-950/10">
                    <p className="text-sm font-semibold text-coral-500">{phase.months}</p>
                    <h4 className="mt-2 font-display text-2xl text-ocean-950">{phase.title}</h4>
                    <p className="mt-3 leading-relaxed text-ocean-800/85">{phase.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-12">
          <dl className="grid grid-cols-2 gap-6 rounded-3xl bg-ocean-950 p-7 text-white sm:grid-cols-4">
            {[
              { label: "Nhiệt độ trung bình năm", value: `${annual.mean} °C` },
              { label: "Lượng mưa cả năm", value: `${Math.round(annual.rain).toLocaleString("vi-VN")} mm` },
              { label: "Giờ nắng cả năm", value: `${Math.round(annual.sunshine).toLocaleString("vi-VN")} giờ` },
              { label: "Ngày mưa cả năm", value: `${Math.round(annual.rainyDays)} ngày` },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wider text-sun-400">{stat.label}</dt>
                <dd className="mt-1 font-display text-3xl tabular-nums">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-ocean-800/70">
            Nguồn số liệu:{" "}
            <a href={climateSource.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-coral-500">
              {climateSource.label}
            </a>
            . Các trang du lịch và khí tượng khác có thể ghi lượng mưa khác (khoảng 1.000 – 1.600 mm mỗi năm) do khác thời kỳ lấy số liệu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
