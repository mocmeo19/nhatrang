import type { Metadata } from "next";
import { People } from "@/modules/people/people";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Con người",
  description: "Những cái tên gắn liền với vùng đất ven vịnh Nha Trang.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Nhân vật"
        title="Con người"
        description="Những cái tên gắn liền với vùng đất ven vịnh Nha Trang."
        src={photos.pasteur.src}
        alt={photos.pasteur.alt}
      />
      <People />
      <NextPage current="/van-hoa/con-nguoi" />
    </>
  );
}
