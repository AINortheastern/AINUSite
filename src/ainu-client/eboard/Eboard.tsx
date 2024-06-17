import { BodyText } from "../../components/body-text/BodyText";
import { Heading } from "../../components/heading/Heading";
import "./eboard.scss";

import one from "../../assets/headshots/AaravGambhir.jpg";
import two from "../../assets/headshots/AlexzanderSansiveri.png";
import three from "../../assets/headshots/ArnavNarain.jpg";
import four from "../../assets/headshots/BrandonButler.jpg";
import five from "../../assets/headshots/CharlesCiampa.jpg";
import six from "../../assets/headshots/DhruvReddy.jpg";
import seven from "../../assets/headshots/JanakMunshi.png";
import eight from "../../assets/headshots/JulieKim.jpg";
import nine from "../../assets/headshots/KerissaDuliga.jpg";
import ten from "../../assets/headshots/MihalisKoutouvos.png";
import eleven from "../../assets/headshots/NaomiWiley.jpg";
import twelve from "../../assets/headshots/ReynaSingh.jpg";
import PhotoCard from "../../components/photo-card/PhotoCard";

const Eboard = () => {
  const members = [
    ["President", "Alexzander Sansiveri", two],
    ["Vice President", "Charles Ciampa", five],
    ["Finance", "Brandon Butler", four],
    ["Marketing Head", "Vacant"],
    ["Marketing Comm. Specialist", "Vacant"],
    ["Outreach", "Kerissa Duliga", nine],
    ["Web Developer/Designer", "Arnav Narain", three],
    ["Content Creator", "Mihalis Koutouvos", ten],
    ["Social Media Manager", "Reyna Singh", twelve],
    ["Graphic Designer", "Julie Kim", eight],
    ["Event Coordinator", "Aarav Gambhir", one],
    ["Project Lead", "Dhruv Reddy Tekulapalli", six],
  ];

  return (
    <div className="eboardContainer">
      <Heading className="eboard-title">E-Board</Heading>
      <div className="members-list">
        {members.map((member, index) => (
          <div key={index} className="member-item">
            <Heading style={{ color: "white" }}>{member[0]}</Heading>
            <BodyText style={{ textAlign: "center", color: "white" }}>
              {member[1]}
            </BodyText>
            <PhotoCard imageSrc={member[2]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Eboard };
