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
import logo from "../../assets/branding/nuai_logo.png";
import ReactDOM from "react-dom";

interface IProps {}
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

    return <Particles options={options} init={this.customInit} />;
  }
}

const Home = () => {
  const particlesContainerProps: IProps = {};

  return (
    <div className="mainContainer">
      <ParticlesContainer {...particlesContainerProps} />
      <FadeInSection>
        <div className="innerContainer">
          <img src={logo} alt="AINU Logo" className="logo" />

          <div className="textContainer">
            <Heading className="titleBefore">AI</Heading>
            <Heading className="titleAfter">Northeastern</Heading>
          </div>
          <BodyText className="bodyText">
            Home for Northeastern AI Enthusiasts
          </BodyText>
        </div>
      </FadeInSection>
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
