import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { dishGuides } from "@/modules/cuisine/guide-data";
import { oldVillage } from "@/modules/entertainment/data";

describe("dish guides", () => {
  it("gives every dish an existing illustration and credit", () => {
    for (const dish of dishGuides) {
      expect(existsSync(join(process.cwd(), "public", dish.image.src)), dish.id).toBe(true);
      expect(dish.image.credit.length).toBeGreaterThan(0);
    }
  });

  it("has unique ids", () => {
    const ids = dishGuides.map((dish) => dish.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(dishGuides)("gives $id the same complete guide structure as banh can", (dish) => {
    expect(dish.details).toHaveLength(4);
    expect(dish.facts).toHaveLength(3);
    expect(new Set(dish.details?.map((item) => item.heading)).size).toBe(4);
    for (const detail of dish.details ?? []) {
      expect(detail.heading.trim()).not.toBe("");
      expect(detail.body.trim()).not.toBe("");
    }
    for (const fact of dish.facts ?? []) {
      expect(fact.label.trim()).not.toBe("");
      expect(fact.value.trim()).not.toBe("");
    }
  });

  it("includes reference links for every expanded dish", () => {
    for (const dish of dishGuides.filter((item) => item.id !== "banh-can")) {
      expect(dish.sources?.length, dish.id).toBeGreaterThan(0);
      for (const source of dish.sources ?? []) {
        expect(new URL(source.href).protocol).toBe("https:");
        expect(source.label.trim()).not.toBe("");
      }
    }
  });
});

describe("old village", () => {
  it("lists five show scenes", () => {
    expect(oldVillage.scenes).toHaveLength(5);
  });
});
