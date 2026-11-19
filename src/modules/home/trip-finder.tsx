import { dayOptions, interests, monthLabels } from "@/modules/planner/data";
import { Icon } from "@/shared/components/icon";

const selectClass = "w-full cursor-pointer appearance-none bg-transparent py-1.5 pr-7 text-sm font-semibold text-ocean-950 outline-offset-2";

export function TripFinder() {
  return (
    <section id="bat-dau" aria-label="Tìm cảm hứng cho chuyến đi" className="relative z-10 border-b border-ocean-950/10 bg-white px-5 sm:px-8">
      <form action="/lap-ke-hoach" method="get" className="mx-auto grid max-w-7xl gap-6 py-7 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-center lg:gap-8 lg:py-8">
        <div className="flex items-center gap-3"><Icon name="compass" className="h-9 w-9 text-ocean-500" /><p className="font-display text-xl leading-snug">Chuyến đi của bạn,<br /><em className="text-ocean-500">theo cách của bạn.</em></p></div>
        <div className="border-b border-ocean-950/15 lg:border-b-0 lg:border-l lg:pl-7"><label htmlFor="trip-interest" className="text-[10px] uppercase tracking-[0.14em] text-ocean-800/70">Bạn muốn trải nghiệm?</label><div className="relative"><select id="trip-interest" name="interest" defaultValue="bien-dao" className={selectClass}>{interests.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select><Icon name="chevron" className="pointer-events-none absolute right-0 top-2 h-4 w-4" /></div></div>
        <div className="border-b border-ocean-950/15 lg:border-b-0 lg:border-l lg:pl-7"><label htmlFor="trip-days" className="text-[10px] uppercase tracking-[0.14em] text-ocean-800/70">Bạn có bao nhiêu thời gian?</label><div className="relative"><select id="trip-days" name="days" defaultValue="3" className={selectClass}>{dayOptions.map((day) => <option key={day} value={day}>{day} ngày {day - 1} đêm</option>)}</select><Icon name="chevron" className="pointer-events-none absolute right-0 top-2 h-4 w-4" /></div></div>
        <div className="border-b border-ocean-950/15 lg:border-b-0 lg:border-l lg:pl-7"><label htmlFor="trip-month" className="text-[10px] uppercase tracking-[0.14em] text-ocean-800/70">Khi nào mình đi?</label><div className="relative"><select id="trip-month" name="month" defaultValue="" className={selectClass}><option value="">Chưa chốt, cứ mơ đã</option>{monthLabels.map((label, index) => <option key={label} value={index + 1}>{label}</option>)}</select><Icon name="chevron" className="pointer-events-none absolute right-0 top-2 h-4 w-4" /></div></div>
        <button type="submit" className="button-primary gap-3 sm:col-span-2 lg:col-span-1">Gợi ý cho tôi <Icon name="arrow" /></button>
      </form>
    </section>
  );
}
