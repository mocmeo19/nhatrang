import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationDetail } from "@/modules/destinations/destination-detail";
import { destinations, getDestination } from "@/modules/destinations/data";
import { PageHero } from "@/shared/components/page-hero";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  return destination ? { title: destination.name, description: destination.summary } : {};
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const hero = destination.heroPhoto ?? destination.photo;
  return (
    <>
      <PageHero
        eyebrow={destination.tag}
        title={destination.name}
        description={destination.summary}
        src={hero.src}
        alt={hero.alt}
        parent={{ label: "Điểm đến", href: "/kham-pha/diem-den" }}
      />
      <DestinationDetail destination={destination} />
    </>
  );
}
