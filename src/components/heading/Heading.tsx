import { ReactNode } from "react";
import "./heading.scss";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const Heading = ({ children, className = "" }: HeadingProps) => {
  return <h1 className={`headingText ${className}`}>{children}</h1>;
};

export { Heading };
