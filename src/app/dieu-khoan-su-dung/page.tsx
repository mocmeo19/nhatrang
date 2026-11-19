import type { Metadata } from "next";
import { termsIntro, termsSections } from "@/modules/legal/data";
import { LegalPage } from "@/modules/legal/legal-page";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
  description: "Quy định khi sử dụng nội dung và hình ảnh trên trang giới thiệu du lịch Nha Trang.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Quy định"
        title="Điều khoản sử dụng"
        description="Quy định khi sử dụng nội dung và hình ảnh trên trang."
        src={photos.beach.src}
        alt={photos.beach.alt}
      />
      <LegalPage intro={termsIntro} sections={termsSections} />
    </>
  );
}
