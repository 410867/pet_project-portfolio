// src/components/ui/Button.tsx
"use client";
import * as React from "react";

type ButtonProps = {
  title: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function cn(...cls: (string | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, className, onClick }, ref) => {
    const base =
      "inline-flex items-center justify-center whitespace-nowrap select-none " +
      "rounded-md px-5 py-3 text-sm font-medium text-white " +
      "!bg-primary transition-opacity hover:opacity-90 " +
      "disabled:opacity-60 disabled:cursor-not-allowed";

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(base, className)}
        aria-label={title}
      >
        {title}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
