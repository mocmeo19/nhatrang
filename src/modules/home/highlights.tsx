import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import { Icon } from "@/shared/components/icon";
import { photos } from "@/shared/data/images";

const stories = [
  { href: "/am-thuc/mon-ngon", label: "Ăn một lần, nhớ một miền", tag: "Hương vị phố biển", description: "Từ bánh căn nóng hổi đến tô bún cá thanh ngọt. Nha Trang còn được nhớ bằng những hương vị.", photo: photos.banhCan },
  { href: "/kham-pha/luu-tru", label: "Thức giấc ở một nơi thật đẹp", tag: "Nghỉ ngơi đúng nghĩa", description: "Một căn phòng nhìn ra vịnh, một khoảng trời riêng. Tìm chốn dừng chân cho kỳ nghỉ của bạn.", photo: photos.resortHonTre },
  { href: "/van-hoa/thoi-tiet", label: "Chọn một ngày để ra biển", tag: "Cẩm nang du lịch", description: "Mùa nắng hay mùa mưa, mỗi thời điểm một nét riêng. Tìm hiểu khí hậu trước khi xếp hành lý.", photo: photos.hero },
];

export function Highlights() {
  return (
    <section className="coastal-grain bg-sand-50 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow text-ocean-600">Bỏ túi một chút Nha Trang</p><h2 className="mt-5 font-display text-4xl tracking-[-0.035em] sm:text-5xl lg:text-6xl">Để chuyến đi <em className="text-ocean-500">trọn vẹn hơn.</em></h2></div><Icon name="sun" className="hidden h-14 w-14 text-ocean-500 md:block" /></Reveal>
        <div className="mt-11 grid gap-10 md:grid-cols-3 md:gap-7">
          {stories.map((story, index) => <Reveal key={story.href} delay={index * 0.1}><Link href={story.href} className="group block"><div className="relative aspect-[1.35] overflow-hidden rounded-lg"><Image src={story.photo.src} alt={story.photo.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="image-zoom object-cover" /><span aria-hidden className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-sand-50 text-ocean-950 transition-colors group-hover:bg-sun-400"><Icon name="arrow-up" /></span></div><p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ocean-600">{story.tag}</p><h3 className="mt-3 font-display text-2xl leading-snug transition-colors group-hover:text-ocean-500">{story.label}</h3><p className="mt-3 text-sm leading-7 text-ocean-800/75">{story.description}</p></Link></Reveal>)}
        </div>
      </div>
    </section>
  );
}
