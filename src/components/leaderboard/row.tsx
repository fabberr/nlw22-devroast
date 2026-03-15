"use client";

import { twMerge } from "tailwind-merge";

export type LeaderboardRowProps = {
  rank: string;
  score: string;
  code: string;
  language: string;
  lines?: number;
  className?: string;
  scoreClassName?: string;
  variant?: "compact" | "detailed";
};

export function LeaderboardRow({
  rank,
  score,
  code,
  language,
  lines,
  className,
  scoreClassName,
  variant = "compact",
}: LeaderboardRowProps) {
  if (variant === "detailed") {
    return (
      <div
        className={twMerge(
          "flex flex-col border border-border-primary",
          className,
        )}
      >
        <div className="flex h-12 items-center justify-between border-border-primary border-b px-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono text-[13px]">
              <span className="text-text-tertiary">#</span>
              <span className="font-bold text-accent-yellow">
                {rank.replace("#", "")}
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[13px]">
              <span className="text-text-tertiary">score:</span>
              <span
                className={twMerge("font-bold text-accent-red", scoreClassName)}
              >
                {score}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 font-mono text-[12px]">
            <span className="text-text-secondary">{language}</span>
            <span className="text-text-tertiary">{lines} lines</span>
          </div>
        </div>
        <div className="flex bg-bg-input font-mono text-[12px]">
          <div className="flex flex-col gap-1.5 border-border-primary border-r px-3 py-4 text-right text-text-tertiary">
            {code.split("\n").map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: code lines don't have unique IDs
              <span key={`ln-${rank}-${i}`}>{i + 1}</span>
            ))}
          </div>
          <div className="flex flex-col gap-1.5 px-4 py-4 text-text-secondary">
            {code.split("\n").map((line, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: code lines don't have unique IDs
              <span key={`line-${rank}-${i}`}>{line}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        "flex items-center gap-6 border-border-primary border-b px-5 py-4 font-mono",
        className,
      )}
    >
      <div className="w-10 text-[13px] text-text-tertiary">{rank}</div>
      <div
        className={twMerge(
          "w-15 font-bold text-[13px] text-accent-red",
          scoreClassName,
        )}
      >
        {score}
      </div>
      <div className="flex-1 truncate text-[12px] text-text-secondary">
        {code}
      </div>
      <div className="w-25 text-[12px] text-text-tertiary">{language}</div>
    </div>
  );
}
