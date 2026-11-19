import type { Metadata } from "next";
import { Lodging } from "@/modules/lodging/lodging";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Khách sạn & Resort",
  description: "Các khu lưu trú ở Nha Trang, ưu nhược điểm từng khu và một số khách sạn, resort tiêu biểu kèm địa chỉ.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Nơi nghỉ"
        title="Khách sạn & Resort"
        description="Các khu lưu trú, ưu nhược điểm từng khu và một số khách sạn, resort tiêu biểu."
        src={photos.khachSanTranPhu.src}
        alt={photos.khachSanTranPhu.alt}
      />
      <Lodging />
      <NextPage current="/kham-pha/luu-tru" />
    </>
  );
}
