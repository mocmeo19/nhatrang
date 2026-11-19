import type { Metadata } from "next";
import { navGroups } from "@/config/site";
import { GroupHub } from "@/modules/hub/group-hub";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

const group = navGroups.find((item) => item.id === "van-hoa")!;

export const metadata: Metadata = { title: group.label, description: group.description };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Bản sắc vùng đất"
        title={group.label}
        description={group.description}
        src={photos.ponagar.src}
        alt={photos.ponagar.alt}
      />
      <GroupHub group={group} />
    </>
  );
}
