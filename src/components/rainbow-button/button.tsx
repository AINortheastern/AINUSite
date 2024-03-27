// Button.js
import React, { ReactNode } from 'react';
import './button.scss'; // Import your CSS file for styling
import { BodyText } from '../body-text/BodyText';


interface ButtonProps {
    children: ReactNode;
    onClick?: Function;
  }
  
const RainbowButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="rainbowButton" onClick={onClick as () => void}><BodyText style={{color: 'RGB(225, 225, 225)'}} >{children}</BodyText></button>      
  );
}

export default RainbowButton;
