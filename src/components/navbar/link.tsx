"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export type NavbarLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function NavbarLink({ className, ...props }: NavbarLinkProps) {
  return (
    <Link
      className={`font-mono text-[13px] text-text-secondary hover:text-text-primary ${className ?? ""}`}
      {...props}
    />
  );
}
