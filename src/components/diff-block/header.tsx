import type { ReactNode } from "react";

export type DiffBlockHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function DiffBlockHeader({ children, className }: DiffBlockHeaderProps) {
  return (
    <div
      className={`flex h-10 items-center gap-2 border-border-primary border-b px-4 font-mono text-text-secondary text-xs ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
