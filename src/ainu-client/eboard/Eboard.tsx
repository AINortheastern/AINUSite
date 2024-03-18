import { BodyText } from "../../components/body-text/BodyText";
import { Heading } from "../../components/heading/Heading";
import "./eboard.scss";

const Eboard = () => {
  const members = [
    ["President", "Alexzander Sansiveri"],
    ["Vice President", "Charles Ciampa"],
    ["Finance", "Brandon Butler"],
    ["Marketing Head", "Vacant"],
    ["Marketing Comm. Specialist", "Vacant"],
    ["Outreach", "Kerissa Duliga"],
    ["Web Developer/Designer", "Arnav Narain"],
    ["Content Creator", "Mihalis Koutouvos"],
    ["Social Media Manager", "Reyna Singh"],
    ["Graphic Designer", "Julie Kim"],
    ["Event Coordinator", "Aarav Gambhir"],
    ["Project Lead", "Dhruv Reddy Tekulapalli"],
  ];

  return (
    <div className="eboardContainer">
      <Heading className="about-title">E-Board</Heading>
      <div className="members-list">
        {members.map((member, index) => (
          <div key={index} className="member-item">
            <Heading>{member[0]}</Heading>
            <BodyText>{member[1]}</BodyText>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Eboard };
