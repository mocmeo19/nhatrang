import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { legacyRoutes } from "../../next.config";
import { findGroup, legalLinks, navGroups, navLinks } from "@/config/site";

const pageExists = (href: string) => existsSync(join(process.cwd(), "src/app", href, "page.tsx"));

describe("navLinks", () => {
  it("has unique hrefs", () => {
    const hrefs = navLinks.map((link) => link.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("maps every link to an existing page route", () => {
    for (const link of navLinks) {
      expect(pageExists(link.href)).toBe(true);
    }
  });
});

describe("navGroups", () => {
  it("has a hub page for every group", () => {
    for (const group of navGroups) {
      expect(pageExists(group.href)).toBe(true);
    }
  });

  it("nests every link under its group path", () => {
    for (const group of navGroups) {
      for (const link of group.links) {
        expect(link.href.startsWith(`${group.href}/`)).toBe(true);
      }
    }
  });

  it("finds the group of a nested path", () => {
    expect(findGroup("/kham-pha/diem-den/hon-mun")?.id).toBe("kham-pha");
    expect(findGroup("/van-hoa")?.id).toBe("van-hoa");
    expect(findGroup("/lap-ke-hoach")).toBeUndefined();
  });
});

describe("legacyRoutes", () => {
  it("redirects every old path to an existing page", () => {
    for (const [, to] of legacyRoutes) {
      expect(pageExists(to.replace("/:slug", "/[slug]"))).toBe(true);
    }
  });
});

describe("legalLinks", () => {
  it("maps every footer link to an existing page route", () => {
    for (const link of legalLinks) expect(pageExists(link.href)).toBe(true);
  });
});
