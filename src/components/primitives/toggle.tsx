"use client";

import * as Switch from "@radix-ui/react-switch";
import type { ComponentPropsWithoutRef } from "react";

export type ToggleProps = ComponentPropsWithoutRef<typeof Switch.Root> & {
  label: string;
  wrapperClassName?: string;
};

export function Toggle({
  label,
  wrapperClassName,
  className,
  ...props
}: ToggleProps) {
  const rootClassName = [
    "peer inline-flex h-[22px] w-xl items-center rounded-[11px] p-[3px] transition-colors",
    "data-[state=checked]:bg-accent-mauve data-[state=unchecked]:bg-border-primary",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`inline-flex items-center gap-3 ${wrapperClassName ?? ""}`}>
      <Switch.Root className={rootClassName} {...props}>
        <Switch.Thumb
          className={
            "block h-4 w-4 rounded-full transition-transform data-[state=checked]:translate-x-4.5 data-[state=checked]:bg-text-on-accent data-[state=unchecked]:bg-text-secondary"
          }
        />
      </Switch.Root>
      <span className="font-mono text-[12px] text-text-secondary peer-data-[state=checked]:text-accent-mauve">
        {label}
      </span>
    </div>
  );
}
