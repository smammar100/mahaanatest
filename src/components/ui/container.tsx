import { cn } from "@/lib/utils";

type PageContainerProps = React.ComponentProps<"div">;

export function PageContainer({ className, ...props }: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16",
        className,
      )}
      {...props}
    />
  );
}
