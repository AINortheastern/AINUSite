import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "./home.styles.scss";

import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import { Heading } from "../../components/heading/Heading";
import "@fontsource/poppins"; // Defaults to weight 400
import { BodyText } from "../../components/body-text/BodyText";
import { About } from "../about/About";
import { Projects } from "../projects/Projects";
import { Eboard } from "../eboard/Eboard";
import logo from "../../assets/branding/aineu_header.png";
import ReactDOM from "react-dom";
import RainbowButton from "../../components/rainbow-button/button";
import { Col, Row } from "react-bootstrap";

const Home = () => {

  return (
    <div className="mainContainer">

      <div className="header">
        <img src={logo} alt="AINU Logo" className="logo" />
        <Heading className="mainSubheading"> Building Tomorrow's Intelligence Today </Heading>
        <BodyText className="secondSubheading"> Northeastern's premier artificial intelligence student organization.</BodyText>
      </div>
      <center>
        <a href="/hackathon">
          <RainbowButton> 2024 AINU x Babson Hackathon Recap</RainbowButton>
        </a>

      </center>

      <center>
        <FadeInSection>
          <Col>
            <BodyText style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '2rem' }} className="secondSubheading"> Important Links </BodyText>
            <Row xs={1} md={3}>

              <a href="https://forms.gle/sbLvQCE87BVajgm5A" style={{ textDecoration: 'none' }}>
                <Heading className="gradient1"> Mailing List </Heading>
              </a>
              <a href="https://discord.gg/CJFMC6BNyz" style={{ textDecoration: 'none' }}>
                <Heading className="gradient2"> Discord </Heading>
              </a>
              <a href="https://linktr.ee/ainortheastern" style={{ textDecoration: 'none' }}>
                <Heading className="gradient3"> LinkTree </Heading>
              </a>
            </Row>
          </Col>
        </FadeInSection>
      </center>

      <FadeInSection>
        <About />

      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Eboard />
      </FadeInSection>

    </div>
  );
};

export { Home };

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = (props) => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = useRef<HTMLElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current!);
    return () => observer.unobserve(domRef.current!);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef as React.LegacyRef<HTMLDivElement>}
    >
      {props.children}
    </div>
  );
};
