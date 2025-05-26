import React from "react";
import JobList from "./joblist";
import "../styles/experience.css";
import FadeInSection from "./fadeinsection";

class Experience extends React.Component {
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
    return (
      <div id="experience">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ experience</span>
          </div>
          <JobList></JobList>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
