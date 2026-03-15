import type { ReactNode } from "react";

export type DiffBlockProps = {
  children: ReactNode;
  className?: string;
};

export function DiffBlock({ children, className }: DiffBlockProps) {
  return (
    <div
      className={`overflow-hidden border border-border-primary bg-bg-input ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
