import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-[var(--foreground)] placeholder:text-[var(--text-secondary)] selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)] flex h-9 w-full min-w-0 rounded-[var(--radius)] border border-[var(--input)] bg-transparent px-3 py-1 type-body-base shadow-ds-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:type-body-sm file:font-[var(--weight-medium)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:type-body-sm",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
