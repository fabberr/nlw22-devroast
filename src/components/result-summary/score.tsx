import { tv, type VariantProps } from "tailwind-variants";

const scoreRingVariants = tv({
  base: "",
  variants: {
    variant: {
      critical: "",
      warning: "",
      good: "",
    },
  },
});

export type ResultSummaryScoreProps = VariantProps<typeof scoreRingVariants> & {
  score: number;
  total?: number;
  size?: number;
  className?: string;
};

export function ResultSummaryScore({
  score,
  total = 10,
  size = 180,
  variant,
  className,
}: ResultSummaryScoreProps) {
  const percentage = Math.min(score / total, 1);
  const degrees = percentage * 360;

  const getGradient = (v?: string) => {
    if (v === "good") {
      return `conic-gradient(
        from 0deg,
        var(--color-score-critical) 0deg,
        var(--color-score-warning) ${degrees * 0.5}deg,
        var(--color-score-good) ${degrees}deg,
        transparent ${degrees}deg
      )`;
    }
    if (v === "warning") {
      return `conic-gradient(
        from 0deg,
        var(--color-score-critical) 0deg,
        var(--color-score-warning) ${degrees}deg,
        transparent ${degrees}deg
      )`;
    }
    return `conic-gradient(
      from 0deg,
      var(--color-score-critical) 0deg,
      var(--color-score-critical) ${degrees}deg,
      transparent ${degrees}deg
    )`;
  };

  return (
    <div
      className={`relative inline-flex ${className ?? ""}`}
      style={{ height: size, width: size }}
    >
      <div className="absolute inset-0 rounded-full border-4 border-border-primary" />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: getGradient(variant),
          mask: `radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))`,
          WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-1 font-mono">
          <span className="font-bold text-[48px] text-text-primary leading-none">
            {score.toFixed(1)}
          </span>
          <span className="text-[16px] text-text-tertiary leading-none">
            /{total}
          </span>
        </div>
      </div>
    </div>
  );
}
