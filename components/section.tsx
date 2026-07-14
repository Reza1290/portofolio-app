import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  label?: string;
};

export function Section({ id, children, className, label }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8 sm:py-32 lg:py-40",
        className,
      )}
    >
      {children}
    </section>
  );
}
