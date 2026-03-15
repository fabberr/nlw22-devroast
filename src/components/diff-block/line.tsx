import type { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const diffLineStyles = tv({
  base: "flex items-start gap-2 px-4 py-2 font-mono text-[13px]",
  variants: {
    variant: {
      removed: "",
      added: "",
      context: "",
    },
  },
  defaultVariants: {
    variant: "context",
  },
});

export type DiffBlockLineProps = VariantProps<typeof diffLineStyles> & {
  prefix?: string;
  children: ReactNode;
  className?: string;
};

const prefixStyles: Record<
  NonNullable<DiffBlockLineProps["variant"]>,
  string
> = {
  removed: "text-accent-red",
  added: "text-accent-green",
  context: "text-text-tertiary",
};

const textStyles: Record<NonNullable<DiffBlockLineProps["variant"]>, string> = {
  removed: "text-text-secondary",
  added: "text-text-primary",
  context: "text-text-secondary",
};

const bgStyles: Record<NonNullable<DiffBlockLineProps["variant"]>, string> = {
  removed: "bg-bg-diff-removed",
  added: "bg-bg-diff-added",
  context: "bg-transparent",
};

export function DiffBlockLine({
  variant,
  prefix,
  children,
  className,
}: DiffBlockLineProps) {
  const variantKey = variant ?? "context";
  const prefixText =
    prefix ??
    (variantKey === "added" ? "+" : variantKey === "removed" ? "-" : " ");

  return (
    <div
      className={`${diffLineStyles({ variant, className })} ${bgStyles[variantKey]}`}
    >
      <span className={`w-3 ${prefixStyles[variantKey]}`}>{prefixText}</span>
      <span className={textStyles[variantKey]}>{children}</span>
    </div>
  );
}
