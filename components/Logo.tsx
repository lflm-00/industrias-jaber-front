import Image from "next/image";

export interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Logo Component - Renders Industrias Jaber logo
 * Used in Header, Footer, and other brand-related areas
 * 
 * Replace the SVG file at public/logos/industrias-jaber-logo.svg with your own
 */
export default function Logo({
  width = 40,
  height = 40,
  className = "",
}: LogoProps) {
  return (
    <Image
      src="/logos/industrias-jaber-logo.svg"
      alt="Industrias Jaber Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
