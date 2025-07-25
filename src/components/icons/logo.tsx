import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="hsl(var(--primary))"
        d="M168 40h24a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0V56h-8a8 8 0 0 1 0-16Zm-58.6 85.1-22.3 22.2a8 8 0 0 0 11.3 11.4l22.3-22.3a8 8 0 0 0-11.3-11.3ZM192 104a88 88 0 1 1-88-88 88 88 0 0 1 88 88Zm-16 0a72 72 0 1 0-72 72 72.1 72.1 0 0 0 72-72Z"
      />
      <path
        fill="hsl(var(--accent))"
        d="m150.3 114.3-36.9 36.9a8 8 0 0 1-11.3-11.3l36.9-36.9a8 8 0 0 1 11.3 11.3ZM216 88h-24a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8Z"
      />
    </svg>
  );
}
