import { CSSProperties, ReactNode } from "react";
import "./heading.scss";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties; 
}

const Heading = ({ children, className = "", style }: HeadingProps) => {
  return <h1 className={`headingText ${className}`} style={style}>{children}</h1>;
};

export { Heading };
