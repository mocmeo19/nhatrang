import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { nightTips, themePark, venues } from "@/modules/entertainment/data";

describe("entertainment data", () => {
  it("has unique venues with info", () => {
    const ids = venues.map((venue) => venue.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const venue of venues) {
      expect(venue.highlights.length).toBeGreaterThan(0);
      expect(venue.info.length).toBeGreaterThan(0);
    }
  });

  it("describes the theme park and night safety", () => {
    expect(themePark.features.length).toBeGreaterThan(0);
    expect(themePark.access.length).toBeGreaterThan(0);
    expect(nightTips.length).toBeGreaterThan(0);
  });

  it("ships the illustration images", () => {
    for (const file of ["ai-night-rooftop.jpg", "ai-night-beach.jpg"]) {
      expect(existsSync(join(process.cwd(), "public/images", file))).toBe(true);
    }
  });
});
