import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { destinations } from "@/modules/destinations/data";
import { commonsUrl, photos } from "@/shared/data/images";

describe("photos", () => {
  it("points every photo to an existing file in public/", () => {
    for (const photo of Object.values(photos)) {
      expect(existsSync(join(process.cwd(), "public", photo.src))).toBe(true);
    }
  });

  it("builds an encoded Commons URL", () => {
    expect(commonsUrl("Doc Let beach (2025).jpg")).toBe(
      "https://commons.wikimedia.org/wiki/File:Doc_Let_beach_(2025).jpg",
    );
  });
});

describe("destinations", () => {
  it("has unique ids and highlights", () => {
    const ids = destinations.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const item of destinations) expect(item.highlights.length).toBeGreaterThan(0);
  });
});
