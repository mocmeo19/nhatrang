import type { Metadata } from "next";
import { aboutIntro, aboutSections } from "@/modules/legal/data";
import { LegalPage } from "@/modules/legal/legal-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description: "Mục đích và cách biên soạn nội dung của trang giới thiệu du lịch Nha Trang.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="Về chúng tôi"
        description="Mục đích và cách biên soạn nội dung của trang."
        src={photos.bay.src}
        alt={photos.bay.alt}
      />
      <LegalPage intro={aboutIntro} sections={aboutSections} />
    </>
  );
}
