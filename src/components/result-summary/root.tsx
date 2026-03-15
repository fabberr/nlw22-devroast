import type { ReactNode } from "react";

export type ResultSummaryProps = {
  children: ReactNode;
  className?: string;
};

export function ResultSummary({ children, className }: ResultSummaryProps) {
  return (
    <div className={`flex items-center gap-12 ${className ?? ""}`}>
      {children}
    </div>
  );
}
