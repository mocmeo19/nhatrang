import { describe, expect, it } from "vitest";
import { activities } from "@/modules/planner/activities";
import { buildPlan, isRest, planToText, type Preferences } from "@/modules/planner/itinerary";

const base: Preferences = { days: 3, companion: "cap-doi", interests: ["bien-dao", "am-thuc"], pace: "vua", month: 4 };

const titles = (prefs: Preferences) =>
  buildPlan(prefs).days.flatMap((day) => day.items.flatMap((item) => (isRest(item) ? [] : [item.activity])));

describe("buildPlan", () => {
  it("returns one day plan per requested day", () => {
    for (const days of [2, 3, 4, 5]) expect(buildPlan({ ...base, days }).days).toHaveLength(days);
  });

  it("never repeats an activity", () => {
    const ids = titles({ ...base, days: 5, pace: "day-dac" }).map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("drops sea activities in the rainy peak", () => {
    const picked = titles({ ...base, month: 11 });
    expect(picked.some((item) => item.exposure === "sea")).toBe(false);
  });

  it("keeps sea activities in a dry month", () => {
    const picked = titles({ ...base, month: 4, interests: ["bien-dao"] });
    expect(picked.some((item) => item.exposure === "sea")).toBe(true);
  });

  it("removes activities unsuitable for young children", () => {
    const avoided = activities.filter((item) => item.kids === "avoid").map((item) => item.id);
    const picked = titles({ ...base, companion: "gia-dinh", interests: ["bien-dao"], days: 5 }).map((item) => item.id);
    for (const id of avoided) expect(picked).not.toContain(id);
  });

  it("removes strenuous activities for older travellers", () => {
    const hard = activities.filter((item) => item.seniors === "hard").map((item) => item.id);
    const picked = titles({ ...base, companion: "nguoi-lon-tuoi", days: 5 }).map((item) => item.id);
    for (const id of hard) expect(picked).not.toContain(id);
  });

  it("respects activity months", () => {
    const picked = titles({ ...base, month: 12, interests: ["bien-dao"], days: 5, pace: "day-dac" }).map((item) => item.id);
    expect(picked).not.toContain("dao-yen");
  });

  it("keeps the last day free of full-day trips on trips longer than two days", () => {
    const plan = buildPlan({ ...base, days: 4, pace: "day-dac" });
    const last = plan.days[plan.days.length - 1];
    expect(last.items.every((item) => isRest(item) || item.activity.span === 1)).toBe(true);
  });

  it("suggests dinner only on days that have an evening", () => {
    const plan = buildPlan(base);
    for (const day of plan.days) {
      const hasEvening = day.items.some((item) => item.slot === "toi");
      expect(day.meals.some((meal) => meal.label === "Tối")).toBe(hasEvening);
    }
  });

  it("serialises the plan to text", () => {
    const text = planToText(buildPlan(base), "3 ngày");
    expect(text).toContain("Ngày 1");
    expect(text).toContain("Ngày 3");
  });
});
