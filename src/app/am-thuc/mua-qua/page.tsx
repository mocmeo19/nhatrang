import type { Metadata } from "next";
import { Shops } from "@/modules/shopping/shops";
import { Specialties } from "@/modules/shopping/specialties";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { aiImages } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Mua quà",
  description: "Đặc sản mang về làm quà và các cửa hàng gợi ý kèm địa chỉ.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Quà đặc sản"
        title="Mua quà"
        description="Đặc sản mang về làm quà và các cửa hàng gợi ý kèm địa chỉ."
        src={aiImages.gifts.src}
        alt={aiImages.gifts.alt}
      />
      <Specialties />
      <Shops />
      <NextPage current="/am-thuc/mua-qua" />
    </>
  );
}
