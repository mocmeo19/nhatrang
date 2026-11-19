import type { Metadata } from "next";
import { Nightlife } from "@/modules/entertainment/nightlife";
import { NightTips } from "@/modules/entertainment/night-tips";
import { OldVillage } from "@/modules/entertainment/old-village";
import { ThemePark } from "@/modules/entertainment/theme-park";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Vui chơi",
  description: "VinWonders, làng nghề Nha Trang Xưa, rooftop bar, beach club, bia thủ công và chợ đêm — những điểm vui chơi hiện đại ở Nha Trang.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Giải trí"
        title="Vui chơi"
        description="Công viên giải trí, rooftop bar, beach club và chợ đêm sôi động."
        src={photos.cableCar.src}
        alt={photos.cableCar.alt}
      />
      <ThemePark />
      <OldVillage />
      <Nightlife />
      <NightTips />
      <NextPage current="/kham-pha/vui-choi" />
    </>
  );
}
