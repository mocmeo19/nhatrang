import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import { SectionHeading } from "@/shared/components/section-heading";
import {
  dayTrips,
  directions,
  economyPillars,
  economyStats,
  mapBounds,
  mapCities,
  mapCredit,
  mapDistances,
  mapFacts,
  mapNote,
  nhaTrangRole,
  societyFacts,
  societyNotes,
  sources,
  type Stat,
} from "./data";

function StatGrid({ items, dark = false, columns = 4 }: { items: Stat[]; dark?: boolean; columns?: 3 | 4 }) {
  return (
    <dl className={`grid gap-px overflow-hidden rounded-3xl bg-ocean-100 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {items.map((item) => (
        <div key={item.label} className={`p-6 ${dark ? "bg-ocean-950 text-white" : "bg-white"}`}>
          <dd className={`font-display text-3xl tabular-nums ${dark ? "text-sun-400" : "text-ocean-800"}`}>{item.value}</dd>
          <dt className={`mt-2 text-sm leading-snug ${dark ? "text-ocean-100" : "text-ocean-950"}`}>{item.label}</dt>
          {item.note && <p className={`mt-2 text-xs ${dark ? "text-ocean-100/70" : "text-ocean-800/60"}`}>{item.note}</p>}
        </div>
      ))}
    </dl>
  );
}

const project = (lat: number, lon: number) => ({
  x: ((lon - mapBounds.left) / (mapBounds.right - mapBounds.left)) * mapBounds.width,
  y: ((mapBounds.top - lat) / (mapBounds.top - mapBounds.bottom)) * mapBounds.height,
});

const pxPerKm = mapBounds.height / ((mapBounds.top - mapBounds.bottom) * 111.2);

function VietnamMap() {
  const points = mapCities.map((city) => ({ ...city, ...project(city.lat, city.lon) }));
  const hanoi = points[0];
  const nhaTrang = points.find((city) => city.highlight)!;
  const hcm = points[points.length - 1];
  const scale = 300 * pxPerKm;

  return (
    <figure className="rounded-3xl bg-white p-6 shadow-xl shadow-ocean-950/10 sm:p-8">
      <figcaption className="font-display text-2xl text-ocean-950">Nha Trang trên bản đồ Việt Nam</figcaption>
      <div className="mt-6 grid gap-10 sm:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
        <svg
          viewBox={`0 0 ${mapBounds.width} ${mapBounds.height}`}
          role="img"
          aria-label="Bản đồ Việt Nam đánh dấu Hà Nội, Đà Nẵng, Nha Trang và TP. Hồ Chí Minh"
          className="mx-auto h-auto w-full max-w-[20rem]"
        >
          <image href="/images/vietnam-map.svg" width={mapBounds.width} height={mapBounds.height} />
          <g fill="none" strokeWidth={5} strokeDasharray="14 12" className="stroke-ocean-800">
            <line x1={hanoi.x} y1={hanoi.y} x2={nhaTrang.x} y2={nhaTrang.y} />
            <line x1={nhaTrang.x} y1={nhaTrang.y} x2={hcm.x} y2={hcm.y} />
          </g>
          {points.map((city) => (
            <g key={city.name}>
              {city.highlight && <circle cx={city.x} cy={city.y} r={46} className="fill-coral-500/25" />}
              <circle cx={city.x} cy={city.y} r={city.highlight ? 24 : 16} strokeWidth={6} className={`stroke-white ${city.highlight ? "fill-coral-500" : "fill-ocean-800"}`} />
              <text
                x={city.x + (city.side === "right" ? 34 : -34)}
                y={city.y + 16}
                textAnchor={city.side === "right" ? "start" : "end"}
                fontSize={city.highlight ? 62 : 52}
                fontWeight={city.highlight ? 700 : 500}
                paintOrder="stroke"
                strokeWidth={10}
                strokeLinejoin="round"
                className={`stroke-white ${city.highlight ? "fill-coral-500" : "fill-ocean-950"}`}
              >
                {city.name}
              </text>
            </g>
          ))}
          <g transform={`translate(70 ${mapBounds.height - 150})`}>
            <line x1={0} x2={scale} y1={0} y2={0} strokeWidth={8} className="stroke-ocean-950" />
            <line x1={0} x2={0} y1={-16} y2={16} strokeWidth={8} className="stroke-ocean-950" />
            <line x1={scale} x2={scale} y1={-16} y2={16} strokeWidth={8} className="stroke-ocean-950" />
            <text x={scale / 2} y={-26} textAnchor="middle" fontSize={44} className="fill-ocean-950">
              300 km
            </text>
          </g>
        </svg>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600">Từ Nha Trang đến</p>
          <ul className="mt-3 divide-y divide-ocean-950/10 border-y border-ocean-950/10">
            {mapDistances.map((row) => (
              <li key={row.from} className="py-3 text-sm">
                <p className="font-semibold text-ocean-950">{row.from}</p>
                <p className="text-ocean-800/85">Đường bộ: {row.road}</p>
                <p className="text-ocean-800/85">Đường chim bay: {row.air}</p>
                {row.fly && <p className="text-ocean-800/85">{row.fly}</p>}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600">Chuyến đi trong ngày từ Nha Trang</p>
          <ul className="mt-3 divide-y divide-ocean-950/10 border-y border-ocean-950/10">
            {dayTrips.map((trip) => (
              <li key={trip.place} className="py-3 text-sm">
                <Link href={trip.href} className="font-semibold text-ocean-800 hover:text-coral-500">
                  {trip.place}
                </Link>
                <p className="text-ocean-800/80">{trip.distance}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-ocean-800/70">
        {mapNote}{" "}
        <a href={mapCredit.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-coral-500">
          {mapCredit.label}
        </a>
        .
      </p>
    </figure>
  );
}

export function Economy() {
  return (
    <>
      <section className="bg-sand-50 px-5 pb-20 pt-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Kinh tế"
            title={
              <>
                Nền kinh tế của <span className="italic text-coral-500">phố biển</span>
              </>
            }
            description="Nha Trang là đô thị du lịch và trung tâm dịch vụ của Khánh Hòa, một tỉnh có thế mạnh về kinh tế biển."
          />
          <div className="mt-12">
            <StatGrid items={economyStats} />
            <p className="mt-3 text-xs text-ocean-800/70">Các số liệu năm 2025 là ước tính của cơ quan chức năng, chưa phải số chốt chính thức.</p>
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {economyPillars.map((pillar, index) => (
              <li key={pillar.title}>
                <Reveal delay={(index % 2) * 0.08} className="h-full">
                  <article className="h-full rounded-3xl bg-white p-7 shadow-xl shadow-ocean-950/10">
                    <h3 className="font-display text-2xl text-ocean-950">{pillar.title}</h3>
                    <p className="mt-3 leading-relaxed text-ocean-800/85">{pillar.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-[2.5rem] bg-ocean-950 px-5 pb-24 pt-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            light
            eyebrow="Xã hội"
            title={
              <>
                Dân cư và <span className="text-gradient-sun italic">đô thị</span>
              </>
            }
          />
          <div className="mt-12">
            <StatGrid items={societyFacts} dark />
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {societyNotes.map((note) => (
              <li key={note} className="rounded-3xl border border-white/15 p-6 text-sm leading-relaxed text-ocean-100">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand-50 px-5 pb-24 pt-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Định hướng phát triển"
            title={
              <>
                Nha Trang <span className="italic text-ocean-500">đến năm 2030 và hơn thế</span>
              </>
            }
            description="Các mốc quy hoạch chính của tỉnh Khánh Hòa và vai trò của Nha Trang trong đó."
          />
          <ol className="relative mx-auto mt-14 max-w-3xl space-y-8 border-l-2 border-ocean-200 pl-8">
            {directions.map((item) => (
              <li key={item.when} className="relative">
                <span className="absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full bg-sun-500 ring-4 ring-sand-50" />
                <p className="text-sm font-semibold text-coral-500">{item.when}</p>
                <h3 className="mt-1 font-display text-2xl text-ocean-950">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ocean-800/85">{item.text}</p>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-white p-7 shadow-xl shadow-ocean-950/10">
            <h3 className="font-display text-2xl text-ocean-950">Vai trò của Nha Trang</h3>
            <ul className="mt-4 space-y-3">
              {nhaTrangRole.map((line) => (
                <li key={line} className="flex gap-3 leading-relaxed text-ocean-800/90">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sand-50 px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Vị trí"
            title={
              <>
                Nha Trang trên <span className="italic text-coral-500">bản đồ du lịch</span>
              </>
            }
            description="Điểm giữa của dải đất miền Trung, có sân bay quốc tế gần và một trong những vịnh biển đẹp nhất thế giới."
          />
          <div className="mt-12 space-y-6">
            <VietnamMap />
            <StatGrid items={mapFacts} columns={3} />
          </div>

          <div className="mt-16 rounded-3xl border border-ocean-100 bg-white p-7">
            <h3 className="font-display text-xl text-ocean-950">Nguồn tham khảo</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-coral-500">
                    {source.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-ocean-800/70">
              Số liệu tổng hợp từ báo chí và có thể được cập nhật; vui lòng đối chiếu với Cục Thống kê hoặc cổng thông tin của tỉnh khi cần dùng chính xác.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
