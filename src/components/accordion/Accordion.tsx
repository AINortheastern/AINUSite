import React, { useState } from "react";
import { Heading } from "../heading/Heading";
import { BodyText } from "../body-text/BodyText";

import "./accordion.scss";

interface AccordionProps {
  title: String;
  content: String;
}
const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? "accordion-item-active" : "accordion-item"}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <Heading className="title-effect">{title}</Heading>
      </div>
      {isActive && <BodyText className="bodyText">{content}</BodyText>}
    </div>
  );
};

export { Accordion };
