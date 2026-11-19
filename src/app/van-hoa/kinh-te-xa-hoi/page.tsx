import type { Metadata } from "next";
import { Economy } from "@/modules/economy/economy";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Kinh tế - Xã hội",
  description: "Kinh tế Nha Trang và Khánh Hòa, định hướng phát triển và vị trí của Nha Trang trên bản đồ du lịch.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Phát triển"
        title="Kinh tế - Xã hội"
        description="Kinh tế Nha Trang và Khánh Hòa, định hướng phát triển và vị trí trên bản đồ du lịch."
        src={photos.city.src}
        alt={photos.city.alt}
      />
      <Economy />
      <NextPage current="/van-hoa/kinh-te-xa-hoi" />
    </>
  );
}
