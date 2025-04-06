import React from "react";
import "../styles/intro.css";
import Typewriter from "typewriter-effect";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./fadeinsection";
import FractalTree from "./fractaltree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 75,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span style="font-family: NTR, sans-serif; font-size: 76px;">hi there, I\'m </span>')
              .typeString('<span style="font-family: NTR, sans-serif; color: var(--green-bright); font-size: 76px; font-weight: bold;"> mohit.</span>')
              .pauseFor(1000)
              .start();
          }}
        />
        <FadeInSection>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            I'm an engineer who makes robots move, code run, and occasionally break things in 
            the name of innovation. I like making tech do surprisingly cool things. 
          </div>
          <a
            href="mailto:mohitsara@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
