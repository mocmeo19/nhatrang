import { describe, expect, it } from "vitest";
import { shopKinds, shops, specialties } from "@/modules/shopping/data";

describe("shopping data", () => {
  it("has unique ids", () => {
    for (const list of [specialties, shops]) {
      const ids = list.map((item) => item.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("gives every shop an address, a known kind and what it sells", () => {
    const kinds = new Set(shopKinds.map((kind) => kind.id));
    for (const shop of shops) {
      expect(shop.address.length).toBeGreaterThan(3);
      expect(kinds.has(shop.kind)).toBe(true);
      expect(shop.sells.length).toBeGreaterThan(0);
    }
  });

  it("covers every shop kind with at least one shop", () => {
    for (const kind of shopKinds) {
      expect(shops.some((shop) => shop.kind === kind.id)).toBe(true);
    }
  });
});
