import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const logoDir = join(process.cwd(), "public/logo");

describe("logo files", () => {
  const files = readdirSync(logoDir).filter((name) => name.endsWith(".svg"));

  it("ships the full variant set", () => {
    for (const name of [
      "nhatrang-mark.svg",
      "nhatrang-logo-horizontal.svg",
      "nhatrang-logo-horizontal-reversed.svg",
      "nhatrang-logo-stacked.svg",
      "nhatrang-logo-mono-black.svg",
      "nhatrang-logo-mono-white.svg",
    ]) {
      expect(files).toContain(name);
    }
  });

  it("uses a viewBox and no embedded bitmaps or fonts", () => {
    for (const name of files) {
      const svg = readFileSync(join(logoDir, name), "utf8");
      expect(svg).toContain("viewBox=");
      expect(svg).not.toMatch(/<image|<text|font-family/);
    }
  });
});
