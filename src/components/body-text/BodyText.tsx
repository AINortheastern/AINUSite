import { ReactNode } from 'react';
import './body-text.scss'

interface BodyTextProps {
    children: ReactNode;
    className?: string;
  }
  

const BodyText = ({ children, className = "" }: BodyTextProps) => {
    return (
      <p className={`body ${className}`}>{children}</p>
    );
  };
  
  export { BodyText };
  