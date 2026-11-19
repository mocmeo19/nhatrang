import type { Metadata } from "next";
import { History } from "@/modules/history/history";
import { HistoryExtras } from "@/modules/history/history-extras";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Lịch sử",
  description: "Từ vương quốc Kauthara của người Chăm đến thành phố biển hôm nay.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Dấu mốc thời gian"
        title="Lịch sử"
        description="Từ vương quốc Kauthara của người Chăm đến thành phố biển hôm nay."
        src={photos.ponagarTower.src}
        edgeFill="var(--color-ocean-950)"
        alt={photos.ponagarTower.alt}
      />
      <History />
      <HistoryExtras />
      <NextPage current="/van-hoa/lich-su" />
    </>
  );
}
