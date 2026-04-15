import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "vertical";
  width?: number;
  height?: number;
}

export function Logo({ className, variant = "horizontal", width, height }: LogoProps) {
  const src = variant === "horizontal" 
    ? "/logo/AcclimationLogo-Horizontal.jpg" 
    : "/logo/AcclimationLogo-Vartical.jpg";


  // Default sizes based on variant if not provided
  const defaultWidth = variant === "horizontal" ? 180 : 120;
  const defaultHeight = variant === "horizontal" ? 40 : 120;

  return (
    <Link href="/" className={cn("block", className)}>
      <Image
        src={src}
        alt="Acclimation Sports Management"
        width={width || defaultWidth}
        height={height || defaultHeight}
        className="object-contain rounded-md"

        priority
      />
    </Link>
  );
}
