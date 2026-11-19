import { navLinks } from "@/config/site";
import { aiImages, photos } from "@/shared/data/images";

export const pagePhotos: Record<string, { src: string; alt: string }> = {
  "/van-hoa/lich-su": photos.ponagarTower,
  "/van-hoa/con-nguoi": photos.pasteur,
  "/van-hoa/kinh-te-xa-hoi": photos.city,
  "/van-hoa/thoi-tiet": photos.hero,
  "/am-thuc/mon-ngon": photos.lobster,
  "/am-thuc/mua-qua": aiImages.gifts,
  "/am-thuc": photos.lobster,
  "/van-hoa": photos.ponagar,
  "/kham-pha": photos.honChong,
  "/kham-pha/diem-den": photos.bay,
  "/kham-pha/trai-nghiem": photos.honMun,
  "/kham-pha/vui-choi": photos.cableCar,
  "/kham-pha/luu-tru": photos.khachSanTranPhu,
  "/thu-vien": photos.beach,
  "/lap-ke-hoach": photos.docLet,
};

export const highlights = navLinks.map((link) => ({ ...link, photo: pagePhotos[link.href] }));
