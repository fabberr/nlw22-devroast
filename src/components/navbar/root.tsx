"use client";

import type { ReactNode } from "react";

export type NavbarProps = {
  children: ReactNode;
  className?: string;
};

export function Navbar({ children, className }: NavbarProps) {
  return (
    <nav
      className={`flex h-14 w-full items-center justify-between border-border-primary border-b bg-bg-page px-10 ${className ?? ""}`}
    >
      {children}
    </nav>
  );
}
