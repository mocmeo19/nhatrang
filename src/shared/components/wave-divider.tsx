type WaveDividerProps = { fill: string };

export function WaveDivider({ fill }: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden leading-[0]"
    >
      <svg
        className="animate-wave block h-16 w-[200%] sm:h-24"
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
      >
        <path
          style={{ fill }}
          d="M0 60c240 60 480 60 720 0s480-60 720 0 480 60 720 0 480-60 720 0v60H0z"
        />
      </svg>
    </div>
  );
}
