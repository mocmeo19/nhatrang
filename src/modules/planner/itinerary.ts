import { climate, monthAdvice, outlook } from "@/modules/weather/data";
import { activities, type Activity, type Interest, type Slot, type Zone } from "./activities";
import type { Companion, Pace } from "./data";

export type Preferences = {
  days: number;
  companion: Companion;
  interests: Interest[];
  pace: Pace;
  month: number | null;
};

export type PlanItem = { slot: Slot; time: string; activity: Activity };
export type PlanRest = { slot: Slot; time: string; text: string };
export type PlanDay = {
  number: number;
  title: string;
  lead?: string;
  items: (PlanItem | PlanRest)[];
  meals: { label: string; text: string }[];
};
export type Plan = { days: PlanDay[]; notes: string[]; skipped: string[] };

export const isRest = (item: PlanItem | PlanRest): item is PlanRest => "text" in item;

const slotTime: Record<Slot, string> = { sang: "8:00 – 11:30", chieu: "14:00 – 17:30", toi: "18:30 – 21:30" };
const firstDaySlotTime: Record<Slot, string> = { sang: slotTime.sang, chieu: "14:30 – 17:30", toi: slotTime.toi };
const dayLabel: Record<Slot, string> = { sang: "Sáng", chieu: "Chiều", toi: "Tối" };
export const slotLabel = (slot: Slot) => dayLabel[slot];

const halves: Record<Slot, [string, string]> = {
  sang: ["8:00 – 9:45", "10:00 – 11:30"],
  chieu: ["14:00 – 15:45", "16:00 – 17:30"],
  toi: ["18:30 – 20:00", "20:15 – 21:30"],
};
const firstDayChieuHalves: [string, string] = ["14:30 – 16:00", "16:15 – 17:30"];
const halfTimes = (slot: Slot, firstDay: boolean) => (firstDay && slot === "chieu" ? firstDayChieuHalves : halves[slot]);

const adjacent: Record<Zone, Zone[]> = {
  "trung-tam": ["bac", "nam"],
  bac: ["trung-tam"],
  nam: ["trung-tam", "vinh"],
  vinh: ["nam"],
  xa: [],
};

const zoneTitle: Record<Zone, string> = {
  "trung-tam": "Thành phố và biển",
  bac: "Phía bắc: tháp, đá và suối khoáng",
  nam: "Khu Cầu Đá và vịnh",
  vinh: "Trong vịnh",
  xa: "Đi xa khỏi thành phố",
};

const breakfasts = ["bánh căn", "bún sứa", "bún chả cá", "bánh canh chả cá"];
const lunches = ["bún chả cá", "nem nướng", "bánh xèo", "bò nướng"];
const dinners = ["hải sản", "nem nướng", "bánh xèo", "bò nướng"];

const pickBy = <T,>(list: T[], index: number) => list[index % list.length];

const dailySlots = (day: number, total: number, pace: Pace): Slot[] => {
  if (day === 0) return ["chieu", "toi"];
  if (day === total - 1) return pace === "thong-tha" ? ["sang"] : ["sang", "chieu"];
  return ["sang", "chieu", "toi"];
};

type Context = {
  prefs: Preferences;
  rainy: boolean;
  damp: boolean;
  skipped: Set<string>;
};

const matches = (activity: Activity, interests: Interest[]) => activity.interests.filter((item) => interests.includes(item)).length;

const relevant = (activity: Activity, interests: Interest[]) =>
  interests.length === 0 || matches(activity, interests) > 0 || activity.priority === 3;

const allowed = (activity: Activity, ctx: Context): boolean => {
  const { companion, month } = ctx.prefs;
  if (companion === "gia-dinh" && activity.kids === "avoid") return false;
  if (companion === "nguoi-lon-tuoi" && activity.seniors === "hard") return false;
  if (month && activity.months && (month < activity.months[0] || month > activity.months[1])) {
    if (relevant(activity, ctx.prefs.interests)) ctx.skipped.add(`${activity.title} (chỉ chạy khoảng tháng ${activity.months[0]} – ${activity.months[1]})`);
    return false;
  }
  if (ctx.rainy && activity.exposure === "sea") {
    if (relevant(activity, ctx.prefs.interests)) ctx.skipped.add(activity.title);
    return false;
  }
  return true;
};

