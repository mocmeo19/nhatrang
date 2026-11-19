import { site } from "@/config/site";

type LogoProps = {
  size?: "md" | "lg";
  className?: string;
};

const sizes = {
  md: { mark: "h-9 w-9", text: "text-2xl" },
  lg: { mark: "h-12 w-12", text: "text-4xl" },
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className}>
      <circle cx="32" cy="32" r="32" className="fill-ocean-500" />
      <path d="M16 38a16 16 0 0 1 32 0z" className="fill-sun-400" />
      <g fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="stroke-white">
        <path d="M8 43q4-4 8 0t8 0t8 0t8 0t8 0t8 0" />
        <path d="M16 53q4-4 8 0t8 0t8 0t8 0" />
      </g>
    </svg>
  );
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const style = sizes[size];
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${style.mark} shrink-0`} />
      <span className={`font-display font-bold leading-none ${style.text}`}>
        {site.name}
        <span className="text-sun-500">.</span>
      </span>
    </span>
  );
}
