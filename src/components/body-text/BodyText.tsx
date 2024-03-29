import { CSSProperties, ReactNode } from "react";
import "./body-text.scss";

interface BodyTextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties; 
}

const BodyText = ({ children, className = "", style }: BodyTextProps) => {
  return (
    <p className={`bodyText ${className}`} style={style}> {/* Applying style prop */}
    {children}
  </p>
  )
};

export { BodyText };
