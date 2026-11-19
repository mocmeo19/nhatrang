import type { Metadata } from "next";
import { Cuisine } from "@/modules/cuisine/cuisine";
import { DishGuides } from "@/modules/cuisine/dish-guides";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Món ngon",
  description: "Hải sản tươi và những món đặc sản đậm vị miền Trung.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hương vị"
        title="Món ngon"
        description="Hải sản tươi và những món đặc sản đậm vị miền Trung."
        src={photos.lobster.src}
        edgeFill="var(--color-sun-400)"
        alt={photos.lobster.alt}
      />
      <Cuisine />
      <DishGuides />
      <NextPage current="/am-thuc/mon-ngon" />
    </>
  );
}
