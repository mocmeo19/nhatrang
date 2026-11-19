import type { Metadata } from "next";
import { navGroups } from "@/config/site";
import { GroupHub } from "@/modules/hub/group-hub";
import { PageHero } from "@/shared/components/page-hero";
import { photos } from "@/shared/data/images";

const group = navGroups.find((item) => item.id === "kham-pha")!;

export const metadata: Metadata = { title: group.label, description: group.description };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Đi và trải nghiệm"
        title={group.label}
        description={group.description}
        src={photos.honChong.src}
        alt={photos.honChong.alt}
      />
      <GroupHub group={group} />
    </>
  );
}