const score = (activity: Activity, ctx: Context, dayZones: Zone[]): number => {
  const { companion, interests } = ctx.prefs;
  let value = activity.priority * 2 + matches(activity, interests) * 4;
  if (companion === "gia-dinh" && activity.kids === "good") value += 3;
  if (companion === "cap-doi" && activity.romantic) value += 2;
  if (companion === "nguoi-lon-tuoi" && activity.exposure === "indoor") value += 1;
  if (ctx.rainy) value += activity.exposure === "indoor" ? 3 : -3;
  else if (ctx.damp) value += activity.exposure === "indoor" ? 1 : activity.exposure === "sea" ? -2 : -1;
  if (dayZones.length > 0) {
    if (dayZones.includes(activity.zone)) value += 3;
    else if (dayZones.some((zone) => adjacent[zone].includes(activity.zone))) value += 1;
  }
  return value;
};

const best = (pool: Activity[], ctx: Context, dayZones: Zone[], slot: Slot, span: 1 | 2) => {
  const candidates = pool.filter((item) => item.span === span && item.slots.includes(slot) && relevant(item, ctx.prefs.interests));
  return candidates.sort((a, b) => score(b, ctx, dayZones) - score(a, ctx, dayZones))[0];
};

export function buildPlan(prefs: Preferences): Plan {
  const monthData = prefs.month ? climate[prefs.month - 1] : null;
  const ctx: Context = {
    prefs,
    rainy: monthData ? monthData.rain >= 200 : false,
    damp: monthData ? monthData.rain >= 100 && monthData.rain < 200 : false,
    skipped: new Set(),
  };
  const pool = activities.filter((item) => allowed(item, ctx));
  const used = new Set<string>();
  const take = (item: Activity) => {
    used.add(item.id);
    return item;
  };
  const free = () => pool.filter((item) => !used.has(item.id));

  const slotsByDay = Array.from({ length: prefs.days }, (_, day) => dailySlots(day, prefs.days, prefs.pace));
  const last = prefs.days - 1;
  const heavyDays = slotsByDay.flatMap((slots, day) =>
    slots.includes("sang") && slots.includes("chieu") && (day !== last || prefs.days === 2) ? [day] : [],
  );
  const heavyBudget =
    prefs.pace === "thong-tha"
      ? Math.min(1, heavyDays.length)
      : prefs.pace === "vua"
        ? Math.min(Math.ceil((prefs.days - 1) / 2), heavyDays.length)
        : heavyDays.length;

  const heavy = new Map<number, Activity>();
  for (const day of heavyDays) {
    if (heavy.size >= heavyBudget) break;
    const pick = best(free(), ctx, [], "sang", 2);
    if (pick) heavy.set(day, take(pick));
  }

  const days: PlanDay[] = slotsByDay.map((slots, day) => {
    const items: (PlanItem | PlanRest)[] = [];
    const zones: Zone[] = [];
    const heavyPick = heavy.get(day);
    const times = day === 0 ? firstDaySlotTime : slotTime;

    for (const slot of slots) {
      if (heavyPick && (slot === "sang" || slot === "chieu")) {
        if (slot === "sang") {
          zones.push(heavyPick.zone);
          items.push({ slot, time: "7:30 – 16:30", activity: heavyPick });
        }
        continue;
      }
      if (prefs.pace === "thong-tha" && slot === "chieu" && day !== 0) {
        items.push({ slot, time: times[slot], text: "Nghỉ trưa, tắm biển hoặc cà phê tự chọn; không xếp điểm tham quan." });
        continue;
      }
      const pick = best(free(), ctx, zones, slot, 1);
      if (pick) {
        zones.push(pick.zone);
        const pairing = prefs.pace === "day-dac" && slot !== "toi" && pick.short;
        const second = pairing
          ? free()
              .filter((item) => item.id !== pick.id && item.short && item.slots.includes(slot) && relevant(item, prefs.interests) && (item.zone === pick.zone || adjacent[pick.zone].includes(item.zone)))
              .sort((a, b) => score(b, ctx, zones) - score(a, ctx, zones))[0]
          : undefined;
        if (second) {
          const [firstTime, secondTime] = halfTimes(slot, day === 0);
          items.push({ slot, time: firstTime, activity: take(pick) }, { slot, time: secondTime, activity: take(second) });
        } else {
          items.push({ slot, time: times[slot], activity: take(pick) });
        }
        continue;
      }
      items.push({ slot, time: times[slot], text: "Thời gian tự do: dạo biển, cà phê hoặc nghỉ ngơi." });
    }

    const mealsIncluded = Boolean(heavyPick?.mealIncluded);
    const meals = [
      { label: "Sáng", text: pickBy(breakfasts, day) },
      { label: "Trưa", text: mealsIncluded ? "theo tour (thường có bữa trưa trên thuyền)" : pickBy(lunches, day) },
      { label: "Tối", text: pickBy(dinners, day + (prefs.interests.includes("am-thuc") ? 0 : 1)) },
    ].filter((meal) => meal.label !== "Tối" || slots.includes("toi"));

    const anchor = heavyPick?.zone ?? zones[0] ?? "trung-tam";
    const base = heavyPick ? heavyPick.title : zoneTitle[anchor];
    const title = day === 0 ? `Đến nơi: ${zoneTitle[anchor].toLowerCase()}` : day === prefs.days - 1 && !heavyPick ? `${base} và ra về` : base;
    const lead =
      day === 0
        ? "Nhận phòng và ăn trưa nhẹ trước khi bắt đầu."
        : day === prefs.days - 1
          ? heavyPick
            ? "Trả phòng gửi hành lý; tour kết thúc khoảng 16:30 nên chọn chuyến bay buổi tối. Sân bay Cam Ranh cách trung tâm khoảng 35 km."
            : "Trả phòng, chừa thời gian ra sân bay Cam Ranh (khoảng 35 km, đi xe 40 – 60 phút)."
          : undefined;
    return { number: day + 1, title, lead, items, meals };
  });

  const notes: string[] = [];
  if (monthData) {
    const status = outlook(monthData).label.toLowerCase();
    notes.push(
      `Tháng ${monthData.month}: ${status}, trung bình khoảng ${Math.round(monthData.rain)} mm mưa trong ${monthData.rainyDays.toFixed(0)} ngày và ${Math.round(monthData.sunshine)} giờ nắng. ${monthAdvice(monthData)[0]}`,
    );
  }
  if (prefs.companion === "gia-dinh") notes.push("Đã bỏ các hoạt động không hợp trẻ nhỏ (như lặn bình khí) và ưu tiên điểm có thể dừng nghỉ dễ.");
  if (prefs.companion === "nguoi-lon-tuoi") notes.push("Đã bỏ các điểm cần leo nhiều hoặc đi tàu dài; chùa Long Sơn và đảo xa không có trong lịch.");
  if (prefs.pace === "day-dac") notes.push("Nhịp dày: nên đặt xe hoặc tour trước để không mất thời gian chờ giữa các điểm.");

  return { days, notes, skipped: [...ctx.skipped] };
}

export function planToText(plan: Plan, label: string): string {
  const lines = [`Lịch trình Nha Trang — ${label}`, ""];
  for (const day of plan.days) {
    lines.push(`Ngày ${day.number}: ${day.title}`);
    if (day.lead) lines.push(`  ${day.lead}`);
    for (const item of day.items) {
      lines.push(isRest(item) ? `  ${slotLabel(item.slot)} (${item.time}): ${item.text}` : `  ${slotLabel(item.slot)} (${item.time}): ${item.activity.title}`);
    }
    lines.push(`  Ăn: ${day.meals.map((meal) => `${meal.label.toLowerCase()} ${meal.text}`).join("; ")}`, "");
  }
  return lines.join("\n").trim();
}
