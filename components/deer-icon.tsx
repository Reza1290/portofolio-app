import type { SVGProps } from "react";

export function DeerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M9 9.5c-1-1.2-1.3-2.7-1-4.2 1 .6 1.9 1.1 2.9 1.3" />
      <path d="M9 9.5C7.9 8.8 6.6 8.9 5.6 8.3" />
      <path d="M15 9.5c1-1.2 1.3-2.7 1-4.2-1 .6-1.9 1.1-2.9 1.3" />
      <path d="M15 9.5c1.1-.7 2.4-.6 3.4-1.2" />
      <path d="M9 9.5c-.8 1.9-.5 4 .7 5.7.8 1.2 1.4 2.5 2.3 3.3.9-.8 1.5-2.1 2.3-3.3 1.2-1.7 1.5-3.8.7-5.7-1.3-1-4.7-1-6 0Z" />
      <path d="M10.4 12h.01M13.6 12h.01" />
    </svg>
  );
}
