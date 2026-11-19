import { describe, expect, it } from "vitest";
import { parseTripPreferences } from "@/modules/planner/preferences";
import { buildPlan } from "@/modules/planner/itinerary";
import { destinationCollections } from "@/modules/home/featured-data";
import { getDestination } from "@/modules/destinations/data";

describe("home trip finder", () => {
  it("carries the visitor's selections into a usable itinerary", () => {
    const preferences = parseTripPreferences({ days: "5", month: "6", interest: "van-hoa" });
    expect(preferences).toEqual({ days: 5, month: 6, interests: ["van-hoa"] });
    const plan = buildPlan({ ...preferences, companion: "cap-doi", pace: "vua" });
    expect(plan.days).toHaveLength(5);
    expect(plan.days.every((day) => day.items.length > 0)).toBe(true);
  });

  it("provides defaults when the visitor has not selected a trip", () => {
    expect(parseTripPreferences({})).toEqual({ days: 3, month: null, interests: ["bien-dao", "am-thuc"] });
  });

  it.each([
    { days: "999", month: "13", interest: "unknown" },
    { days: "-1", month: "-1", interest: "<script>" },
    { days: "3.5", month: "1.5" },
    { days: ["2", "5"], month: ["6", "7"], interest: ["bien-dao", "am-thuc"] },
    { days: "invalid", month: "" },
  ])("rejects unsupported or ambiguous URL parameters: %j", (params) => {
    expect(parseTripPreferences(params)).toEqual({ days: 3, month: null, interests: ["bien-dao", "am-thuc"] });
  });
});

describe("featured destination filters", () => {
  it("provides three distinct, published destinations per collection", () => {
    for (const collection of destinationCollections) {
      expect(new Set(collection.destinations).size).toBe(3);
      for (const id of collection.destinations) expect(getDestination(id)?.photo.src).toBeTruthy();
    }
  });
});
