import type { ReactNode } from "react";

export type ResultSummaryMetaProps = {
  children: ReactNode;
  className?: string;
};

export function ResultSummaryMeta({
  children,
  className,
}: ResultSummaryMetaProps) {
  return (
    <div
      className={`flex items-center gap-4 font-mono text-text-tertiary text-xs ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
