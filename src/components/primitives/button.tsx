import type { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonStyles = tv({
  base: "font-mono inline-flex items-center justify-center gap-2 transition-colors",
  variants: {
    variant: {
      primary:
        "bg-accent-mauve font-medium text-text-on-accent hover:bg-accent-mauve/90",
      secondary:
        "bg-transparent border border-border-primary text-text-primary hover:bg-bg-input hover:border-border-secondary",
      link: "bg-transparent border border-border-primary text-text-secondary hover:bg-bg-input hover:text-text-primary",
    },
    size: {
      sm: "px-[12px] py-[6px] text-[12px]",
      md: "px-md py-sm text-[12px]",
      lg: "px-lg py-[10px] text-[13px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export function Button({
  variant,
  size,
  className,
  type,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ variant, size, className })}
      type={type ?? "button"}
      {...props}
    />
  );
}
