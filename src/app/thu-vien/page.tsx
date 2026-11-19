import type { Metadata } from "next";
import { Gallery } from "@/modules/gallery/gallery";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Thư viện",
  description: "Nha Trang qua những khung hình đẹp nhất.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hình ảnh"
        title="Thư viện"
        description="Nha Trang qua những khung hình đẹp nhất."
        src={photos.beach.src}
        alt={photos.beach.alt}
      />
      <Gallery />
      <NextPage current="/thu-vien" />
    </>
  );
}
