import { describe, expect, it } from "vitest";
import { areas } from "@/modules/lodging/data";

describe("lodging data", () => {
  it("has unique area and stay ids", () => {
    const ids = [...areas.map((area) => area.id), ...areas.flatMap((area) => area.stays.map((stay) => stay.id))];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every area pros, cons and at least one stay with an address", () => {
    for (const area of areas) {
      expect(area.pros.length).toBeGreaterThan(0);
      expect(area.cons.length).toBeGreaterThan(0);
      expect(area.stays.length).toBeGreaterThan(0);
      for (const stay of area.stays) expect(stay.address.length).toBeGreaterThan(3);
    }
  });
});
