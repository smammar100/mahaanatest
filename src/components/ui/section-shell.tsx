import { cn } from "@/lib/utils";

type SectionShellProps = React.ComponentPropsWithoutRef<"section"> & {
  as?: "section" | "footer" | "div";
};

export function SectionShell({
  as = "section",
  className,
  ...props
}: SectionShellProps) {
  const Component = as;
  return (
    <Component
      className={cn("bg-background py-[4rem]", className)}
      {...(props as React.ComponentPropsWithoutRef<typeof Component>)}
    />
  );
}
