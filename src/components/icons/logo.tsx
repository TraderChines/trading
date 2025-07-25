import type { SVGProps } from "react";
import { LineChart } from 'lucide-react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <LineChart {...props} />
  );
}
