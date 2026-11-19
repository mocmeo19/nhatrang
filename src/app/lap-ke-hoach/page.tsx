import type { Metadata } from "next";
import { Planner } from "@/modules/planner/planner";
import { PlannerGuide } from "@/modules/planner/planner-guide";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";
import { parseTripPreferences } from "@/modules/planner/preferences";

export const metadata: Metadata = {
  title: "Lên kế hoạch",
  description: "Chọn số ngày, người đi cùng, sở thích và tháng đi để nhận lịch trình gợi ý.",
};

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const preferences = parseTripPreferences(await searchParams);
  return (
    <>
      <PageHero
        eyebrow="Chuẩn bị"
        title="Lên kế hoạch"
        description="Chọn số ngày, người đi cùng, sở thích và tháng đi để nhận lịch trình gợi ý."
        src={photos.docLet.src}
        alt={photos.docLet.alt}
      />
      <Planner key={JSON.stringify(preferences)} initialPreferences={preferences} />
      <PlannerGuide />
      <NextPage current="/lap-ke-hoach" />
    </>
  );
}
