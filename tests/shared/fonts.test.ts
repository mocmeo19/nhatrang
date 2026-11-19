import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(process.cwd(), "src/shared/styles/fonts.css"), "utf8");

describe("self-hosted typography", () => {
  it("ships valid WOFF2 assets for every declared font", () => {
    const urls = [...css.matchAll(/url\(([^)]+)\)/g)].map((match) => match[1]);
    expect(urls.length).toBeGreaterThan(0);
    for (const url of urls) {
      expect(url.startsWith("/fonts/")).toBe(true);
      const file = readFileSync(join(process.cwd(), "public", url));
      expect(file.subarray(0, 4).toString()).toBe("wOF2");
    }
  });

  it("includes Vietnamese glyph ranges and font licenses", () => {
    expect(css).toContain("U+1EA0-1EF9");
    for (const name of ["BeVietnamPro", "PlayfairDisplay"]) {
      expect(readFileSync(join(process.cwd(), `public/fonts/${name}-LICENSE.txt`), "utf8")).toContain("SIL Open Font License");
    }
  });
});
