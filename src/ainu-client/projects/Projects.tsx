import { BodyText } from "../../components/body-text/BodyText";
import { Heading } from "../../components/heading/Heading";
import group from "../../assets/images/group_1.jpg"
import "./projects.scss";


const Projects = () => {
  
    return (
    <div className="projectContainer">
        <div className="text">
            <Heading className="project-title">Projects & Hackathons</Heading>
            <BodyText className="project-body">Stay tuned!</BodyText>
        </div>
        <img src={group} alt="AINU Logo" className="project-image" />
    </div>
    );
  }
  
  export { Projects } 
  