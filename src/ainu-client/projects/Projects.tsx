import { useEffect, useState } from "react";
import { BodyText } from "../../components/body-text/BodyText";
import { Heading } from "../../components/heading/Heading";
import group from "../../assets/images/projects/20240125_192738.jpg";
import "./projects.scss";

const Projects = () => {
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
    <div className="project-container">
      <Heading className="project-title">SwarmScape</Heading>
      <BodyText className="project-body">
        SwarmScape is NUAI's First Project! SwarmScape is a project about
        creating an AI-powered Greenhouse using Swarm Robotics.
      </BodyText>
      <BodyText className="project-body">
        The inspiration for this project comes from the increased food scarcity
        in our world which is affecting more than 29% of the population.
        Greenhouse farming serves as a viable solution for this issue but comes
        with its drawbacks which we hope to solve with this project. To learn
        more about the project or keep up with the latest changes, join the
        discord channel!
      </BodyText>
      <img src={group} alt="Swarmscape 2024 Kickoff" className="about-image" />
    </div>
  );
};

export { Projects };
