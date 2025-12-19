import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  width?: boolean;
  maxWidth?: boolean;
  fheight?: boolean;
  mobileFullWidth?: boolean;
  className?: string;
}
export default function Container({
  children,
  width,
  maxWidth,
  fheight,
  mobileFullWidth,
  className = "",
}: ContainerProps) {
  return (
    <section
      className={`${width && "width"} ${maxWidth && "max-width"} ${
        fheight && "full-height"
      } ${mobileFullWidth && "mobile_full_width"} ${className}`}
    >
      {children}
    </section>
  );
}
