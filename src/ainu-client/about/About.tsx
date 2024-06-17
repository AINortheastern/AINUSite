import { useEffect, useState } from "react";
import { BodyText } from "../../components/body-text/BodyText";
import { Heading } from "../../components/heading/Heading";
import group from "../../assets/images/2024Kickoff_1.jpg";
import "./about.scss";

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about-container">
      <Heading className="about-title">About AINEU</Heading>
      <BodyText className="about-body">
        The goal of AI NEU is to transform the landscape of artificial
        intelligence at Northeastern University and beyond.
      </BodyText>
      <BodyText className="about-body">
        Our mission encompasses various facets, placing a central emphasis on
        serving as a valuable resource to enhance understanding and knowledge
        about artificial intelligence.
      </BodyText>
      <img src={group} alt="AINEU 2023 Kickoff" className="about-image" />
    </div>
  );
};

export { About };
