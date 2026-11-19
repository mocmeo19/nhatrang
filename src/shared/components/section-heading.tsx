import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      <Reveal>
        <span
          className={`eyebrow ${
            light ? "text-sun-400" : "text-ocean-600"
          }`}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`mt-5 font-display text-4xl leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl ${
            light ? "text-white" : "text-ocean-950"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className={`mt-5 text-lg leading-relaxed ${light ? "text-ocean-100" : "text-ocean-800/80"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
