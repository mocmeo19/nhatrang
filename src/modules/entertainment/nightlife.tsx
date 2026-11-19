import Image from "next/image";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import { venues, type VenueKind } from "./data";

const kindStyle: Record<VenueKind, string> = {
  "Rooftop bar": "from-coral-400 to-sun-400",
  "Beach club": "from-ocean-400 to-ocean-600",
  Brewhouse: "from-sun-400 to-sun-500",
  "Chợ đêm": "from-palm-500 to-ocean-400",
};

const nightImages = [
  { src: "/images/ai-night-rooftop.jpg", alt: "Minh họa quán bar trên tầng thượng nhìn ra vịnh về đêm", label: "Rooftop bar" },
  { src: "/images/ai-night-beach.jpg", alt: "Minh họa beach club bên biển với màn trình diễn lửa", label: "Beach club" },
];

export function Nightlife() {
  return (
    <section className="relative overflow-hidden rounded-b-[2.5rem] bg-ocean-950 px-5 pb-24 pt-20 sm:px-8 lg:pt-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-coral-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-40 h-96 w-96 rounded-full bg-ocean-500/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow="Về đêm"
          title={
            <>
              Khi thành phố <span className="text-gradient-sun italic">lên đèn</span>
            </>
          }
          description="Rooftop bar ngắm vịnh, beach club trên cát, bia thủ công và chợ đêm — gợi ý để bạn chọn nhịp điệu cho buổi tối."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {nightImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.1}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
                  {image.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-ocean-100/60">Hai ảnh trên là ảnh minh họa được tạo bằng AI, không phải ảnh của quán cụ thể.</p>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {venues.map((venue, index) => (
            <Reveal key={venue.id} delay={(index % 2) * 0.1}>
              <article className="h-full rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className={`inline-block rounded-full bg-gradient-to-r px-4 py-1 text-xs font-bold uppercase tracking-wider text-ocean-950 ${kindStyle[venue.kind]}`}>
                  {venue.kind}
                </span>
                <h3 className="mt-4 font-display text-3xl text-white">{venue.name}</h3>
                <p className="mt-3 leading-relaxed text-ocean-100">{venue.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {venue.highlights.map((item) => (
                    <li key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                      {item}
                    </li>
                  ))}
                </ul>
                <dl className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm">
                  {venue.info.map((row) => (
                    <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                      <dt className="shrink-0 font-semibold text-sun-400 sm:w-32">{row.label}</dt>
                      <dd className="text-ocean-100">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
