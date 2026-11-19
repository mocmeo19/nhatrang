import { Reveal } from "@/shared/components/reveal";
import { nightTips } from "./data";

export function NightTips() {
  return (
    <section className="bg-sand-50 px-5 pb-12 pt-20 sm:px-8">
      <Reveal className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-ocean-950 p-8 text-white sm:p-12">
          <h2 className="font-display text-4xl">Vui chơi an toàn về đêm</h2>
          <ul className="mt-6 space-y-4">
            {nightTips.map((tip) => (
              <li key={tip} className="flex gap-3 leading-relaxed">
                <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
