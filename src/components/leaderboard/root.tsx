"use client";

import type { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const leaderboardStyles = tv({
  base: "overflow-hidden border border-border-primary",
  variants: {
    variant: {
      compact: "",
      detailed: "",
    },
  },
  defaultVariants: {
    variant: "compact",
  },
});

export type LeaderboardProps = VariantProps<typeof leaderboardStyles> & {
  children: ReactNode;
  className?: string;
  totalCount?: number;
};

export function Leaderboard({
  variant,
  children,
  className,
  totalCount,
}: LeaderboardProps) {
  return (
    <div className={leaderboardStyles({ variant, className })}>
      {variant === "compact" && (
        <div className="flex h-10 items-center border-border-primary border-b px-5 font-mono text-[13px] text-text-tertiary">
          <div className="w-10">rank</div>
          <div className="w-15">score</div>
          <div className="flex-1">code</div>
          <div className="w-25">language</div>
        </div>
      )}
      {children}
      {variant === "compact" && totalCount && (
        <div className="flex items-center justify-center px-4 py-3 font-mono text-[12px] text-text-tertiary">
          <span>showing top 3 of {totalCount.toLocaleString()}</span>
          <span className="mx-2">·</span>
          <a href="/leaderboard" className="hover:underline">
            view full leaderboard <span>&gt;&gt;</span>
          </a>
        </div>
      )}
    </div>
  );
}
