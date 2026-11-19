import type { Photo } from "@/shared/data/images";

export type DestinationPhoto = Pick<Photo, "src" | "alt" | "width" | "height">;

export const destinationCategories = [
  "Danh thắng & di sản",
  "Biển & đảo",
  "Suối khoáng & thiên nhiên",
  "Chợ & quảng trường",
  "Vui chơi",
] as const;

export type DestinationCategory = (typeof destinationCategories)[number];

export type DestinationSection = {
  heading: string;
  body: string[];
};

export type Destination = {
  id: string;
  name: string;
  tag: string;
  summary: string;
  highlights: string[];
  photo: DestinationPhoto;
  category: DestinationCategory;
  illustrated?: boolean;
  heroPhoto?: DestinationPhoto;
  gallery?: DestinationPhoto[];
  intro: string;
  sections: DestinationSection[];
  info: { label: string; value: string }[];
  tips: string[];
};

export const infoDisclaimer =
  "Giờ mở cửa, giá vé và quy định tham quan có thể thay đổi — hãy kiểm tra lại trước khi đi.";
