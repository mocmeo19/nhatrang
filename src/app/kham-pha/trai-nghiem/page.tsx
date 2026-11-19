import type { Metadata } from "next";
import { ExperienceGuides } from "@/modules/experiences/experience-guides";
import { Experiences } from "@/modules/experiences/experiences";
import { NextPage } from "@/shared/components/next-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Trải nghiệm",
  description: "Lặn biển, tour đảo, tắm bùn khoáng và cáp treo vượt vịnh.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hoạt động"
        title="Trải nghiệm"
        description="Lặn biển, tour đảo, tắm bùn khoáng và cáp treo vượt vịnh."
        src={photos.honMun.src}
        alt={photos.honMun.alt}
      />
      <Experiences />
      <ExperienceGuides />
      <NextPage current="/kham-pha/trai-nghiem" />
    </>
  );
}
