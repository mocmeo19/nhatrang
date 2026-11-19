import { photos, type Photo } from "@/shared/data/images";

export const categories = ["Tất cả", "Biển & đảo", "Danh thắng & di sản", "Ẩm thực", "Thành phố"] as const;

export type Category = (typeof categories)[number];

export type GalleryItem = {
  photo: Photo;
  category: Exclude<Category, "Tất cả">;
  href?: string;
};

export const galleryItems: GalleryItem[] = [
  { photo: photos.beach, category: "Biển & đảo" },
  { photo: photos.ponagarTower, category: "Danh thắng & di sản", href: "/kham-pha/diem-den/ponagar" },
  { photo: photos.bay, category: "Biển & đảo", href: "/kham-pha/diem-den/vinwonders" },
  { photo: photos.honMun, category: "Biển & đảo", href: "/kham-pha/diem-den/hon-mun" },
  { photo: photos.honChong, category: "Danh thắng & di sản", href: "/kham-pha/diem-den/hon-chong" },
  { photo: photos.lobster, category: "Ẩm thực", href: "/am-thuc/mon-ngon" },
  { photo: photos.monkey, category: "Biển & đảo", href: "/kham-pha/trai-nghiem" },
  { photo: photos.docLet, category: "Biển & đảo", href: "/kham-pha/diem-den/doc-let" },
  { photo: photos.longSon, category: "Danh thắng & di sản", href: "/kham-pha/diem-den/long-son" },
  { photo: photos.clams, category: "Ẩm thực", href: "/am-thuc/mon-ngon" },
  { photo: photos.city, category: "Thành phố" },
  { photo: photos.cableCar, category: "Biển & đảo", href: "/kham-pha/diem-den/vinwonders" },
  { photo: photos.ponagar, category: "Danh thắng & di sản", href: "/kham-pha/diem-den/ponagar" },
];
