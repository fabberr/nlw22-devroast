import { tv, type VariantProps } from "tailwind-variants";

const badgeStyles = tv({
  base: "inline-flex items-center gap-2 font-mono",
  variants: {
    variant: {
      critical: "text-accent-red text-[12px]",
      warning: "text-accent-peach text-[12px]",
      good: "text-accent-green text-[12px]",
      verdict: "text-accent-red text-[13px]",
    },
  },
  defaultVariants: {
    variant: "critical",
  },
});

export type BadgeProps = VariantProps<typeof badgeStyles> & {
  children: string;
  className?: string;
};

const dotStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  critical: "bg-accent-red",
  warning: "bg-accent-peach",
  good: "bg-accent-green",
  verdict: "bg-accent-red",
};

export function Badge({ variant, className, children }: BadgeProps) {
  const variantKey = variant ?? "critical";

  return (
    <span className={badgeStyles({ variant, className })}>
      <span className={`h-2 w-2 rounded-full ${dotStyles[variantKey]}`} />
      {children}
    </span>
  );
}
