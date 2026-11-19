import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { destinationCategories, destinations, getDestination } from "@/modules/destinations/data";
import { experienceGuides } from "@/modules/experiences/data";
import { galleryItems } from "@/modules/gallery/data";
import { milestones } from "@/modules/history/data";
import { people } from "@/modules/people/data";

const routeExists = (href: string) => {
  const segments = href.split("#")[0].split("/").filter(Boolean);
  const app = join(process.cwd(), "src/app");
  if (segments.length === 0) return true;
  if (existsSync(join(app, ...segments, "page.tsx"))) return true;
  const slug = segments.at(-1)!;
  return existsSync(join(app, ...segments.slice(0, -1), "[slug]", "page.tsx")) && Boolean(getDestination(slug));
};

describe("destination catalogue", () => {
  it("has unique ids and a known category for each destination", () => {
    const ids = destinations.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const item of destinations) expect(destinationCategories).toContain(item.category);
  });

  it("points every destination photo to an existing file", () => {
    for (const item of destinations) {
      expect(existsSync(join(process.cwd(), "public", item.photo.src)), item.id).toBe(true);
    }
  });

  it("covers every category", () => {
    for (const category of destinationCategories) {
      expect(destinations.some((item) => item.category === category)).toBe(true);
    }
  });
});

describe("destination detail data", () => {
  it("gives every destination a story, info and tips", () => {
    for (const item of destinations) {
      expect(item.intro.length).toBeGreaterThan(40);
      expect(item.sections.length).toBeGreaterThan(0);
      expect(item.info.length).toBeGreaterThan(0);
      expect(item.tips.length).toBeGreaterThan(0);
    }
  });
});

describe("internal links", () => {
  it("point to existing routes", () => {
    const hrefs = [
      ...milestones.flatMap((item) => (item.link ? [item.link.href] : [])),
      ...experienceGuides.flatMap((item) => (item.link ? [item.link.href] : [])),
      ...galleryItems.flatMap((item) => (item.href ? [item.href] : [])),
    ];
    for (const href of hrefs) expect(routeExists(href), href).toBe(true);
  });
});

describe("people details", () => {
  it("has a lifeline and extra story for everyone", () => {
    for (const person of people) {
      expect(person.lifeline.length).toBeGreaterThan(2);
      expect(person.more.length).toBeGreaterThan(0);
    }
  });
});
