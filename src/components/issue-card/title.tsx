import type { ReactNode } from "react";

export type IssueCardTitleProps = {
  children: ReactNode;
  className?: string;
};

export function IssueCardTitle({ children, className }: IssueCardTitleProps) {
  return (
    <p
      className={`wrap-break-word font-mono text-[13px] text-text-primary ${className ?? ""}`}
    >
      {children}
    </p>
  );
}
