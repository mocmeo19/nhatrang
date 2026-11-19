import Link from "next/link";
import { legalLinks, libraryLink, navGroups, planLink, site } from "@/config/site";
import { destinations } from "@/modules/destinations/data";
import { Logo } from "@/shared/components/logo";
import { commonsUrl, photos } from "@/shared/data/images";
import { BackToTop } from "./back-to-top";
import { Icon } from "@/shared/components/icon";

const quickFacts = [
  { label: "Mùa biển đẹp", value: "Khoảng tháng 3 – 8" },
  { label: "Mưa nhiều nhất", value: "Tháng 10 – 11" },
  { label: "Sân bay Cam Ranh", value: "Cách trung tâm khoảng 35 km" },
];

const tripSteps = [
  { href: "/van-hoa/thoi-tiet", label: "Chọn tháng đi", text: "Nhiệt độ, mưa và giờ nắng từng tháng" },
  { href: "/lap-ke-hoach", label: "Nhận lịch trình", text: "Trả lời năm câu hỏi, có ngay lịch từng ngày" },
  { href: "/kham-pha/luu-tru", label: "Chọn nơi ở", text: "Khu lưu trú và các khách sạn, resort tiêu biểu" },
];

const linkClass = "text-ocean-100 transition-colors hover:text-sun-400";

export function Footer() {
  const credits = Object.values(photos);

  return (
    <footer className="relative overflow-hidden bg-ocean-950 px-5 pb-10 pt-6 text-ocean-100 sm:px-8">
      <svg aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-full w-full text-ocean-300/5" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice"><path d="M-200 200Q200-100 700 200T1600 200M-200 230Q200-70 700 230T1600 230M-200 260Q200-40 700 260T1600 260M-200 290Q200-10 700 290T1600 290M-200 320Q200 20 700 320T1600 320" stroke="currentColor" strokeWidth="2" /></svg>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/20 py-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24 lg:py-16">
          <div>
            <p className="eyebrow text-sun-400">Biển vẫn ở đây, chờ bạn</p>
            <p className="mt-5 font-display text-4xl leading-tight tracking-[-0.035em] text-white sm:text-6xl">
              Một chuyến đi đẹp<br />bắt đầu bằng <span className="italic text-sun-400">một ý định.</span>
            </p>
            <Link href={planLink.href} className="button-primary mt-8">Lên kế hoạch cùng chúng tôi <Icon name="arrow-up" /></Link>
          </div>
          <ul className="divide-y divide-white/15 self-end border-t border-white/15 lg:border-t-0">
            {tripSteps.map((step, index) => (
              <li key={step.href}>
                <Link href={step.href} className="group flex items-baseline gap-4 py-4 text-white transition-colors hover:text-sun-400">
                  <span className="w-6 shrink-0 font-display text-sm tabular-nums text-sun-400">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">
                    <span className="block text-lg font-semibold">{step.label}</span>
                    <span className="block text-sm text-ocean-100/80">{step.text}</span>
                  </span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))_1.2fr]">
          <div>
            <Link href="/" aria-label="Nha Trang — trang chủ" className="whitespace-nowrap text-white">
              <Logo size="lg" />
            </Link>
            <p className="mt-2 font-display text-lg italic text-sun-400">{site.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.description}</p>
          </div>

          {navGroups.map((group) => (
            <nav key={group.id} aria-label={group.label}>
              <Link href={group.href} className="font-semibold text-white hover:text-sun-400">
                {group.label}
              </Link>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {group.id === "kham-pha" && (
                <>
                  <Link href={libraryLink.href} className="mt-6 block font-semibold text-white hover:text-sun-400">
                    {libraryLink.label}
                  </Link>
                  <Link href={planLink.href} className="mt-3 block font-semibold text-white hover:text-sun-400">
                    {planLink.label}
                  </Link>
                  <Link href="/" className={`${linkClass} mt-2.5 block text-sm`}>
                    Trang chủ
                  </Link>
                </>
              )}
            </nav>
          ))}

          <nav aria-label="Điểm đến">
            <Link href="/kham-pha/diem-den" className="font-semibold text-white hover:text-sun-400">
              Điểm đến
            </Link>
            <ul className="mt-4 space-y-2.5 text-sm">
              {destinations.slice(0, 7).map((item) => (
                <li key={item.id}>
                  <Link href={`/kham-pha/diem-den/${item.id}`} className={linkClass}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/kham-pha/diem-den" className={`${linkClass} font-semibold text-sun-400`}>
                  Xem tất cả {destinations.length} điểm đến →
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-semibold text-white">Thông tin nhanh</p>
            <dl className="mt-4 space-y-4 text-sm">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-sun-400">{fact.label}</dt>
                  <dd className="mt-1 text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-16 select-none whitespace-nowrap text-center font-display text-[13vw] font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.14)] lg:text-[10rem]"
        >
          NHA TRANG
        </p>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-ocean-100/60">
              © {new Date().getFullYear()} {site.name}. Thông tin mang tính tham khảo — vui lòng kiểm tra lại trước khi đi.
            </p>
            <nav aria-label="Thông tin trang" className="flex gap-5 text-xs">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <BackToTop />
          </div>

          <details className="group mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
              Ghi công hình ảnh ({credits.length} ảnh từ Wikimedia Commons)
              <span aria-hidden className="text-xl text-sun-400 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="mt-4 columns-1 gap-8 space-y-1.5 text-xs sm:columns-2 lg:columns-3">
              {credits.map((photo) => (
                <li key={photo.src} className="break-inside-avoid">
                  <a
                    href={commonsUrl(photo.commonsFile)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {photo.alt} — {photo.license}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ocean-100/60">
              Các ảnh minh họa (lặn biển, tắm bùn, du thuyền, cảnh đêm, làng nghề, quà đặc sản và hai món bún sứa, bánh canh chả cá) được tạo bằng AI.
            </p>
          </details>
        </div>
      </div>
    </footer>
  );
}
