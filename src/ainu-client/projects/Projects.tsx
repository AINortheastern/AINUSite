import { BodyText } from "../../components/body-text/BodyText";
import { Heading } from "../../components/heading/Heading";
import group from "../../assets/images/group_1.jpg"
import "./projects.scss";


const Projects = () => {
  
    return (
    <div className="projectContainer">
        <div className="text">
            <Heading className="project-title">Projects & Hackathons</Heading>
            <BodyText className="project-body">SwarmScape is NUAI's First Project! SwarmScape is a project about creating an AI-powered Greenhouse using Swarm Robotics. The inspiration for this project comes from the increased food scarcity in our world which is affecting more than 29% of the population. Greenhouse farming serves as a viable solution for this issue but comes with its drawbacks which we hope to solve with this project. To learn more about the project or keep up with the latest changes stay tuned to this channel!</BodyText>
        </div>
        <img src={group} alt="AINU Logo" className="project-image" />
    </div>
    );
  }
  
  export { Projects } 
  