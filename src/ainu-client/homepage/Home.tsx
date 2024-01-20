import React from "react";
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
import { Footer } from 'flowbite-react';

interface IProps {
}
class ParticlesContainer extends React.PureComponent<IProps> {
  async customInit(engine: Engine): Promise<void> {
    await loadLinksPreset(engine);
  }

  render() {
    const options = {
      preset: "links",
    };

    return <Particles options={options} init={this.customInit} />;
  }
}

const Home = () => {

  // dont ask me what this is for 
  const particlesContainerProps: IProps = {};

  return (
    <>
    <div className="container">
      <ParticlesContainer {...particlesContainerProps} />
      <div className="innerContainer">
        <Heading className="title">AINU</Heading>
        <BodyText className="body">Home for Northeastern AI Enthusiasts</BodyText>
      </div>

      <About />
      <Projects />
      <Eboard />

    </div>
    </>
  );
}

export { Home } 


