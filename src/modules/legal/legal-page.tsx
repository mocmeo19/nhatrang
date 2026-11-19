import Link from "next/link";
import { Reveal } from "@/shared/components/reveal";
import type { LegalSection } from "./data";

type LegalPageProps = { intro: string; sections: LegalSection[]; updated?: string };

export function LegalPage({ intro, sections, updated }: LegalPageProps) {
  return (
    <section className="bg-sand-50 px-5 pb-24 pt-8 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-3xl">
        <p className="font-display text-2xl leading-relaxed text-ocean-800 sm:text-3xl">{intro}</p>
        {updated && <p className="mt-4 text-sm text-ocean-800/70">Cập nhật lần cuối: {updated}</p>}

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <Reveal key={section.heading}>
              <h2 className="font-display text-2xl text-ocean-950 sm:text-3xl">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-lg leading-relaxed text-ocean-800/90">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-14 border-t border-ocean-950/15 pt-6 text-sm text-ocean-800/80">
          Xem thêm:{" "}
          <Link href="/ve-chung-toi" className="font-semibold text-ocean-600 hover:text-coral-500">
            Về chúng tôi
          </Link>{" "}
          ·{" "}
          <Link href="/dieu-khoan-su-dung" className="font-semibold text-ocean-600 hover:text-coral-500">
            Điều khoản sử dụng
          </Link>
        </p>
      </div>
    </section>
  );
}
