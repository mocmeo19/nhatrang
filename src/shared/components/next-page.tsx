import Link from "next/link";
import { navLinks } from "@/config/site";

type Target = { href: string; label: string; description: string };

const home: Target = { href: "/", label: "Về trang chủ", description: "Quay lại điểm khởi đầu của hành trình." };

export function NextPage({ current }: { current: string }) {
  const index = navLinks.findIndex((link) => link.href === current);
  const prev = index > 0 ? navLinks[index - 1] : undefined;
  const next: Target = index < 0 || index === navLinks.length - 1 ? home : navLinks[index + 1];

  return (
    <nav aria-label="Chuyển trang" className="bg-sand-50 px-5 pb-20 sm:px-8">
      <div className="mx-auto grid max-w-5xl border-y-2 border-ocean-950 sm:grid-cols-2">
        {prev ? (
          <Link href={prev.href} className="group block border-b border-ocean-950/15 py-8 sm:border-b-0 sm:border-r sm:pr-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600">← Trước đó</span>
            <span className="mt-2 block font-display text-2xl text-ocean-950 transition-colors group-hover:text-coral-500 sm:text-3xl">{prev.label}</span>
            <span className="mt-1 block text-sm text-ocean-800/75">{prev.description}</span>
          </Link>
        ) : (
          <span aria-hidden className="hidden sm:block" />
        )}
        <Link href={next.href} className="group block py-8 text-left sm:pl-8 sm:text-right">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-600">Tiếp theo →</span>
          <span className="mt-2 block font-display text-2xl text-ocean-950 transition-colors group-hover:text-coral-500 sm:text-3xl">{next.label}</span>
          <span className="mt-1 block text-sm text-ocean-800/75">{next.description}</span>
        </Link>
      </div>
    </nav>
  );
}
