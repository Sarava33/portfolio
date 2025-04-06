import React from "react";
import "../styles/about.css";
import FadeInSection from "./fadeinsection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    const one = (
      <p>
        I’m a R&D Engineer at <a href="https://www.quanser.com/">Quanser</a>,
        building educational bots like robotic manipulators and self-driving vehicles. My work blends 
        real-time systems, control theory, and intuitive software solutions.
        Previously, I was a DevOps Engineer at <a href="https://www.microsoft.com/">Microsoft</a>,
        working on CI/CD, infrastructure automation, and on-call operations.
      </p>
    );

    const two = (
      <p>
        Outside of work, I’m passionate about building personal projects, exploring web development, 
        and enjoy a good gaming session.
      </p>
    );

    const tech_stack = [
      "Python",
      "C++",
      "React.js",
      "JavaScript",
      "Bash scripts",
      "Azure"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`} key={i}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Mohit Saravanan" src={"/assets/m1.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
