import { cn } from "@/lib/utils";

export function Cover({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-lg bg-[#F5F1E8] px-2 py-2 text-[#1E4E8A] transition-colors duration-200 hover:bg-[#E79636]/10 hover:text-[#A5662C]",
        className
      )}
    >
      {children}
    </span>
  );
}
