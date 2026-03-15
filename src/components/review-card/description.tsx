import type { ReactNode } from "react";

export type IssueCardDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export function IssueCardDescription({
  children,
  className,
}: IssueCardDescriptionProps) {
  return (
    <p
      className={`wrap-break-word font-sans text-[12px] text-text-secondary leading-normal ${className ?? ""}`}
    >
      {children}
    </p>
  );
}
