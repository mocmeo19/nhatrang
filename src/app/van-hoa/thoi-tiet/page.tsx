import type { Metadata } from "next";
import { Weather } from "@/modules/weather/weather";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Khí hậu & thời tiết",
  description: "Nhiệt độ, lượng mưa và giờ nắng theo từng tháng để chọn thời điểm đi Nha Trang.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Theo từng tháng"
        title="Khí hậu & thời tiết"
        description="Nhiệt độ, lượng mưa và giờ nắng theo từng tháng để chọn thời điểm đi Nha Trang."
        src={photos.hero.src}
        alt={photos.hero.alt}
      />
      <Weather />
      <NextPage current="/van-hoa/thoi-tiet" />
    </>
  );
}
