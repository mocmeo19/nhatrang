import type { Interest } from "./activities";
import { dayOptions, interests } from "./data";

export type TripPreferences = { days: number; month: number | null; interests: Interest[] };

export function parseTripPreferences(params: Record<string, string | string[] | undefined>): TripPreferences {
  const days = typeof params.days === "string" ? Number(params.days) : NaN;
  const month = typeof params.month === "string" ? Number(params.month) : NaN;
  const interest = interests.find((item) => item.id === params.interest);
  return {
    days: dayOptions.some((value) => value === days) ? days : 3,
    month: Number.isInteger(month) && month >= 1 && month <= 12 ? month : null,
    interests: interest ? [interest.id] : ["bien-dao", "am-thuc"],
  };
}
