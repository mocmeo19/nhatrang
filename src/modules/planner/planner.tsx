"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { Fragment, useMemo, useState } from "react";
import type { Interest } from "./activities";
import { companions, dayOptions, interests, monthLabels, paces, type Companion, type Pace } from "./data";
import { buildPlan, isRest, planToText, slotLabel } from "./itinerary";
import type { TripPreferences } from "./preferences";

const legend = "text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600";

const optionClass = (selected: boolean) =>
  `rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
    selected ? "border-ocean-800 bg-ocean-800 text-white" : "border-ocean-950/20 bg-white text-ocean-950 hover:border-ocean-800"
  }`;

export function Planner({ initialPreferences }: { initialPreferences?: TripPreferences }) {
  const [days, setDays] = useState<number>(initialPreferences?.days ?? 3);
  const [companion, setCompanion] = useState<Companion>("cap-doi");
  const [picked, setPicked] = useState<Interest[]>(initialPreferences?.interests ?? ["bien-dao", "am-thuc"]);
  const [pace, setPace] = useState<Pace>("vua");
  const [month, setMonth] = useState<number | null>(initialPreferences?.month ?? null);
  const [copied, setCopied] = useState(false);

  const plan = useMemo(() => buildPlan({ days, companion, interests: picked, pace, month }), [days, companion, picked, pace, month]);
  const summary = [
    `${days} ngày ${days - 1} đêm`,
    companions.find((item) => item.id === companion)?.label,
    picked.length > 0 ? picked.map((id) => interests.find((item) => item.id === id)?.label).join(", ") : "Mọi sở thích",
    paces.find((item) => item.id === pace)?.label,
    month ? monthLabels[month - 1] : "Chưa chốt tháng",
  ].filter(Boolean) as string[];

  const toggle = (id: Interest) => setPicked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(planToText(plan, summary.join(" · ")));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="bg-sand-50 px-5 pb-24 pt-10 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className={legend}>Lịch trình theo cách của bạn</p>
          <h2 className="mt-3 font-display text-4xl text-ocean-950 sm:text-5xl">Chọn vài điều, nhận một lịch trình</h2>
          <p className="mt-4 text-lg leading-relaxed text-ocean-800/85">
            Trả lời năm câu hỏi ngắn. Lịch trình tự đổi theo lựa chọn: sắp điểm gần nhau cùng một buổi, bỏ hoạt động không hợp và tránh biển động vào mùa mưa.
          </p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[21rem_minmax(0,1fr)]">
          <form onSubmit={(event) => event.preventDefault()} className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <fieldset>
              <legend className={legend}>1 · Đi mấy ngày</legend>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {dayOptions.map((value) => (
                  <button key={value} type="button" aria-pressed={days === value} onClick={() => setDays(value)} className={`${optionClass(days === value)} text-center`}>
                    <span className="block font-display text-2xl leading-none">{value}</span>
                    <span className="mt-1 block text-[0.7rem] opacity-80">{value - 1} đêm</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="border-t border-ocean-950/15 pt-6"><fieldset>
              <legend className={legend}>2 · Đi cùng ai</legend>
              <div className="mt-3 grid gap-2">
                {companions.map((item) => (
                  <button key={item.id} type="button" aria-pressed={companion === item.id} onClick={() => setCompanion(item.id)} className={optionClass(companion === item.id)}>
                    <span className="block font-semibold">{item.label}</span>
                    <span className="block text-xs opacity-75">{item.hint}</span>
                  </button>
                ))}
              </div>
            </fieldset></div>

            <div className="border-t border-ocean-950/15 pt-6"><fieldset>
              <legend className={legend}>3 · Thích gì (chọn nhiều)</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <button key={item.id} type="button" aria-pressed={picked.includes(item.id)} onClick={() => toggle(item.id)} className={optionClass(picked.includes(item.id))}>
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset></div>

            <div className="border-t border-ocean-950/15 pt-6"><fieldset>
              <legend className={legend}>4 · Nhịp độ</legend>
              <div className="mt-3 grid gap-2">
                {paces.map((item) => (
                  <button key={item.id} type="button" aria-pressed={pace === item.id} onClick={() => setPace(item.id)} className={optionClass(pace === item.id)}>
                    <span className="block font-semibold">{item.label}</span>
                    <span className="block text-xs opacity-75">{item.hint}</span>
                  </button>
                ))}
              </div>
            </fieldset></div>

            <div className="border-t border-ocean-950/15 pt-6">
              <label htmlFor="month" className={legend}>
                5 · Đi tháng nào
              </label>
              <select
                id="month"
                value={month ?? ""}
                onChange={(event) => setMonth(event.target.value ? Number(event.target.value) : null)}
                className="mt-3 w-full rounded-lg border border-ocean-950/20 bg-white px-3 py-2.5 text-sm text-ocean-950"
              >
                <option value="">Chưa chốt</option>
                {monthLabels.map((label, index) => (
                  <option key={label} value={index + 1}>
                    {label}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-xs text-ocean-800/70">
                Chọn tháng để lịch trình tránh biển động.{" "}
                <Link href="/van-hoa/thoi-tiet" className="font-semibold text-ocean-600 hover:text-coral-500">
                  Xem khí hậu các tháng
                </Link>
              </p>
            </div>
            <a href="#ket-qua" className="block rounded-lg bg-ocean-800 px-4 py-3 text-center text-sm font-semibold text-white lg:hidden">
              Xem lịch trình ↓
            </a>
          </form>

          <div id="ket-qua" aria-live="polite" className="scroll-mt-24">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-ocean-950 pb-4">
              <div>
                <p className={legend}>Lịch trình gợi ý</p>
                <p className="mt-2 text-sm leading-relaxed text-ocean-800/85">{summary.join("  ·  ")}</p>
              </div>
              <button
                type="button"
                onClick={copy}
                className="rounded-lg border border-ocean-950 px-4 py-2 text-sm font-semibold text-ocean-950 transition-colors hover:bg-ocean-950 hover:text-white"
              >
                {copied ? "Đã sao chép" : "Sao chép lịch trình"}
              </button>
            </div>

            {plan.notes.length > 0 && (
              <ul className="mt-6 space-y-2 border-l-4 border-sun-400 bg-sun-400/10 py-3 pl-4 pr-3 text-sm leading-relaxed text-ocean-950">
                {plan.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            )}
            {plan.skipped.length > 0 && (
              <p className="mt-4 text-sm leading-relaxed text-ocean-800/80">
                <span className="font-semibold text-ocean-950">Tạm bỏ qua: </span>
                {plan.skipped.join("; ")}.
              </p>
            )}

            <AnimatePresence mode="wait">
              <motion.ol
                key={`${days}-${companion}-${picked.join()}-${pace}-${month}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 space-y-12"
              >
                {plan.days.map((day) => (
                  <li key={day.number} className="grid gap-4 sm:grid-cols-[4.5rem_minmax(0,1fr)]">
                    <p className="font-display text-6xl leading-none text-coral-500 tabular-nums sm:text-7xl">{String(day.number).padStart(2, "0")}</p>
                    <div>
                      <h3 className="font-display text-2xl text-ocean-950 sm:text-3xl">{day.title}</h3>
                      {day.lead && <p className="mt-1 text-sm text-ocean-800/80">{day.lead}</p>}

                      <ul className="mt-4 divide-y divide-ocean-950/10 border-y border-ocean-950/10">
                        {day.items.map((item, index) => {
                          const first = day.items.findIndex((other) => other.slot === item.slot) === index;
                          return (
                            <li key={`${item.slot}-${index}`} className="grid gap-x-4 gap-y-1 py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
                              <p className="text-sm">
                                <span className={`block font-semibold ${first ? "text-ocean-950" : "text-transparent"}`} aria-hidden={!first}>
                                  {slotLabel(item.slot)}
                                </span>
                                <span className="block tabular-nums text-ocean-800/70">{item.time}</span>
                              </p>
                              {isRest(item) ? (
                                <p className="text-ocean-800/80">{item.text}</p>
                              ) : (
                                <div>
                                  <p className="font-semibold text-ocean-950">
                                    {item.activity.href ? (
                                      <Link href={item.activity.href} className="underline decoration-ocean-400 underline-offset-4 hover:text-coral-500">
                                        {item.activity.title}
                                      </Link>
                                    ) : (
                                      item.activity.title
                                    )}
                                    <span className="ml-2 text-xs font-normal text-ocean-800/70">{item.activity.duration}</span>
                                  </p>
                                  <p className="mt-1 text-sm leading-relaxed text-ocean-800/85">{item.activity.note}</p>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>

                      <p className="mt-3 text-sm text-ocean-800/85">
                        {day.meals.map((meal, index) => (
                          <Fragment key={meal.label}>
                            {index > 0 && " · "}
                            <span className="font-semibold text-ocean-950">{meal.label}:</span> {meal.text}
                          </Fragment>
                        ))}
                      </p>
                    </div>
                  </li>
                ))}
              </motion.ol>
            </AnimatePresence>

            <p className="mt-10 text-xs leading-relaxed text-ocean-800/70">
              Đây là gợi ý để bắt đầu, không phải lịch cố định. Giờ mở cửa, giá vé và lịch chạy tàu thay đổi, hãy kiểm tra trên trang từng điểm đến trước khi đặt.
              Các gợi ý bữa ăn lấy từ danh sách món ở trang{" "}
              <Link href="/am-thuc/mon-ngon" className="font-semibold text-ocean-600 hover:text-coral-500">
                Món ngon
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
