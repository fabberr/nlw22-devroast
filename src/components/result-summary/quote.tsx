import type { ReactNode } from "react";

export type ResultSummaryQuoteProps = {
  children: ReactNode;
  className?: string;
};

export function ResultSummaryQuote({
  children,
  className,
}: ResultSummaryQuoteProps) {
  return (
    <p
      className={`font-mono text-text-primary text-xl leading-relaxed ${className ?? ""}`}
    >
      {children}
    </p>
  );
}
