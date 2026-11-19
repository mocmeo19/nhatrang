import { describe, expect, it } from "vitest";
import { milestones } from "@/modules/history/data";
import { people } from "@/modules/people/data";

describe("history", () => {
  it("has unique, non-empty milestones", () => {
    const periods = milestones.map((item) => item.period);
    expect(new Set(periods).size).toBe(periods.length);
    for (const item of milestones) expect(item.description.length).toBeGreaterThan(20);
  });
});

describe("people", () => {
  it("has unique names and at least one fact each", () => {
    const names = people.map((person) => person.name);
    expect(new Set(names).size).toBe(names.length);
    for (const person of people) expect(person.facts.length).toBeGreaterThan(0);
  });
});
