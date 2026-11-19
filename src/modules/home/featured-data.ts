import { getDestination } from "@/modules/destinations/data";

export const destinationCollections = [
  { id: "bien-dao", label: "Biển & đảo", destinations: ["dao-yen", "hon-mun", "doc-let"] },
  { id: "di-san", label: "Văn hóa & di sản", destinations: ["ponagar", "long-son", "hon-chong"] },
  { id: "thien-nhien", label: "Thiên nhiên & nghỉ dưỡng", destinations: ["vinh-ninh-van", "suoi-khoang-thap-ba", "thac-yang-bay"] },
] as const;

export function getFeaturedCollections() {
  return destinationCollections.map((collection) => ({
    id: collection.id,
    label: collection.label,
    destinations: collection.destinations.map((id) => {
      const item = getDestination(id);
      if (!item) throw new Error(`Unknown featured destination: ${id}`);
      return { id, name: item.name, tag: item.tag, summary: item.summary, photo: item.photo, category: item.category, illustrated: Boolean(item.illustrated) };
    }),
  }));
}

export type FeaturedCollection = ReturnType<typeof getFeaturedCollections>[number];
