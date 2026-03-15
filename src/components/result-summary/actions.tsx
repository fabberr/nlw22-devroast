import type { ReactNode } from "react";

export type ResultSummaryActionsProps = {
  children: ReactNode;
  className?: string;
};

export function ResultSummaryActions({
  children,
  className,
}: ResultSummaryActionsProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      {children}
    </div>
  );
}
