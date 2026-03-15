"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export type NavbarBrandProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function NavbarBrand({
  children,
  className,
  href = "/",
}: NavbarBrandProps) {
  return (
    <Link href={href} className={`flex items-center gap-2 ${className ?? ""}`}>
      <span className="font-bold font-mono text-accent-mauve text-xl">
        &gt;
      </span>
      <span className="font-medium font-mono text-lg text-text-primary">
        {children}
      </span>
    </Link>
  );
}
