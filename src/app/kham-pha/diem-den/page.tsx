import type { Metadata } from "next";
import { DestinationGuides } from "@/modules/destinations/destination-guides";
import { Destinations } from "@/modules/destinations/destinations";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Điểm đến",
  description: "Tháp Bà, Hòn Chồng, Hòn Mun và những nơi không thể bỏ lỡ.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Khám phá"
        title="Điểm đến"
        description="Tháp Bà, Hòn Chồng, Hòn Mun và những nơi không thể bỏ lỡ."
        src={photos.bay.src}
        edgeFill="var(--color-ocean-600)"
        alt={photos.bay.alt}
      />
      <Destinations />
      <DestinationGuides />
      <NextPage current="/kham-pha/diem-den" />
    </>
  );
}
