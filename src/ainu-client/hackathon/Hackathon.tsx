import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'flowbite-react';
import { Heading } from '../../components/heading/Heading';
import { BodyText } from '../../components/body-text/BodyText';

import group from '../../assets/images/moviemeet_1.jpg';
import group2 from '../../assets/images/2024Kickoff_1.jpg';
import group3 from '../../assets/images/2024ProjectKickoff_2.jpg';

import { Accordion } from '../../components/accordion/Accordion';

import "./hackathon.scss";
import { CountdownTimer } from '../../components/countdown/Countdown';
import Particles from 'react-tsparticles';
import React from 'react';
import { loadLinksPreset } from 'tsparticles-preset-links';
import type { Engine } from "tsparticles-engine";

interface IProps {
}
class ParticlesContainer extends React.PureComponent<IProps> {
  async customInit(engine: Engine): Promise<void> {
    await loadLinksPreset(engine);
  }

  render() {
    const options = {
      background: {
        color: "#6DA7CC",
      },
      preset: "links",
    };

    return <Particles options={options} init={this.customInit} className="links-background"/>;
  }
}


const Hackathon = () => { 
    document.title = 'AINU Spring Hackathon 2024'

      // dont ask me what this is for 
   const particlesContainerProps: IProps = {};

   type QnA = [string[], string[]];

    const data: string[][] = [
                          ['Who is this for?', 'This hackathon is for all students at Northeastern University and Babson College. No need for any prior experience in AI or Computer Science!'],
                          ['Will you provide travel reimbursement?', 'At this time, this hackathon is only opened to students from Northeastern University and Babson College, so no travel reimbursement will be provided.'],
                          [ 'Will there be awards/food/swag?', 'Yes!'],
                          [ 'Does it cost anything?', 'Admission is completely free for all eligible students.'],
                          [ 'How many people can be on my team?', 'You can form a team with 4-10 people.'],
                          [ 'Is this in person?', 'Yes, we plan on hosting the event at Northeastern University.'],
                          [ 'Who will be judging the contest?', 'There will be a panel of judges consisting of 2-3 professors from each institution.'],
                          [ 'When do applications close?', 'Applications close 11:59 PM EST on March 22nd, 2024.']
  ]
  const targetDate = new Date('2024-03-22T23:59:00');
    return (
      <div className="backgroundDiv">
            <ParticlesContainer {...particlesContainerProps}/>
      <div className="hackathonContainer">
        <Container fluid className="hackathonInnerContainer">
          <Row className="justify-content-start">
          <Col>
            <BodyText className="bodyText">March 30 - 31, 2024 @ Northeastern University</BodyText>
            <Heading className="title">AINU x Babson Hackathon</Heading>
            <BodyText className="bodyText">From Concept to Code: 30 Hours of Intense Project Development.</BodyText>
            <BodyText className="bodyText">Open to students at Northeastern University and Babson College.</BodyText>
            </Col>
          </Row>
          <Button color="dark" disabled={true} style={{margin: '1rem 0rem'}}>Applications Closed!</Button>
          <Row className="justify-content-center" style={{alignItems: 'center', textAlign: 'center', width: '100%'}}>
            <BodyText className="countdownHeading">Application closes in....</BodyText>
            <div className="countdowntimer-container">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </Row>
          <Row xs={1} md={2} lg={2}>
          <Col style={{margin: '5rem 0rem'}}>
            <Heading className="title">About</Heading>
            <BodyText className="bodyText">The AINU x Babson hackathon will be an event that brings
            together passionate, inspired, innovated, and talented students to find solutions for a variety of problems.</BodyText>
            <br></br>
            <BodyText className="bodyText">This year, we're opening up the hackathon to all enrolled college students who study in Boston!</BodyText>
          </Col>
          </Row>
          <Row xs={1} md={3}>
            <img src={group} alt="AINU Logo" className="image" />
            <img src={group2} alt="AINU Logo" className="image" />
            <img src={group3} alt="AINU Logo" className="image" />
          </Row>
          <Col className="justify-content-center" style={{margin: '5rem 0rem'}}>
            <Heading className="title">Theme</Heading>
            <BodyText className="bodyText">TBA!</BodyText>
          </Col>
          <Col className="justify-content-center" style={{margin: '5rem 0rem'}}>
            <Heading className="title">Schedule</Heading>
            <BodyText className="bodyText">The hackathon will occur over 2 days from 10:00 A.M. March 30th to 6:00 P.M. March 31st (Exact details TBA)!</BodyText>
          </Col>
          <Col className="justify-content-center" style={{margin: '5rem 0rem'}}>
            <Heading className="title">Sponsor</Heading>
            <BodyText className="bodyText">If you're interesting in sponsoring this hackathon, please email the Northeastern AI Club at aiclub.neu@gmail.com.</BodyText>
          </Col>
          <Heading className="title">FAQ</Heading>
          <Row xs={1} md={2} lg={2} className="justify-content-center">

            <Col>
            <Accordion title={data[0][0]} content={data[0][1]} />
            <Accordion title={data[1][0]} content={data[1][1]} />
          </Col>
          <Col>
          <Accordion title={data[2][0]} content={data[2][1]} />
            <Accordion title={data[3][0]} content={data[3][1]} />
          </Col>
          <Col>
            <Accordion title={data[4][0]} content={data[4][1]} />
            <Accordion title={data[5][0]} content={data[5][1]} />
          </Col>
          <Col>
            <Accordion title={data[6][0]} content={data[6][1]} />
            <Accordion title={data[7][0]} content={data[7][1]} />
          </Col>
        </Row>
        </Container>
    </div>
    </div>
    )

}

export { Hackathon }