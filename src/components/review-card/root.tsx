import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type IssueCardProps = {
  children: ReactNode;
  className?: string;
};

export function IssueCard({ children, className }: IssueCardProps) {
  return (
    <div
      className={twMerge(
        "flex w-full min-w-120 flex-col gap-3 border border-border-primary p-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
