import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import { photos } from "@/shared/data/images";

const legacy = [
  {
    href: "/kham-pha/diem-den/ponagar",
    title: "Tháp Bà Ponagar",
    when: "Thế kỷ 8 – 13",
    note: "Quần thể tháp Chăm gạch nung trên đồi Cù Lao; cụm tháp hiện nay gắn với năm 965. Được xếp hạng di tích kiến trúc nghệ thuật cấp quốc gia năm 1979.",
    photo: photos.ponagarTower,
  },
  {
    href: "/kham-pha/diem-den/long-son",
    title: "Chùa Long Sơn",
    when: "Khoảng cuối thế kỷ 19",
    note: "Ngôi chùa dưới chân núi Trại Thủy với tượng Phật trắng trên đỉnh; mốc thường được nhắc là khoảng năm 1886, cần đối chiếu thêm.",
    photo: photos.longSon,
  },
  {
    href: "/van-hoa/con-nguoi",
    title: "Viện Pasteur Nha Trang",
    when: "1903",
    note: "Phòng thí nghiệm của bác sĩ Alexandre Yersin trở thành Viện Pasteur Nha Trang; nhà ông ở nay là Bảo tàng Yersin.",
    photo: photos.pasteur,
  },
  {
    href: "/kham-pha/diem-den/vien-hai-duong-hoc",
    title: "Viện Hải dương học",
    when: "1922",
    note: "Viện nghiên cứu biển do người Pháp lập ngày 14/9/1922, một trong những viện hải dương học đầu tiên của Việt Nam, nay có bảo tàng sinh vật biển.",
    photo: photos.vienHaiDuongHoc,
  },
  {
    href: "/kham-pha/diem-den/lau-bao-dai",
    title: "Lầu Bảo Đại",
    when: "1923",
    note: "Cụm năm biệt thự Cầu Đá trên núi Cảnh Long, xây cho các nhà hải dương học; về sau là nơi vua Bảo Đại nghỉ dưỡng.",
    photo: photos.baoDaiVilla,
  },
  {
    href: "/kham-pha/diem-den/nha-tho-nui",
    title: "Nhà thờ Núi",
    when: "1928 – 1933",
    note: "Nhà thờ chính tòa Kitô Vua theo phong cách Gothic phục hưng, xây từ năm 1928 và khánh thành ngày 14/5/1933.",
    photo: photos.nhaThoNui,
  },
];

export function HistoryExtras() {
  return (
    <section className="bg-sand-50 px-5 pb-24 pt-12 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-ocean-950/10 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral-500">Địa danh</p>
            <h2 className="mt-3 font-display text-4xl text-ocean-950">Cái tên “Nha Trang” từ đâu?</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ocean-800/85">
              <p>
                Theo một giả thuyết được nhiều nguồn nhắc tới, người Chăm xưa gọi sông Cái là “Ya Trang” (hay “Ea Trang”),
                nghĩa là dòng sông mọc nhiều lau sậy. Người Việt đọc chệch âm thành “Nha Trang”.
              </p>
              <p className="text-base text-ocean-800/70">
                Đây vẫn là giả thuyết: các nguồn ghi tên Chăm theo nhiều cách khác nhau và chưa có kết luận học thuật chắc chắn.
                Trong thời Champa, vùng đất này được gọi là Kauthara.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600">Di sản</p>
          <h2 className="mt-3 font-display text-4xl text-ocean-950 sm:text-5xl">Dấu tích còn lại hôm nay</h2>
          <p className="mt-3 max-w-2xl text-lg text-ocean-800/85">Sáu nơi bạn có thể ghé thăm, xếp theo thời gian ra đời.</p>

          <ol className="mt-10 border-t-2 border-ocean-950">
            {legacy.map((item) => (
              <li key={item.title} className="border-b border-ocean-950/15">
                <Link
                  href={item.href}
                  className="group grid items-center gap-x-8 gap-y-4 py-7 sm:grid-cols-[9rem_minmax(0,1fr)_13rem]"
                >
                  <p className="font-display text-xl text-coral-500 sm:text-2xl">{item.when}</p>
                  <div>
                    <h3 className="font-display text-2xl text-ocean-950 group-hover:text-ocean-600 sm:text-3xl">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-ocean-800/85">{item.note}</p>
                    <p className="mt-2 text-sm font-semibold text-ocean-600">
                      Xem chi tiết <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg sm:order-last">
                    <Image
                      src={item.photo.src}
                      alt={item.photo.alt}
                      fill
                      sizes="(min-width: 640px) 13rem, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
